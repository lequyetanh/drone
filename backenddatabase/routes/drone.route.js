const express = require('express');
const app = express();
const droneRoute = express.Router();
let droneModel = require("../model/DroneModel");

droneRoute.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  next();
});

// Get all drone
droneRoute.route('/').get((req, res) => {
  droneModel.find().sort({id: 1}).exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// Get all drone free
droneRoute.route('/free').get((req, res) => {
  droneModel.find({status: 'free'}).sort({id: 1}).exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});


// Get one drone
droneRoute.route('/drone/:id').get((req, res) => {
  droneModel.find().sort({id: 1}).exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// create drone
droneRoute.route('/create').post((req, res, next) => {
  // console.log(req.body);
  droneModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Delete drone
droneRoute.route('/delete/:id').delete((req, res, next) => {
  // console.log("drone delete");
  droneModel.deleteOne({
    id: req.params.id
  }).exec((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send(data)
      // console.log("success delete");
    }
  })
})

droneRoute.route('/update/:id').put((req, res, next) => {
  $old = droneModel.find({
    id: req.params.id
  });
  droneModel.updateOne($old, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      // console.log(error)
    } else {
      res.json(data)
      // console.log('Data updated successfully')
    }
  })
});




module.exports = droneRoute;
