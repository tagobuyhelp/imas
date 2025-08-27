import React from 'react';
import {
  HeroSection,
  ProgramHighlightsSection,
  PlacementPartnersSection,
  PlacementStatsSection,
  LearnersSection,
  AboutSection,
  MentorsSection,
  ProgramsSection,
  WhyChooseSection,
  IndustryCollaborationsSection,
  CampusLifeSection,
  FinalCTASection
} from '../components/sections/Home';
import { StickyCTAFooter } from '../components/layout/StickyCTAFooter';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramHighlightsSection />
      <PlacementPartnersSection />
      <PlacementStatsSection />
      <LearnersSection />
      <AboutSection />
      <MentorsSection />
      <ProgramsSection />
      <WhyChooseSection />
      <IndustryCollaborationsSection />
      <CampusLifeSection />
      <FinalCTASection />
      <StickyCTAFooter heroSectionHeight={800} showFloatingButton={false} />
    </div>
  );
}
