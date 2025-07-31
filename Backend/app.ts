import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./src/routes/product.routes";
import contactRoutes from "./src/routes/contact.routes";
import cartRoutes from "./src/routes/cart.routes";
import authRoutes from "./src/routes/auth.routes";
import ordersRoutes from "./src/routes/orders.routes";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL || "", {
    dbName: "homeburger",
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

const allowedOrigins = ["http://localhost:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `El CORS para origen ${origin} no está permitido.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use("/products", productRoutes);
app.use("/contact", contactRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);
app.use("/orders", ordersRoutes);


app.get("/", (_req, res) => res.send("API funcionando"));

export default app;
