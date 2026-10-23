import Link from "next/link";
import {
  ArrowUpRight,
  Baby,
  Compass,
  Flower2,
  GraduationCap,
  Monitor,
  Plane,
  RefreshCw,
  School,
  Sprout,
  Target,
  Trophy,
  UserRound,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const purposes = [
  { label: "英会話ランキング", en: "Ranking", href: "/school-ranking", icon: Trophy, tone: "amber" },
  { label: "基礎英語・やり直し", en: "Restart", href: "/basic-english", icon: RefreshCw, tone: "blue" },
  { label: "TOEFL対策", en: "TOEFL", href: "/toefl", icon: GraduationCap, tone: "green" },
  { label: "TOEIC対策", en: "TOEIC", href: "/toeic", icon: Target, tone: "coral" },
  { label: "初心者向け", en: "Beginner", href: "/beginner", icon: Sprout, tone: "green" },
  { label: "オンライン講座", en: "Online", href: "/online-eikaiwa", icon: Monitor, tone: "blue" },
  { label: "英語コーチング", en: "Coaching", href: "/coaching-school", icon: Compass, tone: "amber" },
  { label: "マンツーマン", en: "Private", href: "/private-lesson", icon: UserRound, tone: "coral" },
  { label: "女性向けスクール", en: "For Women", href: "/women", icon: Flower2, tone: "coral" },
  { label: "子供英語", en: "For Kids", href: "/children", icon: Baby, tone: "amber" },
  { label: "語学留学", en: "Study Abroad", href: "/study-abroad", icon: Plane, tone: "blue" },
  { label: "英語で学べる大学", en: "University", href: "/university", icon: School, tone: "green" },
] as const;

const tones: Record<string, string> = {
  amber: "bg-warm-50 text-warm-600 group-hover:bg-warm-100",
  blue: "bg-brand-50 text-brand-600 group-hover:bg-brand-100",
  green: "bg-accent-50 text-accent-600 group-hover:bg-accent-100",
  coral: "bg-coral-50 text-coral-600 group-hover:bg-coral-100",
};

export function PurposeSection() {
  return (
    <section id="purpose" className="relative overflow-hidden border-b border-line/70 bg-brand-50/50 py-14 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(#c9dff2_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
      />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Find by Purpose"
          title="目的別・ランキングで探す"
          description="「何のために英語を学ぶか」から探せるのが、いちばんの近道。12の目的別に、編集部おすすめの学校と記事をまとめています。"
          action={{ label: "目的別ランキング一覧", href: "/school-ranking" }}
        />

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {purposes.map((purpose) => {
            const Icon = purpose.icon;
            return (
              <Link
                key={purpose.label}
                href={purpose.href}
                className="group flex flex-col items-start gap-2 rounded-xl border border-white bg-white/85 p-3 shadow-[0_1px_2px_rgba(18,40,60,0.03)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-soft sm:flex-row sm:items-center sm:gap-3"
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl transition-colors ${tones[purpose.tone]}`}
                >
                  <Icon className="size-[18px]" strokeWidth={1.9} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[12px] font-bold leading-[1.4] text-ink">
                    {purpose.label}
                  </span>
                  <span className="mt-1 block whitespace-nowrap text-[8.5px] font-bold uppercase tracking-[0.12em] text-muted/70">
                    {purpose.en}
                  </span>
                </span>
                <ArrowUpRight className="hidden size-3.5 shrink-0 text-muted/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500 sm:block" />
              </Link>
            );
          })}
        </div>

        <p className="mt-5 flex items-center justify-center gap-1.5 text-[10.5px] text-muted">
          <span className="grid size-4 place-items-center rounded-full bg-white text-[8px] font-bold text-brand-600 shadow-sm">
            ✓
          </span>
          すべてのスクールを編集部が同一基準で比較しています
        </p>
      </div>
    </section>
  );
}
