"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// /api/new-meetup\n\n//it recieved request and response object\n//req data about incoming request. We can get things like header, body (the data that is sent)  and method (to find out what request is sent, ex post)\n//response needed for sending back a response.\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        //const { title, image, address, description } = data;\n        //store in a database - like mongo DB atlas\n        //never run on client side, to not expose credentials.\n        //returns object\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://dijananas:dijananas@cluster0.mket2ir.mongodb.net/meetups?retryWrites=true&w=majority\");\n        //on clent call bd method to get ahold of that database, if it doesn't exist it will be created.\n        const db = client.db();\n        //get ahold of the collections, so colleciton method and pass a name, if it doesn't exist it's created on the fly.\n        //collections is like tables on sql, and documents will be entries in that tables. Single meetup will be a single document, so the colleciton has multiple documents.\n        const meetupsCollection = db.collection(\"meetups\");\n        //query command to insert one new document in the collection. A document is a JS object.\n        //insert one returns a promise, so we await it.\n        //result will be object with the automatically generated id primer.\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result, \"result from mongo db inster one\");\n        //close db connection\n        client.close();\n        //use response obj to send back a response\n        //res.status to set a http status code of the response. 201 is that sth is inserted sucessfully. And json method to prepare the json data that will be added to the ongoing response.\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrQkFBa0I7QUFFb0I7QUFFdEMseUNBQXlDO0FBQ3pDLHNKQUFzSjtBQUN0Siw4Q0FBOEM7QUFFOUMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsc0RBQXNEO1FBRXRELDJDQUEyQztRQUUzQyxzREFBc0Q7UUFFdEQsZ0JBQWdCO1FBQ2hCLE1BQU1DLE1BQU0sR0FBRyxNQUFNUCx3REFBbUIsQ0FDdEMsb0dBQW9HLENBQ3JHO1FBRUQsZ0dBQWdHO1FBQ2hHLE1BQU1TLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFFdEIsa0hBQWtIO1FBQ2xILHFLQUFxSztRQUNySyxNQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBRWxELHdGQUF3RjtRQUN4RiwrQ0FBK0M7UUFDL0MsbUVBQW1FO1FBQ25FLE1BQU1DLE1BQU0sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csU0FBUyxDQUFDUixJQUFJLENBQUM7UUFDdERTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUV2RCxxQkFBcUI7UUFDckJMLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFLENBQUM7UUFFZiwwQ0FBMEM7UUFDMUMscUxBQXFMO1FBQ3JMYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxrQkFBa0I7U0FBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWxCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9hcGkvbmV3LW1lZXR1cFxyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy9pdCByZWNpZXZlZCByZXF1ZXN0IGFuZCByZXNwb25zZSBvYmplY3RcclxuLy9yZXEgZGF0YSBhYm91dCBpbmNvbWluZyByZXF1ZXN0LiBXZSBjYW4gZ2V0IHRoaW5ncyBsaWtlIGhlYWRlciwgYm9keSAodGhlIGRhdGEgdGhhdCBpcyBzZW50KSAgYW5kIG1ldGhvZCAodG8gZmluZCBvdXQgd2hhdCByZXF1ZXN0IGlzIHNlbnQsIGV4IHBvc3QpXHJcbi8vcmVzcG9uc2UgbmVlZGVkIGZvciBzZW5kaW5nIGJhY2sgYSByZXNwb25zZS5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuXHJcbiAgICAvL2NvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcclxuXHJcbiAgICAvL3N0b3JlIGluIGEgZGF0YWJhc2UgLSBsaWtlIG1vbmdvIERCIGF0bGFzXHJcblxyXG4gICAgLy9uZXZlciBydW4gb24gY2xpZW50IHNpZGUsIHRvIG5vdCBleHBvc2UgY3JlZGVudGlhbHMuXHJcblxyXG4gICAgLy9yZXR1cm5zIG9iamVjdFxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgXCJtb25nb2RiK3NydjovL2RpamFuYW5hczpkaWphbmFuYXNAY2x1c3RlcjAubWtldDJpci5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgICApO1xyXG5cclxuICAgIC8vb24gY2xlbnQgY2FsbCBiZCBtZXRob2QgdG8gZ2V0IGFob2xkIG9mIHRoYXQgZGF0YWJhc2UsIGlmIGl0IGRvZXNuJ3QgZXhpc3QgaXQgd2lsbCBiZSBjcmVhdGVkLlxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAvL2dldCBhaG9sZCBvZiB0aGUgY29sbGVjdGlvbnMsIHNvIGNvbGxlY2l0b24gbWV0aG9kIGFuZCBwYXNzIGEgbmFtZSwgaWYgaXQgZG9lc24ndCBleGlzdCBpdCdzIGNyZWF0ZWQgb24gdGhlIGZseS5cclxuICAgIC8vY29sbGVjdGlvbnMgaXMgbGlrZSB0YWJsZXMgb24gc3FsLCBhbmQgZG9jdW1lbnRzIHdpbGwgYmUgZW50cmllcyBpbiB0aGF0IHRhYmxlcy4gU2luZ2xlIG1lZXR1cCB3aWxsIGJlIGEgc2luZ2xlIGRvY3VtZW50LCBzbyB0aGUgY29sbGVjaXRvbiBoYXMgbXVsdGlwbGUgZG9jdW1lbnRzLlxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgICAvL3F1ZXJ5IGNvbW1hbmQgdG8gaW5zZXJ0IG9uZSBuZXcgZG9jdW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uIEEgZG9jdW1lbnQgaXMgYSBKUyBvYmplY3QuXHJcbiAgICAvL2luc2VydCBvbmUgcmV0dXJucyBhIHByb21pc2UsIHNvIHdlIGF3YWl0IGl0LlxyXG4gICAgLy9yZXN1bHQgd2lsbCBiZSBvYmplY3Qgd2l0aCB0aGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgaWQgcHJpbWVyLlxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0LCBcInJlc3VsdCBmcm9tIG1vbmdvIGRiIGluc3RlciBvbmVcIik7XHJcblxyXG4gICAgLy9jbG9zZSBkYiBjb25uZWN0aW9uXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICAvL3VzZSByZXNwb25zZSBvYmogdG8gc2VuZCBiYWNrIGEgcmVzcG9uc2VcclxuICAgIC8vcmVzLnN0YXR1cyB0byBzZXQgYSBodHRwIHN0YXR1cyBjb2RlIG9mIHRoZSByZXNwb25zZS4gMjAxIGlzIHRoYXQgc3RoIGlzIGluc2VydGVkIHN1Y2Vzc2Z1bGx5LiBBbmQganNvbiBtZXRob2QgdG8gcHJlcGFyZSB0aGUganNvbiBkYXRhIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgb25nb2luZyByZXNwb25zZS5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJNZWV0dXAgaW5zZXJ0ZWQhXCIgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();