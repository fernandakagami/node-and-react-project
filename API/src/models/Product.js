import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  value: { type: Number, required: true },
  score: { type: Number, required: true },
  file: { data: Buffer, contentType: String },
  path: { type: String }
}, { versionKey: false });

const product = mongoose.model("products", productSchema);

export default product;