"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cluster",{

/***/ "./src/components/MainLayout.js":
/*!**************************************!*\
  !*** ./src/components/MainLayout.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withMainLayout\": function() { return /* binding */ withMainLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SidebarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SidebarItem */ \"./src/components/SidebarItem.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// import ProfilePopover from \"./ProfilePopover\";\n\nvar navitem = [\n    {\n        icon: \"/icons/icons8-home\",\n        label: \"Homepage\",\n        href: \"/homepage\",\n        main: true\n    },\n    {\n        icon: \"/icons/data\",\n        label: \"Data\",\n        href: \"/data\",\n        main: true\n    },\n    {\n        icon: \"/icons/cluster\",\n        label: \"Clustering\",\n        href: \"/cluster\",\n        main: true\n    }, \n];\nvar MainLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref[0], setOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    zIndex: 9999\n                },\n                className: \"fixed md:flex \".concat(open ? \"md:pl-72\" : \"md:pl-[68px]\", \" md:flex-row-reverse w-full top-0 z-10 text-white transition-all duration-200 ease-in-out\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sidebar bg-[#343A40] h-16 md:w-screen flex items-center justify-between px-8 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(open ? \" md:flex\" : \"flex\", \" cursor-pointer\"),\n                            onClick: function() {\n                                return setOpen(!open);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/icons/dash-icon.svg\",\n                                alt: \"dash icon\",\n                                layout: \"intrinsic\",\n                                width: \"24\",\n                                height: \"24\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(!open ? \"hidden\" : \"flex md:hidden\", \" cursor-pointer\"),\n                            onClick: function() {\n                                return setOpen(!open);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/icons/close-icon.svg\",\n                                alt: \"close icon\",\n                                layout: \"intrinsic\",\n                                width: \"19\",\n                                height: \"19\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex md:hidden\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                style: {\n                    zIndex: 99999\n                },\n                className: \"bg-[#343A40] w-full \".concat(open ? \"h-screen  md:fixed md:w-72\" : \"h-0 md:fixed md:block  md:w-[80px]\", \" md:h-screen md:top-0 z-10 max-h-screen transition-all duration-200 ease-in-out fixed top-16 text-white overflow-y-auto overflow-x-hidden navbar\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center \".concat(open ? \"justify-start px-6\" : \"justify-center\", \" mt-4\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center justify-items-center items w-full bold mt-3 mb-2\",\n                                style: {\n                                    fontWeight: \"bold\",\n                                    fontSize: \"20px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/gowa.png\",\n                                        alt: \"My Icon\",\n                                        width: 50,\n                                        height: 50\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"tes pl-8 \".concat(!open ? \"max-h-0\" : \"max-h-96\", \" h-auto overflow-hidden transition-all duration-200 ease-in-out\"),\n                                        children: \"Health Center Of Bontomarannu\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:block  hidden md:p-0\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(!open ? \"md:hidden\" : \"md:block\", \"  hidden md:p-0\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                                lineNumber: 115,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, _this),\n                    navitem.map(function(param) {\n                        var icon = param.icon, label = param.label, item = param.item, main = param.main, href = param.href;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SidebarItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            icon: icon,\n                            label: label,\n                            hide: !open,\n                            item: item,\n                            main: main,\n                            href: href,\n                            setOpen: setOpen\n                        }, label, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                            lineNumber: 127,\n                            columnNumber: 21\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-[#E5E5E5] min-h-screen pt-16 \".concat(open ? \"md:ml-72\" : \"md:ml-[80px]\", \" transition-all duration-200 ease-in-out\"),\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\skripsi-webgis-frontend\\\\src\\\\components\\\\MainLayout.js\",\n                lineNumber: 141,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MainLayout, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = MainLayout;\nfunction withMainLayout(Component) {\n    Component.Layout = MainLayout;\n    return Component;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainLayout);\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluTGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUErQjtBQUNBO0FBQy9CLGlEQUFpRDtBQUNFO0FBQ25ELElBQU1HLE9BQU8sR0FBRztJQUNaO1FBQ0lDLElBQUksRUFBRSxvQkFBb0I7UUFDMUJDLEtBQUssRUFBRSxVQUFVO1FBRWpCQyxJQUFJLEVBQUUsV0FBVztRQUNqQkMsSUFBSSxFQUFFLElBQUk7S0FDYjtJQUNEO1FBQ0lILElBQUksRUFBRSxhQUFhO1FBQ25CQyxLQUFLLEVBQUUsTUFBTTtRQUViQyxJQUFJLEVBQUUsT0FBTztRQUNiQyxJQUFJLEVBQUUsSUFBSTtLQUNiO0lBQ0Q7UUFDSUgsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QkMsS0FBSyxFQUFFLFlBQVk7UUFFbkJDLElBQUksRUFBRSxVQUFVO1FBQ2hCQyxJQUFJLEVBQUUsSUFBSTtLQUNiO0NBRUo7QUFFRCxJQUFNQyxVQUFVLEdBQUcsZ0JBQWdCO1FBQWRDLFFBQVEsU0FBUkEsUUFBUTs7SUFDekIsSUFBd0JSLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBaENTLElBQUksR0FBYVQsR0FBZSxHQUE1QixFQUFFVSxPQUFPLEdBQUlWLEdBQWUsR0FBbkI7SUFDcEIscUJBQ0k7OzBCQUNJLDhEQUFDVyxLQUFHO2dCQUNBQyxLQUFLLEVBQUU7b0JBQUNDLE1BQU0sRUFBRSxJQUFJO2lCQUFDO2dCQUNyQkMsU0FBUyxFQUFFLGdCQUFlLENBRXpCLE1BQXlGLENBRHRGTCxJQUFJLEdBQUcsVUFBVSxHQUFHLGNBQWMsRUFDckMsMkZBQXlGLENBQUM7MEJBRzNGLDRFQUFDRSxLQUFHO29CQUFDRyxTQUFTLEVBQUMsK0VBQStFOztzQ0FFMUYsOERBQUNILEtBQUc7NEJBQ0FHLFNBQVMsRUFBRSxFQUFDLENBQTZCLE1BQWUsQ0FBMUNMLElBQUksR0FBRyxVQUFVLEdBQUcsTUFBTSxFQUFDLGlCQUFlLENBQUM7NEJBQ3pETSxPQUFPLEVBQUU7dUNBQU1MLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUM7NkJBQUE7c0NBRTdCLDRFQUFDVixtREFBSztnQ0FDRmlCLEdBQUcsRUFBQyxzQkFBc0I7Z0NBQzFCQyxHQUFHLEVBQUMsV0FBVztnQ0FDZkMsTUFBTSxFQUFDLFdBQVc7Z0NBQ2xCQyxLQUFLLEVBQUMsSUFBSTtnQ0FDVkMsTUFBTSxFQUFDLElBQUk7Ozs7O3FDQUNiOzs7OztpQ0FDQTtzQ0FDTiw4REFBQ1QsS0FBRzs0QkFDQUcsU0FBUyxFQUFFLEVBQUMsQ0FBc0MsTUFBZSxDQUFuRCxDQUFDTCxJQUFJLEdBQUcsUUFBUSxHQUFHLGdCQUFnQixFQUFDLGlCQUFlLENBQUM7NEJBQ2xFTSxPQUFPLEVBQUU7dUNBQU1MLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUM7NkJBQUE7c0NBRTdCLDRFQUFDVixtREFBSztnQ0FDRmlCLEdBQUcsRUFBQyx1QkFBdUI7Z0NBQzNCQyxHQUFHLEVBQUMsWUFBWTtnQ0FDaEJDLE1BQU0sRUFBQyxXQUFXO2dDQUNsQkMsS0FBSyxFQUFDLElBQUk7Z0NBQ1ZDLE1BQU0sRUFBQyxJQUFJOzs7OztxQ0FDYjs7Ozs7aUNBQ0E7c0NBQ04sOERBQUNULEtBQUc7NEJBQUNHLFNBQVMsRUFBQyxnQkFBZ0I7Ozs7O2lDQU96Qjs7Ozs7O3lCQUNKOzs7OztxQkFDSjswQkFDTiw4REFBQ08sS0FBRztnQkFDQVQsS0FBSyxFQUFFO29CQUFDQyxNQUFNLEVBQUUsS0FBSztpQkFBQztnQkFDdEJDLFNBQVMsRUFBRSxzQkFBcUIsQ0FJL0IsTUFBZ0osQ0FIN0lMLElBQUksR0FDRSw0QkFBNEIsR0FDNUIsb0NBQW9DLEVBQzdDLGtKQUFnSixDQUFDOztrQ0FHbEosOERBQUNFLEtBQUc7d0JBQ0FHLFNBQVMsRUFBRSxvQkFBbUIsQ0FFN0IsTUFBSyxDQURGTCxJQUFJLEdBQUcsb0JBQW9CLEdBQUcsZ0JBQWdCLEVBQ2pELE9BQUssQ0FBQzs7MENBR1AsOERBQUNFLEtBQUc7Z0NBQUNHLFNBQVMsRUFBQyw4REFBOEQ7Z0NBQUNGLEtBQUssRUFBRTtvQ0FBQ1UsVUFBVSxFQUFFLE1BQU07b0NBQUVDLFFBQVEsRUFBRSxNQUFNO2lDQUFFOztrREFDeEgsOERBQUN4QixtREFBSzt3Q0FDRmlCLEdBQUcsRUFBQyxXQUFXO3dDQUNmQyxHQUFHLEVBQUMsU0FBUzt3Q0FDYkUsS0FBSyxFQUFFLEVBQUU7d0NBQ1RDLE1BQU0sRUFBRSxFQUFFOzs7Ozs2Q0FDWjtrREFDRiw4REFBQ0ksSUFBRTt3Q0FDQ1YsU0FBUyxFQUFFLFdBQVUsQ0FDaEIsTUFBK0QsQ0FEN0MsQ0FBQ0wsSUFBSSxHQUFHLFNBQVMsR0FBSSxVQUFRLEVBQy9DLGlFQUErRCxDQUFDO2tEQUN4RSwrQkFBNkI7Ozs7OzZDQUFLO2tEQUNuQyw4REFBQ2dCLElBQUU7Ozs7NkNBQUc7Ozs7OztxQ0FDSjswQ0FDTiw4REFBQ0EsSUFBRTs7OztxQ0FBRzswQ0FDTiw4REFBQ2QsS0FBRztnQ0FBQ0csU0FBUyxFQUFHLHlCQUF1Qjs7Ozs7cUNBUWxDOzBDQUNOLDhEQUFDSCxLQUFHO2dDQUFDRyxTQUFTLEVBQUUsRUFBQyxDQUFtQyxNQUFlLENBQWhELENBQUNMLElBQUksR0FBRyxXQUFXLEdBQUcsVUFBVSxFQUFDLGlCQUFlLENBQUM7Ozs7O3FDQVE5RDs7Ozs7OzZCQUNKO29CQUVMUCxPQUFPLENBQUN3QixHQUFHLENBQUM7NEJBQUV2QixJQUFJLFNBQUpBLElBQUksRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUV1QixJQUFJLFNBQUpBLElBQUksRUFBRXJCLElBQUksU0FBSkEsSUFBSSxFQUFFRCxJQUFJLFNBQUpBLElBQUk7NkNBQ3hDLDhEQUFDSiwrREFBVzs0QkFDUkUsSUFBSSxFQUFFQSxJQUFJOzRCQUNWQyxLQUFLLEVBQUVBLEtBQUs7NEJBRVp3QixJQUFJLEVBQUUsQ0FBQ25CLElBQUk7NEJBQ1hrQixJQUFJLEVBQUVBLElBQUk7NEJBQ1ZyQixJQUFJLEVBQUVBLElBQUk7NEJBQ1ZELElBQUksRUFBRUEsSUFBSTs0QkFDVkssT0FBTyxFQUFFQSxPQUFPOzJCQUxYTixLQUFLOzs7O2lDQU1aO3FCQUNMLENBQUM7Ozs7OztxQkFFQTswQkFFTiw4REFBQ0UsTUFBSTtnQkFDRFEsU0FBUyxFQUFFLGtDQUFpQyxDQUUzQyxNQUF3QyxDQURyQ0wsSUFBSSxHQUFHLFVBQVUsR0FBRyxjQUFjLEVBQ3JDLDBDQUF3QyxDQUFDOzBCQUV6Q0QsUUFBUTs7Ozs7cUJBQ047O29CQUNSLENBRUY7QUFDVCxDQUFDO0dBekhLRCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUEySFQsU0FBU3NCLGNBQWMsQ0FBQ0MsU0FBUyxFQUFFO0lBQ3RDQSxTQUFTLENBQUNDLE1BQU0sR0FBR3hCLFVBQVUsQ0FBQztJQUM5QixPQUFPdUIsU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFRCwrREFBZXZCLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluTGF5b3V0LmpzPzZiODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBQcm9maWxlUG9wb3ZlciBmcm9tIFwiLi9Qcm9maWxlUG9wb3ZlclwiO1xuaW1wb3J0IFNpZGViYXJJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJJdGVtXCJcbmNvbnN0IG5hdml0ZW0gPSBbXG4gICAge1xuICAgICAgICBpY29uOiBcIi9pY29ucy9pY29uczgtaG9tZVwiLFxuICAgICAgICBsYWJlbDogXCJIb21lcGFnZVwiLFxuXG4gICAgICAgIGhyZWY6IFwiL2hvbWVwYWdlXCIsXG4gICAgICAgIG1haW46IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGljb246IFwiL2ljb25zL2RhdGFcIixcbiAgICAgICAgbGFiZWw6IFwiRGF0YVwiLFxuXG4gICAgICAgIGhyZWY6IFwiL2RhdGFcIixcbiAgICAgICAgbWFpbjogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWNvbjogXCIvaWNvbnMvY2x1c3RlclwiLFxuICAgICAgICBsYWJlbDogXCJDbHVzdGVyaW5nXCIsXG5cbiAgICAgICAgaHJlZjogXCIvY2x1c3RlclwiLFxuICAgICAgICBtYWluOiB0cnVlLFxuICAgIH0sXG4gICAgXG5dO1xuXG5jb25zdCBNYWluTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e3pJbmRleDogOTk5OX19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgbWQ6ZmxleCAke1xuICAgICAgICAgICAgICAgICAgICBvcGVuID8gXCJtZDpwbC03MlwiIDogXCJtZDpwbC1bNjhweF1cIlxuICAgICAgICAgICAgICAgIH0gbWQ6ZmxleC1yb3ctcmV2ZXJzZSB3LWZ1bGwgdG9wLTAgei0xMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyIGJnLVsjMzQzQTQwXSBoLTE2IG1kOnctc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC04IFwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtvcGVuID8gXCIgbWQ6ZmxleFwiIDogXCJmbGV4XCJ9IGN1cnNvci1wb2ludGVyYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaWNvbnMvZGFzaC1pY29uLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZGFzaCBpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJpbnRyaW5zaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AkeyFvcGVuID8gXCJoaWRkZW5cIiA6IFwiZmxleCBtZDpoaWRkZW5cIn0gY3Vyc29yLXBvaW50ZXJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29ucy9jbG9zZS1pY29uLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2xvc2UgaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiaW50cmluc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28tZnVsbC0ucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiZnVsbFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTM1XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmF2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3t6SW5kZXg6IDk5OTk5fX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BiZy1bIzM0M0E0MF0gdy1mdWxsICR7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoLXNjcmVlbiAgbWQ6Zml4ZWQgbWQ6dy03MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiaC0wIG1kOmZpeGVkIG1kOmJsb2NrICBtZDp3LVs4MHB4XVwiXG4gICAgICAgICAgICAgICAgfSBtZDpoLXNjcmVlbiBtZDp0b3AtMCB6LTEwIG1heC1oLXNjcmVlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgZml4ZWQgdG9wLTE2IHRleHQtd2hpdGUgb3ZlcmZsb3cteS1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIG5hdmJhcmB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuID8gXCJqdXN0aWZ5LXN0YXJ0IHB4LTZcIiA6IFwianVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9IG10LTRgfVxuICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIGl0ZW1zIHctZnVsbCBib2xkIG10LTMgbWItMlwiIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZ293YS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk15IEljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRlcyBwbC04ICR7IW9wZW4gPyBcIm1heC1oLTBcIiA6IGBtYXgtaC05NmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBoLWF1dG8gb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dGB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+SGVhbHRoIENlbnRlciBPZiBCb250b21hcmFubnU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZDpibG9jayAgaGlkZGVuIG1kOnAtMGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28tYnViYmxlLS5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJ1YmJsZVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgIGxheW91dD1cImludHJpbnNpY1wiXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHshb3BlbiA/IFwibWQ6aGlkZGVuXCIgOiBcIm1kOmJsb2NrXCJ9ICBoaWRkZW4gbWQ6cC0wYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nb1RleHQuc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwibG9nbyB0ZXh0XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMjBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI2MFwiXG4gICAgICAgICAgICAgIGxheW91dD1cImludHJpbnNpY1wiXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7bmF2aXRlbS5tYXAoKHtpY29uLCBsYWJlbCwgaXRlbSwgbWFpbiwgaHJlZn0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGU9eyFvcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW49e21haW59XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxtYWluXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctWyNFNUU1RTVdIG1pbi1oLXNjcmVlbiBwdC0xNiAke1xuICAgICAgICAgICAgICAgICAgICBvcGVuID8gXCJtZDptbC03MlwiIDogXCJtZDptbC1bODBweF1cIlxuICAgICAgICAgICAgICAgIH0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgIClcbiAgICAgICAgO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhNYWluTGF5b3V0KENvbXBvbmVudCkge1xuICAgIENvbXBvbmVudC5MYXlvdXQgPSBNYWluTGF5b3V0O1xuICAgIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7Il0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJTaWRlYmFySXRlbSIsIm5hdml0ZW0iLCJpY29uIiwibGFiZWwiLCJocmVmIiwibWFpbiIsIk1haW5MYXlvdXQiLCJjaGlsZHJlbiIsIm9wZW4iLCJzZXRPcGVuIiwiZGl2Iiwic3R5bGUiLCJ6SW5kZXgiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYXYiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJoMSIsImhyIiwibWFwIiwiaXRlbSIsImhpZGUiLCJ3aXRoTWFpbkxheW91dCIsIkNvbXBvbmVudCIsIkxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MainLayout.js\n"));

/***/ })

});