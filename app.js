var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    flash = require("connect-flash"),
    mongoose = require("mongoose"),
    Product =  require("./models/product"), //receive output
    seedDB = require("./seeds"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user"),
    Promise = require("mpromise");


//required routes    
var productRoutes = require("./routes/products");
var indexRoutes = require("./routes/index");
var contactRoutes = require("./routes/contact");

var url = process.env.DATABASEURL || "mongodb://localhost/aedb";
mongoose.connect(url);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(flash());
//app.use(Promise);
// seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "My name is Khan!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

//Routes
app.use(productRoutes);
//can do app.use("/products", productRutes);
app.use(indexRoutes);
app.use(contactRoutes);
app.get("/images", function(req,res){
    res.render("images/pic");
});



app.get("/aboutus", function(req,res){
    res.render("aboutUs/index",{page:"aboutUs"});
});

app.get("/gallery", function(req,res){
    res.render("gallery/index",{page:"gallery"});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The AnilElectronics Server Has Started!");
});