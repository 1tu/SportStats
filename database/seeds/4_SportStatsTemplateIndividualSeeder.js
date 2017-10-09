'use strict'

const _ = require('lodash')
const Sport = use('App/Models/Sport')
const StatsTemplateIndividual = use('App/Models/StatsTemplateIndividual')

class Seeder {
  async run() {
    const sports = (await Sport.all()).toJSON();
    const stats_template_individuals = (await StatsTemplateIndividual.all()).toJSON();

    if (sports.length || stats_template_individuals.length) return

    const relations = require('../data/Property_StatsTemplateIndividual')
    await Sport.createMany(require('../data/Sport'))
    await Promise.all(_.map(require('../data/StatsTemplateIndividual'), async item => {
      const template = await StatsTemplateIndividual.create(item)
      return await template.properties().attach(
        _(relations).filter(item => item.stats_template_individual_id === template.id).map('property_id').value()
      )
    }))
  }
}

module.exports = Seeder
