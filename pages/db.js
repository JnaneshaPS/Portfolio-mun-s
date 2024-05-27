const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

let cachedClient = null;

async function connectDb() {
    if (cachedClient && cachedClient.topology.isConnected()) {
        return cachedClient;
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        cachedClient = client;
        return cachedClient;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = connectDb;
