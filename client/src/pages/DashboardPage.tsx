import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, Target } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-primary-dark">Dashboard</h1>
        <p className="text-muted-foreground">Monitor your key metrics and performance indicators</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-dark">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary-medium" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-dark">$45,231.89</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-dark">Active Users</CardTitle>
            <Users className="h-4 w-4 text-primary-medium" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-dark">+2,350</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              +180.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-dark">Sales</CardTitle>
            <Target className="h-4 w-4 text-primary-medium" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-dark">+12,234</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingDown className="h-3 w-3 text-red-500" />
              -19% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-dark">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-primary-medium" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-dark">+573</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="border-primary-medium/20">
          <CardHeader>
            <CardTitle className="text-primary-dark">Recent Activity</CardTitle>
            <CardDescription>Latest updates and activities in your system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: '2 minutes ago', text: 'New user registration: john.doe@example.com', type: 'user' },
                { time: '5 minutes ago', text: 'Report generated: Monthly Sales Report', type: 'report' },
                { time: '10 minutes ago', text: 'Data backup completed successfully', type: 'system' },
                { time: '15 minutes ago', text: 'Analytics dashboard updated', type: 'analytics' },
                { time: '1 hour ago', text: 'New data source connected', type: 'data' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-medium rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-primary-medium/20">
          <CardHeader>
            <CardTitle className="text-primary-dark">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2 border-primary-medium/30 hover:border-primary-medium hover:bg-primary-medium/5">
                <FileText className="h-5 w-5 text-primary-medium" />
                <span className="text-sm">Generate Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2 border-primary-medium/30 hover:border-primary-medium hover:bg-primary-medium/5">
                <Users className="h-5 w-5 text-primary-medium" />
                <span className="text-sm">Add User</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2 border-primary-medium/30 hover:border-primary-medium hover:bg-primary-medium/5">
                <BarChart3 className="h-5 w-5 text-primary-medium" />
                <span className="text-sm">View Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2 border-primary-medium/30 hover:border-primary-medium hover:bg-primary-medium/5">
                <Settings className="h-5 w-5 text-primary-medium" />
                <span className="text-sm">Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Import missing icons
import { FileText, BarChart3, Settings } from 'lucide-react';
