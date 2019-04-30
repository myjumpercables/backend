var express = require('express');
var router = express.Router();
var Database = require('../database.js')
var multer = require('multer');
var upload = multer();
var database = new Database();
/* GET users listing. */

async function getService(id) {
  return database.query(
    `
    SELECT service_id, service_type, service_desc, date
    FROM service_history_table
    WHERE car_id = ${id}
    `
  ).then(serviceRows =>{
    carObj['services'] = serviceRows;
    return carObj;
  }).catch(err => {
    throw err;
  })
}

function getServices(car) {
  async function Services() {
    return database.query(
    `SELECT service_id, service_type, service_desc, date
    FROM service_history_table
    WHERE car_id = ${car.car_id}`
    )
    .then(serviceRows =>{
      carObj['services'] = serviceRows;
      return carObj;
    }).catch(err => {
      throw err;
    })
  }

  const carObj = {
    car_id: car.car_id,
    make: car.make,
    model: car.model,
    year: car.year,
  }

  return {
    services: () => Services()
  }
}

router.get('/:id', upload.array(), function(req, res, next) {
  //connection.connect()
  //get all cars
//   database.query(
//     `SELECT car_id, make, model, year from car_table WHERE user_id = '${req.params.id}';`
//   ).then((rows, err) => {
//     if (err) throw err;
//     return rows.map((carRow) => {
//       //add services arrray to carRow
//       carRow['services'] = database.query(
//         `SELECT service_id, service_type, service_desc, date FROM service_history_table WHERE car_id = '${carRow.car_id}';`
//       ).then((serviceRows, err) => {
//         console.log(carRow.car_id);
//         if (err) throw err;
//         return serviceRows.map((serviceRow)=>{
//           serviceRow['repairs'] = database.query(
//             `SELECT repair_id, cost, date FROM repair_table WHERE service_id = '${serviceRow.service_id}';`
//           ).then((repairRows, err) => {
//             if (err) throw err;
//             return repairRows;
//           })
//           return serviceRow;
//         })
//       })
//       // map carRow to corresponding row element
//       return carRow;
//     })
//   }).then((fullRowResult) =>{
//     res.send(fullRowResult);
//   }).catch((err) =>{
//     console.log(err);
//     res.status("500").send("crash");
//   })
// });

// database.query(
// `SELECT car_id, make, model, year FROM car_table WHERE user_id = ${req.params.id};`
// )
// .then(carRows => {
//   Promise.all(carRows.map(carRow => {
//     database.query(`SELECT service_id, service_type, service_desc, date FROM service_history_table WHERE car_id = '${carRow.car_id}';`)
//       .then(serviceRows => {
//         carRow['services'] = serviceRows;
//         return carRow;
//       })
//       .catch(err =>{
//         console.log(err);
//         return "error"
//         res.sendStatus(500);
//       })
//     })).then({
//
//     })
//   }).then(result => {
//     res.send(result);
//   })
// });

database.query(
  `SELECT car_id, make, model, year from car_table WHERE user_id = ${req.params.id};`
).then((cars, err) =>{
  if (err) throw err;
  let newCars = cars.map((car, i) =>{
    car = new getServices(car);
    car = Promise.resolve(car.services())
    return car;
  })

  return Promise.all(newCars).then((newList) => {return newList})
})
.then(cars => {
  res.send(cars);
})
.catch(err =>{
  console.log({Error: err});
  res.statusCode(500);
})

//   database.query(
// `SELECT car_id, make, model, year from car_table WHERE user_id = ${req.params.id};`)
//   .then(carRows =>{
//     carRows.map((carRow) => {
//       let newRow = database.query
//       (
//       ` 
//       SELECT service_id, service_type, service_desc, date
//       FROM service_history_table
//       WHERE car_id = ${carRow.car_id}
//       `
//       ).then((serviceRows, err) => {
//         if(err) throw err;
//         carRow['services'] = serviceRows;
//         console.log("IN SERVICES");
//         console.log(serviceRows);
//         console.log(carRow);
//       })
//       .catch(err =>{
//         console.log(err);
//       })
//       return newRow;
//     })
//     return arr;
//   }).then(result =>{
//     res.send(result)
//   }).catch(err=>{
//     console.log(err);
//     res.sendStatus(500)
//   })
// });
})
//ADD CAR
//add car
router.post('/add/:id', upload.array(), function(req, res,next){
  database.query(
    `INSERT INTO car_table (make, model, year, user_id)
  VALUES ('${req.body.make}', '${req.body.model}', '${req.body.year}', '${req.params.id}');`)
  .then(res.send("OK"))
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});



module.exports = router
