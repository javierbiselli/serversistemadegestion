import express from "express";
import router from "./routes/index";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(cors());

app.use(express.json());

dotenv.config();

const port = process.env.PORT || 3000;
const URL = process.env.DATABASE_URL;

mongoose.connect(URL, (error) => {
  if (error) {
    console.log("Database error: ", error);
  } else {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  }
});

app.get("/", async (req, res) => {
  res.send("olas");
});

app.use(router);

export default app;
