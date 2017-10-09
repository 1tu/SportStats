'use strict'

const Model = use('Model')

class Sportsman extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeSave', 'Sportsman.checkTrainer')

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

  trainer() {
    return this.belongsTo('App/Models/Trainer')
  }
}

module.exports = Sportsman
