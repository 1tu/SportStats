'use strict'

const Model = use('Model')

class Image extends Model {
  author() {
    return this.belongsTo('App/Models/User', 'author_id')
  }
}

module.exports = Image
