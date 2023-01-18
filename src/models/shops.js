import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
  shopName: { type: String, required: true },
  shopAddress: { type: String, required: true },
  shopTel: { type: String, required: true },
  shopDescription: { type: String, required: false },
  shopSchedule: { type: String, required: true },
  shopExtraInfo: { type: String, required: false },
  isActive: { type: Boolean, required: true },
  shopIcon: { type: String, required: false },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Shop", shopSchema);
