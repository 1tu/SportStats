'use strict'
// import { TableBuilder } from 'knex';

const Schema = use('Schema')

class ImageSchema extends Schema {
  up() {
    this.create('images',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.integer('author_id').unsigned().references('id').inTable('users').comment('the user uploaded image')
        table.string('url', 150)
        table.string('title', 60)
        table.text('description')
        table.timestamps()
      })

    this.create('organizations',
      /**
       * @param {TableBuilder} table
       */
      table => {
        table.increments()
        table.integer('owner_id').notNullable().unsigned().references('id').inTable('users').comment('the user uploaded image')
        table.integer('logo_id').unsigned().references('id').inTable('images')
        table.string('name', 60)
        table.string('name_full', 150)
        table.text('description')
        table.date('birthdate')
        table.string('country', 40)
        table.string('city', 40)
        table.string('address', 150)
        table.string('phone', 20)
        table.date('enroll_expires_at')
        table.timestamps()
      })

    this.create('teams',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.integer('organization_id').unsigned().references('id').inTable('organizations')
        table.integer('sport_id').notNullable().unsigned().references('id').inTable('sports')
        table.integer('logo_id').unsigned().references('id').inTable('images')
        table.string('name', 50)
        table.string('name_full')
        table.date('birthdate')
        table.timestamps()
      })

    this.create('trainer_team',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.integer('trainer_id').notNullable().unsigned().references('id').inTable('trainers')
        table.integer('team_id').notNullable().unsigned().references('id').inTable('teams')
      })

    this.alter('users', (table) => {
      table.integer('organization_id').unsigned().references('id').inTable('organizations')
    })

    this.alter('sportsmen', (table) => {
      table.integer('team_id').unsigned().references('id').inTable('teams')
    })
  }

  down() {
    this.alter('sportsmen', table => { table.dropForeign('team_id') })
    this.alter('users', table => { table.dropForeign('organization_id') })
    this.drop('trainer_team')
    this.drop('teams')
    this.drop('organizations')
    this.drop('images')
  }
}

module.exports = ImageSchema