import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  firebaseUid: { type: String, required: true },
  shopName: { type: String, required: true },
  shopAddress: { type: String, required: true },
  shopTel: { type: String, required: true },
  shopDescription: { type: String, required: false },
  shopSchedule: { type: String, required: true },
  shopExtraInfo: { type: String, required: false },
});

export default mongoose.model("User", userSchema);
