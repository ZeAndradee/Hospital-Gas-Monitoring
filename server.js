import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
    return;
  }
  console.log(`Server is running on port ${PORT}`);
});
