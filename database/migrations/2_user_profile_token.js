'use strict'
// import { TableBuilder } from 'knex';

const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('profiles',
      /**
       * @param {TableBuilder} table
       */
      (table) => {
        table.increments()
        table.string('name_first', 30)
        table.string('name_second', 30)
        table.string('name_last', 30)
        table.date('birthdate')
        table.string('city', 40)
        table.string('country', 40)
        table.string('phone', 20)
        table.string('photo', 40)
        table.timestamps()
      })

    this.create('users',
      /**
       * @param {TableBuilder} table
       */
      table => {
        table.increments()
        table.integer('role_id').notNullable().unsigned().references('id').inTable('roles').defaultTo(1)
        table.integer('profile_id').unsigned().references('id').inTable('profiles')
        table.string('username', 80).notNullable().unique()
        table.string('email', 254).notNullable().unique()
        table.string('password', 60).notNullable()
        table.date('enroll_expires_at')
        table.timestamps()
      })

    this.create('tokens',
      /**
       * @param {TableBuilder} table
       */
      table => {
        table.increments()
        table.integer('user_id').unsigned().references('id').inTable('users')
        table.string('token', 40).notNullable().unique()
        table.boolean('is_revoked').defaultTo(false)
        table.timestamps()
      })
  }

  down() {
    this.drop('tokens')
    this.drop('users')
    this.drop('profiles')
  }
}

module.exports = UserSchema
