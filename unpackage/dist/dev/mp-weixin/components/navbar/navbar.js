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
    common_vendor.index.__f__("log", "at components/navbar/navbar.vue:32", info);
    this.windowWidth = info.windowWidth;
    const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
    common_vendor.index.__f__("log", "at components/navbar/navbar.vue:39", menuButtonInfo);
    this.navBarHeight = menuButtonInfo.bottom - info.statusBarHeight + (menuButtonInfo.top - info.statusBarHeight);
    this.windowWidth = menuButtonInfo.left;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.statusBarHeight + "px",
    b: $data.navBarHeight + "px",
    c: $data.windowWidth + "px",
    d: $data.statusBarHeight + $data.navBarHeight + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/navbar/navbar.js.map
