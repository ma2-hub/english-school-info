import Link from "next/link";
import { AssetImage } from "./asset-image";
import { ArrowRight, MessageSquareQuote, Mic } from "lucide-react";
import { interviews } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function InterviewSection() {
  return (
    <section id="interview" className="border-b border-line/70 bg-white py-14 lg:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Interview"
          title="編集部インタビュー"
          description="教室に足を運び、講師・塾長に直接聞きました。広告ではわからない、指導の考え方と現場の空気感を届けます。"
          action={{ label: "インタビュー一覧", href: "/interview" }}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {interviews.map((interview) => (
            <article key={interview.href} className="group">
              <Link
                href={interview.href}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
                  <AssetImage
                    src={interview.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/70 to-transparent" />
                  <span className="absolute left-3.5 top-3.5 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[9.5px] font-bold text-brand-700 shadow-sm">
                    <Mic className="size-2.5" />
                    {interview.category}
                  </span>
                  <p className="absolute bottom-3 left-3.5 text-[10px] font-semibold text-white/90">
                    {interview.person}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-4.5 sm:p-5">
                  <h3 className="line-clamp-2 text-[13.5px] font-bold leading-[1.7] text-ink transition-colors group-hover:text-brand-700">
                    {interview.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[11px] leading-[1.85] text-muted">{interview.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-line/80 pt-3.5">
                    <span className="flex items-center gap-1 text-[9.5px] font-medium text-muted">
                      <MessageSquareQuote className="size-3" />
                      {interview.school}
                    </span>
                    <span className="flex items-center gap-1 text-[10.5px] font-bold text-brand-600">
                      取材記事を読む
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-xl border border-dashed border-brand-200 bg-brand-50/50 px-4 py-3.5 sm:flex-row">
          <p className="text-[11px] leading-relaxed text-ink-soft">
            <span className="font-bold text-brand-700">「うちの教室も取材してほしい」</span>
            という英語学校・スクール運営者の方は、取材依頼フォームからご連絡ください。
          </p>
          <Link
            href="/contact"
            className="group flex shrink-0 items-center gap-1 text-[11px] font-bold text-brand-600 hover:text-brand-800"
          >
            取材・掲載のご依頼
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
