import userRoute from '../src/routes/user.js';
import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import morgan from 'morgan';

// Import database connection function
import { connectDB } from './db/db.js';

// Load environment variables from .env file
config({ path: "./.env" });

// Set up environment variables
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URL || "";

// Connect to MongoDB
connectDB(mongoURI);

// Initialize Express app
const app = express();
// Body parser middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
// Define routes
app.use('/person', userRoute); 
app.use("/", (req, res) => {
  res.send(`Home route working at ${PORT}`);
});


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
