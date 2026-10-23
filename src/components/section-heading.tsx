import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  inverted = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${
        centered ? "sm:flex-col sm:items-center sm:text-center" : ""
      }`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        <p
          className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] ${
            inverted ? "text-brand-200" : "text-brand-500"
          } ${centered ? "justify-center" : ""}`}
        >
          <span className={`h-px w-6 ${inverted ? "bg-brand-300/60" : "bg-brand-300"}`} />
          {eyebrow}
        </p>
        <h2
          className={`mt-2.5 font-display text-[clamp(1.35rem,2.6vw,1.85rem)] font-black leading-[1.4] tracking-tight ${
            inverted ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-2.5 text-[12.5px] leading-[1.9] ${
              inverted ? "text-white/65" : "text-muted"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className={`group inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border px-4 py-2 text-[11.5px] font-bold transition-all sm:self-auto ${
            inverted
              ? "border-white/20 text-white/80 hover:border-white/40 hover:text-white"
              : "border-line bg-white text-ink-soft hover:border-brand-300 hover:text-brand-700"
          }`}
        >
          {action.label}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
