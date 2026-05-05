<div align="center">

# 🌴 HD Resorts

### Sri Lanka Travel Discovery & Booking Platform

**A production-ready, full-stack travel platform combining seamless cross-platform experience with powerful multi-role management system.**

</div>

---

## Overview

**HD Resorts** is a comprehensive travel discovery and booking platform designed for Sri Lanka. It combines a tourist-friendly mobile and web interface with a powerful backend system, enabling seamless exploration and booking of:

- 🏡 **Homestays** - Local accommodations
- 🧑‍🏫 **Guides** - Expert travel guides
- 🎯 **Activities** - Tours and adventures
- 🎪 **Events** - Local celebrations and gatherings
- 🗺️ **Attractions** - Community-driven discoveries
- ⭐ **Reviews** - Verified user feedback

### Why HD Resorts?

| Aspect | Benefit |
|--------|---------|
| **Cross-Platform** | iOS, Android, Web from single codebase |
| **Enterprise-Ready** | Role-based access, audit logs, scalable architecture |
| **Developer-Friendly** | RESTful API, comprehensive documentation, modern stack |
| **Production-Proven** | Used by active community, comprehensive testing |
| **Secure** | JWT authentication, OTP verification, encrypted passwords |
| **Performant** | CDN integration, optimized queries, caching ready |

## Key Features

### 🎯 Tourist & User Features

- ✅ **Cross-Platform Access** - Responsive web, native iOS/Android apps
- ✅ **Discovery** - Browse homestays, guides, activities, events, attractions
- ✅ **Smart Search** - Filter by location, price, ratings, availability
- ✅ **Secure Bookings** - End-to-end booking system with confirmation
- ✅ **Review System** - Rate and review experiences with photo attachments
- ✅ **Personalized Profile** - Save favorites, manage bookings, view history
- ✅ **Real-time Notifications** - Order updates, reminders, recommendations

### 👨‍💼 Provider & Host Features

- ✅ **Dedicated Dashboard** - Self-service management portal
- ✅ **Listing Management** - Create and manage multiple listings
- ✅ **Booking Management** - Accept/reject/track reservations
- ✅ **Analytics** - Track bookings, revenue, popularity trends
- ✅ **Image Upload** - Cloudinary integration for fast media delivery
- ✅ **Review Management** - Respond to customer feedback
- ✅ **Profile Verification** - Multi-step verification process

### 🛡️ Admin Features

- ✅ **User Management** - Approve/reject providers, manage disputes
- ✅ **Content Moderation** - Review listings, images, reviews
- ✅ **Analytics Dashboard** - Platform-wide statistics and trends
- ✅ **Reporting** - Generate compliance and financial reports
- ✅ **System Configuration** - Manage categories, pricing, rules

---

## Technology Stack

### Backend

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Node.js** | Runtime | 20.x |
| **Express.js** | Web framework | 5.x |
| **MongoDB** | Database | 4.0+ |
| **Mongoose** | ODM | 9.x |
| **JWT** | Authentication | 9.x |
| **Cloudinary** | Media storage | 1.x |
| **Nodemailer** | Email service | 8.x |
| **Multer** | File upload | 2.x |
| **CORS** | Cross-origin requests | 2.8.x |
| **bcryptjs** | Password hashing | 3.x |

### Frontend

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React Native** | Mobile framework | 0.81.x |
| **React** | UI library | 19.x |
| **Expo** | Development platform | 54.x |
| **Expo Router** | Navigation | 6.x |
| **Axios** | HTTP client | 1.15.x |
| **TypeScript** | Type safety | Latest |
| **React Navigation** | App navigation | 7.x |
| **Async Storage** | Local persistence | 2.x |

### DevOps & Deployment

| Service | Purpose |
|---------|---------|
| **Render** | Backend hosting (API) |
| **Vercel** | Frontend hosting (PWA) |
| **MongoDB Atlas** | Cloud database |
| **Cloudinary** | Image CDN |
| **GitHub** | Version control & CI/CD |
| **GitHub Actions** | Automated testing & deployment |

