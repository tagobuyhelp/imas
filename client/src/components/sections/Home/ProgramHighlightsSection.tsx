import React from 'react';
import { Button } from '../../ui/button';
import { Clock, MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { Link } from 'react-router-dom';

export function ProgramHighlightsSection() {
  return (
    <section id="program-highlights" className="relative z-10">
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 border border-gray-100 mt-[20px] sm:mt-[-4rem] relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>

          <div className="space-y-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Duration Card */}
            <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up p-2 sm:p-4  hover:bg-gray-50 border-b sm:border-b-0 border-gray-200" style={{ animationDelay: '0.6s' }}>
              {/* First Row - Icon */}
              <div className="flex-shrink-0 mr-2 sm:mr-4">
                <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#26c1d3]/20 to-[#2e7bb3]/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl animate-float`}>
                  <Clock className={`h-4 w-4 sm:h-6 sm:w-6 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                </div>
              </div>
              {/* Second Row - Text Content */}
              <div className="flex-1">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">Duration</h3>
                <p className={`text-base sm:text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>2 Years</p>
                <p className="text-xs text-gray-500">Includes Industry Projects</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up p-2 sm:p-4  hover:bg-gray-50 border-b sm:border-b-0 border-gray-200" style={{ animationDelay: '0.7s' }}>
              {/* First Row - Icon */}
              <div className="flex-shrink-0 mr-2 sm:mr-4">
                <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#26c1d3]/20 to-[#2e7bb3]/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl animate-float`} style={{ animationDelay: '0.2s' }}>
                  <MapPin className={`h-4 w-4 sm:h-6 sm:w-6 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                </div>
              </div>
              {/* Second Row - Text Content */}
              <div className="flex-1">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">Location</h3>
                <p className={`text-base sm:text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>Kolkata</p>
                <p className="text-xs text-gray-500">Salt Lake Sector V</p>
              </div>
            </div>

            {/* Format Card */}
            <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up p-2 sm:p-4  hover:bg-gray-50 border-b sm:border-b-0 border-gray-200" style={{ animationDelay: '0.8s' }}>
              {/* First Row - Icon */}
              <div className="flex-shrink-0 mr-2 sm:mr-4">
                <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#26c1d3]/20 to-[#2e7bb3]/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl animate-float`} style={{ animationDelay: '0.4s' }}>
                  <Users className={`h-4 w-4 sm:h-6 sm:w-6 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                </div>
              </div>
              {/* Second Row - Text Content */}
              <div className="flex-1">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">Format</h3>
                <p className={`text-base sm:text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>Full-Time</p>
                <p className="text-xs text-gray-500">On-Campus Learning</p>
              </div>
            </div>

            {/* Commencement Card */}
            <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up p-2 sm:p-4  hover:bg-gray-50 border-b sm:border-b-0 border-gray-200" style={{ animationDelay: '0.9s' }}>
              {/* First Row - Icon */}
              <div className="flex-shrink-0 mr-2 sm:mr-4">
                <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#26c1d3]/20 to-[#2e7bb3]/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl animate-float`} style={{ animationDelay: '0.6s' }}>
                  <Calendar className={`h-4 w-4 sm:h-6 sm:w-6 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                </div>
              </div>
              {/* Second Row - Text Content */}
              <div className="flex-1">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">Commencement</h3>
                <p className={`text-base sm:text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>Sep 2025</p>
                <p className="text-xs text-gray-500">Applications Open</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-4 sm:mt-6 pt-4 border-t border-gray-100 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Link to="/programs">
              <Button className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all text-sm hover:scale-105`}>
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
