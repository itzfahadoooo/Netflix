import express from "express";

import authRoutes from "./routes/auth.routes.js";
import { ENV_VARS } from "./config/envVars.js";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import movieRoutes from "./routes/movie.routes.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
  connectDB();
});
