import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  description: { type: String, required: true },
  category: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hasDiscount: { type: Boolean, required: true },
  discountPercentage: { type: Number, required: false },
});

export default mongoose.model("Product", productsSchema);
