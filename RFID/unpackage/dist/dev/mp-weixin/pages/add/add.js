"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      value1: 0,
      value2: 0,
      range1: [
        { value: 0, text: "5-12岁儿童" },
        { value: 1, text: "成年人" },
        { value: 2, text: "老人" }
      ],
      range2: [
        { value: 0, text: "应用消息推送" },
        { value: 1, text: "发送短信" },
        { value: 2, text: "拨打紧急电话" }
      ]
    };
  },
  methods: {
    change1(e) {
      console.log("e:", e);
    },
    change2(e) {
      console.log("e:", e);
    }
  }
};
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_data_select2 + _easycom_uni_grid2 + _easycom_uni_icons2)();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_data_select + _easycom_uni_grid + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$2,
    b: common_vendor.o($options.change1),
    c: common_vendor.o(($event) => $data.value1 = $event),
    d: common_vendor.p({
      localdata: $data.range1,
      modelValue: $data.value1
    }),
    e: common_vendor.p({
      column: "2"
    }),
    f: common_vendor.p({
      type: "plus-filled",
      size: "18"
    }),
    g: common_assets._imports_1$1,
    h: common_vendor.p({
      type: "clear",
      size: "20",
      color: "#777"
    }),
    i: common_assets._imports_2$2,
    j: common_vendor.p({
      type: "clear",
      size: "20",
      color: "#777"
    }),
    k: common_vendor.p({
      type: "plus-filled",
      size: "18"
    }),
    l: common_assets._imports_3,
    m: common_vendor.o($options.change2),
    n: common_vendor.o(($event) => $data.value2 = $event),
    o: common_vendor.p({
      localdata: $data.range2,
      modelValue: $data.value2
    }),
    p: common_assets._imports_4$1,
    q: common_vendor.p({
      type: "clear",
      size: "20",
      color: "#777"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e8d2fd40"]]);
wx.createPage(MiniProgramPage);
