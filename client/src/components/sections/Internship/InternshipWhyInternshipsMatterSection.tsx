import React from 'react';
import { Building2, Laptop, Share2, TrendingUp } from 'lucide-react';

type MatterCard = {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
};

export function InternshipWhyInternshipsMatterSection() {
  const cards: MatterCard[] = [
    {
      title: 'Industry Exposure',
      text: 'Experience real corporate environments before graduation',
      icon: Building2
    },
    {
      title: 'Hands-on Learning',
      text: 'Work on actual business projects, not just theory',
      icon: Laptop
    },
    {
      title: 'Professional Network',
      text: 'Build connections with industry experts and mentors',
      icon: Share2
    },
    {
      title: 'Career Readiness',
      text: 'Gain the skills needed to succeed in the corporate world',
      icon: TrendingUp
    }
  ];

  return (
    <section className="bg-[#f7f8ff] py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#143674] sm:text-3xl">Why Internships Matter</h2>
          <p className="mt-2 text-xs text-[#444655] sm:text-base">
            Bridge the gap between academic learning and real-world experience
          </p>
        </div>

        <div className="mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] sm:mt-10 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group w-[82%] min-w-[240px] shrink-0 snap-start rounded-xl border border-[#eaeeff] bg-white p-4 shadow-[0_10px_30px_rgba(20,54,116,0.08)] transition-all duration-300 active:scale-[0.99] sm:w-auto sm:min-w-0 sm:shrink sm:snap-align-none sm:p-5 sm:hover:-translate-y-1 sm:hover:border-[#26c1d3] sm:hover:shadow-[0_18px_45px_rgba(38,193,211,0.15)]"
              >
                <div className="flex items-center justify-center sm:justify-start">
                  <div className="rounded-xl bg-[#f7f8ff] p-2.5 transition-colors duration-300 sm:p-3 sm:group-hover:bg-[#26c1d3]/10">
                    <Icon className="h-7 w-7 text-[#2e7bb3] transition-colors duration-300 sm:h-8 sm:w-8 sm:group-hover:text-[#26c1d3]" />
                  </div>
                </div>
                <div className="mt-4 text-center sm:mt-5 sm:text-left">
                  <div className="text-base font-semibold text-[#143674]">{c.title}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-gray-600 sm:mt-2">{c.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
