'use strict';
var nem = require("nem-sdk").default;
console.log(nem);
var nemSdkHelper = NemSdkHelper;
console.log(nemSdkHelper);
(async () => {
  var nis1NodeList = await nemSdkHelper.getNIS1NodeList();
  console.log(nis1NodeList);
})();