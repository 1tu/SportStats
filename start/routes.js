'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('/').render('index')

Route.resource('image', 'ImageController').apiOnly()
Route.resource('organization', 'OrganizationController').apiOnly()
Route.resource('permission', 'PermissionController').apiOnly()
Route.resource('physicalQuantity', 'PhysicalQuantityController').apiOnly()
Route.resource('profile', 'ProfileController').apiOnly()
Route.resource('propertyCategory', 'PropertyCategoryController').apiOnly()
Route.resource('property', 'PropertyController').apiOnly()
Route.resource('propertyIndividual', 'PropertyIndividualController').apiOnly()
Route.resource('role', 'RoleController').apiOnly()
Route.resource('sport', 'SportController').apiOnly()
Route.resource('sportsman', 'SportsmanController').apiOnly()
Route.resource('statsTemplateIndividual', 'StatsTemplateIndividualController').apiOnly()
Route.resource('team', 'TeamController').apiOnly()
Route.resource('trainer', 'TrainerController').apiOnly()
Route.resource('user', 'UserController').apiOnly()

// Route.any('*', ({ view }) => view.render('index'))
