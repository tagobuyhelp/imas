import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '../components/ui/button'
import { IMAS_CONTACT, IMAS_DATES, IMAS_COLORS } from '../lib/constants'
import { applyNow, downloadBrochureFor } from '../lib/utils'
import {
  GraduationCap, Star, MapPin, Building2, Target, Download, Mail, ExternalLink,
  BookOpen, Layers, Globe, Briefcase, Users, CheckCircle2, Phone, Award, Trophy,
  ChevronDown, ChevronRight, ArrowRight, Play, Sparkles, Compass, ShieldCheck,
  TrendingUp, Laptop, PieChart, Check, Calendar, Clock, DollarSign, HelpCircle,
  FileText, ArrowUpRight, BadgePercent, Cpu, Network, BarChart3, Settings2,
  Megaphone, Eye, CheckCircle, Flame, Camera
} from 'lucide-react'

// --- TYPES ---
type SpecialisationKey = 'marketing' | 'finance' | 'hr' | 'healthcare' | 'logistics'
type DestinationKey = 'dubai' | 'singapore' | 'thailand' | 'bali'
type GalleryFilter = 'all' | 'classrooms' | 'industrial' | 'events'

// Clean modern Ampersand component for headlines and typography
const Amp = ({ className = "ampersand font-sans font-bold text-[#0c2340] mx-1.5 inline-block" }: { className?: string }) => (
  <span className={className} aria-label="and">&amp;</span>
)

const companyLogos = [
  { name: 'Swiggy', logo: '/uploads/swiggy-logo.svg', h: 'h-6' },
  { name: 'Google', logo: '/uploads/Google_logo_2013-2015-600x206.png', h: 'h-6' },
  { name: 'JPMorgan Chase', logo: '/uploads/Partnership-Creatives--48-.png', h: 'h-5' },
  { name: 'Accenture', logo: '/uploads/companies/Accenture.png', fallback: '/uploads/Accenture.svg.webp', h: 'h-6' },
  { name: 'Razorpay', logo: '/uploads/Razorpay-Logo.jpg', h: 'h-6' },
  { name: 'Zomato', logo: '/uploads/companies/Zomato-logo.png', fallback: '/uploads/Zomato-Logo.png', h: 'h-5' },
  { name: 'Flipkart', logo: '/uploads/flipkart-logo.webp', h: 'h-6' },
  { name: 'Deloitte', logo: '/uploads/deloitte.png', h: 'h-5' },
  { name: 'TCS', logo: '/uploads/companies/tcs.png', h: 'h-6' },
  { name: 'Infosys', logo: '/uploads/companies/infosys.png', fallback: '/uploads/InfosysLogo.png', h: 'h-5' },
]

const getSnapshotThemeStyles = (theme?: string) => {
  switch (theme) {
    case 'amber':
      return {
        cardBg: 'bg-gradient-to-br from-[#0c2440] via-[#0c2440] to-amber-950/30',
        border: 'border-amber-500/35 hover:border-amber-400 hover:shadow-amber-500/20',
        beam: 'bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500',
        iconBox: 'bg-amber-500/15 text-amber-400 group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-amber-500 group-hover:text-slate-950',
        tag: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        label: 'text-amber-300',
        valueHover: 'group-hover:text-amber-300',
      }
    case 'orange':
      return {
        cardBg: 'bg-gradient-to-br from-[#0c2440] via-[#0c2440] to-orange-950/30',
        border: 'border-orange-500/35 hover:border-orange-400 hover:shadow-orange-500/20',
        beam: 'bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400',
        iconBox: 'bg-orange-500/15 text-orange-400 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-slate-950',
        tag: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
        label: 'text-orange-300',
        valueHover: 'group-hover:text-orange-300',
      }
    case 'blue':
      return {
        cardBg: 'bg-gradient-to-br from-[#0c2440] via-[#0c2440] to-blue-950/30',
        border: 'border-blue-500/35 hover:border-blue-400 hover:shadow-blue-500/20',
        beam: 'bg-gradient-to-r from-blue-500 via-[#00bcd4] to-yellow-400',
        iconBox: 'bg-blue-500/15 text-blue-400 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-sky-400 group-hover:text-white',
        tag: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
        label: 'text-blue-300',
        valueHover: 'group-hover:text-blue-200',
      }
    case 'cyan':
    default:
      return {
        cardBg: 'bg-gradient-to-br from-[#0c2440] via-[#0c2440] to-cyan-950/30',
        border: 'border-[#00bcd4]/35 hover:border-cyan-400 hover:shadow-cyan-500/20',
        beam: 'bg-gradient-to-r from-[#00bcd4] via-[#38bdf8] to-[#1d4ed8]',
        iconBox: 'bg-[#00bcd4]/15 text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-[#00bcd4] group-hover:to-cyan-300 group-hover:text-[#0c2440]',
        tag: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
        label: 'text-cyan-300',
        valueHover: 'group-hover:text-cyan-200',
      }
  }
}

