webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_ubuntu_Desktop_Development_Udemy_The_Modern_React_Bootcamp_29_Nextjs_next_fetching_server_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_ubuntu_Desktop_Development_Udemy_The_Modern_React_Bootcamp_29_Nextjs_next_fetching_server_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ubuntu_Desktop_Development_Udemy_The_Modern_React_Bootcamp_29_Nextjs_next_fetching_server_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ubuntu_Desktop_Development_Udemy_The_Modern_React_Bootcamp_29_Nextjs_next_fetching_server_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/home/ubuntu/Desktop/Development/Udemy--The-Modern-React-Bootcamp/29. Nextjs/next-fetching-server-api/pages/index.js\",\n    _this = undefined;\n\n // import React, { Component } from 'react'\n// export default class index extends Component {\n//     constructor(props) {\n//         super(props)\n//         this.state = {}\n//     }\n//     render() {\n//         return (\n//             <div>\n//                 <h1>Our Index Page!!!</h1>\n//             </div>\n//         )\n//     }\n// }\n\nvar Index = function Index(_ref) {\n  var posts = _ref.posts;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: \"Our Index Page!!!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, _this), posts.map(function (post) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n        children: \"post.title\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_home_ubuntu_Desktop_Development_Udemy_The_Modern_React_Bootcamp_29_Nextjs_next_fetching_server_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_ubuntu_Desktop_Development_Udemy_The_Modern_React_Bootcamp_29_Nextjs_next_fetching_server_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res, data;\n  return _home_ubuntu_Desktop_Development_Udemy_The_Modern_React_Bootcamp_29_Nextjs_next_fetching_server_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://jsonplaceholder.typicode.com/posts');\n\n        case 2:\n          res = _context.sent;\n          data = res.data;\n          return _context.abrupt(\"return\", {\n            posts: data\n          });\n\n        case 5:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInBvc3RzIiwibWFwIiwicG9zdCIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHNCQUNWO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVLQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsMEJBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQWQsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVTtBQUFBLENBQWQ7O0tBQU1ILEs7QUFRTkEsS0FBSyxDQUFDSSxlQUFOLGlhQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVGQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNENBQVYsQ0FGRTs7QUFBQTtBQUVkQyxhQUZjO0FBR1pDLGNBSFksR0FHSEQsR0FIRyxDQUdaQyxJQUhZO0FBQUEsMkNBSWI7QUFBRVAsaUJBQUssRUFBRU87QUFBVCxXQUphOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBT2VSLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgICAgICBzdXBlcihwcm9wcylcbi8vICAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XG4vLyAgICAgfVxuLy8gICAgIHJlbmRlcigpIHtcbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgICAgPGgxPk91ciBJbmRleCBQYWdlISEhPC9oMT5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICApXG4vLyAgICAgfVxuLy8gfVxuXG5jb25zdCBJbmRleCA9ICh7IHBvc3RzIH0pID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8aDE+T3VyIEluZGV4IFBhZ2UhISE8L2gxPlxuICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgPGxpPnBvc3QudGl0bGU8L2xpPlxuICAgICAgICApKX1cbiAgICA8L2Rpdj5cbilcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgcmV0dXJuIHsgcG9zdHM6IGRhdGEgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})