import Link from "next/link";
import { BookOpen } from "lucide-react";

type LogoProps = {
  href?: string;
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ href = "/", inverted = false, compact = false }: LogoProps) {
  return (
    <Link href={href} className="group flex items-center gap-2.5" aria-label="英語学校しらべ トップページ">
      <span className="relative grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 shadow-[0_8px_20px_-8px_rgba(19,77,128,0.8)] transition-transform duration-300 group-hover:-rotate-3">
        <BookOpen className="size-6 text-white" strokeWidth={2.1} />
        <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-warm-400 text-[10px] font-black text-ink shadow-sm">
          A
        </span>
      </span>
      <span className="leading-none">
        <span
          className={`block whitespace-nowrap font-display text-[19px] font-black leading-tight tracking-tight ${
            inverted ? "text-white" : "text-ink"
          }`}
        >
          英語学校しらべ
        </span>
        {!compact && (
          <span
            className={`mt-1 block whitespace-nowrap text-[9px] font-bold uppercase leading-none tracking-[0.22em] ${
              inverted ? "text-white/50" : "text-muted"
            }`}
          >
            English School Guide
          </span>
        )}
      </span>
    </Link>
  );
}