```
project-root/
├── backend/
│   ├── src/
│   │   ├── config/              # MongoDB connection, Cloudinary config
│   │   ├── controllers/         # 8 HTTP controllers (auth, homestay, event, etc.)
│   │   ├── middleware/          # JWT auth, Role authorization, Multer uploads
│   │   ├── models/              # Mongoose schemas (User, Event, Activity, etc.)
│   │   ├── routes/              # Express API routing
│   │   ├── utils/               # Nodemailer SMTP setup, Helpers
│   │   └── server.js            # Express application entry point
│   ├── seedEvents.js            # Database seeder utility
│   ├── .env                     # Backend secrets
│   └── package.json
└── mobile/
    ├── app/                     # Expo Router (File-based routing)
    │   ├── (auth)/              # Login, Register, Forgot Password flows
    │   ├── (tabs)/              # Main App screens, Dashboards, Discovery feeds
    │   └── _layout.tsx          # Global navigation stack
    ├── src/
    │   ├── components/          # Reusable UI (ReviewList, Modals, Forms)
    │   ├── config/              # API Base URLs
    │   └── services/            # Axios API call wrappers (authService, reviewService)
    ├── app.json                 # Expo configuration
    └── package.json
```

### Layer Breakdown

| Layer | Packages/Folders | Responsibility |
|---|---|---|
| **Security** | `middleware`, `authService` | JWT signing/verification, OTP flow, Route guards |
| **Routing** | `routes`, `app/(tabs)` | Express endpoints (Backend) & Expo file-based routing (Frontend) |
| **Service** | `controllers`, `services` | Business logic, API communication, email dispatch |
| **Persistence**| `models` | Mongoose Schemas — MongoDB data modeling |
| **Storage** | `multer`, `Cloudinary` | Handling multipart/form-data and remote image hosting |
| **View** | `app/`, `components/` | React Native UI components, Stylesheets |

---

## Domain Model (Key Entities)

```
User ──< Homestay ──< Review
 │           │
 ├──< Guide  ├──< Attraction
 ├──< Event  ├──< Activity
 └──< Token (OTP)
```

---

## Technology Stack

| Concern | Technology |
|---|---|
| Frontend | React Native, Expo, Expo Router |
| Backend | Node.js, Express.js |
| Persistence | MongoDB (Mongoose ODM) |
| File Storage | Cloudinary |
| Security | JWT (JSON Web Tokens), Bcryptjs |
| Email | Nodemailer (SMTP) |
| HTTP Client | Axios |
| Styling | React Native StyleSheet |

---

## Configuration

All secrets are supplied via **environment variables** — no credentials are committed to the repository.

### Backend (`backend/.env`)

| Variable | Purpose |
|---|---|
| `PORT` | API server port (e.g., `5000`) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for signing JWTs |
| `JWT_EXPIRE` | Token expiration time (e.g., `30d`) |
| `SMTP_HOST` | SMTP host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (e.g. `587`) |
| `SMTP_EMAIL` | Sender email address |
| `SMTP_PASSWORD` | SMTP app password |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary account name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET`| Cloudinary API secret |

### Frontend (`mobile/src/config/apiConfig.ts`)

Update the `API_BASE_URL` to point to your running backend (e.g., `http://localhost:5000` or your Render deployment URL).

---

## Quick Start

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or **yarn** 4.x
- **MongoDB** (local or Atlas)
- **Git**

### 1. Clone Repository

```bash
git clone https://github.com/itssxnu/Mobile-App.git
cd Mobile-App
```

### 2. Backend Setup

```bash
cd backend

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env  # or use your preferred editor

# Install dependencies
npm install

# Start development server
npm run dev
```

**Required Environment Variables:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hd-resorts
JWT_SECRET=your_secret_key_here_32_chars_min
PORT=5000
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

### 3. Mobile/Web Setup

```bash
cd mobile

# Copy environment file
cp .env.example .env.local

# Edit .env.local
nano .env.local

# Install dependencies
npm install

# Start development server
npm start

# For web specifically
npm run web

# For iOS
npm run ios

# For Android
npm run android
```

### 4. Access Application

- **API Endpoint**: `http://localhost:5000`
- **Web App**: `http://localhost:3000` or `http://localhost:8081`
- **API Health Check**: `http://localhost:5000/`

---

## Project Structure

