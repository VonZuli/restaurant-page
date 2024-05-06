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
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _images_pastizzi_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pastizzi.jpg */ "./src/images/pastizzi.jpg");
/* harmony import */ var _images_bread_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bread.jpg */ "./src/images/bread.jpg");
/* harmony import */ var _images_timpana_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/timpana.jpg */ "./src/images/timpana.jpg");
/* harmony import */ var _images_molasses_rings_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/molasses_rings.jpg */ "./src/images/molasses_rings.jpg");
/* harmony import */ var _images_fig_cake_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/fig_cake.jpeg */ "./src/images/fig_cake.jpeg");






function menu(){

  document.querySelector('#content').innerHTML = ''
  //set active nav button
  const activeBtn = document.querySelector("button.active")
  const menuBtn = document.querySelector("button.menu")
  activeBtn.classList.remove("active")
  menuBtn.classList.add("active")

  const content = document.querySelector('#content');

  const titleContainer = document.createElement('div')
  const title = document.createElement("h1");
  content.appendChild(titleContainer)
  titleContainer.classList.add('title-container')
  title.classList.add('title')
  title.textContent = "Menu"
  titleContainer.appendChild(title);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer")
  content.appendChild(menuContainer);

 

  const menu0 = new Image();
  const menu1 = new Image();
  const menu2 = new Image();
  const menu3 = new Image();
  const menu4 = new Image();

  const menuItems = {
    item0: {
      image: menu0.src = _images_pastizzi_jpg__WEBPACK_IMPORTED_MODULE_0__,
      name: "Pastizzi",
      description: "Flakey puff pastry with your choice of filling. (Ricotta, Curried Peas)",
      price: "$10 per dozen",
    },
    item1: {
      image: menu1.src = _images_bread_jpg__WEBPACK_IMPORTED_MODULE_1__,
      name: "Calabrese Bread",
      description: "Rustic crusty bread with a soft airy interior.",
      price: "$3 per loaf",
    },
    item2: {
      image: menu2.src = _images_timpana_jpg__WEBPACK_IMPORTED_MODULE_2__,
      name: "Timpana",
      description: "Delicious pasta in a rich meat sauce, encased in a savory pie crust.",
      price: "$12 per 400g",
    },
    item3: {
      image: menu3.src = _images_molasses_rings_jpg__WEBPACK_IMPORTED_MODULE_3__,
      name: "Molasses Rings (Qaghaq)",
      description: "Pastry dough filled with treacle molasses.",
      price: "$10 per dozen",
    },
    item4: {
      image: menu4.src = _images_fig_cake_jpeg__WEBPACK_IMPORTED_MODULE_4__,
      name: "Fig Cake (Imqaret)",
      description: "Buttery pastry filled with a spiced, citrusy date paste, deep fried and coated in icing sugar.",
      price: "$10 per dozen",
    },
  }

  function buildMenu(){
    for (const item in menuItems) {
      const itemObj = menuItems[item];
      const menuItemContainer = document.createElement('div')
      const menuItemImage = document.createElement('img')
      menuItemImage.src = itemObj.image
      menuItemContainer.classList.add("menuItemContainer")
      menuContainer.appendChild(menuItemContainer);
      menuItemContainer.appendChild(menuItemImage)
      menuItemImage.classList.add('menuItemImg')
    
      const descriptionContainer = document.createElement('div')
      descriptionContainer.classList.add('descriptionContainer')
    
      const menuItemTitle = document.createElement('h2')
      const menuItemDescription = document.createElement('p')
      const menuItemPrice = document.createElement('p')
    
      menuItemTitle.textContent = itemObj.name
      menuItemDescription.textContent = itemObj.description
      menuItemPrice.textContent = itemObj.price
      menuItemContainer.appendChild(descriptionContainer)
      descriptionContainer.appendChild(menuItemTitle)
      descriptionContainer.appendChild(menuItemDescription)
      descriptionContainer.appendChild(menuItemPrice)
    }
  }

  buildMenu();

}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEI0QztBQUNOO0FBQ0k7QUFDTTtBQUNQOztBQUUxQjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixpREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsOENBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5Qix1REFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsa0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBwYXN0aXp6aSBmcm9tICcuL2ltYWdlcy9wYXN0aXp6aS5qcGcnXG5pbXBvcnQgYnJlYWQgZnJvbSAnLi9pbWFnZXMvYnJlYWQuanBnJ1xuaW1wb3J0IHRpbXBhbmEgZnJvbSAnLi9pbWFnZXMvdGltcGFuYS5qcGcnXG5pbXBvcnQgY29va2llIGZyb20gJy4vaW1hZ2VzL21vbGFzc2VzX3JpbmdzLmpwZydcbmltcG9ydCBjYWtlIGZyb20gJy4vaW1hZ2VzL2ZpZ19jYWtlLmpwZWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKXtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9ICcnXG4gIC8vc2V0IGFjdGl2ZSBuYXYgYnV0dG9uXG4gIGNvbnN0IGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWN0aXZlXCIpXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLm1lbnVcIilcbiAgYWN0aXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcilcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyJylcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRhaW5lclwiKVxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gXG5cbiAgY29uc3QgbWVudTAgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbWVudTEgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbWVudTIgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbWVudTMgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbWVudTQgPSBuZXcgSW1hZ2UoKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSB7XG4gICAgaXRlbTA6IHtcbiAgICAgIGltYWdlOiBtZW51MC5zcmMgPSBwYXN0aXp6aSxcbiAgICAgIG5hbWU6IFwiUGFzdGl6emlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZsYWtleSBwdWZmIHBhc3RyeSB3aXRoIHlvdXIgY2hvaWNlIG9mIGZpbGxpbmcuIChSaWNvdHRhLCBDdXJyaWVkIFBlYXMpXCIsXG4gICAgICBwcmljZTogXCIkMTAgcGVyIGRvemVuXCIsXG4gICAgfSxcbiAgICBpdGVtMToge1xuICAgICAgaW1hZ2U6IG1lbnUxLnNyYyA9IGJyZWFkLFxuICAgICAgbmFtZTogXCJDYWxhYnJlc2UgQnJlYWRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJ1c3RpYyBjcnVzdHkgYnJlYWQgd2l0aCBhIHNvZnQgYWlyeSBpbnRlcmlvci5cIixcbiAgICAgIHByaWNlOiBcIiQzIHBlciBsb2FmXCIsXG4gICAgfSxcbiAgICBpdGVtMjoge1xuICAgICAgaW1hZ2U6IG1lbnUyLnNyYyA9IHRpbXBhbmEsXG4gICAgICBuYW1lOiBcIlRpbXBhbmFcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRlbGljaW91cyBwYXN0YSBpbiBhIHJpY2ggbWVhdCBzYXVjZSwgZW5jYXNlZCBpbiBhIHNhdm9yeSBwaWUgY3J1c3QuXCIsXG4gICAgICBwcmljZTogXCIkMTIgcGVyIDQwMGdcIixcbiAgICB9LFxuICAgIGl0ZW0zOiB7XG4gICAgICBpbWFnZTogbWVudTMuc3JjID0gY29va2llLFxuICAgICAgbmFtZTogXCJNb2xhc3NlcyBSaW5ncyAoUWFnaGFxKVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUGFzdHJ5IGRvdWdoIGZpbGxlZCB3aXRoIHRyZWFjbGUgbW9sYXNzZXMuXCIsXG4gICAgICBwcmljZTogXCIkMTAgcGVyIGRvemVuXCIsXG4gICAgfSxcbiAgICBpdGVtNDoge1xuICAgICAgaW1hZ2U6IG1lbnU0LnNyYyA9IGNha2UsXG4gICAgICBuYW1lOiBcIkZpZyBDYWtlIChJbXFhcmV0KVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQnV0dGVyeSBwYXN0cnkgZmlsbGVkIHdpdGggYSBzcGljZWQsIGNpdHJ1c3kgZGF0ZSBwYXN0ZSwgZGVlcCBmcmllZCBhbmQgY29hdGVkIGluIGljaW5nIHN1Z2FyLlwiLFxuICAgICAgcHJpY2U6IFwiJDEwIHBlciBkb3plblwiLFxuICAgIH0sXG4gIH1cblxuICBmdW5jdGlvbiBidWlsZE1lbnUoKXtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVudUl0ZW1zKSB7XG4gICAgICBjb25zdCBpdGVtT2JqID0gbWVudUl0ZW1zW2l0ZW1dO1xuICAgICAgY29uc3QgbWVudUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgY29uc3QgbWVudUl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICBtZW51SXRlbUltYWdlLnNyYyA9IGl0ZW1PYmouaW1hZ2VcbiAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbUNvbnRhaW5lclwiKVxuICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcik7XG4gICAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbUltYWdlKVxuICAgICAgbWVudUl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbUltZycpXG4gICAgXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkNvbnRhaW5lcicpXG4gICAgXG4gICAgICBjb25zdCBtZW51SXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgY29uc3QgbWVudUl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIFxuICAgICAgbWVudUl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW1PYmoubmFtZVxuICAgICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW1PYmouZGVzY3JpcHRpb25cbiAgICAgIG1lbnVJdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtT2JqLnByaWNlXG4gICAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcilcbiAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUpXG4gICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NyaXB0aW9uKVxuICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1QcmljZSlcbiAgICB9XG4gIH1cblxuICBidWlsZE1lbnUoKTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==