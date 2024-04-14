// Import required modules
const express = require('express');
const cookieParser = require('cookie-parser');

// Create an Express application
const app = express();

// Import user schema
const Users = require('./models/userSchema');

// Connect to the database
require('./db/connection');

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: false }));

// Middleware to parse cookies
app.use(cookieParser());

// Define the port for the server to listen on
const port = process.env.PORT || 8000;

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route to handle POST requests for user registration
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists in the database
        const isExist = await Users.findOne({ email });

        if (isExist) {
            // If user already exists, send a 400 Bad Request response
            res.status(400).send('User already exists');
        } else {
            // If user does not exist, create a new user
            const user = new Users({
                username,
                email,
                password
            });

            // Save the new user to the database
            const userCreated = await user.save();

            // Log the created user and send a 200 OK response
            console.log(userCreated, 'userCreated');
            res.status(200).send('Successfully Registered');
        }
    } catch (error) {
        // If an error occurs, send a 500 Internal Server Error response
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log('Server is running');
});
