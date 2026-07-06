import { MongoClient } from "mongodb";

const options = {};

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise = () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  if (process.env.NODE_ENV === "development") {
    if (!globalForMongo._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      globalForMongo._mongoClientPromise = client.connect();
    }

    return globalForMongo._mongoClientPromise;
  }

  const client = new MongoClient(uri, options);

  return client.connect();
};

export default clientPromise;
