const express = require('express');
const cookieParser = require('cookie-parser');

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log('Server is running');
})