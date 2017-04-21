var mongoose = require("mongoose");
var Product = require("./models/product");
var data = [
        {
            type:"tvandhometheatre",
            name: "LG SIGNATURE OLED TV W-4K HDR Smart TV-65inch Class", 
            image:"/images/medium01_copy.jpg",
            description:"Key Features Picture-on-wallCinematic Color on Perfect BlackActive HDR with Dolby Vision™ Dolby Atmos® SUMMARYSeries	LG SIGNATURE Diagonal Class	65 inches Diagonal Size	64.5 inches Resolution	3840 x 2160 Display Type	OLED Display Format	4K UHD 2160p HDMI Port(s)	4 (HDCP 2.2) Other Features	Picture-On-Wall, Active HDR with Dolby Vision™, Dolby Atmos®, Perfect Black, Cinematic Color, Billion Rich Colors, Ultra Luminance, Pixel Level Dimming"

        },
        {
            type:"appliances",
            name: "28 cu ft. Capacity 4-Door Flex™ Refrigerator with Family Hub™ 2.0", 
            image:"/images/4_RF28M9580SG-AA_018_Detail-Scrreen_Black.jpg",
            description:"Family Hub™ helps you manage your home and your life, with Food Management, Family Connection and Entertainment capabilities – all controlled from the 21.5inches Wi-Fi enabled touchscreen. Create shopping lists and expiration notices, share multiple calendars, photos and memos, and stream music, videos and your Samsung TV directly on your Family Hub™."
        },
        {
            type:"tvandhometheatre",
            name: "UBD-M9500 4K Ultra HD Blu-ray Player", 
            image:"/images/Blu-rayPlayer.jpg",
            description:"Samsung’s flagship UHD Blu-ray player offers the absolute best in picture quality and more ways to enjoy your content. With high dynamic range (HDR) content, scenes burst with vivid color, stunning contrast and deep detail. And with an expanded color spectrum, you’ll experience your favorites in a whole new way. With smart connectivity, content streaming to mobile devices, and Bluetooth wireless streaming, the UBD-M9500 is a true entertainment hub."
        },
        {
            type:"appliances",
            name: "2.1 cu. ft. Over The Range Microwave with PowerGrill and Ceramic Enamel Interior", 
            image:"/images/microwave.jpg",
            description:"PowerGrill - Powerful heating to toast, crisp, and brown your favorite food. Ceramic Enamel Interior - Durable, Easy-to-Clean, and Scratch Resistant Interior"
        },
        {
            type:"tvandhometheatre",
            name: "HT-J4500 Home Theater System", 
            image:"/images/hometheatre1.jpg",
            description:"Discover incredible sound quality with a 5.1 Channel home theater system. Watch TV and movies with enriched audio that puts you right at the center. "
        },
        {
            type:"tvandhometheatre",
            name: "28 inch Class H4500 LED Smart TV", 
            image:"/images/LedSmartTV.jpg",
            description:"With Wide Color Enhancer Plus, you'll witness a wider spectrum of colors on your screen, just like the director intended. You'll enjoy enriched colors while watching your favorite movies, and shows, even if it's older, non-HD content. Enjoy a clear moving picture resolution at Motion Rate 60 with amazing refresh rate, processing speed and backlight technology. Explore movies, shows, apps and more on the intuitive and intelligent Samsung Smart TVs. Browse a new world of TV entertainment quickly and simply with a powerful processor."
        },
        {
            type:"appliances",
            name: "Top Control Dishwasher with Stainless Steel Door", 
            image:"/images/dishwasher.jpg",
            description:"The interior door is covered with stainless steel that’s more durable, hygienic. Adjustable upper rack makes it easy to fit various dishware shapes and sizes. Identifies leaks as small as 2.4 oz and shuts itself off before water can escape. ENERGY STAR® rated means lower energy bills and carbon footprint than non-certified models.* *Only uses 265KWH/yr. Visit www.energystar.gov for guidelines."
        },
        {
            type:"appliances",
            name: "Grinder Mixer", 
            image:"/images/popularmixer.jpg",
            description:"The Power-packed motor and it's uniquely crafted blades make grinding traditional masala, and more simple. The Prestige mixer grinder's aesthetic design and the vibrant • 2 Stainless Steel Jars • 1 Multi Utility Jar. 550 Watts motor. 2years Warranty • 5 Stainless steel Multi- Purpose Blade • Sturdy Handles • Water Drain motor Facility"
        },
        {
            type:"mobiles",
            name: "PlayStation 6", 
            image:"/images/playstations6.jpg",
            description:"Discover a new world of unexpected gaming and entertainment experiences with PlayStation®VR. Redefine your expectations of immersion in gaming with moments so intense your intuition takes over. Step into incredible virtual worlds and experience entertainment in new and extraordinary ways."
        },
        {
            type:"appliances",
            name: "Washer", 
            image:"/images/washingMachine.jpg",
            description:"5.7 cu.ft. Mega Capacity Top Load Washer with TurboWash® Technology WT7700HKA Black Stainless Steel. This LG washer has been awarded the ENERGY STAR® most efficient mark in 2016. Products that are recognized as the most efficient of ENERGY STAR® in 2016 help reduce greenhouse gas emissions by meeting rigorous energy efficiency performance levels set by the U.S. Environmental Protection Agency."
        },
        {
            type:"appliances",
            name: "Philips Norelco Beard trimmer Series 3500, 20 built-in length settings, QT4018/49", 
            image:"/images/trimmers.jpg",
            description:"Self-sharpening titanium blades to cut each hair perfectly. 20 built-in precision lengths settings from 1/32 inch (0.5mm) to 13/32 inch (10mm), easily adjustable and lock in with the trimmer's zoom wheel. Advanced lithium-ion battery delivers up to 120 minutes runtime after a 1 hour charge. Washable heads for easy cleaning. Beard comb for a skin friendly trim"
        },
        {
            type:"appliances",
            name: "Air Conditioner", 
            image:"/images/airconditioner.jpg",
            description:"The Pearl Mini Split is the flagship product in the Samsung line up, with outstanding energy efficiency and a host of innovative features that makes the Pearl a leader in the Mini Split marketplace"
        },
          {
              type:"appliances",
            name: "Air Cooler", 
            image:"/images/aircooler.png",
            description:"Slim like a summer diet, DiET 35T is absolutely lavish when giving you the coolest breeze you crave for. Powered by a 35 liter tank, a high efficiency honeycomb pad and ice chamber, this is your coolest buddy who stands by you, all through the heat."
        },
          {
              type:"appliances",
            name: "VG Crystal Stabilizer", 
            image:"/images/VGStabilizer.jpg",
            description:"Generator compatibility.Low & High voltage cut off.Performs in wide input range. Primary switching technology. Built-In Thermal Overload Protection. Output voltage correction without break. Mains turn-on delay."
        },
          {
            type:"appliances",  
            name: "NewAir Counter-Height Water Dispenser, White (WCD-200W)", 
            image:"/images/waterPurifier.jpg",
            description:"Energy Star Qualified. Hot water temperature ranges from 176 degree F - 203 degree F. Cold water temperature ranges from 43 degree F - 50 degree F"
        },
          {
            type:"appliances",  
            name: "Gas Stove", 
            image:"/images/gasStove.jpg",
            description:"ISI certified Press-fit knobs, Brass burners, Stainless steel body, taller legs & folded edges at bottom."
        },
        {
            type:"appliances",
            name: "Induction stove", 
            image:"/images/electricstove.jpg",
            description:"Secura 8100MC 1,800W Portable Induction Cooktop Countertop Burner"
        },
        {
            type:"appliances",
            name: "Prestige Aluminum Non-stick Cookware Set ", 
            image:"/images/KitchenSet.jpg",
            description:"The Prestige omega deluxe aluminium cookware set (set of 3 pieces) is especially created to balance today’s busy lifestyle needs and assist you in serving healthy and tasty food. This set contains 1 Fry Pan, 1 Tawa and 1 Kadai with lid."
        },
        {
            type:"mobiles",
            name: "LG G6", 
            image:"/images/G6.png",
            description:"Unlike other phones with a similar screen size, the large 5.7” display fits in your hand, giving you a big screen experience without the inconvenience of a big phone. The LG G6 is sculpted from aluminum and glass and is available in platinum and black. The 18:9 FullVision display with rounded corners and narrow bezels conclude the harmonious design."
        }
        // {
        //     name: "", 
        //     image:"/images/",
        //     description:""
        // },
        // {
        //     name: "", 
        //     image:"/images/",
        //     description:""
        // },
        // {
        //     name: "", 
        //     image:"/images/",
        //     description:""
        // },
    ];
function seedDB(){
    //Remove all Products
    Product.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed products!");
        // add new Product - add after removing the Products
        data.forEach(function(seed){
            Product.create(seed, function(err, data){
                if(err){
                    console.log(err);
                } else{
                    console.log("Added new Product");
                }
            });
        });
    });
    
}    

module.exports = seedDB;