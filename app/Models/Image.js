'use strict'

const Model = use('Model')

class Image extends Model {
  static get hidden() {
    return ['author_id']
  }

  author() {
    return this.belongsTo('App/Models/User', 'author_id')
  }
}

module.exports = Image
