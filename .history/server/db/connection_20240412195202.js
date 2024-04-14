const mongoose = require('mongoose');

const dbName = 'user'; // Replace 'your_database_name' with the name of your database

const dbURI = `mongodb+srv://itsmeswati98:itsmeswati98@cluster0.w00aeru.mongodb.net/${dbName}`;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully');
}).catch((error) => {
    console.error('Error connecting to database:', error);
});
