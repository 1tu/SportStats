'use strict'

const Model = use('Model')

class Permission extends Model {
  static get createdAtColumn() { return null }
  static get updatedAtColumn() { return null }

}

module.exports = Permission
