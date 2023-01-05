import express from "express";
import productsRoutes from "./products";
import auth from "./auth";
import usersRoutes from "./users";

const router = express.Router();

router
  .use("/products", productsRoutes)
  .use("/users", usersRoutes)
  .use("/auth", auth);

export default router;
