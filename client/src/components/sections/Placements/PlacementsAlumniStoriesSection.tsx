import React, { useEffect, useRef, useState } from 'react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

export function PlacementsAlumniStoriesSection() {
  const alumni = [
    { name: 'Arindam Chatterjee', company: 'TCS', image: '/uploads/placement/arindam-chatterjee.png' },
    { name: 'Sayan Mukherjee', company: 'Wipro', image: '/uploads/placement/sayan-mukherjee.png' },
    { name: 'Anirban Ghosh', company: 'Infosys', image: '/uploads/placement/arindam-chatterjee.png' },
    { name: 'Abhishek Dutta', company: 'Microsoft', image: '/uploads/placement/abhishek-dutta.png' },
    { name: 'Debarghya Das', company: 'PwC', image: '/uploads/placement/debarghya-das.png' },
    { name: 'Ritam Bose', company: 'PwC', image: '/uploads/placement/ritam-bose.png' },
    { name: 'Sagnik Mitra', company: 'Accenture', image: '/uploads/placement/sagnik-mitra.png' },
    { name: 'Aditya Sharma', company: 'Deloitte', image: '/uploads/placement/aditya-sharma.png' },
    { name: 'Nikhil Agarwal', company: 'EY', image: '/uploads/placement/nikhil-agarwal.png' },
    { name: 'Ranjan Ghosh', company: 'EY', image: '/uploads/placement/ranjan-ghosh.png' },
    { name: 'Rohan Mehta', company: 'KPMG', image: '/uploads/placement/rohan-mehta.png' },
    { name: 'Sohini Banerjee', company: 'Hindustan Unilever', image: '/uploads/placement/sohini-banerjee.png' },
    { name: 'Debolina Ghosh', company: 'ITC Limited', image: '/uploads/placement/debolina-ghosh.png' },
    { name: 'Kaustav Sen', company: 'IMAS Alumni', image: '/uploads/placement/kaustav-sen.png' },
    { name: 'Nitin Jaiswal', company: 'IMAS Alumni', image: '/uploads/placement/nitin-jaiswal.png' },
    { name: 'Rahul Verma', company: 'IMAS Alumni', image: '/uploads/placement/rahul-verma.png' },
    { name: 'Shanti Pradhan', company: 'IMAS Alumni', image: '/uploads/placement/shanti-pradhan.png' },
    { name: 'Soumyadeep Roy', company: 'IMAS Alumni', image: '/uploads/placement/soumyadeep-roy.png' },
    { name: 'Subhajit Sarkar', company: 'IMAS Alumni', image: '/uploads/placement/subhajit-sarkar.png' },
    { name: 'Subhankar Biswas', company: 'IMAS Alumni', image: '/uploads/placement/subhankar-biswas.png' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / alumni.length;
      const newIndex = Math.min(currentSlide + 1, alumni.length - 1);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / alumni.length;
      const newIndex = Math.max(currentSlide - 1, 0);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (!isAutoScrolling) return;
    autoScrollRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextIndex = prev >= alumni.length - 1 ? 0 : prev + 1;
        if (carouselRef.current) {
          const cardWidth = carouselRef.current.scrollWidth / alumni.length;
          carouselRef.current.scrollTo({
            left: nextIndex * cardWidth,
            behavior: 'smooth'
          });
        }
        return nextIndex;
      });
    }, 3500);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isAutoScrolling, alumni.length]);

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="text-center mb-8">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-4 py-2 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE}/20`}>
            CAREER SUCCESS STORIES FROM IMAS ALUMNI
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Alumni</h2>
          <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
            Read about the achievements of IMAS graduates who have secured rewarding careers in fields such as management, analytics, finance, technology, and healthcare.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className={`absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-80 transition-all duration-300`}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-80 transition-all duration-300`}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-3 sm:px-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {alumni.map((a) => (
              <div
                key={`${a.name}-${a.company}`}
                className="flex-shrink-0 w-[240px] sm:w-[280px] lg:w-[320px] transform transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="rounded-3xl p-[1px] bg-gradient-to-br from-[#26c1d3]/50 via-[#2e7bb3]/35 to-[#143674]/45 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <div className="relative rounded-3xl bg-white overflow-hidden border border-white/60 h-[520px] flex flex-col">
                    <div className="relative h-[70%] overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className={`w-full h-full ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 hidden items-center justify-center`}>
                        <Users className={`h-14 w-14 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>

                    <div className="h-[30%] p-4 flex flex-col justify-between">
                      <div className="text-center">
                        <div className="text-lg font-extrabold text-gray-900 leading-snug truncate">{a.name}</div>
                        <div className="mt-1 flex justify-center">
                          <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/5 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} ring-1 ring-[#143674]/10 truncate`}>
                            {a.company}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-gradient-to-br from-[#143674]/5 to-[#2e7bb3]/5 p-2.5 ring-1 ring-gray-100">
                          <div className="text-[10px] font-semibold tracking-wide text-gray-500 uppercase">Track</div>
                          <div className="mt-0.5 text-sm font-bold text-gray-900">Career Success</div>
                        </div>
                        <div className="rounded-xl bg-gradient-to-br from-[#26c1d3]/10 to-[#2e7bb3]/5 p-2.5 ring-1 ring-gray-100">
                          <div className="text-[10px] font-semibold tracking-wide text-gray-500 uppercase">Outcome</div>
                          <div className="mt-0.5 text-sm font-bold text-gray-900">Placed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {alumni.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.scrollWidth / alumni.length;
                    carouselRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} scale-125` : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
