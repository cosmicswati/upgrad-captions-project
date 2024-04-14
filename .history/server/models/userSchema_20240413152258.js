// Import the mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the user entity
const userSchema = new mongoose.Schema({
    // Define the username field with type String, required, and unique constraints
    username: {
        type: String,
        required: true, // Username is required
        unique: true // Username must be unique
    },
    // Define the email field with type String, required, and unique constraints
    email: {
        type: String,
        required: true, // Email is required
        unique: true // Email must be unique
    },
    // Define the Password field with type String, required, and unique constraints
    Password: {
        type: String,
        required: true, // Password is required
        unique: true // Password must be unique
    },
});

// Create a Mongoose model based on the user schema
const Users = new mongoose.model("USER", userSchema);

// Export the Users model to be used in other parts of the application
module.exports = Users;
