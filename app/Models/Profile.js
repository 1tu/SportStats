'use strict'

const Model = use('Model')

class Profile extends Model {
  sportsman() {
    return this.hasOne('App/Models/Sportsman')
  }

  trainer() {
    return this.hasOne('App/Models/Trainer')
  }

  user() {
    return this.hasOne('App/Models/User')
  }
}

module.exports = Profile
