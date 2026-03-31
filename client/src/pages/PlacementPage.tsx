import React from 'react';
import {
  PlacementsAlumniStoriesSection,
  PlacementsCompaniesSection,
  PlacementsFAQSection,
  PlacementsHeroSection,
  PlacementsHighlightsSection,
  PlacementsInternshipAndTrainingSection
} from '../components/sections/Placements';

export function PlacementPage() {
  return (
    <div className="min-h-screen bg-white">
      <PlacementsHeroSection />
      <PlacementsHighlightsSection />
      <PlacementsCompaniesSection />
      <PlacementsInternshipAndTrainingSection />
      <PlacementsFAQSection />
      <PlacementsAlumniStoriesSection />
    </div>
  );
}

