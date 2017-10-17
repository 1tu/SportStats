'use strict'
const Hash = use('Hash')
const _ = require('lodash')

const UserHook = module.exports = {}

UserHook.hashPassword = async(user) => {
  if (user.password) user.password = await Hash.make(user.password)
}

UserHook.setUserRole = async(user) => {
  user.role_id = 1
}
