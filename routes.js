const express = require('express');
const router = express.Router();
var services = require("./services.js");
var STATIC_DIR = __dirname;


// checking email and password coming from client .if user is  there sending status back to client
router.post("/login",function(req,res){
        var fbv = req.body;
      
        services.user(fbv.email,fbv.pass,function(raji,data){
          if(raji){
            return res.status(400).send({status:'invalid user'});
          }
          return res.status(200).send(data);
        })
});    

// sending customer table all data to html
router.get("/table-data",function(req,res){                                                                                                                                                
    services.customerList().then(function(results){
           return res.status(200).send(results);
    }).catch(function(err){
            return res.status(400).send(err);
    });
});

router.get('*', function(req, res) {
        res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = router;
