'use strict'

const Model = use('Model')

class Property extends Model {
  static get createdAtColumn() { return null }
  static get updatedAtColumn() { return null }

  static get hidden() {
    return ['physical_quantity_id', 'property_category_id']
  }

  category() {
    return this.belongsTo('App/Models/PropertyCategory')
  }

  quantity() {
    return this.belongsTo('App/Models/PhysicalQuantity')
  }
}

module.exports = Property
