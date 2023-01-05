import express from "express";
import authController from "../controllers/auth";
import authMiddleware from "../middlewares/auth";

const router = express.Router();

router
  .get("/", authMiddleware.verifyToken, authController.getAuth)
  .post("/register", authController.register);

export default router;
