import express from "express";
import authMiddleware from "../middlewares/auth";
import auth from "./auth";
import productsRoutes from "./products";
import usersRoutes from "./users";

const router = express.Router();

router
  .use("/products", authMiddleware.verifyToken, productsRoutes)
  .use("/users", authMiddleware.verifyToken, usersRoutes)
  .use("/auth", auth);

export default router;
