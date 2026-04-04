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
    <section className="bg-[#f7f8ff] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#143674]">Why Internships Matter</h2>
          <p className="mt-2 text-sm text-[#444655] sm:text-base">
            Bridge the gap between academic learning and real-world experience
          </p>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group w-[85%] min-w-[280px] shrink-0 snap-start rounded-xl border border-[#eaeeff] bg-white p-5 shadow-[0_10px_30px_rgba(20,54,116,0.08)] transition-all duration-300 active:scale-[0.99] sm:w-auto sm:min-w-0 sm:shrink sm:snap-align-none sm:hover:-translate-y-1 sm:hover:border-[#26c1d3] sm:hover:shadow-[0_18px_45px_rgba(38,193,211,0.15)]"
              >
                <div className="flex items-center justify-center sm:justify-start">
                  <div className="rounded-xl bg-[#f7f8ff] p-3 transition-colors duration-300 sm:group-hover:bg-[#26c1d3]/10">
                    <Icon className="h-8 w-8 text-[#2e7bb3] transition-colors duration-300 sm:group-hover:text-[#26c1d3]" />
                  </div>
                </div>
                <div className="mt-5 text-center sm:text-left">
                  <div className="text-base font-semibold text-[#143674]">{c.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-gray-600">{c.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
