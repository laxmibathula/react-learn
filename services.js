var mysql = require('mysql2');
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// full customer table 
const customerList = function(){
               return new Promise(function(resolve,reject){
                      
                      var query = `select * from customers`;
                      con.query(query,function(err,results){
                            if(err){
                               reject(err);
                               return ;
                            }
                            resolve(results);
                        })  
                }) 
}

const user = function(x,y,callback){
    console.log(x);
    console.log(y);
    con.query('SELECT * FROM customers WHERE email = ? OR password = ?',[x,y],
     function(err,results){
       if(err){
         console.log(err);
         callback(err,null);
         return;
       }
       if(results.length == 0){
         callback("fufufyufiy",null);
         return;
       }
  
       callback(null,results);
     }
    );
  }


module.exports= {customerList,user};