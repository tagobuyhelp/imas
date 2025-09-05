import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, GraduationCap, Briefcase, Globe, FileText } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';
import { getProgramsByCategory } from '../../lib/programsData';
import { downloadBrochure } from '../../lib/utils';

interface MobileAdmissionsMenuProps {
  isExpanded: boolean;
  onToggle: () => void;
  onCourseSelect?: (course: string) => void;
}

const MobileAdmissionsMenu: React.FC<MobileAdmissionsMenuProps> = ({ 
  isExpanded, 
  onToggle, 
  onCourseSelect 
}) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Get programs dynamically from programsData
  const plusPrograms = getProgramsByCategory('pgdm-plus');
  const executivePrograms = getProgramsByCategory('executive');
  const mbaPrograms = getProgramsByCategory('mba-global');

  const admissionsData = {
    'pgdm-plus': {
      title: 'PGDM Plus Programs',
      subtitle: '(for Fresh Graduates)',
      icon: <GraduationCap className="h-4 w-4" />,
      courses: plusPrograms.map(program => ({
        name: program.name,
        slug: program.slug
      }))
    },
    'executive': {
      title: 'PGDM Programs',
      subtitle: '(for Working Executives/Blended Mode)',
      icon: <Briefcase className="h-4 w-4" />,
      courses: executivePrograms.map(program => ({
        name: program.name,
        slug: program.slug
      }))
    },
    'mba-global': {
      title: 'MBA (Global) Program',
      subtitle: '',
      icon: <Globe className="h-4 w-4" />,
      courses: mbaPrograms.map(program => ({
        name: program.name,
        slug: program.slug
      }))
    }
  };

  const handleCategoryToggle = (categoryKey: string) => {
    setExpandedCategory(expandedCategory === categoryKey ? null : categoryKey);
  };

  const handleCourseClick = (course: { name: string; slug: string }) => {
    if (onCourseSelect) {
      onCourseSelect(course.name);
    }
  };

  return (
    <div className="w-full">
      {/* Main Admissions Button */}
      <button
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors
          ${isExpanded 
            ? `${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 border ${IMAS_TAILWIND_CLASSES.BORDER_TEAL}/20` 
            : `text-gray-600 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} ${IMAS_TAILWIND_CLASSES.HOVER_BG_TEAL}/5`
          }
        `}
      >
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5" />
          <span className="font-medium">Admissions</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pl-4 pt-2 space-y-2">
          {Object.entries(admissionsData).map(([key, category]) => (
            <div key={key} className="border-l-2 border-gray-200 pl-4">
              {/* Category Header */}
              <button
                onClick={() => handleCategoryToggle(key)}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors
                  ${expandedCategory === key 
                    ? `${IMAS_TAILWIND_CLASSES.BG_TEAL}/5 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}` 
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <div className={expandedCategory === key ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : 'text-gray-500'}>
                    {category.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{category.title}</div>
                    {category.subtitle && (
                      <div className="text-xs text-gray-500">{category.subtitle}</div>
                    )}
                  </div>
                </div>
                <ChevronRight className={`h-3 w-3 transition-transform duration-200 ${expandedCategory === key ? 'rotate-90' : ''}`} />
              </button>

              {/* Course List */}
              <div className={`overflow-hidden transition-all duration-300 ${expandedCategory === key ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pt-1 space-y-1">
                  {category.courses.map((course, index) => (
                    <Link
                      key={index}
                      to={`/programs/${course.slug}`}
                      onClick={() => handleCourseClick(course)}
                      className="w-full text-left px-2 py-1.5 text-xs text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors block"
                    >
                      <span className="text-gray-400 mr-2">{index + 1}.</span>
                      {course.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Quick Actions */}
          <div className="pt-3 mt-3 border-t border-gray-200">
            <div className="space-y-2">
              <button 
                className="w-full px-3 py-2 text-sm text-teal-600 hover:bg-teal-50 rounded-md transition-colors text-left flex items-center gap-2"
                onClick={downloadBrochure}
              >
                <FileText className="h-4 w-4" />
                Download Brochure
              </button>
              <a 
                href="https://admission.imas.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-2 text-sm bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-md hover:from-blue-700 hover:to-teal-700 transition-all flex items-center gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAdmissionsMenu;