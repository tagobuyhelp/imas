import { FileText, MessageCircle, Network, UserCheck, Users } from 'lucide-react';

type SupportCard = {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  highlighted?: boolean;
};

export function InternshipSupportSection() {
  const supportCards: SupportCard[] = [
    {
      title: 'Resume Development',
      text: 'Get expert help to build a strong, job-ready resume',
      icon: FileText
    },
    {
      title: 'Interview Preparation',
      text: 'Practice with real interview scenarios and guidance',
      icon: MessageCircle
    },
    {
      title: 'Corporate Mentorship',
      text: 'Learn directly from industry professionals',
      icon: UserCheck
    },
    {
      title: 'Networking Opportunities',
      text: 'Connect with companies and expand your career network',
      icon: Network
    },
    {
      title: 'Placement Cell Support',
      text: 'Guidance from Corporate Relations & Placement Cell',
      icon: Users,
      highlighted: true
    }
  ];

  return (
    <section className="bg-[#eaeeff] px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#444655]">
            We Support You at Every Step
          </div>
          <h2 className="mt-2 text-xl font-semibold text-[#143674]">Internship Support System</h2>
        </div>

        <div className="relative mt-6">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(234,238,255,1))]" />
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-webkit-overflow-scrolling:touch] sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
            {supportCards.map((c) => {
              const Icon = c.icon;
              const isHighlighted = !!c.highlighted;
              return (
                <div
                  key={c.title}
                  className={`group relative min-w-[240px] h-[160px] shrink-0 snap-start rounded-xl border bg-white p-4 shadow-[0_10px_28px_rgba(20,54,116,0.10)] transition-all duration-300 active:scale-[0.99] sm:hover:-translate-y-1 sm:hover:border-[#26c1d3] sm:hover:shadow-[0_16px_38px_rgba(38,193,211,0.14)] ${
                    isHighlighted ? 'border-[#d1a617] sm:scale-[1.02]' : 'border-[#dfe6ff]'
                  }`}
                >
                  {isHighlighted && (
                    <div className="absolute right-3 top-3 rounded-full bg-[#d1a617]/15 px-2 py-0.5 text-[11px] font-semibold text-[#143674]">
                      Recommended
                    </div>
                  )}

                  <div className="mb-3">
                    <Icon
                      className={`h-6 w-6 transition-colors duration-300 ${
                        isHighlighted ? 'text-[#d1a617]' : 'text-[#2e7bb3] sm:group-hover:text-[#26c1d3]'
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold text-[#143674]">{c.title}</h3>
                  <p className="mt-1 text-sm text-[#444655]">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
