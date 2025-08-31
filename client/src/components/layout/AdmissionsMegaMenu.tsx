import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, GraduationCap, Briefcase, Globe } from 'lucide-react';
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
      <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-4 border-teal-500 z-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(admissionsData).map(([key, category]) => (
              <div 
                key={key}
                className="group"
                onMouseEnter={() => setActiveCategory(key)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 group-hover:border-teal-300 transition-all duration-300">
                  <div className="text-teal-600">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm leading-tight">
                    {category.title}
                  </h3>
                </div>
                
                {/* Course List */}
                <div className="space-y-2">
                  {category.courses.map((course, index) => (
                    <Link
                      key={index}
                      to={`/programs/${course.slug}`}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-all duration-200 border border-transparent hover:border-teal-200"
                      onClick={() => {
                        console.log(`Selected: ${course.name}`);
                        onClose();
                      }}
                    >
                      <span className="text-xs text-gray-400 mr-2">{index + 1}.</span>
                      {course.name}
                    </Link>
                  ))}
                </div>
                
                {/* View All Button */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Link 
                    to="/admissions"
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                    onClick={onClose}
                  >
                    View All Programs
                    <ChevronDown className="h-3 w-3 rotate-[-90deg] group-hover:rotate-0 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Ready to Start Your Journey?</h4>
                <p className="text-sm text-gray-600">Explore our comprehensive admission process and requirements.</p>
              </div>
              <div className="flex gap-3">
                <button 
                  className="px-4 py-2 text-sm border border-teal-500 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                  onClick={() => {
                    downloadBrochure();
                    onClose();
                  }}
                >
                  Download Brochure
                </button>
                <Link 
                  to="/admissions"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 rounded-lg transition-all duration-200"
                  onClick={onClose}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionsMegaMenu;