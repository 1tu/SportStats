'use strict'

const Schema = use('Schema')

class SportsmanSchema extends Schema {
  up () {
    this.create('sportsmen', (table) => {
      table.increments()
      table.string('name_first')
      table.string('name_last')
      table.timestamps()
    })
  }

  down () {
    this.drop('sportsmen')
  }
}

module.exports = SportsmanSchema
