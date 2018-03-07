import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld=()=>import('@/components/HelloWorld')
const Whitepaper=()=>import('@/components/project/Whitepaper')

Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/whitepaper',
      name: 'Whitepaper',
      component:Whitepaper,
      meta:{
        keepAlive: true
      }
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
