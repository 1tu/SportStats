import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from './component/Foo.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})

export const routes = [
  { path: '/foo', title: 'Foo' },
  { path: '/test', title: 'Test' },
  { path: '/lala', title: 'Lalaы' },
  { path: '/olo', title: 'olo' },
]
