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

    this.alter('profiles', (table) => {
      table.integer('image_id').unsigned().references('id').inTable('images')
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

    this.alter('users', (table) => {
      table.integer('organization_id').unsigned().references('id').inTable('organizations')
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
        table.date('hired_at').notNullable().defaultTo(this.fn.now())
        table.date('fired_at')
      })

    this.create('sportsman_team',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.integer('sportsman_id').notNullable().unsigned().references('id').inTable('sportsmen')
        table.integer('team_id').notNullable().unsigned().references('id').inTable('teams')
        table.date('hired_at').notNullable().defaultTo(this.fn.now())
        table.date('fired_at')
      })
  }

  down() {
    this.drop('sportsman_team')
    this.drop('trainer_team')
    this.drop('teams')
    this.alter('users', table => { table.dropForeign('organization_id') })
    this.drop('organizations')
    this.alter('profiles', table => { table.dropForeign('image_id') })
    this.drop('images')
  }
}

module.exports = ImageSchema
