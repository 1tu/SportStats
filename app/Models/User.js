'use strict'

const Model = use('Model')

class User extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', 'UserHooks.hashPassword')
    this.addHook('afterCreate', 'SharedHooks.createProfile')

    this.addHook('beforeSave', 'UserHooks.setUserRole')
  }

  static get hidden() {
    return ['password', 'role_id', 'organization_id']
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }

  role() {
    return this.belongsTo('App/Models/Role')
  }

  profile() {
    return this.belongsTo('App/Models/Profile')
  }
}

module.exports = User
