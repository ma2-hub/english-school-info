"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarClock, CalendarDays, CheckCircle2, ExternalLink, Info } from "lucide-react";
import { examTabs } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const statusStyles = {
  done: { label: "終了", className: "bg-slate-100 text-slate-500" },
  open: { label: "受付中", className: "bg-accent-50 text-accent-700" },
  soon: { label: "受付前", className: "bg-warm-50 text-warm-600" },
};

const relatedLinks = [
  { label: "英語試験日程の完全版", href: "/schedule" },
  { label: "中止・返金・当日の注意点", href: "/exam-notes" },
  { label: "自宅で受けられる英語試験", href: "/online-exam" },
  { label: "大学入試での活用方法", href: "/university-exam" },
];

export function ExamScheduleSection() {
  const [activeId, setActiveId] = useState(examTabs[0].id);
  const active = examTabs.find((tab) => tab.id === activeId) ?? examTabs[0];
  const next = active.rows.find((row) => row.status === "open") ?? active.rows.find((row) => row.status === "soon");

  return (
    <section id="schedule" className="relative border-b border-line/70 bg-brand-50/40 py-14 lg:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Exam Schedule 2026"
          title="英語資格試験の日程を見る"
          description="TOEIC・英検・TOEFL・TEAPの2026年日程をまとめました。申込のタイミングを見逃さないよう、早めにチェックを。"
          action={{ label: "日程一覧を詳しく見る", href: "/schedule" }}
        />

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
          <div className="flex flex-col gap-4 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div role="tablist" aria-label="英語資格試験の切り替え" className="no-scrollbar flex gap-1 overflow-x-auto rounded-xl bg-canvas p-1">
              {examTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`exam-tab-${tab.id}`}
                  aria-selected={activeId === tab.id}
                  aria-controls={`exam-panel-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-[11.5px] font-bold transition-all ${
                    activeId === tab.id
                      ? "bg-white text-brand-700 shadow-sm"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="flex items-center gap-1.5 text-[10px] font-medium text-muted">
              <CalendarDays className="size-3.5 text-brand-500" />
              {active.summary}
            </p>
          </div>

          <div
            role="tabpanel"
            id={`exam-panel-${active.id}`}
            aria-labelledby={`exam-tab-${active.id}`}
            className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[1fr_248px]"
          >
            <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">{active.label}の2026年試験日程</caption>
                <thead>
                  <tr className="border-b border-line text-[9.5px] font-bold uppercase tracking-[0.1em] text-muted">
                    <th scope="col" className="w-16 py-2 pr-3 font-bold">月</th>
                    <th scope="col" className="py-2 pr-3 font-bold">試験日</th>
                    <th scope="col" className="hidden py-2 pr-3 font-bold sm:table-cell">申込受付期間</th>
                    <th scope="col" className="w-14 py-2 text-right font-bold sm:w-20">状況</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/70">
                  {active.rows.map((row) => {
                    const status = row.status ? statusStyles[row.status] : null;
                    const muted = row.status === "done";
                    return (
                      <tr key={row.month} className={`text-[11.5px] ${muted ? "text-muted/70" : "text-ink"}`}>
                        <th scope="row" className="py-2.5 pr-3 text-left font-display text-[12px] font-bold">
                          {row.month}
                        </th>
                        <td className={`py-2.5 pr-3 text-[11px] tabular-nums ${muted ? "" : "font-semibold"}`}>
                          {row.date}
                          <span className="mt-0.5 block text-[9px] font-normal text-muted sm:hidden">{row.period}</span>
                        </td>
                        <td className="hidden py-2.5 pr-3 text-[10.5px] tabular-nums text-ink-soft sm:table-cell">{row.period}</td>
                        <td className="py-2.5 text-right">
                          {status ? (
                            <span className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold ${status.className}`}>
                              {status.label}
                            </span>
                          ) : (
                            <span className="text-[10px] text-muted/50">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <aside className="flex flex-col gap-3">
              <div className="rounded-xl border border-brand-100 bg-brand-50/70 p-4">
                <p className="flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-brand-600">
                  <CalendarClock className="size-3.5" />
                  次に申し込める試験
                </p>
                <p className="mt-2.5 font-display text-[26px] font-black leading-none tracking-tight text-brand-800">
                  {next ? next.date.split("・")[0] : "公開待ち"}
                </p>
                <p className="mt-2 text-[10px] font-medium text-ink-soft">
                  {next ? `受付：${next.period}` : "次回日程の公開をお待ちください"}
                </p>
                <Link
                  href={`/schedule/${active.id}`}
                  className="mt-3.5 flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 py-2.5 text-[11px] font-bold text-white transition-colors hover:bg-brand-700"
                >
                  日程の詳細を見る
                  <ArrowRight className="size-3" />
                </Link>
              </div>

              <div className="rounded-xl bg-canvas p-4">
                <p className="flex items-start gap-1.5 text-[9.5px] leading-relaxed text-muted">
                  <Info className="mt-0.5 size-3 shrink-0 text-brand-500" />
                  {active.note}
                </p>
                <p className="mt-2 flex items-center gap-1 text-[9px] font-semibold text-muted/80">
                  <CheckCircle2 className="size-3 text-accent-500" />
                  最新情報は各試験の公式サイトをご確認ください
                </p>
              </div>
            </aside>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line bg-canvas/60 px-4 py-3 sm:px-5">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1 text-[10px] font-semibold text-ink-soft transition-colors hover:text-brand-700"
              >
                {link.label}
                <ExternalLink className="size-2.5 text-muted/60" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
