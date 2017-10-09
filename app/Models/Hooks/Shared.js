'use strict'
const _ = require('lodash')
const Profile = use('App/Models/Profile')

const SharedHook = module.exports = {}

SharedHook.createProfile = async (entity) => {
  entity.profile_id = (await Profile.create()).id;
  await entity.save();
}
