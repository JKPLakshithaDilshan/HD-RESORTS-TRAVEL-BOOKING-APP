/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * 🏨 HD Resorts - Travel Booking App
 * 
 * Full-stack travel discovery and booking platform
 * Backend API Server (Express.js + MongoDB)
 * 
 * Features:
 *  • Homestay Management & Booking
 *  • Local Guide Services
 *  • Activities & Tours
 *  • Event Discovery & Registration
 *  • Attraction Exploration
 *  • Community Reviews & Ratings
 *  • Multi-role System (Tourist, Provider, Admin)
 * 
 * Version: 1.0.0
 * ═══════════════════════════════════════════════════════════════════════════════
 */

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const app = express();

// ═══════════════════════════════════════════════════════════════════════════════
// 📦 INITIALIZATION
// ═══════════════════════════════════════════════════════════════════════════════

// Connect to MongoDB
connectDB();

// ═══════════════════════════════════════════════════════════════════════════════
// 🔧 MIDDLEWARE
// ═══════════════════════════════════════════════════════════════════════════════

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL_PRODUCTION, /\.vercel\.app$/] 
    : '*',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Serve uploaded files statically (multer standard)
app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));

// ═══════════════════════════════════════════════════════════════════════════════
// 🛣️  API ROUTES - Travel Booking Services
// ═══════════════════════════════════════════════════════════════════════════════

// Authentication & User Management
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/users", require("./src/routes/userRoutes"));

// Travel Services & Booking
app.use("/api/homestays", require("./src/routes/homestayRoutes"));      // Local accommodations
app.use("/api/guides", require("./src/routes/guideRoutes"));            // Travel guides
app.use("/api/activities", require("./src/routes/activityRoutes"));     // Tours & activities
app.use("/api/events", require("./src/routes/eventRoutes"));            // Local events
app.use("/api/attractions", require("./src/routes/attractionRoutes"));  // Hidden gems

// Community & Feedback
app.use("/api/reviews", require("./src/routes/reviewRoutes"));          // Ratings & reviews

// ═══════════════════════════════════════════════════════════════════════════════
// 📊 HEALTH CHECK & STATUS
// ═══════════════════════════════════════════════════════════════════════════════

// API Health Check
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "HD Resorts - Travel Booking API",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    message: "Welcome to HD Resorts Travel Booking Platform API",
    endpoints: {
      auth: "/api/auth",
      users: "/api/users",
      homestays: "/api/homestays",
      guides: "/api/guides",
      activities: "/api/activities",
      events: "/api/events",
      attractions: "/api/attractions",
      reviews: "/api/reviews"
    }
  });
});

// ═══════════════════════════════════════════════════════════════════════════════
// ⚠️  ERROR HANDLING
// ═══════════════════════════════════════════════════════════════════════════════

// 404 - Route Not Found
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
    path: req.path,
    method: req.method,
    availableEndpoints: [
      "/api/auth",
      "/api/users",
      "/api/homestays",
      "/api/guides",
      "/api/activities",
      "/api/events",
      "/api/attractions",
      "/api/reviews"
    ]
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("🚨 Global Error:", err);
  
  if (err instanceof require('multer').MulterError) {
    return res.status(400).json({
      status: "error",
      message: `Upload error: ${err.message}`,
      type: "UPLOAD_ERROR"
    });
  }
  
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
    timestamp: new Date().toISOString(),
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  });
});

// ═══════════════════════════════════════════════════════════════════════════════
// 🚀 START SERVER
// ═══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════════
// 🚀 START SERVER
// ═══════════════════════════════════════════════════════════════════════════════

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, "0.0.0.0", () => {
  console.log("\n");
  console.log("╔════════════════════════════════════════════════════════════════╗");
  console.log("║                                                                ║");
  console.log("║        🏨 HD RESORTS - TRAVEL BOOKING APP API SERVER          ║");
  console.log("║                                                                ║");
  console.log("║        Version: 1.0.0                                          ║");
  console.log(`║        Environment: ${NODE_ENV.toUpperCase().padEnd(45)}║`);
  console.log(`║        Server: http://localhost:${PORT}${" ".repeat(40 - PORT.toString().length)}║`);
  console.log("║                                                                ║");
  console.log("║        Features:                                               ║");
  console.log("║        ✓ Homestay Booking    ✓ Event Discovery                ║");
  console.log("║        ✓ Local Guides        ✓ Community Reviews              ║");
  console.log("║        ✓ Activities & Tours  ✓ Attractions Explorer           ║");
  console.log("║                                                                ║");
  console.log("║        API Endpoints:                                          ║");
  console.log("║        • /api/auth       - Authentication & Registration      ║");
  console.log("║        • /api/users      - User Management                    ║");
  console.log("║        • /api/homestays  - Accommodation Listings             ║");
  console.log("║        • /api/guides     - Travel Guide Services              ║");
  console.log("║        • /api/activities - Tours & Activities                 ║");
  console.log("║        • /api/events     - Event Discovery                    ║");
  console.log("║        • /api/attractions- Hidden Gems Explorer               ║");
  console.log("║        • /api/reviews    - Ratings & Feedback                 ║");
  console.log("║                                                                ║");
  console.log("║        Status: 🟢 RUNNING                                      ║");
  console.log("║                                                                ║");
  console.log("╚════════════════════════════════════════════════════════════════╝");
  console.log("\n");
  console.log(`📍 API Health Check: http://localhost:${PORT}/`);
  console.log(`📚 Documentation: See README.md for full API documentation`);
  console.log(`⚙️  Environment: ${NODE_ENV}`);
  console.log("\n");
});