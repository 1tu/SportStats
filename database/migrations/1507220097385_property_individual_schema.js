'use strict'

const Schema = use('Schema')

class PropertyIndividualSchema extends Schema {
  up() {
    this.create('property_individuals', (table) => {
      table.increments()
      table.decimal('value')
      table.timestamps()
    })
  }

  down() {
    this.drop('property_individuals')
  }
}

module.exports = PropertyIndividualSchema
