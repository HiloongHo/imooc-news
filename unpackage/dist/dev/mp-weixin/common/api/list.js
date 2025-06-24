"use strict";
const common_http = require("../http.js");
const get_label = (data) => {
  return common_http.$http({
    url: "get_label",
    data
  });
};
const list = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get_label
}, Symbol.toStringTag, { value: "Module" }));
exports.list = list;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/common/api/list.js.map
