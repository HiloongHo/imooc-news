"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "navbar",
  data() {
    return {
      statusBarHeight: 20,
      navBarHeight: 45,
      windowWidth: 375
    };
  },
  created() {
    const info = common_vendor.index.getSystemInfoSync();
    this.statusBarHeight = info.statusBarHeight;
    common_vendor.index.__f__("log", "at components/navbar/navbar.vue:34", info);
    this.windowWidth = info.windowWidth;
    const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
    common_vendor.index.__f__("log", "at components/navbar/navbar.vue:41", menuButtonInfo);
    this.navBarHeight = menuButtonInfo.bottom - info.statusBarHeight + (menuButtonInfo.top - info.statusBarHeight);
    this.windowWidth = menuButtonInfo.left;
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
    a: $data.statusBarHeight + "px",
    b: common_vendor.p({
      type: "search",
      size: "16",
      color: "#999"
    }),
    c: $data.navBarHeight + "px",
    d: $data.windowWidth + "px",
    e: $data.statusBarHeight + $data.navBarHeight + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/navbar/navbar.js.map
