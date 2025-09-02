# IMAS Backend API Server

A RESTful API server built with Node.js, Express, MongoDB, and JWT authentication for the IMAS (Institute of Management and Advanced Studies) website.

## Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **Form Handling**: API endpoints for contact forms, admission applications, and advisor inquiries
- **Admin Dashboard**: Administrative routes for managing submissions and users
- **Email Notifications**: Automated email notifications for form submissions
- **Security**: Rate limiting, CORS protection, input validation, and security headers
- **Database**: MongoDB with Mongoose ODM for data modeling

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Email**: Nodemailer
- **Validation**: Express-validator
- **Security**: Helmet, CORS, Rate limiting

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation

1. **Clone the repository and navigate to server directory**:
   ```bash
   cd server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   - Copy `.env.example` to `.env`
   - Update the environment variables with your actual values:
   ```bash
   cp .env.example .env
   ```

4. **Configure Environment Variables**:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   CLIENT_URL=http://localhost:3000
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/imas_db
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=7d
   
   # Email Configuration (Gmail example)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=IMAS <your-email@gmail.com>
   
   # Admin Configuration
   ADMIN_EMAIL=admin@imas.edu
   ADMIN_PASSWORD=secure-admin-password
   
   # File Upload
   MAX_FILE_SIZE=5242880
   UPLOAD_PATH=uploads/
   
   # Security
   BCRYPT_SALT_ROUNDS=12
   ```

## Usage

### Development

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

### API Endpoints

#### Authentication Routes (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /profile` - Get user profile (protected)
- `PUT /profile` - Update user profile (protected)
- `POST /change-password` - Change password (protected)

#### Form Routes (`/api/forms`)
- `POST /contact` - Submit contact form
- `POST /admission` - Submit admission application
- `POST /advisor-inquiry` - Submit advisor inquiry
- `GET /submission/:id` - Get submission status

#### Admin Routes (`/api/admin`)
- `GET /dashboard` - Dashboard statistics (admin/staff)
- `GET /contact-forms` - Get all contact forms (admin/staff)
- `GET /admission-forms` - Get all admission applications (admin/staff)
- `GET /advisor-inquiries` - Get all advisor inquiries (admin/staff)
- `PUT /contact-forms/:id` - Update contact form (admin/staff)
- `PUT /admission-forms/:id` - Update admission application (admin/staff)
- `GET /users` - Get all users (admin only)
- `PUT /users/:id` - Update user (admin only)

#### Utility Routes
- `GET /api/health` - Health check
- `GET /api/status` - API status and available routes

### Request Examples

#### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/forms/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "subject": "General Inquiry",
    "message": "I would like to know more about your programs."
  }'
```

#### User Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

## Database Models

### User
- Personal information and authentication
- Role-based access control (admin, staff, user)
- Password hashing with bcrypt

### ContactForm
- Contact form submissions
- Status tracking and admin notes
- Priority and assignment features

### AdmissionForm
- Comprehensive admission applications
- Educational and work experience tracking
- Application status and interview scheduling

### AdvisorInquiry
- Advisor consultation requests
- Program interest and inquiry type
- Follow-up scheduling and notes

## Security Features

- **Rate Limiting**: Different limits for general, auth, and form routes
- **CORS Protection**: Configurable allowed origins
- **Input Validation**: Comprehensive validation using express-validator
- **Password Security**: Bcrypt hashing with configurable salt rounds
- **JWT Security**: Secure token generation and validation
- **Security Headers**: Helmet.js for security headers
- **Error Handling**: Secure error responses without sensitive data exposure

## Email Notifications

The server automatically sends email notifications for:
- Contact form submissions (to admin and user confirmation)
- Admission applications (to admin and applicant confirmation)
- Advisor inquiries (to admin and inquirer confirmation)

## Error Handling

The API uses consistent error response format:
```json
{
  "success": false,
  "message": "Error description",
  "error": "ERROR_CODE",
  "details": ["Detailed error information"]
}
```

## Development

### Project Structure
```
server/
├── config/
│   └── database.js          # Database configuration
├── middleware/
│   └── auth.js              # Authentication middleware
├── models/
│   ├── User.js              # User model
│   ├── ContactForm.js       # Contact form model
│   ├── AdmissionForm.js     # Admission form model
│   └── AdvisorInquiry.js    # Advisor inquiry model
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── forms.js             # Form submission routes
│   └── admin.js             # Admin routes
├── services/
│   └── emailService.js      # Email notification service
├── .env.example             # Environment variables template
├── package.json             # Dependencies and scripts
├── server.js                # Main server file
└── README.md                # This file
```

### Adding New Features

1. **New Model**: Create in `models/` directory
2. **New Routes**: Add to appropriate route file or create new one
3. **New Middleware**: Add to `middleware/` directory
4. **New Service**: Add to `services/` directory

## Production Deployment

1. **Environment**: Set `NODE_ENV=production`
2. **Database**: Use MongoDB Atlas or production MongoDB instance
3. **Email**: Configure production email service
4. **Security**: Use strong JWT secrets and admin passwords
5. **HTTPS**: Deploy behind reverse proxy with SSL/TLS
6. **Monitoring**: Implement logging and monitoring solutions

## Contributing

1. Follow existing code style and patterns
2. Add appropriate error handling
3. Include input validation for new endpoints
4. Update documentation for new features
5. Test thoroughly before deployment

## License

This project is part of the IMAS website system.