exports.ids = [5];
exports.modules = {

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/demo/one/index.vue?vue&type=template&id=47d7cb30
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div>这个是OnePage</div> <div><div>这个是store测试</div> <div>" + _vm._ssrEscape(_vm._s(_vm.token) + " - " + _vm._s(_vm.name)) + "</div> <button>变更token</button> <button>变更name</button> <button>启用loading</button></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("返回首页")])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/demo/one/index.vue?vue&type=template&id=47d7cb30

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/demo/one/index.vue?vue&type=script&lang=js

/* harmony default export */ var onevue_type_script_lang_js = ({
  name: 'demoPage',
  data() {
    return {};
  },
  asyncData(app) {
    // console.log("结果",app.$getIndexData())
    // app.$getIndexData().then(res=>{
    //     console.log(res)
    // })
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['token']),
    ...Object(external_vuex_["mapState"])({
      name: state => state.user.name
    })
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setToken']),
    ...Object(external_vuex_["mapMutations"])(['user', 'setName']),
    startMyLoading() {
      console.log(this);
      // 显示加载指示器
      this.$nuxt.$loading.start();
      console.log("我已经开始了");
      setTimeout(() => {
        console.log("我已经结束了");
        // 关闭加载显示器
        this.$nuxt.$loading.finish();
      }, 2000);
    }
  },
  mounted() {
    // console.log(this.$store.state.token)
    // this.$store.commit("setToken",2)
    // this.$store.dispatch('setToken2',params)
  }
  // middleware(){
  //     console.log("我命由我不由天，我说了算")
  // }
});
// CONCATENATED MODULE: ./pages/demo/one/index.vue?vue&type=script&lang=js
 /* harmony default export */ var demo_onevue_type_script_lang_js = (onevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/demo/one/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  demo_onevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "04287de1"
  
)

/* harmony default export */ var one = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map