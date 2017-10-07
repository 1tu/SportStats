'use strict'

const Model = use('Model')

class Role extends Model {
  permissions() {
    return this.hasMany('App/Models/Permission')
  }
}

module.exports = Role
