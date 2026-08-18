"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type Opcion = {
  text: string;
  correct?: boolean;
  /** Por qué esa opción está bien o mal. Esto es lo que realmente enseña. */
  why: string;
};

/**
 * Pregunta de una sola respuesta. No lleva puntaje ni racha a propósito:
 * la gracia no es acertar, es leer el "por qué" de la opción que elegiste.
 */
export default function Quiz({
  question,
  options,
}: {
  question: string;
  options: Opcion[];
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;

  return (
    <div className="not-prose my-8 rounded-xl border border-border bg-muted/30 p-4 sm:p-5">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Ponete a prueba
      </p>
      <p className="mb-4 font-medium leading-snug tracking-tight">{question}</p>

      <div className="flex flex-col gap-2">
        {options.map((opt, i) => {
          const isPicked = picked === i;
          const reveal = answered && (isPicked || opt.correct);
          return (
            <button
              key={i}
              type="button"
              onClick={() => setPicked(isPicked ? null : i)}
              className={cn(
                "rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                reveal && opt.correct && "border-emerald-500/60 bg-emerald-500/10",
                reveal && isPicked && !opt.correct && "border-red-500/60 bg-red-500/10",
                !reveal && "border-border bg-background/60",
              )}
            >
              <span className="flex items-start gap-2">
                <span className="mt-[1px] font-mono text-xs text-muted-foreground">
                  {String.fromCharCode(97 + i)})
                </span>
                <span className="flex-1">
                  <span className={cn(isPicked && "font-medium")}>{opt.text}</span>
                  {reveal ? (
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                      {opt.correct ? "✓ " : "✗ "}
                      {opt.why}
                    </span>
                  ) : null}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {answered ? (
        <p className="mt-3 text-xs text-muted-foreground">
          Tocá de nuevo tu respuesta para volver a esconder las explicaciones.
        </p>
      ) : null}
    </div>
  );
}
