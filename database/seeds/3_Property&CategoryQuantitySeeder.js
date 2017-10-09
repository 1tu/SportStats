'use strict'

const _ = require('lodash')
const PropertyCategory = use('App/Models/PropertyCategory')
const PhysicalQuantity = use('App/Models/PhysicalQuantity')
const Property = use('App/Models/Property')

class PropertySeeder {
  async run() {
    const property_categories = (await PropertyCategory.all()).toJSON();
    const physical_quantities = (await PhysicalQuantity.all()).toJSON();
    const properties = (await Property.all()).toJSON();

    if (property_categories.length || physical_quantities.length || properties.length) return

    await PropertyCategory.createMany(require('../data/PropertyCategory'))
    await PhysicalQuantity.createMany(require('../data/PhysicalQuantity'))
    await Property.createMany(require('../data/Property'))
  }
}

module.exports = PropertySeeder
