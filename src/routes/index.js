import express from "express";
import auth from "./auth";
import productsRoutes from "./products";
import usersRoutes from "./users";
import shopsRoutes from "./shops";

const router = express.Router();

router
  .use("/products", productsRoutes)
  .use("/users", usersRoutes)
  .use("/shops", shopsRoutes)
  .use("/auth", auth);

export default router;
