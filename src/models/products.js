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
  discountValidDate: { type: String, required: false },
  stock: { type: Number, required: false },
  hasPromotion: { type: Boolean, required: false },
  promotionMessage: { type: String, required: false },
  promotionValidDate: { type: String, required: false },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Product", productsSchema);
