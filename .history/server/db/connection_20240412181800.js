const mongoose = require('mongoose');

const db = `mongodb+srv://itsmeswati98:<password>@cluster0.w00aeru.mongodb.net/`

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database conneted Sucessfully');
}).catch ((e) => {
    console.log(e, '<=error');
})