// API Service Layer for IMAS Client

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Types for API responses
export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
}

export interface AuthResponse {
    success: boolean;
    token: string;
    user: {
        id: string;
        email: string;
        role: string;
    };
}

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export interface AdmissionFormData {
  // Personal Information
  name: string;
  email: string;
  phone: string;
  alternatePhone?: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  
  // Address Information
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  
  // Program Information
  program: string;
  preferredBatch: '2025-2027' | '2026-2028';
  
  // Educational Background
  education: {
    graduation: {
      degree: string;
      university: string;
      percentage: number;
      yearOfPassing: number;
    };
    postGraduation?: {
      degree?: string;
      university?: string;
      percentage?: number;
      yearOfPassing?: number;
    };
  };
  
  // Work Experience
  workExperience: {
    totalExperience: number;
    currentCompany?: string;
    currentDesignation?: string;
    currentSalary?: number;
    industry?: string;
    workDetails?: string;
  };
  
  // Additional Information
  message?: string;
}

export interface AdvisorInquiryData {
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
}

// Token management
class TokenManager {
    private static readonly TOKEN_KEY = 'imas_auth_token';

    static getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    static setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    static removeToken(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    static isAuthenticated(): boolean {
        const token = this.getToken();
        if (!token) return false;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        } catch {
            return false;
        }
    }
}

// HTTP Client with error handling
class ApiClient {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
        const url = `${this.baseURL}${endpoint}`;
        const token = TokenManager.getToken();

        const config: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` }),
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                const error = new Error(data.message || `HTTP error! status: ${response.status}`) as any;
                error.response = { data, status: response.status };
                throw error;
            }

            return data;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // GET request
    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { method: 'GET' });
    }

    // POST request
    async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    // PUT request
    async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    // DELETE request
    async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { method: 'DELETE' });
    }

    // POST with FormData (for file uploads)
    async postFormData<T>(endpoint: string, formData: FormData): Promise<ApiResponse<T>> {
        const url = `${this.baseURL}${endpoint}`;
        const token = TokenManager.getToken();

        const config: RequestInit = {
            method: 'POST',
            headers: {
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            body: formData,
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`);
            }

            return data;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }
}

// Create API client instance
const apiClient = new ApiClient(API_BASE_URL);

// API Service functions
export const apiService = {
    // Health check
    health: () => apiClient.get('/health'),

    // Authentication
    auth: {
        login: (email: string, password: string) =>
            apiClient.post<AuthResponse>('/api/auth/login', { email, password }),

        register: (email: string, password: string, role?: string) =>
            apiClient.post<AuthResponse>('/api/auth/register', { email, password, role }),

        logout: () => {
            TokenManager.removeToken();
            return Promise.resolve({ success: true, message: 'Logged out successfully' });
        },

        isAuthenticated: () => TokenManager.isAuthenticated(),

        getToken: () => TokenManager.getToken(),
    },

    // Contact Form
    contact: {
        submit: (data: ContactFormData) =>
            apiClient.post('/api/forms/contact', data),
    },

    // Admission Form
    admission: {
        submit: (data: AdmissionFormData) => {
            // Generate unique application ID
            const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
            
            // Prepare data in server format
            const submissionData = {
                applicationId,
                name: data.name,
                email: data.email,
                phone: data.phone,
                alternatePhone: data.alternatePhone,
                dateOfBirth: data.dateOfBirth,
                gender: data.gender,
                address: data.address,
                program: data.program,
                preferredBatch: data.preferredBatch,
                education: data.education,
                workExperience: data.workExperience,
                message: data.message
            };

            return apiClient.post('/api/forms/admission', submissionData);
        },
    },

    // Advisor Inquiry
    advisor: {
        submit: (data: AdvisorInquiryData) =>
            apiClient.post('/api/forms/advisor-inquiry', data),
    },

    // Admin routes (protected)
    admin: {
        // Contact form submissions
        getContactSubmissions: () =>
            apiClient.get('/api/admin/contact-submissions'),

        getContactSubmission: (id: string) =>
            apiClient.get(`/api/admin/contact-submissions/${id}`),

        updateContactSubmission: (id: string, data: any) =>
            apiClient.put(`/api/admin/contact-submissions/${id}`, data),

        deleteContactSubmission: (id: string) =>
            apiClient.delete(`/api/admin/contact-submissions/${id}`),

        // Admission form submissions
        getAdmissionSubmissions: () =>
            apiClient.get('/api/admin/admission-submissions'),

        getAdmissionSubmission: (id: string) =>
            apiClient.get(`/api/admin/admission-submissions/${id}`),

        updateAdmissionSubmission: (id: string, data: any) =>
            apiClient.put(`/api/admin/admission-submissions/${id}`, data),

        deleteAdmissionSubmission: (id: string) =>
            apiClient.delete(`/api/admin/admission-submissions/${id}`),

        // Advisor inquiry submissions
        getAdvisorSubmissions: () =>
            apiClient.get('/api/admin/advisor-submissions'),

        getAdvisorSubmission: (id: string) =>
            apiClient.get(`/api/admin/advisor-submissions/${id}`),

        updateAdvisorSubmission: (id: string, data: any) =>
            apiClient.put(`/api/admin/advisor-submissions/${id}`, data),

        deleteAdvisorSubmission: (id: string) =>
            apiClient.delete(`/api/admin/advisor-submissions/${id}`),
    },
};

// Export token manager for direct access
export { TokenManager };

// Export default
export default apiService;