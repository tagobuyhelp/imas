export interface Faculty {
    id: string;
    name: string;
    title: string;
    qualifications: string;
    image: string;
    description: string;
    fullBio: string;
    expertise: string;
    tags: string[];
    company?: string;
    companyLogo?: string;
}

export interface Mentor {
    id: string;
    name: string;
    title: string;
    company: string;
    companyLogo: string;
    image: string;
    description: string;
    fullBio: string;
    expertise: string;
    tags: string[];
}

// Faculty data
export const faculty = [
    {
        id: 'f1',
        name: 'Nibir Saha',
        title: 'Chairman',
        qualifications: 'Chairman of IMAS, IAER, IAHM, DUC',
        image: '/uploads/faculty/Nibir_Saha.jpeg',
        description: 'Education entrepreneur leading institutions focused on industry-oriented higher education.',
        fullBio: 'Nibir Saha is an education entrepreneur and the Chairman of IMAS, IAER, IAHM, and DUC. He is focused on developing industry-oriented higher education and employability-driven programmes that bridge academia and industry to enhance student outcomes and employability.',
        expertise: 'Higher Education Leadership, Industry-Academia Collaboration, Employability-driven Programs',
        tags: ['Leadership', 'Education', 'Industry', 'Employability'],
        company: 'IMAS',
        companyLogo: '/uploads/logos/imas_iaer_logo.png'
    },
    {
        id: 'f2',
        name: 'Prof. Dr. Saikat Moitra',
        title: 'Former Vice Chancellor',
        qualifications: 'Ph.D., Former Vice Chancellor at MAKAUT',
        image: '/uploads/faculty/Pic_VC_Dr.-Saikat-Maitra.png',
        description: 'Former Vice Chancellor of MAKAUT, a distinguished academic leader with extensive experience in higher education management.',
        fullBio: 'Prof. Dr. Saikat Moitra served as the Vice Chancellor of MAKAUT (Maulana Abul Kalam Azad University of Technology), where he implemented strategic reforms in curriculum, digital learning, and industry partnerships. His leadership elevated MAKAUT\'s academic standards and institutional reputation.',
        expertise: 'Higher Education Management, Academic Leadership, Strategic Planning',
        tags: ['Leadership', 'Academic', 'Strategy', 'Higher Education'],
        company: 'MAKAUT',
        companyLogo: '/uploads/companies/makaut.png'
    },
    {
        id: 'f3',
        name: 'Dr. Amit Gautam',
        title: 'Professor',
        qualifications: 'Ph.D., Professor at Banaras Hindu University',
        image: '/uploads/faculty/Amit_Gautam.jpeg',
        description: 'Senior professor at BHU with expertise in management strategy, marketing analytics, and organisational studies.',
        fullBio: 'Dr. Amit Gautam is a Professor at the Faculty of Management Studies, Banaras Hindu University. His research focuses on strategic management, marketing analytics, and behavioral science. He has contributed extensively to management education through academic innovation and publications.',
        expertise: 'Strategic Management, Marketing Analytics, Organisational Behaviour',
        tags: ['Strategy', 'Marketing', 'Analytics', 'Research'],
        company: 'BHU',
        companyLogo: '/uploads/companies/bhu.webp'
    },
    {
        id: 'f4',
        name: 'Dr. Sangeeta Sahney',
        title: 'Professor & Dean',
        qualifications: 'Ph.D., Professor & Dean, Vinod Gupta School of Management, IIT Kharagpur',
        image: '/uploads/faculty/Sangeeta_Sahney.jpg',
        description: 'Professor and Dean at IIT Kharagpur\'s VGSOM, specializing in quality management and consumer behaviour.',
        fullBio: 'Dr. Sangeeta Sahney is Professor and Dean at the Vinod Gupta School of Management, IIT Kharagpur. She is widely recognised for her research in quality management, consumer behaviour, and academic excellence. Her leadership has fostered innovation in management education and industry engagement.',
        expertise: 'Quality Management, Consumer Behaviour, Academic Administration',
        tags: ['Quality', 'Consumer', 'Leadership', 'Management'],
        company: 'IIT Kharagpur',
        companyLogo: '/uploads/companies/iit_kharagpur.png'
    },
    {
        id: 'f5',
        name: 'Dr. Gurbandini Kaur',
        title: 'Professor',
        qualifications: 'Ph.D., Professor at All India Institute of Management (AIMA)',
        image: '/uploads/faculty/Gurbandini_Kaur.jpg',
        description: 'Renowned professor and researcher in leadership, human resource development, and organisational studies.',
        fullBio: 'Dr. Gurbandini Kaur is a Professor at the All India Institute of Management (AIMA). Her academic expertise includes leadership development, behavioral sciences, and HR strategy. She has been instrumental in shaping management programs and mentoring future leaders.',
        expertise: 'Human Resource Management, Leadership Development, Behavioral Studies',
        tags: ['HR', 'Leadership', 'Behavior', 'Development'],
        company: 'AIMA',
        companyLogo: '/uploads/companies/aima.jpg'
    },
    {
        id: 'f6',
        name: 'Dr. M J Xavier',
        title: 'Founder-Director',
        qualifications: 'Ph.D., Founder-Director, IIM Ranchi',
        image: '/uploads/faculty/MJ_Xavier.jpg',
        description: 'Founder-Director of IIM Ranchi, a pioneer in marketing and innovation management education in India.',
        fullBio: 'Dr. M.J. Xavier is the Founder-Director of the Indian Institute of Management Ranchi. With vast experience in marketing, innovation, and management education, he has guided several academic institutions toward excellence and contributed to national-level education reforms.',
        expertise: 'Marketing, Innovation Management, Entrepreneurship',
        tags: ['Marketing', 'Innovation', 'Entrepreneurship', 'Leadership'],
        company: 'IIM Ranchi',
        companyLogo: '/uploads/companies/iim_ranchi.png'
    },
    {
        id: 'f7',
        name: 'Dr. Saibal Kumar Mukhopadhyay',
        title: 'Director',
        qualifications: 'Ph.D., Director at IBM – Jadavpur University',
        image: '/uploads/faculty/Saibal_Mukhopadhyay.jpg',
        description: 'Director at IBM-Jadavpur University with extensive expertise in data science and business analytics.',
        fullBio: 'Dr. Saibal Kumar Mukhopadhyay serves as Director at IBM – Jadavpur University, where he oversees advanced programs in data science and business analytics. His academic contributions bridge technology with management education.',
        expertise: 'Business Analytics, Data Science, Research & Technology Management',
        tags: ['Analytics', 'Data Science', 'Technology', 'Research'],
        company: 'IBM-Jadavpur University',
        companyLogo: '/uploads/companies/ibm_jadavpur.png'
    },
    {
        id: 'f8',
        name: 'Dr. Prantik Ray',
        title: 'Assistant Professor',
        qualifications: 'Ph.D., Assistant Professor at XLRI Jamshedpur',
        image: '/uploads/faculty/Prantik_Ray.jpeg',
        description: 'Assistant Professor at XLRI Jamshedpur, specializing in corporate strategy and financial management.',
        fullBio: 'Dr. Prantik Ray is an Assistant Professor at XLRI Jamshedpur. His teaching and research interests span finance, strategy, and leadership. He is dedicated to nurturing business professionals with analytical and strategic skills.',
        expertise: 'Finance, Corporate Strategy, Leadership Development',
        tags: ['Finance', 'Strategy', 'Leadership', 'Corporate'],
        company: 'XLRI Jamshedpur',
        companyLogo: '/uploads/companies/xlri.jpg'
    },
    {
        id: 'f9',
        name: 'Dr. Supravat Bagli',
        title: 'Assistant Professor',
        qualifications: 'Ph.D., Assistant Professor at Presidency University',
        image: '/uploads/faculty/Supravat_Bagli.jpg',
        description: 'Assistant Professor at Presidency University with expertise in economics and business policy.',
        fullBio: 'Dr. Supravat Bagli is an Assistant Professor at Presidency University. His research covers economics, business policy, and strategic planning, contributing to academic and industry-oriented programs.',
        expertise: 'Economics, Business Policy, Research Methodology',
        tags: ['Economics', 'Policy', 'Research', 'Strategy'],
        company: 'Presidency University',
        companyLogo: '/uploads/companies/presidency_university.jpg'
    },
    {
        id: 'f10',
        name: 'Dr. Dhananjay D. Mankar',
        title: 'Assistant Professor & HOD',
        qualifications: 'Ph.D., Assistant Professor & HOD, TATA Institute of Social Science',
        image: '/uploads/faculty/Dhananjay_Mankar.jpg',
        description: 'Assistant Professor and HOD at TISS with expertise in HRM and community development.',
        fullBio: 'Dr. Dhananjay D. Mankar heads the Department at TATA Institute of Social Sciences. His core research areas include social work, HRM, and community development, integrating academic knowledge with practical impact.',
        expertise: 'Social Work, Human Resource Management, Community Development',
        tags: ['HR', 'Community', 'Social Work', 'Development'],
        company: 'TISS',
        companyLogo: '/uploads/companies/tiss.png'
    },
    {
        id: 'f11',
        name: 'Dr. Tridib Chakraborty',
        title: 'Former Professor',
        qualifications: 'Ph.D., Former Professor at IIM Kolkata',
        image: '/uploads/faculty/Tridib_Chakraborty.jpg',
        description: 'Former Professor at IIM Kolkata with a distinguished background in operations and business strategy.',
        fullBio: 'Dr. Tridib Chakraborty is a Former Professor at IIM Kolkata, recognised for his excellence in management research, operations, and strategy. He continues to contribute as a mentor and consultant to management institutions.',
        expertise: 'Operations Management, Business Strategy, Research',
        tags: ['Operations', 'Strategy', 'Research', 'Business'],
        company: 'IIM Kolkata',
        companyLogo: '/uploads/companies/iim_kolkata.png'
    },
    
    {
        id: 'f12',
        name: 'Prof. Dr. Manodip Ray Chaudhuri',
        title: 'Professor',
        qualifications: 'Ph.D., Professor at Xavier Business School',
        image: '/uploads/faculty/Manodip_Ray_Chaudhuri.jpg',
        description: 'Professor at Xavier Business School with expertise in HR development and organisational psychology.',
        fullBio: 'Prof. Dr. Manodip Ray Chaudhuri teaches at Xavier Business School. His academic and consulting work spans HR development, psychology, and leadership, fostering effective workplace management and team growth.',
        expertise: 'Human Resource Development, Organisational Psychology, Leadership',
        tags: ['HR', 'Psychology', 'Leadership', 'Development'],
        company: 'Xavier Business School',
        companyLogo: '/uploads/companies/xavier.jpeg'
    },
    {
        id: 'f13',
        name: 'Mr. Tusharendra Barpanda',
        title: 'Zonal Head',
        qualifications: 'MBA, Zonal Head, Indian Institute of Banking & Finance',
        image: '/uploads/faculty/Tusharendra_Barpanda.jpg',
        description: 'Zonal Head at IIBF with over two decades of experience in banking operations and financial management.',
        fullBio: 'Mr. Tusharendra Barpanda serves as Zonal Head at the Indian Institute of Banking & Finance (IIBF). His expertise in banking operations, risk management, and financial literacy has contributed to developing skilled finance professionals across India.',
        expertise: 'Banking Operations, Financial Literacy, Risk Management',
        tags: ['Banking', 'Finance', 'Risk', 'Training'],
        company: 'IIBF',
        companyLogo: '/uploads/companies/iibf.jpeg'
    }
];


