"use strict";
const common_vendor = require("../../common/vendor.js");
const sharedData = require("../../sharedData.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toggleStatus() {
      console.log(sharedData.sharedData.getStatus());
      sharedData.sharedData.toggleStatus();
      console.log(sharedData.sharedData.getStatus());
    },
    goto(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "right",
      size: ""
    }),
    b: common_assets._imports_0$1,
    c: common_assets._imports_1,
    d: common_assets._imports_2$1,
    e: common_assets._imports_0$2,
    f: common_vendor.p({
      type: "gear",
      size: "18"
    }),
    g: common_assets._imports_4,
    h: common_vendor.o(($event) => $options.toggleStatus())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
