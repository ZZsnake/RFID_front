"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "webtest",
  setup(__props) {
    const socket = common_vendor.io("ws://127.0.0.1:5000", {
      transports: ["websocket", "polling"],
      timeout: 5e3
    });
    const message = common_vendor.ref(null);
    socket.on("connect", () => {
      console.log("WebSocket 已连接");
    });
    socket.on("update", (data) => {
      console.log("收到服务器消息：", data);
      message.value = data.msg;
    });
    socket.on("error", (err) => {
      console.error("WebSocket 错误：", err);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: message.value
      }, message.value ? {
        b: common_vendor.t(message.value)
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
