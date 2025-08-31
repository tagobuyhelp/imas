import React from 'react';
import { Check } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_STATS } from '../../../lib/constants';

export function PlacementStatsSection() {
  const stats = [
    { value: '96%', label: 'Placement Rate' },
    { value: '25 LPA', label: 'Median Salary' },
    { value: '5000+', label: "Learner's Placed" },
    { value: '₹1.7CR', label: 'Highest salary' },
  ];

  return (
    <section id="placement-stats" className="py-8 sm:py-16 bg-white">
      <div className="max-w-[1260px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            IMAS's Legacy: Since 2020
          </h2>
        </div>

        {/* Stats Grid - Mobile: Single Column, Desktop: 4 Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 sm:bg-transparent rounded-md p-4 sm:p-0 border-b-2 sm:border-b-0 border-primary ">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-primary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border-t-2 border-gray-200 pt-3 sm:pt-4">
            <Check className={`h-3 w-3 sm:h-4 sm:w-4 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
            <span className="text-xs sm:text-sm text-gray-600 font-medium">
              Verified by <span className="font-semibold">B2K Analytics</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
