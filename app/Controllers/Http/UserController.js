'use strict'
const CommonController = require('../CommonController')

class UserController extends CommonController {
  async login({ request, auth }) {
    const { email, password } = request.all()
    await auth.remember(true).attempt(email, password)

    return 'Logged in successfully'
  }
}

module.exports = UserController
