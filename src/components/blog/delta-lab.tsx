"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const N = 64; // lado de la rejilla; el SUVI real son 1280, acá basta con esto
const CX = (N - 1) / 2;
const CY = (N - 1) / 2;
const R_SUN = N * 0.32;

/** PRNG determinista: así el "sol" es siempre el mismo y la demo es reproducible. */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Ruido gaussiano por Box-Muller, que es lo que más se parece al ruido térmico. */
function gauss(rnd: () => number) {
  const u = Math.max(rnd(), 1e-9);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rnd());
}

type Region = { x: number; y: number; r: number; amp: number };

/** Un sol sintético: disco con oscurecimiento hacia el limbo + regiones activas. */
function renderSol(regiones: Region[], seed: number, sigmaRuido: number) {
  const rnd = mulberry32(seed);
  const buf = new Float32Array(N * N);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const d = Math.hypot(x - CX, y - CY);
      let v = 0;
      if (d < R_SUN) {
        // limb darkening: el borde del disco se ve más apagado que el centro
        v = 0.55 + 0.3 * Math.sqrt(Math.max(1 - (d / R_SUN) ** 2, 0));
      } else if (d < R_SUN * 1.25) {
        // corona: cae rápido pero no es cero
        v = 0.22 * Math.exp(-(d - R_SUN) / 2.2);
      }
      for (const reg of regiones) {
        const dr = Math.hypot(x - reg.x, y - reg.y);
        v += reg.amp * Math.exp(-(dr * dr) / (2 * reg.r * reg.r));
      }
      // El ruido del sensor está en TODA la imagen, incluso en el espacio vacío
      v += gauss(rnd) * sigmaRuido;
      buf[y * N + x] = Math.min(Math.max(v, 0), 1);
    }
  }
  return buf;
}

function dentroDeMascara(x: number, y: number) {
  return Math.hypot(x - CX, y - CY) <= 1.25 * R_SUN;
}

function pintarSol(canvas: HTMLCanvasElement | null, buf: Float32Array) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const img = ctx.createImageData(N, N);
  for (let i = 0; i < N * N; i++) {
    const v = buf[i];
    // paleta tipo SUVI 171 Å: del negro al dorado
    img.data[i * 4 + 0] = Math.min(255, v * 300);
    img.data[i * 4 + 1] = Math.min(255, v * 215);
    img.data[i * 4 + 2] = Math.min(255, v * 120);
    img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
}

function pintarDelta(
  canvas: HTMLCanvasElement | null,
  delta: Int32Array,
  escala: number,
) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const img = ctx.createImageData(N, N);
  for (let i = 0; i < N * N; i++) {
    const d = delta[i];
    if (d === 0) {
      img.data[i * 4 + 3] = 0; // los ceros quedan transparentes: es "lo que no guardamos"
      continue;
    }
    const mag = Math.min(Math.abs(d) / escala, 1);
    if (d > 0) {
      img.data[i * 4 + 0] = 16;
      img.data[i * 4 + 1] = 185;
      img.data[i * 4 + 2] = 129; // se puso más brillante
    } else {
      img.data[i * 4 + 0] = 129;
      img.data[i * 4 + 1] = 90;
      img.data[i * 4 + 2] = 245; // se apagó
    }
    img.data[i * 4 + 3] = 60 + mag * 195;
  }
  ctx.putImageData(img, 0, 0);
}

function Lienzo({
  titulo,
  pie,
  refCanvas,
  transparente,
}: {
  titulo: string;
  pie: string;
  refCanvas: React.RefObject<HTMLCanvasElement>;
  transparente?: boolean;
}) {
  return (
    <figure className="m-0">
      <canvas
        ref={refCanvas}
        width={N}
        height={N}
        className={`aspect-square w-full rounded-lg border border-border ${
          transparente ? "bg-muted" : "bg-black"
        }`}
        style={{ imageRendering: "pixelated" }}
      />
      <figcaption className="mt-1.5 text-[11px] leading-tight">
        <span className="font-medium">{titulo}</span>
        <span className="block text-muted-foreground">{pie}</span>
      </figcaption>
    </figure>
  );
}

/**
 * El laboratorio: dos fotogramas consecutivos y el delta entre ellos.
 * Toda la tesis del post cabe acá: casi todo lo que "cambia" es ruido, y en
 * cuanto lo mandás a cero el archivo se desinfla.
 */
