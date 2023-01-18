import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  firebaseUid: { type: String, required: true },
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: false,
  },
});

export default mongoose.model("User", userSchema);
