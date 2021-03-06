import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/ebook'
  },
  {
    path: '/ebook',
    component: () => import(/* webpackChunkName: "about" */ '../views/ebook/index.vue'),
	children:[
		{
			path:':fileName',
			component:() => import('../components/ebook/EbookReader.vue')
		}
	]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