export default function DeltaLab() {
  const [epsilon, setEpsilon] = useState(0.02);
  const [mascara, setMascara] = useState(true);
  const [bits, setBits] = useState<8 | 16>(8);

  const c1 = useRef<HTMLCanvasElement>(null);
  const c2 = useRef<HTMLCanvasElement>(null);
  const cd = useRef<HTMLCanvasElement>(null);

  const sigmaRuido = 0.009; // ~0.9% del rango: ruido térmico + rayos cósmicos

  // Los dos fotogramas se calculan una sola vez: no dependen de los controles.
  const { f1, f2 } = useMemo(() => {
    const base: Region[] = [
      { x: 26, y: 27, r: 3.0, amp: 0.3 },
      { x: 38, y: 36, r: 2.2, amp: 0.22 },
      { x: 33, y: 22, r: 1.6, amp: 0.15 },
    ];
    // 4 minutos después: una región activa se enciende y aparece una llamarada
    const despues: Region[] = [
      { x: 26, y: 27, r: 3.0, amp: 0.3 },
      { x: 38.6, y: 36.2, r: 2.4, amp: 0.34 },
      { x: 33, y: 22, r: 1.6, amp: 0.15 },
      { x: 42, y: 30, r: 1.4, amp: 0.2 },
    ];
    return {
      f1: renderSol(base, 12345, sigmaRuido),
      f2: renderSol(despues, 98765, sigmaRuido),
    };
  }, []);

  const rangoMax = bits === 8 ? 255 : 32767;

  const { delta, ceros, bytesCrudos, bytesEstimados } = useMemo(() => {
    const delta = new Int32Array(N * N);
    const umbral = epsilon * rangoMax;
    let ceros = 0;
    let sumaBits = 0;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const i = y * N + x;
        if (mascara && !dentroDeMascara(x, y)) {
          delta[i] = 0;
          ceros++;
          continue;
        }
        const a = Math.round(f1[i] * rangoMax);
        const b = Math.round(f2[i] * rangoMax);
        let d = b - a;
        if (Math.abs(d) < umbral) d = 0;
        delta[i] = d;
        if (d === 0) ceros++;
        else sumaBits += Math.ceil(Math.log2(Math.abs(d) + 1)) + 2;
      }
    }

    // Estimación grosera de lo que haría zstd: los ceros consecutivos se van
    // casi gratis y los no-ceros pagan más o menos su entropía.
    const bytesCrudos = (N * N * bits) / 8;
    const bytesEstimados = Math.max(
      64,
      Math.round(sumaBits / 8 + (ceros / N) * 1.5 + 48),
    );
    return { delta, ceros, bytesCrudos, bytesEstimados };
  }, [f1, f2, epsilon, mascara, rangoMax, bits]);

  useEffect(() => {
    pintarSol(c1.current, f1);
    pintarSol(c2.current, f2);
  }, [f1, f2]);

  useEffect(() => {
    pintarDelta(cd.current, delta, rangoMax * 0.08);
  }, [delta, rangoMax]);

  const pctCeros = (ceros / (N * N)) * 100;
  const ahorro = (1 - bytesEstimados / bytesCrudos) * 100;

  return (
    <div className="not-prose my-8 rounded-xl border border-border bg-muted/30 p-4 sm:p-5">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Laboratorio de delta encoding
      </p>
      <p className="mb-4 text-sm text-muted-foreground">
        Dos tomas del mismo sol separadas por 4 minutos. A la derecha, lo único
        que llegaríamos a escribir en disco.
      </p>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <Lienzo refCanvas={c1} titulo="I₀ — keyframe" pie="La foto completa" />
        <Lienzo refCanvas={c2} titulo="I₁ — 4 min después" pie="Casi idéntica" />
        <Lienzo
          refCanvas={cd}
          titulo="Δ = I₁ − I₀"
          pie="Verde: subió. Violeta: bajó. Vacío: cero"
          transparente
        />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <label className="block text-xs">
          <span className="mb-1 flex justify-between">
            <span className="font-medium">noise_threshold (ε)</span>
            <span className="font-mono tabular-nums text-muted-foreground">
              {(epsilon * 100).toFixed(2)}%
            </span>
          </span>
          <input
            type="range"
            min={0}
            max={0.05}
            step={0.0025}
            value={epsilon}
            onChange={(e) => setEpsilon(Number(e.target.value))}
            className="w-full accent-foreground"
          />
        </label>

        <div className="text-xs">
          <span className="mb-1 block font-medium">quantization</span>
          <div className="flex gap-2">
            {([8, 16] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBits(b)}
                className={`flex-1 rounded-md border px-2 py-1.5 transition-colors ${
                  bits === b
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background/60 hover:bg-muted"
                }`}
              >
                {b === 8 ? "UINT8" : "INT16"}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs">
          <span className="mb-1 block font-medium">apply_mask</span>
          <button
            type="button"
            onClick={() => setMascara((m) => !m)}
            className={`w-full rounded-md border px-2 py-1.5 transition-colors ${
              mascara
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background/60 hover:bg-muted"
            }`}
          >
            {mascara ? "Máscara activa" : "Sin máscara"}
          </button>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
        <div>
          <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
            Píxeles en cero
          </dt>
          <dd className="font-mono text-lg tabular-nums">
            {pctCeros.toFixed(1)}%
          </dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
            Bloque estimado
          </dt>
          <dd className="font-mono text-lg tabular-nums">
            {(bytesEstimados / 1024).toFixed(2)} KB
          </dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
            Ahorro vs. foto entera
          </dt>
          <dd className="font-mono text-lg tabular-nums">
            {ahorro.toFixed(1)}%
          </dd>
        </div>
      </dl>

      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
        Poné ε en 0% y mirá el delta: la imagen entera hormiguea aunque el sol no
        se haya movido. Eso es el ruido del sensor, y es exactamente lo que hace
        que gzip se rinda. Subilo a 2% y casi todo se apaga menos las regiones
        activas, que es justo la información que nos importa.{" "}
        <em>
          Los bytes son una estimación con un modelo simplificado de zstd, no una
          medición.
        </em>
      </p>
    </div>
  );
}
