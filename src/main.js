import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

require('moment/locale/it');

moment.locale('it');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')