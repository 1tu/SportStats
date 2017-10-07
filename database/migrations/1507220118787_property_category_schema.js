'use strict'

const Schema = use('Schema')

class PropertyCategorySchema extends Schema {
  up () {
    this.create('property_categories', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('property_categories')
  }
}

module.exports = PropertyCategorySchema
