var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var createError = require('http-errors');
var mysql = require('mysql')
var Database = require('../database')
// var connection = mysql.createConnection({
//   host: '35.232.83.9',
//   user: 'root',
//   password: 'dblab123',
//   database: 'maintTracker'
// })

var database = new Database();

//NEED TO CHECK IF USERNAME IS ALREADY IN TABLE, IF YES RETURN ERROR CODE TO DO NEW USERNAME, IF NO CONTINUE ADDING.
/* GET users listing. */
router.post('/', upload.array(), function(req, res, next) {
  connection.connect();
  const users = database.query(`SELECT username FROM user WHERE username = '${req.body.username}';`)
  res.send(users);
  this.errorFlag = false;
  // connection.query(`SELECT username FROM user WHERE username = '${req.body.username}';`,(err,rows)=>{
  //   if(err) throw err;
  //   // if(rows.length != 0){
  //   //   next(createError(401));
  //   //   this.errorFlag = true;
  //   // };
  //   return rows;
  // }).then(rows =>{
  //       if(rows.length === 0) {
  //         next(createError(401));
  //       }
  //       else {
  //         connection.query(`INSERT INTO user (username,password) VALUES ('${req.body.username}', '${req.body.password}');`,(err,rows) => {
  //           if(err) throw err;
  //           console.log("here");
  //           res.send("yes");
  //         });
  //       }
  // })

//   connection.query(`SELECT user_id, type, username FROM user WHERE username = '${req.body.username}' AND password = '${req.body.password}';`,(err,rows)=> {
//     if(err) throw err;
//     if (rows.length === 0) {
//         next(createError(401));
//         console.log('ERROR');
//         }
//     else{
//       console.log('Data received form Db:');
//       console.log(rows);
//       res.send(rows[0]);
//     }
// });
});

module.exports = router;
