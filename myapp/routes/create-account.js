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
  connection.query(`INSERT INTO user (username,password) VALUES ('${req.body.username}', '${req.body.password}');`,(err,rows) => {
    if(err) throw err;
  });
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
res.send('created account');
});

module.exports = router;
