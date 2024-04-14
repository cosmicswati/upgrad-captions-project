const express = require('express');
const cookieParser = require('cookie-parser');

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
       
        res.status(500).send('Server Error');
        console.log(error,'error')
    }
});


app.listen(port, () => {
    console.log('Server is running');
});
