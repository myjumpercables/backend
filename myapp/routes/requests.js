// var express = require('express');
// var router = express.Router()
// var Database = require('../database.js')
// var multer = require('multer');
// var upload = multer();
// // var mysql = require('mysql')
// // var connection = mysql.createConnection({
// //   host: '35.232.83.9',
// //   user: 'root',
// //   password: 'dblab123',
// //   database: 'maintTracker'
// // })
// var database = new Database();
//
// //In REQUESTS ROUTER
// router.post('/add/:userId', upload.array(), function(req, res, next){
//   database.query(
//     `INSERT INTO request (userId, state, companyId)
//     VALUES ('${req.params.userId}', 'NULL', '${req.body.companyId}');`
//   )
//   .then(res.send("OK"))
//   .catch(err =>{
//     console.log(err);
//     res.status(500).send();
//   })
// });
//
// router.get('/getRequests/:userId', upload.array(), function(req, res, next){
//   database.query(
//     `SELECT companyId, username FROM request JOIN user
//      ON request.companyId = user.userId
//      WHERE request.userId = ${req.params.userId} AND state = IS NULL;`
//   )
//   .then(res.send("OK"))
//   .catch(err =>{
//     console.log(err);
//     res.status(500).send();
//   })
// });
//
// router.post('/update/:userId', upload.array(), function(req, res, next){
//   database.query(
//     `UPDATE requests
//      SET state = true
//      WHERE userId = ${req.params.userId}
//      AND companyId = ${req.body.companyId}
//      `
//   )
//   .then(res.send("OK"))
//   .catch(err =>{
//     console.log(err);
//     res.status(500).send();
//   })
// });
//
// router.post('/delete/:userId', upload.array(), function(req, res, next){
//   database.query(
//     `DELETE FROM requests
//      WHERE userId = ${req.params.userId}
//      AND companyId = ${req.body.companyId}
//      `
//   )
//   .then(res.send("OK"))
//   .catch(err =>{
//     console.log(err);
//     res.status(500).send();
//   })
// });
//
//
// module.exports = router;

var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var createError = require('http-errors');
var mysql = require('mysql')
var Database = require('../database')
var connection = mysql.createConnection({
  host: '35.232.83.9',
  user: 'root',
  password: 'dblab123',
  database: 'maintTracker'
})
connection.connect()

//var database = new Database();

/* GET listing. */
//put upload.none() before function for multer

router.post('/', upload.array(), function(req, res, next) {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  //console.log(req.params.id);
  connection.query(`SELECT user_id, type, username FROM user WHERE username = '${req.body.username}' AND password = '${req.body.password}';`,(err,rows)=> {
    if(err) throw err;
    if (rows.length === 0) {
        next(createError(401));
        console.log('ERROR');
        }
    else{
      console.log('Data received form Db:');
      console.log(rows);
      res.send(rows);
    }
});

});

module.exports = router;
