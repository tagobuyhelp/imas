import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { GraduationCap, Clock, Users, Award, ArrowRight, Star, Building2, CheckCircle, Globe, Calendar } from 'lucide-react';

export function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const programData = {
    name: 'PGDM Plus in Marketing Management',
    duration: '2 Years',
    location: 'Kolkata',
    format: 'Full Time - On Campus',
    commencement: '19th Sep 2025',
    includes: 'Includes Industry Projects & Internships',
    locationDesc: 'Located near Salt Lake Sector V'
  };

  const curriculumPhases = [
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
  ];

  const outcomes = [
    { metric: '100%', label: 'Placement Rate' },
    { metric: '₹18.5 LPA', label: 'Highest Package' },
    { metric: '₹8-12 LPA', label: 'Average Package' },
    { metric: '50+', label: 'Top Recruiters' }
  ];

  const pgdmPlusPrograms = [
    {
      name: 'PGDM Plus in Marketing Management',
      description: 'Transform into a Marketing Leader with hands-on experience in branding, digital strategy, and consumer psychology.',
      duration: '2 Years',
      highlights: ['AICTE-Approved', 'Industry Projects', 'International Exposure', '100% Placement Support']
    },
    {
      name: 'PGDM Plus in Financial Management',
      description: 'Master the world of money, markets, investments, and corporate finance for high-impact careers.',
      duration: '2 Years',
      highlights: ['CFO Preparation', 'Investment Banking', 'Financial Analytics', 'Risk Management']
    },
    {
      name: 'PGDM Plus in Human Resource Management',
      description: 'Develop future-ready HR leaders with strategic thinking and data-driven HR practices.',
      duration: '2 Years',
      highlights: ['Strategic HR', 'People Analytics', 'Talent Management', 'Organizational Development']
    },
    {
      name: 'PGDM Plus in Business Analytics',
      description: 'Become a Data-Smart Manager with skills in data science, visualization, and business intelligence.',
      duration: '2 Years',
      highlights: ['Data Analytics', 'Predictive Modeling', 'Business Intelligence', 'Machine Learning']
    },
    {
      name: 'PGDM Plus in Artificial Intelligence & Data Science',
      description: 'Shape the Future with AI-Powered Intelligence for next-generation AI professionals.',
      duration: '2 Years',
      highlights: ['AI Applications', 'Machine Learning', 'Deep Learning', 'NLP & Computer Vision']
    },
    {
      name: 'PGDM Plus in Fintech',
      description: 'Lead the Revolution in Financial Technology at the intersection of finance and technology.',
      duration: '2 Years',
      highlights: ['Blockchain', 'Digital Banking', 'AI in Finance', 'RegTech & InsurTech']
    },
    {
      name: 'PGDM Plus in Hospital & Healthcare Management',
      description: 'Lead the Future of Healthcare Delivery with managerial excellence in healthcare systems.',
      duration: '2 Years',
      highlights: ['Hospital Administration', 'Healthcare Operations', 'Quality Management', 'Medical Tourism']
    },
    {
      name: 'PGDM Plus in Innovation, Entrepreneurship & Venture Development (IEV)',
      description: 'Build What the World Needs Next with entrepreneurial skills and startup incubation.',
      duration: '2 Years',
      highlights: ['Startup Creation', 'Innovation Management', 'Venture Development', 'Angel Network Access']
    }
  ];

  const executivePrograms = [
    {
      name: 'PGDM in Marketing',
      description: 'Transform into a Marketing Leader while continuing your career with blended learning.',
      duration: '18 Months',
      highlights: ['Blended Mode', 'Weekend Classes', 'Industry Projects', 'Career Advancement']
    },
    {
      name: 'PGDM in Finance',
      description: 'Master Finance While Continuing Your Career with specialized financial management skills.',
      duration: '18 Months',
      highlights: ['Investment Banking', 'Risk Management', 'Corporate Finance', 'Fintech Integration']
    },
    {
      name: 'PGDM in Human Resource',
      description: 'Shape People. Shape Businesses with strategic HR leadership skills.',
      duration: '18 Months',
      highlights: ['Strategic HR', 'People Analytics', 'Talent Management', 'Organizational Development']
    },
    {
      name: 'PGDM in Business Analytics',
      description: 'Turn Data into Decisions with advanced analytics and business intelligence.',
      duration: '18 Months',
      highlights: ['Data Analytics', 'Predictive Modeling', 'Business Intelligence', 'Machine Learning']
    },
    {
      name: 'PGDM in Artificial Intelligence & Data Science',
      description: 'Upgrade Your Career with AI-Powered Business Skills for the digital economy.',
      duration: '18 Months',
      highlights: ['AI Applications', 'Machine Learning', 'Deep Learning', 'Business AI']
    },
    {
      name: 'PGDM in Fintech',
      description: 'Shape the Future of Digital Finance While You Work with blended learning.',
      duration: '18 Months',
      highlights: ['Digital Banking', 'Blockchain', 'AI in Finance', 'RegTech']
    },
    {
      name: 'PGDM in Logistics & Supply Chain Management',
      description: 'Streamline Global Supply Chains While Continuing Your Career.',
      duration: '18 Months',
      highlights: ['Supply Chain Strategy', 'Logistics Planning', 'Procurement', 'Operations Management']
    },
    {
      name: 'PGDM in Operations Management',
      description: 'Master Efficiency. Lead Operations. Drive Excellence.',
      duration: '18 Months',
      highlights: ['Process Optimization', 'Quality Control', 'Project Management', 'Lean Six Sigma']
    },
    {
      name: 'PGDM in Agri Business Management',
      description: 'Transform India\'s Agri Economy into a Growth Engine.',
      duration: '18 Months',
      highlights: ['Agri Supply Chain', 'Food Processing', 'Rural Marketing', 'AgriTech Innovation']
    },
    {
      name: 'PGDM in Hospital & Healthcare Management',
      description: 'Lead Healthcare Systems with Managerial Excellence.',
      duration: '18 Months',
      highlights: ['Hospital Administration', 'Healthcare Operations', 'Quality Management', 'Health Policy']
    }
  ];

  const mbaGlobalProgram = {
    name: 'MBA (Global) Program',
    description: 'Think beyond borders. Lead beyond limits with international exposure and UK partnership.',
    duration: '2 Years',
    highlights: ['1 Year in India + 1 Year in UK', 'Dual Qualification', 'Post-Study Work Visa', 'Global Alumni Network'],
    structure: {
      year1: {
        location: 'IMAS Kolkata',
        qualification: 'PGDM (AICTE-approved) + EDLSMP (UK)',
        fees: '₹3,66,600 (INR)'
      },
      year2: {
        location: 'UK Partner Universities',
        qualification: 'MBA (Top-Up Program)',
        fees: '£10,000 - £18,000'
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Scaler Style */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-medium to-primary-teal text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            India's Only B-School Powered by Industry Experts & Designed for Tomorrow's Leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-dark hover:bg-gray-100 text-lg px-8 py-3">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-dark text-lg px-8 py-3">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Program Highlights - Scaler Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-medium" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-2">DURATION</h3>
              <p className="text-2xl font-bold text-primary-dark">2 Years</p>
              <p className="text-sm text-muted-foreground">Full Time Programs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-medium" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-2">LOCATION</h3>
              <p className="text-2xl font-bold text-primary-dark">Kolkata</p>
              <p className="text-sm text-muted-foreground">Salt Lake Sector V</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary-medium" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-2">FORMAT</h3>
              <p className="text-2xl font-bold text-primary-dark">On Campus</p>
              <p className="text-sm text-muted-foreground">Full Time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-medium" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-2">COMMENCEMENT</h3>
              <p className="text-2xl font-bold text-primary-dark">Sep 2025</p>
              <p className="text-sm text-muted-foreground">Next Batch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs - Scaler Style */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4">
              <TabsTrigger value="overview" className="text-primary-dark">Overview</TabsTrigger>
              <TabsTrigger value="pgdm-plus" className="text-primary-dark">PGDM Plus</TabsTrigger>
              <TabsTrigger value="executive" className="text-primary-dark">Executive</TabsTrigger>
              <TabsTrigger value="mba-global" className="text-primary-dark">MBA Global</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-primary-dark mb-8">Program Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    IMAS Kolkata offers a comprehensive range of AICTE-approved management programs designed to create future business leaders who can navigate the intersection of traditional business management and cutting-edge technology.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <Card className="border-primary-medium/20">
                      <CardHeader>
                        <CardTitle className="text-primary-dark">What You'll Learn</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-medium" />
                            <span>Core Management Principles</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-medium" />
                            <span>Digital Transformation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-medium" />
                            <span>AI & Analytics</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-medium" />
                            <span>Leadership & Strategy</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-primary-medium/20">
                      <CardHeader>
                        <CardTitle className="text-primary-dark">Who Should Apply</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-medium" />
                            <span>Recent Graduates</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-medium" />
                            <span>Working Professionals</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-medium" />
                            <span>Entrepreneurs</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-medium" />
                            <span>Career Changers</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* PGDM Plus Programs Tab */}
            <TabsContent value="pgdm-plus" className="mt-0">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-primary-dark mb-8">PGDM Plus Programs (for Fresh Graduates)</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Two-year full-time AICTE-approved programs designed for aspiring professionals who want to master their chosen domain with hands-on industry exposure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pgdmPlusPrograms.map((program) => (
                    <Card key={program.name} className="border-primary-medium/20 hover:border-primary-medium/40 transition-all hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-primary-medium/10 rounded-lg flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-primary-medium" />
                          </div>
                          <div>
                            <CardTitle className="text-primary-dark text-lg">{program.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{program.duration}</p>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {program.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-primary-dark text-sm">Key Highlights:</h4>
                          <ul className="space-y-1">
                            {program.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary-medium rounded-full"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button 
                          className="w-full bg-primary-dark hover:bg-primary-medium text-white mt-4"
                        >
                          View Program Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Executive Programs Tab */}
            <TabsContent value="executive" className="mt-0">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-primary-dark mb-8">PGDM Programs (for Working Executives/Blended Mode)</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  18-month blended learning programs designed for working professionals who want to accelerate their careers without taking a career break.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {executivePrograms.map((program) => (
                    <Card key={program.name} className="border-primary-medium/20 hover:border-primary-medium/40 transition-all hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-primary-medium/10 rounded-lg flex items-center justify-center">
                            <Award className="h-6 w-6 text-primary-medium" />
                          </div>
                          <div>
                            <CardTitle className="text-primary-dark text-lg">{program.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{program.duration}</p>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {program.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-primary-dark text-sm">Key Highlights:</h4>
                          <ul className="space-y-1">
                            {program.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary-medium rounded-full"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button 
                          className="w-full bg-primary-dark hover:bg-primary-medium text-white mt-4"
                        >
                          View Program Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* MBA Global Tab */}
            <TabsContent value="mba-global" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-primary-dark mb-8">MBA (Global) Program</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    {mbaGlobalProgram.description}
                  </p>
                  
                  <Card className="border-primary-medium/20 mb-8">
                    <CardHeader>
                      <CardTitle className="text-primary-dark">Program Structure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary-dark">Year 1 - IMAS Kolkata</h4>
                          <ul className="space-y-2 text-sm">
                            <li><strong>Location:</strong> {mbaGlobalProgram.structure.year1.location}</li>
                            <li><strong>Qualification:</strong> {mbaGlobalProgram.structure.year1.qualification}</li>
                            <li><strong>Fees:</strong> {mbaGlobalProgram.structure.year1.fees}</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary-dark">Year 2 - United Kingdom</h4>
                          <ul className="space-y-2 text-sm">
                            <li><strong>Location:</strong> {mbaGlobalProgram.structure.year2.location}</li>
                            <li><strong>Qualification:</strong> {mbaGlobalProgram.structure.year2.qualification}</li>
                            <li><strong>Fees:</strong> {mbaGlobalProgram.structure.year2.fees}</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary-medium/20 mb-8">
                    <CardHeader>
                      <CardTitle className="text-primary-dark">Key Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {mbaGlobalProgram.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-medium mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="text-center">
                    <Button size="lg" className="bg-primary-dark hover:bg-primary-medium text-white">
                      Apply Now for MBA Global
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>
    </div>
  );
}
