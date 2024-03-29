import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  description: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: false },
  isActive: { type: Boolean, required: true },
  hasDiscount: { type: Boolean, required: true },
  discountPercentage: { type: Number, required: false },
  discountValidDate: { type: String, required: false },
  stock: { type: Number, required: true },
  hasPromotion: { type: Boolean, required: false },
  promotionMessage: { type: String, required: false },
  promotionValidDate: { type: String, required: false },
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },
  hasStar: { type: Boolean, required: true },
  keywords: [
    {
      type: String,
      required: true,
    },
  ],
});

export default mongoose.model("Product", productsSchema);
