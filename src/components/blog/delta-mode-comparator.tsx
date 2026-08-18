"use client";

import { useState } from "react";

const FRAMES = 13; // I0 + 12 deltas

type Modo = "ABSOLUTE" | "CUMULATIVE";

function Timeline({
  modo,
  objetivo,
  onPick,
}: {
  modo: Modo;
  objetivo: number;
  onPick: (i: number) => void;
}) {
  const necesarios = (i: number) => {
    if (i === 0) return true;
    if (modo === "ABSOLUTE") return i === objetivo;
    return i <= objetivo;
  };

  return (
    <div className="flex flex-wrap gap-1">
      {Array.from({ length: FRAMES }, (_, i) => {
        const usado = necesarios(i) && (i <= objetivo || i === 0);
        const esObjetivo = i === objetivo;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onPick(i)}
            title={i === 0 ? "Keyframe I₀" : `Delta Δ${i}`}
            className={`h-9 w-9 rounded-md border font-mono text-[11px] transition-colors ${
              i === 0
                ? "border-amber-500/70 bg-amber-500/20 font-bold"
                : usado
                  ? "border-emerald-500/60 bg-emerald-500/20"
                  : "border-border bg-background/60 text-muted-foreground hover:bg-muted"
            } ${esObjetivo ? "ring-2 ring-foreground ring-offset-1 ring-offset-background" : ""}`}
          >
            {i === 0 ? "I₀" : i}
          </button>
        );
      })}
    </div>
  );
}

/**
 * ABSOLUTE vs CUMULATIVE, lado a lado. Elegís un fotograma y ves literalmente
 * cuántos bloques hay que leer del disco para reconstruirlo en cada modo.
 */
export default function DeltaModeComparator() {
  const [objetivo, setObjetivo] = useState(9);

  const lecturasAbs = objetivo === 0 ? 1 : 2;
  const lecturasCum = objetivo + 1;

  return (
    <div className="not-prose my-8 rounded-xl border border-border bg-muted/30 p-4 sm:p-5">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        ABSOLUTE vs CUMULATIVE
      </p>
      <p className="mb-4 text-sm text-muted-foreground">
        Hacé clic en el fotograma que querés ver (como si arrastraras la barra de
        tiempo del visualizador). Verde = bloques que hay que leer y descomprimir.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-sm font-medium">ABSOLUTE</span>
            <span className="font-mono text-xs text-muted-foreground">
              Δₜ = Iₜ − I₀
            </span>
          </div>
          <Timeline modo="ABSOLUTE" objetivo={objetivo} onPick={setObjetivo} />
          <p className="mt-2 font-mono text-sm tabular-nums">
            {lecturasAbs} {lecturasAbs === 1 ? "lectura" : "lecturas"}{" "}
            <span className="text-xs text-muted-foreground">— O(1)</span>
          </p>
        </div>

        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-sm font-medium">CUMULATIVE</span>
            <span className="font-mono text-xs text-muted-foreground">
              Δₜ = Iₜ − Iₜ₋₁
            </span>
          </div>
          <Timeline modo="CUMULATIVE" objetivo={objetivo} onPick={setObjetivo} />
          <p className="mt-2 font-mono text-sm tabular-nums">
            {lecturasCum} {lecturasCum === 1 ? "lectura" : "lecturas"}{" "}
            <span className="text-xs text-muted-foreground">— O(t)</span>
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground sm:grid-cols-2">
        <p>
          <strong className="font-medium text-foreground">ABSOLUTE:</strong>{" "}
          cada delta se compara siempre contra el mismo keyframe. Saltar al
          fotograma {objetivo} cuesta lo mismo que saltar al 1. La contra: cuanto
          más lejos del keyframe, más cosas han cambiado y más gordo el delta.
        </p>
        <p>
          <strong className="font-medium text-foreground">CUMULATIVE:</strong>{" "}
          cada delta es minúsculo porque solo compara con el vecino anterior,
          pero para ver el fotograma {objetivo} hay que ir sumando{" "}
          {lecturasCum} bloques en cadena. Y si uno se corrompe, se lleva puestos
          todos los que siguen.
        </p>
      </div>
    </div>
  );
}
