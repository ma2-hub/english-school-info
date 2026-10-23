import Link from "next/link";
import { ArrowRight, BadgeCheck, Crown, Star, Wallet } from "lucide-react";
import { rankingSchools } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const medalStyles = [
  "from-warm-400 to-warm-600 text-white",
  "from-slate-300 to-slate-500 text-white",
  "from-orange-300 to-orange-600 text-white",
];

export function RankingSection() {
  return (
    <section id="ranking" className="border-b border-line/70 bg-white py-14 lg:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Editor's Ranking"
          title="編集部が選ぶ 英会話スクールランキング"
          description="料金・指導品質・サポート体制・通いやすさの4軸で比較。実際の取材と公開情報をもとに、編集部が総合評価しました。"
          action={{ label: "ランキングをすべて見る", href: "/school-ranking" }}
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {rankingSchools.map((school, index) => (
            <article
              key={school.name}
              className={`group relative flex flex-col rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                index === 0
                  ? "border-brand-200 shadow-card ring-1 ring-brand-100 lg:-mt-2 lg:mb-2"
                  : "border-line shadow-soft"
              }`}
            >
              {index === 0 && (
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500"
                />
              )}

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`grid size-9 place-items-center rounded-full bg-gradient-to-br font-display text-[13px] font-black shadow-sm ${medalStyles[index]}`}
                  >
                    {school.rank}
                  </span>
                  <div>
                    <p className="flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-brand-600">
                      {index === 0 ? <Crown className="size-3 fill-warm-400 text-warm-500" /> : null}
                      {index === 0 ? "総合ランキング 1位" : `総合ランキング ${school.rank}位`}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium text-muted">{school.category}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-warm-50 px-2 py-1 text-[10px] font-bold text-warm-600">
                  <Star className="size-3 fill-warm-400 text-warm-400" />
                  {school.score}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="font-display text-[19px] font-black leading-tight tracking-tight text-ink">
                  {school.name}
                </h3>
                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-muted/80">
                  {school.nameEn}
                </p>
                <p className="mt-3 min-h-10 text-[12px] leading-[1.8] text-ink-soft">{school.copy}</p>
              </div>

              <ul className="mt-3.5 flex flex-wrap gap-1.5">
                {school.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-1 rounded-md bg-accent-50 px-2 py-1 text-[10px] font-semibold text-accent-700"
                  >
                    <BadgeCheck className="size-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-end justify-between gap-3 border-t border-line/80 pt-4">
                <div>
                  <p className="flex items-center gap-1 text-[9.5px] font-medium text-muted">
                    <Wallet className="size-3" />
                    料金目安（税込）
                  </p>
                  <p className="mt-1 font-display text-[15px] font-black text-ink">{school.price}</p>
                </div>
                <p className="text-right text-[9.5px] leading-relaxed text-muted">
                  口コミ
                  <br />
                  <span className="font-bold text-ink">{school.reviews}件</span>
                </p>
              </div>

              <Link
                href={`/school/${school.nameEn.toLowerCase().replace(/\s+/g, "-")}`}
                className={`mt-4 flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[12px] font-bold transition-colors ${
                  index === 0
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "bg-canvas text-ink-soft hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                詳細・口コミを見る
                <ArrowRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-xl bg-canvas px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10.5px] leading-relaxed text-muted">
            ※ 料金は2026年6月時点の公開情報をもとに編集部が算出した目安です。最新の料金・キャンペーンは各スクール公式サイトをご確認ください。
          </p>
          <Link
            href="/about#criteria"
            className="group flex shrink-0 items-center gap-1 text-[10.5px] font-bold text-brand-600 hover:text-brand-800"
          >
            評価基準を詳しく見る
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
