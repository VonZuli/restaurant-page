/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/bread.jpg":
/*!******************************!*\
  !*** ./src/images/bread.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bread.077d0cd0ed1691c0d01d.jpg";

/***/ }),

/***/ "./src/images/fig_cake.jpeg":
/*!**********************************!*\
  !*** ./src/images/fig_cake.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/fig_cake.07c24ce40fe504d689e1.jpeg";

/***/ }),

/***/ "./src/images/molasses_rings.jpg":
/*!***************************************!*\
  !*** ./src/images/molasses_rings.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/molasses_rings.e0f3db74bde2ac8c1f2f.jpg";

/***/ }),

/***/ "./src/images/pastizzi.jpg":
/*!*********************************!*\
  !*** ./src/images/pastizzi.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/pastizzi.537f3c6072bdbdbc3eba.jpg";

/***/ }),

/***/ "./src/images/timpana.jpg":
/*!********************************!*\
  !*** ./src/images/timpana.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/timpana.b446ead5d2c17b760fa5.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _images_pastizzi_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pastizzi.jpg */ "./src/images/pastizzi.jpg");
/* harmony import */ var _images_bread_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bread.jpg */ "./src/images/bread.jpg");
/* harmony import */ var _images_timpana_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/timpana.jpg */ "./src/images/timpana.jpg");
/* harmony import */ var _images_molasses_rings_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/molasses_rings.jpg */ "./src/images/molasses_rings.jpg");
/* harmony import */ var _images_fig_cake_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/fig_cake.jpeg */ "./src/images/fig_cake.jpeg");






function home(){

  document.querySelector('#content').innerHTML = ''
  // set active nav button
  const activeBtn = document.querySelector("button.active")
  const homeBtn = document.querySelector("button.home")
  activeBtn.classList.remove("active")
  homeBtn.classList.add("active")

  const content = document.querySelector('#content');

  const titleContainer = document.createElement('div')
  const title = document.createElement("h1");
  const subtitle = document.createElement("h3");
  
  titleContainer.classList.add('title-container')
  // <h1>Mike's Maltese Bakery</h1>
  title.classList.add('title')
  
  title.textContent = "Welcome to"
  titleContainer.appendChild(title);
  content.appendChild(titleContainer)
  content.appendChild(subtitle);

  // <h3>Traditional Maltese Bread and Pastries</h3>
  subtitle.textContent = "Traditional Maltese Bread and Pastries"

  // images
  const menuPreview = document.createElement('div');
  menuPreview.classList.add("menuPreview")
  
  const menu1 = new Image();
  const menu2 = new Image();
  const menu3 = new Image();
  const menu4 = new Image();
  const menu5 = new Image();
  
  menu1.src = _images_pastizzi_jpg__WEBPACK_IMPORTED_MODULE_0__
  menu2.src = _images_bread_jpg__WEBPACK_IMPORTED_MODULE_1__
  menu3.src = _images_timpana_jpg__WEBPACK_IMPORTED_MODULE_2__
  menu4.src = _images_molasses_rings_jpg__WEBPACK_IMPORTED_MODULE_3__
  menu5.src = _images_fig_cake_jpeg__WEBPACK_IMPORTED_MODULE_4__
  

  content.appendChild(menuPreview);
  
  menuPreview.appendChild(menu1);
  menuPreview.appendChild(menu2);
  menuPreview.appendChild(menu3);
  menuPreview.appendChild(menu4);
  menuPreview.appendChild(menu5);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEI0QztBQUNOO0FBQ0k7QUFDTTtBQUNQOztBQUUxQjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlEQUFRO0FBQ3RCLGNBQWMsOENBQUs7QUFDbkIsY0FBYyxnREFBTztBQUNyQixjQUFjLHVEQUFNO0FBQ3BCLGNBQWMsa0RBQUk7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcGFzdGl6emkgZnJvbSAnLi9pbWFnZXMvcGFzdGl6emkuanBnJ1xuaW1wb3J0IGJyZWFkIGZyb20gJy4vaW1hZ2VzL2JyZWFkLmpwZydcbmltcG9ydCB0aW1wYW5hIGZyb20gJy4vaW1hZ2VzL3RpbXBhbmEuanBnJ1xuaW1wb3J0IGNvb2tpZSBmcm9tICcuL2ltYWdlcy9tb2xhc3Nlc19yaW5ncy5qcGcnXG5pbXBvcnQgY2FrZSBmcm9tICcuL2ltYWdlcy9maWdfY2FrZS5qcGVnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCl7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJ1xuICAvLyBzZXQgYWN0aXZlIG5hdiBidXR0b25cbiAgY29uc3QgYWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hY3RpdmVcIilcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uaG9tZVwiKVxuICBhY3RpdmVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgXG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhaW5lcicpXG4gIC8vIDxoMT5NaWtlJ3MgTWFsdGVzZSBCYWtlcnk8L2gxPlxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gIFxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0b1wiXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcilcbiAgY29udGVudC5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgLy8gPGgzPlRyYWRpdGlvbmFsIE1hbHRlc2UgQnJlYWQgYW5kIFBhc3RyaWVzPC9oMz5cbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIlRyYWRpdGlvbmFsIE1hbHRlc2UgQnJlYWQgYW5kIFBhc3RyaWVzXCJcblxuICAvLyBpbWFnZXNcbiAgY29uc3QgbWVudVByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudVByZXZpZXcuY2xhc3NMaXN0LmFkZChcIm1lbnVQcmV2aWV3XCIpXG4gIFxuICBjb25zdCBtZW51MSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBtZW51MiA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBtZW51MyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBtZW51NCA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBtZW51NSA9IG5ldyBJbWFnZSgpO1xuICBcbiAgbWVudTEuc3JjID0gcGFzdGl6emlcbiAgbWVudTIuc3JjID0gYnJlYWRcbiAgbWVudTMuc3JjID0gdGltcGFuYVxuICBtZW51NC5zcmMgPSBjb29raWVcbiAgbWVudTUuc3JjID0gY2FrZVxuICBcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVQcmV2aWV3KTtcbiAgXG4gIG1lbnVQcmV2aWV3LmFwcGVuZENoaWxkKG1lbnUxKTtcbiAgbWVudVByZXZpZXcuYXBwZW5kQ2hpbGQobWVudTIpO1xuICBtZW51UHJldmlldy5hcHBlbmRDaGlsZChtZW51Myk7XG4gIG1lbnVQcmV2aWV3LmFwcGVuZENoaWxkKG1lbnU0KTtcbiAgbWVudVByZXZpZXcuYXBwZW5kQ2hpbGQobWVudTUpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=