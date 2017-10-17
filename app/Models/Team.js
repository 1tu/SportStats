'use strict'

const Model = use('Model')

class Team extends Model {
  static get hidden() {
    return ['organization_id', 'logo_id', 'sport_id']
  }

  organization() {
    return this.belongsTo('App/Models/Organization')
  }

  trainers() {
    return this.belongsToMany('App/Models/Trainer')
  }

  sportsmen() {
    return this.belongsToMany('App/Models/Sportsman')
  }
}

module.exports = Team
