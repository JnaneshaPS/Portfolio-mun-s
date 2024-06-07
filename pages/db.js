const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

let cachedClient = null;

async function connectDb() {
  if (cachedClient && cachedClient.topology && cachedClient.topology.isConnected()) {
    return cachedClient;
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  cachedClient = client;

  return client;
}

module.exports = connectDb;
