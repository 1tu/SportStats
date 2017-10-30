'use strict'
// import * as Models from '../@types/Models'
// import Chance from 'chance'

const Factory = use('Factory')
Factory.blueprint('App/Models/User',
  /**
   * @param {Chance.Chance} faker
   * @return {Models.User}
   */
  (faker, i, data) => ({
    username: data.username || faker.username(),
    email: data.email || faker.email(),
    password: data.password || faker.password(),
    role_id: data.role,
  })
)
