import { MongoClient } from "mongodb";

const options = {
  maxPoolSize: 10,
  minPoolSize: 1,
  connectTimeoutMS: 10000,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

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
      // eslint-disable-next-line no-console
      console.error('[mongodb] trying connection to', maskedUri, 'NODE_ENV=', process.env.NODE_ENV ?? 'undefined');
      return await client.connect();
    } catch (err) {
      // Log masked URI and error for debugging in Vercel logs (no secrets)
      // eslint-disable-next-line no-console
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[mongodb] connection failure to', maskedUri, 'error=', msg);
      throw err;
    }
  };

  if (!globalForMongo._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    globalForMongo._mongoClientPromise = connectClient(client);
  }

  return globalForMongo._mongoClientPromise;
};

export default clientPromise;
