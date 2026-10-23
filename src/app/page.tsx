import { CtaSection } from "@/components/cta-section";
import { FeatureSection, NewArticlesSection, PickupSection } from "@/components/article-sections";
import { ExamScheduleSection } from "@/components/exam-schedule-section";
import { Hero } from "@/components/hero";
import { InterviewSection } from "@/components/interview-section";
import { PurposeSection } from "@/components/purpose-section";
import { RankingSection } from "@/components/ranking-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { UniversitySection } from "@/components/university-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <RankingSection />
        <PurposeSection />
        <FeatureSection />
        <NewArticlesSection />
        <InterviewSection />
        <ExamScheduleSection />
        <UniversitySection />
        <PickupSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
