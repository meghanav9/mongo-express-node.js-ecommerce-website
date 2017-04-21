var mongoose = require("mongoose");

//   SCHEMA SETUP
var contactusSchema= new mongoose.Schema({
    lat: Number,
    lng: Number,
    address1: String,
    address2: String,
    city: String,
    Country:String,
    PinCode: String
});

// send output of the ejs 
module.exports = mongoose.model("Contactus",contactusSchema);