import Vue from 'vue'
import ViewUI from "view-design";
import router from '~/router';
// 这里和nuxt.config.js定义的一样
import 'view-design/dist/styles/iview.css';
import "@/assets/styles/theme.less";
const {aMapSecurityJsCode, title, inputMaxLength} = require("@/config");
const copyViewUi = {...ViewUI}
copyViewUi.Input.props.maxlength.default = inputMaxLength // 挂载最大输入值

// 全局引入封装组件
import {InstallAll} from "@/components/global.js";
import * as filters from "@/utils/filters";

// 高德安全密钥
if (aMapSecurityJsCode) {
  window._AMapSecurityConfig = {
    securityJsCode: aMapSecurityJsCode,
  };
}

export default () => {
   Vue.use(copyViewUi);
   Vue.use(InstallAll);
   Vue.config.productionTip = false;

   Object.keys(filters).forEach((key) => {
     Vue.filter(key, filters[key]);
   });

  Vue.prototype.linkTo = function (url) {
    if (url.substr(0, 1) === "/") {
      // 非外部链接，没有origin，只有路由地址
      if (router.mode === "hash") {
        window.open(location.origin + "/#" + url, "_self");
      } else {
        window.open(location.origin + url, "_self");
      }
    } else {
      // 外部链接，完整的url地址
      window.open(url, "_self");
    }
  };
  // 联系客服
  Vue.prototype.connectCs = function (
    sign = "37ef9b97807d03c6741298ed4eb5b536d2d238e08a3c00fb01fe48f03a569974c99ad767e72c04b3165ef29aca2c488b505fe4ca"
  ) {
    const url = "https://yzf.qq.com/xv/web/static/chat/index.html?sign=" + sign;
    window.open(url, "_self");
  };
}
