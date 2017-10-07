'use strict'

const Schema = use('Schema')

class StatsTemplateIndividualSchema extends Schema {
  up() {
    this.create('stats_template_individuals', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down() {
    this.drop('stats_template_individuals')
  }
}

module.exports = StatsTemplateIndividualSchema
