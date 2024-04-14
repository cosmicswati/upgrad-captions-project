// Import the mongoose library
const mongoose = require('mongoose');

// Define the MongoDB connection URI
const db = `mongodb+srv://itsmeswati98:swati@123jnc@cluster0.w00aeru.mongodb.net/`;

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
