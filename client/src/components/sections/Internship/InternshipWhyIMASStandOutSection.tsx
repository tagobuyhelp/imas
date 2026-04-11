import React from 'react';
import { BarChart4, BookOpen, Briefcase, Building2, UserCheck } from 'lucide-react';

type StandoutCard = {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  highlighted?: boolean;
};

export function InternshipWhyIMASStandOutSection() {
  const cards: StandoutCard[] = [
    {
      title: 'Industry-Driven Curriculum',
      text: 'Learn what companies actually need',
      icon: BookOpen
    },
    {
      title: 'Corporate Internship Opportunities',
      text: 'Work with real companies',
      icon: Building2
    },
    {
      title: 'Real Business Projects',
      text: 'Solve practical, real-world problems',
      icon: BarChart4
    },
    {
      title: 'Professional Mentoring',
      text: 'Guidance from experienced professionals',
      icon: UserCheck
    },
    {
      title: 'Pathway to Full-Time Employment',
      text: 'Turn internships into job opportunities',
      icon: Briefcase,
      highlighted: true
    }
  ];

  return (
    <section id="why-imas" className="bg-[#eaeeff] px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#444655]">
            What Makes IMAS Different
          </div>
          <h2 className="mt-2 text-lg font-semibold text-[#143674] mb-2 sm:text-xl">Why Internships at IMAS Stand Out</h2>
          <p className="text-xs text-[#444655] mb-5 sm:text-sm sm:mb-6">Designed to deliver real-world experience and career clarity</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(234,238,255,1))]" />
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [-webkit-overflow-scrolling:touch] sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
            {cards.map((c) => {
              const Icon = c.icon;
              const isHighlighted = !!c.highlighted;
              return (
                <div
                  key={c.title}
                  className={`group min-w-[220px] h-[150px] shrink-0 snap-start rounded-xl bg-white p-3.5 shadow-[0_10px_28px_rgba(20,54,116,0.10)] transition-all duration-300 active:scale-[0.99] sm:min-w-[240px] sm:h-[160px] sm:p-4 sm:hover:-translate-y-1 sm:hover:border-[#26c1d3] sm:hover:shadow-[0_16px_38px_rgba(38,193,211,0.14)] ${
                    isHighlighted ? 'border-2 border-[#d1a617]' : 'border border-[#dfe6ff]'
                  }`}
                >
                  {isHighlighted && (
                    <div className="mb-2 inline-flex rounded-full bg-[#d1a617]/15 px-2 py-0.5 text-[11px] font-semibold text-[#143674]">
                      Highlight
                    </div>
                  )}
                  <div className="mb-3">
                    <Icon
                      className={`h-5 w-5 transition-colors duration-300 sm:h-6 sm:w-6 ${
                        isHighlighted ? 'text-[#d1a617]' : 'text-[#2e7bb3] sm:group-hover:text-[#26c1d3]'
                      }`}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-[#143674] sm:text-base">{c.title}</h3>
                  <p className="mt-1.5 text-xs text-[#444655] sm:mt-2 sm:text-sm">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
