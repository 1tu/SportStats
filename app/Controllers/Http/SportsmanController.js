// import ARequest from '@adonisjs/framework/src/Request'
// import AResponse from '@adonisjs/framework/src/Response'
// import ASession from '@adonisjs/session/src/Session'
// import AModel from '@adonisjs/lucid/src/Lucid/Model'
/**
 * @typedef {object} Ctx
 * @property {ARequest} request
 * @property {AResponse} response
 * @property {ASession} session
 * @param {Ctx} ctx
 */
'use strict'
const BaseController = require('../_baseController')

class SportsmanController extends BaseController {
  async show(ctx) {
    return await this.Model.query().where('id', ctx.params.id)
      .with('measurements', qb => { qb.with('property', qb2 => { qb2.with('quantity') }) }).first()
  }
}

module.exports = SportsmanController
