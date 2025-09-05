import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { BottomNavBar } from './BottomNavBar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export function Layout({ children, currentPage }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handlePageChange = () => {
    setIsSidebarOpen(false);
  };

  // Extract current page from pathname
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/programs/')) return 'program-detail';
    if (path === '/programs') return 'programs';
    if (path === '/faculty') return 'faculty';
    if (path === '/about') return 'about';
    if (path === '/admissions') return 'admissions';
    if (path === '/internships') return 'internships';
    if (path === '/contact') return 'contact';
    if (path === '/campus-life') return 'campus-life';
    return undefined;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <Header 
        onMenuToggle={handleMenuToggle} 
        currentPage={currentPage}
      />
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} currentPage={currentPage} />
      
      {/* Main Content */}
      <main className="flex-1 pb-0 lg:pb-20">
        {children}
      </main>
      
      {/* Bottom Navigation Bar */}
      <BottomNavBar currentPage={getCurrentPage()} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
