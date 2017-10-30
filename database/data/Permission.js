// import { Permission } from '../../@types/Models'
/**
 * @type {Permission[]}
 */
const permissions = [
  { name: "userGet" }, { name: "userPut" }, { name: "userDelete" },
  { name: "organizationGet" }, { name: "organizationPost" }, { name: "organizationPut" }, { name: "organizationDelete" },
  { name: "teamGet" }, { name: "teamPost" }, { name: "teamPut" }, { name: "teamDelete" },
  { name: "propertyPost" }, { name: "propertyPut" }, { name: "propertyDelete" },
  { name: "propertyIndividualGet" }, { name: "propertyIndividualPost" }, { name: "propertyIndividualPut" }, { name: "propertyIndividualDelete" }
]

module.exports = permissions;
