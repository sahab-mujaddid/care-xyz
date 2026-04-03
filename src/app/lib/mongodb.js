import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.URI;
const dbName = process.env.DB_NAME;

let client;
let clientPromise;


export async function connect(collectionName) {
  if (!clientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    clientPromise = client.connect();
  }

  const db = (await clientPromise).db(dbName);
  return db.collection(collectionName);
}