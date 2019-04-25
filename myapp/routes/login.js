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


/* GET listing. */
router.post('/', upload.none(), function(req, res, next) {
  console.log(req.body);
  //console.log(req.params.id);
  connection.connect()
  connection.query('SELECT user_id FROM users', (err,rows){
    if(err) throw err;
    console.log('Data received form Db:\n');
    console.log(rows)

  })
  res.send(rows);
});

module.exports = router;