```
Mobile-App/
├── backend/                          # Express API Server
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js                 # MongoDB connection
│   │   │   └── cloudinaryConfig.js   # Cloudinary setup
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── homestayController.js
│   │   │   ├── guideController.js
│   │   │   ├── activityController.js
│   │   │   ├── eventController.js
│   │   │   ├── attractionController.js
│   │   │   └── reviewController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Homestay.js
│   │   │   ├── Guide.js
│   │   │   ├── Activity.js
│   │   │   ├── Event.js
│   │   │   ├── Attraction.js
│   │   │   └── Review.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── homestayRoutes.js
│   │   │   ├── guideRoutes.js
│   │   │   ├── activityRoutes.js
│   │   │   ├── eventRoutes.js
│   │   │   ├── attractionRoutes.js
│   │   │   └── reviewRoutes.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   └── [upload middlewares]
│   │   ├── uploads/
│   │   └── utils/
│   ├── package.json
│   ├── server.js                     # Entry point
│   └── .env                          # Environment variables
│
├── mobile/                           # React Native/Expo App
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── (auth)/                   # Auth flows
│   │   └── (tabs)/                   # Tab navigation
│   ├── src/
│   │   ├── components/
│   │   ├── config/
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   └── vercel.json
│
├── README.md                         # This file
├── DEPLOYMENT.md                     # Deployment guide
├── .gitignore
├── .env.example
├── render.yaml
└── vercel.json
```

---

## API Reference

### Authentication

**Register User**
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe",
  "role": "user"
}
```

**Login**
```http
POST /api/auth/login

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Verify OTP**
```http
POST /api/auth/verify-otp

{
  "email": "user@example.com",
  "otp": "123456"
}
```

### Homestays

**Get All Homestays**
```http
GET /api/homestays?page=1&limit=10&location=colombo&priceMax=10000
```

**Get Homestay Details**
```http
GET /api/homestays/:id
```

**Create Homestay** (Provider only)
```http
POST /api/homestays
Authorization: Bearer {token}
```

### Reviews

**Submit Review**
```http
POST /api/reviews
Authorization: Bearer {token}
```

**Get Reviews**
```http
GET /api/reviews?serviceType=homestay&serviceId=id
```

---

## Deployment

For complete deployment instructions to **Render** and **Vercel**, see **[DEPLOYMENT.md](./DEPLOYMENT.md)**

Quick summary:
- **Backend**: Deploy to Render (auto-deploy from main branch)
- **Frontend**: Deploy to Vercel (auto-deploy from main branch)
- **Database**: MongoDB Atlas (free tier available)

---

## Contributing

We welcome contributions! Here's how:

### 1. Fork & Clone
```bash
git clone https://github.com/YOUR_USERNAME/Mobile-App.git
cd Mobile-App
```

### 2. Create Feature Branch
```bash
git checkout -b feature/amazing-feature
```

### 3. Make Changes
- Follow existing code style
- Add meaningful comments
- Test thoroughly

### 4. Commit & Push
```bash
git add .
git commit -m "Add: Amazing feature"
git push origin feature/amazing-feature
```

### 5. Create Pull Request
- Describe changes clearly
- Link related issues

### Code Standards
- **JavaScript/TypeScript**: Use ESLint
- **Naming**: camelCase for variables, PascalCase for components
- **Comments**: JSDoc for complex functions
- **Testing**: Aim for 80% coverage

---

## Performance Optimization

### Backend
- Database query indexing
- Gzip compression
- Rate limiting on endpoints
- CDN for static assets (Cloudinary)

### Frontend
- Code splitting with dynamic imports
- Image optimization via Cloudinary
- Lazy loading for lists
- Local caching with Async Storage

---

## Security

### Implementation

- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Password Hashing** - bcryptjs with salt rounds
- ✅ **OTP Verification** - Multi-factor auth support
- ✅ **CORS Protection** - Restricted origin access
- ✅ **HTTPS** - All production endpoints
- ✅ **Environment Variables** - No hardcoded secrets

### Best Practices

- Rotate JWT_SECRET regularly
- Use strong email passwords
- Keep dependencies updated
- Enable branch protection on main

---

## Troubleshooting

### Backend Issues

**"Cannot connect to MongoDB"**
```bash
# Check connection string
echo $MONGODB_URI

# Verify MongoDB Atlas IP whitelist
```

**"Port 5000 already in use"**
```bash
PORT=5001 npm start
```

### Frontend Issues

**"Cannot reach API"**
```bash
# Check REACT_APP_API_URL
echo $REACT_APP_API_URL

# Ensure backend is running
curl http://localhost:5000/
```

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

---<div align="center">
  <sub>Built with the MERN Stack, Expo, and a passion for travel discovery.</sub>
</div>
