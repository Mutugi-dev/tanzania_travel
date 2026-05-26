import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeroSection from "@/components/home/HeroSection";
import TopThingsToDo from "@/components/home/TopThingsToDo";
import TenBestThings from "@/components/home/TenBestThings";
import WhatsHappening from "@/components/home/WhatsHappening";
import CampaignsSection from "@/components/home/CampaignsSection";
import BucketListSection from "@/components/home/BucketListSection";
import SerengetiAwardsSection from "@/components/home/SerengetiAwardsSection";
import PlanAheadEvents from "@/components/home/PlanAheadEvents";
import PlanningHub from "@/components/home/PlanningHub";

export default function Home() {
  return (
    <>
      {/* Navigation and Alert Banner */}
      <Header />

      {/* Main Contents Block */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Cover & Search Trigger */}
        <HeroSection />

        {/* 2. Top 3 things to do this week */}
        <TopThingsToDo />

        {/* 3. Ten Best Things To Do in Tanzania Slider */}
        <TenBestThings />

        {/* 4. What's Happening this May 2026 Grid */}
        <WhatsHappening />

        {/* 5. May 2026 Campaigns Posters */}
        <CampaignsSection />

        {/* 6. 2026 Bucket List Snap Scroller */}
        <BucketListSection />

        {/* 7. Serengeti Awards & Concert Events Panel */}
        <SerengetiAwardsSection />

        {/* 8. Plan Ahead Tradeshow Grid */}
        <PlanAheadEvents />

        {/* 9. Planning Hub Checklist Cards */}
        <PlanningHub />
      </main>

      {/* Footer and Contacts Strip */}
      <Footer />
    </>
  );
}
