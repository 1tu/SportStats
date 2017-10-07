'use strict'

const Schema = use('Schema')

class TrainerSchema extends Schema {
  up () {
    this.create('trainers', (table) => {
      table.increments()
      table.string('name_first')
      table.string('name_last')
      table.timestamps()
    })
  }

  down () {
    this.drop('trainers')
  }
}

module.exports = TrainerSchema
