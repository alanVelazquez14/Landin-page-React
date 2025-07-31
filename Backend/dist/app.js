"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const cart_routes_1 = __importDefault(require("./routes/cart.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const orders_routes_1 = __importDefault(require("./routes/orders.routes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default
    .connect(process.env.DB_URL || "", {
    dbName: "homeburger",
})
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.error("Error al conectar a MongoDB:", err));
const allowedOrigins = ["http://localhost:5173"];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `El CORS para origen ${origin} no está permitido.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
}));
app.use("/products", product_routes_1.default);
app.use("/contact", contact_routes_1.default);
app.use("/cart", cart_routes_1.default);
app.use("/auth", auth_routes_1.default);
app.use("/orders", orders_routes_1.default);
app.get("/", (_req, res) => res.send("API funcionando"));
exports.default = app;
