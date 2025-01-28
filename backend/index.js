import express from "express";
import cors from "cors"; // Import the cors middleware

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

app.use(cookieParser());
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
); // Enable CORS for your frontend

app.use(express.json());

// API Creation Endpoint
app.get("/", (req, res) => {
  res.send("Express App for Netflix is Running");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",  movieRoutes);
app.use("/api/v1/tv",  tvRoutes);
app.use("/api/v1/search",  searchRoutes);

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);

  connectDB();
});
