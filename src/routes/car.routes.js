const express = require('express');
const carController = require('../controllers/car.controller');
const router = express.Router();

router.get('/cars', carController.getAllCars);
router.get('/cars/:id', carController.getCarById);
router.post('/cars', carController.createCar);
router.put('/cars/:id', carController.updateCar);
router.delete('/cars/:id', carController.deleteCar);

module.exports = router;