'use strict'

const Model = use('Model')

class Organization extends Model {
  static get hidden() {
    return ['owner_id', 'logo_id']
  }

  owner() {
    return this.belongsTo('App/Models/User', 'owner_id')
  }

  logo() {
    return this.belongsTo('App/Models/Image', 'logo_id')
  }

  teams() {
    return this.hasMany('App/Models/Team')
  }

  staff() {
    return this.hasMany('App/Models/User')
  }
}

module.exports = Organization
