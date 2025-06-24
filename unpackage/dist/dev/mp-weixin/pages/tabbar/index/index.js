"use strict";
const common_vendor = require("../../../common/vendor.js");
const navbar = () => "../../../components/navbar/navbar.js";
const tab = () => "../../../components/tab/tab.js";
const _sfc_main = {
  components: {
    navbar,
    tab
  },
  data() {
    return {
      title: "Hello",
      tabList: []
    };
  },
  onLoad() {
    this.getLabel();
  },
  methods: {
    getLabel() {
      common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:28", this.$api);
      this.$api.get_label({
        name: "get_label"
      }).then((res) => {
        common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:32", res);
        const { data } = res;
        this.tabList = data;
        common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:35", this.tabList);
      });
    }
  }
};
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  const _easycom_tab2 = common_vendor.resolveComponent("tab");
  (_easycom_navbar2 + _easycom_tab2)();
}
const _easycom_navbar = () => "../../../components/navbar/navbar.js";
const _easycom_tab = () => "../../../components/tab/tab.js";
if (!Math) {
  (_easycom_navbar + _easycom_tab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      list: $data.tabList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/index/index.js.map
