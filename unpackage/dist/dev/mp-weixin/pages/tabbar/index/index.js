"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  // components:{
  // 	navbar
  // },
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(100, (item, k0, i0) => {
      return {
        a: common_vendor.t(item)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/index/index.js.map
