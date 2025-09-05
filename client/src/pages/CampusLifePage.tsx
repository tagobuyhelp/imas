import React from 'react';
import { Button } from '../components/ui/button';
import { MentorsSection } from '../components/sections/Home/MentorsSection';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  MapPin, 
  Utensils, 
  Wifi, 
  TreePine,
  Trophy,
  Music,
  Briefcase,
  Heart,
  Lightbulb,
  Star,
  Play,
  ExternalLink,
  UserPlus,
  Send
} from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';
import { applyNow } from '../lib/utils';

export function CampusLifePage() {
  const facilities = [
    {
      icon: Building2,
      title: "State-of-the-art Infrastructure",
      description: "Smart classrooms & digital learning tools"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Centrally Located in Sector V, Salt Lake — Kolkata's IT & Business Hub"
    },
    {
      icon: GraduationCap,
      title: "Industry-Ready Learning Spaces",
      description: "Seminar halls, boardrooms, labs"
    },
    {
      icon: Users,
      title: "Comfortable Hostel Facilities",
      description: "Modern amenities for student comfort"
    },
    {
      icon: Utensils,
      title: "Cafeteria & Dining",
      description: "Hygienic, diverse meals"
    },
    {
      icon: TreePine,
      title: "Green Campus Environment",
      description: "Inspiring productivity and well-being"
    }
  ];

  const clubs = [
    {
      name: "LaunchSphere – Entrepreneurship Cell",
      description: "The LaunchSphere Entrepreneurship Cell at IMAS nurtures innovative thinking and entrepreneurial spirit. Students are encouraged to pitch business ideas, refine strategies, and present to panels of entrepreneurs, investors, and corporate experts. Selected teams receive mentorship and incubation support, helping them transform concepts into viable business ventures.",
      icon: Lightbulb,
      color: "bg-[#143674]"
    },
    {
      name: "Radiance – Business Fest",
      description: "Radiance is more than just a fest; it's a live business project. Managed like a real organization, Radiance involves dedicated teams across Sales, Marketing, Finance, HR, Operations, and Logistics, each responsible for executing a multi-day large-scale event. From inter-school competitions to cultural evenings, students gain hands-on expertise in planning, execution, and stakeholder management.",
      icon: Star,
      color: "bg-[#26c1d3]"
    },
    {
      name: "IMAS Social Pioneers – CSR Society",
      description: "The IMAS Social Pioneers is our flagship CSR and community care initiative. It empowers students to connect management skills with empathy, fostering leaders who care about impact beyond business. Volunteers organize initiatives such as cancer awareness campaigns, blood donation camps, Joy of Giving drives, and Herbal Holi celebrations with children in need.",
      icon: Heart,
      color: "bg-[#2e7bb3]"
    }
  ];

  const videoContent = [
    {
      id: "ynIZZZKj23Y",
      title: "Prof. (Dr.) Saikat Maitra on FinTech",
      description: "Prof. (Dr.) Saikat Maitra, Former Vice-Chancellor of MAKAUT, visited IMAS to share his expertise on FinTech with our PGDM (FinTech) students."
    },
    {
      id: "pkv_lBMq4JA",
      title: "Alex Kurter from Yale University",
      description: "In a powerful and inspiring interaction, Alex Kurter, distinguished academic from Yale University, shared his thoughts on IMAS and the importance of setting bold goals."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="campus-overview" className="relative py-16 bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/uploads/IMASBUILDING.jpeg" 
            alt="IMAS Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            CAMPUS LIFE AT IMAS
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Where Management Meets <span className="bg-gradient-to-r from-[#26c1d3] to-[#2e7bb3] bg-clip-text text-transparent">Experience</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-6 leading-relaxed px-4">
            At IMAS Business School Kolkata, student life goes beyond classrooms. From industry immersion, cultural celebrations, leadership clubs, and global networking opportunities to vibrant everyday experiences, campus life at IMAS is designed to shape well-rounded leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              onClick={applyNow}
              className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300`}
            >
              <UserPlus className="mr-2 h-5 w-5" />
              Join Our Community
            </Button>
            <a 
              href="https://www.youtube.com/@IMASKolkata/videos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[#26c1d3] transition-colors duration-300 font-medium"
            >
              <Play className="h-5 w-5" />
              Watch Campus Videos
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Student Experience Section */}
      <section id="student-experience" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
              STUDENT PERSPECTIVE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              See IMAS Through the <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Eyes of Students</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience campus life first-hand through our student stories, faculty talks, and community celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Campus Building */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/uploads/IMASBUILDING.jpeg" 
                  alt="IMAS Campus Building" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Modern Campus Infrastructure</h3>
                <p className="text-gray-600 text-sm">Our state-of-the-art campus building in Salt Lake Sector V, designed for modern learning.</p>
              </div>
            </div>

            {/* Industry Visit */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/uploads/Industrial_visit_at_Reliance_Trends.jpeg" 
                  alt="Industrial Visit at Reliance Trends" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Industry Exposure</h3>
                <p className="text-gray-600 text-sm">Regular industrial visits to top companies for practical learning experiences.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Play className={`h-12 w-12 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-2 mx-auto`} />
                  <p className="text-gray-600 font-medium text-sm">Student Stories & Campus Life</p>
                </div>
              </div>
              <a 
                href="https://www.youtube.com/@IMASKolkata/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:scale-105 transition-all duration-300 rounded-full`}
              >
                <Play className="h-4 w-4" />
                Visit Our YouTube Channel
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Section */}
      <section id="facilities" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
              WORLD-CLASS INFRASTRUCTURE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Campus Gallery & <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Facilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Hospital Visit */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/uploads/Visit to_Apollo_Hospital.jpeg" 
                  alt="Visit to Apollo Hospital" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Healthcare Industry Visits</h3>
                <p className="text-gray-600 leading-relaxed">Educational visits to leading hospitals like Apollo for healthcare management insights</p>
              </div>
            </div>

            {/* JSW Workshop */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/uploads/Workshop_at_JSW_Plant.jpg" 
                  alt="Workshop at JSW Plant" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Industrial Workshops</h3>
                <p className="text-gray-600 leading-relaxed">Hands-on workshops at major industrial plants like JSW for practical learning</p>
              </div>
            </div>

            {/* TDK Industries */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/uploads/TDK_Industries_exposure_for_PGDM_students.jpeg" 
                  alt="TDK Industries Exposure" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Industry Exposure</h3>
                <p className="text-gray-600 leading-relaxed">Direct exposure to manufacturing processes at leading companies like TDK Industries</p>
              </div>
            </div>

            {/* SVS Hospital Visit */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/uploads/Visit_to_SVS_Marwari_Hospital.jpg" 
                  alt="Visit to SVS Marwari Hospital" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Healthcare Management</h3>
                <p className="text-gray-600 leading-relaxed">Learning healthcare operations and management at SVS Marwari Hospital</p>
              </div>
            </div>

            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Community Section */}
      <section id="student-community" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
              VIBRANT COMMUNITY
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              A Thriving <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Student Community</span>
            </h2>
          </div>

          {/* Student Community Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/uploads/mba_global.jpg" 
                  alt="MBA Global Program Students" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Global MBA Program</h3>
                <p className="text-gray-600 text-sm">International exposure and diverse perspectives</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/uploads/pgdm-programmes-ex.jpg" 
                  alt="PGDM Programme Students" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">PGDM Excellence</h3>
                <p className="text-gray-600 text-sm">Specialized programs for career advancement</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/uploads/about-imas-pic.webp" 
                  alt="IMAS Campus Life" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Campus Life</h3>
                <p className="text-gray-600 text-sm">Vibrant community and learning environment</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12">
              At IMAS, learning extends beyond classrooms into a vibrant culture of collaboration, creativity, and celebration. Students actively participate in cultural festivals such as Diwali, Saraswati Puja, and even unique events like Bhai-Dooj with the Indian Army, fostering unity and tradition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#143674]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-[#143674]" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Cultural Events</h3>
                <p className="text-gray-600 text-sm">Theatre, debates, open-mic nights</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2e7bb3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-[#2e7bb3]" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Sports & Fitness</h3>
                <p className="text-gray-600 text-sm">Cricket, table tennis, gym sessions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#26c1d3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#26c1d3]" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Student Clubs</h3>
                <p className="text-gray-600 text-sm">Marketing, Finance, HR, Analytics</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#143674]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-[#143674]" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Entrepreneurship</h3>
                <p className="text-gray-600 text-sm">Startup launches, business quizzes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrating Milestones Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
              ACHIEVEMENTS & CELEBRATIONS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Celebrating Milestones <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Together</span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-[#143674] to-[#2e7bb3] rounded-xl p-6 sm:p-8 text-white">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              At IMAS, every milestone is a reason to celebrate. From winning prestigious competitions at IIMs and national fests to witnessing the excitement of student-led startup launches, the campus thrives on shared success.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Birthdays, jam sessions, and informal gatherings add warmth and vibrancy to everyday life, while academic and cultural achievements are recognized with pride. These celebrations are more than just events — they embody the IMAS spirit of growing together, supporting one another, and fostering a strong sense of belonging.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Leaders Section */}
      <section id="industry-leaders" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
              INDUSTRY CONNECT
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Global & <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Industry Leaders</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              IMAS regularly hosts expert talks, international lectures, and leadership dialogues with industry veterans.
            </p>
          </div>
        </div>
      </section>

      {/* Mentors Section Integration */}
      <MentorsSection />

      {/* Business Clubs Section */}
      <section id="business-clubs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
              STUDENT ORGANIZATIONS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              A Peek into Our Business <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Clubs & Societies</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              At IMAS Kolkata, student life is powered by a vibrant club culture that blends learning, leadership, and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {clubs.map((club, index) => {
              const IconComponent = club.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${club.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{club.name}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{club.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Leaders Videos Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg`}>
              EXPERT INSIGHTS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Insightful Minutes with <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Industry Leaders</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              The rare opportunity to engage with top industry leaders, corporate veterans, and academic visionaries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {videoContent.map((video, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">{video.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/uploads/IMASBUILDING.jpeg" 
            alt="IMAS Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} text-white px-6 py-2 rounded-full text-sm font-semibold mb-6`}>
            ADMISSIONS OPEN
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our <span className="text-[#26c1d3]">Vibrant Community?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
            Experience the perfect blend of academic excellence, industry exposure, and vibrant campus life at IMAS Business School Kolkata.
          </p>
          <Button 
            onClick={applyNow}
            className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300`}
          >
            <Send className="mr-2 h-5 w-5" />
            Apply Now - Join IMAS
          </Button>
        </div>
      </section>
    </div>
  );
}