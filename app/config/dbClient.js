import { MongoClient } from "mongodb";
import dotenv from "dotenv";


dotenv.config();
const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbClient = {
    db: null,
    async connect() {
        try {
            await client.connect();
            this.db = client.db("Roles"); 
            console.log("📌 Conectado a MongoDB");
        } catch (error) {
            console.error("❌ Error al conectar a MongoDB:", error);
        }
    }
};

export default dbClient;
