import express from "express";
import shopsController from "../controllers/shops";
import authMiddleware from "../middlewares/auth";

const router = express.Router();

router
  .get("/", shopsController.getShops)
  .get("/:id", shopsController.getShopById)
  .post("/", authMiddleware.verifyToken, shopsController.createShop)
  .put("/:id", shopsController.updateShop);

export default router;
