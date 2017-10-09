// import Request from '@adonisjs/framework/src/Request'
// import Response from '@adonisjs/framework/src/Response'
// import Session from '@adonisjs/session/src/Session'
// import Model from '@adonisjs/lucid/src/Lucid/Model';

const _ = require('lodash')

class CommonController {
  constructor() {
    this.modelName = this.constructor.name.replace('Controller', '')
    /**
     * @type {Model}
     */
    this.Model = use(`App/Models/${this.modelName}`)
  }

  /**
  * @typedef {object} Ctx
  * @property {Request} request
  * @property {Response} response
  * @property {Session} session
  * @param {Ctx} ctx
  */
  async index() {
    return await this.Model.all()
  }

  /**
  * @typedef {object} Ctx
  * @property {Request} request
  * @property {Response} response
  * @property {Session} session
  * @param {Ctx} ctx
  */
  async store(ctx) {
    return await this.Model.save(ctx.request.all())
  }

  /**
  * @typedef {object} Ctx
  * @property {Request} request
  * @property {Response} response
  * @property {Session} session
  * @param {Ctx} ctx
  */
  async show(ctx) {
    return await this.Model.find(ctx.params.id)
  }

  /**
  * @typedef {object} Ctx
  * @property {Request} request
  * @property {Response} response
  * @property {Session} session
  * @param {Ctx} ctx
  */
  async update(ctx) {
    return await this.Model.save(_.extend({ id: ctx.params.id }, ctx.request.all()))
  }

  /**
  * @typedef {object} Ctx
  * @property {Request} request
  * @property {Response} response
  * @property {Session} session
  * @param {Ctx} ctx
  */
  async destroy(ctx) {
    return await this.Model.delete(ctx.params.id)
  }
}

module.exports = CommonController
