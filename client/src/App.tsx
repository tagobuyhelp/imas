import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import { CampusTourPage } from './pages/CampusTourPage';
import { EventsPage } from './pages/EventsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AicteMandatoryDisclosurePage } from './pages/AicteMandatoryDisclosurePage';
import { BoardOfGovernorsPage } from './pages/BoardOfGovernorsPage';
import { StatutoryCommitteesPage } from './pages/StatutoryCommitteesPage';
import { PlacementPage } from './pages/PlacementPage';
import { PgdmPlusLandingPage } from './pages/PgdmPlusLandingPage';
import { PgdmFintechLandingPage } from './pages/PgdmFintechLandingPage';
import { PgdmMbaLandingPage } from './pages/PgdmMbaLandingPage';
import { WorkingExecutivesLandingPage } from './pages/WorkingExecutivesLandingPage';
import { PgdmBaLandingPage } from './pages/PgdmBaLandingPage';
// Removed admin and auth imports - components deleted
import { Toaster } from './components/ui/toaster';
import { BrochureModal } from './components/BrochureModal';
import { VideoModal } from './components/VideoModal';
import EnquiryFormModal from './components/EnquiryFormModal';



function AppContent(): React.JSX.Element {
  const location = useLocation();
  
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/programs') return 'programs';
    if (path.startsWith('/programs/')) return 'program-detail';
    if (path === '/campus-tour') return 'campus-tour';
    return path.substring(1);
  };

  const currentPage = getCurrentPage();
  const isStandalone = ['/pgdm-plus', '/pgdm-fintech', '/pgdm-admission-kolkata', '/best-pgdm-mba-college-in-kolkata', 
    '/pgdm-working-executive-programs', '/best-pgdm-ba-college-in-kolkata'].includes(location.pathname);

  if (isStandalone) {
    return (
      <Routes>
        <Route path="/pgdm-plus" element={<PgdmPlusLandingPage />} />
        <Route path="/pgdm-fintech" element={<PgdmFintechLandingPage />} />
        <Route path="/best-pgdm-mba-college-in-kolkata" element={<PgdmMbaLandingPage />} />
        <Route path="/pgdm-working-executive-programs" element={<WorkingExecutivesLandingPage />} />
        <Route path="/best-pgdm-ba-college-in-kolkata" element={<PgdmBaLandingPage />} />
      </Routes>
    );
  }

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
        <Route path="/campus-tour" element={<CampusTourPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/aicte-mandatory-disclosure" element={<AicteMandatoryDisclosurePage />} />
        <Route path="/board-of-governors" element={<BoardOfGovernorsPage />} />
        <Route path="/statutory-committees" element={<StatutoryCommitteesPage />} />
        <Route path="/placements" element={<PlacementPage />} />
        <Route path="/pgdm-executive-courses-kolkata" element={<Navigate to="/programs/pgdm-operations-working-executive" replace />} />
        <Route path="/pgdm-executive-courses-kolkata/" element={<Navigate to="/programs/pgdm-operations-working-executive" replace />} />
        <Route path="/pgdm-business-analytics-college-kolkata" element={<Navigate to="/programs" replace />} />
        <Route path="/pgdm-business-analytics-college-kolkata/" element={<Navigate to="/programs" replace />} />
      </Routes>
    </Layout>
  );
}

export function App(): React.JSX.Element {
  return (
    <HelmetProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppContent />
        <BrochureModal />
        <EnquiryFormModal />
        <VideoModal />
        <Toaster />
        {/* Chatbot handled via index.html (placeholder + loader script) */}
      </Router>
    </HelmetProvider>
  );
}
