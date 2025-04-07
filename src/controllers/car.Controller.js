const carService = require('../services/car.service');

async function getAllCars(req, res) {
  try {
    const cars = await carService.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function getCarById(req, res) {
  const { id } = req.params;
  try {
    const car = await carService.getCarById(id);
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).json({ message: 'Car not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function createCar(req, res) {
  try {
    const newCar = await carService.createCar(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCar(req, res) {
  const { id } = req.params;
  try {
    const updatedCar = await carService.updateCar(id, req.body);
    if (updatedCar) {
      res.status(200).json(updatedCar);
    } else {
      res.status(404).json({ message: 'Car not found.' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteCar(req, res) {
  const { id } = req.params;
  try {
    const deleted = await carService.deleteCar(id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Car not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/* atualizações caritems */
async function updateCarItems(req, res) {
  const { id } = req.params;
  const items = req.body;

  try {
    const result = await carService.updateCarItems(id, items);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  updateCarItems, 
};