var express = require('express');
var bodyParser = require('body-parser');
var STATIC_DIR = __dirname;
var mysql = require('mysql2');

var con = mysql.createConnection({
	host: 'localhost',
	user: "root",
	database: 'mydb',
	password: 'raji1991'
  });


  var app = express();
  app.use(express.static(STATIC_DIR));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  
  function isJsonParsable(json) { 
      try{
          JSON.parse(json);  
      }catch(e){
          return false;
      }      
    
      return true;
  };
  
  app.use(function(req, res, next) {
      if(req.text && isJsonParsable(req.text)){
          req.body = JSON.parse(req.text);
      }
  
      if(req.body && typeof(req.body) === "string" && isJsonParsable(req.body)){
          req.body = JSON.parse(req.body);
      }
  
      next();
  });
w
  app.get('/home', function(req, res) {
    res.sendFile(STATIC_DIR + '/App.js');sy
  });

  
  // sending customer table all data to html

app.get("/customerlist",function(req,res){ 
    console.log("hi im coming");
    console.log(req.body);
    getlist(function(err,data){
        if(err){
          return res.status(400).send({status:'invalid user'});
        }
        return res.status(200).send(results);
      });
});
 
    function getlist(callback){
        con.query('SELECT * FROM customers',
         function(err,results){
           if(err){
             callback(err,null);
             return;
           }
           callback(null,results);
         }
        );
      }
      

app.listen(4000,function(){
	console.log("Server started running at port:4000 ");
});;
