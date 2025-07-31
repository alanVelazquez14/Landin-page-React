import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String },
    categoria: { type: String },
    img: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Product = model("Product", productSchema);
