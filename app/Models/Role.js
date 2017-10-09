'use strict'

const Model = use('Model')

class Role extends Model {
  static get createdAtColumn() { return null }
  static get updatedAtColumn() { return null }

  permissions() {
    return this.belongsToMany('App/Models/Permission')
  }
}

module.exports = Role
