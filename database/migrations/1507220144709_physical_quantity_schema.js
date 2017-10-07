'use strict'

const Schema = use('Schema')

class PhysicalQuantitySchema extends Schema {
  up() {
    this.create('physical_quantities', (table) => {
      table.increments()
      table.string('name')
      table.string('name_short')
    })
  }

  down() {
    this.drop('physical_quantities')
  }
}

module.exports = PhysicalQuantitySchema
