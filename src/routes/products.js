import express from "express";
import productsController from "../controllers/products";
import authMiddleware from "../middlewares/auth";

const router = express.Router();

router
  .get("/", productsController.getProducts)
  .post("/", authMiddleware.verifyToken, productsController.createProduct)
  .delete("/:id", authMiddleware.verifyToken, productsController.deleteProduct)
  .put("/:id", authMiddleware.verifyToken, productsController.updateProduct)
  .get("/search", productsController.searchProducts);

export default router;
