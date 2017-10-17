'use strict'
// import Knex from 'knex';

const Schema = use('Schema')

class PropertyCategoryQuantitySchema extends Schema {
  up() {
    this.create('property_categories',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.string('name', 40).notNullable().unique()
      })

    this.create('physical_quantities',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.string('name', 20).notNullable().unique()
        table.string('type', 40).notNullable().defaultTo('common')
      })

    this.create('properties',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.string('name', 60).notNullable().unique()
        table.integer('property_category_id').notNullable().unsigned().references('id').inTable('property_categories')
        table.integer('physical_quantity_id').notNullable().unsigned().references('id').inTable('physical_quantities')
      })
  }

  down() {
    this.drop('properties')
    this.drop('property_categories')
    this.drop('physical_quantities')
  }
}

module.exports = PropertyCategoryQuantitySchema
