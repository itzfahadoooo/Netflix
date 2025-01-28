import express from "express";
import cors from "cors"; // Import the cors middleware
import session from "express-session"; // Import express-session

import authRoutes from "./routes/auth.routes.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import movieRoutes from "./routes/movie.routes.js";
import tvRoutes from "./routes/tv.routes.js";
import cookieParser from "cookie-parser";
import { protectRoute } from "./middleware/protectRoute.js";
import searchRoutes from "./routes/search.routes.js";

const app = express();
const PORT = ENV_VARS.PORT;
const FRONTEND_URL = ENV_VARS.FRONTEND_URL;
const JWT_SECRET = ENV_VARS.JWT_SECRET;

app.use(cookieParser());
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
); // Enable CORS for your frontend

app.use(express.json());

// Session management
app.use(session({
  secret: ENV_VARS.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: ENV_VARS.NODE_ENV === "production", // Ensure secure flag is set correctly
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
  }
}));

// API Creation Endpoint
app.get("/", (req, res) => {
  res.send("Express App for Netflix is Running");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",  protectRoute,movieRoutes);
app.use("/api/v1/tv",  protectRoute,tvRoutes);
app.use("/api/v1/search",  protectRoute,searchRoutes);

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);

  connectDB();
});
