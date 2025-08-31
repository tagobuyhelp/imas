export interface RecruiterLogo {
    name: string;
    logo: string;
    alt: string;
}

export interface CTA {
    title: string;
    description: string;
    buttons: Array<{
        text: string;
        action: 'apply' | 'enquire' | 'download' | 'custom';
        url?: string;
    }>;
}

export interface HeroImage {
    desktop: string;
    mobile: string;
    alt: string;
}

export interface Program {
    id: string;
    slug: string;
    name: string;
    category: 'pgdm-plus' | 'executive' | 'mba-global';
    subcategory?: string;
    duration: string;
    format: 'full-time' | 'blended' | 'global';
    location: string;
    commencement: string;
    description: string;
    overview: string;
    highlights: string[];
    whatYouLearn: string[];
    careerOpportunities: string[];
    eligibility: {
        education: string;
        exams: string;
        experience?: string;
        additional?: string;
    };
    placement: {
        highestCTC: string;
        averageCTC: string;
        placementRate: string;
        topRecruiters: RecruiterLogo[];
    };
    curriculum?: {
        phases: Array<{
            phase: string;
            title: string;
            duration: string;
            topics: string[];
        }>;
    };
    certifications: string[];
    internationalExposure?: string[];
    fees?: {
        year1?: string;
        year2?: string;
        total?: string;
    };
    structure?: {
        year1?: {
            location: string;
            qualification: string;
            fees: string;
        };
        year2?: {
            location: string;
            qualification: string;
            fees: string;
        };
    };
    heroImage: HeroImage;
    cta: CTA;
    seo: {
        title: string;
        description: string;
        keywords: string[];
        canonical: string;
    };
}

// Recruiter logos mapping
const recruiterLogos: Record<string, RecruiterLogo> = {
    'Amazon': {
        name: 'Amazon',
        logo: '/uploads/Customer-logo_Amazon.png',
        alt: 'Amazon Logo'
    },
    'Deloitte': {
        name: 'Deloitte',
        logo: '/uploads/deloitte.png',
        alt: 'Deloitte Logo'
    },
    'Accenture': {
        name: 'Accenture',
        logo: '/uploads/Accenture.svg.webp',
        alt: 'Accenture Logo'
    },
    'Google': {
        name: 'Google',
        logo: '/uploads/Google_logo_2013-2015-600x206.png',
        alt: 'Google Logo'
    },
    'Flipkart': {
        name: 'Flipkart',
        logo: '/uploads/flipkart-logo.webp',
        alt: 'Flipkart Logo'
    },
    'Zomato': {
        name: 'Zomato',
        logo: '/uploads/Zomato-Logo.png',
        alt: 'Zomato Logo'
    },
    'Swiggy': {
        name: 'Swiggy',
        logo: '/uploads/swiggy-logo.svg',
        alt: 'Swiggy Logo'
    },
    'Ola': {
        name: 'Ola',
        logo: '/uploads/Ola_Cabs_logo.svg',
        alt: 'Ola Cabs Logo'
    },
    'Razorpay': {
        name: 'Razorpay',
        logo: '/uploads/Razorpay-Logo.jpg',
        alt: 'Razorpay Logo'
    },
    'TCS': {
        name: 'TCS',
        logo: '/uploads/Tata_Consultancy_Services_old_logo.svg.png',
        alt: 'TCS Logo'
    },
    'Infosys': {
        name: 'Infosys',
        logo: '/uploads/InfosysLogo.png',
        alt: 'Infosys Logo'
    },
    'Wipro': {
        name: 'Wipro',
        logo: '/uploads/Wipro_Primary_Logo_Color_RGB.svg.png',
        alt: 'Wipro Logo'
    },
    'HDFC Bank': {
        name: 'HDFC Bank',
        logo: '/uploads/hdfc-bank-logo-czdJZ5Tf_t.jpg',
        alt: 'HDFC Bank Logo'
    },
    'ICICI Bank': {
        name: 'ICICI Bank',
        logo: '/uploads/ICICI_Bank_Logo.svg.png',
        alt: 'ICICI Bank Logo'
    },
    'Axis Bank': {
        name: 'Axis Bank',
        logo: '/uploads/axisBankLogo.png',
        alt: 'Axis Bank Logo'
    },
    'Paytm': {
        name: 'Paytm',
        logo: '/uploads/PaytmLogo.png',
        alt: 'Paytm Logo'
    },
    'PhonePe': {
        name: 'PhonePe',
        logo: '/uploads/phonepe-1.svg',
        alt: 'PhonePe Logo'
    },
    'Apollo Hospitals': {
        name: 'Apollo Hospitals',
        logo: '/uploads/apollo-hospitals-logo-png-transparent.png',
        alt: 'Apollo Hospitals Logo'
    },
    'Fortis': {
        name: 'Fortis',
        logo: '/uploads/fortis_logo.png',
        alt: 'Fortis Logo'
    },
    'PwC': {
        name: 'PwC',
        logo: '/uploads/pwclogo.png',
        alt: 'PwC Logo'
    },
    'EY': {
        name: 'EY',
        logo: '/uploads/EY_logo_2019.svg.png',
        alt: 'EY Logo'
    },
    'KPMG': {
        name: 'KPMG',
        logo: '/uploads/kpmglogo.png',
        alt: 'KPMG Logo'
    },
    'HSBC': {
        name: 'HSBC',
        logo: '/uploads/HSB-_Logo_1.png',
        alt: 'HSBC Logo'
    },
    'Byju\'s': {
        name: 'Byju\'s',
        logo: '/uploads/Byju\'s_logo.svg.png',
        alt: 'Byju\'s Logo'
    },
    'Aditya Birla Group': {
        name: 'Aditya Birla Group',
        logo: '/uploads/Aditya_Birla_Group_Logo.svg.png',
        alt: 'Aditya Birla Group Logo'
    },
    'McKinsey': {
        name: 'McKinsey & Company',
        logo: '/uploads/mckinseylogo.png',
        alt: 'McKinsey & Company Logo'
    },
    'BCG': {
        name: 'Boston Consulting Group',
        logo: '/uploads/BCG_MONOGRAM.png',
        alt: 'Boston Consulting Group Logo'
    },
    'IBM': {
        name: 'IBM',
        logo: '/uploads/IBM_logo.svg.webp',
        alt: 'IBM Logo'
    },
    'Microsoft': {
        name: 'Microsoft',
        logo: '/uploads/purepng.com-microsoft-logologobrand-logoiconslogos-251519939132du80p.png',
        alt: 'Microsoft Logo'
    },
    'Apollo': {
        name: 'Apollo',
        logo: '/uploads/apollo-hospitals-logo-png-transparent.png',
        alt: 'Apollo Logo'
    },
    'Max': {
        name: 'Max Healthcare',
        logo: '/uploads/max-logo.png',
        alt: 'Max Healthcare Logo'
    },
    'Manipal': {
        name: 'Manipal Hospitals',
        logo: '/uploads/manipalhospitallogo.png',
        alt: 'Manipal Hospitals Logo'
    },
    'HDFC': {
        name: 'HDFC',
        logo: '/uploads/hdfc-bank-logo-czdJZ5Tf_t.jpg',
        alt: 'HDFC Logo'
    },
    'ICICI': {
        name: 'ICICI',
        logo: '/uploads/ICICI_Bank_Logo.svg.png',
        alt: 'ICICI Logo'
    },
    'Axis': {
        name: 'Axis Bank',
        logo: '/uploads/axisBankLogo.png',
        alt: 'Axis Bank Logo'
    },
    'Kotak': {
        name: 'Kotak Mahindra Bank',
        logo: '/uploads/kotaklogo.png',
        alt: 'Kotak Mahindra Bank Logo'
    },
    'Bajaj': {
        name: 'Bajaj',
        logo: '/uploads/bajaj-auto-logo-motorcycle-company-png-favpng-Ba7ZrxBzWGFusbuagxv99a8Uu.jpg',
        alt: 'Bajaj Logo'
    },
    'DHL': {
        name: 'DHL',
        logo: '/uploads/dhl-1.svg',
        alt: 'DHL Logo'
    },
    'FedEx': {
        name: 'FedEx',
        logo: '/uploads/purepng.com-fedex-logologobrand-logoiconslogos-251519939539h7rji.png',
        alt: 'FedEx Logo'
    },
    'Blue Dart': {
        name: 'Blue Dart',
        logo: '/uploads/460-4608309_blue-dart-logo-transparent-blue-dart-express-logo.png',
        alt: 'Blue Dart Logo'
    },
    'Mahindra': {
        name: 'Mahindra Group',
        logo: '/uploads/mahindra-logo-vector-free-11574210410bvsayvnvbr.png',
        alt: 'Mahindra Group Logo'
    },
    'Tata': {
        name: 'Tata Group',
        logo: '/uploads/tatalogo.jpg',
        alt: 'Tata Group Logo'
    },
    'Godrej': {
        name: 'Godrej',
        logo: '/uploads/Godrej_Logo.svg.png',
        alt: 'Godrej Logo'
    },
    'ITC': {
        name: 'ITC Limited',
        logo: '/uploads/ITC_Limited_Logo.svg.png',
        alt: 'ITC Limited Logo'
    },
    'L&T': {
        name: 'Larsen & Toubro',
        logo: '/uploads/L&T.png',
        alt: 'Larsen & Toubro Logo'
    }
};

