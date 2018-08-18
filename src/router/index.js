import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Features from '@/components/Features'
import Faq from '@/components/Faq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/features',
      name: 'Features',
      component: Features
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
  ]
})
