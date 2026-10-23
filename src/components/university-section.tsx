"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Info, MapPin, TrendingUp } from "lucide-react";
import { prefectureRankings } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const medalStyles = [
  "bg-gradient-to-br from-warm-300 to-warm-500 text-white shadow-sm",
  "bg-gradient-to-br from-slate-200 to-slate-400 text-white shadow-sm",
  "bg-gradient-to-br from-orange-200 to-orange-400 text-white shadow-sm",
];

const relatedLinks = [
  { label: "英語が学べる大学一覧", href: "/university" },
  { label: "帰国子女枠・帰国生入試", href: "/returnees" },
  { label: "東京の英語塾", href: "/eigo-juku/tokyo" },
  { label: "横浜の英語塾", href: "/eigo-juku/yokohama" },
  { label: "千葉の英語塾", href: "/eigo-juku/chiba" },
];

export function UniversitySection() {
  const [activeId, setActiveId] = useState(prefectureRankings[0].id);
  const active = prefectureRankings.find((item) => item.id === activeId) ?? prefectureRankings[0];

  return (
    <section id="university" className="border-b border-line/70 bg-white py-14 lg:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="University Ranking"
          title="英語が学べる大学 偏差値一覧"
          description="英語を専門的に学べる学部・学科を、主要4エリアの偏差値順にまとめました。志望校選びの参考にしてください。"
          action={{ label: "大学一覧をすべて見る", href: "/university" }}
        />

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
          <div className="flex flex-col gap-3 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div role="tablist" aria-label="エリアの切り替え" className="no-scrollbar flex gap-1 overflow-x-auto">
              {prefectureRankings.map((prefecture) => (
                <button
                  key={prefecture.id}
                  type="button"
                  role="tab"
                  id={`pref-tab-${prefecture.id}`}
                  aria-selected={activeId === prefecture.id}
                  aria-controls="university-panel"
                  onClick={() => setActiveId(prefecture.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11.5px] font-bold transition-all ${
                    activeId === prefecture.id
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-line bg-white text-ink-soft hover:border-brand-200 hover:text-brand-700"
                  }`}
                >
                  <MapPin className="size-3" />
                  {prefecture.label}
                </button>
              ))}
            </div>
            <p className="flex items-center gap-1.5 text-[9.5px] text-muted">
              <Info className="size-3 text-brand-500" />
              偏差値は編集部調べ（2026年度入試）
            </p>
          </div>

          <div id="university-panel" role="tabpanel" aria-labelledby={`pref-tab-${active.id}`}>
            <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <caption className="sr-only">{active.label}の英語が学べる大学偏差値一覧</caption>
              <thead>
                <tr className="bg-canvas/70 text-[9.5px] font-bold tracking-[0.1em] text-muted">
                  <th scope="col" className="w-20 px-5 py-2.5 font-bold">順位</th>
                  <th scope="col" className="px-3 py-2.5 font-bold">大学</th>
                  <th scope="col" className="px-3 py-2.5 font-bold">学部・学科</th>
                  <th scope="col" className="w-24 px-5 py-2.5 text-right font-bold">偏差値</th>
                </tr>
              </thead>
              <tbody>
                {active.universities.map((university) => {
                  const rowSpan = university.secondFaculty ? 2 : 1;
                  return (
                    <Fragment key={university.name}>
                      <tr className="border-t border-line/80">
                        <td rowSpan={rowSpan} className="px-5 py-3.5 align-middle">
                          <span
                            className={`grid size-7 place-items-center rounded-full font-display text-[11px] font-black ${
                              university.rank <= 3
                                ? medalStyles[university.rank - 1]
                                : "bg-canvas text-muted"
                            }`}
                          >
                            {university.rank}
                          </span>
                        </td>
                        <td rowSpan={rowSpan} className="px-3 py-3.5 align-middle">
                          <p className="font-display text-[13.5px] font-bold leading-tight text-ink">
                            {university.name}
                          </p>
                        </td>
                        <td className="px-3 pb-1.5 pt-3.5 text-[11.5px] leading-snug text-ink-soft">
                          {university.faculty}
                        </td>
                        <td className="px-5 pb-1.5 pt-3.5 text-right">
                          <span className="inline-flex min-w-9 items-center justify-center rounded-md bg-brand-50 px-1.5 py-0.5 font-display text-[12px] font-black tabular-nums text-brand-700">
                            {university.score}
                          </span>
                        </td>
                      </tr>
                      {university.secondFaculty && (
                        <tr className="border-t border-line/50">
                          <td className="px-3 pb-3.5 pt-1.5 text-[11.5px] leading-snug text-ink-soft">
                            {university.secondFaculty}
                          </td>
                          <td className="px-5 pb-3.5 pt-1.5 text-right">
                            <span className="inline-flex min-w-9 items-center justify-center rounded-md bg-brand-50 px-1.5 py-0.5 font-display text-[12px] font-black tabular-nums text-brand-700">
                              {university.secondScore}
                            </span>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
            </div>

            <div className="divide-y divide-line/70 md:hidden">
              {active.universities.map((university) => (
                <div key={university.name} className="px-4 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full font-display text-[11px] font-black ${
                        university.rank <= 3 ? medalStyles[university.rank - 1] : "bg-canvas text-muted"
                      }`}
                    >
                      {university.rank}
                    </span>
                    <p className="font-display text-[13px] font-bold text-ink">{university.name}</p>
                  </div>
                  <dl className="mt-2 space-y-1.5 pl-9.5">
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-[10.5px] leading-snug text-ink-soft">{university.faculty}</dt>
                      <dd className="shrink-0 rounded bg-brand-50 px-1.5 py-0.5 font-display text-[11px] font-black tabular-nums text-brand-700">
                        {university.score}
                      </dd>
                    </div>
                    {university.secondFaculty && (
                      <div className="flex items-start justify-between gap-3">
                        <dt className="text-[10.5px] leading-snug text-ink-soft">{university.secondFaculty}</dt>
                        <dd className="shrink-0 rounded bg-brand-50 px-1.5 py-0.5 font-display text-[11px] font-black tabular-nums text-brand-700">
                          {university.secondScore}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-canvas/60 px-5 py-3">
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 text-[10px] font-semibold text-ink-soft transition-colors hover:text-brand-700"
                >
                  {link.label}
                  <ArrowRight className="size-2.5 text-muted/60 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
            <p className="flex items-center gap-1 text-[9px] text-muted">
              <TrendingUp className="size-3 text-brand-500" />
              ランキングは学校の優劣を示すものではありません
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { label: "国公立・私立の英語学部", value: "128", unit: "学部", icon: Award },
            { label: "英語で学位が取れる大学", value: "34", unit: "校", icon: GraduationCap },
            { label: "帰国子女枠のある大学", value: "186", unit: "校", icon: MapPin },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-line bg-canvas/50 px-4 py-3">
                <span className="grid size-8 place-items-center rounded-lg bg-white text-brand-600 shadow-sm">
                  <Icon className="size-4" />
                </span>
                <p className="text-[10.5px] font-medium text-muted">{item.label}</p>
                <p className="ml-auto font-display text-[17px] font-black text-ink">
                  {item.value}
                  <span className="ml-0.5 text-[9px] font-bold text-brand-600">{item.unit}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
