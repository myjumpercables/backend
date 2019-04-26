var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '35.232.83.9',
  user: 'root',
  password: 'dblab123',
  database: 'maintTracker'
})
connection.connect()

/* GET listing. */
//put upload.none() before function for multer

router.post('/', upload.array(), function(req, res, next) {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  //console.log(req.params.id);
  connection.query(`SELECT user_id, type, username FROM user WHERE username = '${req.body.username}' AND password = '${req.body.password}';`,(err,rows)=> {
    if(err) throw err;
    if rows === []
      next(createError(401));
    console.log('Data received form Db:\n');
    console.log(rows);
    res.send(rows);
});

});

module.exports = router;
