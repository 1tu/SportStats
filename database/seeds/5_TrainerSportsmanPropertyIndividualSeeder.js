'use strict'

const Database = use('Database')
const _ = require('lodash')
const Trainer = use('App/Models/Trainer')
const Team = use('App/Models/Team')
const Sportsman = use('App/Models/Sportsman')
const PropertyIndividual = use('App/Models/PropertyIndividual')

class Seeder {
  async run() {
    const trainers = (await Trainer.all()).toJSON();
    const teams = (await Team.all()).toJSON();
    const sportsmen = (await Sportsman.all()).toJSON();
    const property_individuals = (await PropertyIndividual.all()).toJSON();

    if (trainers.length || teams.length || sportsmen.length || property_individuals.length) return

    await Trainer.createMany(require('../data/Trainer'))
    await Team.createMany(require('../data/Team'))
    await Sportsman.createMany(require('../data/Sportsman'))
    await Database.table('sportsman_team').insert(require('../data/Sportsman_Team'))
    await PropertyIndividual.createMany(require('../data/PropertyIndividual'))
  }
}

module.exports = Seeder
