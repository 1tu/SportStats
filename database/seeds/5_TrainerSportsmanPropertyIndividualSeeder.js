'use strict'

const _ = require('lodash')
const Trainer = use('App/Models/Trainer')
const Sportsman = use('App/Models/Sportsman')
const PropertyIndividual = use('App/Models/PropertyIndividual')

class Seeder {
  async run() {
    const trainers = (await Trainer.all()).toJSON();
    const sportsmen = (await Sportsman.all()).toJSON();
    const property_individuals = (await PropertyIndividual.all()).toJSON();

    if (trainers.length || sportsmen.length || property_individuals.length) return

    await Trainer.createMany(require('../data/Trainer'))
    await Sportsman.createMany(require('../data/Sportsman'))
    await PropertyIndividual.createMany(require('../data/PropertyIndividual'))
  }
}

module.exports = Seeder
