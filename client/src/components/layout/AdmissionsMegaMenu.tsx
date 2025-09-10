import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, GraduationCap, Briefcase, Globe, Download, ArrowRight, Users, Award, MapPin } from 'lucide-react';
import { getProgramsByCategory } from '../../lib/programsData';
import { downloadBrochure } from '../../lib/utils';

interface AdmissionsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdmissionsMegaMenu: React.FC<AdmissionsMegaMenuProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get programs dynamically from programsData
  const plusPrograms = getProgramsByCategory('pgdm-plus');
  const executivePrograms = getProgramsByCategory('executive');
  const mbaPrograms = getProgramsByCategory('mba-global');

  const admissionsData = {
    'pgdm-plus': {
      title: 'PGDM Plus Programs (for Fresh Graduates)',
      icon: <GraduationCap className="h-5 w-5" />,
      courses: plusPrograms.map(program => ({
        name: program.name,
        slug: program.slug
      }))
    },
    'executive': {
      title: 'PGDM Programs (for Working Executives/Blended Mode)',
      icon: <Briefcase className="h-5 w-5" />,
      courses: executivePrograms.map(program => ({
        name: program.name,
        slug: program.slug
      }))
    },
    'mba-global': {
      title: 'MBA (Global) Program',
      icon: <Globe className="h-5 w-5" />,
      courses: mbaPrograms.map(program => ({
        name: program.name,
        slug: program.slug
      }))
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-20 z-40"
        onClick={onClose}
      />
      
      {/* Mega Menu */}
      <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-4 border-teal-500 z-50 ">
        {/* Hero Banner with Image */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 text-white">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/uploads/imas_hero_image1.webp" 
              alt="IMAS Campus" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-6 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Choose Your Path to Success</h2>
                <p className="text-blue-100 text-sm">AICTE-Approved Programs • 100% Placement • Global Recognition</p>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>50+ Recruiters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>₹18.5L Highest Package</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kolkata Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-8 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(admissionsData).map(([key, category]) => (
              <div 
                key={key}
                className="group"
                onMouseEnter={() => setActiveCategory(key)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category Header with Enhanced Design */}
                <div className="relative mb-6">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 group-hover:border-teal-300 group-hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1">
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {category.courses.length} Program{category.courses.length > 1 ? 's' : ''} Available
                      </p>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                
                {/* Enhanced Course List */}
                <div className="space-y-3">
                  {category.courses.map((course, index) => (
                    <Link
                      key={index}
                      to={`/programs/${course.slug}`}
                      className="group/course block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-teal-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 rounded-lg transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:shadow-md transform hover:-translate-y-0.5"
                      onClick={() => {
                        console.log(`Selected: ${course.name}`);
                        onClose();
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-gray-100 group-hover/course:bg-teal-100 rounded-full flex items-center justify-center text-xs font-semibold text-gray-500 group-hover/course:text-teal-600 transition-colors duration-300">
                            {index + 1}
                          </span>
                          <span className="font-medium">{course.name}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover/course:text-teal-500 transform group-hover/course:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Enhanced View All Button */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link 
                    to="/programs"
                    className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-semibold px-4 py-2 rounded-lg hover:bg-teal-50 transition-all duration-300 group/viewall"
                    onClick={onClose}
                  >
                    <span>View All Programs</span>
                    <ArrowRight className="h-4 w-4 transform group-hover/viewall:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Bottom CTA Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Ready to Start Your Journey?</h4>
                <p className="text-sm text-gray-600 mb-2">Explore our comprehensive admission process and requirements.</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Admissions Open
                  </span>
                  <span>Limited Seats Available</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  className="flex items-center gap-2 px-6 py-3 text-sm border-2 border-teal-500 text-teal-600 hover:bg-teal-50 hover:border-teal-600 rounded-lg transition-all duration-300 font-semibold group/download"
                  onClick={() => {
                    downloadBrochure();
                    onClose();
                  }}
                >
                  <Download className="h-4 w-4 group-hover/download:animate-bounce" />
                  Download Brochure
                </button>
                <a 
                  href="https://admission.imas.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 text-sm bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 group/apply"
                  onClick={onClose}
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4 group-hover/apply:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionsMegaMenu;