import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello Tourism!! ");
});
app.get("/test", (req, res) => {
  res.status(200).send("Testing   ");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
