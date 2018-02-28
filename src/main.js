import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Sidebar from './Sidebar.vue'
import Pagecontent from './Pagecontent.vue'
import Titlecard from './components/Titlecard.vue'
import Card from './components/Card.vue'

Vue.use(BootstrapVue)
Vue.component('sidebar', Sidebar);
Vue.component('pagecontent', Pagecontent);
Vue.component('titlecard', Titlecard);
Vue.component('card', Card);

new Vue({
  el: '#app',
  render: h => h(App),
})


