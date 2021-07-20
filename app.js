const express = require("express");
const app = express();
const mysql = require('mysql');

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: 'tables_in_retailprodut',
  connectionLimit:10
});

pool.query('select * from prod4',(err,result,fields)=>{
  if (err){
    return console.log(err);
  }
    return console.log(result);
})

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

    
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));