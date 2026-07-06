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

  // Mask credentials for logs
  const maskedUri = (() => {
    try {
      return uri.replace(/:\/\/.*@/, '://<REDACTED>@');
    } catch (e) {
      return '<invalid-uri>';
    }
  })();

  const connectClient = async (client: MongoClient) => {
    try {
      return await client.connect();
    } catch (err) {
      // Log masked URI and error for debugging in Vercel logs (no secrets)
      // eslint-disable-next-line no-console
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[mongodb] connection failure to', maskedUri, msg);
      throw err;
    }
  };

  if (process.env.NODE_ENV === "development") {
    if (!globalForMongo._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      globalForMongo._mongoClientPromise = connectClient(client);
    }

    return globalForMongo._mongoClientPromise;
  }

  const client = new MongoClient(uri, options);

  return connectClient(client);
};

export default clientPromise;
