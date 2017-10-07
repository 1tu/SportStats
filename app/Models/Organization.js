'use strict'

const Model = use('Model')

class Organization extends Model {
  owner() {
    return this.belongsTo('App/Models/User')
  }

  teams() {
    return this.hasMany('App/Models/Team')
  }
}

module.exports = Organization
