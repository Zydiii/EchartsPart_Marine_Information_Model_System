import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/icons/iconfont.css'
import './assets/icons/iconfont.js'

Vue.config.productionTip = false

Vue.use(ViewUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
