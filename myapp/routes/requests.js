var express = require('express');
var router = express.Router()
var Database = require('../database.js')
var multer = require('multer');
var upload = multer();
// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: '35.232.83.9',
//   user: 'root',
//   password: 'dblab123',
//   database: 'maintTracker'
// })
var database = new Database();

//In REQUESTS ROUTER
router.post('/add/:user_id', upload.array(), function(req, res, next){
  database.query(
    `INSERT INTO request_table (user_id, state, company_id)
    VALUES ('${req.params.user_id}', '${req.body.state}', '${req.body.company_id}');`
  )
  .then(res.send("OK"))
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});

router.get('/getRequests/:user_id', upload.array(), function(req, res, next){
  database.query(
    `SELECT company_id, username FROM request_table JOIN user_table
     ON request.company_id = user.user_id
     WHERE request.user_id = ${req.params.user_id} AND state = IS NULL;`
  )
  .then(res.send("OK"))
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});

router.post('/update/:user_id', upload.array(), function(req, res, next){
  database.query(
    `UPDATE request_table
     SET state = true
     WHERE user_id = ${req.params.user_id}
     AND company_id = ${req.body.company_id}
     `
  )
  .then(res.send("OK"))
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});

router.post('/delete/:user_id', upload.array(), function(req, res, next){
  database.query(
    `DELETE FROM request_table
     WHERE user_id = ${req.params.user_id}
     AND company_id = ${req.body.company_id}
     `
  )
  .then(res.send("OK"))
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});

router.get('/search', upload.array(), function(req, res, next){
  database.query( 
    `SELECT username, user_id, email from user
     WHERE ${(req.body.queryType) ? `username LIKE '%${req.body.query}%'` : `user_id = ${req.body.query}`}
     AND type = 'user';
    `
  ).then((rows, err) =>{
    res.send(rows)
  }).catch(err =>{
    res.sendStatus('400');
  })
})

module.exports = router;
