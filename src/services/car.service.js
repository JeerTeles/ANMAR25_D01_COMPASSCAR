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

  /* Verificação de intervalo de ano */
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const minYear = nextYear - 10;

  if (carData.year < minYear || carData.year > nextYear) {
    throw new Error(`Only cars between ${minYear} and ${currentYear} are allowed.`);
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
    throw new Error(`Car with ID ${id} not found.`);
  }

  /* Verificação de intervalo de ano (caso tentem alterar o ano) */
  if (carData.year) {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const minYear = nextYear - 10;

    if (carData.year < minYear || carData.year > nextYear) {
      throw new Error(`Only cars between ${minYear} and ${currentYear} are allowed.`);
    }
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
    return false;
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
