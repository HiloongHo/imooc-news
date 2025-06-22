"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "tab",
  data() {
    return {
      list: [
        {
          name: "uni-app"
        },
        {
          name: "uni-app1"
        },
        {
          name: "uni-app2"
        },
        {
          name: "uni-app3"
        },
        {
          name: "uni-app4"
        },
        {
          name: "uni-app5"
        },
        {
          name: "uni-app6"
        },
        {
          name: "uni-app7"
        }
      ]
    };
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
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name)
      };
    }),
    b: _ctx.index,
    c: common_vendor.p({
      type: "gear",
      size: "26",
      color: "#666"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tab/tab.js.map
