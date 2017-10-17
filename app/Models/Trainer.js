'use strict'

const Model = use('Model')

class Trainer extends Model {
  static boot() {
    super.boot()

    this.addHook('afterCreate', 'SharedHooks.createProfile')
  }

  static get hidden() {
    return ['profile_id', 'user_id', 'sport_id']
  }

  user() {
    return this.belongsTo('App/Models/User')
  }

  profile() {
    return this.belongsTo('App/Models/Profile')
  }

  sport() {
    return this.belongsTo('App/Models/Sport')
  }
}

module.exports = Trainer
