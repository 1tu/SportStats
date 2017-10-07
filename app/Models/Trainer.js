'use strict'

const Model = use('Model')

class Trainer extends Model {
  photo() {
    return this.belongsTo('App/Models/Image')
  }

  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Trainer
