const express = require('express');
const cookieParser = require('cookie-parser');

const app = express()

//Import Schemas
const  Users = require('./models/userSchema')

//connect to db
require('./db/connection')

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/api/register',(req, res) => {
    const {username,email, password } = req.body;
    const isExist = Users.findOne({email});

    if(isExist){
        res.status(400).send('User already exsits')
    }else{
        const user = new Users({
            username,
            email,
            password
        })
    }
})

app.listen(port, () => {
    console.log('Server is running');
})