import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export function Layout({ children, currentPage }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handlePageChange = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <Header 
        onMenuToggle={handleMenuToggle} 
        isMenuOpen={isSidebarOpen}
        currentPage={currentPage}
      />
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} currentPage={currentPage} />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
