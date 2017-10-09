'use strict'

const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'User.hashPassword')
    this.addHook('afterCreate', 'Shared.createProfile')

    this.addHook('beforeSave', 'User.setUserRole')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  role () {
    return this.belongsTo('App/Models/Role')
  }

  profile () {
    return this.belongsTo('App/Models/Profile')
  }
}

module.exports = User
