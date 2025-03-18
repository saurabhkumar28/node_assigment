import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

export const connectDB = async () => {
    await client.connect();
    console.log("MongoDB connected successfully");
    return client.db("node_assignment");
};
