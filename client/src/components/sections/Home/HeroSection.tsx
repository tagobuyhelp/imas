import React from 'react';
import { Button } from '../../ui/button';
import { Carousel } from '../../ui/carousel';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { downloadBrochure, applyNow } from '../../../lib/utils';
import { ArrowRight, Download } from 'lucide-react';

export function HeroSection() {
  // Sample carousel images - replace with actual IMAS images
  const carouselImages = [
    '/uploads/imas_hero_image_2.webp',
    '/uploads/imas_hero_image1.webp',
    '/uploads/imas_hero_image3.webp',
  ];

  return (
    <section id="hero" className="bg-gray-900 text-white min-h-[90vh] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-20 h-20 ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 rounded-full animate-pulse`}></div>
        <div className={`absolute top-40 right-20 w-16 h-16 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-full animate-bounce`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-20 left-1/4 w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 rounded-full animate-ping`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1260px] mx-auto px-4 py-6 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 justify-items-end items-center min-h-[60vh] sm:min-h-[70vh]">

          {/* Left Section - Program Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-up w-full">
            {/* Image Carousel */}
            <section className="h-[200px] sm:h-[250px] md:h-[150px] lg:h-[250px]">
              <Carousel
                images={carouselImages}
                autoPlay={true}
                interval={1000}
                showControls={false}
                showIndicators={false}
                className="h-full"
              />
            </section>

            {/* Program Title */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                India's Only B-School Powered by Industry Experts & Designed for Tomorrow's Leaders
              </h1>
              <p className={`text-base sm:text-lg md:text-xl ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} mb-4 sm:mb-6 animate-pulse`}>
                Hands-on learning, enhanced with AI
              </p>
            </div>

            {/* Key Highlights */}
            <div className="relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-full overflow-hidden">
                <div className="flex gap-4 sm:gap-6 animate-scroll-left whitespace-nowrap">
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}>
                    AICTE-Approved Programmes
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}>
                    100% Placement Assurance
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}>
                    International Collaborations
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}>
                    Industry Expert Faculty
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}>
                    Modern Infrastructure
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}>
                    Global Partnerships
                  </span>
                  {/* Duplicate items for seamless loop */}
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}>
                    AICTE-Approved Programmes
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}>
                    100% Placement Assurance
                  </span>
                  <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}>
                    International Collaborations
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button 
                className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300`}
                onClick={applyNow}
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300"
                onClick={downloadBrochure}
              >
                Download Brochure
                <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Right Section - Key Statistics & Highlights */}
          <div className="bg-white text-gray-800 rounded-lg p-3 sm:p-4 lg:p-6 shadow-xl w-full max-w-[400px] sm:max-w-[450px] h-full mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4 sm:space-y-6">
              {/* Program Year */}
              <div className="border-b border-gray-300 pb-3">
                <p className="text-gray-500 text-xs">IMAS 2025</p>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight mt-1">
                  PGDM Admission Open for 19th Sep 2025
                </h2>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className={`text-xl sm:text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`}>100%</div>
                  <div className="text-xs text-gray-600">Placement Assurance</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className={`text-xl sm:text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`}>15+</div>
                  <div className="text-xs text-gray-600">Industry Partners</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className={`text-xl sm:text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`}>50+</div>
                  <div className="text-xs text-gray-600">Expert Faculty</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className={`text-xl sm:text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`}>AICTE</div>
                  <div className="text-xs text-gray-600">Approved</div>
                </div>
              </div>

              

              {/* Application Deadline */}
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="text-xs text-gray-700 text-center">
                  Final Intake Phase 7 Application Deadline
                </p>
                <p className="font-bold text-red-600 text-center animate-pulse text-sm mt-1">
                  24th August 2025
                </p>
              </div>

              {/* Primary CTA */}
              <Button 
                className={`w-full ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white py-3 text-base sm:text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300`}
                onClick={applyNow}
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
