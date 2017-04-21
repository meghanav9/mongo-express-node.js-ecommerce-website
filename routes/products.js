var express = require("express");
var router  = express.Router();
var Product = require("../models/product");

//INDEX - Show all products
// router.get("/products", function(req, res){
//     //Get all the products from DB into allproducts var
//     Product.find({type:'tvandhometheatre'}, function(err, allproducts){
//         if(err){
//             console.log(err); 
//         } else{
//             res.render("products/index",{tvproducts:allproducts, page:'products'});
//             //1st products is ejs file 2nd products is the array variable
//         }
//     });
// });
router.get("/products", function(req, res){
    //Get all the products from DB into allproducts var
    Product.find({}, function(err, allproducts){
        if(err){
            console.log(err); 
        } else{
            res.render("products/index",{products:allproducts, page:'products'});
            //1st products is ejs file 2nd products is the array variable
        }
    });
});


//CREATE - add new product
router.post("/products",isLoggedIn, function(req,res){
    var name = req.body.name; //from new.ejs form
    var image = req.body.image;
    var desc = req.body.description;
    var newProduct = {name: name, image: image, description:desc}; //creating an object
    //Create a new product and save to DB
    Product.create(newProduct, function(err, newlyProduct){
        if(err){
          console.log(err);
        } else{
            //      redirect back to campgrounds page
            res.redirect("/products");
        }
    });

});

//NEW - show form to create new products
router.get("/products/new", isLoggedIn, function(req,res){
   res.render("products/new"); 
});

//SHOW - a product id details
router.get("/products/:id",function(req,res){
    //find the product with provided  id product.findbyid(id, callback)
    Product.findById(req.params.id, function(err, foundProduct){
       if(err){
           console.log(err);
       } else {
               res.render("products/show", {product: foundProduct});
       }
    });
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;