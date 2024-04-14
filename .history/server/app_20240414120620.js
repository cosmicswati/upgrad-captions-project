const express = require('express');
const cookieParser = require('cookie-parser');
const bcryptjs = require('bcryptjs');

const app = express();

// Import user schema
const Users = require('./models/userSchema');

// connect to db
require('./db/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Check if the user already exists in the database
        const isExist = await Users.findOne({ email });
        console.log(isExist, 'isExist');
        if (isExist) {
            // If user already exists, send a 400 Bad Request response
            return res.status(400).send('User already exists');
        }
        // If user does not exist, create a new user
        const user = new Users({
            username,
            email,
        });
        bcryptjs.hash(password, 10, async (error, hashedPassword) => {
            if (error) {
                // Handle the error if bcryptjs.hash fails
                console.error(error);
                return res.status(500).send('Server Error');
            }
            // Set the hashed password for the user
            user.password = hashedPassword;
            // Save the user to the database
            try {
                await user.save();
                // Send a success response if user registration is successful
                res.status(200).send('Successfully Registered');
            } catch (err) {
                // Handle the error if saving the user fails
                console.error(err);
                res.status(500).send('Server Error');
            }
        });
    } catch (error) {
        // If an error occurs, send a 500 Internal Server Error response
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log('Server is running');
});
