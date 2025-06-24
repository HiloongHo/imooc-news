"use strict";
const common_vendor = require("./vendor.js");
function $http(options) {
  const {
    url,
    data
  } = options;
  return new Promise((reslove, reject) => {
    common_vendor.nr.callFunction({
      name: url,
      data
    }).then((res) => {
      if (res.result.code === 200) {
        reslove(res.result);
      } else {
        reject(res.result);
      }
    }).catch((err) => {
      reject(err);
    });
  });
}
exports.$http = $http;
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/http.js.map
