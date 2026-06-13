import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${align === "center" ? "mx-auto text-center items-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-pop-red/10 border border-pop-red/30 text-pop-red text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
          <span className="size-1.5 bg-pop-red animate-pulse-dot" /> {eyebrow}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-[-0.03em] leading-[0.92] text-balance">
        {title}{" "}
        {accent && <span className="text-pop-red">{accent}</span>}
      </h2>
      {description && <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-pretty">{description}</p>}
    </div>
  );
}
