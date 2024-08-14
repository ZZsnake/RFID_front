
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// import { setupWebSocket } from '@./utils/websocket.js';

Vue.config.productionTip = false
// 将 WebSocket 设置方法挂载到 Vue 原型上
// Vue.prototype.$setupWebSocket = setupWebSocket;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif