import mongoose from "mongoose";

export function dbConnection() {
  return mongoose.connect(
    "mongodb+srv://julian1234:julian1234@server.brito.mongodb.net/?retryWrites=true&w=majority&appName=server"
  );
} 