export function PgdmPlusNewLandingPage(): React.JSX.Element {
  // Navigation & Interactive states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCurriculumYear, setActiveCurriculumYear] = useState<'year1' | 'year2'>('year1')
  const [activeSem1Tab, setActiveSem1Tab] = useState<'sem1' | 'sem2'>('sem1')
  const [activeSpecialisation, setActiveSpecialisation] = useState<SpecialisationKey>('marketing')
  const [activeSemYear2Tab, setActiveSemYear2Tab] = useState<'sem3' | 'sem4'>('sem3')
  const [activeToolsTab, setActiveToolsTab] = useState<SpecialisationKey>('marketing')
  const [activeImmersionTab, setActiveImmersionTab] = useState<DestinationKey>('dubai')
  const [activeCareerTab, setActiveCareerTab] = useState<SpecialisationKey>('marketing')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>('all')

  // Scroll and scrollspy states
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [showBackToTop, setShowBackToTop] = useState(false)

  // IntersectionObserver for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    const elements = document.querySelectorAll('.reveal-init')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Scroll listener for progress bar, back-to-top, and scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)))
      }
      setShowBackToTop(window.scrollY > 400)

      const sections = [
        'hero', 'overview', 'architecture', 'features', 'gallery',
        'specialisations', 'curriculum', 'tools', 'immersion',
        'placements', 'admissions', 'fees', 'faqs'
      ]
      const scrollPos = window.scrollY + 240
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Countdown timer matching main website header
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date(IMAS_DATES.APPLICATION_DEADLINE).getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Lazy video modal state
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  // Hero interactive carousel matching main hero reference
  const [activeCarouselDot, setActiveCarouselDot] = useState(0)
  const heroSliderImages = useMemo(() => [
    { src: '/uploads/imas_hero_image_2.webp', label: 'Interactive Executive Classroom' },
    { src: '/uploads/campus_photos/DSC_2802.jpg', label: 'State-of-the-Art Auditorium' },
    { src: '/uploads/campus_tour/Classroom-Photo/DSC_0049.jpg', label: 'Case Discussion Lab' },
    { src: '/uploads/pgdm_plus/hero_image2.png', label: 'Corporate Management Cohort' }
  ], [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCarouselDot((prev) => (prev + 1) % heroSliderImages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [heroSliderImages.length])

  const canonicalUrl = 'https://www.imas.ac.in/programs/pgdm-plus'

  const handleDownloadBrochure = () => {
    const href = '/uploads/IMAS_PGDM_Plus_2025_Brochure.pdf'
    try {
      if (typeof (window as any).openBrochurePopup === 'function') {
        ;(window as any).openBrochurePopup(href)
        return
      }
    } catch {}
    downloadBrochureFor(href)
  }

  const handleOpenEnquiry = () => {
    try {
      applyNow()
    } catch {
      window.dispatchEvent(new Event('imas:openEnquiryForm'))
    }
  }

  const handleOpenVideoModal = () => {
    window.dispatchEvent(new Event('imas:openVideoModal'))
  }

  // --- MASTER DATA FROM SPECIFICATION ---

  const programmeSnapshot = [
    { label: 'Programme Duration', value: '2 Years', desc: '4 Semesters Full-Time', icon: Clock, theme: 'cyan' },
    { label: 'Study Mode', value: 'Full-Time', desc: 'Classroom + Analytics Lab', icon: GraduationCap, theme: 'blue' },
    { label: 'Year 1 Focus', value: 'Foundation', desc: 'Common Management Core', icon: BookOpen, theme: 'cyan' },
    { label: 'Year 2 Focus', value: 'Specialisation', desc: '5 Career Specialisations', icon: Layers, theme: 'orange' },
    { label: 'Summer Internship', value: '8–10 Weeks', desc: 'Corporate Hands-On SIP', icon: Briefcase, theme: 'amber' },
    { label: 'Global Exposure', value: 'Immersion', desc: 'Dubai, Singapore, Thailand, Bali', icon: Globe, theme: 'blue' },
    { label: 'Capstone Project', value: 'Industry-Based', desc: 'Real-World Case Defense', icon: Target, theme: 'orange' },
    { label: 'Highest CTC', value: '₹18.5 LPA', desc: '100% Placement Assistance', icon: Trophy, theme: 'amber' }
  ]

  const whyPgdmPlusFeatures = [
    {
      title: 'Management Foundation',
      desc: 'Build an unshakeable ground in managerial economics, corporate finance, marketing, organizational behaviour, and quantitative analytics.',
      icon: BookOpen,
      tag: 'Core Pillar',
      theme: 'cyan'
    },
    {
      title: 'Specialised Expertise',
      desc: 'Gain advanced cutting-edge domain mastery in one of 5 industry-demanded corporate specialisations with dedicated faculty mentorship.',
      icon: Layers,
      tag: 'Depth',
      theme: 'orange'
    },
    {
      title: 'Practical Tools & Analytics',
      desc: 'Hands-on practical training in Business Analytics, Power BI, Advanced Excel & VBA, CRM suites, ERP, and Supply Chain modeling.',
      icon: Laptop,
      tag: 'Tech-Driven',
      theme: 'blue'
    },
    {
      title: 'Deep Industry Exposure',
      desc: 'Compulsory 8-10 week summer internship, industrial visits to MNC plants, enterprise projects, simulations, and capstone case defense.',
      icon: Briefcase,
      tag: 'Experiential',
      theme: 'amber'
    },
    {
      title: 'Global Perspective',
      desc: 'International Immersion programmes offering global business insights, foreign university workshops, and multinational enterprise visits.',
      icon: Globe,
      tag: 'International',
      theme: 'cyan'
    },
    {
      title: 'Career Preparation & Leadership',
      desc: 'Comprehensive grooming with 20+ presentations per semester, GD-PI clinics, resume engineering, and continuous corporate mentorship.',
      icon: Users,
      tag: 'Employability',
      theme: 'amber'
    }
  ]

  // Real IMAS Gallery Photos
  const realGalleryItems = [
    {
      src: '/uploads/campus_tour/Classroom-Photo/DSC_0049.jpg',
      category: 'classrooms',
      title: 'Interactive Case Study Lab',
      desc: 'Students engaging in multimedia strategic management case discussions'
    },
    {
      src: '/uploads/campus_photos/DSC_2802.jpg',
      category: 'classrooms',
      title: 'Executive Auditorium',
      desc: 'Modern air-conditioned auditorium hosting guest lectures and symposiums'
    },
    {
      src: '/uploads/events/Coca-Cola-Factory-visit-1.jpg',
      category: 'industrial',
      title: 'Coca-Cola Bottling Plant Visit',
      desc: 'On-site industrial inspection of supply chain automation and bottling lines'
    },
    {
      src: '/uploads/Industrial_visit_at_Reliance_Trends.jpeg',
      category: 'industrial',
      title: 'Reliance Trends Retail Logistics',
      desc: 'Practical exposure to omni-channel distribution and retail warehousing'
    },
    {
      src: '/uploads/events/taj-centre-bengal-chamber-1.jpg',
      category: 'events',
      title: 'Taj Bengal Executive Conclave',
      desc: 'Students networking with industry leaders at Bengal Chamber of Commerce'
    },
    {
      src: '/uploads/events/lalit-great-eastern-1.jpg',
      category: 'events',
      title: 'The Lalit Great Eastern Summit',
      desc: 'Hospitality & service management experiential workshop for PGDM students'
    }
  ]

  const filteredGallery = useMemo(() => {
    if (galleryFilter === 'all') return realGalleryItems
    return realGalleryItems.filter(item => item.category === galleryFilter)
  }, [galleryFilter])

  const expertVideos = [
    {
      id: 'video-1',
      youtubeId: '3JZ_D3ELwOQ',
      title: 'Industry Relevance of Management Education & Corporate Readiness',
      expertName: 'Dr. Amitabh Ghosh',
      designation: 'Senior Vice President & HR Head',
      organisation: 'Tata Consultancy Services',
      expertise: 'Talent Acquisition & Industry 4.0 Skills',
      desc: 'Insights into how multidisciplinary business education and analytics tools transform fresh graduates into day-one productive corporate managers.'
    },
    {
      id: 'video-2',
      youtubeId: 'L_LUpnjgPso',
      title: 'Future Management Careers & Cross-Functional Leadership',
      expertName: 'Rajesh Mukherjee',
      designation: 'Managing Director',
      organisation: 'PwC Strategic Advisory',
      expertise: 'Corporate Finance & Global Consulting',
      desc: 'Exploration of how dual-specialisation and global immersion give business leaders an unparalleled competitive edge in international markets.'
    }
  ]

  const specialisationsList = [
    {
      id: 'marketing' as SpecialisationKey,
      name: 'Marketing Management',
      highlight: 'Consumer Behaviour, Branding, Digital & CRM',
      desc: 'Master the art and science of marketing in a hyper-digital economy. Learn consumer psychology, neuromarketing, brand equity building, growth marketing, omni-channel distribution, and ROI analytics.',
      roles: ['Brand Manager', 'Digital Marketing Head', 'Sales & Distribution Manager', 'Growth Marketing Lead', 'Customer Experience (CX) Director', 'CRM Specialist', 'Market Research Analyst']
    },
    {
      id: 'finance' as SpecialisationKey,
      name: 'Finance Management',
      highlight: 'Corporate Finance, Valuations, Risk & FinTech',
      desc: 'Navigate modern capital markets, corporate valuations, algorithmic trading, financial modelling in Excel, portfolio optimization, mergers & acquisitions, and emerging FinTech innovations.',
      roles: ['Financial Analyst', 'Corporate Finance Manager', 'Investment Research Associate', 'Risk & Treasury Manager', 'M&A Analyst', 'Banking Operations Lead', 'Wealth Advisor']
    },
    {
      id: 'hr' as SpecialisationKey,
      name: 'Human Resource Management',
      highlight: 'Strategic Talent, HR Analytics, Labour Laws & L&D',
      desc: 'Build high-performance organisational cultures. Cover modern talent acquisition, predictive HR analytics, compensation structuring, change management, labour legislation, and leadership coaching.',
      roles: ['HR Business Partner (HRBP)', 'Talent Acquisition Lead', 'HR Analytics Manager', 'Learning & Development Head', 'Compensation & Benefits Specialist', 'Employee Relations Consultant']
    },
    {
      id: 'healthcare' as SpecialisationKey,
      name: 'Hospital Administration & Healthcare',
      highlight: 'Hospital Operations, NABH Quality & Informatics',
      desc: 'Bridge medical excellence and management leadership. Specialize in super-speciality hospital operations, patient safety, healthcare finance, clinical governance, NABH standards, and telemedicine informatics.',
      roles: ['Hospital Administrator', 'Healthcare Operations Manager', 'Quality & Patient Safety Officer', 'Healthcare Consultant', 'Health Informatics Specialist', 'Public Health Program Lead']
    },
    {
      id: 'logistics' as SpecialisationKey,
      name: 'Logistics & Supply Chain Management',
      highlight: 'Procurement, Global Freight, Warehousing & ERP',
      desc: 'Optimize global value chains. Gain hands-on competency in multimodal logistics, warehouse automation, demand forecasting, SAP/ERP systems, procurement strategy, and supply chain risk mitigation.',
      roles: ['Supply Chain Strategist', 'Procurement & Sourcing Manager', 'Logistics Operations Lead', 'Warehouse & Inventory Manager', 'SCM Analytics Consultant', 'Global Trade Specialist']
    }
  ]

  const year1Syllabus = {
    sem1: {
      title: 'Semester I: Core Management Foundation',
      subjects: [
        { code: 'PGDM 101', name: 'Principles of Management & Organisational Behaviour' },
        { code: 'PGDM 102', name: 'Managerial Economics & Microeconomic Policy' },
        { code: 'PGDM 103', name: 'Financial Accounting & Reporting Analysis' },
        { code: 'PGDM 104', name: 'Business Statistics & Quantitative Methods' },
        { code: 'PGDM 105', name: 'Business Communication & Professional Grooming' },
        { code: 'PGDM 106', name: 'Indian & Global Macroeconomic Business Environment' }
      ]
    },
    sem2: {
      title: 'Semester II: Operational & Analytical Foundation',
      subjects: [
        { code: 'PGDM 201', name: 'Marketing Management: Strategies & Consumer Insights' },
        { code: 'PGDM 202', name: 'Financial Management: Working Capital & Capital Budgeting' },
        { code: 'PGDM 203', name: 'Human Resource Management & Workplace Culture' },
        { code: 'PGDM 204', name: 'Operations & Modern Supply Chain Management' },
        { code: 'PGDM 205', name: 'Business Research Methods & Business Analytics Lab' },
        { code: 'PGDM 206', name: 'Digital Transformation, AI & Emerging Enterprise Technologies' }
      ]
    }
  }

  const year2Syllabus: Record<SpecialisationKey, { sem3: string[]; sem4: string[] }> = {
    marketing: {
      sem3: [
        'Consumer Behaviour & Neuromarketing',
        'Brand & Product Management',
        'Sales & Distribution Channel Management',
        'Digital & Social Media Marketing Strategy',
        'Marketing Analytics & Advanced CRM Lab',
        'Integrated Marketing Communications (IMC)'
      ],
      sem4: [
        'Strategic Marketing Management & Global Cases',
        'Retail & E-Commerce Management',
        'International Marketing & Export Operations',
        'Services Marketing & Customer Delight',
        'Marketing Simulation & Strategic Case Lab',
        'Capstone Project — Industry-Based Live Defense'
      ]
    },
    finance: {
      sem3: [
        'Corporate Finance & Value Creation',
        'Financial Markets & Regulatory Institutions',
        'Cost & Strategic Management Accounting',
        'Investment Analysis & Portfolio Management',
        'Financial Modeling & Forecasting using Excel Lab',
        'Business Valuation & Financial Statement Analysis'
      ],
      sem4: [
        'Strategic Financial Management',
        'Mergers, Acquisitions & Corporate Restructuring',
        'International Finance & Foreign Exchange Management',
        'Risk Management & Financial Derivatives',
        'FinTech Applications & Digital Banking Systems',
        'Capstone Project — Industry-Based Live Defense'
      ]
    },
    hr: {
      sem3: [
        'Talent Acquisition & Competency Mapping',
        'Training & Executive Development Systems',
        'Performance & Compensation Management Systems',
        'Labour Laws, Industrial Relations & Compliance',
        'HR Analytics & Workforce Dashboards',
        'Organizational Development & Culture Building'
      ],
      sem4: [
        'Strategic Human Resource Management (SHRM)',
        'Change Management & Organizational Agility',
        'Leadership Development & Succession Planning',
        'Employer Branding & Total Employee Engagement',
        'HR Simulation & Workplace Case Lab',
        'Capstone Project — Industry-Based Live Defense'
      ]
    },
    healthcare: {
      sem3: [
        'Healthcare Delivery Systems & National Health Policies',
        'Hospital Operations & Outpatient/Inpatient Management',
        'Healthcare Finance, Insurance & Cost Accounting',
        'Medical Records, Health Informatics & EHR Systems',
        'Quality Management, Accreditation & NABH Standards',
        'Healthcare Human Resource & Clinical Staff Management'
      ],
      sem4: [
        'Strategic Hospital Management & Global Healthcare',
        'Healthcare Laws, Bioethics & Patient Rights',
        'Public Health Management & Epidemiology Insights',
        'Digital Health, AI Diagnostics & Telemedicine Tech',
        'Hospital Simulation, Incident Case Lab & Operations Audit',
        'Capstone Project — Hospital/Healthcare Facility Defense'
      ]
    },
    logistics: {
      sem3: [
        'Logistics & Freight Forwarding Management',
        'Procurement Strategy & Global Vendor Relations',
        'Modern Warehouse Automation & Inventory Control',
        'Transportation, Route Planning & Fleet Management',
        'Supply Chain Analytics, Forecasting & Dashboards',
        'ERP & Integrated Supply Chain Systems Lab'
      ],
      sem4: [
        'Strategic Supply Chain Management',
        'Global Logistics & International Customs Trade',
        'Sustainable Green Supply Chain & ESG Compliance',
        'Supply Chain Risk, Resilience & Crisis Logistics',
        'SCM Simulation & Case Analysis Lab',
        'Capstone Project — Supply Chain / Logistics Live Defense'
      ]
    }
  }

  const toolsAndSkillsData: Record<SpecialisationKey, { title: string; tools: string[]; focus: string }> = {
    marketing: {
      title: 'Marketing & Digital Tech Suite',
      focus: 'Hands-on Campaign Planning, Attribution & Visualisation',
      tools: [
        'Google Ads (Search, Display, Video)',
        'Meta Ads Manager & Audience Insights',
        'Power BI Marketing Dashboards',
        'Google Analytics 4 (GA4)',
        'HubSpot & Zoho CRM Suites',
        'Campaign ROI Attribution Models',
        'Customer Journey Mapping Tools',
        'SEMrush & Digital Audit Tools'
      ]
    },
    finance: {
      title: 'Finance & Quantitative Toolset',
      focus: 'Institutional Valuation, Forecasting & Capital Modeling',
      tools: [
        'Advanced Financial Modelling (Excel & VBA)',
        'Power BI Financial Performance Reporting',
        'DCF & LBO Corporate Valuation Models',
        'Portfolio Optimization & Risk Tools',
        'Derivatives & Option Pricing Simulators',
        'FinTech Payment Gateway & Neo-banking Systems',
        'Bloomberg & Reuters Terminal Simulators',
        'Statistical Forecasting Packages'
      ]
    },
    hr: {
      title: 'Human Resource Tech & Analytics',
      focus: 'Talent Acquisition Systems & People Intelligence',
      tools: [
        'Applicant Tracking Systems (ATS Platforms)',
        'HR Analytics & Attrition Predictive Models',
        'Excel & Power BI HR Dashboards',
        'Payroll & Statutory Labour Compliance Systems',
        'Performance Appraisal & KPI Tracking Suites',
        'Employee Net Promoter & Engagement Survey Tools',
        'HRIS & Workday-Style Workflow Systems',
        'Psychometric & Competency Assessment Suites'
      ]
    },
    healthcare: {
      title: 'Healthcare Informatics & Quality Systems',
      focus: 'Hospital Administration & Clinical Quality Standards',
      tools: [
        'Hospital Information Management Systems (HIMS)',
        'NABH Quality & Clinical Audit Toolkits',
        'Healthcare Finance, Billing & TPA Claim Softwares',
        'Patient Flow & Bed Occupancy Dashboards',
        'Electronic Health Record (EHR) Systems',
        'Telemedicine & Remote Consultation Platforms',
        'Biomedical Asset & Equipment Tracking Softwares',
        'Hospital Incident Reporting & Patient Safety Suites'
      ]
    },
    logistics: {
      title: 'Logistics, ERP & SCM Software',
      focus: 'End-to-End Enterprise Resource Planning & Optimization',
      tools: [
        'SAP / ERP — SCM & Material Management Modules',
        'Supply Chain Analytics & Demand Planning Suites',
        'Advanced Excel & Power BI Logistics Dashboards',
        'Warehouse Management Systems (WMS Software)',
        'Transportation Management Systems (TMS Softwares)',
        'Route Optimization & GIS Fleet Mapping Tools',
        'Inventory Replenishment & Safety Stock Models',
        'Global Freight & Customs Documentation Softwares'
      ]
    }
  }

  const immersionDestinations: Record<DestinationKey, {
    title: string;
    code: string;
    image: string;
    subtitle: string;
    academic: string;
    corporate: string;
    cultural: string;
  }> = {
    dubai: {
      title: 'Dubai, UAE',
      code: 'UAE',
      image: '/uploads/destinations/dubai.jpg',
      subtitle: 'Global Trade Hub & FinTech Capital of the Middle East',
      academic: 'Specialized executive workshops at partner business academies focusing on international trade, luxury marketing, and MENA regional business law.',
      corporate: 'Institutional visits to Dubai International Financial Centre (DIFC), Jebel Ali Free Zone (JAFZA), and leading logistics hubs.',
      cultural: 'Exploration of futuristic architectural marvels, the Museum of the Future, and cultural desert heritage.'
    },
    singapore: {
      title: 'Singapore',
      code: 'SGP',
      image: '/uploads/destinations/singapore.jpg',
      subtitle: 'Asia’s Premier Financial & Tech Innovation Epicenter',
      academic: 'Seminars at top Singaporean institutions covering Smart City governance, Asian supply chain management, and sustainable FinTech ecosystems.',
      corporate: 'Interactive tours of Singapore Port Authority (PSA), Marina Bay Financial District, and tech incubators at Block71.',
      cultural: 'Experience Singapore’s multicultural heritage, Gardens by the Bay, and world-class green urban planning.'
    },
    thailand: {
      title: 'Thailand (Bangkok)',
      code: 'THA',
      image: '/uploads/destinations/thailand.jpeg',
      subtitle: 'Southeast Asia’s Manufacturing & Tourism Powerhouse',
      academic: 'Academic lectures on ASEAN economic integration, consumer behaviour in developing markets, and hospitality leadership.',
      corporate: 'Field visits to Eastern Economic Corridor (EEC) industrial zones, retail conglomerates, and multinational FMCG plants.',
      cultural: 'Immersive exploration of Thai commerce, traditional floating markets, and rich Southeast Asian cultural landmarks.'
    },
    bali: {
      title: 'Bali, Indonesia',
      code: 'IDN',
      image: '/uploads/destinations/vietnam.jpg',
      subtitle: 'Emerging Digital Nomad & Sustainable Business Ecosystem',
      academic: 'Intensive masterclasses in sustainable enterprise, eco-tourism economics, and digital entrepreneurship in emerging markets.',
      corporate: 'Engagements with international creative agencies, sustainable social enterprises, and venture-backed startup hubs.',
      cultural: 'Study of Balinese community-driven enterprise models, arts ecosystems, and heritage conservation.'
    }
  }

  const careerPathwaysData: Record<SpecialisationKey, { title: string; roles: string[]; recruiters: string[] }> = {
    marketing: {
      title: 'Marketing & Brand Leadership',
      roles: ['Brand Manager', 'Digital Marketing Strategist', 'Omni-Channel Sales Head', 'Growth Marketer', 'Customer Experience (CX) Lead', 'Market Intelligence Specialist'],
      recruiters: ['Amazon', 'Google', 'ITC Limited', 'Hindustan Unilever', 'Godrej', 'Zomato', 'Swiggy', 'Flipkart']
    },
    finance: {
      title: 'Corporate Finance & Banking Horizons',
      roles: ['Investment Banking Analyst', 'Equity Research Associate', 'Corporate Finance Manager', 'Financial Risk Analyst', 'Treasury Operations Lead', 'Wealth Consultant'],
      recruiters: ['Deloitte', 'PwC', 'EY', 'KPMG', 'HDFC Bank', 'ICICI Bank', 'Kotak Mahindra', 'Aditya Birla Capital']
    },
    hr: {
      title: 'Strategic People & Culture Leadership',
      roles: ['HR Business Partner (HRBP)', 'Global Talent Acquisition Lead', 'People Analytics Consultant', 'Compensation & Benefits Specialist', 'Learning & Culture Head'],
      recruiters: ['Tata Consultancy Services', 'Infosys', 'Wipro', 'Accenture', 'L&T', 'Cognizant', 'IBM']
    },
    healthcare: {
      title: 'Hospital & Healthcare Executive Careers',
      roles: ['Hospital Operations Director', 'Healthcare Quality & NABH Manager', 'Medical Informatics Specialist', 'Clinical Risk Consultant', 'Public Health Director'],
      recruiters: ['Apollo Hospitals', 'Fortis Healthcare', 'Manipal Hospitals', 'Max Healthcare', 'Narayana Health', 'Medica Superspecialty']
    },
    logistics: {
      title: 'Global Supply Chain & Logistics Operations',
      roles: ['Global SCM Strategist', 'Procurement & Strategic Sourcing Lead', 'Warehouse Logistics Director', 'Freight Forwarding Manager', 'Supply Chain Analyst'],
      recruiters: ['DHL Express', 'FedEx', 'Blue Dart', 'Delhivery', 'Maersk Logistics', 'Mahindra Logistics', 'Amazon Logistics']
    }
  }

  const admissionSteps = [
    {
      step: '01',
      title: 'Online Application',
      desc: 'Submit the online admission form with academic transcripts, work history (if any), and valid entrance test scores (CAT / MAT / XAT / CMAT / ATMA / IMAS Test).'
    },
    {
      step: '02',
      title: 'Application Screening',
      desc: 'Admissions committee reviews your academic credentials, extra-curricular profile, and eligibility requirements for business education.'
    },
    {
      step: '03',
      title: 'Selection & PI Round',
      desc: 'Shortlisted candidates attend Personal Interview (PI) and Group Discussion (GD) with senior academic faculty and corporate mentors.'
    },
    {
      step: '04',
      title: 'Admission Confirmation',
      desc: 'Selected candidates receive an official offer letter and secure their seat by completing verification and initial admission fee payment.'
    }
  ]

  const faqsList = [
    {
      q: 'What is PGDM Plus at IMAS Business School?',
      a: 'The PGDM Plus is an AICTE-approved, 2-year full-time postgraduate management programme. It is engineered to bridge traditional MBA concepts with hands-on modern business tools (Power BI, Python, ERP), dual-specialisation options, compulsory 8–10 week summer internships, and global immersion exposure.'
    },
    {
      q: 'Are Semester I and Semester II common to all specialisations?',
      a: 'Yes. Semester I and Semester II establish the foundational core of management (Economics, Finance, Marketing, HR, Operations, Business Statistics, and Analytics Lab). Specialisations begin in Year 2 (Semester III and IV).'
    },
    {
      q: 'What specialisations are offered in PGDM Plus?',
      a: 'Students can choose from 5 career-oriented specialisations: Marketing Management, Finance Management, Human Resource Management, Hospital Administration & Healthcare Management, and Logistics & Supply Chain Management.'
    },
    {
      q: 'What is the Dual Specialisation Option?',
      a: 'The Dual Specialisation Option allows students to build cross-functional corporate competence by combining approved specialisation areas (e.g., Marketing + Finance, or SCM + Finance), subject to academic guidelines. It broadens employability and strategic leadership readiness.'
    },
    {
      q: 'What is the highest package and placement support provided?',
      a: 'IMAS provides 100% Placement Assistance with dedicated career development cells. The highest CTC reached ₹18.5 LPA, with an average package of ₹6.50+ LPA across 200+ partner recruiters.'
    },
    {
      q: 'What is included in the International Immersion Programme?',
      a: 'The International Immersion takes students to global business hubs such as Dubai, Singapore, Thailand, or Bali. It covers foreign university workshops, corporate visits to multinational enterprises, international trade insights, and global networking.'
    },
    {
      q: 'What tools and practical skills are taught?',
      a: 'Depending on the chosen specialisation, students receive intensive hands-on lab training in Google Ads, Meta Ads Manager, Power BI, Advanced Excel & VBA, SQL, Python for Analytics, SAP/ERP modules, ATS platforms, and Hospital Information Systems.'
    },
    {
      q: 'What is the eligibility criteria for PGDM Plus?',
      a: 'Candidates must possess a Bachelor’s degree in any discipline from a recognised university/institution with minimum passing standards, subject to applicable admission and regulatory criteria.'
    },
    {
      q: 'How is student academic performance assessed?',
      a: 'Performance is assessed through a balanced 50-30-20 framework: 50% End-Term Theory Examinations, 30% Continuous Lab / Tool / Practical Skill Work, and 20% Project Viva / Case Defense.'
    },
    {
      q: 'What is the approved fee structure?',
      a: 'The approved programme fee structure comprises ₹5,45,000 Tuition/Programme Fee, ₹50,000 Admission Fee, and ₹21,600 Other Applicable Charges, for a total programme fee of ₹6,16,600. Installment options and education loan assistance are available.'
    }
  ]

  return (
    <div className="pgdm-new-landing min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00bcd4] selection:text-white antialiased">
      {/* --- SEO & SCHEMA --- */}
      <Helmet>
        <title>PGDM Plus | PGDM Course in Kolkata | IMAS Business School</title>
        <meta
          name="description"
          content="Explore PGDM Plus at IMAS Business School — a 2-year full-time management programme with 5 specialisations, summer internship, practical tools, international immersion and 100% placement assistance. Highest CTC ₹18.5 LPA."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="PGDM Plus | IMAS Business School Kolkata" />
        <meta
          property="og:description"
          content="Build Management Expertise. Develop Specialised Skills. Become Industry-Ready with AICTE Approved PGDM Plus."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PGDM Plus | IMAS Business School" />
        <meta name="twitter:description" content="2-Year Full-Time PGDM Plus with Dual Specialisation & Global Immersion." />
        <meta name="twitter:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />

        {/* Structured JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Course",
                "name": "PGDM Plus",
                "description": "Two-year, full-time postgraduate management programme combining management fundamentals, specialised learning, practical tools, industry exposure and career preparation.",
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": "IMAS Business School Kolkata",
                  "sameAs": "https://www.imas.ac.in"
                },
                "timeRequired": "P2Y",
                "educationalCredentialAwarded": "Post Graduate Diploma in Management (PGDM Plus)",
                "offers": {
                  "@type": "Offer",
                  "category": "Tuition",
                  "priceCurrency": "INR",
                  "price": "616600",
                  "availability": "https://schema.org/InStock"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqsList.slice(0, 5).map(f => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.imas.ac.in/" },
                  { "@type": "ListItem", "position": 2, "name": "Programs", "item": "https://www.imas.ac.in/programs" },
                  { "@type": "ListItem", "position": 3, "name": "PGDM Plus", "item": canonicalUrl }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Ultra-sleek Scroll Progress Bar at very top of viewport */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-black/20 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#00bcd4] via-[#38bdf8] to-[#1d4ed8] scroll-progress-glow transition-all duration-75 relative"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. TOP ANNOUNCEMENT BAR (MATCHING MAIN HEADER REFERENCE) */}
      {/* ========================================================= */}
      <div className="bg-[#0c2440] text-white py-1.5 sm:py-2 text-xs border-b border-amber-500/20 overflow-hidden">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile View */}
          <div className="flex sm:hidden items-center justify-between w-full text-[11px]">
            <div className="flex items-center gap-1.5 font-medium text-white truncate">
              <Megaphone className="h-3 w-3 text-amber-400 shrink-0" />
              <span>Admissions <span className="font-semibold text-amber-300">2026–28</span></span>
            </div>
            <div className="flex items-center gap-1 shrink-0 font-mono text-[10px]">
              <span className="bg-[#193254] border border-[#274775] px-1 py-0.5 rounded text-white font-bold">{timeLeft.days}d</span>
              <span className="bg-[#193254] border border-[#274775] px-1 py-0.5 rounded text-white font-bold">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span className="bg-[#193254] border border-[#274775] px-1 py-0.5 rounded text-white font-bold">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span className="bg-[#193254] border border-amber-500/50 px-1 py-0.5 rounded text-amber-300 font-bold">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>

          {/* Desktop/Tablet View */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <Megaphone className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Admissions Open <span className="text-amber-300 font-semibold">for 2026–28</span></span>
            </div>
            
            <span className="text-slate-500">|</span>
            
            <span className="hidden md:inline text-slate-300">
              Apply Before 30 November, 2026
            </span>

            {/* Countdown Badges */}
            <div className="flex items-center gap-1.5 ml-1 sm:ml-2 font-mono">
              <div className="flex items-center">
                <span className="bg-[#193254] border border-[#274775] text-white font-bold px-1.5 py-0.5 rounded text-[11px] min-w-[24px] text-center">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-slate-300 text-[11px] ml-1 mr-2 font-sans">Days</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#193254] border border-[#274775] text-white font-bold px-1.5 py-0.5 rounded text-[11px] min-w-[24px] text-center">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-slate-300 text-[11px] ml-1 mr-2 font-sans">Hrs</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#193254] border border-[#274775] text-white font-bold px-1.5 py-0.5 rounded text-[11px] min-w-[24px] text-center">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-slate-300 text-[11px] ml-1 mr-2 font-sans">Mins</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#193254] border border-amber-500/60 text-amber-300 font-bold px-1.5 py-0.5 rounded text-[11px] min-w-[24px] text-center">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-slate-300 text-[11px] ml-1 font-sans">Secs</span>
              </div>
            </div>
          </div>

          {/* Right: Contact & Quick Info */}
          <div className="hidden lg:flex items-center gap-4 text-xs text-slate-300">
            <a href="tel:+913340685700" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Phone className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>+91 33 4068 5700</span>
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={handleOpenEnquiry} 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <Mail className="h-3.5 w-3.5 text-slate-300 shrink-0" />
              <span>Enquiry Now</span>
            </button>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>New Town, Kolkata</span>
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN HEADER (MATCHING MAIN WEBSITE HEADER REFERENCE)   */}
      {/* ========================================================= */}
      <header className="bg-white text-slate-800 sticky top-0 z-50 border-b border-slate-100 shadow-sm transition-all duration-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 gap-2 sm:gap-3">
            {/* Logo Group */}
            <a 
              href="/"
              className="shrink-0 flex items-center gap-1 sm:gap-2.5 hover:opacity-90 transition-opacity"
            >
              <img
                src="/uploads/logos/IMAS_LOGO_PNG.png"
                alt="IMAS International Management & Analytics School"
                className="h-8 sm:h-11 xl:h-12 w-auto object-contain shrink-0 max-w-none"
              />
              <div className="h-6 sm:h-8 w-[1px] sm:w-[1.5px] bg-[#0c2340]/25 mx-0.5 sm:mx-1 shrink-0" />
              <div className="flex flex-col items-start leading-none shrink-0 pl-0.5">
                <span className="text-xs sm:text-base xl:text-lg font-bold text-[#0c2340] tracking-wider font-display">AICTE</span>
                <span className="text-[6.5px] sm:text-[7.5px] xl:text-[8.5px] font-bold text-[#0c2340] tracking-[0.18em] sm:tracking-[0.2em] mt-0.5">APPROVED</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-semibold text-slate-700 shrink-0">
              <a href="#overview" className="hover:text-[#00a8cc] transition-colors py-1">Overview</a>
              <a href="#curriculum" className="hover:text-[#00a8cc] transition-colors py-1">Curriculum</a>
              <a href="#specialisations" className="hover:text-[#00a8cc] transition-colors py-1">Specialisations</a>
              <a href="#gallery" className="hover:text-[#00a8cc] transition-colors py-1">Campus Life</a>
              <a href="#tools" className="hover:text-[#00a8cc] transition-colors py-1">Tools & Skills</a>
              <a href="#immersion" className="hover:text-[#00a8cc] transition-colors py-1">Global Immersion</a>
              <a href="#placements" className="hover:text-[#00a8cc] transition-colors py-1">Placements</a>
              <a href="#admissions" className="hover:text-[#00a8cc] transition-colors py-1">Admissions</a>
              <a href="#fees" className="hover:text-[#00a8cc] transition-colors py-1">Fees</a>
            </nav>

            {/* Header Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <Button
                onClick={handleDownloadBrochure}
                variant="outline"
                size="sm"
                className="border-[#00bcd4] text-[#00838f] hover:bg-[#00bcd4]/10 rounded-xl text-xs font-bold px-4 h-9 shimmer-hover active:scale-95 transition-all group"
              >
                <Download className="mr-1.5 h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform duration-300" /> Brochure
              </Button>
              <Button
                onClick={handleOpenEnquiry}
                size="sm"
                className="bg-gradient-to-r from-[#00bcd4] via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white font-bold rounded-xl text-xs px-5 h-9 shadow-sm shimmer-hover active:scale-95 transition-all"
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-slate-100 py-3 space-y-2 text-sm text-slate-800">
              <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 font-medium hover:text-[#00a8cc]">Overview & Snapshot</a>
              <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 font-medium hover:text-[#00a8cc]">Curriculum & Subjects</a>
              <a href="#specialisations" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 font-medium hover:text-[#00a8cc]">5 Specialisations</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 font-medium hover:text-[#00a8cc]">Campus Life & Industrial Visits</a>
              <a href="#tools" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 font-medium hover:text-[#00a8cc]">Practical Tools & Software</a>
              <a href="#immersion" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 font-medium hover:text-[#00a8cc]">Global Immersion</a>
              <a href="#placements" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 font-medium hover:text-[#00a8cc]">Placements & CTC</a>
              <a href="#admissions" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 font-medium hover:text-[#00a8cc]">Eligibility & Process</a>
              <a href="#fees" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 font-medium hover:text-[#00a8cc]">Approved Fees</a>
              <div className="pt-2 flex gap-2">
                <Button onClick={handleDownloadBrochure} variant="outline" className="flex-1 text-xs border-[#00bcd4] text-[#00838f]">
                  <Download className="mr-1 h-3.5 w-3.5" /> Brochure
                </Button>
                <Button onClick={handleOpenEnquiry} className="flex-1 text-xs bg-gradient-to-r from-[#00bcd4] to-[#1d4ed8] text-white font-bold">
                  Apply Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ========================================================= */}
      {/* 3. HERO SECTION (INSEAD/CAMBRIDGE/ATLAS + IMAS HERO STYLE) */}
      {/* ========================================================= */}
      <section id="hero" className="relative min-h-0 bg-[#071d3d] overflow-hidden flex items-center">
        {/* Background Campus Image with Students */}
        <div 
          className="absolute inset-0 bg-cover bg-[62%_20%] sm:bg-[60%_25%] lg:bg-[58%_20%] bg-no-repeat transition-all duration-700 opacity-50"
          style={{ backgroundImage: "url('/uploads/hero_campus_bg.jpg')" }}
        />

        {/* Dark Royal Navy Atmospheric Overlays (Matching Main Hero) */}
        <div className="absolute inset-0 bg-[#071d3d]/40 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d3d] via-[#071d3d]/95 via-42% sm:via-[#071d3d]/85 lg:via-[#071d3d]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071d3d]/90 via-transparent to-transparent lg:hidden pointer-events-none" />

        {/* Hero Content Container (Streamlined 40% height reduction) */}
        <div className="relative z-10 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Copy, Badges, CTAs */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-3 sm:space-y-3.5">
              
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00a8cc] border border-[#38bdf8]/35 backdrop-blur-xs text-[10px] sm:text-[11px] font-bold tracking-[0.12em] text-white uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
                <span>AICTE APPROVED • 2-YEAR FULL-TIME POSTGRADUATE PROGRAMME</span>
              </div>

              {/* Master Display Headline (INSEAD/Cambridge Editorial + IMAS Hero Gradient) */}
              <div className="space-y-1 sm:space-y-1.5">
                <h1 className="font-display text-2xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-bold text-white leading-[1.15] tracking-tight">
                  Build Management Expertise.{' '}
                  <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-500 bg-clip-text text-transparent">
                    Develop Specialised Skills.
                  </span><br className="hidden sm:inline" />{' '}
                  Become Industry-Ready.
                </h1>

                <p className="text-xs sm:text-[13px] text-slate-200 max-w-xl leading-relaxed font-normal">
                  Two-year, full-time postgraduate management programme combining management fundamentals, specialised learning, practical tools, industry exposure and career preparation.
                </p>
              </div>

              {/* Key Programme Badges from Spec */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-200">
                {[
                  '2 Years Full-Time',
                  '5 Specialisations',
                  'Dual Specialisation Option',
                  'Summer Internship',
                  'International Immersion'
                ].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#0c2444]/80 border border-slate-700/60 backdrop-blur-xs">
                    <Check className="h-3 w-3 text-[#00d2d3]" /> {b}
                  </span>
                ))}
              </div>

              {/* Mandatory Placement Metrics Row (Strictly '100% Placement Assistance') */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-0.5">
                <div className="p-2 sm:p-2.5 rounded-lg bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 card-hover-lift hover:border-amber-400/60 hover:shadow-amber-500/20 group cursor-default">
                  <div className="flex items-center justify-between text-amber-400 mb-0.5">
                    <Trophy className="h-3.5 w-3.5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    <span className="text-[9px] uppercase font-bold tracking-wider">Top Compensation</span>
                  </div>
                  <div className="font-display text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight group-hover:text-amber-300 transition-colors">₹18.5 LPA</div>
                  <div className="text-[10px] text-amber-200 font-medium">Highest CTC Achieved</div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-lg bg-gradient-to-br from-[#00bcd4]/20 via-[#00bcd4]/10 to-transparent border border-[#00bcd4]/30 card-hover-lift hover:border-cyan-400/60 hover:shadow-cyan-500/20 group cursor-default">
                  <div className="flex items-center justify-between text-cyan-400 mb-0.5">
                    <ShieldCheck className="h-3.5 w-3.5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    <span className="text-[9px] uppercase font-bold tracking-wider">Commitment</span>
                  </div>
                  <div className="font-display text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">100%</div>
                  <div className="text-[10px] text-cyan-200 font-medium">Placement Assistance</div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-2 sm:p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent border border-blue-500/30 card-hover-lift hover:border-blue-400/60 hover:shadow-blue-500/20 group cursor-default">
                  <div className="flex items-center justify-between text-blue-400 mb-0.5">
                    <Building2 className="h-3.5 w-3.5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    <span className="text-[9px] uppercase font-bold tracking-wider">Network</span>
                  </div>
                  <div className="font-display text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight group-hover:text-blue-300 transition-colors">200+</div>
                  <div className="text-[10px] text-blue-200 font-medium">Corporate Recruiters</div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-0.5">
                <Button 
                  onClick={handleOpenEnquiry}
                  className="flex-1 sm:flex-initial justify-center bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white px-5 sm:px-6 h-9 sm:h-10 rounded-lg text-xs sm:text-sm font-bold shadow-md hover:shadow-cyan-500/20 flex items-center gap-1.5 transition-all shimmer-hover active:scale-95 group"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Button>

                <Button 
                  variant="outline"
                  onClick={handleDownloadBrochure}
                  className="flex-1 sm:flex-initial justify-center bg-[#0c2444]/90 hover:bg-[#102d55] border border-slate-300/40 hover:border-slate-200 text-white px-4 sm:px-5 h-9 sm:h-10 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-all shimmer-hover active:scale-95 group"
                >
                  <Download className="mr-1.5 h-3.5 w-3.5 text-[#00bcd4] group-hover:translate-y-0.5 transition-transform duration-300" /> Brochure
                </Button>

                <button 
                  onClick={handleOpenVideoModal}
                  className="w-full sm:w-auto justify-center sm:justify-start flex items-center gap-2.5 px-2 py-0.5 text-slate-200 hover:text-cyan-300 transition-colors group cursor-pointer"
                >
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-md shrink-0 before:absolute before:inset-0 before:rounded-full before:bg-cyan-400/40 before:animate-ping before:opacity-75">
                    <Play className="h-3.5 w-3.5 fill-white text-white ml-0.5 relative z-10" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-slate-300 font-medium">Watch</span>
                    <span className="block text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">Campus Video</span>
                  </div>
                </button>
              </div>

              {/* Key Institutional Pillars (Matching Main Hero) */}
              <div className="pt-2 border-t border-white/10 mt-0.5">
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2">
                  {[
                    { label: 'AICTE Approved', icon: Award },
                    { label: 'AI-Enhanced Learning', icon: Sparkles },
                    { label: 'Global Partnerships', icon: Globe },
                    { label: 'Industry Mentorship', icon: Briefcase },
                    { label: 'Modern Infrastructure', icon: Building2 },
                  ].map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <div 
                        key={item.label}
                        className={`flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#0c2444]/80 hover:bg-[#12315e] border border-slate-700/60 hover:border-[#38bdf8]/50 backdrop-blur-xs transition-all duration-200 shadow-xs group cursor-default ${
                          idx === 4 ? 'col-span-2 sm:col-span-1 justify-center sm:justify-start' : 'justify-center sm:justify-start'
                        }`}
                      >
                        <Icon className="w-3 h-3 text-[#38bdf8] group-hover:text-cyan-300 shrink-0" />
                        <span className="text-[11px] font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                          {item.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Featured Programme / Live Campus Slider Card (Matching Main Hero) */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-center relative pt-3 lg:pt-0">
              
              <div className="bg-white rounded-xl shadow-2xl p-3 sm:p-3.5 border border-slate-100 max-w-[310px] sm:max-w-[325px] w-full transition-all duration-500 card-hover-glow-cyan group">
                
                {/* Image with Pill Badge & Carousel Dots */}
                <div className="relative rounded-lg overflow-hidden mb-2 bg-slate-100 aspect-[16/9]">
                  <img 
                    src={heroSliderImages[activeCarouselDot].src} 
                    alt={heroSliderImages[activeCarouselDot].label} 
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  
                  {/* FEATURED Badge */}
                  <div className="absolute top-2 left-2 bg-[#0c2440]/90 text-cyan-300 border border-cyan-400/40 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded shadow-xs uppercase">
                    FEATURED PROGRAMME
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-5 left-2 right-2 text-center">
                    <span className="text-[10px] font-semibold text-white bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md">
                      {heroSliderImages[activeCarouselDot].label}
                    </span>
                  </div>

                  {/* Carousel Dots */}
                  <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 flex items-center gap-1 bg-black/35 backdrop-blur-xs px-2 py-0.5 rounded-full">
                    {heroSliderImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveCarouselDot(i)}
                        className={`h-1 rounded-full transition-all ${
                          activeCarouselDot === i ? 'bg-white w-3' : 'bg-white/60 hover:bg-white w-1'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0c2340] leading-none">PGDM Plus</h3>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      Phase II Intake
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1e3a8a] font-semibold mt-0.5">Post Graduate Diploma in Management (2 Years)</p>
                </div>

                {/* 3-Column Highlights Row */}
                <div className="grid grid-cols-3 gap-1.5 py-1.5 border-y border-slate-100 text-center">
                  <div>
                    <span className="block text-[9px] text-slate-400 font-medium">Duration</span>
                    <span className="block text-[11px] font-bold text-slate-800">2 Years</span>
                  </div>
                  <div className="border-x border-slate-100">
                    <span className="block text-[9px] text-slate-400 font-medium">Mode</span>
                    <span className="block text-[11px] font-bold text-slate-800">Full-Time</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-400 font-medium">Internship</span>
                    <span className="block text-[11px] font-bold text-teal-600">8–10 Wks</span>
                  </div>
                </div>

                {/* Quick Enquire Button inside Card */}
                <div className="mt-2 space-y-1.5">
                  <Button
                    onClick={handleOpenEnquiry}
                    className="w-full bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white font-bold text-xs py-2 rounded-lg transition-all"
                  >
                    Enquire for Admission 2026
                  </Button>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="font-bold text-slate-700 ml-0.5">4.9/5</span>
                    </div>
                    <span className="text-[9.5px] text-slate-400">Campus: Newtown</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. PLACEMENT PARTNERS (MATCHING HOME PAGE)                */}
      {/* ========================================================= */}
      <section id="placement-partners" className="py-4 sm:py-5 bg-white border-y border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
            
            {/* Left Title with Vertical Divider */}
            <div className="flex items-center gap-6 shrink-0 self-start lg:self-center z-10 bg-white pr-4">
              <div className="leading-tight">
                <span className="block text-sm font-bold text-[#0c2340]">Our Students</span>
                <span className="block text-sm font-bold text-[#0c2340]">Get Placed At</span>
              </div>
              <div className="hidden lg:block h-9 w-[1px] bg-slate-200"></div>
            </div>

            {/* Marquee Scrolling Track */}
            <div className="flex-1 w-full overflow-hidden relative">
              {/* Subtle side fade gradients for smooth seamless edge entrance & exit */}
              <div className="absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              
              <div className="flex items-center gap-8 sm:gap-12 w-max animate-marquee py-1">
                {[...companyLogos, ...companyLogos, ...companyLogos].map((c, idx) => (
                  <div 
                    key={`${c.name}-${idx}`} 
                    className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer"
                  >
                    <img 
                      src={c.logo} 
                      alt={c.name} 
                      className={`${c.h} w-auto max-w-[110px] object-contain`}
                      onError={(e) => {
                        if (c.fallback) {
                          e.currentTarget.src = c.fallback
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* +1200 other placement partners Badge */}
            <div className="shrink-0 bg-[#edf4ff] border border-[#dbeafe] text-[#1e40af] text-xs font-semibold px-3.5 py-2 rounded-xl whitespace-nowrap z-10 shadow-xs">
              +1200 other placement partners
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. PROGRAMME SNAPSHOT (EXECUTIVE OVERVIEW)                */}
      {/* ========================================================= */}
      <section id="overview" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Subtle Ambient Glows Matching Hero */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-init">
            {/* Eyebrow Tag with Pulsing Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Executive Overview</span>
            </div>

            {/* Master Headline with Hero Gradient Highlight */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight">
              Programme{' '}
              <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                Snapshot
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl mx-auto leading-relaxed">
              Key operational parameters and structure of the 2-Year Post Graduate Diploma in Management (PGDM Plus).
            </p>
          </div>

          {/* 8 Bento Snapshot Cards with Hero Consistency */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {programmeSnapshot.map((item, idx) => {
              const styles = getSnapshotThemeStyles(item.theme)
              return (
                <div 
                  key={item.label} 
                  className={`p-5 sm:p-6 rounded-2xl ${styles.cardBg} text-white border ${styles.border} shadow-xl card-hover-lift transition-all duration-300 group relative overflow-hidden reveal-init reveal-delay-${(idx % 4) * 100 + 100}`}
                >
                  {/* Top accent beam that expands on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${styles.beam} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  
                  <div className={`h-11 w-11 rounded-xl ${styles.iconBox} flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs`}>
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div className={`text-xs ${styles.label} font-semibold tracking-wide`}>{item.label}</div>
                  <div className={`text-xl sm:text-2xl font-black text-white mt-1 ${styles.valueHover} transition-colors tracking-tight`}>
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-300 mt-1.5 font-medium leading-relaxed">{item.desc}</div>
                </div>
              )
            })}
          </div>

          {/* Bottom Trust & Action Strip Matching Hero */}
          <div className="mt-10 pt-6 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4 bg-white/70 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border shadow-xs">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700">
                AICTE Approved • Newtown Campus, Kolkata • Phase II Admissions 2026
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <Button
                onClick={handleDownloadBrochure}
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-initial border-slate-300 hover:border-slate-400 text-slate-700 hover:text-[#0c2440] hover:bg-white rounded-xl text-xs font-semibold px-4 transition-all"
              >
                <Download className="mr-1.5 h-3.5 w-3.5 text-[#00bcd4]" /> Download Syllabus
              </Button>
              <Button
                onClick={handleOpenEnquiry}
                size="sm"
                className="flex-1 sm:flex-initial bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white rounded-xl text-xs font-bold px-5 shadow-sm shimmer-hover active:scale-95 transition-all"
              >
                Apply Now <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. PROGRAMME ARCHITECTURE (INTERACTIVE TIMELINE)          */}
      {/* ========================================================= */}
      <section id="architecture" className="py-16 bg-[#071d3d] text-white border-b border-slate-800 relative overflow-hidden">
        {/* Ambient Subtle Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-init">
            {/* Eyebrow Badge Matching Dark Sections */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Two-Year Progressive Blueprint</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mt-1">
              Programme <span className="font-display bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">Architecture</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Structured progressive path from foundational general management to corporate specialisation and industry capstone defense.
            </p>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              {
                stage: 'YEAR 1',
                period: 'Semesters I & II',
                title: 'Common Management Foundation',
                desc: 'Rigorous mastery in economics, marketing, accounting, organizational behavior, business statistics, and analytics lab. Identical for all cohorts.',
                icon: BookOpen,
                highlight: 'Foundational Rigour',
                badgeStyle: 'bg-cyan-500/15 text-cyan-800 border-cyan-400/50',
                beam: 'from-cyan-400 to-sky-500',
                iconColor: 'text-[#00a8cc]',
                iconBgHover: 'group-hover:bg-[#00bcd4]',
                hoverBorder: 'hover:border-cyan-400',
                hoverShadow: 'hover:shadow-cyan-500/20',
                textHover: 'group-hover:text-[#00a8cc]'
              },
              {
                stage: 'SUMMER',
                period: '8–10 Weeks Duration',
                title: 'Summer Corporate Internship',
                desc: 'Immediate corporate immersion transitioning classroom analytical models into live corporate problem-solving with top recruiter organizations.',
                icon: Briefcase,
                highlight: 'Industry Exposure',
                badgeStyle: 'bg-amber-500/15 text-amber-800 border-amber-400/50',
                beam: 'from-amber-400 to-yellow-500',
                iconColor: 'text-amber-600',
                iconBgHover: 'group-hover:bg-amber-500',
                hoverBorder: 'hover:border-amber-400',
                hoverShadow: 'hover:shadow-amber-500/20',
                textHover: 'group-hover:text-amber-600'
              },
              {
                stage: 'YEAR 2',
                period: 'Semesters III & IV',
                title: 'Advanced Specialisation',
                desc: 'Deep specialization in 1 of 5 domains (Marketing, Finance, HR, Healthcare, SCM) or optional dual specialisation with advanced modern tech tools.',
                icon: Layers,
                highlight: 'Domain Mastery',
                badgeStyle: 'bg-orange-500/15 text-orange-800 border-orange-400/50',
                beam: 'from-orange-400 to-amber-500',
                iconColor: 'text-orange-600',
                iconBgHover: 'group-hover:bg-orange-500',
                hoverBorder: 'hover:border-orange-400',
                hoverShadow: 'hover:shadow-orange-500/20',
                textHover: 'group-hover:text-orange-600'
              },
              {
                stage: 'FINALE',
                period: 'Semester IV Capstone',
                title: 'Industry-Based Capstone Defense',
                desc: 'Comprehensive enterprise-grade strategic capstone project defended before an external panel of corporate leaders and senior faculty.',
                icon: Award,
                highlight: 'Career Launchpad',
                badgeStyle: 'bg-blue-500/15 text-blue-800 border-blue-400/50',
                beam: 'from-blue-500 to-indigo-600',
                iconColor: 'text-blue-600',
                iconBgHover: 'group-hover:bg-blue-600',
                hoverBorder: 'hover:border-blue-400',
                hoverShadow: 'hover:shadow-blue-500/20',
                textHover: 'group-hover:text-blue-600'
              }
            ].map((step, idx) => (
              <div 
                key={step.stage} 
                className={`relative p-6 rounded-2xl bg-white text-slate-900 border border-slate-100 shadow-xl card-hover-lift ${step.hoverBorder} ${step.hoverShadow} transition-all flex flex-col justify-between group overflow-hidden reveal-init reveal-delay-${idx * 100 + 100}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.beam} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black tracking-widest px-2.5 py-1 rounded-md border ${step.badgeStyle}`}>
                      {step.stage}
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold">{step.period}</span>
                  </div>
                  <div className={`h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center ${step.iconColor} mb-3 group-hover:scale-110 group-hover:rotate-6 ${step.iconBgHover} group-hover:text-white transition-all duration-300`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className={`text-lg font-bold text-[#0c2340] mb-2 ${step.textHover} transition-colors`}>{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className={step.textHover}>{step.highlight}</span>
                  <span className={`text-slate-400 font-bold ${step.textHover} transition-colors`}>Step 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. WHY PGDM PLUS (INSEAD / CAMBRIDGE PRESTIGE PILLARS)   */}
      {/* =====      {/* ========================================================= */}
      {/* 7. WHY PGDM PLUS (THE IMAS ADVANTAGE)                     */}
      {/* ========================================================= */}
      <section id="features" className="py-16 sm:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
        {/* Subtle Ambient Glows Matching Hero */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">The IMAS Advantage</span>
            </div>

            {/* Master Headline with Hero Gradient Highlight */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight">
              Why Choose{' '}
              <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                PGDM Plus?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl mx-auto leading-relaxed">
              Six strategic pillars that distinguish the IMAS PGDM Plus from traditional business degrees.
            </p>
          </div>

          {/* 6 Strategic Pillar Cards with Hero Consistency */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPgdmPlusFeatures.map((item, idx) => {
              const styles = getSnapshotThemeStyles(item.theme)
              return (
                <div 
                  key={item.title} 
                  className={`p-6 sm:p-7 rounded-2xl ${styles.cardBg} text-white border ${styles.border} shadow-xl card-hover-lift transition-all duration-300 group relative overflow-hidden reveal-init reveal-delay-${(idx % 3) * 100 + 100}`}
                >
                  {/* Top accent beam expanding on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${styles.beam} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  
                  <div className="flex items-center justify-between mb-5">
                    <div className={`h-12 w-12 rounded-xl ${styles.iconBox} flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className={`text-[11px] font-bold ${styles.tag} px-3 py-1 rounded-lg border transition-colors`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-2.5 ${styles.valueHover} transition-colors tracking-tight`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Bottom Trust & Action Banner Matching Hero */}
          <div className="mt-10 pt-6 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4 bg-slate-50/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700">
                100% Placement Assistance • 200+ Corporate Recruiters • Highest CTC ₹18.5 LPA
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <Button
                onClick={handleDownloadBrochure}
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-initial border-slate-300 hover:border-slate-400 text-slate-700 hover:text-[#0c2440] hover:bg-white rounded-xl text-xs font-semibold px-4 transition-all"
              >
                <Download className="mr-1.5 h-3.5 w-3.5 text-[#00bcd4]" /> Download Brochure
              </Button>
              <Button
                onClick={handleOpenEnquiry}
                size="sm"
                className="flex-1 sm:flex-initial bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white rounded-xl text-xs font-bold px-5 shadow-sm shimmer-hover active:scale-95 transition-all"
              >
                Apply for PGDM Plus <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. REAL CAMPUS LIFE & INDUSTRIAL VISITS GALLERY (GALLERY) */}
      {/* ========================================================= */}
      <section id="gallery" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Experiential Immersion Gallery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Life at IMAS <Amp /> <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Corporate Engagements</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Witness actual classroom environments, industrial factory visits, and executive seminars attended by IMAS PGDM students.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap reveal-init">
            {[
              { id: 'all' as GalleryFilter, label: 'All Photos' },
              { id: 'classrooms' as GalleryFilter, label: 'Auditorium & Classrooms' },
              { id: 'industrial' as GalleryFilter, label: 'Industrial Factory Visits' },
              { id: 'events' as GalleryFilter, label: 'Corporate Conclaves' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setGalleryFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border hover:scale-105 active:scale-95 cursor-pointer ${
                  galleryFilter === f.id
                    ? 'bg-gradient-to-r from-[#0c2440] via-[#103258] to-[#0c2440] text-cyan-300 border-[#00bcd4]/60 shadow-md font-black'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-cyan-400 hover:text-cyan-700 shadow-xs'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm card-hover-lift hover:border-[#00bcd4]/60 hover:shadow-2xl transition-all duration-500 group cursor-pointer reveal-init reveal-delay-${(idx % 3) * 100 + 100}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#0c2440]/80 backdrop-blur-xs text-white border border-white/20 uppercase tracking-wider group-hover:border-cyan-400/60 transition-colors">
                    {item.category}
                  </span>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Camera className="h-4 w-4 text-cyan-300" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#00a8cc] transition-colors">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. EXPERT TESTIMONIALS (YOUTUBE VIDEOS)                  */}
      {/* ========================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Corporate Endorsements</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Expert Testimonials <Amp /> <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Industry Voices</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Hear what corporate leaders and hiring directors say about IMAS graduates and managerial preparedness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {expertVideos.map((video, idx) => (
              <div 
                key={video.id} 
                className={`rounded-2xl border border-slate-200 bg-slate-900 text-white overflow-hidden shadow-lg card-hover-glow-cyan flex flex-col justify-between group reveal-init reveal-delay-${idx * 150 + 100}`}
              >
                {/* Video Player or Lazy Thumbnail */}
                <div className="relative aspect-video bg-black flex items-center justify-center group cursor-pointer overflow-hidden" onClick={() => setActiveVideo(video.youtubeId)}>
                  {activeVideo === video.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-108 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                      <div className="relative h-14 w-14 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform duration-300 before:absolute before:inset-0 before:rounded-full before:bg-yellow-400/40 before:animate-ping before:opacity-75">
                        <Play className="h-6 w-6 fill-slate-950 ml-1 relative z-10" />
                      </div>
                      <span className="absolute bottom-3 right-3 text-[10px] font-bold bg-black/80 px-2.5 py-1 rounded-md text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                        Click to Play
                      </span>
                    </>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/25">
                    {video.expertise}
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{video.title}</h3>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm text-cyan-200">{video.expertName}</div>
                      <div className="text-xs text-slate-400">{video.designation} • <span className="text-slate-300">{video.organisation}</span></div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed italic">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center reveal-init">
            <a href="#curriculum" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c2440] hover:text-[#00a8cc] tracking-wide uppercase hover:underline transition-all hover:translate-y-0.5">
              Explore the PGDM Plus Curriculum Below <ChevronDown className="h-4 w-4 animate-bounce text-amber-500" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. SPECIALISATIONS & DUAL SPECIALISATION BLOCK           */}
      {/* ========================================================= */}
      <section id="specialisations" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Subtle Ambient Glows Matching Hero */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Domain Tracks</span>
            </div>

            {/* Master Headline with Hero Gradient Highlight */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight">
              Five Career-Oriented{' '}
              <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                Specialisations
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
              Select your path of expertise in Year 2, engineered with contemporary industry syllabus and practical tools.
            </p>
          </div>

          {/* Specialisation Selector Tabs */}
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 justify-start sm:justify-center mb-8 reveal-init">
            {specialisationsList.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveSpecialisation(spec.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border hover:scale-105 active:scale-95 cursor-pointer ${
                  activeSpecialisation === spec.id
                    ? 'bg-gradient-to-r from-[#0c2440] via-[#10325e] to-[#0c2440] text-cyan-300 border-cyan-400 shadow-md font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-cyan-400 hover:text-[#0c2440]'
                }`}
              >
                {spec.name}
              </button>
            ))}
          </div>

          {/* Active Specialisation Detail Card (Deep Blue Card with Hero Accents) */}
          {(() => {
            const spec = specialisationsList.find((s) => s.id === activeSpecialisation)!
            return (
              <div className="bg-gradient-to-br from-[#0c2440] via-[#0c2440] to-cyan-950/30 text-white rounded-2xl border border-[#00bcd4]/35 p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto card-hover-lift hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 group relative overflow-hidden reveal-init">
                {/* Top accent beam */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 uppercase tracking-wider mb-2">
                      <Sparkles className="h-3 w-3 text-amber-400" /> Career Track
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{spec.name}</h3>
                    <p className="text-xs text-cyan-300 font-semibold mt-1">{spec.highlight}</p>
                  </div>
                  <Button
                    onClick={handleOpenEnquiry}
                    size="sm"
                    className="bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md shimmer-hover active:scale-95 transition-all"
                  >
                    Enquire for this Track <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </div>

                <div className="py-6 space-y-4">
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">{spec.desc}</p>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2.5 flex items-center gap-1.5">
                      <Target className="h-3.5 w-3.5 text-amber-400" /> Key Career Roles Prepared For:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {spec.roles.map((role) => (
                        <span key={role} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-100 border border-white/20 transition-all hover:border-cyan-400/50">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" /> {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* DUAL SPECIALISATION FEATURE BLOCK (Section 10 of Spec) */}
          <div className="mt-8 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#0c2444] via-[#10325e] to-[#071d3d] p-6 sm:p-8 text-white border border-[#00bcd4]/40 shadow-xl card-hover-glow-cyan reveal-init relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/35">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" /> DUAL SPECIALISATION OPTION
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Multiply Your Leadership Impact with{' '}
                  <span className="font-display bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                    Dual Specialisation
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Build cross-functional management knowledge by combining permitted specialisation areas (e.g. Marketing + Finance, or Logistics + Analytics), subject to applicable programme and academic rules.
                </p>
                <p className="text-[11px] text-cyan-300/80 italic">
                  * Note: Dual specialisation broadens elective depth; it is offered within the 2-year structure and is subject to academic prerequisites.
                </p>
              </div>
              <Button
                onClick={handleOpenEnquiry}
                className="whitespace-nowrap rounded-xl bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white font-bold text-xs px-6 h-11 shadow-lg shimmer-hover active:scale-95 transition-all"
              >
                Discuss Dual Options <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Bottom Trust & Action Strip Matching Hero */}
          <div className="mt-8 max-w-4xl mx-auto pt-6 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4 bg-white/70 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border shadow-xs">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700">
                5 Career Tracks • Dual Specialisation Flexibility • 100% Placement Assistance
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <Button
                onClick={handleDownloadBrochure}
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-initial border-slate-300 hover:border-slate-400 text-slate-700 hover:text-[#0c2440] hover:bg-white rounded-xl text-xs font-semibold px-4 transition-all"
              >
                <Download className="mr-1.5 h-3.5 w-3.5 text-[#00bcd4]" /> Curriculum Details
              </Button>
              <Button
                onClick={handleOpenEnquiry}
                size="sm"
                className="flex-1 sm:flex-initial bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white rounded-xl text-xs font-bold px-5 shadow-sm shimmer-hover active:scale-95 transition-all"
              >
                Apply Now <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11, 12, 13, 14. CURRICULUM ARCHITECTURE (TABS)           */}
      {/* ========================================================= */}
      <section id="curriculum" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Academic Blueprint</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Structured <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Curriculum by Semester</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              <strong className="text-slate-900 font-semibold">Critical Academic Logic:</strong> Semester I <Amp className="ampersand font-sans font-bold text-slate-800 mx-1 inline-block" /> II are common management foundation to all specialisations. Semester III <Amp className="ampersand font-sans font-bold text-slate-800 mx-1 inline-block" /> IV are specialized and domain-specific.
            </p>
          </div>

          {/* Year Switcher Tabs */}
          <div className="flex justify-center mb-8">
            <div className="p-1 rounded-xl bg-slate-100 border border-slate-200 flex gap-1">
              <button
                onClick={() => setActiveCurriculumYear('year1')}
                className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeCurriculumYear === 'year1'
                    ? 'bg-gradient-to-r from-[#0c2440] via-[#103258] to-[#0c2440] text-cyan-300 border border-[#00bcd4]/40 shadow-md font-bold'
                    : 'text-slate-600 hover:text-[#0c2440]'
                }`}
              >
                Year 1: Foundation (Sem I <Amp className="ampersand font-sans font-bold mx-1 inline-block" /> II)
              </button>
              <button
                onClick={() => setActiveCurriculumYear('year2')}
                className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeCurriculumYear === 'year2'
                    ? 'bg-gradient-to-r from-[#0c2440] via-[#103258] to-[#0c2440] text-cyan-300 border border-[#00bcd4]/40 shadow-md font-bold'
                    : 'text-slate-600 hover:text-[#0c2440]'
                }`}
              >
                Year 2: Specialisation (Sem III <Amp className="ampersand font-sans font-bold mx-1 inline-block" /> IV)
              </button>
            </div>
          </div>

          {/* YEAR 1 CURRICULUM (SEMESTER I & II) */}
          {activeCurriculumYear === 'year1' && (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Highlight Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#0c2440] via-[#103258] to-[#0c2440] border border-cyan-400/40 text-white text-xs font-bold flex items-center justify-between shadow-md">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span className="tracking-wide">COMMON MANAGEMENT FOUNDATION — MANDATORY FOR ALL SPECIALISATIONS</span>
                </span>
                <span className="hidden sm:inline-block text-[11px] font-semibold text-amber-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/15">6 Subjects Per Semester</span>
              </div>

              {/* Semester I / II Tabs */}
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => setActiveSem1Tab('sem1')}
                  className={`pb-3 px-6 text-sm font-bold border-b-2 transition-all ${
                    activeSem1Tab === 'sem1' ? 'border-[#00bcd4] text-[#0c2440] font-black' : 'border-transparent text-slate-500 hover:text-[#0c2440]'
                  }`}
                >
                  Semester I (Foundation)
                </button>
                <button
                  onClick={() => setActiveSem1Tab('sem2')}
                  className={`pb-3 px-6 text-sm font-bold border-b-2 transition-all ${
                    activeSem1Tab === 'sem2' ? 'border-[#00bcd4] text-[#0c2340] font-black' : 'border-transparent text-slate-500 hover:text-[#0c2440]'
                  }`}
                >
                  Semester II (Functional Core <Amp className="ampersand font-sans font-bold mx-1 inline-block" /> Lab)
                </button>
              </div>

              {/* Subjects List (Deep Blue Cards on White Bg) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {year1Syllabus[activeSem1Tab].subjects.map((sub, i) => (
                  <div 
                    key={sub.name} 
                    className="p-4 rounded-xl bg-[#0c2440] text-white border border-[#1e3e6b] shadow-md hover:border-cyan-400 hover:shadow-cyan-500/20 hover:translate-x-1.5 transition-all duration-200 flex items-start gap-3 group"
                  >
                    <span className="flex-shrink-0 h-6 w-6 rounded-md bg-white/10 group-hover:bg-[#00bcd4] text-cyan-300 group-hover:text-[#0c2440] text-xs font-bold flex items-center justify-center transition-colors">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="text-[11px] font-mono font-semibold text-cyan-300">{sub.code}</div>
                      <div className="text-sm font-bold text-white mt-0.5 group-hover:text-cyan-200 transition-colors">{sub.name}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* SUMMER INTERNSHIP HIGHLIGHT (Section 13) */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-slate-900">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded">
                      Transition Period
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                      8–10 Week Summer Corporate Internship
                    </h3>
                    <p className="text-xs text-slate-600">From Classroom Learning to Real-World Industry Exposure</p>
                  </div>
                  <Button onClick={handleDownloadBrochure} variant="outline" size="sm" className="border-amber-400 text-amber-900 bg-white hover:bg-amber-100 text-xs font-bold">
                    Internship Details
                  </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { title: 'Industry Exposure', desc: 'Direct corporate workspace immersion' },
                    { title: 'Practical Application', desc: 'Execute live management analytics models' },
                    { title: 'Professional Skills', desc: 'Cross-functional teamwork & leadership' },
                    { title: 'Career Awareness', desc: 'Pre-Placement Offer (PPO) opportunities' }
                  ].map((card) => (
                    <div key={card.title} className="p-3 bg-white/80 rounded-xl border border-amber-200/60">
                      <div className="font-bold text-xs text-slate-900">{card.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{card.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* YEAR 2 CURRICULUM (TWO-LEVEL NESTED TABS - Section 14) */}
          {activeCurriculumYear === 'year2' && (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Level 1 Tabs: Specialisations */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Level 1: Select Specialisation Area</p>
                <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2">
                  {specialisationsList.map((spec) => (
                    <button
                      key={spec.id}
                      onClick={() => setActiveSpecialisation(spec.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                        activeSpecialisation === spec.id
                          ? 'bg-gradient-to-r from-[#0c2440] via-[#103258] to-[#0c2440] text-cyan-300 border-[#00bcd4]/50 shadow-md font-black'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:border-cyan-400'
                      }`}
                    >
                      {spec.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level 2 Tabs: Semester III vs Semester IV */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Level 2: Select Semester</p>
                <div className="flex border-b border-slate-200">
                  <button
                    onClick={() => setActiveSemYear2Tab('sem3')}
                    className={`pb-3 px-6 text-sm font-bold border-b-2 transition-all ${
                      activeSemYear2Tab === 'sem3' ? 'border-[#00bcd4] text-[#0c2440] font-black' : 'border-transparent text-slate-500 hover:text-[#0c2440]'
                    }`}
                  >
                    Semester III (Domain Depth)
                  </button>
                  <button
                    onClick={() => setActiveSemYear2Tab('sem4')}
                    className={`pb-3 px-6 text-sm font-bold border-b-2 transition-all ${
                      activeSemYear2Tab === 'sem4' ? 'border-[#00bcd4] text-[#0c2440] font-black' : 'border-transparent text-slate-500 hover:text-[#0c2440]'
                    }`}
                  >
                    Semester IV (Strategic <Amp className="ampersand font-sans font-bold mx-1 inline-block" /> Capstone)
                  </button>
                </div>
              </div>

              {/* Specialisation Subjects (Deep Blue Cards on White Bg) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {year2Syllabus[activeSpecialisation][activeSemYear2Tab].map((subjectName, i) => (
                  <div 
                    key={subjectName} 
                    className="p-4 rounded-xl bg-[#0c2440] text-white border border-[#1e3e6b] shadow-md hover:border-cyan-400 hover:shadow-cyan-500/20 hover:translate-x-1.5 transition-all duration-200 flex items-start gap-3 group"
                  >
                    <span className="flex-shrink-0 h-6 w-6 rounded-md bg-white/10 group-hover:bg-[#00bcd4] text-cyan-300 group-hover:text-[#0c2440] text-xs font-bold flex items-center justify-center transition-colors">
                      0{i + 1}
                    </span>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">{subjectName}</div>
                  </div>
                ))}
              </div>

              {/* Capstone Project Card Note */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#0c2440] via-[#103258] to-[#0c2440] border border-cyan-400/40 text-xs text-white flex items-center justify-between gap-3 shadow-md">
                <span className="font-semibold flex items-center gap-2">
                  <Award className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Every Year 2 student completes an Industry-Based Live Capstone Defense evaluated by corporate leaders.</span>
                </span>
                <span className="font-bold text-amber-300 bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full shrink-0">Non-Negotiable Core</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 15. EXPERIENTIAL LEARNING FRAMEWORK                       */}
      {/* ========================================================= */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Beyond Textbooks</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Experiential <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Learning Framework</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Six active pillars ensuring our students apply every theoretical framework into business reality.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { title: 'Live Projects', icon: Target, desc: 'Real enterprise challenges', beam: 'from-cyan-400 to-sky-500', iconColor: 'text-cyan-300', hoverBorder: 'hover:border-cyan-400', hoverShadow: 'hover:shadow-cyan-500/20' },
              { title: 'Case Studies', icon: FileText, desc: 'Harvard & IIM cases', beam: 'from-amber-400 to-yellow-500', iconColor: 'text-amber-300', hoverBorder: 'hover:border-amber-400', hoverShadow: 'hover:shadow-amber-500/20' },
              { title: 'Simulation Labs', icon: Cpu, desc: 'Market & trading simulators', beam: 'from-orange-400 to-amber-500', iconColor: 'text-orange-300', hoverBorder: 'hover:border-orange-400', hoverShadow: 'hover:shadow-orange-500/20' },
              { title: 'Summer Internship', icon: Briefcase, desc: '8–10 weeks on-site', beam: 'from-blue-400 to-indigo-500', iconColor: 'text-blue-300', hoverBorder: 'hover:border-blue-400', hoverShadow: 'hover:shadow-blue-500/20' },
              { title: 'Industry Capstone', icon: Award, desc: 'Final strategic thesis', beam: 'from-yellow-400 to-amber-400', iconColor: 'text-yellow-300', hoverBorder: 'hover:border-yellow-400', hoverShadow: 'hover:shadow-yellow-500/20' },
              { title: 'Presentations & Viva', icon: Users, desc: '20+ presentations / sem', beam: 'from-sky-400 to-cyan-500', iconColor: 'text-sky-300', hoverBorder: 'hover:border-sky-400', hoverShadow: 'hover:shadow-sky-500/20' }
            ].map((card, idx) => (
              <div 
                key={card.title} 
                className={`p-4 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] text-center shadow-xl card-hover-lift ${card.hoverBorder} ${card.hoverShadow} transition-all duration-300 group reveal-init reveal-delay-${idx * 100} relative overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.beam} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                <div className={`h-10 w-10 mx-auto rounded-xl bg-white/10 ${card.iconColor} flex items-center justify-center mb-2 group-hover:bg-white group-hover:text-[#0c2440] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs`}>
                  <card.icon className="h-5 w-5" />
                </div>
                <div className="font-bold text-xs text-white group-hover:text-cyan-200 transition-colors">{card.title}</div>
                <div className="text-[11px] text-slate-300 mt-1 font-normal">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 16. TOOLS & SKILLS (SPECIALISATION TABS)                  */}
      {/* ========================================================= */}
      <section id="tools" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Hands-On Mastery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Tools <Amp /> <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Technology Training</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Master the specialized software suites, analytics platforms, and workflow technologies required by hiring managers.
            </p>
          </div>

          {/* Specialisation Tabs */}
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 justify-start sm:justify-center mb-8 reveal-init">
            {specialisationsList.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveToolsTab(spec.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border hover:scale-105 active:scale-95 cursor-pointer ${
                  activeToolsTab === spec.id
                    ? 'bg-gradient-to-r from-[#0c2440] via-[#103258] to-[#0c2440] text-cyan-300 border-[#00bcd4]/60 shadow-md font-black'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:border-cyan-400'
                }`}
              >
                {spec.name}
              </button>
            ))}
          </div>

          {/* Tools Grid for Active Specialisation */}
          {(() => {
            const current = toolsAndSkillsData[activeToolsTab]
            return (
              <div className="max-w-4xl mx-auto bg-[#0c2440] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#1e3e6b] card-hover-glow-cyan reveal-init relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8]" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{current.title}</h3>
                    <p className="text-xs text-cyan-300 font-medium">{current.focus}</p>
                  </div>
                  <span className="text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full font-bold font-mono">
                    Industry Certified
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.tools.map((tool) => (
                    <div 
                      key={tool} 
                      className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-3 hover:bg-cyan-500/15 hover:border-cyan-400/50 hover:scale-[1.02] hover:shadow-md transition-all duration-200 group cursor-default"
                    >
                      <div className="h-8 w-8 rounded-lg bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 17. INTERNATIONAL IMMERSION (DESTINATION TABS)            */}
      {/* ========================================================= */}
      <section id="immersion" className="py-16 bg-[#071d3d] text-white border-b border-slate-800 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-init">
            {/* Eyebrow Badge Matching Dark Sections */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Cross-Border Exposure</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mt-1">
              International <span className="font-display bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">Immersion Programme</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Global study tours offering international academic workshops, overseas corporate headquarters visits, and cross-cultural business insights.
            </p>
          </div>

          {/* Destination Tabs */}
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 justify-start sm:justify-center mb-10 reveal-init">
            {(['dubai', 'singapore', 'thailand', 'bali'] as DestinationKey[]).map((key) => {
              const dest = immersionDestinations[key]
              return (
                <button
                  key={key}
                  onClick={() => setActiveImmersionTab(key)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer ${
                    activeImmersionTab === key
                      ? 'bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] text-white border-cyan-400 shadow-lg font-black'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20 font-bold backdrop-blur-xs shadow-md'
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5 text-cyan-300 shrink-0" />
                  <span>{dest.title}</span>
                </button>
              )
            })}
          </div>

          {/* 50/50 Image + Content Layout (Crisp White Card on Blue Bg) */}
          {(() => {
            const dest = immersionDestinations[activeImmersionTab]
            return (
              <div className="max-w-5xl mx-auto rounded-2xl bg-white text-slate-900 border border-slate-100 overflow-hidden shadow-2xl card-hover-lift hover:shadow-cyan-500/25 group reveal-init relative">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] z-20" />
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Image */}
                  <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = '/uploads/hero_campus_bg.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
                    <div className="absolute bottom-4 left-4 lg:hidden text-white flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-cyan-400 shrink-0" />
                      <span className="text-lg font-bold">{dest.title}</span>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
                    <div>
                      <div className="hidden lg:flex items-center gap-2 text-2xl font-black text-[#0c2340] mb-1">
                        <MapPin className="h-6 w-6 text-amber-500 shrink-0" />
                        <h3>{dest.title}</h3>
                      </div>
                      <p className="text-xs font-bold text-[#00a8cc] mb-4">{dest.subtitle}</p>

                      <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                        <div>
                          <strong className="text-[#0c2340] flex items-center gap-1.5 mb-1 font-bold">
                            <GraduationCap className="h-4 w-4 text-[#00a8cc] shrink-0" />
                            Academic Exposure:
                          </strong>
                          <p className="text-slate-600 leading-relaxed font-normal">{dest.academic}</p>
                        </div>
                        <div>
                          <strong className="text-[#0c2340] flex items-center gap-1.5 mb-1 font-bold">
                            <Building2 className="h-4 w-4 text-[#00a8cc] shrink-0" />
                            Corporate Engagements:
                          </strong>
                          <p className="text-slate-600 leading-relaxed font-normal">{dest.corporate}</p>
                        </div>
                        <div>
                          <strong className="text-[#0c2340] flex items-center gap-1.5 mb-1 font-bold">
                            <Globe className="h-4 w-4 text-[#00a8cc] shrink-0" />
                            Cultural Perspective:
                          </strong>
                          <p className="text-slate-600 leading-relaxed font-normal">{dest.cultural}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <Button
                        onClick={handleOpenEnquiry}
                        className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white font-bold text-xs rounded-xl px-6 shadow-md shimmer-hover active:scale-95 transition-all"
                      >
                        Enquire for Immersion Cohort
                      </Button>
                      <span className="text-[10px] text-slate-500 font-medium">Passport required upon admission</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* Mandatory Immersion Qualification Disclaimer */}
          <p className="text-center text-[11px] text-slate-400 max-w-3xl mx-auto mt-6 leading-relaxed italic">
            * Qualification: International Immersion destinations, institutional visits and programme components are subject to the academic schedule, partner availability, regulatory approvals and applicable programme arrangements.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 18. ASSESSMENT FRAMEWORK                                  */}
      {/* ========================================================= */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Evaluation Methodology</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Holistic <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Assessment Framework</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Balanced evaluation weighting conceptual theoretical rigor, software mastery, and strategic viva defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] text-center shadow-xl card-hover-lift hover:border-amber-400 hover:shadow-amber-500/20 transition-all duration-300 reveal-init reveal-delay-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500" />
              <div className="font-display text-4xl sm:text-5xl font-black text-amber-400 tracking-tight mb-2">50%</div>
              <h3 className="text-base font-bold text-white mb-1">Theory Examination</h3>
              <p className="text-xs text-slate-300 font-normal">Conceptual mastery, case solutions, analytical business reasoning, and written end-term exams.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] text-center shadow-xl card-hover-lift hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 reveal-init reveal-delay-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-sky-500" />
              <div className="font-display text-4xl sm:text-5xl font-black text-cyan-400 tracking-tight mb-2">30%</div>
              <h3 className="text-base font-bold text-white mb-1">Tool / Lab / Skill Work</h3>
              <p className="text-xs text-slate-300 font-normal">Continuous lab evaluations, Power BI dashboards, advanced Excel modeling, and live software audits.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] text-center shadow-xl card-hover-lift hover:border-sky-400 hover:shadow-blue-500/20 transition-all duration-300 reveal-init reveal-delay-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500" />
              <div className="font-display text-4xl sm:text-5xl font-black text-sky-400 tracking-tight mb-2">20%</div>
              <h3 className="text-base font-bold text-white mb-1">Viva / Project Defense</h3>
              <p className="text-xs text-slate-300 font-normal">Summer internship viva voce, 20+ presentations, and final industry-based capstone project defense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 19. PLACEMENTS & CAREER SUPPORT                           */}
      {/* ========================================================= */}
      <section id="placements" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Corporate Success</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Placements <Amp /> <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Career Support</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              A comprehensive corporate relations ecosystem backed by verified compensation records and top tier national recruiters.
            </p>
          </div>

          {/* Primary High-Visibility Metric Cards (Deep Blue on White Bg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            <div className="p-6 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] text-center shadow-xl card-hover-lift hover:border-amber-400 hover:shadow-amber-500/20 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500" />
              <div className="text-xs font-bold uppercase text-amber-400 tracking-wider">Highest Package</div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight my-1 group-hover:text-amber-300 transition-colors">₹18.5 LPA</div>
              <p className="text-xs text-slate-300 font-medium">Top Performer Compensation</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] text-center shadow-xl card-hover-lift hover:border-cyan-400 hover:shadow-cyan-500/20 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-sky-500" />
              <div className="text-xs font-bold uppercase text-cyan-400 tracking-wider">Support Commitment</div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight my-1 group-hover:text-cyan-300 transition-colors">100%</div>
              <p className="text-xs text-slate-300 font-medium">Placement Assistance (Mandatory)</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] text-center shadow-xl card-hover-lift hover:border-blue-400 hover:shadow-blue-500/20 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500" />
              <div className="text-xs font-bold uppercase text-sky-400 tracking-wider">Average Package</div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight my-1 group-hover:text-sky-300 transition-colors">₹6.50+ LPA</div>
              <p className="text-xs text-slate-300 font-medium">Across All 5 Disciplines</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] text-center shadow-xl card-hover-lift hover:border-orange-400 hover:shadow-orange-500/20 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500" />
              <div className="text-xs font-bold uppercase text-orange-400 tracking-wider">Hiring Network</div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight my-1 group-hover:text-orange-300 transition-colors">465+</div>
              <p className="text-xs text-slate-300 font-medium">Annual Placement Opportunities</p>
            </div>
          </div>

          {/* 6 Career Support Pillars */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mb-6 reveal-init">
              Our 6-Pillar Employability Enhancement Program
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { title: 'Resume Development', desc: 'ATS-friendly industry profile engineering', hoverBorder: 'hover:border-cyan-400' },
                { title: 'Interview Preparation', desc: 'Mock technical & behavioral panels', hoverBorder: 'hover:border-amber-400' },
                { title: 'Group Discussion', desc: 'Topic-based corporate GD rounds', hoverBorder: 'hover:border-orange-400' },
                { title: 'Business Communication', desc: 'Executive presence & corporate email', hoverBorder: 'hover:border-blue-400' },
                { title: 'Employability Prep', desc: 'Aptitude & psychometric tests', hoverBorder: 'hover:border-yellow-400' },
                { title: 'Industry Exposure', desc: 'CXO guest lectures & mentorship', hoverBorder: 'hover:border-sky-400' }
              ].map((p, idx) => (
                <div 
                  key={p.title} 
                  className={`p-4 rounded-xl bg-[#0c2440] text-white border border-[#1e3e6b] text-center shadow-md card-hover-lift ${p.hoverBorder} group reveal-init reveal-delay-${idx * 100} transition-all duration-300`}
                >
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">{p.title}</div>
                  <div className="text-[11px] text-slate-300 mt-1 font-normal">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 20. CAREER PATHWAYS (SPECIALISATION TABS)                 */}
      {/* ========================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Future Trajectories</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Career Pathways <Amp /> <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Recruiting Sectors</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Explore corporate roles and marquee brands hiring graduates from your chosen discipline.
            </p>
          </div>

          {/* Specialisation Tabs */}
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 justify-start sm:justify-center mb-8 reveal-init">
            {specialisationsList.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveCareerTab(spec.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border hover:scale-105 active:scale-95 cursor-pointer ${
                  activeCareerTab === spec.id
                    ? 'bg-gradient-to-r from-[#0c2440] via-[#103258] to-[#0c2440] text-cyan-300 border-[#00bcd4]/60 shadow-md font-black'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-cyan-400'
                }`}
              >
                {spec.name}
              </button>
            ))}
          </div>

          {/* Active Career Pathway Card (Deep Blue on Light Bg) */}
          {(() => {
            const pathway = careerPathwaysData[activeCareerTab]
            return (
              <div className="max-w-4xl mx-auto bg-[#0c2440] text-white rounded-2xl border border-[#1e3e6b] p-6 sm:p-8 shadow-2xl card-hover-lift hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 reveal-init relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8]" />
                <h3 className="text-xl font-bold text-white mb-4">{pathway.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">Target Corporate Job Roles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pathway.roles.map((r) => (
                      <span key={r} className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">Key Recruiter Organizations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pathway.recruiters.map((rec) => (
                      <span key={rec} className="px-3 py-1 rounded-lg text-xs font-medium bg-amber-400/10 text-amber-200 border border-amber-400/25">
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 21 & 22. ELIGIBILITY & 4-STEP ADMISSION PROCESS          */}
      {/* ========================================================= */}
      <section id="admissions" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Join IMAS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Eligibility <Amp /> <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Admission Process</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              A transparent, merit-focused four-stage selection process for aspiring business leaders.
            </p>
          </div>

          {/* Eligibility Card (Deep Blue Card on White Bg) */}
          <div className="max-w-3xl mx-auto mb-12 p-6 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] shadow-xl card-hover-lift hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 reveal-init relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-yellow-400 to-amber-500" />
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-white">Minimum Academic Eligibility Criteria</h3>
                <p className="text-sm text-slate-200 mt-1 leading-relaxed font-normal">
                  "Bachelor's degree from a recognised university/institution, subject to applicable programme and admission requirements."
                </p>
                <p className="text-xs text-cyan-300 mt-2">
                  * Final-year graduation candidates awaiting results are also eligible to apply provisionally. Valid entrance scores (CAT, MAT, XAT, CMAT, ATMA or IMAS Entrance) are accepted.
                </p>
              </div>
            </div>
          </div>

          {/* 4-Step Process Timeline (Deep Blue Cards on White Bg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { ...admissionSteps[0], beam: 'from-cyan-400 to-sky-500', stepColor: 'text-cyan-400 group-hover:text-cyan-300' },
              { ...admissionSteps[1], beam: 'from-amber-400 to-yellow-500', stepColor: 'text-amber-400 group-hover:text-amber-300' },
              { ...admissionSteps[2], beam: 'from-orange-400 to-amber-500', stepColor: 'text-orange-400 group-hover:text-orange-300' },
              { ...admissionSteps[3], beam: 'from-blue-400 to-indigo-500', stepColor: 'text-sky-400 group-hover:text-sky-300' }
            ].map((s, idx) => (
              <div 
                key={s.step} 
                className={`p-6 rounded-2xl bg-[#0c2440] text-white border border-[#1e3e6b] relative flex flex-col justify-between shadow-xl card-hover-lift hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 group reveal-init reveal-delay-${idx * 100 + 100} overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.beam}`} />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-2xl font-black ${s.stepColor} font-mono transition-colors`}>{s.step}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-900 bg-white px-2 py-0.5 rounded">Stage {idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">{s.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{s.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-cyan-300 font-semibold">
                  <span>Stage {s.step} Selection</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 reveal-init">
            <Button
              onClick={handleOpenEnquiry}
              size="lg"
              className="rounded-xl bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white font-bold text-sm px-8 shadow-md shimmer-hover active:scale-95 group transition-all"
            >
              <span>Start Your Admission Process Now</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 23. APPROVED FEE STRUCTURE                                */}
      {/* ========================================================= */}
      <section id="fees" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Transparent Investment</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Approved <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Fee Structure</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Official programme fee schedule with clear fee component breakdown.
            </p>
          </div>

          {/* Fee Table Card (Deep Blue on Light Bg) */}
          <div className="max-w-2xl mx-auto bg-[#0c2440] text-white rounded-2xl border border-[#1e3e6b] overflow-hidden shadow-2xl card-hover-lift hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 reveal-init relative">
            <div className="h-1.5 bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8]" />
            <div className="bg-[#081a33] text-white p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold">PGDM Plus (2-Year Full-Time)</h3>
                <p className="text-xs text-cyan-300">AICTE Approved • IMAS Business School</p>
              </div>
              <span className="text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full font-bold">
                Batch 2026–28
              </span>
            </div>

            <div className="p-6 divide-y divide-white/10">
              <div className="py-3 flex items-center justify-between text-sm hover:bg-white/5 px-3 rounded-lg -mx-3 transition-colors duration-150">
                <span className="text-slate-300 font-medium">Programme / Tuition Fee</span>
                <span className="text-white font-bold font-mono">₹5,45,000</span>
              </div>
              <div className="py-3 flex items-center justify-between text-sm hover:bg-white/5 px-3 rounded-lg -mx-3 transition-colors duration-150">
                <span className="text-slate-300 font-medium">Admission Charges</span>
                <span className="text-white font-bold font-mono">₹50,000</span>
              </div>
              <div className="py-3 flex items-center justify-between text-sm hover:bg-white/5 px-3 rounded-lg -mx-3 transition-colors duration-150">
                <span className="text-slate-300 font-medium">Other Applicable Academic Charges</span>
                <span className="text-white font-bold font-mono">₹21,600</span>
              </div>
              <div className="pt-4 pb-2 flex items-center justify-between text-base sm:text-lg bg-gradient-to-r from-[#081a33] via-[#0c2440] to-[#081a33] -mx-6 px-6 border-t-2 border-yellow-400/60">
                <span className="text-white font-extrabold">Total Programme Fee</span>
                <span className="font-display bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent font-black text-2xl font-mono">₹6,16,600</span>
              </div>
            </div>

            <div className="p-4 bg-[#081a33] border-t border-white/10 text-center">
              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                * Developer / Candidate Note: Fees must be validated against the latest IMAS-approved fee schedule before publication. Flexible semester installment plans and educational loan support from nationalized banks are available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 24. COMPREHENSIVE FAQS ACCORDION                          */}
      {/* ========================================================= */}
      <section id="faqs" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-init">
            {/* Eyebrow Tag with Pulsing Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2440] border border-[#00bcd4]/40 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <span className="text-cyan-300 font-bold">Got Questions?</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2340] tracking-tight mt-1">
              Frequently Asked <span className="font-display bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Quick answers about PGDM Plus curriculum, dual specialisations, internships, tools, and admissions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 reveal-init">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div key={faq.q} className="rounded-xl border border-[#1e3e6b] bg-[#0c2440] text-white overflow-hidden shadow-md card-hover-lift hover:border-cyan-400 transition-all duration-200">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-amber-400 transition-transform ${isOpen ? 'rotate-180 text-yellow-300' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 bg-[#081a33]/60 animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 25. FINAL HIGH-CONVERSION CTA                             */}
      {/* ========================================================= */}
      <section className="relative py-20 bg-gradient-to-br from-[#071328] via-[#0c244d] to-[#071328] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#26c1d3_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
          {/* Eyebrow Badge Matching Dark Sections */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-[0.14em] text-white uppercase shadow-md mb-2 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
            <span className="text-cyan-300 font-bold">Admissions Open 2026</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Ready to Build Your <span className="font-display bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">Management Career?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore PGDM Plus, choose your specialisation and begin your journey towards industry-ready management skills with 100% placement assistance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 reveal-init">
            <Button
              onClick={handleOpenEnquiry}
              size="lg"
              className="h-12 rounded-xl bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white font-extrabold text-sm px-8 shadow-xl shadow-cyan-500/30 shimmer-hover active:scale-95 group transition-all"
            >
              <span>Apply Now</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
            <Button
              onClick={handleDownloadBrochure}
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-amber-400/60 bg-transparent text-amber-300 hover:bg-amber-500/10 font-bold text-sm px-6 shimmer-hover active:scale-95 group transition-all"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" /> Download Brochure
            </Button>
            <a
              href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors hover:scale-105"
            >
              <Phone className="h-4 w-4 text-yellow-400" />
              <span>Talk to a Counsellor</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs reveal-init">
            <span className="inline-flex items-center gap-2 p-2 px-4 rounded-xl bg-white text-slate-900 border border-slate-100 shadow-md font-bold hover:shadow-lg transition-all"><MapPin className="h-4 w-4 text-[#00a8cc] shrink-0" /> IMAS Campus: Newtown, Kolkata</span>
            <span className="inline-flex items-center gap-2 p-2 px-4 rounded-xl bg-white text-slate-900 border border-slate-100 shadow-md font-bold hover:shadow-lg transition-all"><Phone className="h-4 w-4 text-[#00a8cc] shrink-0" /> Admission Helpline: {IMAS_CONTACT.PHONE}</span>
            <span className="inline-flex items-center gap-2 p-2 px-4 rounded-xl bg-white text-slate-900 border border-slate-100 shadow-md font-bold hover:shadow-lg transition-all"><Mail className="h-4 w-4 text-[#00a8cc] shrink-0" /> Email: {IMAS_CONTACT.EMAIL}</span>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#071328] text-slate-400 py-6 text-xs border-t border-white/10">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} IMAS Business School, Kolkata. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="/aicte-mandatory-disclosure" className="hover:text-slate-200 transition-colors">AICTE Disclosure</a>
            <a href="/contact" className="hover:text-slate-200 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* --- MOBILE FIXED BOTTOM CTA BAR --- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c2440]/95 backdrop-blur-md border-t border-white/15 p-3 flex gap-2 shadow-2xl">
        <Button
          onClick={handleOpenEnquiry}
          className="flex-1 bg-gradient-to-r from-yellow-500 via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white font-bold text-xs h-10 rounded-xl shadow-lg shimmer-hover active:scale-95"
        >
          Apply Now
        </Button>
        <Button
          onClick={handleDownloadBrochure}
          variant="outline"
          className="flex-1 border-amber-400/60 text-amber-300 bg-slate-900/80 hover:bg-slate-900 font-bold text-xs h-10 rounded-xl shimmer-hover active:scale-95"
        >
          <Download className="mr-1 h-3.5 w-3.5" /> Brochure
        </Button>
      </div>

      {/* --- FLOATING BACK-TO-TOP BUTTON WITH CIRCULAR PROGRESS RING --- */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-20 sm:bottom-8 right-4 sm:right-7 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0c2340]/90 hover:bg-[#00bcd4] text-white backdrop-blur-md border border-cyan-400/50 shadow-xl hover:shadow-cyan-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              className="text-white/20 stroke-current"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              className="text-cyan-400 stroke-current transition-all duration-75"
              strokeWidth="2.5"
              strokeDasharray={2 * Math.PI * 20}
              strokeDashoffset={2 * Math.PI * 20 * (1 - scrollProgress / 100)}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <ChevronDown className="h-5 w-5 rotate-180 text-cyan-300 group-hover:text-white transition-colors duration-200" />
        </button>
      )}
    </div>
  )
}
