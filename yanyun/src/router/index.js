import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import tabBar from '@/components/tabbar.vue'
import list from '@/components/list.vue'
import comment from '@/components/comment.vue'
import detail from '@/components/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    	{
				"path":"/",
				"redirect":"/home"
			},
			{
				"path":"/home",
				"meta": {keepAlive: false}, //不缓存本组件
				"components":{home,tabBar}
			},
			{
				"path":"/list",
				"name":"list",
				"meta": {keepAlive: false}, //不缓存本组件
				"components":{list,tabBar}
			},
			{
				"path":"/comment",
				"beforeEnter": (to, from, next) => {
					console.log("单个的路由钩子");
					next();
				},
				"components":{comment,tabBar}
			},
			
			{
				"path":"/detail",
				"name":"detail",
				"components":{detail}
			}
  ]
})
