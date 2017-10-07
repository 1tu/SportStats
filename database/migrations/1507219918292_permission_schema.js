'use strict'

const Schema = use('Schema')

class PermissionSchema extends Schema {
  up() {
    this.create('permissions', (table) => {
      table.increments()
      table.string('name')
    })
  }

  down() {
    this.drop('permissions')
  }
}

module.exports = PermissionSchema
