import Vue, { Component } from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes: { path: string, componentName: string, title: string }[] = [
  { path: '/user', componentName: 'SsUserList', title: 'User list' },
  // { path: '/role', title: 'Role' },
  // { path: '/permission', title: 'Permission' },
  // { path: '/profile', title: 'Profile' },
  { path: '/sport', componentName: 'SsSport', title: 'Sport' },
  // { path: '/statsTemplateIndividual', title: 'Stats template individual' },
  { path: '/sportsmanList', componentName: 'SsSportsmanList', title: 'Sportsman list' },
  { path: '/sportsmanList', componentName: 'SsSportsman', title: 'Sportsman' },
  // { path: '/trainer', title: 'Trainer' },
  // { path: '/organization', title: 'Organization' },
  { path: '/team', componentName: 'SsTeam', title: 'Team' },
  // { path: '/propertyIndividual', title: 'Property individual' },
  // { path: '/property', title: 'Property' },
  // { path: '/physicalQuantity', title: 'Physical quantity' },
  // { path: '/propertyCategory', title: 'Property category' },
  // { path: '/image', title: 'Image', icon: 'image' },
];

const advencedRoutes = [
  { path: '/user/:id', component: require(`./components/SsUser`).SsUser },
];

export const router = new VueRouter({
  routes: routes.map(route => ({
    path: route.path,
    component: require(`./components/${route.componentName}`)[route.componentName]
  })).concat(advencedRoutes)
});
