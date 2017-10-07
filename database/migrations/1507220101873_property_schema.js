'use strict'

const Schema = use('Schema')

class PropertySchema extends Schema {
  up() {
    this.create('properties', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down() {
    this.drop('properties')
  }
}

module.exports = PropertySchema
