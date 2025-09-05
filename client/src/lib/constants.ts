// IMAS Brand Colors
export const IMAS_COLORS = {
    DARK_BLUE: '#143674',
    MEDIUM_BLUE: '#2e7bb3',
    TEAL: '#26c1d3',
    // RGB values for opacity/alpha usage
    DARK_BLUE_RGB: '20, 54, 116',
    MEDIUM_BLUE_RGB: '46, 123, 179',
    TEAL_RGB: '38, 193, 211',
} as const;

// IMAS Brand Information
export const IMAS_BRAND = {
    NAME: 'IMAS International Management & Analytics School',
    SHORT_NAME: 'IMAS',
    TAGLINE: 'Empowering Future Business Leaders',
    WEBSITE: 'www.imas.ac.in',
    EMAIL: 'info@imas.ac.in',
    PHONE: '+91 98765 43210',
    ADDRESS: 'Salt Lake Sector V, Kolkata',
} as const;

// IMAS Contact Information
export const IMAS_CONTACT = {
    PHONE: '+91 98765 43210',
    EMAIL: 'info@imas.ac.in',
    WEBSITE: 'www.imas.ac.in',
    ADDRESS: 'Salt Lake Sector V, Kolkata, West Bengal, India',
} as const;

// IMAS Social Media
export const IMAS_SOCIAL = {
    FACEBOOK: 'https://www.facebook.com/imasbschoolindia/',
    INSTAGRAM: 'https://www.instagram.com/imasbschool/',
    LINKEDIN: 'https://www.linkedin.com/company/imasbschool/',
    YOUTUBE: '#',
    TWITTER: '#',
} as const;

// IMAS Programs
export const IMAS_PROGRAMS = {
    REGULAR: [
        'Post Graduate Diploma in Management (PGDM)',
        'MBA (Global)',
        'PGDM in Business Analytics Kolkata',
        'PGDM in Artificial Intelligence & Data Science',
        'PGDM in Fintech',
        'PGDM in Innovation, Entrepreneurship & Venture Development (IEV)',
    ],
    EXECUTIVE: [
        'PGDM in Hospital & Healthcare Administration',
        'PGDM in Business Analytics (PGDM-BA)',
        'PGDM in AI & Data Science',
        'PGDM in Fintech',
        'PGDM in Marketing',
        'PGDM in Human Resource (MBA in HR Kolkata)',
        'PGDM in Finance (MBA in Finance Kolkata)',
        'PGDM in Logistics & Supply Chain Management',
    ],
} as const;

// IMAS Statistics
export const IMAS_STATS = {
    PLACEMENT_RATE: '97%',
    MEDIAN_SALARY: '₹25 LPA',
    LEARNERS_PLACED: '10K+',
    HIGHEST_SALARY: '₹1.5CR',
    FACULTY_COUNT: '117+',
    PROGRAMS_COMPLETED: '12,456+',
} as const;

// IMAS Key Dates
export const IMAS_DATES = {
    APPLICATION_DEADLINE: '2025-08-24T23:59:59',
    COMMENCEMENT: 'September 2025',
    INTAKE_PHASE: 'Phase 7',
} as const;

// CSS Class Names for IMAS Colors
export const IMAS_COLOR_CLASSES = {
    // Background colors
    BG_DARK_BLUE: 'bg-imas-dark-blue',
    BG_MEDIUM_BLUE: 'bg-imas-medium-blue',
    BG_TEAL: 'bg-imas-teal',

    // Text colors
    TEXT_DARK_BLUE: 'text-imas-dark-blue',
    TEXT_MEDIUM_BLUE: 'text-imas-medium-blue',
    TEXT_TEAL: 'text-imas-teal',

    // Border colors
    BORDER_DARK_BLUE: 'border-imas-dark-blue',
    BORDER_MEDIUM_BLUE: 'border-imas-medium-blue',
    BORDER_TEAL: 'border-imas-teal',

    // Hover background colors
    HOVER_BG_DARK_BLUE: 'hover:bg-imas-dark-blue',
    HOVER_BG_MEDIUM_BLUE: 'hover:bg-imas-medium-blue',
    HOVER_BG_TEAL: 'hover:bg-imas-teal',

    // Hover text colors
    HOVER_TEXT_DARK_BLUE: 'hover:text-imas-dark-blue',
    HOVER_TEXT_MEDIUM_BLUE: 'hover:text-imas-medium-blue',
    HOVER_TEXT_TEAL: 'hover:text-imas-teal',

    // Gradients
    GRADIENT_IMAS: 'bg-gradient-imas',
    GRADIENT_PRIMARY: 'bg-gradient-imas-primary',
    GRADIENT_SECONDARY: 'bg-gradient-imas-secondary',
} as const;

// Tailwind CSS classes for IMAS colors (for direct use)
export const IMAS_TAILWIND_CLASSES = {
    // Background colors
    BG_DARK_BLUE: 'bg-[#143674]',
    BG_MEDIUM_BLUE: 'bg-[#2e7bb3]',
    BG_TEAL: 'bg-[#26c1d3]',

    // Text colors
    TEXT_DARK_BLUE: 'text-[#143674]',
    TEXT_MEDIUM_BLUE: 'text-[#2e7bb3]',
    TEXT_TEAL: 'text-[#26c1d3]',

    // Border colors
    BORDER_DARK_BLUE: 'border-[#143674]',
    BORDER_MEDIUM_BLUE: 'border-[#2e7bb3]',
    BORDER_TEAL: 'border-[#26c1d3]',

      // Hover states
  HOVER_BG_DARK_BLUE: 'hover:bg-[#143674]',
  HOVER_BG_MEDIUM_BLUE: 'hover:bg-[#2e7bb3]',
  HOVER_BG_TEAL: 'hover:bg-[#26c1d3]',

  HOVER_TEXT_DARK_BLUE: 'hover:text-[#143674]',
  HOVER_TEXT_MEDIUM_BLUE: 'hover:text-[#2e7bb3]',
  HOVER_TEXT_TEAL: 'hover:text-[#26c1d3]',

  HOVER_BORDER_DARK_BLUE: 'hover:border-[#143674]',
  HOVER_BORDER_MEDIUM_BLUE: 'hover:border-[#2e7bb3]',
  HOVER_BORDER_TEAL: 'hover:border-[#26c1d3]',

    // Gradients
    GRADIENT_PRIMARY: 'bg-gradient-to-r from-[#143674] to-[#2e7bb3]',
    GRADIENT_SECONDARY: 'bg-gradient-to-r from-[#2e7bb3] to-[#26c1d3]',
    GRADIENT_FULL: 'bg-gradient-to-r from-[#143674] via-[#2e7bb3] to-[#26c1d3]',
} as const;
