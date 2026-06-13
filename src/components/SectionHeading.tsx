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
    <div
      className={`flex flex-col gap-4 max-w-3xl ${align === "center" ? "mx-auto text-center items-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-pop-red text-xs uppercase tracking-[0.16em] font-bold">
          <span className="h-px w-8 bg-pop-red" /> {eyebrow}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-[-0.035em] leading-[0.96] text-balance">
        {title} {accent && <span className="text-pop-red">{accent}</span>}
      </h2>
      {description && (
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
