'use strict'
// import { TableBuilder } from 'knex';

const Schema = use('Schema')

class PropertyIndividualSchema extends Schema {
  up() {
    this.create('trainers',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.integer('profile_id').unsigned().references('id').inTable('profiles')
        table.integer('user_id').unsigned().references('id').inTable('users')
        table.integer('sport_id').notNullable().unsigned().references('id').inTable('sports')
        table.timestamps()
      })

    this.create('sportsmen',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.integer('position').notNullable().unsigned()
        table.date('career_began_at')
        table.date('career_ended_at')
        table.integer('profile_id').unsigned().references('id').inTable('profiles')
        table.integer('user_id').unsigned().references('id').inTable('users')
        table.integer('trainer_id').unsigned().references('id').inTable('trainers')
        table.integer('sport_id').notNullable().unsigned().references('id').inTable('sports')
        table.timestamps()
      })

    this.create('property_individuals',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.decimal('value', 14, 4)
        table.integer('property_id').notNullable().unsigned().references('id').inTable('properties')
        table.integer('sportsman_id').notNullable().unsigned().references('id').inTable('sportsmen')
        table.integer('trainer_id').unsigned().references('id').inTable('trainers')
        table.integer('template_id').unsigned().references('id').inTable('stats_template_individuals')
        table.timestamps()
      })
  }

  down() {
    this.drop('property_individuals')
    this.drop('sportsmen')
    this.drop('trainers')
  }
}

module.exports = PropertyIndividualSchema
