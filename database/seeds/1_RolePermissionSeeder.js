'use strict'

const _ = require('lodash')
const Role = use('App/Models/Role')
const Permission = use('App/Models/Permission')

class RoleSeeder {
  async run() {
    const roles = (await Role.all()).toJSON();
    const permissions = (await Permission.all()).toJSON();

    if (roles.length || permissions.length) return

    const relations = require('../data/Permission_Role')
    await Permission.createMany(require('../data/Permission'))
    await Promise.all(_.map(require('../data/Role'), async item => {
      const role = await Role.create(item)
      return await role.permissions().attach(
        _(relations).filter(item => item.role_id === role.id).map('permission_id').value()
      )
    }))
  }
}

module.exports = RoleSeeder
