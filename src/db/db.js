import mongoose from "mongoose";

export const connectDB =  (URI) => {
    mongoose
     .connect(URI, {
       dbName: "Authentication",
     })
     .then((c) => console.log(`DB connected to ${c.connection.host}`))
     .catch((e) => console.log(e));
 };