const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    Password : {
        type: String,
        required: true,
        unique: true,
    },
})
const Users = new mongoose.model("USER",userSchema);
module.exports = Users;