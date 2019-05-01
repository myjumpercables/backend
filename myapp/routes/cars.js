var express = require('express');
var router = express.Router();
var Database = require('../database.js')
var multer = require('multer');
var upload = multer();
var database = new Database();
/* GET users listing. */

function getRepairs(service) {
  async function Repairs() {
    return database.query(
    `SELECT repair_id, repair_type, repair_desc, cost, date 
    FROM repair_table
    WHERE service_id = '${service.service_id}';`
    )
    .then(repairRows =>{
      serviceObj['repairs'] = repairRows;
      return serviceObj;
    }).catch(err => {
      throw err;
    })
  }

  const serviceObj = {
    service_id: service.service_id,
    service_type: service.service_type,
    service_desc: service.service_desc,
    date: service.date,
  }

  return {
    repairs: () => Repairs()
  }
}

function getServices(car) {
  async function Services() {
    return database.query(
    `SELECT service_id, service_type, service_desc, date
    FROM service_history_table
    WHERE car_id = ${car.car_id}`
    )
    .then((services, err) =>{
      if (err) throw err;
      let newServices = services.map((service, i) =>{
        service = new getRepairs(service);
        service = Promise.resolve(service.repairs())
        return service;
      })
      return Promise.all(newServices).then((newList) => {return newList})
    }).then((serviceList,err)=>{
      if (err) throw err;
      carObj['services'] = serviceList;
      return carObj;
    })
    .catch(err => {
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
