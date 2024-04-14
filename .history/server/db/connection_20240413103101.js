const mongoose = require('mongoose');

const db = `mongodb+srv://itsmeswati98:swati@123jnc@cluster0.w00aeru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database conneted Sucessfully');
}).catch ((e) => {
    console.log(e, '<=error');
})