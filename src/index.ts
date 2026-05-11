import express from "express";
import mongoose from "mongoose";

const mongoUrl =
  process.env.MONGODB_URL ?? "mongodb://localhost:27017/waiter-app";

mongoose
  .connect(mongoUrl)
  .then(() => {
    const app = express();
    const port = Number(process.env.PORT ?? 3001);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao mongodb:", err);
  });
