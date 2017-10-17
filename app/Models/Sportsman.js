'use strict'

const Model = use('Model')

class Sportsman extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeSave', 'SportsmanHooks.checkTrainer')
    this.addHook('afterCreate', 'SharedHooks.createProfile')
  }

  static get hidden() {
    return ['profile_id', 'user_id', 'sport_id', 'trainer_id', 'team_id']
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

  measurements() {
    return this.hasMany('App/Models/PropertyIndividual')
  }
}

module.exports = Sportsman
