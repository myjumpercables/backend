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


/* GET users listing. */
router.post('/', upload.array(), function(req, res, next) {
  connection.connect()
  connection.query(`INSERT INTO user (user_id,username,password) VALUES ('${req.body.username}', '${req.body.password}',${req.body.id});`,(err,rows) => {
    if(err) throw err;
  });
  res.send('Created Account');
});

module.exports = router;
