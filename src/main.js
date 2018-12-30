/**
 * Created by Administrator on 2018/12/28.
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button} from 'mint-ui'

Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  
  components: {
    App,
    
  },
  
  render: h => h(App),
  router
})
