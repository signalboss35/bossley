"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Collection from "@/components/Collection";
import TastingNotes from "@/components/TastingNotes";
import Footer from "@/components/Footer";
import BannerSlider from "@/components/BannerSlider";

export default function Page() {
  return (
    <div className="min-h-screen bg-[rgb(var(--color-bg))] text-[rgb(var(--color-fg))]">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <BannerSlider />
        <Collection />
        <TastingNotes />
      </main>
      <Footer />
    </div>
  );
}