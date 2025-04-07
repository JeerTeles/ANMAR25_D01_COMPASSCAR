const Car = require('../models/car.model');

function validatePlateFormat(plate) {
  const plateRegex = /^[A-Z]{3}-[0-9]([A-J]|[0-9])[0-9]{2}$/;
  return plateRegex.test(plate);
}

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

  if (!validatePlateFormat(carData.plate)) {
    throw new Error(
      'Plate format is invalid. Expected format: ABC-1D23 or ABC-1234 (D = A-J or digit).'
    );
  }

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

  if (carData.year) {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const minYear = nextYear - 10;

    if (carData.year < minYear || carData.year > nextYear) {
      throw new Error(`Only cars between ${minYear} and ${nextYear} are allowed.`);
    }
  }

  if (carData.plate) {
    if (!validatePlateFormat(carData.plate)) {
      throw new Error(
        'Plate format is invalid. Expected format: ABC-1D23 or ABC-1234 (D = A-J or digit).'
      );
    }

    if (carData.plate !== car.plate) {
      const existingCar = await Car.findOne({ where: { plate: carData.plate } });
      if (existingCar) {
        throw new Error(`Car with this plate already exists.`);
      }
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

const CarItem = require('../models/car_item.model');

async function updateCarItems(carId, items) {
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array.');
  }

  const allStrings = items.every(item => typeof item === 'string');
  if (!allStrings) {
    throw new Error('All items must be strings.');
  }

  const car = await Car.findByPk(carId);
  if (!car) {
    throw new Error(`Carro com ID ${carId} não encontrado.`);
  }

  await CarItem.destroy({ where: { carId } });

  const newItems = items.map(name => ({ name, carId }));
  await CarItem.bulkCreate(newItems);

  const updatedItems = await CarItem.findAll({ where: { carId } });
  return {
    car,
    items: updatedItems
  };
}

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  updateCarItems,
};
