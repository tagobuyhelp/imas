import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/button';
import { Carousel } from '../../ui/carousel';
import { IMAS_TAILWIND_CLASSES, IMAS_DATES } from '../../../lib/constants';
import { downloadBrochure, applyNow } from '../../../lib/utils';
import { ArrowRight, Download, Play, Users, Award, Globe, BookOpen, TrendingUp } from 'lucide-react';

export function HeroSection() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const deadlineTs = new Date(IMAS_DATES.APPLICATION_DEADLINE).getTime();
    const update = () => {
      const now = Date.now();
      const diffDays = Math.floor((deadlineTs - now) / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);
    };
    update();
    const interval = setInterval(update, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  const [currentStat, setCurrentStat] = useState(0);
  
  // Sample carousel images - replace with actual IMAS images
  const carouselImages = [
    '/uploads/imas_hero_image_2.webp',
    '/uploads/imas_hero_image1.webp',
    '/uploads/imas_hero_image3.webp',
  ];

  const stats = [
    { icon: Users, value: '1500+', label: 'Alumni Network' },
    { icon: Award, value: '100%', label: 'Placement Rate' },
    { icon: Globe, value: '15+', label: 'Industry Partners' },
    { icon: BookOpen, value: '50+', label: 'Expert Faculty' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated Geometric Shapes - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 ${IMAS_TAILWIND_CLASSES.BG_TEAL}/20 rounded-full blur-xl animate-pulse`}></div>
        <div className={`absolute top-20 sm:top-40 right-10 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/30 rounded-full blur-lg animate-bounce`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 w-10 h-10 sm:w-20 sm:h-20 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/25 rounded-full blur-md animate-ping`} style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Elements - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-1/4 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="hidden sm:block absolute top-1/3 left-1/4 w-1 h-1 bg-teal-400/60 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="hidden sm:block absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-400/50 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10  flex items-center">
        <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Section - Hero Content */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
                
                {/* Hero Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white animate-fade-in-up">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Admissions Open for 2026-28</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-3 sm:space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Shape Your
                    <span className={`block ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent`}>
                      Business Future
                    </span>
                    <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-300">
                      with Industry Experts
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                    India's premier B-School where AI meets traditional business education. 
                    <span className="text-teal-400 font-semibold"> 100% placement assurance</span> with hands-on industry experience.
                  </p>
                </div>

                {/* Interactive Stats - Mobile Optimized */}
                <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg transition-all duration-500 cursor-pointer ${
                          currentStat === index 
                            ? 'bg-white/20 backdrop-blur-sm border border-white/30 scale-105' 
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                        onClick={() => setCurrentStat(index)}
                      >
                        <Icon className={`w-4 h-4 sm:w-6 sm:h-6 ${currentStat === index ? 'text-teal-400' : 'text-gray-400'}`} />
                        <div>
                          <div className={`text-sm sm:text-lg font-bold ${currentStat === index ? 'text-white' : 'text-gray-300'}`}>
                            {stat.value}
                          </div>
                          <div className={`text-xs ${currentStat === index ? 'text-gray-200' : 'text-gray-500'}`}>
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Scrolling Highlights - Mobile Optimized */}
                <div className="relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="flex gap-3 sm:gap-4 animate-scroll-left whitespace-nowrap">
                    {[
                      'AICTE Approved', 'AI-Enhanced Learning', 'Global Partnerships', 
                      'Industry Mentorship', 'Modern Infrastructure', 'Research Excellence',
                      'AICTE Approved', 'AI-Enhanced Learning', 'Global Partnerships'
                    ].map((highlight, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm border border-teal-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-teal-300 font-medium"
                      >
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-400 rounded-full"></div>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  <Button 
                    className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300"
                    onClick={applyNow}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                    onClick={downloadBrochure}
                  >
                    <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                    Download Brochure
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="group text-white hover:text-teal-400 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl transition-all duration-300"
                    onClick={() => window.dispatchEvent(new Event('imas:openVideoModal'))}
                  >
                    <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Watch Video</span>
                    <span className="sm:hidden">Video</span>
                  </Button>
                </div>
              </div>

              {/* Right Section - Interactive Card - Mobile Optimized */}
              <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  {/* Main Card */}
                  <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20">
                    
                    {/* Image Carousel */}
                    <div className="h-32 sm:h-48 mb-4 sm:mb-6 rounded-xl overflow-hidden">
                      <Carousel
                        images={carouselImages}
                        autoPlay={true}
                        interval={4000}
                        showControls={false}
                        showIndicators={true}
                        className="h-full"
                      />
                    </div>

                    {/* Program Info */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-500 text-xs sm:text-sm font-medium">IMAS 2026</p>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800">PGDM Program</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-xl sm:text-2xl font-bold text-teal-600">₹18.5 LPA</p>
                          <p className="text-xs sm:text-sm text-gray-500">Highest CTC</p>
                        </div>
                      </div>

                      {/* Quick Stats Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-2 rounded-lg text-center">
                          <TrendingUp className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                          <div className="text-sm font-bold text-gray-800">24 Months</div>
                          <div className="text-xs text-gray-600">Duration</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-2 rounded-lg text-center">
                          <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                          <div className="text-sm font-bold text-gray-800">60 Seats</div>
                          <div className="text-xs text-gray-600">Available</div>
                        </div>
                      </div>

                      {/* Deadline Alert */}
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-2 rounded-lg">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                          <p className="text-xs font-semibold text-red-700">Application Deadline</p>
                        </div>
                        <p className="text-sm font-bold text-red-600">December 30, 2025</p>
                        <p className="text-xs text-gray-600">
                          {daysLeft !== null && daysLeft > 0
                            ? `Only ${daysLeft} day${daysLeft === 1 ? '' : 's'} left to apply!`
                            : 'Applications closed'}
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-2 sm:space-y-3">
                        <Button 
                          variant="outline"
                          className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                        >
                          Enquiry Now
                          <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                          onClick={applyNow}
                        >
                          Secure Your Seat Now
                          <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements around Card - Hidden on mobile */}
                  <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
                  <div className="hidden sm:block absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

