import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import aboutRachel from './views/AboutRachel.vue'
//@ts-ignore
import contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutRachel',
      name: 'aboutRachel',
      component: aboutRachel
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
