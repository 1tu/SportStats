'use strict'

const Model = use('Model')

class Sport extends Model {
  sportsmen() {
    return this.hasMany('App/Models/Sportsman')
  }
}

module.exports = Sport
