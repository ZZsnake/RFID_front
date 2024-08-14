"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/device/device.js";
  "./pages/my/my.js";
  "./pages/message/message.js";
  "./pages/msgDoor/msgDoor.js";
  "./pages/msgKitchen/msgKitchen.js";
  "./pages/msgToilet/msgToilet.js";
  "./pages/msgCloseDoor/msgCloseDoor.js";
  "./pages/add/add.js";
  "./pages/webtest/webtest.js";
  "./pages/msgKitchenOut/msgKitchenOut.js";
  "./pages/msgToiletIn/msgToiletIn.js";
  "./pages/msgToiletOut/msgToiletOut.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    this.initWebSocket();
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  methods: {}
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
