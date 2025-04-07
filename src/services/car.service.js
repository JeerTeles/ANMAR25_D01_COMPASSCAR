const Car = require('../models/car.model');

async function getAllCars() {
  return await Car.findAll();
}

async function getCarById(id) {
  return await Car.findByPk(id);
}

async function createCar(carData) {
  if (!carData.brand || !carData.model || !carData.plate || !carData.year) {
    let errorMessage = '';
    if (!carData.brand) {
      errorMessage += 'brand is required - ';
    }
    if (!carData.model) {
      errorMessage += 'model is required - ';
    }
    if (!carData.year) {
      errorMessage += 'year is required - ';
    }
    if (!carData.plate) {
      errorMessage += 'plate is required - ';
    }

    throw new Error(errorMessage);
  }

  const existingCar = await Car.findOne({ where: { plate: carData.plate } });
  if (existingCar) {
    throw new Error('Car already registered.');
  }
  return await Car.create(carData);
}

async function updateCar(id, carData) {
  const car = await Car.findByPk(id);
  if (!car) {
    throw new Error(`Carro com ID ${id} não encontrado.`);
  }

  if (carData.plate && carData.plate !== car.plate) {
    const existingCar = await Car.findOne({ where: { plate: carData.plate } });
    if (existingCar) {
      throw new Error(`Car with this plate already exists.`);
    }
  }
  await Car.update(carData, { where: { id } });
  return await Car.findByPk(id);
}

async function deleteCar(id) {
  const car = await Car.findByPk(id);
  if (!car) {
    return false; // Throw new Erro (Carro com ID ${id} não encontrado)
  }
  const deletedRows = await Car.destroy({ where: { id } });
  return deletedRows > 0;
}

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
