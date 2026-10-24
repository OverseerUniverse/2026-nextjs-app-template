import mongoose from "mongoose";

// const url = process.env.MONGO_URI!;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function before all api routes
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    // uncomment this line once you have the MONGO_URI set up
    // connection = await mongoose.connect(url);
    connection = mongoose; // remove this placeholder when enabling the connection
    return connection;
  }
};

export default connectDB;
