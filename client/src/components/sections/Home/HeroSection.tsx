import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { 
  ArrowRight, Play, Calendar, Users, TrendingUp,
  Award, Sparkles, Globe, Briefcase, Building2
} from 'lucide-react';

export function HeroSection() {
  const [activeCarouselDot, setActiveCarouselDot] = useState(0);

  const carouselImages = [
    '/uploads/imas_hero_image_2.webp',
    '/uploads/imas_hero_image3.webp',
  ];

  return (
    <section id="hero" className="relative min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] bg-[#071d3d] overflow-hidden flex items-center">
      {/* Background Campus Image with Students */}
      <div 
        className="absolute inset-0 bg-cover bg-[62%_20%] sm:bg-[60%_25%] lg:bg-[58%_20%] bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: "url('/uploads/hero_campus_bg.jpg')" }}
      />

      {/* Dark Royal Navy Atmospheric Overlays: Solid deep navy on the left, rich blue tint */}
      <div className="absolute inset-0 bg-[#071d3d]/25 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071d3d] via-[#071d3d]/95 via-38% sm:via-[#071d3d]/80 lg:via-[#071d3d]/45 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071d3d]/80 via-transparent to-transparent lg:hidden pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Copy, Actions, Flourish */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Eyebrow Tag - Styled as Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00a8cc]/15 border border-[#38bdf8]/35 backdrop-blur-xs text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#7dd3fc] uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse shrink-0" />
              <span>AI-ENABLED MANAGEMENT EDUCATION</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-white leading-[1.08] tracking-tight">
                Shape Your<br />
                <span className="font-serif bg-gradient-to-r from-[#00d2d3] via-[#00a8ff] to-[#2563eb] bg-clip-text text-transparent">
                  Business Future
                </span><br />
                with Industry Experts
              </h1>

              <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed pt-1 font-normal">
                India's premier B-School where business education meets AI, analytics and real-world industry experience.
              </p>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              {/* Explore Programme */}
              <Button 
                onClick={() => {
                  const el = document.getElementById('about-the-program') || document.getElementById('programs-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.href = '/courses';
                }}
                className="flex-1 sm:flex-initial justify-center bg-gradient-to-r from-[#00bcd4] via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-md hover:shadow-lg flex items-center gap-2 transition-all min-w-[150px]"
              >
                <span>Explore Programme</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              {/* Apply Now */}
              <Button 
                variant="outline"
                onClick={() => window.open('https://admission.imas.ac.in/', '_blank')}
                className="flex-1 sm:flex-initial justify-center bg-[#0c2444]/90 hover:bg-[#102d55] border border-slate-300/40 hover:border-slate-200 text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-sm transition-all min-w-[130px]"
              >
                Apply Now
              </Button>

              {/* Watch Campus Story */}
              <button 
                onClick={() => window.dispatchEvent(new Event('imas:openVideoModal'))}
                className="w-full sm:w-auto justify-center sm:justify-start flex items-center gap-3 px-2 py-1 text-slate-200 hover:text-cyan-300 transition-colors group mt-1 sm:mt-0"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-md shrink-0">
                  <Play className="h-4 w-4 fill-white text-white ml-0.5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-xs text-slate-300 font-medium">Watch</span>
                  <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300">Campus Story</span>
                </div>
              </button>
            </div>

            {/* Key Institutional Pillars */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 mt-1">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5">
                {[
                  { label: 'AICTE Approved', icon: Award },
                  { label: 'AI-Enhanced Learning', icon: Sparkles },
                  { label: 'Global Partnerships', icon: Globe },
                  { label: 'Industry Mentorship', icon: Briefcase },
                  { label: 'Modern Infrastructure', icon: Building2 },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.label}
                      className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg bg-[#0c2444]/80 hover:bg-[#12315e] border border-slate-700/60 hover:border-[#38bdf8]/50 backdrop-blur-xs transition-all duration-200 shadow-xs group ${
                        idx === 4 ? 'col-span-2 sm:col-span-1 justify-center sm:justify-start' : 'justify-center sm:justify-start'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#38bdf8] group-hover:text-cyan-300 shrink-0" />
                      <span className="text-[11.5px] sm:text-[12.5px] font-semibold text-slate-200 group-hover:text-white transition-colors truncate sm:whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Floating Featured Program Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-center relative pt-4 lg:pt-0">
            
            {/* Featured Program Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-slate-100 max-w-[340px] w-full transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-0.5">
              
              {/* Image with Pill Badge & Dots */}
              <div className="relative rounded-xl overflow-hidden mb-3 bg-slate-100 aspect-[16/10]">
                <img 
                  src={carouselImages[activeCarouselDot]} 
                  alt="IMAS PGDM Students in classroom" 
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                
                {/* FEATURED PROGRAMME Badge (rendered only on slides 1+ since slide 0 has it baked in) */}
                {activeCarouselDot > 0 && (
                  <div className="absolute top-2.5 left-2.5 bg-[#d0f4f7] text-[#00838f] text-[9.5px] font-bold tracking-wider px-2.5 py-0.5 rounded shadow-xs uppercase">
                    FEATURED PROGRAMME
                  </div>
                )}

                {/* 3 Carousel Dots */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 bg-black/30 backdrop-blur-xs px-2 py-0.5 rounded-full">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCarouselDot(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        activeCarouselDot === i ? 'bg-white w-3.5' : 'bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] leading-none">PGDM</h3>
                <p className="text-xs text-[#1e3a8a] font-semibold mt-1">Post Graduate Diploma in Management</p>
              </div>

              {/* 3-Column Highlights Row */}
              <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-slate-100 text-center">
                {/* Duration */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-[#0284c7] mb-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#0c2340]">2 Years</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">Duration</span>
                </div>

                {/* Seats */}
                <div className="flex flex-col items-center border-x border-slate-100">
                  <div className="flex items-center gap-1 text-[#0284c7] mb-0.5">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#0c2340]">120</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">Seats</span>
                </div>

                {/* Highest CTC */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-[#0284c7] mb-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#0c2340]">₹18.5 LPA</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">Highest CTC</span>
                </div>
              </div>

              {/* Action Button */}
              <Button 
                onClick={() => window.location.href = '/courses/pgdm'}
                className="w-full bg-gradient-to-r from-[#00bcd4] via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 mt-3 text-xs sm:text-sm shadow-md transition-all"
              >
                <span>View Programme Details</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
