import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { AboutPage } from './pages/AboutPage';
import { FacultyPage } from './pages/FacultyPage';
import { AdmissionsPage } from './pages/AdmissionsPage';


import { ContactPage } from './pages/ContactPage';
import { InternshipPage } from './pages/InternshipPage';
import { CampusLifePage } from './pages/CampusLifePage';
import { EventsPage } from './pages/EventsPage';
// Removed admin and auth imports - components deleted
import { Toaster } from './components/ui/toaster';

function AppContent(): React.JSX.Element {
  const location = useLocation();
  
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/programs') return 'programs';
    if (path.startsWith('/programs/')) return 'program-detail';
    return path.substring(1);
  };

  const currentPage = getCurrentPage();

  return (
    <Layout currentPage={currentPage}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:slug" element={<ProgramDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/internships" element={<InternshipPage />} />
        <Route path="/campus-life" element={<CampusLifePage />} />
        <Route path="/events" element={<EventsPage />} />
        {/* Admin routes removed - no backend API available */}
      </Routes>
    </Layout>
  );
}

export function App(): React.JSX.Element {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
        <Toaster />
      </Router>
    </HelmetProvider>
  );
}


