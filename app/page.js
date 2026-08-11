import React from "react";
import Navbar from "./components/Navbar";
import InteractiveGrid from "./components/InteractiveGrid";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import MascotSection from "./components/MascotSection";
import RulesSection from "./components/RulesSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      {/* Background Interactive Dot Canvas */}
      <InteractiveGrid />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Gameplay & Features Section */}
      <FeaturesSection />

      {/* Official Mascot Section */}
      <MascotSection />

      {/* Rules of the Game Section */}
      <RulesSection />

      {/* Call to Action Download Section */}
      <DownloadSection />

      {/* Floating Back to Top Button */}
      <ScrollToTopButton />

      {/* Footer */}
      <Footer />
    </main>
  );
}
