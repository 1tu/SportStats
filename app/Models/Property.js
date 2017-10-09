'use strict'

const Model = use('Model')

class Property extends Model {
  static get createdAtColumn() { return null }
  static get updatedAtColumn() { return null }

  category() {
    return this.belongsTo('App/Models/PropertyCategory')
  }

  quantity() {
    return this.belongsTo('App/Models/PhysicalQuantity')
  }
}

module.exports = Property
