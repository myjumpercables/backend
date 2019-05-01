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
    VALUES ('${req.params.user_id}', NULL, '${req.body.company_id}');`
  )
  .then((resp, err) =>{
    if(err) throw err;
    res.sendStatus(200);
  })
  .catch(err =>{
    if(err.errno === 1062){
      res.sendStatus(403);
    }else {
      console.log(err);
      res.status(500).send();
    }
  })
});

router.get('/getRequests/:user_id', upload.array(), function(req, res, next){
  database.query(
    `SELECT company_id AS companyId, username AS companyName, request_id FROM request_table JOIN user_table
     ON request_table.company_id = user_table.user_id
     WHERE request_table.user_id = ${req.params.user_id} AND state IS NULL;`
  )
  .then((data, err) =>{
    if (err) throw err;
    console.log(data);
    res.send(data);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});

router.get('/companies/:user_id', upload.array(), function(req, res, next){
  database.query(
    `SELECT company_id AS companyId, location, phone, username AS companyName, request_id FROM request_table JOIN user_table
     ON request_table.company_id = user_table.user_id
     WHERE request_table.user_id = ${req.params.user_id} AND state = 1;`
  )
  .then((data, err) =>{
    if (err) throw err;
    console.log(data);
    res.send(data);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});

router.post('/update/:request_id', upload.array(), function(req, res, next){
  database.query(
    `UPDATE request_table
     SET state = true
     WHERE request_id = ${req.params.request_id};
     `
  )
  .then((result, err) =>{
    if (err) throw err;
    res.sendStatus(200);
  })
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

function getCars(user){
  async function Cars() {
    return database.query(
    `SELECT car_id, make, model, year
    FROM car_table
    WHERE user_id = ${user.user_id};`
    )
    .then(cars =>{
      userObj['cars'] = cars;
      return userObj;
    }).catch(err => {
      throw err;
    })
  }

  const userObj = {
    user_id: user.user_id,
    username: user.username,
    location: user.location,
    phone: user.phone,
    email: user.email,
  }

  return {
    cars: () => Cars()
  }
}

router.post('/search', upload.array(), function(req, res, next){
  database.query(
    `SELECT username, user_table.user_id, phone, location
    FROM user_table
    WHERE ${(req.body.queryType) ? `username LIKE '%${req.body.query}%'` : `user_table.user_id = ${req.body.query}`}
    AND type = 'user';
    `
  ).then((users, err) =>{
    if (err) throw err;
    let usersList = users.map((user, i) =>{
      user = new getCars(user);
      user = Promise.resolve(user.cars())
      return user;
    })
    return Promise.all(usersList).then((newList) => {return newList})
  })
  .then((newList, err) =>{
    if (err) throw err;
    res.send(newList);
  })
  .catch(err =>{
    console.log(err);
    res.sendStatus('400');
  })
})

router.get('/users/:user_id', upload.array(), function(req, res, next){
  database.query(
    `SELECT user_table.user_id, location, phone, username, request_id, state
    FROM request_table JOIN user_table
    ON request_table.user_id = user_table.user_id
    WHERE request_table.company_id = ${req.params.user_id} AND state = 1;`
  )
  .then((users, err) =>{
    console.log(users);
    if (err) throw err;
    let usersList = users.map((user, i) =>{
      user = new getCars(user);
      user = Promise.resolve(user.cars())
      return user;
    })
    return Promise.all(usersList).then((newList) => {return newList})
  })
  .then((newList, err) =>{
    if (err) throw err;
    res.send(newList);
  })
  .catch(err =>{
    console.log(err);
    res.sendStatus('400');
  })
});

module.exports = router;
