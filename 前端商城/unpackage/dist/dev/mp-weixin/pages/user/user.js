(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/user"],{

/***/ 232:
/*!**********************************************************************************!*\
  !*** H:/办公/++黔域项目/如花2.0/免费版/1.222/前端_免费版/main.js?{"page":"pages%2Fuser%2Fuser"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _user = _interopRequireDefault(__webpack_require__(/*! ./pages/user/user.vue */ 233));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_user.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 233:
/*!***************************************************************!*\
  !*** H:/办公/++黔域项目/如花2.0/免费版/1.222/前端_免费版/pages/user/user.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_vue_vue_type_template_id_59eca0e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=59eca0e7& */ 234);
/* harmony import */ var _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js& */ 236);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.vue?vue&type=style&index=0&lang=scss& */ 238);
/* harmony import */ var _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs





/* normalize component */

var component = Object(_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_59eca0e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_vue_vue_type_template_id_59eca0e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_vue_vue_type_template_id_59eca0e7___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "办公/++黔域项目/如花2.0/免费版/1.222/前端_免费版/pages/user/user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 234:
/*!**********************************************************************************************!*\
  !*** H:/办公/++黔域项目/如花2.0/免费版/1.222/前端_免费版/pages/user/user.vue?vue&type=template&id=59eca0e7& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_59eca0e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user.vue?vue&type=template&id=59eca0e7& */ 235);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_59eca0e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_59eca0e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_59eca0e7___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_59eca0e7___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 235:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/办公/++黔域项目/如花2.0/免费版/1.222/前端_免费版/pages/user/user.vue?vue&type=template&id=59eca0e7& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 236:
/*!****************************************************************************************!*\
  !*** H:/办公/++黔域项目/如花2.0/免费版/1.222/前端_免费版/pages/user/user.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user.vue?vue&type=script&lang=js& */ 237);
/* harmony import */ var _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 237:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/办公/++黔域项目/如花2.0/免费版/1.222/前端_免费版/pages/user/user.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




























































































































var _wx_token = __webpack_require__(/*! @/common/wx_token.js */ 14);

var _user = __webpack_require__(/*! @/common/cache/user.js */ 229);var uniBadge = function uniBadge() {return __webpack_require__.e(/*! import() | components/uni/uni-badge/uni-badge */ "components/uni/uni-badge/uni-badge").then(__webpack_require__.bind(null, /*! @/components/uni/uni-badge/uni-badge.vue */ 845));};var XcxAuth = function XcxAuth() {return Promise.all(/*! import() | components/wx_auth/xcx_auth */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/wx_auth/xcx_auth")]).then(__webpack_require__.bind(null, /*! @/components/wx_auth/xcx_auth.vue */ 852));};var listCell = function listCell() {return __webpack_require__.e(/*! import() | components/mix-list-cell */ "components/mix-list-cell").then(__webpack_require__.bind(null, /*! @/components/mix-list-cell */ 860));};var wxtoken = new _wx_token.WxToken();
var cache_user = new _user.CUser();

var startY = 0,
moveY = 0,
pageAtTop = true;var _default =
{
  components: {
    listCell: listCell,
    XcxAuth: XcxAuth,
    uniBadge: uniBadge },

  data: function data() {
    return {
      bang: true,
      list: '',
      auth: {
        is_name: false,
        is_address: false,
        is_phone: false },

      coverTransform: 'translateY(0px)',
      coverTransition: '0s',
      moving: false,
      userinfo: '' };

  },
  onLoad: function onLoad() {

    this.auth.is_name = !this.auth.is_name;











  },
  onShow: function onShow() {
    cache_user.info();
    this.get_number();
  },





















  methods: {
    bind: function bind(e) {

      var obj = {};
      obj.iv = e.detail.iv;
      obj.encryptedData = e.detail.encryptedData;
      //然后在第三方服务端结合 session_key 以及 app_id 进行解密获取手机号

      // this.$api.http.post('xxxx/xxxx',obj).then(res=>{
      // 	console.log(res)
      // })



    },
    get_number: function get_number() {var _this = this;
      this.$api.http.post('order/user/order_date', {}, false).then(function (res) {
        _this.list = res.data;
      });
    },
    get_userinfo: function get_userinfo(e) {
      this.userinfo = e;
    },
    clear_cache: function clear_cache() {
      uni.clearStorageSync();
      this.$api.msg('已清空');
    },
    jump_tohelp: function jump_tohelp() {
      uni.navigateTo({
        url: '/pages/list/list' });

    },
    jump_toorder: function jump_toorder(e) {
      uni.navigateTo({
        url: '/pages/order/order?state=' + e });

    },
    jump_toset: function jump_toset() {
      uni.navigateTo({
        url: '/pages/set/set' });

    },
    jump_toaddress: function jump_toaddress() {
      uni.navigateTo({
        url: '/pages/address/address' });

    },
    jump_tolike: function jump_tolike() {
      uni.navigateTo({
        url: '/pages/user/like/like' });

    },
    jump_tomycoupon: function jump_tomycoupon() {
      uni.navigateTo({
        url: '/pages/user/mycoupon/mycoupon' });

    },
    jump_toreseller: function jump_toreseller() {
      uni.navigateTo({
        url: '/pages/user/reseller/reseller' });

    },
    jump_tocms: function jump_tocms() {
      uni.navigateTo({
        url: '/pages/cms/index/index' });

    },
    /**
        * 统一跳转接口,拦截未登录路由
        * navigator标签现在默认没有转场动画，所以用view
        */
    navTo: function navTo(url) {
      if (!this.hasLogin) {
        // url = '/pages/public/login';
        uni.navigateTo({
          url: url });

      }
      uni.navigateTo({
        url: url });

    },

    /**
        *  会员卡下拉和回弹
        *  1.关闭bounce避免ios端下拉冲突
        *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
        *    transition设置0.1秒延迟，让css来过渡这段空窗期
        *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
        */
    coverTouchstart: function coverTouchstart(e) {
      if (pageAtTop === false) {
        return;
      }
      this.coverTransition = 'transform .1s linear';
      startY = e.touches[0].clientY;
    },
    coverTouchmove: function coverTouchmove(e) {
      moveY = e.touches[0].clientY;
      var moveDistance = moveY - startY;
      if (moveDistance < 0) {
        this.moving = false;
        return;
      }
      this.moving = true;
      if (moveDistance >= 80 && moveDistance < 100) {
        moveDistance = 80;
      }

      if (moveDistance > 0 && moveDistance <= 80) {
        this.coverTransform = "translateY(".concat(moveDistance, "px)");
      }
    },
    coverTouchend: function coverTouchend() {
      if (this.moving === false) {
        return;
      }
      this.moving = false;
      this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
      this.coverTransform = 'translateY(0px)';
    } },

  onPullDownRefresh: function onPullDownRefresh() {
    this.get_number();
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 2000);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 238:
/*!*************************************************************************************************!*\
  !*** H:/办公/++黔域项目/如花2.0/免费版/1.222/前端_免费版/pages/user/user.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../安装包/0环境+开发/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user.vue?vue&type=style&index=0&lang=scss& */ 239);
/* harmony import */ var _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_0_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 239:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/办公/++黔域项目/如花2.0/免费版/1.222/前端_免费版/pages/user/user.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[232,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map