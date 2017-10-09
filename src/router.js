import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from './component/SsFoo.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})

export const routes = [
  {path: '/image', name: 'image'},
  {path: '/organization', name: 'organization'},
  {path: '/permission', name: 'permission'},
  {path: '/physicalQuantity', name: 'physicalQuantity'},
  {path: '/profile', name: 'profile'},
  {path: '/propertyCategory', name: 'propertyCategory'},
  {path: '/property', name: 'property'},
  {path: '/propertyIndividual', name: 'propertyIndividual'},
  {path: '/role', name: 'role'},
  {path: '/sport', name: 'sport'},
  {path: '/sportsman', name: 'sportsman'},
  {path: '/statsTemplateIndividual', name: 'statsTemplateIndividual'},
  {path: '/team', name: 'team'},
  {path: '/trainer', name: 'trainer'},
  {path: '/user', name: 'user'},
]
