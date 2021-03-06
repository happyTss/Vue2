import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Directives from './directives'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './views/example'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Directives);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
