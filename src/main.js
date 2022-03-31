import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import VModal from 'vue-js-modal'

require('moment/locale/it');

moment.locale('it');

Vue.config.productionTip = false

Vue.use(VModal);

new Vue({
  render: h => h(App),
}).$mount('#app')