const express = require('express');
const app = express();
const typePackageRoute = express.Router();
let typePackageModel = require("../model/TypePackageModel");

typePackageRoute.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  next();
});

// Get all typePackage
typePackageRoute.route('/').get((req, res) => {
  typePackageModel.find().sort({id: 1}).exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// Get one typePackage
typePackageRoute.route('/typePackage/:name').get((req, res) => {
  typePackageModel.find().sort({name: req.params.name}).exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// create typePackage
typePackageRoute.route('/create').post((req, res, next) => {
  // console.log(req.body);
  typePackageModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Delete typePackage
typePackageRoute.route('/delete/:id').delete((req, res, next) => {
  // console.log("typePackage delete");
  typePackageModel.deleteOne({
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

typePackageRoute.route('/update/:id').put((req, res, next) => {
  $old = typePackageModel.find({
    id: req.params.id
  });
  typePackageModel.updateOne($old, {
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


module.exports = typePackageRoute;
