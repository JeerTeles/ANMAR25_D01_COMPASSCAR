const express = require('express');
const carController = require('../controllers/car.controller');
const router = express.Router();

router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

router.put('/:id/items', carController.updateCarItems);


module.exports = router;

  