export const programsData: Program[] = [
    {
        id: 'pgdm-plus-marketing',
        slug: 'pgdm-plus-marketing-management',
        name: 'PGDM Plus in Marketing Management',
        category: 'pgdm-plus',
        subcategory: 'marketing',
        duration: '2 Years',
        format: 'full-time',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM Plus in Marketing Management at IMAS Kolkata is a comprehensive 2-year program designed to create marketing leaders who can navigate the complexities of modern consumer behavior, digital transformation, and global brand management. This AICTE-approved program combines theoretical foundations with practical applications, ensuring graduates are industry-ready from day one.',
        overview: 'The PGDM Plus in Marketing Management at IMAS Kolkata is a transformative 2-year full-time program designed for aspiring marketers who want to master branding, digital strategy, consumer psychology, and sales leadership.',
        highlights: [
            'Two-Year Full-Time PGDM Plus (AICTE Approved)',
            'Digital Marketing & Social Media Strategy with hands-on campaigns',
            'Brand Management & Consumer Psychology with real case studies',
            'Market Research & Analytics using latest tools and techniques',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            '20+ Presentations per Semester to boost confidence',
            'Live Business Projects, Winter & Summer Internships',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from top marketing leaders',
            'Global Alumni Network across brands like HUL, Deloitte, and Amazon',
            'Soft Skills & Communication Training from Day 1',
            'Certifications in Google Ads, Facebook Marketing, and HubSpot',
            'Entrepreneurship incubation for marketing startups'
        ],
        whatYouLearn: [
            'Marketing Strategy & Planning',
            'Digital Marketing & E-commerce',
            'Brand Management & Brand Equity',
            'Consumer Behavior & Neuromarketing',
            'Market Research & Data Analytics',
            'Sales Management & Channel Strategy',
            'Integrated Marketing Communication',
            'Content Marketing & Storytelling',
            'Social Media Marketing & Influencer Strategy',
            'Marketing Analytics & Performance Measurement',
            'International Marketing & Global Brands',
            'Retail Marketing & Customer Experience',
            'Digital & Performance Marketing',
            'Social Media Analytics & SEO',
            'Marketing Metrics, ROI & CRM'
        ],
        careerOpportunities: [
            'Brand Manager',
            'Digital Marketing Manager',
            'Market Research Analyst',
            'Sales Manager',
            'Marketing Consultant',
            'Content Marketing Specialist',
            'Social Media Strategist',
            'Product Marketing Manager',
            'Marketing Analytics Manager',
            'Customer Experience Manager',
            'Marketing Communications Manager',
            'E-commerce Marketing Manager',
            'Digital Marketing & Paid Ads',
            'Social Media Strategy',
            'Market Research & Insights',
            'Retail & Sales Strategy',
            'B2B/B2C Campaign Design',
            'Client Servicing & Account Management'
        ],
        eligibility: {
            education: 'Graduation (2022–2025) with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score',
            additional: 'Strong communication skills and creative aptitude'
        },
        placement: {
            highestCTC: '₹18.5 LPA',
            averageCTC: '₹8–12 LPA',
            placementRate: '100%',
            topRecruiters: [
                recruiterLogos['Amazon'],
                recruiterLogos['Google'],
                recruiterLogos['Flipkart'],
                recruiterLogos['Zomato'],
                recruiterLogos['Swiggy'],
                recruiterLogos['PwC'],
                recruiterLogos['Aditya Birla Group'],
                recruiterLogos['EY'],
                recruiterLogos['HDFC Bank'],
                recruiterLogos['Byju\'s']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Core Management',
                    duration: '6 Months',
                    topics: ['Business Fundamentals', 'Management Principles', 'Leadership Skills', 'Communication']
                },
                {
                    phase: 'Phase 2',
                    title: 'Marketing Specialization',
                    duration: '6 Months',
                    topics: ['Consumer Behavior & Neuromarketing', 'Integrated Marketing Communication', 'Brand Strategy & Positioning', 'Digital & Performance Marketing']
                },
                {
                    phase: 'Phase 3',
                    title: 'Industry Projects & Internship',
                    duration: '3 Months',
                    topics: ['Live Business Projects', 'Industry Exposure', 'Mentorship', 'Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Placement',
                    duration: '3 Months',
                    topics: ['Capstone Project', 'Career Preparation', 'Interview Training', 'Placement Support']
                }
            ]
        },
        certifications: ['Six Sigma (Green Belt)', 'SAP ERP', 'Advanced Excel'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image1.webp',
            mobile: '/uploads/imas_hero_image1.webp',
            alt: 'PGDM Plus Marketing Management at IMAS Kolkata'
        },
        cta: {
            title: 'Your Journey Doesn\'t End at IMAS. It Begins',
            description: 'From desert safaris in Dubai to business case competitions in Singapore, IMAS Kolkata ensures your PGDM Marketing journey is a life-changing experience. With a focus on leadership development, international exposure, and startup incubation, IMAS makes you future-ready.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM Plus in Marketing Management - IMAS Kolkata | AICTE Approved Marketing Program',
            description: 'Transform your career with PGDM Plus in Marketing Management at IMAS Kolkata. Learn branding, digital marketing, consumer psychology with 100% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM Marketing', 'Marketing Management', 'Digital Marketing', 'Brand Management', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-plus-marketing-management'
        }
    },
    {
        id: 'pgdm-plus-finance',
        slug: 'pgdm-plus-financial-management',
        name: 'PGDM Plus in Financial Management',
        category: 'pgdm-plus',
        subcategory: 'finance',
        duration: '2 Years',
        format: 'full-time',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM Plus in Financial Management at IMAS Kolkata is a comprehensive 2-year program designed to create finance leaders who can navigate complex financial markets, corporate finance decisions, and emerging fintech innovations. This AICTE-approved program combines rigorous analytical training with practical applications in investment banking, risk management, and financial strategy.',
        overview: 'The PGDM Plus in Financial Management at IMAS Business School Kolkata is your gateway to mastering the world of money, markets, investments, and corporate finance.',
        highlights: [
            'Two-Year Full-Time PGDM Plus – Finance Specialization (AICTE Approved)',
            'Financial Modeling & Analysis with real-world case studies',
            'Investment Banking & Portfolio Management with live projects',
            'Risk Management & Compliance with industry standards',
            'Fintech & Digital Finance with blockchain and AI applications',
            'Corporate Finance Strategy with M&A simulations',
            'Certifications in CFA, FRM, and Bloomberg Terminal',
            'Industry mentorship from finance veterans',
            'International immersion in financial hubs like Singapore and Dubai',
            'Certifications: SAP ERP Suite, Advanced Excel, Microsoft Project, Six Sigma',
            'Live Projects + Dual Internships (Winter & Summer)',
            'Case Studies & Capstone Projects from real finance firms',
            'Corporate Connect: Industrial visits + mentorships'
        ],
        whatYouLearn: [
            'Corporate Finance & Strategy',
            'Investment Analysis & Portfolio Management',
            'Financial Markets & Instruments',
            'Risk Management & Derivatives',
            'Financial Modeling & Valuation',
            'Banking Operations & Credit Analysis',
            'International Finance & Forex',
            'Fintech & Digital Payments',
            'Financial Statement Analysis',
            'Treasury & Cash Management',
            'Behavioral Finance & Market Psychology',
            'Regulatory Framework & Compliance'
        ],
        careerOpportunities: [
            'Investment Banker',
            'Financial Analyst',
            'Risk Manager',
            'Portfolio Manager',
            'Corporate Finance Manager',
            'Treasury Manager',
            'Credit Risk Analyst',
            'Equity Research Analyst',
            'Financial Consultant',
            'Fintech Product Manager',
            'Wealth Management Advisor',
            'Financial Planning & Analysis Manager'
        ],
        eligibility: {
            education: 'Graduation (2022–2025) with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score',
            additional: 'Strong analytical and quantitative skills'
        },
        placement: {
            highestCTC: '₹18.5 LPA',
            averageCTC: '₹9–14 LPA',
            placementRate: '96%',
            topRecruiters: [
                recruiterLogos['KPMG'],
                recruiterLogos['HSBC'],
                recruiterLogos['Axis Bank'],
                recruiterLogos['Wipro'],
                recruiterLogos['Infosys'],
                recruiterLogos['Paytm'],
                recruiterLogos['Deloitte'],
                recruiterLogos['PwC'],
                recruiterLogos['EY']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Core Finance',
                    duration: '6 Months',
                    topics: ['Financial Fundamentals', 'Accounting Principles', 'Economics', 'Quantitative Methods']
                },
                {
                    phase: 'Phase 2',
                    title: 'Advanced Finance Specialization',
                    duration: '6 Months',
                    topics: ['Corporate Finance', 'Investment Analysis', 'Risk Management', 'Financial Modeling']
                },
                {
                    phase: 'Phase 3',
                    title: 'Industry Projects & Internship',
                    duration: '3 Months',
                    topics: ['Live Finance Projects', 'Banking Exposure', 'Mentorship', 'Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Placement',
                    duration: '3 Months',
                    topics: ['Capstone Project', 'Career Preparation', 'Interview Training', 'Placement Support']
                }
            ]
        },
        certifications: ['SAP ERP Suite', 'Advanced Excel', 'Microsoft Project', 'Six Sigma'],
        internationalExposure: ['Singapore', 'Malaysia', 'Dubai', 'Thailand'],
        heroImage: {
            desktop: '/uploads/imas_hero_image_2.webp',
            mobile: '/uploads/imas_hero_image_2.webp',
            alt: 'PGDM Plus Financial Management at IMAS Kolkata'
        },
        cta: {
            title: 'Finance for the Future – Start Now',
            description: 'From forex labs to Bloomberg terminal exposure, your learning will match what top employers expect. Plus, international immersion with partner universities like Middlesex University and Raffles University ensures a global outlook.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM Plus in Financial Management - IMAS Kolkata | AICTE Approved Finance Program',
            description: 'Master finance with PGDM Plus in Financial Management at IMAS Kolkata. Learn investment banking, financial analytics, risk management with 100% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM Finance', 'Financial Management', 'Investment Banking', 'Financial Analytics', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-plus-financial-management'
        }
    },
    {
        id: 'pgdm-plus-hr',
        slug: 'pgdm-plus-human-resource-management',
        name: 'PGDM Plus in Human Resource Management',
        category: 'pgdm-plus',
        subcategory: 'hr',
        duration: '2 Years',
        format: 'full-time',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM Plus in Human Resource Management at IMAS Kolkata is a comprehensive 2-year program designed to create HR leaders who can navigate the complexities of modern workforce management, organizational development, and strategic human capital planning. This AICTE-approved program combines rigorous academic learning with practical industry exposure, preparing students to become strategic HR business partners who drive organizational success through people-centric initiatives.',
        overview: 'The PGDM Plus in Human Resource Management at IMAS Kolkata is a transformative 2-year full-time program designed for aspiring HR professionals who want to master talent management, organizational behavior, people analytics, and strategic HR leadership.',
        highlights: [
            'Two-Year Full-Time PGDM Plus – HR Specialization (AICTE Approved)',
            'Strategic HR Management & People Analytics with real-world applications',
            'Talent Acquisition & Recruitment with AI-powered tools and techniques',
            'Learning & Development with modern training methodologies',
            'Performance Management Systems with data-driven insights',
            'Compensation & Benefits Analytics with market benchmarking',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            '20+ Presentations per Semester to boost confidence and leadership skills',
            'Live Business Projects, Winter & Summer Internships with top companies',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior HR leaders and CHRO executives',
            'Global Alumni Network across companies like TCS, Deloitte, and Accenture',
            'Soft Skills & Leadership Training from Day 1',
            'Certifications in HR Analytics, Workday, and Microsoft Project',
            'Diversity, Equity & Inclusion (DEI) specialization modules'
        ],
        whatYouLearn: [
            'Strategic Human Resource Management',
            'Talent Acquisition & Recruitment Strategy',
            'Learning & Development Programs',
            'Performance Management & Appraisal Systems',
            'Compensation & Benefits Design',
            'HR Analytics & People Data Science',
            'Organizational Behavior & Psychology',
            'Industrial Relations & Labor Laws',
            'Change Management & Organizational Development',
            'Employee Engagement & Retention Strategies',
            'Diversity, Equity & Inclusion (DEI)',
            'HR Technology & Digital Transformation',
            'Leadership Development & Succession Planning',
            'Workforce Planning & Analytics',
            'Employee Relations & Conflict Resolution'
        ],
        careerOpportunities: [
            'HR Business Partner',
            'Talent Acquisition Manager',
            'Learning & Development Manager',
            'Compensation & Benefits Manager',
            'HR Analytics Specialist',
            'Organizational Development Consultant',
            'Employee Relations Manager',
            'HR Generalist',
            'Training & Development Specialist',
            'Performance Management Specialist',
            'Diversity & Inclusion Manager',
            'HR Technology Specialist',
            'Workforce Planning Analyst',
            'Change Management Consultant',
            'HR Operations Manager'
        ],
        eligibility: {
            education: 'Graduation (2022–2025) with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score',
            additional: 'Strong interpersonal and communication skills'
        },
        placement: {
            highestCTC: '₹17.5 LPA',
            averageCTC: '₹7.5–11 LPA',
            placementRate: '98%',
            topRecruiters: [
                recruiterLogos['TCS'],
                recruiterLogos['Accenture'],
                recruiterLogos['Aditya Birla Group'],
                recruiterLogos['Infosys'],
                recruiterLogos['HDFC Bank'],
                recruiterLogos['Wipro'],
                recruiterLogos['Deloitte'],
                recruiterLogos['PwC']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Core HR',
                    duration: '6 Months',
                    topics: ['HR Fundamentals', 'Organizational Behavior', 'Business Communication', 'Management Principles']
                },
                {
                    phase: 'Phase 2',
                    title: 'HR Specialization',
                    duration: '6 Months',
                    topics: ['Talent Management', 'Performance Management', 'Compensation & Benefits', 'HR Analytics']
                },
                {
                    phase: 'Phase 3',
                    title: 'Industry Projects & Internship',
                    duration: '3 Months',
                    topics: ['Live HR Projects', 'Corporate Exposure', 'Mentorship', 'Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Placement',
                    duration: '3 Months',
                    topics: ['Capstone Project', 'Career Preparation', 'Interview Training', 'Placement Support']
                }
            ]
        },
        certifications: ['SAP ERP', 'Microsoft Project', 'Six Sigma Green Belt', 'Advanced Excel'],
        internationalExposure: ['Singapore', 'Thailand', 'Malaysia', 'Dubai'],
        heroImage: {
            desktop: '/uploads/imas_hero_image3.webp',
            mobile: '/uploads/imas_hero_image3.webp',
            alt: 'PGDM Plus Human Resource Management at IMAS Kolkata'
        },
        cta: {
            title: 'Be the People Leader Companies Want',
            description: 'With access to a global alumni network, certified skill training, and hands-on learning from real-world HR challenges, this PGDM in HRM in Kolkata at IMAS builds leaders who create impact.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM Plus in Human Resource Management - IMAS Kolkata | AICTE Approved HR Program',
            description: 'Become an HR leader with PGDM Plus in Human Resource Management at IMAS Kolkata. Learn strategic HR, people analytics, talent management with 100% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM HR', 'Human Resource Management', 'HR Analytics', 'Talent Management', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-plus-human-resource-management'
        }
    },
    {
        id: 'pgdm-plus-analytics',
        slug: 'pgdm-plus-business-analytics',
        name: 'PGDM Plus in Business Analytics',
        category: 'pgdm-plus',
        subcategory: 'analytics',
        duration: '2 Years',
        format: 'full-time',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM Plus in Business Analytics at IMAS Kolkata is a comprehensive 2-year program designed to create data-driven business leaders who can transform raw data into strategic insights and actionable business intelligence. This AICTE-approved program combines statistical analysis, machine learning, and business strategy, preparing students to become analytics professionals who drive data-informed decision-making across industries.',
        overview: 'The PGDM Plus in Business Analytics at IMAS Kolkata is a transformative 2-year full-time program designed for aspiring analytics professionals who want to master data science, predictive modeling, business intelligence, and strategic analytics.',
        highlights: [
            'Two-Year Full-Time PGDM Plus – Business Analytics Specialization (AICTE Approved)',
            'Data Science & Machine Learning with hands-on Python and R programming',
            'Business Intelligence & Data Visualization using Tableau, Power BI, and Excel',
            'Predictive Analytics & Statistical Modeling with real business datasets',
            'Big Data Analytics with Hadoop, Spark, and cloud platforms',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            '20+ Presentations per Semester to boost analytical communication skills',
            'Live Business Projects, Winter & Summer Internships with analytics firms',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior data scientists and analytics leaders',
            'Global Alumni Network across companies like IBM, Microsoft, and Accenture',
            'Soft Skills & Technical Communication Training from Day 1',
            'Certifications in Google Analytics, Tableau, and Microsoft Azure',
            'AI & Machine Learning specialization modules'
        ],
        whatYouLearn: [
            'Statistical Analysis & Hypothesis Testing',
            'Data Mining & Machine Learning Algorithms',
            'Business Intelligence & Data Warehousing',
            'Predictive Analytics & Forecasting',
            'Data Visualization & Dashboard Creation',
            'Big Data Technologies & Cloud Analytics',
            'Marketing Analytics & Customer Segmentation',
            'Financial Analytics & Risk Modeling',
            'Operations Analytics & Supply Chain Optimization',
            'Web Analytics & Digital Marketing Metrics',
            'A/B Testing & Experimental Design',
            'Database Management & SQL Programming',
            'Python & R Programming for Analytics',
            'Artificial Intelligence & Deep Learning',
            'Business Strategy & Data-Driven Decision Making'
        ],
        careerOpportunities: [
            'Business Analyst',
            'Data Scientist',
            'Analytics Consultant',
            'Marketing Analytics Manager',
            'Financial Risk Analyst',
            'Operations Research Analyst',
            'Business Intelligence Developer',
            'Data Visualization Specialist',
            'Predictive Modeling Specialist',
            'Digital Analytics Manager',
            'Market Research Analyst',
            'Supply Chain Analyst',
            'Product Analytics Manager',
            'Customer Insights Analyst',
            'Data Strategy Consultant'
        ],
        eligibility: {
            education: 'Graduation (2022–2025) with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score',
            additional: 'Strong quantitative and analytical aptitude'
        },
        placement: {
            highestCTC: '₹16.5 LPA',
            averageCTC: '₹8–12 LPA',
            placementRate: '95%',
            topRecruiters: [
                recruiterLogos['Accenture'],
                recruiterLogos['Deloitte'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys'],
                recruiterLogos['Wipro'],
                recruiterLogos['Amazon'],
                recruiterLogos['Flipkart'],
                recruiterLogos['PwC']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Statistical Methods',
                    duration: '6 Months',
                    topics: ['Statistics Fundamentals', 'Data Analysis Basics', 'Business Mathematics', 'Research Methods']
                },
                {
                    phase: 'Phase 2',
                    title: 'Advanced Analytics & Machine Learning',
                    duration: '6 Months',
                    topics: ['Machine Learning', 'Predictive Analytics', 'Data Mining', 'Business Intelligence']
                },
                {
                    phase: 'Phase 3',
                    title: 'Industry Projects & Internship',
                    duration: '3 Months',
                    topics: ['Live Analytics Projects', 'Industry Exposure', 'Mentorship', 'Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Placement',
                    duration: '3 Months',
                    topics: ['Capstone Project', 'Career Preparation', 'Interview Training', 'Placement Support']
                }
            ]
        },
        certifications: ['Six Sigma (Green Belt)', 'SAP ERP', 'Advanced Excel', 'Google Analytics'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image4.webp',
            mobile: '/uploads/imas_hero_image4.webp',
            alt: 'PGDM Plus Business Analytics at IMAS Kolkata'
        },
        cta: {
            title: 'Transform Data into Strategic Insights',
            description: 'From statistical modeling to machine learning applications, your analytical skills will match what top employers expect. Plus, international immersion and industry partnerships ensure a global perspective on data-driven business strategy.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM Plus in Business Analytics - IMAS Kolkata | AICTE Approved Analytics Program',
            description: 'Master data science with PGDM Plus in Business Analytics at IMAS Kolkata. Learn machine learning, predictive analytics, business intelligence with 95% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM Analytics', 'Business Analytics', 'Data Science', 'Machine Learning', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-plus-business-analytics'
        }
    },
    {
        id: 'pgdm-plus-ai',
        slug: 'pgdm-plus-artificial-intelligence-data-science',
        name: 'PGDM Plus in Artificial Intelligence & Data Science',
        category: 'pgdm-plus',
        subcategory: 'ai-data-science',
        duration: '2 Years',
        format: 'full-time',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM Plus in Artificial Intelligence & Data Science at IMAS Kolkata is a comprehensive 2-year program designed to create AI-powered business leaders who can harness the potential of artificial intelligence, machine learning, and advanced data science to drive innovation and competitive advantage. This AICTE-approved program combines cutting-edge AI technologies with business strategy, preparing students to become AI specialists who transform industries through intelligent automation and data-driven insights.',
        overview: 'The PGDM Plus in Artificial Intelligence & Data Science at IMAS Kolkata is a transformative 2-year full-time program designed for aspiring AI professionals who want to master machine learning, deep learning, natural language processing, and AI-driven business solutions.',
        highlights: [
            'Two-Year Full-Time PGDM Plus – AI & Data Science Specialization (AICTE Approved)',
            'Artificial Intelligence & Machine Learning with hands-on Python, TensorFlow, and PyTorch',
            'Deep Learning & Neural Networks with real-world AI applications',
            'Natural Language Processing & Computer Vision with industry projects',
            'AI Ethics & Responsible AI Development with governance frameworks',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            '20+ Presentations per Semester to boost technical communication skills',
            'Live AI Projects, Winter & Summer Internships with tech companies',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior AI engineers and data science leaders',
            'Global Alumni Network across companies like Google, Microsoft, and IBM',
            'Soft Skills & Technical Leadership Training from Day 1',
            'Certifications in AWS AI, Google Cloud AI, and Microsoft Azure AI',
            'Robotics & IoT integration modules'
        ],
        whatYouLearn: [
            'Artificial Intelligence Fundamentals',
            'Machine Learning Algorithms & Implementation',
            'Deep Learning & Neural Networks',
            'Natural Language Processing (NLP)',
            'Computer Vision & Image Recognition',
            'Reinforcement Learning & AI Optimization',
            'AI Ethics & Responsible AI Development',
            'Big Data Processing & Distributed Computing',
            'Cloud AI Platforms & MLOps',
            'AI Product Development & Strategy',
            'Robotics & Automation Systems',
            'AI in Business Applications',
            'Data Engineering & Pipeline Development',
            'AI Model Deployment & Scaling',
            'Emerging AI Technologies & Trends'
        ],
        careerOpportunities: [
            'AI Engineer',
            'Machine Learning Engineer',
            'Data Scientist',
            'AI Product Manager',
            'Deep Learning Specialist',
            'NLP Engineer',
            'Computer Vision Engineer',
            'AI Research Scientist',
            'MLOps Engineer',
            'AI Consultant',
            'Robotics Engineer',
            'AI Solutions Architect',
            'Data Engineering Specialist',
            'AI Ethics Specialist',
            'AI Startup Founder'
        ],
        eligibility: {
            education: 'Graduation (2022–2025) with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score',
            additional: 'Strong mathematical and programming aptitude'
        },
        placement: {
            highestCTC: '₹20 LPA',
            averageCTC: '₹10–15 LPA',
            placementRate: '94%',
            topRecruiters: [
                recruiterLogos['Google'],
                recruiterLogos['Amazon'],
                recruiterLogos['Accenture'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys'],
                recruiterLogos['Wipro'],
                recruiterLogos['Deloitte'],
                recruiterLogos['PwC']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Programming',
                    duration: '6 Months',
                    topics: ['Programming Fundamentals', 'Mathematics for AI', 'Statistics & Probability', 'Data Structures']
                },
                {
                    phase: 'Phase 2',
                    title: 'AI & Machine Learning Specialization',
                    duration: '6 Months',
                    topics: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
                },
                {
                    phase: 'Phase 3',
                    title: 'Industry Projects & Internship',
                    duration: '3 Months',
                    topics: ['Live AI Projects', 'Tech Industry Exposure', 'Mentorship', 'Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Placement',
                    duration: '3 Months',
                    topics: ['AI Capstone Project', 'Career Preparation', 'Technical Interview Training', 'Placement Support']
                }
            ]
        },
        certifications: ['Six Sigma (Green Belt)', 'SAP ERP', 'Advanced Excel', 'AWS AI Certification'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image5.webp',
            mobile: '/uploads/imas_hero_image5.webp',
            alt: 'PGDM Plus Artificial Intelligence & Data Science at IMAS Kolkata'
        },
        cta: {
            title: 'Shape the Future with AI Innovation',
            description: 'From neural networks to intelligent automation, your AI expertise will match what leading tech companies expect. Plus, international immersion and cutting-edge research opportunities ensure you stay at the forefront of AI advancement.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM Plus in Artificial Intelligence & Data Science - IMAS Kolkata | AICTE Approved AI Program',
            description: 'Master AI & Data Science with PGDM Plus at IMAS Kolkata. Learn machine learning, deep learning, NLP, computer vision with 94% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM AI', 'Artificial Intelligence', 'Data Science', 'Machine Learning', 'Deep Learning', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-plus-artificial-intelligence-data-science'
        }
    },
    {
        id: 'pgdm-plus-fintech',
        slug: 'pgdm-plus-fintech',
        name: 'PGDM Plus in Fintech',
        category: 'pgdm-plus',
        subcategory: 'fintech',
        duration: '2 Years',
        format: 'full-time',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM Plus in Fintech at IMAS Kolkata is a cutting-edge 2-year program designed to create financial technology leaders who can revolutionize the financial services industry through digital innovation, blockchain technology, and data-driven financial solutions. This AICTE-approved program combines traditional finance principles with emerging fintech technologies, preparing students to become fintech specialists who drive digital transformation in banking, payments, lending, and investment sectors.',
        overview: 'The PGDM Plus in Fintech at IMAS Kolkata is a transformative 2-year full-time program designed for aspiring fintech professionals who want to master digital banking, cryptocurrency, blockchain, and financial technology innovations.',
        highlights: [
            'Two-Year Full-Time PGDM Plus – Fintech Specialization (AICTE Approved)',
            'Blockchain Technology & Cryptocurrency with hands-on development',
            'Digital Banking & Payment Systems with real-world applications',
            'Financial Data Analytics & Risk Management with advanced tools',
            'Regulatory Technology (RegTech) & Compliance frameworks',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            '20+ Presentations per Semester to boost fintech communication skills',
            'Live Fintech Projects, Winter & Summer Internships with fintech companies',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior fintech executives and banking leaders',
            'Global Alumni Network across companies like PayPal, Razorpay, and Paytm',
            'Soft Skills & Financial Leadership Training from Day 1',
            'Certifications in Financial Modeling, Digital Banking, and Blockchain',
            'Startup Incubation & Fintech Entrepreneurship modules'
        ],
        whatYouLearn: [
            'Fintech Fundamentals & Digital Finance',
            'Blockchain Technology & Smart Contracts',
            'Cryptocurrency & Digital Assets',
            'Digital Banking & Mobile Payments',
            'Financial Data Analytics & Big Data',
            'Risk Management & Regulatory Compliance',
            'InsurTech & Digital Insurance',
            'Robo-Advisory & Algorithmic Trading',
            'Peer-to-Peer Lending & Crowdfunding',
            'Financial APIs & Integration',
            'Cybersecurity in Financial Services',
            'Fintech Product Development',
            'Digital Lending & Credit Scoring',
            'Wealth Management Technology',
            'Emerging Fintech Trends & Innovation'
        ],
        careerOpportunities: [
            'Fintech Product Manager',
            'Blockchain Developer',
            'Digital Banking Specialist',
            'Fintech Business Analyst',
            'Cryptocurrency Analyst',
            'Payment Systems Engineer',
            'Risk Management Specialist',
            'Fintech Consultant',
            'Digital Lending Manager',
            'Regulatory Technology Specialist',
            'Fintech Sales Manager',
            'Investment Technology Analyst',
            'Fintech Startup Founder',
            'Digital Transformation Manager',
            'Financial Data Scientist'
        ],
        eligibility: {
            education: 'Graduation (2022–2025) with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score',
            additional: 'Interest in finance and technology integration'
        },
        placement: {
            highestCTC: '₹18 LPA',
            averageCTC: '₹9–14 LPA',
            placementRate: '92%',
            topRecruiters: [
                recruiterLogos['HDFC'],
                recruiterLogos['ICICI'],
                recruiterLogos['Axis'],
                recruiterLogos['Kotak'],
                recruiterLogos['Accenture'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys'],
                recruiterLogos['Deloitte']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Financial Technology',
                    duration: '6 Months',
                    topics: ['Fintech Fundamentals', 'Digital Finance', 'Financial Markets', 'Technology Basics']
                },
                {
                    phase: 'Phase 2',
                    title: 'Fintech Specialization',
                    duration: '6 Months',
                    topics: ['Blockchain Technology', 'Digital Banking', 'Payment Systems', 'Risk Management']
                },
                {
                    phase: 'Phase 3',
                    title: 'Industry Projects & Internship',
                    duration: '3 Months',
                    topics: ['Live Fintech Projects', 'Banking Industry Exposure', 'Mentorship', 'Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Placement',
                    duration: '3 Months',
                    topics: ['Fintech Capstone Project', 'Career Preparation', 'Interview Training', 'Placement Support']
                }
            ]
        },
        certifications: ['Six Sigma (Green Belt)', 'SAP ERP', 'Advanced Excel', 'Financial Modeling Certification'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image6.webp',
            mobile: '/uploads/imas_hero_image6.webp',
            alt: 'PGDM Plus Fintech at IMAS Kolkata'
        },
        cta: {
            title: 'Revolutionize Finance with Technology',
            description: 'From blockchain to digital banking, your fintech expertise will match what leading financial institutions expect. Plus, international immersion and startup incubation opportunities ensure you stay at the forefront of financial innovation.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM Plus in Fintech - IMAS Kolkata | AICTE Approved Fintech Program',
            description: 'Master Fintech with PGDM Plus at IMAS Kolkata. Learn blockchain, digital banking, cryptocurrency with 92% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM Fintech', 'Financial Technology', 'Blockchain', 'Digital Banking', 'Cryptocurrency', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-plus-fintech'
        }
    },
    {
        id: 'pgdm-plus-healthcare',
        slug: 'pgdm-plus-hospital-healthcare-management',
        name: 'PGDM Plus in Hospital & Healthcare Management',
        category: 'pgdm-plus',
        subcategory: 'healthcare',
        duration: '2 Years',
        format: 'full-time',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM Plus in Hospital & Healthcare Management at IMAS Kolkata is a specialized 2-year program designed to create healthcare leaders who can transform the healthcare industry through strategic management, digital health innovations, and patient-centric care delivery. This AICTE-approved program combines healthcare domain knowledge with modern management practices, preparing students to become healthcare administrators who drive excellence in hospitals, healthcare systems, and medical organizations.',
        overview: 'The PGDM Plus in Hospital & Healthcare Management at IMAS Kolkata is a transformative 2-year full-time program designed for aspiring healthcare professionals who want to master hospital administration, healthcare policy, and medical service management.',
        highlights: [
            'Two-Year Full-Time PGDM Plus – Healthcare Management Specialization (AICTE Approved)',
            'Hospital Administration & Healthcare Operations with real-world exposure',
            'Healthcare Policy & Regulatory Compliance with industry frameworks',
            'Digital Health & Medical Technology with hands-on applications',
            'Healthcare Quality Management & Patient Safety protocols',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            '20+ Presentations per Semester to boost healthcare communication skills',
            'Live Healthcare Projects, Winter & Summer Internships with hospitals',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior healthcare executives and medical directors',
            'Global Alumni Network across companies like Apollo, Fortis, and Max Healthcare',
            'Soft Skills & Healthcare Leadership Training from Day 1',
            'Certifications in Healthcare Management, Medical Coding, and Health Informatics',
            'Healthcare Entrepreneurship & Medical Startup modules'
        ],
        whatYouLearn: [
            'Healthcare Management Fundamentals',
            'Hospital Administration & Operations',
            'Healthcare Policy & Regulations',
            'Medical Service Management',
            'Healthcare Finance & Economics',
            'Quality Management in Healthcare',
            'Digital Health & Health Informatics',
            'Healthcare Marketing & Patient Relations',
            'Medical Equipment & Technology Management',
            'Healthcare Human Resource Management',
            'Public Health & Community Medicine',
            'Healthcare Supply Chain Management',
            'Medical Ethics & Patient Safety',
            'Healthcare Data Analytics',
            'Emerging Healthcare Trends & Innovation'
        ],
        careerOpportunities: [
            'Hospital Administrator',
            'Healthcare Operations Manager',
            'Medical Services Manager',
            'Healthcare Quality Manager',
            'Health Information Manager',
            'Healthcare Consultant',
            'Medical Equipment Manager',
            'Healthcare Policy Analyst',
            'Patient Relations Manager',
            'Healthcare Finance Manager',
            'Public Health Administrator',
            'Healthcare Technology Manager',
            'Medical Coding Specialist',
            'Healthcare Entrepreneur',
            'Health Insurance Manager'
        ],
        eligibility: {
            education: 'Graduation (2022–2025) with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score',
            additional: 'Interest in healthcare and medical services'
        },
        placement: {
            highestCTC: '₹16 LPA',
            averageCTC: '₹8–12 LPA',
            placementRate: '90%',
            topRecruiters: [
                recruiterLogos['Apollo'],
                recruiterLogos['Fortis'],
                recruiterLogos['Max'],
                recruiterLogos['Manipal'],
                recruiterLogos['Accenture'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys'],
                recruiterLogos['Deloitte']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Healthcare Basics',
                    duration: '6 Months',
                    topics: ['Healthcare Fundamentals', 'Medical Terminology', 'Healthcare Systems', 'Management Basics']
                },
                {
                    phase: 'Phase 2',
                    title: 'Healthcare Management Specialization',
                    duration: '6 Months',
                    topics: ['Hospital Administration', 'Healthcare Operations', 'Quality Management', 'Digital Health']
                },
                {
                    phase: 'Phase 3',
                    title: 'Industry Projects & Internship',
                    duration: '3 Months',
                    topics: ['Live Healthcare Projects', 'Hospital Industry Exposure', 'Mentorship', 'Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Placement',
                    duration: '3 Months',
                    topics: ['Healthcare Capstone Project', 'Career Preparation', 'Interview Training', 'Placement Support']
                }
            ]
        },
        certifications: ['Six Sigma (Green Belt)', 'SAP ERP', 'Advanced Excel', 'Healthcare Management Certification'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image7.webp',
            mobile: '/uploads/imas_hero_image7.webp',
            alt: 'PGDM Plus Hospital & Healthcare Management at IMAS Kolkata'
        },
        cta: {
            title: 'Transform Healthcare with Strategic Leadership',
            description: 'From hospital operations to digital health innovations, your healthcare management expertise will match what leading medical institutions expect. Plus, international immersion and healthcare entrepreneurship opportunities ensure you stay at the forefront of medical administration.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM Plus in Hospital & Healthcare Management - IMAS Kolkata | AICTE Approved Healthcare Program',
            description: 'Master Healthcare Management with PGDM Plus at IMAS Kolkata. Learn hospital administration, healthcare operations with 90% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM Healthcare', 'Hospital Management', 'Healthcare Administration', 'Medical Services', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-plus-hospital-healthcare-management'
        }
    },
    {
        id: 'pgdm-plus-iev',
        slug: 'pgdm-plus-innovation-entrepreneurship-venture-development',
        name: 'PGDM Plus in Innovation, Entrepreneurship & Venture Development',
        category: 'pgdm-plus',
        subcategory: 'entrepreneurship',
        duration: '2 Years',
        format: 'full-time',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM Plus in Innovation, Entrepreneurship & Venture Development at IMAS Kolkata is a dynamic 2-year program designed to create innovative business leaders who can build successful startups, drive corporate innovation, and develop scalable ventures. This AICTE-approved program combines entrepreneurial mindset with practical business skills, preparing students to become entrepreneurs who transform ideas into profitable businesses and drive economic growth.',
        overview: 'The PGDM Plus in Innovation, Entrepreneurship & Venture Development at IMAS Kolkata is a transformative 2-year full-time program designed for aspiring entrepreneurs who want to master startup creation, venture capital, and innovation management.',
        highlights: [
            'Two-Year Full-Time PGDM Plus – Entrepreneurship Specialization (AICTE Approved)',
            'Startup Incubation & Business Model Development with real ventures',
            'Venture Capital & Investment Banking with funding strategies',
            'Innovation Management & Design Thinking with hands-on projects',
            'Digital Marketing & E-commerce with startup applications',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            '20+ Presentations per Semester to boost entrepreneurial communication skills',
            'Live Startup Projects, Winter & Summer Internships with ventures',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from successful entrepreneurs and venture capitalists',
            'Global Alumni Network across companies like Flipkart, Zomato, and Paytm',
            'Soft Skills & Leadership Training from Day 1',
            'Certifications in Business Planning, Digital Marketing, and Innovation Management',
            'Startup Accelerator Programs & Pitch Competitions'
        ],
        whatYouLearn: [
            'Entrepreneurship Fundamentals',
            'Business Model Innovation',
            'Startup Strategy & Planning',
            'Venture Capital & Funding',
            'Innovation Management',
            'Design Thinking & Creativity',
            'Digital Marketing & Growth Hacking',
            'Financial Planning for Startups',
            'Legal Aspects of Entrepreneurship',
            'Technology & Product Development',
            'Market Research & Validation',
            'Leadership & Team Building',
            'Scaling & Growth Strategies',
            'Corporate Innovation',
            'Social Entrepreneurship'
        ],
        careerOpportunities: [
            'Startup Founder',
            'Business Development Manager',
            'Innovation Manager',
            'Venture Capital Analyst',
            'Product Manager',
            'Growth Hacker',
            'Business Consultant',
            'Corporate Innovation Lead',
            'Investment Banking Analyst',
            'Entrepreneurship Educator',
            'Startup Accelerator Manager',
            'Digital Marketing Manager',
            'Business Strategy Consultant',
            'Social Entrepreneur',
            'Technology Transfer Manager'
        ],
        eligibility: {
            education: 'Graduation (2022–2025) with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score',
            additional: 'Entrepreneurial mindset and business acumen'
        },
        placement: {
            highestCTC: '₹15 LPA',
            averageCTC: '₹7–12 LPA',
            placementRate: '88%',
            topRecruiters: [
                recruiterLogos['Flipkart'],
                recruiterLogos['Amazon'],
                recruiterLogos['Zomato'],
                recruiterLogos['Paytm'],
                recruiterLogos['Accenture'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys'],
                recruiterLogos['Deloitte']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Business Basics',
                    duration: '6 Months',
                    topics: ['Entrepreneurship Fundamentals', 'Business Planning', 'Market Research', 'Financial Basics']
                },
                {
                    phase: 'Phase 2',
                    title: 'Innovation & Venture Development',
                    duration: '6 Months',
                    topics: ['Innovation Management', 'Venture Capital', 'Digital Marketing', 'Product Development']
                },
                {
                    phase: 'Phase 3',
                    title: 'Startup Projects & Internship',
                    duration: '3 Months',
                    topics: ['Live Startup Projects', 'Venture Industry Exposure', 'Mentorship', 'Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Placement',
                    duration: '3 Months',
                    topics: ['Business Plan Capstone', 'Career Preparation', 'Pitch Training', 'Placement Support']
                }
            ]
        },
        certifications: ['Six Sigma (Green Belt)', 'SAP ERP', 'Advanced Excel', 'Business Planning Certification'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image8.webp',
            mobile: '/uploads/imas_hero_image8.webp',
            alt: 'PGDM Plus Innovation, Entrepreneurship & Venture Development at IMAS Kolkata'
        },
        cta: {
            title: 'Build Tomorrow\'s Businesses Today',
            description: 'From startup ideation to venture scaling, your entrepreneurial expertise will match what leading investors expect. Plus, international immersion and startup accelerator opportunities ensure you stay at the forefront of business innovation.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM Plus in Innovation, Entrepreneurship & Venture Development - IMAS Kolkata | AICTE Approved',
            description: 'Master Entrepreneurship with PGDM Plus at IMAS Kolkata. Learn startup creation, venture capital, innovation management with 88% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM Entrepreneurship', 'Innovation Management', 'Startup Development', 'Venture Capital', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-plus-innovation-entrepreneurship-venture-development'
        }
    },
    {
        id: 'pgdm-executive-marketing',
        slug: 'pgdm-marketing-working-executive',
        name: 'PGDM in Marketing (Working Executive)',
        category: 'executive',
        subcategory: 'marketing',
        duration: '2 Years',
        format: 'blended',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM in Marketing (Working Executive) at IMAS Kolkata is a specialized 2-year blended program designed for working professionals who want to advance their marketing careers while continuing their current employment. This AICTE-approved program combines weekend classes with online learning, ensuring professionals can balance work and education effectively.',
        overview: 'The PGDM in Marketing (Working Executive) at IMAS Kolkata is a flexible 2-year blended program designed for working professionals who want to master advanced marketing strategies, digital transformation, and brand management while maintaining their career momentum.',
        highlights: [
            'Two-Year Blended PGDM for Working Executives (AICTE Approved)',
            'Weekend Classes + Online Learning for Work-Life Balance',
            'Digital Marketing & Social Media Strategy with industry applications',
            'Brand Management & Consumer Psychology with real case studies',
            'Market Research & Analytics using professional tools',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            'Industry-Relevant Projects with current workplace integration',
            'Live Business Projects & Summer Internships',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior marketing leaders',
            'Executive Alumni Network across top brands and agencies',
            'Leadership & Communication Training for senior roles',
            'Certifications in Google Ads, Facebook Marketing, and HubSpot',
            'Executive Career Advancement Support'
        ],
        whatYouLearn: [
            'Strategic Marketing Management',
            'Digital Marketing & E-commerce Strategy',
            'Advanced Brand Management',
            'Consumer Behavior & Market Psychology',
            'Marketing Research & Data Analytics',
            'Sales Leadership & Channel Management',
            'Integrated Marketing Communication',
            'Content Strategy & Digital Storytelling',
            'Social Media Marketing & Influencer Management',
            'Marketing Analytics & ROI Measurement',
            'International Marketing & Global Strategy',
            'Customer Experience & Relationship Management',
            'Marketing Technology & Automation',
            'Performance Marketing & Growth Hacking',
            'Executive Leadership in Marketing'
        ],
        careerOpportunities: [
            'Senior Brand Manager',
            'Marketing Director',
            'Digital Marketing Head',
            'Market Research Director',
            'Sales Director',
            'Marketing Consultant',
            'Content Marketing Head',
            'Social Media Strategy Lead',
            'Product Marketing Director',
            'Marketing Analytics Head',
            'Customer Experience Director',
            'Marketing Communications Head',
            'E-commerce Marketing Director',
            'Chief Marketing Officer',
            'Marketing Strategy Consultant'
        ],
        eligibility: {
            education: 'Graduation with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score or Work Experience',
            experience: 'Minimum 2 years of work experience',
            additional: 'Currently employed professionals preferred'
        },
        placement: {
            highestCTC: '₹25 LPA',
            averageCTC: '₹12–18 LPA',
            placementRate: '95%',
            topRecruiters: [
                recruiterLogos['Amazon'],
                recruiterLogos['Google'],
                recruiterLogos['Flipkart'],
                recruiterLogos['Zomato'],
                recruiterLogos['Swiggy'],
                recruiterLogos['Deloitte'],
                recruiterLogos['PwC'],
                recruiterLogos['Accenture'],
                recruiterLogos['HDFC Bank'],
                recruiterLogos['Aditya Birla Group']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Executive Foundation & Strategic Management',
                    duration: '6 Months',
                    topics: ['Strategic Business Management', 'Leadership Principles', 'Executive Communication', 'Digital Transformation']
                },
                {
                    phase: 'Phase 2',
                    title: 'Advanced Marketing Specialization',
                    duration: '6 Months',
                    topics: ['Strategic Marketing', 'Digital Marketing Strategy', 'Brand Leadership', 'Customer Analytics']
                },
                {
                    phase: 'Phase 3',
                    title: 'Executive Projects & Industry Integration',
                    duration: '6 Months',
                    topics: ['Live Executive Projects', 'Industry Consulting', 'Leadership Mentorship', 'Strategic Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '6 Months',
                    topics: ['Executive Capstone Project', 'Career Strategy', 'Leadership Development', 'Alumni Integration']
                }
            ]
        },
        certifications: ['Six Sigma (Green Belt)', 'SAP ERP', 'Advanced Excel', 'Executive Marketing Leadership Certification'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image9.webp',
            mobile: '/uploads/imas_hero_image9.webp',
            alt: 'PGDM in Marketing (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Advance Your Marketing Career While You Work',
            description: 'From strategic brand management to digital marketing leadership, your executive marketing expertise will match what senior roles demand. Plus, flexible learning and international exposure ensure career growth without career breaks.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Marketing (Working Executive) - IMAS Kolkata | AICTE Approved Executive Program',
            description: 'Advance your marketing career with PGDM Working Executive at IMAS Kolkata. Flexible weekend classes, digital marketing specialization with 95% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM Working Executive', 'Executive Marketing', 'Weekend MBA', 'Digital Marketing', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-marketing-working-executive'
        }
    },
    {
        id: 'pgdm-executive-finance',
        slug: 'pgdm-finance-working-executive',
        name: 'PGDM in Finance (Working Executive)',
        category: 'executive',
        subcategory: 'finance',
        duration: '2 Years',
        format: 'blended',
        location: 'Kolkata',
        commencement: '19th Sep 2025',
        description: 'The PGDM in Finance (Working Executive) at IMAS Kolkata is a specialized 2-year blended program designed for working professionals who want to advance their finance careers while continuing their current employment. This AICTE-approved program combines weekend classes with online learning, covering corporate finance, investment banking, and financial analytics.',
        overview: 'The PGDM in Finance (Working Executive) at IMAS Kolkata is a flexible 2-year blended program designed for working professionals who want to master advanced financial management, investment strategies, and corporate finance while maintaining their career momentum.',
        highlights: [
            'Two-Year Blended PGDM for Working Executives (AICTE Approved)',
            'Weekend Classes + Online Learning for Work-Life Balance',
            'Corporate Finance & Investment Banking with real-world applications',
            'Financial Analytics & Risk Management with industry tools',
            'Portfolio Management & Wealth Advisory with practical training',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            'Industry-Relevant Projects with current workplace integration',
            'Live Financial Projects & Summer Internships',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior finance leaders',
            'Executive Alumni Network across top banks and financial institutions',
            'Leadership & Communication Training for senior roles',
            'Certifications in Financial Modeling, Bloomberg Terminal, and CFA prep',
            'Executive Career Advancement Support'
        ],
        whatYouLearn: [
            'Strategic Financial Management',
            'Corporate Finance & Capital Structure',
            'Investment Banking & M&A',
            'Financial Markets & Instruments',
            'Risk Management & Derivatives',
            'Portfolio Management & Asset Allocation',
            'Financial Analytics & Modeling',
            'International Finance & Treasury',
            'Behavioral Finance & Investment Psychology',
            'Financial Technology & Fintech',
            'Regulatory Framework & Compliance',
            'Wealth Management & Private Banking',
            'Credit Analysis & Lending',
            'Financial Planning & Advisory',
            'Executive Leadership in Finance'
        ],
        careerOpportunities: [
            'Senior Finance Manager',
            'Investment Banking Director',
            'Portfolio Manager',
            'Risk Management Head',
            'Treasury Manager',
            'Financial Analyst (Senior)',
            'Wealth Management Advisor',
            'Corporate Finance Head',
            'Credit Risk Manager',
            'Financial Planning Director',
            'Investment Advisor',
            'Finance Controller',
            'Chief Financial Officer',
            'Financial Consultant',
            'Private Equity Analyst'
        ],
        eligibility: {
            education: 'Graduation with 50% marks',
            exams: 'Valid CAT/XAT/CMAT/MAT/CUET score or Work Experience',
            experience: 'Minimum 2 years of work experience',
            additional: 'Currently employed professionals preferred'
        },
        placement: {
            highestCTC: '₹28 LPA',
            averageCTC: '₹14–20 LPA',
            placementRate: '96%',
            topRecruiters: [
                recruiterLogos['HDFC Bank'],
                recruiterLogos['ICICI Bank'],
                recruiterLogos['Axis Bank'],
                recruiterLogos['Deloitte'],
                recruiterLogos['PwC'],
                recruiterLogos['EY'],
                recruiterLogos['KPMG'],
                recruiterLogos['HSBC'],
                recruiterLogos['Accenture'],
                recruiterLogos['TCS']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Executive Foundation & Financial Fundamentals',
                    duration: '6 Months',
                    topics: ['Strategic Business Management', 'Financial Accounting', 'Executive Communication', 'Financial Markets']
                },
                {
                    phase: 'Phase 2',
                    title: 'Advanced Finance Specialization',
                    duration: '6 Months',
                    topics: ['Corporate Finance', 'Investment Banking', 'Risk Management', 'Financial Analytics']
                },
                {
                    phase: 'Phase 3',
                    title: 'Executive Projects & Industry Integration',
                    duration: '6 Months',
                    topics: ['Live Finance Projects', 'Industry Consulting', 'Leadership Mentorship', 'Strategic Networking']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '6 Months',
                    topics: ['Finance Capstone Project', 'Career Strategy', 'Leadership Development', 'Alumni Integration']
                }
            ]
        },
        certifications: ['Six Sigma (Green Belt)', 'SAP ERP', 'Advanced Excel', 'Financial Modeling Certification', 'CFA Prep'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image10.webp',
            mobile: '/uploads/imas_hero_image10.webp',
            alt: 'PGDM in Finance (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Advance Your Finance Career While You Work',
            description: 'From corporate finance to investment banking, your executive finance expertise will match what senior roles demand. Plus, flexible learning and international exposure ensure career growth without career breaks.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Finance (Working Executive) - IMAS Kolkata | AICTE Approved Executive Program',
            description: 'Advance your finance career with PGDM Working Executive at IMAS Kolkata. Flexible weekend classes, corporate finance specialization with 96% placement support. Apply now for 2025 batch.',
            keywords: ['PGDM Working Executive', 'Executive Finance', 'Weekend MBA', 'Corporate Finance', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-finance-working-executive'
        }
    },
    {
        id: 'pgdm-hr-working-executive',
        slug: 'pgdm-hr-working-executive',
        name: 'PGDM in Human Resource (Working Executive)',
        category: 'executive',
        subcategory: 'Working Executive',
        duration: '2 Years',
        format: 'blended',
        location: 'Bangalore',
        commencement: 'July 2025',
        description: 'A comprehensive 2-year PGDM program in Human Resource Management designed for working professionals, combining online learning with weekend classroom sessions.',
        overview: 'This program is specifically designed for working professionals who want to advance their careers in Human Resource Management. The blended learning format allows students to continue working while pursuing their management education. The curriculum covers all aspects of modern HR practices including talent management, organizational behavior, compensation management, and strategic HR planning.',
        highlights: [
            'Blended Learning Format with Weekend Classes for Working Professionals',
            'Industry-Relevant HR Curriculum with Strategic Management Focus',
            'Expert Faculty with Extensive HR Industry Experience',
            'Comprehensive Coverage of Modern HR Functions & Analytics',
            'Professional Networking with Senior HR Leaders & CHROs',
            'Practical Case Studies & Real-World HR Applications',
            'Flexible Schedule Accommodating Full-Time Work Commitments',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            'Industry-Relevant Projects with current workplace integration',
            'Live Business Projects & Summer Internships',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior HR leaders and CHRO executives',
            'Executive Alumni Network across top companies like TCS, Deloitte, Accenture',
            'Leadership & Communication Training for senior HR roles',
            'Certifications in HR Analytics, Workday, and Microsoft Project',
            'Executive Career Advancement Support in Human Resources'
        ],
        whatYouLearn: [
            'Strategic Human Resource Management',
            'Talent Acquisition & Recruitment Strategy',
            'Learning & Development Programs',
            'Performance Management & Appraisal Systems',
            'Compensation & Benefits Design',
            'HR Analytics & People Data Science',
            'Organizational Behavior & Psychology',
            'Industrial Relations & Labor Laws',
            'Change Management & Organizational Development',
            'Employee Engagement & Retention Strategies',
            'Diversity, Equity & Inclusion (DEI)',
            'HR Technology & Digital Transformation',
            'Leadership Development & Succession Planning',
            'Workforce Planning & Analytics',
            'Executive Leadership in Human Resources'
        ],
        careerOpportunities: [
            'HR Manager/Senior HR Manager',
            'Talent Acquisition Manager',
            'Compensation and Benefits Manager',
            'Training and Development Manager',
            'HR Business Partner',
            'Organizational Development Consultant',
            'HR Analytics Manager',
            'Chief Human Resources Officer (CHRO)',
            'Employee Relations Manager',
            'Performance Management Specialist',
            'Diversity & Inclusion Manager',
            'HR Technology Specialist',
            'Workforce Planning Analyst',
            'Change Management Consultant',
            'HR Operations Manager'
        ],
        eligibility: {
            education: 'Bachelor\'s degree in any discipline with minimum 50% marks',
            experience: 'Minimum 2 years of work experience',
            exams: 'Valid CAT/MAT/XAT/CMAT/GMAT or IMAS entrance test',
            additional: 'Personal interview, group discussion, and statement of purpose'
        },
        placement: {
            highestCTC: '₹18 LPA',
            averageCTC: '₹8–12 LPA',
            placementRate: '95%',
            topRecruiters: [
                recruiterLogos['Infosys'],
                recruiterLogos['TCS'],
                recruiterLogos['Wipro'],
                recruiterLogos['Accenture'],
                recruiterLogos['Deloitte'],
                recruiterLogos['KPMG'],
                recruiterLogos['EY'],
                recruiterLogos['PwC']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Core HR',
                    duration: '6 Months',
                    topics: ['Principles of Management', 'Organizational Behavior', 'HR Fundamentals', 'Business Communication']
                },
                {
                    phase: 'Phase 2',
                    title: 'HR Specialization & Analytics',
                    duration: '6 Months',
                    topics: ['Talent Management', 'Performance Systems', 'HR Analytics', 'Compensation Design']
                },
                {
                    phase: 'Phase 3',
                    title: 'Strategic HR & Leadership',
                    duration: '3 Months',
                    topics: ['Strategic HRM', 'Change Management', 'Leadership Development', 'Executive Mentorship']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '3 Months',
                    topics: ['Capstone Project', 'Executive Preparation', 'Advanced HR Strategy', 'Career Transition Support']
                }
            ]
        },
        certifications: ['SAP ERP', 'Microsoft Project', 'Six Sigma Green Belt', 'Advanced Excel', 'HR Analytics', 'Workday'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image4.webp',
            mobile: '/uploads/imas_hero_image4.webp',
            alt: 'PGDM in Human Resource (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Advance Your HR Leadership Career',
            description: 'Transform your HR expertise with strategic management skills, advanced analytics, and executive leadership training. Designed for working professionals ready to lead organizational transformation.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Human Resource (Working Executive) - IMAS Kolkata | AICTE Approved',
            description: 'Advance your HR career with PGDM for working professionals at IMAS Kolkata. Weekend classes, strategic HR management, analytics training with 95% placement support.',
            keywords: ['PGDM Working Executive', 'Executive HR', 'Weekend MBA', 'Human Resource Management', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-hr-working-executive'
        }
    },
    {
        id: 'pgdm-analytics-working-executive',
        slug: 'pgdm-analytics-working-executive',
        name: 'PGDM in Business Analytics (Working Executive)',
        category: 'executive',
        subcategory: 'Working Executive',
        duration: '2 Years',
        format: 'blended',
        location: 'Bangalore',
        commencement: 'July 2025',
        description: 'A comprehensive 2-year PGDM program in Business Analytics designed for working professionals, combining online learning with weekend classroom sessions to master data-driven decision making.',
        overview: 'This program is specifically designed for working professionals who want to advance their careers in Business Analytics and Data Science. The blended learning format allows students to continue working while pursuing advanced analytics education. The curriculum covers statistical analysis, machine learning, business intelligence, and strategic analytics applications.',
        highlights: [
            'Blended Learning Format with Weekend Classes for Working Professionals',
            'Industry-Relevant Analytics Curriculum with Hands-on Tools & Techniques',
            'Expert Faculty with Extensive Data Science & Analytics Experience',
            'Comprehensive Coverage of Statistical Analysis & Machine Learning',
            'Professional Networking with Senior Analytics Leaders & Data Scientists',
            'Practical Case Studies & Real-World Analytics Applications',
            'Flexible Schedule Accommodating Full-Time Work Commitments',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            'Industry-Relevant Projects with current workplace integration',
            'Live Analytics Projects & Summer Internships',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior data scientists and analytics leaders',
            'Executive Alumni Network across top tech companies like IBM, Microsoft, Accenture',
            'Technical Communication & Leadership Training for analytics roles',
            'Certifications in Google Analytics, Tableau, Power BI, and Microsoft Azure',
            'Executive Career Advancement Support in Analytics & Data Science'
        ],
        whatYouLearn: [
            'Statistical Analysis & Hypothesis Testing',
            'Data Mining & Machine Learning Algorithms',
            'Business Intelligence & Data Warehousing',
            'Predictive Analytics & Forecasting',
            'Data Visualization & Dashboard Creation',
            'Big Data Technologies & Cloud Analytics',
            'Marketing Analytics & Customer Segmentation',
            'Financial Analytics & Risk Modeling',
            'Operations Analytics & Supply Chain Optimization',
            'Web Analytics & Digital Marketing Metrics',
            'A/B Testing & Experimental Design',
            'Database Management & SQL Programming',
            'Python & R Programming for Analytics',
            'Business Strategy & Data-Driven Decision Making',
            'Executive Leadership in Analytics'
        ],
        careerOpportunities: [
            'Business Analyst',
            'Data Scientist',
            'Analytics Consultant',
            'Marketing Analytics Manager',
            'Financial Risk Analyst',
            'Operations Research Analyst',
            'Business Intelligence Developer',
            'Data Visualization Specialist',
            'Predictive Modeling Specialist',
            'Digital Analytics Manager',
            'Market Research Analyst',
            'Supply Chain Analyst',
            'Product Analytics Manager',
            'Customer Insights Analyst',
            'Data Strategy Consultant'
        ],
        eligibility: {
            education: 'Bachelor\'s degree in any discipline with minimum 50% marks',
            experience: 'Minimum 2 years of work experience',
            exams: 'Valid CAT/MAT/XAT/CMAT/GMAT or IMAS entrance test',
            additional: 'Strong quantitative and analytical aptitude, personal interview, group discussion'
        },
        placement: {
            highestCTC: '₹20 LPA',
            averageCTC: '₹9–14 LPA',
            placementRate: '92%',
            topRecruiters: [
                recruiterLogos['IBM'],
                recruiterLogos['Microsoft'],
                recruiterLogos['Accenture'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys'],
                recruiterLogos['Wipro'],
                recruiterLogos['Deloitte'],
                recruiterLogos['PwC']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Statistics',
                    duration: '6 Months',
                    topics: ['Statistics & Probability', 'Data Structures', 'Business Fundamentals', 'Analytics Tools']
                },
                {
                    phase: 'Phase 2',
                    title: 'Analytics Specialization',
                    duration: '6 Months',
                    topics: ['Machine Learning', 'Data Mining', 'Business Intelligence', 'Predictive Analytics']
                },
                {
                    phase: 'Phase 3',
                    title: 'Advanced Analytics & Leadership',
                    duration: '3 Months',
                    topics: ['Big Data Analytics', 'Strategic Analytics', 'Leadership Development', 'Executive Mentorship']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '3 Months',
                    topics: ['Analytics Capstone Project', 'Executive Preparation', 'Advanced Analytics Strategy', 'Career Transition Support']
                }
            ]
        },
        certifications: ['SAP ERP', 'Microsoft Project', 'Six Sigma Green Belt', 'Advanced Excel', 'Google Analytics', 'Tableau', 'Power BI'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image5.webp',
            mobile: '/uploads/imas_hero_image5.webp',
            alt: 'PGDM in Business Analytics (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Master Data-Driven Decision Making',
            description: 'Transform your analytical expertise with advanced machine learning, business intelligence, and strategic analytics training. Designed for working professionals ready to lead data transformation.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Business Analytics (Working Executive) - IMAS Kolkata | AICTE Approved',
            description: 'Master Business Analytics with PGDM for working professionals at IMAS Kolkata. Weekend classes, machine learning, data science training with 92% placement support.',
            keywords: ['PGDM Working Executive', 'Executive Analytics', 'Weekend MBA', 'Business Analytics', 'Data Science', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-analytics-working-executive'
        }
    },
    {
        id: 'pgdm-ai-working-executive',
        slug: 'pgdm-ai-working-executive',
        name: 'PGDM in Artificial Intelligence & Data Science (Working Executive)',
        category: 'executive',
        subcategory: 'Working Executive',
        duration: '2 Years',
        format: 'blended',
        location: 'Bangalore',
        commencement: 'July 2025',
        description: 'A comprehensive 2-year PGDM program in Artificial Intelligence & Data Science designed for working professionals, combining online learning with weekend classroom sessions to master AI technologies and applications.',
        overview: 'This program is specifically designed for working professionals who want to advance their careers in Artificial Intelligence and Data Science. The blended learning format allows students to continue working while pursuing cutting-edge AI education. The curriculum covers machine learning, deep learning, natural language processing, computer vision, and AI ethics.',
        highlights: [
            'Blended Learning Format with Weekend Classes for Working Professionals',
            'Industry-Relevant AI Curriculum with Hands-on Python, TensorFlow & PyTorch',
            'Expert Faculty with Extensive AI & Machine Learning Experience',
            'Comprehensive Coverage of Deep Learning & Neural Networks',
            'Professional Networking with Senior AI Engineers & Data Science Leaders',
            'Practical Case Studies & Real-World AI Applications',
            'Flexible Schedule Accommodating Full-Time Work Commitments',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            'Industry-Relevant Projects with current workplace integration',
            'Live AI Projects & Summer Internships with tech companies',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior AI engineers and data science leaders',
            'Executive Alumni Network across top tech companies like Google, Microsoft, IBM',
            'Technical Communication & Leadership Training for AI roles',
            'Certifications in AWS AI, Google Cloud AI, and Microsoft Azure AI',
            'Executive Career Advancement Support in AI & Data Science'
        ],
        whatYouLearn: [
            'Artificial Intelligence Fundamentals',
            'Machine Learning Algorithms & Implementation',
            'Deep Learning & Neural Networks',
            'Natural Language Processing (NLP)',
            'Computer Vision & Image Recognition',
            'AI Ethics & Responsible AI Development',
            'Big Data Analytics & Cloud Computing',
            'Robotics & IoT Integration',
            'AI in Business Strategy & Decision Making',
            'Predictive Analytics & Forecasting',
            'AI Product Development & Management',
            'Data Engineering & MLOps',
            'Python Programming for AI',
            'TensorFlow & PyTorch Frameworks',
            'Executive Leadership in AI Transformation'
        ],
        careerOpportunities: [
            'AI Engineer',
            'Machine Learning Engineer',
            'Data Scientist',
            'AI Product Manager',
            'Deep Learning Specialist',
            'NLP Engineer',
            'Computer Vision Engineer',
            'AI Research Scientist',
            'AI Consultant',
            'Robotics Engineer',
            'AI Strategy Manager',
            'MLOps Engineer',
            'AI Ethics Specialist',
            'Chief AI Officer',
            'AI Transformation Leader'
        ],
        eligibility: {
            education: 'Bachelor\'s degree in any discipline with minimum 50% marks',
            experience: 'Minimum 2 years of work experience',
            exams: 'Valid CAT/MAT/XAT/CMAT/GMAT or IMAS entrance test',
            additional: 'Strong quantitative and programming aptitude, personal interview, group discussion'
        },
        placement: {
            highestCTC: '₹25 LPA',
            averageCTC: '₹12–18 LPA',
            placementRate: '90%',
            topRecruiters: [
                recruiterLogos['Google'],
                recruiterLogos['Microsoft'],
                recruiterLogos['IBM'],
                recruiterLogos['Amazon'],
                recruiterLogos['Accenture'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys'],
                recruiterLogos['Wipro']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Programming',
                    duration: '6 Months',
                    topics: ['Programming Fundamentals', 'Mathematics for AI', 'Statistics & Probability', 'Data Structures']
                },
                {
                    phase: 'Phase 2',
                    title: 'AI & Machine Learning Specialization',
                    duration: '6 Months',
                    topics: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
                },
                {
                    phase: 'Phase 3',
                    title: 'Advanced AI & Leadership',
                    duration: '3 Months',
                    topics: ['Advanced AI Applications', 'AI Ethics', 'Leadership Development', 'Executive Mentorship']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '3 Months',
                    topics: ['AI Capstone Project', 'Executive Preparation', 'AI Strategy', 'Career Transition Support']
                }
            ]
        },
        certifications: ['SAP ERP', 'Microsoft Project', 'Six Sigma Green Belt', 'Advanced Excel', 'AWS AI', 'Google Cloud AI', 'Microsoft Azure AI'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image6.webp',
            mobile: '/uploads/imas_hero_image6.webp',
            alt: 'PGDM in Artificial Intelligence & Data Science (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Lead the AI Revolution',
            description: 'Transform your technical expertise with cutting-edge AI, machine learning, and deep learning training. Designed for working professionals ready to lead AI transformation in their organizations.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Artificial Intelligence & Data Science (Working Executive) - IMAS Kolkata | AICTE Approved',
            description: 'Master AI & Data Science with PGDM for working professionals at IMAS Kolkata. Weekend classes, machine learning, deep learning training with 90% placement support.',
            keywords: ['PGDM Working Executive', 'Executive AI', 'Weekend MBA', 'Artificial Intelligence', 'Data Science', 'Machine Learning', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-ai-working-executive'
        }
    },
    {
        id: 'pgdm-fintech-working-executive',
        slug: 'pgdm-fintech-working-executive',
        name: 'PGDM in Fintech (Working Executive)',
        category: 'executive',
        subcategory: 'Working Executive',
        duration: '2 Years',
        format: 'blended',
        location: 'Bangalore',
        commencement: 'July 2025',
        description: 'A comprehensive 2-year PGDM program in Fintech designed for working professionals, combining online learning with weekend classroom sessions to master financial technology innovations and digital banking.',
        overview: 'This program is specifically designed for working professionals who want to advance their careers in Financial Technology. The blended learning format allows students to continue working while pursuing cutting-edge fintech education. The curriculum covers blockchain, cryptocurrency, digital payments, robo-advisory, and regulatory technology.',
        highlights: [
            'Blended Learning Format with Weekend Classes for Working Professionals',
            'Industry-Relevant Fintech Curriculum with Blockchain & Cryptocurrency',
            'Expert Faculty with Extensive Fintech & Digital Banking Experience',
            'Comprehensive Coverage of Digital Payments & Mobile Banking',
            'Professional Networking with Senior Fintech Leaders & Banking Executives',
            'Practical Case Studies & Real-World Fintech Applications',
            'Flexible Schedule Accommodating Full-Time Work Commitments',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            'Industry-Relevant Projects with current workplace integration',
            'Live Fintech Projects & Summer Internships with financial institutions',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior fintech executives and banking leaders',
            'Executive Alumni Network across top fintech companies and banks',
            'Financial Communication & Leadership Training for fintech roles',
            'Certifications in Financial Analytics, Blockchain, and Digital Banking',
            'Executive Career Advancement Support in Fintech & Digital Finance'
        ],
        whatYouLearn: [
            'Fintech Fundamentals & Digital Banking',
            'Blockchain Technology & Cryptocurrency',
            'Digital Payments & Mobile Banking',
            'Robo-Advisory & Algorithmic Trading',
            'Regulatory Technology (RegTech)',
            'Insurance Technology (InsurTech)',
            'Peer-to-Peer Lending & Crowdfunding',
            'Financial Data Analytics',
            'Cybersecurity in Financial Services',
            'API Banking & Open Banking',
            'Financial Risk Management',
            'Digital Transformation in Banking',
            'Fintech Product Development',
            'Financial Compliance & Regulations',
            'Executive Leadership in Financial Innovation'
        ],
        careerOpportunities: [
            'Fintech Product Manager',
            'Digital Banking Manager',
            'Blockchain Developer',
            'Cryptocurrency Analyst',
            'Payment Systems Manager',
            'Fintech Consultant',
            'Digital Finance Director',
            'RegTech Specialist',
            'Financial Innovation Manager',
            'Digital Transformation Lead',
            'Fintech Business Analyst',
            'Mobile Banking Manager',
            'Financial Technology Architect',
            'Chief Digital Officer',
            'Fintech Entrepreneur'
        ],
        eligibility: {
            education: 'Bachelor\'s degree in any discipline with minimum 50% marks',
            experience: 'Minimum 2 years of work experience',
            exams: 'Valid CAT/MAT/XAT/CMAT/GMAT or IMAS entrance test',
            additional: 'Strong analytical and financial aptitude, personal interview, group discussion'
        },
        placement: {
            highestCTC: '₹22 LPA',
            averageCTC: '₹10–16 LPA',
            placementRate: '88%',
            topRecruiters: [
                recruiterLogos['HDFC Bank'],
                recruiterLogos['ICICI Bank'],
                recruiterLogos['Axis Bank'],
                recruiterLogos['Paytm'],
                recruiterLogos['PhonePe'],
                recruiterLogos['Razorpay'],
                recruiterLogos['Bajaj Finserv'],
                recruiterLogos['Kotak Mahindra Bank']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Financial Technology',
                    duration: '6 Months',
                    topics: ['Fintech Fundamentals', 'Digital Banking', 'Financial Markets', 'Technology in Finance']
                },
                {
                    phase: 'Phase 2',
                    title: 'Fintech Specialization',
                    duration: '6 Months',
                    topics: ['Blockchain & Cryptocurrency', 'Digital Payments', 'RegTech', 'InsurTech']
                },
                {
                    phase: 'Phase 3',
                    title: 'Advanced Fintech & Leadership',
                    duration: '3 Months',
                    topics: ['Advanced Financial Analytics', 'Fintech Innovation', 'Leadership Development', 'Executive Mentorship']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '3 Months',
                    topics: ['Fintech Capstone Project', 'Executive Preparation', 'Digital Finance Strategy', 'Career Transition Support']
                }
            ]
        },
        certifications: ['SAP ERP', 'Microsoft Project', 'Six Sigma Green Belt', 'Advanced Excel', 'Financial Analytics', 'Blockchain Certification', 'Digital Banking'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image7.webp',
            mobile: '/uploads/imas_hero_image7.webp',
            alt: 'PGDM in Fintech (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Lead Financial Innovation',
            description: 'Transform your financial expertise with cutting-edge fintech, blockchain, and digital banking training. Designed for working professionals ready to lead financial technology transformation.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Fintech (Working Executive) - IMAS Kolkata | AICTE Approved',
            description: 'Master Fintech & Digital Banking with PGDM for working professionals at IMAS Kolkata. Weekend classes, blockchain, cryptocurrency training with 88% placement support.',
            keywords: ['PGDM Working Executive', 'Executive Fintech', 'Weekend MBA', 'Financial Technology', 'Digital Banking', 'Blockchain', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-fintech-working-executive'
        }
    },
    {
        id: 'pgdm-logistics-working-executive',
        slug: 'pgdm-logistics-working-executive',
        name: 'PGDM in Logistics & Supply Chain Management (Working Executive)',
        category: 'executive',
        subcategory: 'Working Executive',
        duration: '2 Years',
        format: 'blended',
        location: 'Bangalore',
        commencement: 'July 2025',
        description: 'A comprehensive 2-year PGDM program in Logistics & Supply Chain Management designed for working professionals, combining online learning with weekend classroom sessions to master supply chain optimization and logistics management.',
        overview: 'This program is specifically designed for working professionals who want to advance their careers in Logistics and Supply Chain Management. The blended learning format allows students to continue working while pursuing cutting-edge supply chain education. The curriculum covers procurement, inventory management, transportation, warehousing, and global supply chain strategies.',
        highlights: [
            'Blended Learning Format with Weekend Classes for Working Professionals',
            'Industry-Relevant Supply Chain Curriculum with Global Best Practices',
            'Expert Faculty with Extensive Logistics & SCM Experience',
            'Comprehensive Coverage of Procurement & Inventory Management',
            'Professional Networking with Senior Supply Chain Leaders & Logistics Executives',
            'Practical Case Studies & Real-World Supply Chain Applications',
            'Flexible Schedule Accommodating Full-Time Work Commitments',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            'Industry-Relevant Projects with current workplace integration',
            'Live Supply Chain Projects & Summer Internships with logistics companies',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior supply chain executives and logistics leaders',
            'Executive Alumni Network across top logistics and manufacturing companies',
            'Supply Chain Communication & Leadership Training for logistics roles',
            'Certifications in Supply Chain Analytics, Warehouse Management, and Transportation',
            'Executive Career Advancement Support in Logistics & Supply Chain'
        ],
        whatYouLearn: [
            'Supply Chain Management Fundamentals',
            'Procurement & Vendor Management',
            'Inventory Management & Control',
            'Transportation & Distribution Management',
            'Warehouse Management Systems',
            'Global Supply Chain Strategies',
            'Supply Chain Analytics & Optimization',
            'Logistics Technology & Automation',
            'Demand Planning & Forecasting',
            'Supply Chain Risk Management',
            'Sustainable Supply Chain Practices',
            'E-commerce Logistics',
            'Supply Chain Finance',
            'Quality Management in Supply Chain',
            'Executive Leadership in Supply Chain Operations'
        ],
        careerOpportunities: [
            'Supply Chain Manager',
            'Logistics Manager',
            'Procurement Manager',
            'Warehouse Manager',
            'Transportation Manager',
            'Supply Chain Analyst',
            'Operations Manager',
            'Inventory Control Manager',
            'Distribution Manager',
            'Supply Chain Consultant',
            'Logistics Coordinator',
            'Vendor Management Specialist',
            'Supply Chain Director',
            'Chief Supply Chain Officer',
            'Logistics Entrepreneur'
        ],
        eligibility: {
            education: 'Bachelor\'s degree in any discipline with minimum 50% marks',
            experience: 'Minimum 2 years of work experience',
            exams: 'Valid CAT/MAT/XAT/CMAT/GMAT or IMAS entrance test',
            additional: 'Strong analytical and operational aptitude, personal interview, group discussion'
        },
        placement: {
            highestCTC: '₹20 LPA',
            averageCTC: '₹9–15 LPA',
            placementRate: '85%',
            topRecruiters: [
                recruiterLogos['Amazon'],
                recruiterLogos['Flipkart'],
                recruiterLogos['DHL'],
                recruiterLogos['FedEx'],
                recruiterLogos['Blue Dart'],
                recruiterLogos['Mahindra Logistics'],
                recruiterLogos['TCS'],
                recruiterLogos['Wipro']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Supply Chain Basics',
                    duration: '6 Months',
                    topics: ['Supply Chain Fundamentals', 'Operations Management', 'Business Analytics', 'Management Principles']
                },
                {
                    phase: 'Phase 2',
                    title: 'Logistics & SCM Specialization',
                    duration: '6 Months',
                    topics: ['Procurement Management', 'Inventory Control', 'Transportation Management', 'Warehouse Operations']
                },
                {
                    phase: 'Phase 3',
                    title: 'Advanced SCM & Leadership',
                    duration: '3 Months',
                    topics: ['Global Supply Chain', 'Supply Chain Analytics', 'Leadership Development', 'Executive Mentorship']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '3 Months',
                    topics: ['Supply Chain Capstone Project', 'Executive Preparation', 'Logistics Strategy', 'Career Transition Support']
                }
            ]
        },
        certifications: ['SAP ERP', 'Microsoft Project', 'Six Sigma Green Belt', 'Advanced Excel', 'Supply Chain Analytics', 'Warehouse Management', 'Transportation Management'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image8.webp',
            mobile: '/uploads/imas_hero_image8.webp',
            alt: 'PGDM in Logistics & Supply Chain Management (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Master Global Supply Chains',
            description: 'Transform your logistics expertise with cutting-edge supply chain management, procurement, and operations training. Designed for working professionals ready to lead supply chain transformation.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Logistics & Supply Chain Management (Working Executive) - IMAS Kolkata | AICTE Approved',
            description: 'Master Logistics & Supply Chain with PGDM for working professionals at IMAS Kolkata. Weekend classes, procurement, inventory management training with 85% placement support.',
            keywords: ['PGDM Working Executive', 'Executive Logistics', 'Weekend MBA', 'Supply Chain Management', 'Logistics Management', 'Procurement', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-logistics-working-executive'
        }
    },
    {
        id: 'pgdm-operations-working-executive',
        slug: 'pgdm-operations-working-executive',
        name: 'PGDM in Operations Management (Working Executive)',
        category: 'executive',
        subcategory: 'Working Executive',
        duration: '2 Years',
        format: 'blended',
        location: 'Bangalore',
        commencement: 'July 2025',
        description: 'A comprehensive 2-year PGDM program in Operations Management designed for working professionals, combining online learning with weekend classroom sessions to master operational excellence and process optimization.',
        overview: 'This program is specifically designed for working professionals who want to advance their careers in Operations Management. The blended learning format allows students to continue working while pursuing cutting-edge operations education. The curriculum covers production planning, quality management, lean manufacturing, process improvement, and operational strategy.',
        highlights: [
            'Blended Learning Format with Weekend Classes for Working Professionals',
            'Industry-Relevant Operations Curriculum with Lean & Six Sigma Methodologies',
            'Expert Faculty with Extensive Operations & Manufacturing Experience',
            'Comprehensive Coverage of Production Planning & Quality Management',
            'Professional Networking with Senior Operations Leaders & Manufacturing Executives',
            'Practical Case Studies & Real-World Operations Applications',
            'Flexible Schedule Accommodating Full-Time Work Commitments',
            'Advanced Certifications: Six Sigma (Green Belt), SAP ERP, Advanced Excel',
            'Industry-Relevant Projects with current workplace integration',
            'Live Operations Projects & Summer Internships with manufacturing companies',
            'International Immersion: Dubai, Singapore, Thailand & Malaysia',
            'Industry Mentorship from senior operations executives and manufacturing leaders',
            'Executive Alumni Network across top manufacturing and service companies',
            'Operations Communication & Leadership Training for management roles',
            'Certifications in Operations Analytics, Quality Management, and Process Improvement',
            'Executive Career Advancement Support in Operations & Manufacturing'
        ],
        whatYouLearn: [
            'Operations Management Fundamentals',
            'Production Planning & Control',
            'Quality Management Systems',
            'Lean Manufacturing & Six Sigma',
            'Process Design & Improvement',
            'Operations Strategy & Planning',
            'Operations Analytics & Optimization',
            'Manufacturing Technology & Automation',
            'Capacity Planning & Scheduling',
            'Operations Risk Management',
            'Sustainable Operations Practices',
            'Service Operations Management',
            'Operations Finance & Costing',
            'Project Management in Operations',
            'Executive Leadership in Operations Excellence'
        ],
        careerOpportunities: [
            'Operations Manager',
            'Production Manager',
            'Quality Manager',
            'Process Improvement Manager',
            'Manufacturing Manager',
            'Operations Analyst',
            'Plant Manager',
            'Lean Six Sigma Specialist',
            'Operations Consultant',
            'Supply Chain Operations Manager',
            'Operations Director',
            'Chief Operations Officer',
            'Manufacturing Director',
            'Operations Excellence Manager',
            'Operations Entrepreneur'
        ],
        eligibility: {
            education: 'Bachelor\'s degree in any discipline with minimum 50% marks',
            experience: 'Minimum 2 years of work experience',
            exams: 'Valid CAT/MAT/XAT/CMAT/GMAT or IMAS entrance test',
            additional: 'Strong analytical and operational aptitude, personal interview, group discussion'
        },
        placement: {
            highestCTC: '₹22 LPA',
            averageCTC: '₹10–16 LPA',
            placementRate: '87%',
            topRecruiters: [
                recruiterLogos['Tata Motors'],
                recruiterLogos['Mahindra'],
                recruiterLogos['Bajaj Auto'],
                recruiterLogos['L&T'],
                recruiterLogos['Godrej'],
                recruiterLogos['ITC'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Operations Basics',
                    duration: '6 Months',
                    topics: ['Operations Fundamentals', 'Production Management', 'Business Analytics', 'Management Principles']
                },
                {
                    phase: 'Phase 2',
                    title: 'Operations Management Specialization',
                    duration: '6 Months',
                    topics: ['Quality Management', 'Lean Manufacturing', 'Process Improvement', 'Operations Planning']
                },
                {
                    phase: 'Phase 3',
                    title: 'Advanced Operations & Leadership',
                    duration: '3 Months',
                    topics: ['Operations Strategy', 'Operations Analytics', 'Leadership Development', 'Executive Mentorship']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '3 Months',
                    topics: ['Operations Capstone Project', 'Executive Preparation', 'Operations Excellence', 'Career Transition Support']
                }
            ]
        },
        certifications: ['SAP ERP', 'Microsoft Project', 'Six Sigma Green Belt', 'Advanced Excel', 'Operations Analytics', 'Quality Management', 'Lean Manufacturing'],
        internationalExposure: ['Dubai', 'Singapore', 'Thailand', 'Malaysia'],
        heroImage: {
            desktop: '/uploads/imas_hero_image9.webp',
            mobile: '/uploads/imas_hero_image9.webp',
            alt: 'PGDM in Operations Management (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Drive Operational Excellence',
            description: 'Transform your operations expertise with cutting-edge manufacturing, quality management, and process improvement training. Designed for working professionals ready to lead operational transformation.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Operations Management (Working Executive) - IMAS Kolkata | AICTE Approved',
            description: 'Master Operations Management with PGDM for working professionals at IMAS Kolkata. Weekend classes, lean manufacturing, quality management training with 87% placement support.',
            keywords: ['PGDM Working Executive', 'Executive Operations', 'Weekend MBA', 'Operations Management', 'Manufacturing Management', 'Quality Management', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-operations-working-executive'
        }
    },
    {
        id: 'pgdm-agri-working-executive',
        slug: 'pgdm-agri-working-executive',
        name: 'PGDM in Agri Business Management (Working Executive)',
        category: 'executive',
        subcategory: 'Working Executive',
        duration: '2 Years',
        format: 'blended',
        location: 'Bangalore',
        commencement: 'July 2025',
        description: 'A comprehensive 2-year PGDM program in Agri Business Management designed for working professionals, combining online learning with weekend classroom sessions to master agricultural value chain management and sustainable farming practices.',
        overview: 'This program is specifically designed for working professionals who want to advance their careers in Agri Business Management. The blended learning format allows students to continue working while pursuing cutting-edge agricultural business education. The curriculum covers farm management, agricultural finance, supply chain management, sustainable agriculture, and agri-tech innovations.',
        highlights: [
            'Blended Learning Format with Weekend Classes for Working Professionals',
            'Industry-Relevant Agri Business Curriculum with Sustainable Agriculture Focus',
            'Expert Faculty with Extensive Agricultural & Rural Development Experience',
            'Comprehensive Coverage of Farm Management & Agricultural Finance',
            'Professional Networking with Senior Agri Business Leaders & Rural Development Experts',
            'Practical Case Studies & Real-World Agricultural Applications',
            'Flexible Schedule Accommodating Full-Time Work Commitments',
            'Advanced Certifications: Agricultural Analytics, Farm Management, Rural Marketing',
            'Industry-Relevant Projects with current workplace integration',
            'Live Agricultural Projects & Summer Internships with agri companies',
            'International Immersion: Netherlands, Israel, Australia & New Zealand',
            'Industry Mentorship from senior agri business executives and farming leaders',
            'Executive Alumni Network across top agricultural and food processing companies',
            'Agricultural Communication & Leadership Training for management roles',
            'Certifications in Agri Analytics, Sustainable Farming, and Rural Development',
            'Executive Career Advancement Support in Agri Business & Rural Development'
        ],
        whatYouLearn: [
            'Agri Business Management Fundamentals',
            'Farm Management & Operations',
            'Agricultural Finance & Economics',
            'Supply Chain Management in Agriculture',
            'Sustainable Agriculture Practices',
            'Agricultural Marketing & Sales',
            'Rural Development & Policy',
            'Agri-Tech & Innovation Management',
            'Food Processing & Value Addition',
            'Agricultural Risk Management',
            'Organic Farming & Certification',
            'Agricultural Export-Import Management',
            'Agricultural Project Management',
            'Rural Entrepreneurship Development',
            'Executive Leadership in Agri Business'
        ],
        careerOpportunities: [
            'Agri Business Manager',
            'Farm Operations Manager',
            'Agricultural Finance Manager',
            'Rural Development Manager',
            'Agricultural Marketing Manager',
            'Food Processing Manager',
            'Agricultural Consultant',
            'Agri-Tech Specialist',
            'Agricultural Export Manager',
            'Rural Banking Manager',
            'Agricultural Project Manager',
            'Sustainable Agriculture Manager',
            'Agricultural Entrepreneur',
            'Rural Development Officer',
            'Agricultural Policy Analyst'
        ],
        eligibility: {
            education: 'Bachelor\'s degree in any discipline with minimum 50% marks',
            experience: 'Minimum 2 years of work experience',
            exams: 'Valid CAT/MAT/XAT/CMAT/GMAT or IMAS entrance test',
            additional: 'Strong interest in agriculture and rural development, personal interview, group discussion'
        },
        placement: {
            highestCTC: '₹18 LPA',
            averageCTC: '₹8–14 LPA',
            placementRate: '82%',
            topRecruiters: [
                recruiterLogos['ITC'],
                recruiterLogos['Godrej'],
                recruiterLogos['Tata Consumer'],
                recruiterLogos['Mahindra'],
                recruiterLogos['HDFC Bank'],
                recruiterLogos['ICICI Bank'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Agri Business Basics',
                    duration: '6 Months',
                    topics: ['Agri Business Fundamentals', 'Farm Management', 'Agricultural Economics', 'Management Principles']
                },
                {
                    phase: 'Phase 2',
                    title: 'Agri Business Management Specialization',
                    duration: '6 Months',
                    topics: ['Agricultural Finance', 'Supply Chain Management', 'Rural Marketing', 'Sustainable Agriculture']
                },
                {
                    phase: 'Phase 3',
                    title: 'Advanced Agri Business & Leadership',
                    duration: '3 Months',
                    topics: ['Agri-Tech Innovation', 'Agricultural Policy', 'Leadership Development', 'Executive Mentorship']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '3 Months',
                    topics: ['Agri Business Capstone Project', 'Executive Preparation', 'Rural Development', 'Career Transition Support']
                }
            ]
        },
        certifications: ['Agricultural Analytics', 'Farm Management Software', 'Rural Marketing', 'Advanced Excel', 'Sustainable Agriculture', 'Agricultural Finance', 'Rural Development'],
        internationalExposure: ['Netherlands', 'Israel', 'Australia', 'New Zealand'],
        heroImage: {
            desktop: '/uploads/imas_hero_image10.webp',
            mobile: '/uploads/imas_hero_image10.webp',
            alt: 'PGDM in Agri Business Management (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Transform Agricultural Business',
            description: 'Master agri business management with sustainable farming practices, agricultural finance, and rural development expertise. Designed for working professionals ready to lead agricultural transformation.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Agri Business Management (Working Executive) - IMAS Kolkata | AICTE Approved',
            description: 'Master Agri Business Management with PGDM for working professionals at IMAS Kolkata. Weekend classes, sustainable agriculture, rural development training with 82% placement support.',
            keywords: ['PGDM Working Executive', 'Executive Agri Business', 'Weekend MBA', 'Agricultural Management', 'Rural Development', 'Sustainable Agriculture', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-agri-working-executive'
        }
    },
    {
        id: 'pgdm-healthcare-working-executive',
        slug: 'pgdm-healthcare-working-executive',
        name: 'PGDM in Hospital & Healthcare Management (Working Executive)',
        category: 'executive',
        subcategory: 'Working Executive',
        duration: '2 Years',
        format: 'blended',
        location: 'Bangalore',
        commencement: 'July 2025',
        description: 'A comprehensive 2-year PGDM program in Hospital & Healthcare Management designed for working professionals, combining online learning with weekend classroom sessions to master healthcare administration and medical facility management.',
        overview: 'This program is specifically designed for working professionals who want to advance their careers in Healthcare Management. The blended learning format allows students to continue working while pursuing cutting-edge healthcare administration education. The curriculum covers hospital operations, healthcare finance, medical technology management, healthcare policy, and patient care excellence.',
        highlights: [
            'Blended Learning Format with Weekend Classes for Working Professionals',
            'Industry-Relevant Healthcare Curriculum with Hospital Administration Focus',
            'Expert Faculty with Extensive Healthcare & Medical Administration Experience',
            'Comprehensive Coverage of Hospital Operations & Healthcare Finance',
            'Professional Networking with Senior Healthcare Leaders & Medical Administrators',
            'Practical Case Studies & Real-World Healthcare Applications',
            'Flexible Schedule Accommodating Full-Time Work Commitments',
            'Advanced Certifications: Healthcare Analytics, Hospital Management, Medical Coding',
            'Industry-Relevant Projects with current workplace integration',
            'Live Healthcare Projects & Summer Internships with hospitals and healthcare companies',
            'International Immersion: Germany, Singapore, USA & Canada',
            'Industry Mentorship from senior healthcare executives and medical administrators',
            'Executive Alumni Network across top hospitals and healthcare organizations',
            'Healthcare Communication & Leadership Training for management roles',
            'Certifications in Healthcare Analytics, Medical Administration, and Patient Care Management',
            'Executive Career Advancement Support in Healthcare & Medical Administration'
        ],
        whatYouLearn: [
            'Healthcare Management Fundamentals',
            'Hospital Operations & Administration',
            'Healthcare Finance & Economics',
            'Medical Technology Management',
            'Healthcare Quality & Patient Safety',
            'Healthcare Marketing & Communications',
            'Healthcare Policy & Regulations',
            'Medical Equipment & Facility Management',
            'Healthcare Information Systems',
            'Healthcare Risk Management',
            'Public Health & Community Medicine',
            'Healthcare Supply Chain Management',
            'Healthcare Project Management',
            'Medical Ethics & Legal Issues',
            'Executive Leadership in Healthcare'
        ],
        careerOpportunities: [
            'Hospital Administrator',
            'Healthcare Operations Manager',
            'Medical Services Manager',
            'Healthcare Finance Manager',
            'Healthcare Quality Manager',
            'Medical Equipment Manager',
            'Healthcare Consultant',
            'Healthcare IT Manager',
            'Patient Care Manager',
            'Healthcare Marketing Manager',
            'Medical Facility Manager',
            'Healthcare Policy Analyst',
            'Healthcare Entrepreneur',
            'Medical Insurance Manager',
            'Healthcare Project Manager'
        ],
        eligibility: {
            education: 'Bachelor\'s degree in any discipline with minimum 50% marks',
            experience: 'Minimum 2 years of work experience',
            exams: 'Valid CAT/MAT/XAT/CMAT/GMAT or IMAS entrance test',
            additional: 'Strong interest in healthcare and medical administration, personal interview, group discussion'
        },
        placement: {
            highestCTC: '₹20 LPA',
            averageCTC: '₹9–15 LPA',
            placementRate: '85%',
            topRecruiters: [
                recruiterLogos['Apollo Hospitals'],
                recruiterLogos['Fortis Healthcare'],
                recruiterLogos['Max Healthcare'],
                recruiterLogos['Manipal Hospitals'],
                recruiterLogos['HDFC Bank'],
                recruiterLogos['ICICI Bank'],
                recruiterLogos['TCS'],
                recruiterLogos['Infosys']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Healthcare Basics',
                    duration: '6 Months',
                    topics: ['Healthcare Management Fundamentals', 'Hospital Administration', 'Healthcare Economics', 'Management Principles']
                },
                {
                    phase: 'Phase 2',
                    title: 'Healthcare Management Specialization',
                    duration: '6 Months',
                    topics: ['Healthcare Finance', 'Medical Technology Management', 'Healthcare Quality', 'Patient Care Management']
                },
                {
                    phase: 'Phase 3',
                    title: 'Advanced Healthcare & Leadership',
                    duration: '3 Months',
                    topics: ['Healthcare Policy', 'Healthcare Innovation', 'Leadership Development', 'Executive Mentorship']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Career Advancement',
                    duration: '3 Months',
                    topics: ['Healthcare Capstone Project', 'Executive Preparation', 'Medical Administration', 'Career Transition Support']
                }
            ]
        },
        certifications: ['Healthcare Analytics', 'Hospital Management Software', 'Medical Coding', 'Advanced Excel', 'Healthcare Quality Management', 'Medical Administration', 'Patient Care Management'],
        internationalExposure: ['Germany', 'Singapore', 'USA', 'Canada'],
        heroImage: {
            desktop: '/uploads/imas_hero_image11.webp',
            mobile: '/uploads/imas_hero_image11.webp',
            alt: 'PGDM in Hospital & Healthcare Management (Working Executive) at IMAS Kolkata'
        },
        cta: {
            title: 'Lead Healthcare Excellence',
            description: 'Master healthcare management with hospital administration, medical technology, and patient care expertise. Designed for working professionals ready to lead healthcare transformation.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'PGDM in Hospital & Healthcare Management (Working Executive) - IMAS Kolkata | AICTE Approved',
            description: 'Master Healthcare Management with PGDM for working professionals at IMAS Kolkata. Weekend classes, hospital administration, medical management training with 85% placement support.',
            keywords: ['PGDM Working Executive', 'Executive Healthcare', 'Weekend MBA', 'Hospital Management', 'Healthcare Administration', 'Medical Management', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/pgdm-healthcare-working-executive'
        }
    },
    {
        id: 'mba-global',
        slug: 'mba-global',
        name: 'MBA Global',
        category: 'mba-global',
        subcategory: 'Global',
        duration: '2 Years',
        format: 'full-time',
        location: 'Bangalore & UK',
        commencement: 'July 2025',
        description: 'A prestigious 2-year MBA Global program with dual qualification from IMAS India and UK partner university, offering international exposure and global business perspectives.',
        overview: 'The MBA Global program is designed to create global business leaders with international exposure and cross-cultural competencies. Students spend time in both India and the UK, earning dual qualifications and gaining invaluable global business experience. The program combines rigorous academic curriculum with practical international business applications.',
        highlights: [
            'Dual Qualification: MBA from IMAS India + UK Partner University Degree',
            'International Campus Experience in UK for One Semester',
            'Global Faculty from India, UK, and Other International Universities',
            'Comprehensive International Business Curriculum',
            'Cross-Cultural Leadership and Global Management Training',
            'International Internship Opportunities in UK and Europe',
            'Global Alumni Network Across Multiple Countries',
            'Advanced Certifications: International Business, Global Finance, Cross-Cultural Management',
            'Industry-Relevant Projects with multinational corporations',
            'Live International Business Projects & Global Consulting Assignments',
            'International Immersion: UK, Germany, France, USA & Singapore',
            'Industry Mentorship from global business leaders and international executives',
            'Executive Alumni Network across top multinational companies worldwide',
            'Global Communication & Leadership Training for international roles',
            'Certifications in Global Business Analytics, International Finance, and Cross-Cultural Management',
            'Executive Career Advancement Support in Global Business & International Markets'
        ],
        whatYouLearn: [
            'Global Business Strategy',
            'International Marketing & Sales',
            'Cross-Cultural Management',
            'Global Finance & Economics',
            'International Trade & Commerce',
            'Global Supply Chain Management',
            'International Business Law',
            'Global Leadership & Communication',
            'International Project Management',
            'Global Risk Management',
            'Sustainable Global Business Practices',
            'International Entrepreneurship',
            'Global Business Analytics',
            'International Human Resource Management',
            'Executive Leadership in Global Markets'
        ],
        careerOpportunities: [
            'Global Business Manager',
            'International Marketing Manager',
            'Global Operations Manager',
            'International Business Consultant',
            'Global Finance Manager',
            'International Trade Manager',
            'Global Project Manager',
            'International Business Analyst',
            'Global Supply Chain Manager',
            'International Business Developer',
            'Global Strategy Manager',
            'International Relations Manager',
            'Global Entrepreneur',
            'International Investment Manager',
            'Global Business Director'
        ],
        eligibility: {
            education: 'Bachelor\'s degree in any discipline with minimum 60% marks',
            experience: 'Fresh graduates or professionals with work experience',
            exams: 'Valid CAT/MAT/XAT/CMAT/GMAT or IMAS entrance test',
            additional: 'Strong English proficiency, passport ready for international travel, personal interview, group discussion'
        },
        placement: {
            highestCTC: '₹35 LPA',
            averageCTC: '₹18–28 LPA',
            placementRate: '92%',
            topRecruiters: [
                recruiterLogos['Deloitte'],
                recruiterLogos['PwC'],
                recruiterLogos['KPMG'],
                recruiterLogos['EY'],
                recruiterLogos['McKinsey'],
                recruiterLogos['BCG'],
                recruiterLogos['Accenture'],
                recruiterLogos['IBM']
            ]
        },
        curriculum: {
            phases: [
                {
                    phase: 'Phase 1',
                    title: 'Foundation & Global Business Basics',
                    duration: '6 Months',
                    topics: ['Global Business Fundamentals', 'International Economics', 'Cross-Cultural Management', 'Global Strategy']
                },
                {
                    phase: 'Phase 2',
                    title: 'International Business Specialization',
                    duration: '6 Months',
                    topics: ['International Marketing', 'Global Finance', 'International Trade', 'Global Operations']
                },
                {
                    phase: 'Phase 3',
                    title: 'UK Campus Experience & Advanced Learning',
                    duration: '6 Months',
                    topics: ['UK Campus Study', 'European Business Environment', 'Global Leadership', 'International Consulting']
                },
                {
                    phase: 'Phase 4',
                    title: 'Capstone & Global Career Preparation',
                    duration: '6 Months',
                    topics: ['Global Business Capstone Project', 'International Internship', 'Global Career Preparation', 'Alumni Network Integration']
                }
            ]
        },
        certifications: ['International Business Analytics', 'Global Finance', 'Cross-Cultural Management', 'Advanced Excel', 'Global Project Management', 'International Trade', 'Global Leadership'],
        internationalExposure: ['UK', 'Germany', 'France', 'USA', 'Singapore'],
        heroImage: {
            desktop: '/uploads/imas_hero_image12.webp',
            mobile: '/uploads/imas_hero_image12.webp',
            alt: 'MBA Global at IMAS Kolkata with UK Partnership'
        },
        cta: {
            title: 'Go Global with MBA',
            description: 'Earn dual qualifications from India and UK while gaining international business expertise. Experience global campuses and build an international career with our prestigious MBA Global program.',
            buttons: [
                { text: 'Apply Now for IMAS Admission 2025', action: 'apply' },
                { text: 'Enquire Now', action: 'enquire' },
                { text: 'Download Brochure', action: 'download' }
            ]
        },
        seo: {
            title: 'MBA Global - Dual Qualification India & UK - IMAS Kolkata | AICTE Approved',
            description: 'Earn MBA Global with dual qualification from IMAS India and UK partner university. International campus experience, global business training with 92% placement support.',
            keywords: ['MBA Global', 'Dual Qualification MBA', 'UK Partnership', 'International MBA', 'Global Business', 'International Campus', 'IMAS Kolkata', 'AICTE Approved'],
            canonical: '/programs/mba-global'
        }
    }
];

export const getProgramBySlug = (slug: string): Program | undefined => {
    return programsData.find(program => program.slug === slug);
};

export const getProgramsByCategory = (category: Program['category']): Program[] => {
    return programsData.filter(program => program.category === category);
};

export const getAllProgramSlugs = (): string[] => {
    return programsData.map(program => program.slug);
};
