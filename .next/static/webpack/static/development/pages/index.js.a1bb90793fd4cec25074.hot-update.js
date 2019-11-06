webpackHotUpdate("static/development/pages/index.js",{

/***/ "./actions/test.js":
/*!*************************!*\
  !*** ./actions/test.js ***!
  \*************************/
/*! exports provided: testAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testAction", function() { return testAction; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./types/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store.js");


var dispatch = _store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"].dispatch;
function testAction(payload) {
  console.log(payload, "payload");
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].TEST_TYPE,
    payload: payload
  });
}

/***/ })

})
//# sourceMappingURL=index.js.a1bb90793fd4cec25074.hot-update.js.map