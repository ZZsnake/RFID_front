"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goto(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_icons2 + _easycom_uni_grid2 + _easycom_uni_card2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_grid + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.p({
      type: "eye",
      size: 30,
      color: "#777"
    }),
    c: common_vendor.p({
      type: "contact",
      size: 30,
      color: "#777"
    }),
    d: common_vendor.p({
      type: "bars",
      size: 30,
      color: "#777"
    }),
    e: common_vendor.p({
      type: "smallcircle",
      size: 30,
      color: "#777"
    }),
    f: common_vendor.p({
      column: "4",
      ["show-border"]: "false",
      square: "false"
    }),
    g: common_assets._imports_4,
    h: common_vendor.o(($event) => $options.goto("/pages/add/add")),
    i: common_assets._imports_2
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-165c9ab9"]]);
wx.createPage(MiniProgramPage);
