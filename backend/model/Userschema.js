const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({

    Firstname:String,
    Lastname:String,
    Email:String,
    Phone:String,
    Project:String

})

const UserModel =mongoose.model("Createuser",Userschema)

module.exports = UserModel