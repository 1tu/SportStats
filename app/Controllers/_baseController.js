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

const _ = require('lodash')

class BaseController {
  constructor() {
    this.modelName = this.constructor.name.replace('Controller', '')
    /**
     * @type {AModel}
     */
    this.Model = use(`App/Models/${this.modelName}`)
  }

  /**
   * @param {Ctx} ctx
   */
  async index() {
    return await this.Model.all()
  }

  /**
   * @param {Ctx} ctx
   */
  async store(ctx) {
    ctx.request.body
    return await this.Model.save(ctx.request.all())
  }

  /**
   * @param {Ctx} ctx
   */
  async show(ctx) {
    return await this.Model.find(ctx.params.id)
  }

  /**
   * @param {Ctx} ctx
   */
  async update(ctx) {
    return await this.Model.save(ctx.request.all())
  }

  /**
   * @param {Ctx} ctx
   */
  async destroy(ctx) {
    return await this.Model.delete(ctx.params.id)
  }
}

module.exports = BaseController
