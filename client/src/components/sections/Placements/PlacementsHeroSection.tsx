import React from 'react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { Button } from '../../ui/button';
import { ArrowRight, Users } from 'lucide-react';
import { applyNow } from '../../../lib/utils';

export function PlacementsHeroSection() {
  const alumni = [
    { name: 'Arindam Chatterjee', company: 'TCS', image: '/uploads/placement/arindam-chatterjee.png' },
    { name: 'Sayan Mukherjee', company: 'Wipro', image: '/uploads/placement/sayan-mukherjee.png' },
    { name: 'Abhishek Dutta', company: 'Microsoft', image: '/uploads/placement/abhishek-dutta.png' },
    { name: 'Debarghya Das', company: 'PwC', image: '/uploads/placement/debarghya-das.png' },
    { name: 'Ritam Bose', company: 'PwC', image: '/uploads/placement/ritam-bose.png' },
    { name: 'Sagnik Mitra', company: 'Accenture', image: '/uploads/placement/sagnik-mitra.png' },
    { name: 'Aditya Sharma', company: 'Deloitte', image: '/uploads/placement/aditya-sharma.png' },
    { name: 'Nikhil Agarwal', company: 'EY', image: '/uploads/placement/nikhil-agarwal.png' },
    { name: 'Ranjan Ghosh', company: 'EY', image: '/uploads/placement/ranjan-ghosh.png' },
    { name: 'Rohan Mehta', company: 'KPMG', image: '/uploads/placement/rohan-mehta.png' }
  ];
  const col1 = alumni.filter((_, i) => i % 2 === 0);
  const col2 = alumni.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-[#143674] to-[#2e7bb3] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/uploads/campus_photos/imas_campus.png" alt="IMAS Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      <div className="relative max-w-[1260px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-8 items-center">
          <div>
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20">
              PGDM Placements at IMAS Business School
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Industry-Aligned Careers for Future Business Leaders</h1>
            <p className="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed">
              Programs designed with strong industry employability, corporate partnerships, internships, and career development training.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl">
              <div className="rounded-2xl bg-white/10 px-4 py-3 text-center ring-1 ring-white/20">
                <div className="text-xl md:text-2xl font-extrabold">100%</div>
                <div className="text-xs opacity-90">Career Support</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3 text-center ring-1 ring-white/20">
                <div className="text-xl md:text-2xl font-extrabold">₹12 LPA</div>
                <div className="text-xs opacity-90">Highest Package</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3 text-center ring-1 ring-white/20">
                <div className="text-xl md:text-2xl font-extrabold">120+</div>
                <div className="text-xs opacity-90">Recruiters</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3 text-center ring-1 ring-white/20">
                <div className="text-xl md:text-2xl font-extrabold">15+</div>
                <div className="text-xs opacity-90">Industry Sectors</div>
              </div>
            </div>
            <div className="mt-6 flex flex-row gap-3">
              <Button className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} text-white`} onClick={applyNow}>
                Explore Placements
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="/programs">
                <Button variant="outline" className="border-white/60 text-black hover:bg-white/10 ">
                  View Programs
                </Button>
              </a>
            </div>

            <div className="md:hidden mt-8">
              <div className="overflow-hidden">
                <div className="flex w-max gap-4 animate-scroll-left">
                  {[...alumni, ...alumni].map((a, i) => (
                    <div key={`${a.name}-m-${i}`} className="w-[190px] rounded-2xl bg-white shadow-md overflow-hidden">
                      <div className="relative">
                        <img
                          src={a.image}
                          alt={a.name}
                          className="w-full h-56 object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const t = e.currentTarget as HTMLImageElement;
                            t.style.display = 'none';
                            const fallback = t.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-56 bg-slate-100 hidden items-center justify-center">
                          <Users className="h-10 w-10 text-slate-400" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2e7bb3]/85 via-[#143674]/30 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="text-white font-bold text-sm leading-tight">{a.name}</div>
                          <div className="text-white/90 text-xs">Kolkata, India</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block max-w-[420px] ml-auto">
            <div className="grid grid-cols-2 gap-3 h-[520px]">
              {[col1, col2].map((col, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl">
                  <div className={`${idx % 2 === 0 ? 'animate-vertical-up' : 'animate-vertical-down'} space-y-4`}>
                    {[...col, ...col].map((a, i) => (
                      <div key={`${a.name}-${i}`} className="rounded-2xl bg-white shadow-md overflow-hidden">
                        <div className="relative">
                          <img
                            src={a.image}
                            alt={a.name}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                            onError={(e) => {
                              const t = e.currentTarget as HTMLImageElement;
                              t.style.display = 'none';
                              const fallback = t.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-64 bg-slate-100 hidden items-center justify-center">
                            <Users className="h-10 w-10 text-slate-400" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#2e7bb3]/85 via-[#143674]/30 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="text-white font-bold text-sm leading-tight">{a.name}</div>
                            <div className="text-white/90 text-xs">Kolkata, India</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
