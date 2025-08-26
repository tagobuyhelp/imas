import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AboutPage } from './pages/AboutPage';
import { FacultyPage } from './pages/FacultyPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

function AppContent(): React.JSX.Element {
  const location = useLocation();
  
  // Extract current page from pathname
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1); // Remove leading slash
  };

  const currentPage = getCurrentPage();

  return (
    <Layout currentPage={currentPage}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export function App(): React.JSX.Element {

  return (
    <Router>
      <AppContent />
    </Router>
  );
}


