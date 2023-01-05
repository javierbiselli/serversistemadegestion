import express from "express";
import productsController from "../controllers/products";

const router = express.Router();

router
  .get("/", productsController.getProducts)
  .post("/", productsController.createProduct)
  .get("/:id", productsController.getProductById)
  .delete("/:id", productsController.deleteProduct)
  .put("/:id", productsController.updateProduct);

export default router;
