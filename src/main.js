import Vue from 'vue'
import App from './App.vue'
/*import VueRouter from 'vue-router'
import todo from './components/todo.vue'


Vue.use(VueRouter);
const routes=[

{path:'/todos',component:todo},
]
const router= new VueRouter({
	routes
})*/

Vue.config.productionTip = false

new Vue({
	//router:router,
  render: h => h(App),
}).$mount('#app')
