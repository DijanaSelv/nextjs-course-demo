"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\n\nfunction MeetupDetails(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        image: props.meetupData.image,\n        title: props.meetupData.title,\n        address: props.meetupData.address,\n        description: props.meetupData.description\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DD\\\\Desktop\\\\React\\\\25a-next-js\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails); /* import MeetupDetail from \"../../components/meetups/MeetupDetail\";\r\nimport { MongoClient, ObjectId } from \"mongodb\";\r\n\r\nfunction MeetupDetails(props) {\r\n  return (\r\n    <MeetupDetail\r\n      image={props.meetupData.image}\r\n      title={props.meetupData.title}\r\n      address={props.meetupData.address}\r\n      description={props.meetupData.description}\r\n    />\r\n  );\r\n}\r\n\r\n//meetup data does not change often, we don't have edit, and even if we had, it would not be every second.\r\n\r\n//but here the problem is: this is a dynamic page, when we fetch data we need to identify which meetup we need. Ex. its Id. Id is in the URl,\r\n//USE ROUTER WILL NOT WORK : we usually it with useRouter hook and query property. But use Router can only be sued in the component function, not in staticProps function.\r\n//for this we need context (in get static props it doesn't have request repsonse, ama it has params key. context.params - object where the identifiers will be properties and the values are the values encoded in the url.\r\n\r\n//ERROR: getStaticPaths is required: another function, that we need to export in a page component path if it's a dynamic page and we're using get static props. Not for get server side props and not for using neither of them.\r\n//why? With props, a page is pregenerated during the build process. For the dynamic page it needs tp oregenerate all versions of that dynamic page in advance for all the supported ids. It needs to know for which values it needs to pregenerate them during the build process.\r\n//it returns object where we describe all the dynamic segment values, returns object with path key - array of object - one object for every dynamic page :params key object with all keys (ako se nested pokje natre), tuka samo po edno.\r\n//we will not hardcode, but fetch it from a database and generate it dynamically.\r\n\r\n//Error: fallback key:\r\n//next to paths key we need to return fallback key: tells next js whether your paths array contains all supported parameter values, or just some of them. False means it contains all supported meetup values (if a user enters something random sho ne e na listata kje pokazhi 404) ako e true, next js will generate something for the request i da ne e dolu vo paths navedeno. True e korisno ako podocna ima novi stvari da generira as new requests are coming in. Tuka ne ni trebe.\r\n\r\nexport async function getStaticPaths() {\r\n  const client = await MongoClient.connect(\r\n    \"mongodb+srv://dijananas:dijananas@cluster0.mket2ir.mongodb.net/meetups?retryWrites=true&w=majority\"\r\n  );\r\n  const db = client.db();\r\n  const meetupsCollection = db.collection(\"meetups\");\r\n\r\n  //pass first object as empty, (find all object, we put here criteria), pass second argument to define which fields we need to return - {_id: 1} this means only include the ID but no other field values. WE're only fetching the ids.\r\n  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();\r\n\r\n  client.close();\r\n\r\n  //this takes us to that path vo url, it puts the id in the url but does not fetch the data. Oti e vaka glupo.\r\n  return {\r\n    fallback: false,\r\n    paths: meetups.map((meetup) => ({\r\n      params: { meetupId: meetup._id.toString() },\r\n    })),\r\n  };\r\n}\r\n\r\nexport async function getStaticProps(context) {\r\n  const meetupId = context.params.meetupId;\r\n\r\n  //fetch data for a single meetup\r\n  const client = await MongoClient.connect(\r\n    \"mongodb+srv://dijananas:dijananas@cluster0.mket2ir.mongodb.net/meetups?retryWrites=true&w=majority\"\r\n  );\r\n  const db = client.db();\r\n  const meetupsCollection = db.collection(\"meetups\");\r\n\r\n  //pass first object as empty, (find all object, we put here criteria), pass second argument to define which fields we need to return - {_id: 1} this means only include the ID but no other field values. WE're only fetching the ids.\r\n  //find one finds one document,we pass object on what to search we can pass the fields names (title, id, description) and the values we need for them.\r\n  //we wrapt the meetupId with ObjectId imported from Mongo db jer ne moj da go naj ko string. this is stupid. To convert it to object. Posle dolu vo props we need to convert it back to a string.\r\n  const obId = new ObjectId(meetupId);\r\n\r\n  const selectedMeetup = meetupsCollection.findOne({\r\n    _id: obId,\r\n  });\r\n\r\n  client.close();\r\n  console.log(selectedMeetup._id);\r\n\r\n  // console.log(meetupId, \"from getstaticprops in details page\");\r\n  //this will be logged in the terminal, not the browser becausae it's server side code.\r\n  return {\r\n    props: {\r\n      meetupData: {\r\n        id: selectedMeetup._id.toString(),\r\n        title: selectedMeetup.title,\r\n        address: selectedMeetup.image,\r\n        description: selectedMeetup.description,\r\n      },\r\n    },\r\n  };\r\n}\r\n\r\n//then we pass this as props pogore za da gi displaynime fo meetupDetails component.\r\n\r\nexport default MeetupDetails;\r\n */ \nvar _c;\n$RefreshReg$(_c, \"MeetupDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVpRTtBQUVqRSxTQUFTQyxhQUFhLENBQUNDLEtBQUssRUFBRTtJQUM1QixxQkFDRSw4REFBQ0Ysd0VBQVk7UUFDWEcsS0FBSyxFQUFFRCxLQUFLLENBQUNFLFVBQVUsQ0FBQ0QsS0FBSztRQUM3QkUsS0FBSyxFQUFFSCxLQUFLLENBQUNFLFVBQVUsQ0FBQ0MsS0FBSztRQUM3QkMsT0FBTyxFQUFFSixLQUFLLENBQUNFLFVBQVUsQ0FBQ0UsT0FBTztRQUNqQ0MsV0FBVyxFQUFFTCxLQUFLLENBQUNFLFVBQVUsQ0FBQ0csV0FBVzs7Ozs7WUFDekMsQ0FDRjtBQUNKLENBQUM7QUFUUU4sS0FBQUEsYUFBYTs7QUE4RHRCLCtEQUFlQSxhQUFhLEVBQUMsQ0FFN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz84ZmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XHJcblxyXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgaW1hZ2U9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XHJcbiAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9kaWphbmFuYXM6ZGlqYW5hbmFzQGNsdXN0ZXIwLm1rZXQyaXIubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIC8vIGZldGNoIGRhdGEgZm9yIGEgc2luZ2xlIG1lZXR1cFxyXG5cclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL2RpamFuYW5hczpkaWphbmFuYXNAY2x1c3RlcjAubWtldDJpci5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xyXG4gICAgX2lkOiBuZXcgT2JqZWN0SWQobWVldHVwSWQpLFxyXG4gIH0pO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcclxuXHJcbi8qIGltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lZXR1cERldGFpbFxyXG4gICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9XHJcbiAgICAgIGFkZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc31cclxuICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vbWVldHVwIGRhdGEgZG9lcyBub3QgY2hhbmdlIG9mdGVuLCB3ZSBkb24ndCBoYXZlIGVkaXQsIGFuZCBldmVuIGlmIHdlIGhhZCwgaXQgd291bGQgbm90IGJlIGV2ZXJ5IHNlY29uZC5cclxuXHJcbi8vYnV0IGhlcmUgdGhlIHByb2JsZW0gaXM6IHRoaXMgaXMgYSBkeW5hbWljIHBhZ2UsIHdoZW4gd2UgZmV0Y2ggZGF0YSB3ZSBuZWVkIHRvIGlkZW50aWZ5IHdoaWNoIG1lZXR1cCB3ZSBuZWVkLiBFeC4gaXRzIElkLiBJZCBpcyBpbiB0aGUgVVJsLFxyXG4vL1VTRSBST1VURVIgV0lMTCBOT1QgV09SSyA6IHdlIHVzdWFsbHkgaXQgd2l0aCB1c2VSb3V0ZXIgaG9vayBhbmQgcXVlcnkgcHJvcGVydHkuIEJ1dCB1c2UgUm91dGVyIGNhbiBvbmx5IGJlIHN1ZWQgaW4gdGhlIGNvbXBvbmVudCBmdW5jdGlvbiwgbm90IGluIHN0YXRpY1Byb3BzIGZ1bmN0aW9uLlxyXG4vL2ZvciB0aGlzIHdlIG5lZWQgY29udGV4dCAoaW4gZ2V0IHN0YXRpYyBwcm9wcyBpdCBkb2Vzbid0IGhhdmUgcmVxdWVzdCByZXBzb25zZSwgYW1hIGl0IGhhcyBwYXJhbXMga2V5LiBjb250ZXh0LnBhcmFtcyAtIG9iamVjdCB3aGVyZSB0aGUgaWRlbnRpZmllcnMgd2lsbCBiZSBwcm9wZXJ0aWVzIGFuZCB0aGUgdmFsdWVzIGFyZSB0aGUgdmFsdWVzIGVuY29kZWQgaW4gdGhlIHVybC5cclxuXHJcbi8vRVJST1I6IGdldFN0YXRpY1BhdGhzIGlzIHJlcXVpcmVkOiBhbm90aGVyIGZ1bmN0aW9uLCB0aGF0IHdlIG5lZWQgdG8gZXhwb3J0IGluIGEgcGFnZSBjb21wb25lbnQgcGF0aCBpZiBpdCdzIGEgZHluYW1pYyBwYWdlIGFuZCB3ZSdyZSB1c2luZyBnZXQgc3RhdGljIHByb3BzLiBOb3QgZm9yIGdldCBzZXJ2ZXIgc2lkZSBwcm9wcyBhbmQgbm90IGZvciB1c2luZyBuZWl0aGVyIG9mIHRoZW0uXHJcbi8vd2h5PyBXaXRoIHByb3BzLCBhIHBhZ2UgaXMgcHJlZ2VuZXJhdGVkIGR1cmluZyB0aGUgYnVpbGQgcHJvY2Vzcy4gRm9yIHRoZSBkeW5hbWljIHBhZ2UgaXQgbmVlZHMgdHAgb3JlZ2VuZXJhdGUgYWxsIHZlcnNpb25zIG9mIHRoYXQgZHluYW1pYyBwYWdlIGluIGFkdmFuY2UgZm9yIGFsbCB0aGUgc3VwcG9ydGVkIGlkcy4gSXQgbmVlZHMgdG8ga25vdyBmb3Igd2hpY2ggdmFsdWVzIGl0IG5lZWRzIHRvIHByZWdlbmVyYXRlIHRoZW0gZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzLlxyXG4vL2l0IHJldHVybnMgb2JqZWN0IHdoZXJlIHdlIGRlc2NyaWJlIGFsbCB0aGUgZHluYW1pYyBzZWdtZW50IHZhbHVlcywgcmV0dXJucyBvYmplY3Qgd2l0aCBwYXRoIGtleSAtIGFycmF5IG9mIG9iamVjdCAtIG9uZSBvYmplY3QgZm9yIGV2ZXJ5IGR5bmFtaWMgcGFnZSA6cGFyYW1zIGtleSBvYmplY3Qgd2l0aCBhbGwga2V5cyAoYWtvIHNlIG5lc3RlZCBwb2tqZSBuYXRyZSksIHR1a2Egc2FtbyBwbyBlZG5vLlxyXG4vL3dlIHdpbGwgbm90IGhhcmRjb2RlLCBidXQgZmV0Y2ggaXQgZnJvbSBhIGRhdGFiYXNlIGFuZCBnZW5lcmF0ZSBpdCBkeW5hbWljYWxseS5cclxuXHJcbi8vRXJyb3I6IGZhbGxiYWNrIGtleTpcclxuLy9uZXh0IHRvIHBhdGhzIGtleSB3ZSBuZWVkIHRvIHJldHVybiBmYWxsYmFjayBrZXk6IHRlbGxzIG5leHQganMgd2hldGhlciB5b3VyIHBhdGhzIGFycmF5IGNvbnRhaW5zIGFsbCBzdXBwb3J0ZWQgcGFyYW1ldGVyIHZhbHVlcywgb3IganVzdCBzb21lIG9mIHRoZW0uIEZhbHNlIG1lYW5zIGl0IGNvbnRhaW5zIGFsbCBzdXBwb3J0ZWQgbWVldHVwIHZhbHVlcyAoaWYgYSB1c2VyIGVudGVycyBzb21ldGhpbmcgcmFuZG9tIHNobyBuZSBlIG5hIGxpc3RhdGEga2plIHBva2F6aGkgNDA0KSBha28gZSB0cnVlLCBuZXh0IGpzIHdpbGwgZ2VuZXJhdGUgc29tZXRoaW5nIGZvciB0aGUgcmVxdWVzdCBpIGRhIG5lIGUgZG9sdSB2byBwYXRocyBuYXZlZGVuby4gVHJ1ZSBlIGtvcmlzbm8gYWtvIHBvZG9jbmEgaW1hIG5vdmkgc3R2YXJpIGRhIGdlbmVyaXJhIGFzIG5ldyByZXF1ZXN0cyBhcmUgY29taW5nIGluLiBUdWthIG5lIG5pIHRyZWJlLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vZGlqYW5hbmFzOmRpamFuYW5hc0BjbHVzdGVyMC5ta2V0MmlyLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgLy9wYXNzIGZpcnN0IG9iamVjdCBhcyBlbXB0eSwgKGZpbmQgYWxsIG9iamVjdCwgd2UgcHV0IGhlcmUgY3JpdGVyaWEpLCBwYXNzIHNlY29uZCBhcmd1bWVudCB0byBkZWZpbmUgd2hpY2ggZmllbGRzIHdlIG5lZWQgdG8gcmV0dXJuIC0ge19pZDogMX0gdGhpcyBtZWFucyBvbmx5IGluY2x1ZGUgdGhlIElEIGJ1dCBubyBvdGhlciBmaWVsZCB2YWx1ZXMuIFdFJ3JlIG9ubHkgZmV0Y2hpbmcgdGhlIGlkcy5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgLy90aGlzIHRha2VzIHVzIHRvIHRoYXQgcGF0aCB2byB1cmwsIGl0IHB1dHMgdGhlIGlkIGluIHRoZSB1cmwgYnV0IGRvZXMgbm90IGZldGNoIHRoZSBkYXRhLiBPdGkgZSB2YWthIGdsdXBvLlxyXG4gIHJldHVybiB7XHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcblxyXG4gIC8vZmV0Y2ggZGF0YSBmb3IgYSBzaW5nbGUgbWVldHVwXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9kaWphbmFuYXM6ZGlqYW5hbmFzQGNsdXN0ZXIwLm1rZXQyaXIubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICAvL3Bhc3MgZmlyc3Qgb2JqZWN0IGFzIGVtcHR5LCAoZmluZCBhbGwgb2JqZWN0LCB3ZSBwdXQgaGVyZSBjcml0ZXJpYSksIHBhc3Mgc2Vjb25kIGFyZ3VtZW50IHRvIGRlZmluZSB3aGljaCBmaWVsZHMgd2UgbmVlZCB0byByZXR1cm4gLSB7X2lkOiAxfSB0aGlzIG1lYW5zIG9ubHkgaW5jbHVkZSB0aGUgSUQgYnV0IG5vIG90aGVyIGZpZWxkIHZhbHVlcy4gV0UncmUgb25seSBmZXRjaGluZyB0aGUgaWRzLlxyXG4gIC8vZmluZCBvbmUgZmluZHMgb25lIGRvY3VtZW50LHdlIHBhc3Mgb2JqZWN0IG9uIHdoYXQgdG8gc2VhcmNoIHdlIGNhbiBwYXNzIHRoZSBmaWVsZHMgbmFtZXMgKHRpdGxlLCBpZCwgZGVzY3JpcHRpb24pIGFuZCB0aGUgdmFsdWVzIHdlIG5lZWQgZm9yIHRoZW0uXHJcbiAgLy93ZSB3cmFwdCB0aGUgbWVldHVwSWQgd2l0aCBPYmplY3RJZCBpbXBvcnRlZCBmcm9tIE1vbmdvIGRiIGplciBuZSBtb2ogZGEgZ28gbmFqIGtvIHN0cmluZy4gdGhpcyBpcyBzdHVwaWQuIFRvIGNvbnZlcnQgaXQgdG8gb2JqZWN0LiBQb3NsZSBkb2x1IHZvIHByb3BzIHdlIG5lZWQgdG8gY29udmVydCBpdCBiYWNrIHRvIGEgc3RyaW5nLlxyXG4gIGNvbnN0IG9iSWQgPSBuZXcgT2JqZWN0SWQobWVldHVwSWQpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xyXG4gICAgX2lkOiBvYklkLFxyXG4gIH0pO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZE1lZXR1cC5faWQpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhtZWV0dXBJZCwgXCJmcm9tIGdldHN0YXRpY3Byb3BzIGluIGRldGFpbHMgcGFnZVwiKTtcclxuICAvL3RoaXMgd2lsbCBiZSBsb2dnZWQgaW4gdGhlIHRlcm1pbmFsLCBub3QgdGhlIGJyb3dzZXIgYmVjYXVzYWUgaXQncyBzZXJ2ZXIgc2lkZSBjb2RlLlxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbi8vdGhlbiB3ZSBwYXNzIHRoaXMgYXMgcHJvcHMgcG9nb3JlIHphIGRhIGdpIGRpc3BsYXluaW1lIGZvIG1lZXR1cERldGFpbHMgY29tcG9uZW50LlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcclxuICovXHJcbiJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJpbWFnZSIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});