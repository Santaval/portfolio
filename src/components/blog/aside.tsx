import { cn } from "@/lib/utils";
import React from "react";

/**
 * Nota al margen. No es interactiva: solo separa las digresiones del hilo
 * principal para que el texto se pueda leer de corrido sin perderse.
 */
export function Aside({
  title,
  tone = "info",
  children,
}: {
  title?: string;
  tone?: "info" | "warn";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "not-prose my-6 rounded-lg border-l-4 bg-muted/40 px-4 py-3 text-sm leading-relaxed",
        tone === "warn"
          ? "border-l-amber-500/80"
          : "border-l-primary/40",
      )}
    >
      {title ? (
        <p className="mb-1 font-medium tracking-tight">
          {tone === "warn" ? "⚠️ " : "💡 "}
          {title}
        </p>
      ) : null}
      <div className="space-y-2 text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-xs">
        {children}
      </div>
    </div>
  );
}

/**
 * Digresión profunda, colapsada por defecto: el que quiera el detalle lo abre,
 * el que venga por la idea general sigue de largo.
 */
export function Detalle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="not-prose group my-6 rounded-lg border border-border bg-background/50 px-4 py-3 text-sm">
      <summary className="cursor-pointer list-none font-medium tracking-tight marker:content-none">
        <span className="mr-2 inline-block transition-transform group-open:rotate-90">
          ▸
        </span>
        {title}
      </summary>
      <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-xs">
        {children}
      </div>
    </details>
  );
}
