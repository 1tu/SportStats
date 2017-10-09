'use strict'
// import { TableBuilder } from 'knex';

const Schema = use('Schema')

class StatsTemplateIndividualSchema extends Schema {
  up() {
    this.create('sports',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.string('name', 40).notNullable().unique()
        table.timestamps()
      })

    this.create('stats_template_individuals',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.string('name', 100).notNullable()
        table.integer('sport_id').notNullable().unsigned().references('id').inTable('sports')
        table.timestamps()
      })

    this.create('property_stats_template_individual',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.integer('stats_template_individual_id').notNullable().unsigned().references('id').inTable('stats_template_individuals')
        table.integer('property_id').notNullable().unsigned().references('id').inTable('properties')
      })
  }

  down() {
    this.drop('property_stats_template_individual')
    this.drop('stats_template_individuals')
    this.drop('sports')
  }
}

module.exports = StatsTemplateIndividualSchema
