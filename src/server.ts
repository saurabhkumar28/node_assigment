import express from "express";
import { connectDB } from "./config/db";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const PORT = 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error("Failed to connect to MongoDB:", err);
});

