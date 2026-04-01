import React from 'react';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';
import { FacultySection } from '../components/sections/Home/FacultySection';

export function BoardOfGovernorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-gray-900 via-[#143674] to-[#2e7bb3] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/uploads/campus_photos/NEW_IMAS_Building_Logo.png"
            alt="IMAS Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-[1260px] mx-auto px-4 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20">
            Board of Governors – IMAS Kolkata
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Board of Governors</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            The Board of Governors at IMAS Kolkata provides strategic direction, policy guidance, and governance oversight to ensure academic excellence, institutional integrity, and industry relevance.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-[960px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className={`text-lg font-bold text-gray-900 mb-2`}>Industry Representative</h3>
              <p className="text-gray-700">Senior Corporate Leader (BFSI / Consulting / Technology Sector)</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className={`text-lg font-bold text-gray-900 mb-2`}>Nominee – Management Representative</h3>
              <p className="text-gray-700">IMAS Governing Body</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-gray-200 p-6">
            <p className="text-gray-800 font-medium">
              The Board ensures continuous improvement in curriculum, infrastructure, research, placements, and student development.
            </p>
          </div>
        </div>
      </section>

      <FacultySection />
    </div>
  );
}
