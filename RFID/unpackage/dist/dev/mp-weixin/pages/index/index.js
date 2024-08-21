"use strict";
const common_vendor = require("../../common/vendor.js");
const sharedData = require("../../sharedData.js");
const _sfc_main = {
  data() {
    return {
      exploreImgSrc: "/static/home.jpg",
      fridge: "/static/冰箱.png",
      washer: "/static/智能洗衣机.png",
      message: null,
      msgType: null,
      time: null,
      latestMessages: []
      // 存储最新的两条消息
    };
  },
  methods: {
    goto(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    redirect(msgType) {
      console.log(msgType);
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
      this.goto(url);
    },
    change(e) {
      console.log("当前模式：" + e.type + ",状态：" + e.show);
    },
    toggle(type) {
      this.type = type;
      this.$refs.popup.open(type);
      let messages = common_vendor.index.getStorageSync("messages") || [];
      this.latestMessages = messages.slice(-2).reverse();
    },
    setupWebSocket() {
      const socket = common_vendor.io("ws://122.9.40.140:5000", {
        // const socket = io('ws://127.0.0.1:5000', {
        transports: ["websocket", "polling"],
        timeout: 5e3
      });
      socket.on("connect", () => {
        console.log("WebSocket 已连接");
        let messages = common_vendor.index.getStorageSync("messages") || [];
        this.latestMessages = messages.slice(-2).reverse();
      });
      socket.on("update", (data) => {
        if (sharedData.sharedData.getStatus()) {
          console.log("收到服务器消息：", data);
          this.message = "未登记人员";
          this.msgType = 5;
          this.time = data.time;
        } else {
          console.log("收到服务器消息：", data);
          this.message = data.msg;
          this.msgType = data.type;
          this.time = data.time;
        }
        let messages = common_vendor.index.getStorageSync("messages") || [];
        if (data.type == 8) {
          common_vendor.index.clearStorageSync("messages");
          console.log("Local cache cleared.");
          messages = common_vendor.index.getStorageSync("messages") || [];
          console.log(messages);
          this.latestMessages = messages.slice(-2).reverse();
        } else if (sharedData.sharedData.getStatus()) {
          messages.push({
            msg: "未登记人员",
            type: 5,
            time: data.time
          });
          if (messages.length > 50) {
            messages = messages.slice(-50);
          }
        } else {
          messages.push({
            msg: data.msg,
            type: data.type,
            time: data.time
          });
          if (messages.length > 50) {
            messages = messages.slice(-50);
          }
        }
        common_vendor.index.setStorageSync("messages", messages);
        this.toggle("top");
      });
      socket.on("error", (err) => {
        console.error("WebSocket 错误：", err);
      });
    }
  },
  mounted() {
    this.setupWebSocket();
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_section2 + _easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_icons + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.exploreImgSrc,
    b: common_vendor.f($data.latestMessages, (item, index, i0) => {
      return {
        a: common_vendor.t(item.msg),
        b: "1cf27b2a-0-" + i0,
        c: common_vendor.p({
          title: item.time,
          type: "line"
        }),
        d: common_vendor.o(($event) => $options.redirect(item.type), index),
        e: index
      };
    }),
    c: common_vendor.o(($event) => $options.goto("/pages/message/message")),
    d: common_vendor.p({
      type: "gear-filled"
    }),
    e: common_vendor.t($data.time),
    f: common_vendor.t($data.message),
    g: common_vendor.o(($event) => $options.redirect($data.msgType)),
    h: common_vendor.sr("popup", "1cf27b2a-1"),
    i: common_vendor.o($options.change)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
