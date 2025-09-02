import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Badge } from '../../components/ui/badge';
import { 
  GraduationCap, 
  AlertCircle,
  Loader2,
  Eye,
  Download,
  RefreshCw,
  Calendar,
  Mail,
  Phone,
  User,
  FileText,
  MapPin
} from 'lucide-react';
import { apiService, ApiResponse } from '../../lib/api';
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';

interface AdmissionSubmission {
  _id: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    nationality: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
  academicInfo: {
    highestEducation: string;
    institution: string;
    graduationYear: string;
    gpa: string;
    fieldOfStudy: string;
  };
  programInfo: {
    interestedProgram: string;
    startDate: string;
    studyMode: string;
    previousApplication: boolean;
  };
  documents: {
    transcript: string;
    recommendation: string;
    personalStatement: string;
    resume: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
}

export function AdmissionFormsPage() {
  const [submissions, setSubmissions] = useState<AdmissionSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<AdmissionSubmission | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await apiService.admin.getAdmissionSubmissions() as ApiResponse<AdmissionSubmission[]>;
      
      if (response.success && response.data) {
        setSubmissions(response.data);
      } else {
        setError('Failed to fetch admission form submissions');
      }
    } catch (error: any) {
      console.error('Error fetching admission submissions:', error);
      setError(error.message || 'An error occurred while fetching submissions');
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
      case 'under_review': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'accepted': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'waitlisted': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getFullName = (personalInfo: AdmissionSubmission['personalInfo']) => {
    return `${personalInfo.firstName} ${personalInfo.lastName}`;
  };

  const getFullAddress = (address: AdmissionSubmission['personalInfo']['address']) => {
    return `${address.city}, ${address.state}, ${address.country}`;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary-medium" />
          <span className="ml-2 text-lg">Loading admission forms...</span>
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
            Admission Applications
          </h1>
          <p className="text-muted-foreground">
            Manage and review admission applications from prospective students.
          </p>
        </div>
        <Button 
          onClick={fetchSubmissions}
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
              <GraduationCap className="h-5 w-5 text-primary-medium" />
              <div>
                <p className="text-sm text-muted-foreground">Total Applications</p>
                <p className={`text-2xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                  {submissions.length}
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
                  {submissions.filter(s => s.status?.toLowerCase() === 'pending').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary-medium/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Under Review</p>
                <p className="text-2xl font-bold text-blue-600">
                  {submissions.filter(s => s.status?.toLowerCase() === 'under_review').length}
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
                <p className="text-sm text-muted-foreground">Accepted</p>
                <p className="text-2xl font-bold text-green-600">
                  {submissions.filter(s => s.status?.toLowerCase() === 'accepted').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary-medium/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Rejected</p>
                <p className="text-2xl font-bold text-red-600">
                  {submissions.filter(s => s.status?.toLowerCase() === 'rejected').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submissions List */}
      <div className="grid gap-4">
        {submissions.length > 0 ? (
          submissions.map((submission) => (
            <Card key={submission._id} className="border-primary-medium/20 hover:border-primary-medium/40 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className={`text-lg ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
                      {getFullName(submission.personalInfo)}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Applied for {submission.programInfo.interestedProgram} • {formatDate(submission.createdAt)}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(submission.status || 'pending')}>
                      {submission.status?.replace('_', ' ') || 'Pending'}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSubmission(submission)}
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
                    <span>{submission.personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary-medium" />
                    <span className="font-medium">Phone:</span>
                    <span>{submission.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary-medium" />
                    <span className="font-medium">Location:</span>
                    <span>{getFullAddress(submission.personalInfo.address)}</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Education:</span>
                    <span className="ml-2">{submission.academicInfo.highestEducation} from {submission.academicInfo.institution}</span>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Start Date:</span>
                    <span className="ml-2">{submission.programInfo.startDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-primary-medium/20">
            <CardContent className="p-8 text-center">
              <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Applications</h3>
              <p className="text-muted-foreground">
                No admission applications have been received yet.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Submission Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className={IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}>
                    {getFullName(selectedSubmission.personalInfo)}
                  </CardTitle>
                  <CardDescription>
                    Application for {selectedSubmission.programInfo.interestedProgram} • {formatDate(selectedSubmission.createdAt)}
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedSubmission(null)}
                >
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                      <p className="text-sm mt-1">{getFullName(selectedSubmission.personalInfo)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <p className="text-sm mt-1">{selectedSubmission.personalInfo.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Phone</label>
                      <p className="text-sm mt-1">{selectedSubmission.personalInfo.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                      <p className="text-sm mt-1">{selectedSubmission.personalInfo.dateOfBirth}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Nationality</label>
                      <p className="text-sm mt-1">{selectedSubmission.personalInfo.nationality}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Address</label>
                      <p className="text-sm mt-1">
                        {selectedSubmission.personalInfo.address.street}<br/>
                        {selectedSubmission.personalInfo.address.city}, {selectedSubmission.personalInfo.address.state} {selectedSubmission.personalInfo.address.zipCode}<br/>
                        {selectedSubmission.personalInfo.address.country}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">Academic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Highest Education</label>
                      <p className="text-sm mt-1">{selectedSubmission.academicInfo.highestEducation}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Institution</label>
                      <p className="text-sm mt-1">{selectedSubmission.academicInfo.institution}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Graduation Year</label>
                      <p className="text-sm mt-1">{selectedSubmission.academicInfo.graduationYear}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">GPA</label>
                      <p className="text-sm mt-1">{selectedSubmission.academicInfo.gpa}</p>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-muted-foreground">Field of Study</label>
                      <p className="text-sm mt-1">{selectedSubmission.academicInfo.fieldOfStudy}</p>
                    </div>
                  </div>
                </div>

                {/* Program Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">Program Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Interested Program</label>
                      <p className="text-sm mt-1">{selectedSubmission.programInfo.interestedProgram}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Preferred Start Date</label>
                      <p className="text-sm mt-1">{selectedSubmission.programInfo.startDate}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Study Mode</label>
                      <p className="text-sm mt-1">{selectedSubmission.programInfo.studyMode}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Previous Application</label>
                      <p className="text-sm mt-1">{selectedSubmission.programInfo.previousApplication ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">Submitted Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Transcript</label>
                      <p className="text-sm mt-1">{selectedSubmission.documents.transcript || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Recommendation Letter</label>
                      <p className="text-sm mt-1">{selectedSubmission.documents.recommendation || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Personal Statement</label>
                      <p className="text-sm mt-1">{selectedSubmission.documents.personalStatement || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Resume/CV</label>
                      <p className="text-sm mt-1">{selectedSubmission.documents.resume || 'Not provided'}</p>
                    </div>
                  </div>
                </div>

                {/* Status and Timestamps */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">Application Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Current Status</label>
                      <Badge className={`mt-1 ${getStatusColor(selectedSubmission.status || 'pending')}`}>
                        {selectedSubmission.status?.replace('_', ' ') || 'Pending'}
                      </Badge>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Submitted</label>
                      <p className="text-sm mt-1">{formatDate(selectedSubmission.createdAt)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
                      <p className="text-sm mt-1">{formatDate(selectedSubmission.updatedAt)}</p>
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

export default AdmissionFormsPage;