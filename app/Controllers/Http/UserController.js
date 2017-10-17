'use strict'
const BaseController = require('../_baseController')

class UserController extends BaseController {
  async login({ request, auth }) {
    const { email, password } = request.all()
    await auth.remember(true).attempt(email, password)

    return 'Logged in successfully'
  }
}

module.exports = UserController
