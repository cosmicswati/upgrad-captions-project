const express = require('express');
const cookieParser = require('cookie-parser');
const bcryptjs = require('bcryptjs')


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
        console.log(isExist,'isExist')
        if (isExist) {
            // If user already exists, send a 400 Bad Request response
            res.status(400).send('User already exists');
        } else {
            // If user does not exist, create a new user
            const user = new Users({
                username,
                email,
            });
            bcryptjs.hash(password, 10, (error, (hashedPassword) => {
                if(err) next(err)
                user.set('password', hashedPassword)
                user.save((error) => {
                    if(err) next(err)
                    res.status(200).send('Successfully Registered');

                })
            })
           
           
        }
    } catch (error) {
        // If an error occurs, send a 500 Internal Server Error response
        res.status(500).send('Server Error');
        console.log(error,'error');
    }
});


app.listen(port, () => {
    console.log('Server is running');
});
