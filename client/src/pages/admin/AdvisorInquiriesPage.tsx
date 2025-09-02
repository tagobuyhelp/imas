import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Badge } from '../../components/ui/badge';
import { 
  FileText, 
  AlertCircle,
  Loader2,
  Eye,
  Download,
  RefreshCw,
  Calendar,
  Mail,
  Phone,
  User,
  GraduationCap,
  Target,
  MessageCircle
} from 'lucide-react';
import { apiService, ApiResponse } from '../../lib/api';
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';

interface AdvisorInquiry {
  _id: string;
  personalDetails: {
    name: string;
    email: string;
    phone: string;
    currentEducation: string;
  };
  inquiryDetails: {
    interestedPrograms: string[];
    careerGoals: string;
    specificQuestions: string;
    preferredContactMethod: string;
    urgency: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
}

export function AdvisorInquiriesPage() {
  const [inquiries, setInquiries] = useState<AdvisorInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<AdvisorInquiry | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await apiService.admin.getAdvisorSubmissions() as ApiResponse<AdvisorInquiry[]>;
      
      if (response.success && response.data) {
        setInquiries(response.data);
      } else {
        setError('Failed to fetch advisor inquiry submissions');
      }
    } catch (error: any) {
      console.error('Error fetching advisor inquiries:', error);
      setError(error.message || 'An error occurred while fetching inquiries');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'scheduled': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'closed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary-medium" />
          <span className="ml-2 text-lg">Loading advisor inquiries...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
            Advisor Inquiries
          </h1>
          <p className="text-muted-foreground">
            Manage and respond to advisor consultation requests from prospective students.
          </p>
        </div>
        <Button 
          onClick={fetchInquiries}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
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

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <Card className="border-primary-medium/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary-medium" />
              <div>
                <p className="text-sm text-muted-foreground">Total Inquiries</p>
                <p className={`text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                  {inquiries.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary-medium/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {inquiries.filter(i => i.status?.toLowerCase() === 'pending').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary-medium/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Contacted</p>
                <p className="text-2xl font-bold text-blue-600">
                  {inquiries.filter(i => i.status?.toLowerCase() === 'contacted').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary-medium/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Scheduled</p>
                <p className="text-2xl font-bold text-purple-600">
                  {inquiries.filter(i => i.status?.toLowerCase() === 'scheduled').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary-medium/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {inquiries.filter(i => i.status?.toLowerCase() === 'completed').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inquiries List */}
      <div className="grid gap-4">
        {inquiries.length > 0 ? (
          inquiries.map((inquiry) => (
            <Card key={inquiry._id} className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className={`text-lg ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                      {inquiry.personalDetails.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Inquiry submitted {formatDate(inquiry.createdAt)}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getUrgencyColor(inquiry.inquiryDetails.urgency || 'medium')}>
                      {inquiry.inquiryDetails.urgency || 'Medium'} Priority
                    </Badge>
                    <Badge className={getStatusColor(inquiry.status || 'pending')}>
                      {inquiry.status || 'Pending'}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedInquiry(inquiry)}
                      className="flex items-center gap-1"
                    >
                      <Eye className="h-3 w-3" />
                      View
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary-medium" />
                    <span className="font-medium">Email:</span>
                    <span>{inquiry.personalDetails.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary-medium" />
                    <span className="font-medium">Phone:</span>
                    <span>{inquiry.personalDetails.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-primary-medium" />
                    <span className="font-medium">Preferred Contact:</span>
                    <span>{inquiry.inquiryDetails.preferredContactMethod}</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Current Education:</span>
                    <span className="ml-2">{inquiry.personalDetails.currentEducation}</span>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Interested Programs:</span>
                    <span className="ml-2">{inquiry.inquiryDetails.interestedPrograms?.join(', ') || 'Not specified'}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    <span className="font-medium">Career Goals:</span> {inquiry.inquiryDetails.careerGoals}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-primary-medium/20">
            <CardContent className="p-8 text-center">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Advisor Inquiries</h3>
              <p className="text-muted-foreground">
                No advisor consultation requests have been received yet.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className={IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}>
                    {selectedInquiry.personalDetails.name}
                  </CardTitle>
                  <CardDescription>
                    Advisor inquiry submitted {formatDate(selectedInquiry.createdAt)}
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedInquiry(null)}
                >
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Personal Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                      <p className="text-sm mt-1">{selectedInquiry.personalDetails.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <p className="text-sm mt-1">{selectedInquiry.personalDetails.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Phone</label>
                      <p className="text-sm mt-1">{selectedInquiry.personalDetails.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Current Education</label>
                      <p className="text-sm mt-1">{selectedInquiry.personalDetails.currentEducation}</p>
                    </div>
                  </div>
                </div>

                {/* Inquiry Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">Inquiry Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Interested Programs</label>
                      <div className="mt-1">
                        {selectedInquiry.inquiryDetails.interestedPrograms?.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {selectedInquiry.inquiryDetails.interestedPrograms.map((program, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {program}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">Not specified</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Career Goals</label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-md">
                        <p className="text-sm whitespace-pre-wrap">{selectedInquiry.inquiryDetails.careerGoals}</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Specific Questions</label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-md">
                        <p className="text-sm whitespace-pre-wrap">{selectedInquiry.inquiryDetails.specificQuestions}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Preferred Contact Method</label>
                        <p className="text-sm mt-1">{selectedInquiry.inquiryDetails.preferredContactMethod}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Urgency Level</label>
                        <Badge className={`mt-1 ${getUrgencyColor(selectedInquiry.inquiryDetails.urgency || 'medium')}`}>
                          {selectedInquiry.inquiryDetails.urgency || 'Medium'} Priority
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status and Timestamps */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">Inquiry Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Current Status</label>
                      <Badge className={`mt-1 ${getStatusColor(selectedInquiry.status || 'pending')}`}>
                        {selectedInquiry.status || 'Pending'}
                      </Badge>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Submitted</label>
                      <p className="text-sm mt-1">{formatDate(selectedInquiry.createdAt)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
                      <p className="text-sm mt-1">{formatDate(selectedInquiry.updatedAt)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default AdvisorInquiriesPage;