import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { BarChart3, Briefcase, Building2, Globe, TrendingUp, Users } from 'lucide-react';

export function PlacementsHighlightsSection() {
  const stats = [
    { label: 'Placement Assistance', value: '100% Career Support', icon: Briefcase },
    { label: 'Highest Salary Package', value: '₹18 LPA', icon: TrendingUp },
    { label: 'Average Salary Package', value: '₹4.5 – ₹6 LPA', icon: BarChart3 },
    { label: 'Internship Opportunities', value: '500+ annually', icon: Users },
    { label: 'Recruiting Companies', value: '120+', icon: Building2 },
    { label: 'Industry Sectors', value: '15+', icon: Globe }
  ];

  return (
    <section id="placements-highlights" className="py-12 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-[#26c1d3]/20 to-[#2e7bb3]/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-[#143674]/15 to-[#26c1d3]/10 blur-3xl"></div>
      </div>
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="text-center mb-10 relative">
          <div className={`inline-flex items-center gap-2 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-4 py-2 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
            <span className={`h-2 w-2 rounded-full ${IMAS_TAILWIND_CLASSES.BG_TEAL}`}></span>
            PGDM PLACEMENT HIGHLIGHTS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Placement Statistics <span className="text-gray-500 font-semibold">(Indicative Trends)</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            A snapshot of outcomes driven by industry-aligned learning, internships, and recruiter engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl p-[1px] bg-gradient-to-br from-[#143674]/35 via-[#2e7bb3]/25 to-[#26c1d3]/35 hover:from-[#143674]/55 hover:to-[#26c1d3]/55 transition-colors duration-300">
              <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/90 backdrop-blur-sm hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#143674] to-[#2e7bb3] flex items-center justify-center shadow-md">
                      {React.createElement(s.icon, { className: 'h-5 w-5 text-white' })}
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-sm sm:text-base text-gray-900 truncate">{s.label}</CardTitle>
                      <div className="mt-1 h-1 w-10 rounded-full bg-gradient-to-r from-[#26c1d3] to-[#2e7bb3]"></div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
