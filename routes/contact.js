var express = require("express");
var router  = express.Router();
const nodemailer = require('nodemailer');

router.get("/contactus", function(req,res){
    res.render("contactUs/index",{error: req.flash("error"),success: req.flash("success")});
});
router.post('/contactus', function (req, res) {
    'use strict';
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aehnk9@gmail.com',
            pass: 'websitepassword'
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from:req.body.name + ' &lt;' + req.body.email + '&gt;', // sender address
        to: 'aehnk9@gmail.com', // list of receivers
        subject: 'Website Contact form from ' + req.body.name, // Subject line
        text: req.body.message + '\n**********From Email Address : ' + req.body.email // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            req.flash("error","Please send the message again!");
            res.redirect('/contactUs');
        }
        else {
            req.flash("success","Message sent successfully!");
            res.redirect('/contactUs');
        }
    });
});    
module.exports = router;