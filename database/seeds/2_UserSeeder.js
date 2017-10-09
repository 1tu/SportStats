'use strict'

const _ = require('lodash')
const User = use('App/Models/User')

class UserSeeder {
  async run() {
    if ((await User.all()).toJSON().length) return
    await User.createMany(require('../data/User'))
  }
}

module.exports = UserSeeder
