import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

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
