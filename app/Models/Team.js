'use strict'

const Model = use('Model')

class Team extends Model {
  trainers() {
    return this.hasMany('App/Models/Trainer')
  }

  sportsmen() {
    return this.hasMany('App/Models/Sportsman')
  }
}

module.exports = Team
