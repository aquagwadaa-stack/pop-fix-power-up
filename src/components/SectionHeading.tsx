import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const muted = tone === "light" ? "text-white/70" : "text-pop-warm-2";
  const heading = tone === "light" ? "text-pop-cream" : "text-pop-black";
  return (
    <div
      className={`flex flex-col gap-4 max-w-2xl ${align === "center" ? "mx-auto text-center items-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-pop-red text-[11px] uppercase tracking-[0.18em] font-semibold">
          <span className="size-1.5 rounded-full bg-pop-red" /> {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-semibold leading-[1.05] text-balance ${heading}`}
      >
        {title} {accent && <span className="text-pop-red">{accent}</span>}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed text-pretty ${muted}`}>{description}</p>
      )}
    </div>
  );
}
