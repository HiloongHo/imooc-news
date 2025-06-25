"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    clickTab(item, index) {
      this.activeIndex = index;
      this.$emit("tab", {
        data: item,
        index
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
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: $data.activeIndex === index ? 1 : "",
        d: common_vendor.o(($event) => $options.clickTab(item, index), index)
      };
    }),
    b: common_vendor.p({
      type: "gear",
      size: "26",
      color: "#666"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tab/tab.js.map
