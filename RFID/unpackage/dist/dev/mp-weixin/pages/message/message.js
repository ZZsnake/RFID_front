"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "message",
  setup(__props) {
    const msgs = common_vendor.ref([]);
    function loadMessages() {
      const storedMessages = common_vendor.index.getStorageSync("messages") || [];
      if (storedMessages.length > 50) {
        storedMessages = storedMessages.slice(-50);
        common_vendor.index.setStorageSync("messages", storedMessages);
        console.log("消息队列超出50条.");
      }
      console.log(storedMessages);
      msgs.value = storedMessages.reverse();
    }
    function goto(msgType) {
      let url = "";
      switch (msgType) {
        case 1:
          url = "/pages/msgToiletIn/msgToiletIn";
          break;
        case 2:
          url = "/pages/msgToiletOut/msgToiletOut";
          break;
        case 3:
          url = "/pages/msgKitchen/msgKitchen";
          break;
        case 4:
          url = "/pages/msgKitchenOut/msgKitchenOut";
          break;
        case 5:
          url = "/pages/msgCloseDoor/msgCloseDoor";
          break;
        case 6:
          url = "/pages/msgDoor/msgDoor";
          break;
        case 9:
          url = "/pages/msgToilet/msgToilet";
          break;
        default:
          console.warn("未匹配到对应的页面路由");
          return;
      }
      console.log(url);
      common_vendor.index.navigateTo({
        url
      });
    }
    common_vendor.onMounted(() => {
      loadMessages();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(msgs.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.time),
            b: common_vendor.t(item.msg),
            c: common_vendor.o(($event) => goto(item.type), item.id),
            d: item.id
          };
        }),
        b: common_assets._imports_0$3
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c1b26cf"]]);
wx.createPage(MiniProgramPage);
