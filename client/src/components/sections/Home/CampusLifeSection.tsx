import React from 'react';
import { MapPin, Users, BookOpen, Calendar, Building, Award, Globe, Target } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';

export function CampusLifeSection() {

  return (
    <section id="campus-life" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs capitalize sm:text-sm font-bold mb-4 sm:mb-6 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
            CAMPUS LIFE AT IMAS KOLKATA          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            Experience The{' '}
            <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
              Vibrant Campus Life
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto px-4">
            Discover The Dynamic Campus Environment At Imas College Kolkata, Where Learning Meets Innovation And Opportunities Abound.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8">

            {/* Campus Information Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
              <div className="space-y-8">
                {/* Campus Features */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_TEAL} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-lg">PRIME LOCATION</h3>
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">Located in Salt Lake Sector V, Kolkata's IT hub, near St. Xavier's University Newtown</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Building className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-lg">MODERN INFRASTRUCTURE</h3>
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">State-of-the-art facilities with modern classrooms and technology</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-lg">LEARNING ENVIRONMENT</h3>
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">Conducive atmosphere for academic excellence and personal growth</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_TEAL} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-lg">STUDENT ACTIVITIES</h3>
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">Rich campus life with various clubs, events, and networking opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200"></div>

                {/* Campus Location */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center shadow-lg`}>
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-lg">CAMPUS LOCATION</h3>
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                        Salt Lake Sector V
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm text-gray-600 ml-13">
                    <p>
                      <strong>Address:</strong> Near St. Xavier's University Newtown, Salt Lake Sector V, Kolkata
                    </p>
                    <p>
                      <strong>Connectivity:</strong> Well-connected by public transport and easily accessible from all parts of Kolkata
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Campus Image */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
                <img
                  src="/uploads/1712214383phpdRsdhB.jpeg"
                  alt="IMAS Campus - Premier Business School in Kolkata"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center shadow-lg`}>
                      <Building className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-lg font-bold text-white">IMAS CAMPUS</h3>
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white`}>
                        State-of-the-Art Facilities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Stats */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-2">
                  CAMPUS HIGHLIGHTS
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  VIBRANT LEARNING ENVIRONMENT
                </p>
              </div>
              <div className="space-y-4 grid grid-cols-4 gap-4 justify-center items-center">
                <div className="text-center">
                  <div className={`text-1xl sm:text-3xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>500+</div>
                  <p className="text-[10px] sm:text-sm text-gray-600 font-medium">STUDENTS</p>
                </div>
                <div className="text-center">
                  <div className={`text-1xl sm:text-3xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>50+</div>
                  <p className="text-[10px] sm:text-sm text-gray-600 font-medium">FACULTY</p>
                </div>
                <div className="text-center">
                  <div className={`text-1xl sm:text-3xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>100%</div>
                  <p className="text-[10px] sm:text-sm text-gray-600 font-medium">PLACEMENT</p>
                </div>
                <div className="text-center">
                  <div className={`text-1xl sm:text-3xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>AICTE</div>
                  <p className="text-[10px] sm:text-sm text-gray-600 font-medium">APPROVED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
