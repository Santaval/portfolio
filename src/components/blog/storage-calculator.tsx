"use client";

import { useMemo, useState } from "react";

/** Ahorros medios de cada perfil (ver la sección de perfiles). */
const AHORRO_A = 0.75;
const AHORRO_B = 0.94;

function Barra({
  label,
  tb,
  max,
  color,
  nota,
}: {
  label: string;
  tb: number;
  max: number;
  color: string;
  nota: string;
}) {
  const pct = max > 0 ? Math.max((tb / max) * 100, 0.6) : 0;
  return (
    <div className="mb-3 last:mb-0">
      <div className="mb-1 flex items-baseline justify-between gap-3 text-xs">
        <span className="font-medium">{label}</span>
        <span className="font-mono tabular-nums">
          {tb < 1 ? `${(tb * 1024).toFixed(0)} GB` : `${tb.toFixed(2)} TB`}
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full ${color} transition-all duration-300`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{nota}</p>
    </div>
  );
}

/**
 * La cuenta de la servilleta, pero editable. Sirve para que el lector confirme
 * de dónde salen los ~2.36 TB/año y vea qué pasa si sube la cadencia.
 */
export default function StorageCalculator() {
  const [cadencia, setCadencia] = useState(2.5); // minutos entre tomas
  const [canales, setCanales] = useState(6);
  const [anios, setAnios] = useState(1);
  // 1.96 MB = FITS tal como lo sirve la NOAA (con compresión Rice).
  // Expandido a 16 bits crudos son ~3.3 MB, y con extensiones hasta 6.5 MB.
  const [mbToma, setMbToma] = useState(1.96);

  const { crudoTB, perfilATB, perfilBTB, tomasAnio } = useMemo(() => {
    const tomasAnio = (525600 / cadencia) * canales;
    const crudoTB = (tomasAnio * mbToma * anios) / 1_048_576;
    return {
      tomasAnio,
      crudoTB,
      perfilATB: crudoTB * (1 - AHORRO_A),
      perfilBTB: crudoTB * (1 - AHORRO_B),
    };
  }, [cadencia, canales, anios, mbToma]);

  return (
    <div className="not-prose my-8 rounded-xl border border-border bg-muted/30 p-4 sm:p-5">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Calculadora de almacenamiento
      </p>
      <p className="mb-4 text-sm text-muted-foreground">
        Movéle a los controles y mirá cómo cambia la factura del disco.
      </p>

      <div className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block text-xs">
          <span className="mb-1 flex justify-between">
            <span className="font-medium">Cadencia</span>
            <span className="font-mono tabular-nums text-muted-foreground">
              {cadencia.toFixed(1)} min
            </span>
          </span>
          <input
            type="range"
            min={0.5}
            max={15}
            step={0.5}
            value={cadencia}
            onChange={(e) => setCadencia(Number(e.target.value))}
            className="w-full accent-foreground"
          />
        </label>

        <label className="block text-xs">
          <span className="mb-1 flex justify-between">
            <span className="font-medium">Canales</span>
            <span className="font-mono tabular-nums text-muted-foreground">
              {canales}
            </span>
          </span>
          <input
            type="range"
            min={1}
            max={6}
            step={1}
            value={canales}
            onChange={(e) => setCanales(Number(e.target.value))}
            className="w-full accent-foreground"
          />
        </label>

        <label className="block text-xs">
          <span className="mb-1 flex justify-between">
            <span className="font-medium">Retención</span>
            <span className="font-mono tabular-nums text-muted-foreground">
              {anios} {anios === 1 ? "año" : "años"}
            </span>
          </span>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={anios}
            onChange={(e) => setAnios(Number(e.target.value))}
            className="w-full accent-foreground"
          />
        </label>

        <label className="block text-xs">
          <span className="mb-1 flex justify-between">
            <span className="font-medium">Peso por toma</span>
            <span className="font-mono tabular-nums text-muted-foreground">
              {mbToma.toFixed(2)} MB
            </span>
          </span>
          <input
            type="range"
            min={1.5}
            max={6.5}
            step={0.05}
            value={mbToma}
            onChange={(e) => setMbToma(Number(e.target.value))}
            className="w-full accent-foreground"
          />
        </label>
      </div>

      <Barra
        label="FITS crudo (lo que nos manda la NOAA)"
        tb={crudoTB}
        max={crudoTB}
        color="bg-red-500/70"
        nota={`${(tomasAnio / 1000).toFixed(0)}k tomas al año × ${mbToma.toFixed(2)} MB`}
      />
      <Barra
        label="Perfil A — retención científica"
        tb={perfilATB}
        max={crudoTB}
        color="bg-amber-500/70"
        nota="INT16 sin pérdida, sin máscara. Ahorro ~75%"
      />
      <Barra
        label="Perfil B — visualizador web"
        tb={perfilBTB}
        max={crudoTB}
        color="bg-emerald-500/70"
        nota="UINT8, gate al 2%, con máscara. Ahorro ~94%"
      />

      <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
        Con la configuración por defecto pasamos de{" "}
        <strong className="font-medium text-foreground">
          {crudoTB.toFixed(2)} TB
        </strong>{" "}
        a{" "}
        <strong className="font-medium text-foreground">
          {perfilBTB < 1
            ? `${(perfilBTB * 1024).toFixed(0)} GB`
            : `${perfilBTB.toFixed(2)} TB`}
        </strong>
        . Eso es la diferencia entre pedir presupuesto y no pedirlo.
      </p>
    </div>
  );
}
