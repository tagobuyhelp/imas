import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  InternshipBenefitsSection,
  InternshipFAQSection,
  InternshipFinalCTASection,
  InternshipHeroSection,
  InternshipHighlightsSection,
  InternshipIndustriesSection,
  InternshipProcessSection,
  InternshipSIPSection,
  InternshipSuccessStoriesSection,
  InternshipSupportSection,
  InternshipWhyIMASStandOutSection,
  InternshipWhyInternshipsMatterSection
} from '../components/sections/Internship';

export function InternshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Internships at IMAS Business School | SIP &amp; Corporate Exposure</title>
        <meta
          name="description"
          content="Explore internships at IMAS Business School: mandatory PGDM internships, Summer Internship Program (6–8 weeks), 500+ opportunities annually, and success stories from learners."
        />
        <meta
          name="keywords"
          content="IMAS internship, Summer Internship Program, SIP, PGDM internships, corporate exposure, pre-placement offers"
        />
        <link rel="canonical" href="https://www.imas.ac.in/internships" />
      </Helmet>

      <InternshipHeroSection />
      <InternshipWhyInternshipsMatterSection />
      <InternshipHighlightsSection />
      <InternshipSIPSection />
      <InternshipProcessSection />
      <InternshipIndustriesSection />
      <InternshipBenefitsSection />
      <InternshipWhyIMASStandOutSection />
      <InternshipSupportSection />
      <InternshipSuccessStoriesSection />
      <InternshipFAQSection />
      <InternshipFinalCTASection />
    </div>
  );
}
