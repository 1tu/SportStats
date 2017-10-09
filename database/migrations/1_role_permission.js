'use strict'
// import { TableBuilder } from 'knex';

const Schema = use('Schema')

class RoleSchema extends Schema {
  up() {
    this.create('roles',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.string('name', 40).unique().notNullable()
      })

    this.create('permissions',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.string('name', 40).unique().notNullable()
      })

    this.create('permission_role',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.integer('role_id').notNullable().unsigned().references('id').inTable('roles')
        table.integer('permission_id').notNullable().unsigned().references('id').inTable('permissions')
      })
  }

  down() {
    this.drop('permission_role')
    this.drop('permissions')
    this.drop('roles')
  }
}

module.exports = RoleSchema
