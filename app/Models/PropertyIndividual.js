'use strict'

const Model = use('Model')

class PropertyIndividual extends Model {
  property() {
    return this.belongsTo('App/Models/Property')
  }

  sportsman() {
    return this.belongsTo('App/Models/Sportsman')
  }

  trainer() {
    return this.belongsTo('App/Models/Trainer')
  }
}

module.exports = PropertyIndividual
