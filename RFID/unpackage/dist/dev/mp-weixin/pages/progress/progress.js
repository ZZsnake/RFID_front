"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      progress: 0,
      loadingComplete: false
    };
  },
  mounted() {
    this.startLoading();
  },
  methods: {
    goto(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    startLoading() {
      let interval = setInterval(() => {
        if (this.progress >= 100) {
          clearInterval(interval);
          this.loadingComplete = true;
        } else {
          this.progress += 5;
        }
      }, 100);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_assets._imports_0$11,
    b: !$data.loadingComplete
  }, !$data.loadingComplete ? {} : {}, {
    c: $data.loadingComplete
  }, $data.loadingComplete ? {} : {}, {
    d: $data.progress + "%"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a8082451"]]);
wx.createPage(MiniProgramPage);
