// Import the mongoose library
const mongoose = require('mongoose');

// Define the MongoDB connection URI
const db = `mongodb+srv://admin:admin@cluster0.hdtn0h6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to the MongoDB database using the provided URI
mongoose.connect(db, {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true // Use the new Server Discover and Monitoring engine
}).then(() => {
    // If the connection is successful, log a success message
    console.log('Database connected successfully');
}).catch((e) => {
    // If the connection fails, log the error
    console.log(e, '<=error');
});
