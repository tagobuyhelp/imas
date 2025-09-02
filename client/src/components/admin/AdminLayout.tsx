import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { 
  LayoutDashboard, 
  FileText, 
  GraduationCap, 
  MessageSquare, 
  Users, 
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';

export function AdminLayout() {
  const location = useLocation();
  const { logout, user } = useAuth();

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
      current: location.pathname === '/admin'
    },
    {
      name: 'Contact Forms',
      href: '/admin/contact-forms',
      icon: MessageSquare,
      current: location.pathname === '/admin/contact-forms'
    },
    {
      name: 'Admission Forms',
      href: '/admin/admission-forms',
      icon: GraduationCap,
      current: location.pathname === '/admin/admission-forms'
    },
    {
      name: 'Advisor Inquiries',
      href: '/admin/advisor-inquiries',
      icon: FileText,
      current: location.pathname === '/admin/advisor-inquiries'
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: Users,
      current: location.pathname === '/admin/users'
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
      current: location.pathname === '/admin/settings'
    }
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-center border-b border-gray-200">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/uploads/imas_logo.png" 
                alt="IMAS" 
                className="h-8 w-auto"
              />
              <span className={`text-lg font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                Admin
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-4 py-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    item.current
                      ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white`
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Info & Logout */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                  <Users className="h-4 w-4 text-gray-600" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{user?.email}</p>
                  <p className="text-gray-500 capitalize">{user?.role}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;