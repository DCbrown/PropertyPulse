import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If the connection is already established, don't connect to the database again

  if (connected) {
    console.log("connection already established");
    return;
  }

  // Connect to the database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("new database connection");
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};

export default connectDB;
