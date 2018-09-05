//'use strict';
require('dotenv').config();
var express = require('express');
var router = express.Router();
//var Comments =require('../model/comments');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config();
router.get('/events', function(req, res){

res.render('events');

});

router.get('/details', function(req, res){
res.render('details');

});

router.get('/index1', function(req, res){
res.render('index1');          
});


router.get('/edit', function(req, res){

res.render('edit');          
});
router.get('/about', function(req, res){
res.render('about');          
});
router.get('/partnership', function(req, res){
res.render('partnership');          
});

router.get('/gallery', function(req, res){

res.render('gallery');          
});
router.get('/outreachgallery', function(req, res){
res.render('outreachgallery');          
});
router.get('/fellowshipgallery', function(req, res){

res.render('fellowshipgallery');          
});
router.get('/vocationalgallery', function(req, res){
res.render('vocationalgallery');          
});
router.get('/empowermentgallery', function(req, res){

res.render('empowermentgallery');          
});
router.get('/prisonsgallery', function(req, res){

res.render('prisonsgallery');          
});
router.get('/medicalgallery', function(req, res){

res.render('medicalgallery');          
});
router.get('/try', function(req, res){

res.render('try');          
});
router.get('/education', function(req, res){
res.render('education');
//   Comments.find({'postId':req.params.id}, function (err, comments) {
//      res.render('education', { comments: comments, postId: req.params.id });
// });
        
    });

router.get('/medical', function(req, res){

        res.render('medical');          
    });
    router.get('/vocation', function(req, res){
            res.render('vocation');          
        });
router.get('/empowerment', function(req, res){

    res.render('empowerment');          
});
router.get('/counseling', function(req, res){

        res.render('counseling');          
    });
router.get('/outreach', function(req, res){

res.render('outreach');          
});

router.get('/eventstime', function(req, res){

res.render('eventstime');          
});

router.get('/contactform', function(req, res){

res.render('contactform');          
});


router.post('/contact', function(req, res){
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user:'kenyieko@gmail.com',
      pass: process.env.AUTH_PASS
    }
  }));
  
  var mailOptions = {
    from:'',
    to:  'kenyieko@gmail.com',
    subject: 'Mesage from MSP',
    text: `${req.body.name} \n email: ${req.body.email} \n City: ${req.body.city} \n State: ${req.body.state}  \n Zipcode: ${req.body.zipcode} \n Phone no: ${req.body.mobile} \n (${req.body.country})   \n says: ${req.body.message}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });  
  
      /*  let mailOpts, smtpTrans;
        smtpTrans = nodemailer.createTransport({
          service:'gmail',
          host: 'smtp.gmail.com',
          /*port: 465,
          secure: true,*/
       /*   auth: {
            user: 'kenyieko@gmail.com',
            pass: 'estherkalawe@118514'
          }
        });
        mailOpts = {
          from: req.body.name + ' &lt;' + req.body.email + '&gt;',
          to: 'kenyieko@gmail.com',
          subject: 'Sending Email using Node.js[nodemailer]',
          text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
        };
        smtpTrans.sendMail(mailOpts, function (error, response) {
          if (error) {
          //  res.render('education');
            console.log(error);
          }
          else {
            console.log('Email sent: ' + info.response);
            
            res.render('contactform');
          }
        });*/
      });

        
module.exports = router;
