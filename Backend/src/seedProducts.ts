import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./models/product.model";
import { burgers } from "./data/Menu";

dotenv.config();

async function seedProducts() {
  try {
    await mongoose.connect(process.env.DB_URL || "", { dbName: "homeburger" });
    console.log("Conectado a MongoDB");

    await Product.deleteMany({});
    console.log("Colección products vaciada");

    await Product.insertMany(burgers);
    console.log("Productos insertados correctamente");

    await mongoose.disconnect();
    console.log("Desconectado de MongoDB");
    process.exit(0);
  } catch (error) {
    console.error("Error cargando productos:", error);
    process.exit(1);
  }
}

seedProducts();
