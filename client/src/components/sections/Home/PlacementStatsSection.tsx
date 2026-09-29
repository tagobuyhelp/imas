import React from 'react';
import { GraduationCap, TrendingUp, Users, User, ShieldCheck } from 'lucide-react';

export function PlacementStatsSection() {
  return (
    <section id="placement-stats" className="py-6 sm:py-8 bg-white">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* White Card Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] px-6 sm:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-3 items-center">
            
            {/* 1: Legacy Title */}
            <div className="col-span-2 sm:col-span-1 border-b sm:border-b-0 sm:border-r border-slate-200/80 pb-4 sm:pb-0 pr-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0c2340] leading-tight">
                IMAS's Legacy:
              </h3>
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#0c2340] leading-tight">
                Since 2020
              </p>
            </div>

            {/* 2: 100% Placement Rate */}
            <div className="flex items-center gap-3 lg:border-r lg:border-slate-100 lg:pr-3">
              <GraduationCap className="w-8 h-8 text-[#0284c7] shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0c2340] leading-none">
                  100%
                </div>
                <div className="text-xs text-slate-600 font-medium mt-1">
                  Placement Rate
                </div>
              </div>
            </div>

            {/* 3: ₹18.5 LPA Highest Package */}
            <div className="flex items-center gap-3 lg:border-r lg:border-slate-100 lg:pr-3">
              <TrendingUp className="w-8 h-8 text-[#00a8cc] shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0c2340] leading-none">
                  ₹18.5 LPA
                </div>
                <div className="text-xs text-slate-600 font-medium mt-1">
                  Highest Package
                </div>
              </div>
            </div>

            {/* 4: ₹8-12 LPA Average Package */}
            <div className="flex items-center gap-3 lg:border-r lg:border-slate-100 lg:pr-3">
              <Users className="w-8 h-8 text-[#0284c7] shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0c2340] leading-none">
                  ₹8-12 LPA
                </div>
                <div className="text-xs text-slate-600 font-medium mt-1">
                  Average Package
                </div>
              </div>
            </div>

            {/* 5: 2575+ Students Empowered */}
            <div className="flex items-center gap-3 lg:border-r lg:border-slate-100 lg:pr-3">
              <User className="w-8 h-8 text-[#00bcd4] shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0c2340] leading-none">
                  2575+
                </div>
                <div className="text-xs text-slate-600 font-medium mt-1">
                  Students Empowered
                </div>
              </div>
            </div>

            {/* 6: Verified by B2K Analytics */}
            <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 pt-4 sm:pt-0 sm:pl-2 flex items-center justify-center sm:justify-start gap-3">
              <ShieldCheck className="w-8 h-8 text-[#0284c7] shrink-0" />
              <div className="leading-tight text-center sm:text-left">
                <div className="text-[11px] text-slate-500 font-medium">Verified by</div>
                <div className="text-sm font-bold text-[#0c2340] mt-0.5">B2K Analytics</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
