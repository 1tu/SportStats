'use strict'

const Model = use('Model')

class Property extends Model {
  category() {
    return this.belongsTo('App/Models/PropertyCategory')
  }

  quantity() {
    return this.belongsTo('App/Models/PhysicalQuantity')
  }
}

module.exports = Property
