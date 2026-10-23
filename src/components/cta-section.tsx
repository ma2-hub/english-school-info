import Link from "next/link";
import { ArrowRight, Check, Mail, MessageCircle, Sparkles } from "lucide-react";

const promises = ["目的別に比較できる", "料金の内訳がわかる", "取材済みの情報だけ"];

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-14 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(36,119,189,0.35),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(22,163,122,0.22),transparent_42%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-wide text-white/75">
            <Sparkles className="size-3.5 text-warm-400" />
            無料のスクール比較ガイド
          </p>
          <h2 className="mt-5 font-display text-[clamp(1.6rem,3.4vw,2.5rem)] font-black leading-[1.35] tracking-tight text-white">
            英語の一歩を、
            <br />
            今日から始めよう。
          </h2>
          <p className="mt-4 max-w-lg text-[12.5px] leading-[1.95] text-white/65">
            「何から始めればいいかわからない」という方へ。
            目的と予算に合わせたスクールの比較表と、学習の進め方を無料でお送りします。
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {promises.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-[10.5px] font-medium text-white/75">
                <span className="grid size-4 place-items-center rounded-full bg-accent-500/20 text-accent-500">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md sm:p-6">
          <p className="flex items-center gap-2 text-[12px] font-bold text-white">
            <Mail className="size-4 text-warm-400" />
            比較ガイドを受け取る
          </p>
          <p className="mt-1.5 text-[10px] leading-relaxed text-white/55">
            メールアドレスを登録すると、編集部の比較ガイド（PDF）をお送りします。
          </p>

          <form className="mt-4 space-y-2.5">
            <label className="block">
              <span className="sr-only">メールアドレス</span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="h-11 w-full rounded-lg border border-white/15 bg-white/10 px-3 text-[12px] text-white outline-none placeholder:text-white/35 focus:border-brand-300 focus:ring-2 focus:ring-brand-400/30"
              />
            </label>
            <button
              type="submit"
              className="flex h-11 w-full items-center justify-center gap-1.5 rounded-lg bg-white text-[12px] font-bold text-ink transition-colors hover:bg-brand-50"
            >
              無料で受け取る
              <ArrowRight className="size-3.5" />
            </button>
          </form>

          <Link
            href="/consultation"
            className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-white/15 py-2.5 text-[11px] font-bold text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            <MessageCircle className="size-3.5" />
            個別に相談する（無料）
          </Link>

          <p className="mt-3 text-center text-[9px] leading-relaxed text-white/35">
            しつこい営業はしません。配信停止はいつでも可能です。
          </p>
        </div>
      </div>
    </section>
  );
}
