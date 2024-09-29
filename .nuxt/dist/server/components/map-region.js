exports.ids = [2];
exports.modules = {

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/map/region.vue?vue&type=template&id=357cf214&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Cascader', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "data": _vm.data,
      "load-data": _vm.loadData
    },
    on: {
      "on-change": _vm.change
    },
    model: {
      value: _vm.addr,
      callback: function ($$v) {
        _vm.addr = $$v;
      },
      expression: "addr"
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/map/region.vue?vue&type=template&id=357cf214&scoped=true

// EXTERNAL MODULE: ./api/common.js
var common = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/map/region.vue?vue&type=script&lang=js

/* harmony default export */ var regionvue_type_script_lang_js = ({
  data() {
    return {
      data: [],
      // 地区数据
      addr: [] // 已选数据
    };
  },
  props: ['addressId'],
  mounted() {},
  methods: {
    change(val, selectedData) {
      // 选择地区
      /**
       * @returns [regionId,region]
       */
      this.$emit('selected', [val, selectedData[selectedData.length - 1].__label.split('/')]);
    },
    loadData(item, callback) {
      // 加载数据
      item.loading = true;
      Object(common["f" /* getRegion */])(item.value).then(res => {
        if (res.result.length <= 0) {
          item.loading = false;
        } else {
          res.result.forEach(child => {
            item.loading = false;
            let data = {
              value: child.id,
              label: child.name,
              loading: false,
              children: []
            };
            if (child.level === 'street' || item.label === '香港特别行政区') {
              item.children.push({
                value: child.id,
                label: child.name
              });
            } else {
              item.children.push(data);
            }
          });
          callback();
        }
      });
    },
    async init() {
      // 初始化地图数据
      let data = await Object(common["f" /* getRegion */])(0);
      let arr = [];
      data.result.forEach(item => {
        let obj;
        // 台湾省做处理
        if (item.name === '台湾省') {
          obj = {
            value: item.id,
            label: item.name
          };
        } else {
          obj = {
            value: item.id,
            label: item.name,
            loading: false,
            children: []
          };
        }
        arr.push(obj);
      });
      this.data = arr;
      console.warn('init');
    },
    async reviewData() {
      // 数据回显
      let addr = JSON.parse(JSON.stringify(this.addressId.split(',')));
      let length = addr.length;
      let data = await Object(common["f" /* getRegion */])(0);
      let arr0 = [];
      let arr1 = [];
      let arr2 = [];
      // 第一级数据
      data.result.forEach(item => {
        let obj;
        // 台湾省做处理
        if (item.name === '台湾省') {
          obj = {
            value: item.id,
            label: item.name
          };
        } else {
          obj = {
            value: item.id,
            label: item.name,
            loading: false,
            children: []
          };
        }
        arr0.push(obj);
      });
      // 根据选择的数据来加载数据列表
      if (length > 0) {
        let children = await Object(common["f" /* getRegion */])(addr[0]);
        children = this.handleData(children.result);
        arr0.forEach(e => {
          if (e.value === addr[0]) {
            e.children = arr1 = children;
          }
        });
      }
      if (length > 1) {
        let children = await Object(common["f" /* getRegion */])(addr[1]);
        children = this.handleData(children.result);
        arr1.forEach(e => {
          if (e.value === addr[1]) {
            e.children = arr2 = children;
          }
        });
      }
      if (length > 2) {
        let children = await Object(common["f" /* getRegion */])(addr[2]);
        children = this.handleData(children.result);
        arr2.forEach(e => {
          if (e.value === addr[2]) {
            e.children = children;
          }
        });
      }
      this.data = arr0;
      this.addr = addr;
    },
    handleData(data) {
      // 处理接口数据
      let item = [];
      data.forEach(child => {
        let obj = {
          value: child.id,
          label: child.name,
          loading: false,
          children: []
        };
        if (child.level === 'street' || item.label === '香港特别行政区') {
          item.push({
            value: child.id,
            label: child.name
          });
        } else {
          item.push(obj);
        }
      });
      return item;
    }
  },
  watch: {
    addressId: {
      handler: function (v) {
        if (v) {
          this.reviewData();
        } else {
          this.init();
        }
      },
      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./components/map/region.vue?vue&type=script&lang=js
 /* harmony default export */ var map_regionvue_type_script_lang_js = (regionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/map/region.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  map_regionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "357cf214",
  "73d924c4"
  
)

/* harmony default export */ var region = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=map-region.js.map