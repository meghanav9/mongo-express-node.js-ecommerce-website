var mongoose = require("mongoose");

//   SCHEMA SETUP
var productSchema= new mongoose.Schema({
    type: String,
    name: String,
    image: String,
    description: String
});

// send output of the ejs 
module.exports = mongoose.model("Product",productSchema);