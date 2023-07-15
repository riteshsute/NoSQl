const mongodb = require('mongodb');
const { MongoClient } = mongodb;

let client;

const mongoConnect = async () => {
  try {
    if (!client) {
      client = await MongoClient.connect('mongodb+srv://riteshsute:Ritesh123@cluster0.rz6r007.mongodb.net/shop?retryWrites=true&w=majority');
      console.log('Connected to MongoDB');
      // console.log(client)
    }
    return client;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

const getDb = async () => {
  try {
    const db = await mongoConnect();
    return db;
  } catch (error) {
    console.error('Failed to get MongoDB database:', error);
    throw error;
  }
};
 
exports.getDb = getDb;
exports.mongoConnect = mongoConnect;
