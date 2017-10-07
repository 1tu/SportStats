'use strict'

const Schema = use('Schema')

class ImageSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table.string('original')
      table.string('xlg')
      table.string('lg')
      table.string('md')
      table.string('sm')
      table.string('xs')
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema
