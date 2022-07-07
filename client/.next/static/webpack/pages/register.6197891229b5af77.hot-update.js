"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar initialState = {\n    name: \"\",\n    email: \"\",\n    password: \"\",\n    error: \"\",\n    success: \"\",\n    buttonText: \"Registor\"\n};\nvar reducer = function(state, action) {\n    if (action.type === \"name\") {\n        return _objectSpread({}, state, {\n            name: action.payload,\n            error: \"\",\n            success: \"\"\n        });\n    }\n    if (action.type === \"email\") {\n        return _objectSpread({}, state, {\n            email: action.payload,\n            error: \"\",\n            success: \"\"\n        });\n    }\n    if (action.type === \"password\") {\n        return _objectSpread({}, state, {\n            password: action.payload,\n            error: \"\",\n            success: \"\"\n        });\n    }\n    if (action.type === \"reset\") {\n        return {\n            name: \"\",\n            email: \"\"\n        };\n    }\n    return _objectSpread({}, state);\n};\nvar Register = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(reducer, initialState), state = ref[0], dispatch = ref[1];\n    var handleChange = function(name) {\n        return function(e) {\n            dispatch({\n                type: name,\n                payload: e.target.value\n            });\n        };\n    };\n    var formSubmitHandler = function(e) {\n        e.preventDefault();\n        var name = state.name;\n        var email = state.email;\n        var password = state.password;\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/api/register\", {\n            name: name,\n            email: email,\n            password: password\n        }).then(function(response) {}).catch(function(error) {\n            return console.log(error);\n        });\n    };\n    var registerForm = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: formSubmitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: state.name,\n                        onChange: handleChange(\"name\"),\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type you name\"\n                    }, void 0, false, {\n                        fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: state.email,\n                        onChange: handleChange(\"email\"),\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type you email\"\n                    }, void 0, false, {\n                        fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: state.password,\n                        onChange: handleChange(\"password\"),\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type you password\"\n                    }, void 0, false, {\n                        fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-outline-warning\",\n                        children: state.buttonText\n                    }, void 0, false, {\n                        fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-6 offset-md-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, _this),\n                    registerForm()\n                ]\n            }, void 0, true, {\n                fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, _this),\n            JSON.stringify(state)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/divyash/Projects/hackr/client/pages/register.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, _this);\n};\n_s(Register, \"skVOqNGrFQuDFh+lpttAJ2AZFeA=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0MsSUFBRTs7Ozs2QkFBRztvQkFDTFYsWUFBWSxFQUFFOzs7Ozs7cUJBQ1g7WUFDTFcsSUFBSSxDQUFDQyxTQUFTLENBQUM5QixLQUFLLENBQUM7Ozs7OzthQUNmLENBQ1Q7Q0FDSDtHQXZFS0ksUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBd0VkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBuYW1lOiBcIlwiLFxuICBlbWFpbDogXCJcIixcbiAgcGFzc3dvcmQ6IFwiXCIsXG4gIGVycm9yOiBcIlwiLFxuICBzdWNjZXNzOiBcIlwiLFxuICBidXR0b25UZXh0OiBcIlJlZ2lzdG9yXCIsXG59O1xuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gXCJuYW1lXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgc3VjY2VzczogXCJcIixcbiAgICB9O1xuICB9XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gXCJlbWFpbFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZW1haWw6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICBzdWNjZXNzOiBcIlwiLFxuICAgIH07XG4gIH1cbiAgaWYgKGFjdGlvbi50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBwYXNzd29yZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICBlcnJvcjogXCJcIixcbiAgICAgIHN1Y2Nlc3M6IFwiXCIsXG4gICAgfTtcbiAgfVxuICBpZiAoYWN0aW9uLnR5cGUgPT09IFwicmVzZXRcIikge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICB9O1xufTtcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IG5hbWUsXG4gICAgICBwYXlsb2FkOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lID0gc3RhdGUubmFtZTtcbiAgICBjb25zdCBlbWFpbCA9IHN0YXRlLmVtYWlsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gc3RhdGUucGFzc3dvcmQ7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyYCwge1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7fSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH07XG4gIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17c3RhdGUubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJuYW1lXCIpfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3UgbmFtZVwiXG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJlbWFpbFwiKX1cbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdSBlbWFpbFwiXG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJwYXNzd29yZFwiKX1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdSBwYXNzd29yZFwiXG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nXCI+XG4gICAgICAgICAgICB7c3RhdGUuYnV0dG9uVGV4dH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge3JlZ2lzdGVyRm9ybSgpfVxuICAgICAgPC9kaXY+XG4gICAgICB7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsImF4aW9zIiwidXNlUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwiYnV0dG9uVGV4dCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiUmVnaXN0ZXIiLCJkaXNwYXRjaCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm1TdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXJGb3JtIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiaDEiLCJiciIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});