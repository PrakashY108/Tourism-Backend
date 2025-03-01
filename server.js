import express from "express";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();

// Use the imported API routes
app.use("/api", apiRoutes);
app.get("/", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ahmedabad Tourism</title>
          <style>
            body {
              background-color: white;
              font-family: Arial, sans-serif;
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              text-align: center;
            }
            
          h1 {
  font-size: 65px;
  color: #333;
  line-height: 1;}
             div {
            background-color: #ccd5e3;
            height: 90%;
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 10px;
          }
          </style>
        </head>
        <body>
        <div>
        <h1>Welcome to Ahmedabad Tourism !!</h1></br>
        </div>
          
        </body>
      </html>
    `);
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
