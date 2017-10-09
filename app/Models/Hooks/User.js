'use strict'
const Hash = use('Hash')

const UserHook = module.exports = {}

UserHook.hashPassword = async (user) => {
  if (user.password) user.password = await Hash.make(user.password)
}

UserHook.setUserRole = async (user) => {
  user.role_id = 1
}
