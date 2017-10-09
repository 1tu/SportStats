'use strict'

const Model = use('Model')

class Trainer extends Model {
  static boot() {
    super.boot()

    this.addHook('afterCreate', 'Shared.createProfile')
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
