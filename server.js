import express from "express";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();

// Use the imported API routes
app.use("/api", apiRoutes);

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
