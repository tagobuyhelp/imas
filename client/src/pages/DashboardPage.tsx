import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Alert, AlertDescription } from '../components/ui/alert';
import { 
  TrendingUp, 
  Users, 
  FileText, 
  MessageSquare, 
  GraduationCap, 
  Activity, 
  AlertCircle,
  Loader2,
  Eye,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { apiService, ApiResponse } from '../lib/api';
import { useAuth } from '../contexts/AuthContext';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';

interface DashboardStats {
  contactForms: number;
  admissionForms: number;
  advisorInquiries: number;
  totalSubmissions: number;
}

interface RecentActivity {
  id: string;
  type: 'contact' | 'admission' | 'advisor';
  email: string;
  createdAt: string;
  status: string;
}

export function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    contactForms: 0,
    admissionForms: 0,
    advisorInquiries: 0,
    totalSubmissions: 0
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError('');

      // Fetch all submission data
      const [contactResponse, admissionResponse, advisorResponse] = await Promise.all([
        apiService.admin.getContactSubmissions() as Promise<ApiResponse<any[]>>,
        apiService.admin.getAdmissionSubmissions() as Promise<ApiResponse<any[]>>,
        apiService.admin.getAdvisorSubmissions() as Promise<ApiResponse<any[]>>
      ]);

      if (contactResponse.success && admissionResponse.success && advisorResponse.success) {
        const contactCount = contactResponse.data?.length || 0;
        const admissionCount = admissionResponse.data?.length || 0;
        const advisorCount = advisorResponse.data?.length || 0;

        setStats({
          contactForms: contactCount,
          admissionForms: admissionCount,
          advisorInquiries: advisorCount,
          totalSubmissions: contactCount + admissionCount + advisorCount
        });

        // Combine recent activities
        const activities: RecentActivity[] = [];
        
        // Add contact form activities
        contactResponse.data?.slice(0, 3).forEach((item: any) => {
          activities.push({
            id: item._id,
            type: 'contact',
            email: item.email,
            createdAt: item.createdAt,
            status: item.status || 'pending'
          });
        });

        // Add admission form activities
        admissionResponse.data?.slice(0, 3).forEach((item: any) => {
          activities.push({
            id: item._id,
            type: 'admission',
            email: item.personalInfo?.email || item.email,
            createdAt: item.createdAt,
            status: item.status || 'pending'
          });
        });

        // Add advisor inquiry activities
        advisorResponse.data?.slice(0, 3).forEach((item: any) => {
          activities.push({
            id: item._id,
            type: 'advisor',
            email: item.personalDetails?.email || item.email,
            createdAt: item.createdAt,
            status: item.status || 'pending'
          });
        });

        // Sort by creation date and take the most recent
        activities.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setRecentActivity(activities.slice(0, 5));
      } else {
        setError('Failed to fetch dashboard data');
      }
    } catch (error: any) {
      console.error('Error fetching dashboard data:', error);
      setError(error.message || 'An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'contact': return MessageSquare;
      case 'admission': return GraduationCap;
      case 'advisor': return FileText;
      default: return Activity;
    }
  };

  const getActivityText = (activity: RecentActivity) => {
    const typeText = {
      contact: 'Contact form',
      admission: 'Admission application',
      advisor: 'Advisor inquiry'
    };
    return `New ${typeText[activity.type]} from ${activity.email}`;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary-medium" />
          <span className="ml-2 text-lg">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-2 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.email}. Here's what's happening with your submissions.
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-700">
            {error}
          </AlertDescription>
        </Alert>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-dark">Total Submissions</CardTitle>
            <Activity className="h-4 w-4 text-primary-medium" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
              {stats.totalSubmissions}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              All form submissions
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-dark">Contact Forms</CardTitle>
            <MessageSquare className="h-4 w-4 text-primary-medium" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
              {stats.contactForms}
            </div>
            <p className="text-xs text-muted-foreground">
              Contact inquiries received
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-dark">Admission Forms</CardTitle>
            <GraduationCap className="h-4 w-4 text-primary-medium" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
              {stats.admissionForms}
            </div>
            <p className="text-xs text-muted-foreground">
              Application submissions
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-dark">Advisor Inquiries</CardTitle>
            <FileText className="h-4 w-4 text-primary-medium" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
              {stats.advisorInquiries}
            </div>
            <p className="text-xs text-muted-foreground">
              Advisor consultation requests
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="border-primary-medium/20">
          <CardHeader>
            <CardTitle className={IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}>Recent Activity</CardTitle>
            <CardDescription>Latest form submissions and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity) => {
                  const Icon = getActivityIcon(activity.type);
                  return (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-medium rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-primary-medium" />
                          <p className="text-sm">{getActivityText(activity)}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {formatTimeAgo(activity.createdAt)} • Status: {activity.status}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-muted-foreground">No recent activity</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-primary-medium/20">
          <CardHeader>
            <CardTitle className={IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                asChild
                variant="outline" 
                className="h-20 flex flex-col gap-2 border-primary-medium/30 hover:border-primary-medium hover:bg-primary-medium/5"
              >
                <Link to="/admin/contact-forms">
                  <MessageSquare className="h-5 w-5 text-primary-medium" />
                  <span className="text-sm">View Contact Forms</span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="h-20 flex flex-col gap-2 border-primary-medium/30 hover:border-primary-medium hover:bg-primary-medium/5"
              >
                <Link to="/admin/admission-forms">
                  <GraduationCap className="h-5 w-5 text-primary-medium" />
                  <span className="text-sm">View Applications</span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="h-20 flex flex-col gap-2 border-primary-medium/30 hover:border-primary-medium hover:bg-primary-medium/5"
              >
                <Link to="/admin/advisor-inquiries">
                  <FileText className="h-5 w-5 text-primary-medium" />
                  <span className="text-sm">View Inquiries</span>
                </Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={fetchDashboardData}
                className="h-20 flex flex-col gap-2 border-primary-medium/30 hover:border-primary-medium hover:bg-primary-medium/5"
              >
                <Activity className="h-5 w-5 text-primary-medium" />
                <span className="text-sm">Refresh Data</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;
