'use strict'

const Model = use('Model')

class Team extends Model {
  organization() {
    return this.belongsTo('App/Models/Organization')
  }

  trainers() {
    return this.belongsToMany('App/Models/Trainer')
    // return this.hasMany('App/Models/Trainer')
  }

  sportsmen() {
    return this.hasMany('App/Models/Sportsman')
  }
}

module.exports = Team
