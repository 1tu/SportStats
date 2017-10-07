'use strict'

const Schema = use('Schema')

class SportSchema extends Schema {
  up () {
    this.create('sports', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('sports')
  }
}

module.exports = SportSchema