export const mentors = [
    {
        name: 'Mr. Anuj Ahuja',
        title: 'Ex – Head of Sales',
        company: 'Escorts Kubota Limited',
        companyLogo: '/uploads/companies/escorts_kubota.png',
        details: 'Core Expertise: Sales Strategy, Distribution Networks & Business Growth',
        image: '/uploads/mentors/Anuj_Ahuja.png'
    },
    {
        name: 'Mr. Mayur Sahani',
        title: 'AVP – BFSI',
        company: 'Tech Mahindra',
        companyLogo: '/uploads/companies/tech_mahindra.png',
        details: 'Core Expertise: Banking, Financial Services, and IT Consulting',
        image: '/uploads/mentors/Mayur_Sahani.png'
    },
    {
        name: 'Mr. Vinod Anand',
        title: 'Ex – Project Manager',
        company: 'Infosys',
        companyLogo: '/uploads/companies/infosys.png',
        details: 'Core Expertise: Project Delivery, Agile Methodologies & IT Governance',
        image: '/uploads/mentors/Vinod_Anand.png'
    },
    {
        name: 'Mr. Rajesh Dsouza',
        title: 'Ex – Director (Partner Management)',
        company: 'Nike',
        companyLogo: '/uploads/companies/nike.png',
        details: 'Core Expertise: Partner Relations, Global Supply Chain & Brand Expansion',
        image: '/uploads/mentors/Rajesh_Dsouza.png'
    },
    {
        name: 'Mr. Ajay Bailur',
        title: 'Sr. Director',
        company: 'Infosys',
        companyLogo: '/uploads/companies/infosys.png',
        details: 'Core Expertise: IT Strategy, Digital Transformation & Enterprise Leadership',
        image: '/uploads/mentors/Ajay_Bailur.png'
    },
    {
        name: 'Mr. Yogesh Pai',
        title: 'Head – Project Management',
        company: 'Adani',
        companyLogo: '/uploads/companies/adani.png',
        details: 'Core Expertise: Infrastructure Projects, Risk Management & Operations',
        image: '/uploads/mentors/Yogesh_Pai.png'
    },
    {
        name: 'Mr. Nilesh Kumar',
        title: 'Head – Sales & Distribution',
        company: 'Jio',
        companyLogo: '/uploads/companies/jio.png',
        details: 'Core Expertise: Telecom Distribution, Market Expansion & Retail Strategy',
        image: '/uploads/mentors/Nilesh_Kumar.png'
    },
    {
        name: 'Ms. Ramya Bhat',
        title: 'Manager – Staffing & Resource',
        company: 'TCS',
        companyLogo: '/uploads/companies/tcs.png',
        details: 'Core Expertise: Talent Acquisition, Resource Planning & Workforce Analytics',
        image: '/uploads/mentors/Ramya_Bhat.png'
    },
    {
        name: 'Mr. Nishant Dave',
        title: 'Global Head – SAP Practice',
        company: 'TCS',
        companyLogo: '/uploads/companies/tcs.png',
        details: 'Core Expertise: SAP Consulting, Digital Transformation & Enterprise Systems',
        image: '/uploads/mentors/Nishant_Dave.png'
    }
];