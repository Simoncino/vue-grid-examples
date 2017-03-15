import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyVueTable2 from '@/components/vue-table-2/MyVueTable2'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'MyVueTable2',
		component: MyVueTable2
	},
	{
		path: '/hello',
		name: 'Hello',
		component: Hello
	}
	]
})
