/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/female_baker_60s.png":
/*!*****************************************!*\
  !*** ./src/images/female_baker_60s.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/female_baker_60s.905b64973196d40e4f22.png";

/***/ }),

/***/ "./src/images/male_baker_30s.png":
/*!***************************************!*\
  !*** ./src/images/male_baker_30s.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/male_baker_30s.c6c1cba89160cd439dca.png";

/***/ }),

/***/ "./src/images/male_baker_60s.png":
/*!***************************************!*\
  !*** ./src/images/male_baker_60s.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/male_baker_60s.c3b928691c98b2278d9c.png";

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
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _images_female_baker_60s_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/female_baker_60s.png */ "./src/images/female_baker_60s.png");
/* harmony import */ var _images_male_baker_60s_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/male_baker_60s.png */ "./src/images/male_baker_60s.png");
/* harmony import */ var _images_male_baker_30s_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/male_baker_30s.png */ "./src/images/male_baker_30s.png");




function about(){
  
  document.querySelector('#content').innerHTML = ''
  //set active nav button
  const activeBtn = document.querySelector("button.active")
  const aboutBtn = document.querySelector("button.about")
  activeBtn.classList.remove("active")
  aboutBtn.classList.add("active")

  const content = document.querySelector('#content');
  const titleContainer = document.createElement('div')
  const title = document.createElement("h1");
  titleContainer.classList.add('title-container')
  title.classList.add('title')
  title.textContent = "About Us";
  titleContainer.appendChild(title);
  content.appendChild(titleContainer);
  
  const aboutInfoContainer = document.createElement('div')
  const aboutInfoSubtitle = document.createElement('h3')
  aboutInfoContainer.classList.add('aboutInfoContainer')
  aboutInfoSubtitle.textContent = 'Meet the team';
  aboutInfoSubtitle.classList.add('aboutInfoSubtitle')
  content.appendChild(aboutInfoContainer)
  aboutInfoContainer.appendChild(aboutInfoSubtitle)


  // const contactInfoContainer = document.createElement('div')
  const contactInfo = document.createElement('h3')
  contactInfo.classList.add('contactInfo')
  contactInfo.textContent = 'Contact Us';
  // content.appendChild(contactInfoContainer)
  aboutInfoContainer.appendChild(contactInfo)

  const employee0 = new Image()
  const employee1 = new Image()
  const employee2 = new Image()

  
  const businessInfo = {
    employeeInfo:{
      employee0:{
        image: employee0.src = _images_male_baker_30s_png__WEBPACK_IMPORTED_MODULE_2__, 
        firstName: 'Mike',
        lastName: 'Camenzuli',
        position: 'Owner/Lead Baker',
        phone: '(123)456-7890',
        email: 'defrealemail@fakemail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores deleniti quis omnis rem amet perspiciatis, eligendi aliquid dolor, quas, optio dolorum? Consequatur, ducimus?',
        fullname: function () {
          return `${this.firstName} ${this.lastName}`
        }
      },
      employee1:{
        image: employee1.src = _images_male_baker_60s_png__WEBPACK_IMPORTED_MODULE_1__,
        firstName: 'Fred',
        lastName: 'Camenzuli',
        position: 'Baker',
        phone: '(789)456-1230',
        email: 'notfakeemail@fakemail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores deleniti quis omnis rem amet perspiciatis, eligendi aliquid dolor, quas, optio dolorum? Consequatur, ducimus?',
        fullname: function () {
          return `${this.firstName} ${this.lastName}`
        }
      },
      employee2:{
        image: employee2.src = _images_female_baker_60s_png__WEBPACK_IMPORTED_MODULE_0__,
        firstName: 'Ann',
        lastName: 'Camenzuli',
        position: 'Reception',
        phone: '(890)123-4567',
        email: 'thisemailisfake@fakemail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores deleniti quis omnis rem amet perspiciatis, eligendi aliquid dolor, quas, optio dolorum? Consequatur, ducimus?',
        fullname: function () {
          return `${this.firstName} ${this.lastName}`
        }
      }
    }
  }



  function buildAbout(){
    for (const item in businessInfo) {
      const employeeObj = businessInfo[item];
      for (const employee in businessInfo[item]){
        const employeeObj = businessInfo[item][employee];
        const bioCard = document.createElement('div')
        bioCard.classList.add('bio-card')
        const cardContainer = document.createElement('div')
        const subtitle = document.querySelector('.aboutInfoSubtitle')
        cardContainer.classList.add('card-container')
        subtitle.appendChild(cardContainer)
        const aboutInfoImage = document.createElement('img')
        aboutInfoImage.src = employeeObj.image

        cardContainer.appendChild(bioCard)
        bioCard.appendChild(aboutInfoImage)

        const bioInfoContainer = document.createElement('div')
        bioInfoContainer.classList.add('bioInfoContainer')
        bioCard.appendChild(bioInfoContainer)
        const name = document.createElement('h4')
        name.classList.add('employee-name')
        name.textContent = employeeObj.fullname(employeeObj.firstName, employeeObj.lastName);
        bioInfoContainer.appendChild(name)

        const position = document.createElement('h4')
        position.classList.add('position')
        position.textContent = employeeObj.position;
        bioInfoContainer.appendChild(position)

        const bio = document.createElement('p')
        bio.classList.add('bio')
        bio.textContent = employeeObj.bio;
        bioInfoContainer.appendChild(bio)
      }
    }
  }

  const storeInfo = {
    hours:{
      sun: 'Sunday - Closed',
      mon: 'Monday - 8:00am - 4:00pm',
      tues: 'Tuesday - 8:00am - 4:00pm',
      wed: 'Wednesday - 8:00am - 4:00pm',
      thurs: 'Thursday - 8:00am - 4:00pm',
      fri: 'Friday - 8:00am - 4:00pm',
      sat: 'Saturday - 8:00am - 4:00pm',
    }, 
    location: {
      address: '123 Fake Street',
      city: 'Fakeville',
      province: 'Żejtun',
      country: 'Malta',
    },
    phone: '(890)-123-4567',
    email: 'mikesmaltesebakery@fakemail.com'
  }



  function buildContactForm(){
    for (const item in storeInfo){
      const storeInfoObj = storeInfo[item];
      const storeInfoContainer = document.createElement('div');
      const title = document.querySelector('.contactInfo')
      storeInfoContainer.classList.add(`${item}-container`)
      title.appendChild(storeInfoContainer);

      const containerLabel = document.createElement('h3')
      containerLabel.classList.add(`${item}-subtitle`)
      containerLabel.textContent = item.charAt(0).toUpperCase() + item.slice(1);
      storeInfoContainer.appendChild(containerLabel)


    }
    const hoursSubtitle = document.querySelector('.hours-subtitle');
    const operatingHoursContainer = document.createElement('div');
    operatingHoursContainer.classList.add('operating-hours')
    
    const locationSubtitle = document.querySelector('.location-subtitle');
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-details')
    
    const phoneSubtitle = document.querySelector('.phone-subtitle');
    const phoneContainer = document.createElement('div');
    phoneContainer.classList.add('phone-number')
    const phone = document.createElement('p')
    phoneContainer.appendChild(phone)
    phone.textContent = storeInfo.phone
    
    const emailSubtitle = document.querySelector('.email-subtitle');
    const emailContainer = document.createElement('div');
    emailContainer.classList.add('email-address')
    const email = document.createElement('p')
    emailContainer.appendChild(email)
    email.textContent = storeInfo.email

    hoursSubtitle.appendChild(operatingHoursContainer);
    locationSubtitle.appendChild(locationContainer);
    phoneSubtitle.appendChild(phoneContainer);
    emailSubtitle.appendChild(emailContainer);

    const iterateHours = (obj) => {
      const stack = [obj];
      while (stack?.length > 0) {
        const currentObj = stack.pop();
        Object.keys(currentObj).forEach(key => {
  
          // console.log(`key: ${key}, value: ${currentObj[key]}`);
          const operatingHours = document.querySelector('.operating-hours')
          const hours = document.createElement('p');
          operatingHours.appendChild(hours);
          hours.textContent = currentObj[key];
  
          if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
            stack.push(currentObj[key]);
          }
        });
      }
    };

    const iterateLocation = (obj) => {
      const stack = [obj];
      while (stack?.length > 0) {
        const currentObj = stack.pop();
        Object.keys(currentObj).forEach(key => {
  
          // console.log(`key: ${key}, value: ${currentObj[key]}`);
          const locationDetails = document.querySelector('.location-details')
          const location = document.createElement('p');
          locationDetails.appendChild(location);
          location.textContent = currentObj[key];
  
          if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
            stack.push(currentObj[key]);
          }
        });
      }
    };

    // iterate(storeInfo)
    iterateHours(storeInfo.hours)
    iterateLocation(storeInfo.location)
  }



  buildAbout();
  buildContactForm();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGZlbWFsZTYwIGZyb20gJy4vaW1hZ2VzL2ZlbWFsZV9iYWtlcl82MHMucG5nJ1xuaW1wb3J0IG1hbGU2MCBmcm9tICcuL2ltYWdlcy9tYWxlX2Jha2VyXzYwcy5wbmcnXG5pbXBvcnQgbWFsZTMwIGZyb20gJy4vaW1hZ2VzL21hbGVfYmFrZXJfMzBzLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKXtcbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gJydcbiAgLy9zZXQgYWN0aXZlIG5hdiBidXR0b25cbiAgY29uc3QgYWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hY3RpdmVcIilcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFib3V0XCIpXG4gIGFjdGl2ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gIGFib3V0QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyJylcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgXG4gIGNvbnN0IGFib3V0SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGFib3V0SW5mb1N1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBhYm91dEluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRJbmZvQ29udGFpbmVyJylcbiAgYWJvdXRJbmZvU3VidGl0bGUudGV4dENvbnRlbnQgPSAnTWVldCB0aGUgdGVhbSc7XG4gIGFib3V0SW5mb1N1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SW5mb1N1YnRpdGxlJylcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dEluZm9Db250YWluZXIpXG4gIGFib3V0SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEluZm9TdWJ0aXRsZSlcblxuXG4gIC8vIGNvbnN0IGNvbnRhY3RJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJbmZvJylcbiAgY29udGFjdEluZm8udGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9Db250YWluZXIpXG4gIGFib3V0SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW5mbylcblxuICBjb25zdCBlbXBsb3llZTAgPSBuZXcgSW1hZ2UoKVxuICBjb25zdCBlbXBsb3llZTEgPSBuZXcgSW1hZ2UoKVxuICBjb25zdCBlbXBsb3llZTIgPSBuZXcgSW1hZ2UoKVxuXG4gIFxuICBjb25zdCBidXNpbmVzc0luZm8gPSB7XG4gICAgZW1wbG95ZWVJbmZvOntcbiAgICAgIGVtcGxveWVlMDp7XG4gICAgICAgIGltYWdlOiBlbXBsb3llZTAuc3JjID0gbWFsZTMwLCBcbiAgICAgICAgZmlyc3ROYW1lOiAnTWlrZScsXG4gICAgICAgIGxhc3ROYW1lOiAnQ2FtZW56dWxpJyxcbiAgICAgICAgcG9zaXRpb246ICdPd25lci9MZWFkIEJha2VyJyxcbiAgICAgICAgcGhvbmU6ICcoMTIzKTQ1Ni03ODkwJyxcbiAgICAgICAgZW1haWw6ICdkZWZyZWFsZW1haWxAZmFrZW1haWwuY29tJyxcbiAgICAgICAgYmlvOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2lhdCBkb2xvcmVzIGRlbGVuaXRpIHF1aXMgb21uaXMgcmVtIGFtZXQgcGVyc3BpY2lhdGlzLCBlbGlnZW5kaSBhbGlxdWlkIGRvbG9yLCBxdWFzLCBvcHRpbyBkb2xvcnVtPyBDb25zZXF1YXR1ciwgZHVjaW11cz8nLFxuICAgICAgICBmdWxsbmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVtcGxveWVlMTp7XG4gICAgICAgIGltYWdlOiBlbXBsb3llZTEuc3JjID0gbWFsZTYwLFxuICAgICAgICBmaXJzdE5hbWU6ICdGcmVkJyxcbiAgICAgICAgbGFzdE5hbWU6ICdDYW1lbnp1bGknLFxuICAgICAgICBwb3NpdGlvbjogJ0Jha2VyJyxcbiAgICAgICAgcGhvbmU6ICcoNzg5KTQ1Ni0xMjMwJyxcbiAgICAgICAgZW1haWw6ICdub3RmYWtlZW1haWxAZmFrZW1haWwuY29tJyxcbiAgICAgICAgYmlvOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2lhdCBkb2xvcmVzIGRlbGVuaXRpIHF1aXMgb21uaXMgcmVtIGFtZXQgcGVyc3BpY2lhdGlzLCBlbGlnZW5kaSBhbGlxdWlkIGRvbG9yLCBxdWFzLCBvcHRpbyBkb2xvcnVtPyBDb25zZXF1YXR1ciwgZHVjaW11cz8nLFxuICAgICAgICBmdWxsbmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVtcGxveWVlMjp7XG4gICAgICAgIGltYWdlOiBlbXBsb3llZTIuc3JjID0gZmVtYWxlNjAsXG4gICAgICAgIGZpcnN0TmFtZTogJ0FubicsXG4gICAgICAgIGxhc3ROYW1lOiAnQ2FtZW56dWxpJyxcbiAgICAgICAgcG9zaXRpb246ICdSZWNlcHRpb24nLFxuICAgICAgICBwaG9uZTogJyg4OTApMTIzLTQ1NjcnLFxuICAgICAgICBlbWFpbDogJ3RoaXNlbWFpbGlzZmFrZUBmYWtlbWFpbC5jb20nLFxuICAgICAgICBiaW86ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRnVnaWF0IGRvbG9yZXMgZGVsZW5pdGkgcXVpcyBvbW5pcyByZW0gYW1ldCBwZXJzcGljaWF0aXMsIGVsaWdlbmRpIGFsaXF1aWQgZG9sb3IsIHF1YXMsIG9wdGlvIGRvbG9ydW0/IENvbnNlcXVhdHVyLCBkdWNpbXVzPycsXG4gICAgICAgIGZ1bGxuYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIGZ1bmN0aW9uIGJ1aWxkQWJvdXQoKXtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gYnVzaW5lc3NJbmZvKSB7XG4gICAgICBjb25zdCBlbXBsb3llZU9iaiA9IGJ1c2luZXNzSW5mb1tpdGVtXTtcbiAgICAgIGZvciAoY29uc3QgZW1wbG95ZWUgaW4gYnVzaW5lc3NJbmZvW2l0ZW1dKXtcbiAgICAgICAgY29uc3QgZW1wbG95ZWVPYmogPSBidXNpbmVzc0luZm9baXRlbV1bZW1wbG95ZWVdO1xuICAgICAgICBjb25zdCBiaW9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYmlvQ2FyZC5jbGFzc0xpc3QuYWRkKCdiaW8tY2FyZCcpXG4gICAgICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dEluZm9TdWJ0aXRsZScpXG4gICAgICAgIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKVxuICAgICAgICBzdWJ0aXRsZS5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKVxuICAgICAgICBjb25zdCBhYm91dEluZm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGFib3V0SW5mb0ltYWdlLnNyYyA9IGVtcGxveWVlT2JqLmltYWdlXG5cbiAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChiaW9DYXJkKVxuICAgICAgICBiaW9DYXJkLmFwcGVuZENoaWxkKGFib3V0SW5mb0ltYWdlKVxuXG4gICAgICAgIGNvbnN0IGJpb0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBiaW9JbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Jpb0luZm9Db250YWluZXInKVxuICAgICAgICBiaW9DYXJkLmFwcGVuZENoaWxkKGJpb0luZm9Db250YWluZXIpXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnZW1wbG95ZWUtbmFtZScpXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBlbXBsb3llZU9iai5mdWxsbmFtZShlbXBsb3llZU9iai5maXJzdE5hbWUsIGVtcGxveWVlT2JqLmxhc3ROYW1lKTtcbiAgICAgICAgYmlvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKVxuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbicpXG4gICAgICAgIHBvc2l0aW9uLnRleHRDb250ZW50ID0gZW1wbG95ZWVPYmoucG9zaXRpb247XG4gICAgICAgIGJpb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocG9zaXRpb24pXG5cbiAgICAgICAgY29uc3QgYmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGJpby5jbGFzc0xpc3QuYWRkKCdiaW8nKVxuICAgICAgICBiaW8udGV4dENvbnRlbnQgPSBlbXBsb3llZU9iai5iaW87XG4gICAgICAgIGJpb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoYmlvKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0b3JlSW5mbyA9IHtcbiAgICBob3Vyczp7XG4gICAgICBzdW46ICdTdW5kYXkgLSBDbG9zZWQnLFxuICAgICAgbW9uOiAnTW9uZGF5IC0gODowMGFtIC0gNDowMHBtJyxcbiAgICAgIHR1ZXM6ICdUdWVzZGF5IC0gODowMGFtIC0gNDowMHBtJyxcbiAgICAgIHdlZDogJ1dlZG5lc2RheSAtIDg6MDBhbSAtIDQ6MDBwbScsXG4gICAgICB0aHVyczogJ1RodXJzZGF5IC0gODowMGFtIC0gNDowMHBtJyxcbiAgICAgIGZyaTogJ0ZyaWRheSAtIDg6MDBhbSAtIDQ6MDBwbScsXG4gICAgICBzYXQ6ICdTYXR1cmRheSAtIDg6MDBhbSAtIDQ6MDBwbScsXG4gICAgfSwgXG4gICAgbG9jYXRpb246IHtcbiAgICAgIGFkZHJlc3M6ICcxMjMgRmFrZSBTdHJlZXQnLFxuICAgICAgY2l0eTogJ0Zha2V2aWxsZScsXG4gICAgICBwcm92aW5jZTogJ8W7ZWp0dW4nLFxuICAgICAgY291bnRyeTogJ01hbHRhJyxcbiAgICB9LFxuICAgIHBob25lOiAnKDg5MCktMTIzLTQ1NjcnLFxuICAgIGVtYWlsOiAnbWlrZXNtYWx0ZXNlYmFrZXJ5QGZha2VtYWlsLmNvbSdcbiAgfVxuXG5cblxuICBmdW5jdGlvbiBidWlsZENvbnRhY3RGb3JtKCl7XG4gICAgZm9yIChjb25zdCBpdGVtIGluIHN0b3JlSW5mbyl7XG4gICAgICBjb25zdCBzdG9yZUluZm9PYmogPSBzdG9yZUluZm9baXRlbV07XG4gICAgICBjb25zdCBzdG9yZUluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RJbmZvJylcbiAgICAgIHN0b3JlSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2l0ZW19LWNvbnRhaW5lcmApXG4gICAgICB0aXRsZS5hcHBlbmRDaGlsZChzdG9yZUluZm9Db250YWluZXIpO1xuXG4gICAgICBjb25zdCBjb250YWluZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgIGNvbnRhaW5lckxhYmVsLmNsYXNzTGlzdC5hZGQoYCR7aXRlbX0tc3VidGl0bGVgKVxuICAgICAgY29udGFpbmVyTGFiZWwudGV4dENvbnRlbnQgPSBpdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zbGljZSgxKTtcbiAgICAgIHN0b3JlSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJMYWJlbClcblxuXG4gICAgfVxuICAgIGNvbnN0IGhvdXJzU3VidGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cnMtc3VidGl0bGUnKTtcbiAgICBjb25zdCBvcGVyYXRpbmdIb3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wZXJhdGluZ0hvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZXJhdGluZy1ob3VycycpXG4gICAgXG4gICAgY29uc3QgbG9jYXRpb25TdWJ0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1zdWJ0aXRsZScpO1xuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24tZGV0YWlscycpXG4gICAgXG4gICAgY29uc3QgcGhvbmVTdWJ0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG9uZS1zdWJ0aXRsZScpO1xuICAgIGNvbnN0IHBob25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGhvbmUtbnVtYmVyJylcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBob25lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lKVxuICAgIHBob25lLnRleHRDb250ZW50ID0gc3RvcmVJbmZvLnBob25lXG4gICAgXG4gICAgY29uc3QgZW1haWxTdWJ0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1zdWJ0aXRsZScpO1xuICAgIGNvbnN0IGVtYWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1haWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZW1haWwtYWRkcmVzcycpXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlbWFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbClcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IHN0b3JlSW5mby5lbWFpbFxuXG4gICAgaG91cnNTdWJ0aXRsZS5hcHBlbmRDaGlsZChvcGVyYXRpbmdIb3Vyc0NvbnRhaW5lcik7XG4gICAgbG9jYXRpb25TdWJ0aXRsZS5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG4gICAgcGhvbmVTdWJ0aXRsZS5hcHBlbmRDaGlsZChwaG9uZUNvbnRhaW5lcik7XG4gICAgZW1haWxTdWJ0aXRsZS5hcHBlbmRDaGlsZChlbWFpbENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBpdGVyYXRlSG91cnMgPSAob2JqKSA9PiB7XG4gICAgICBjb25zdCBzdGFjayA9IFtvYmpdO1xuICAgICAgd2hpbGUgKHN0YWNrPy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPYmogPSBzdGFjay5wb3AoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3VycmVudE9iaikuZm9yRWFjaChrZXkgPT4ge1xuICBcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhga2V5OiAke2tleX0sIHZhbHVlOiAke2N1cnJlbnRPYmpba2V5XX1gKTtcbiAgICAgICAgICBjb25zdCBvcGVyYXRpbmdIb3VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVyYXRpbmctaG91cnMnKVxuICAgICAgICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgIG9wZXJhdGluZ0hvdXJzLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9IGN1cnJlbnRPYmpba2V5XTtcbiAgXG4gICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50T2JqW2tleV0gPT09ICdvYmplY3QnICYmIGN1cnJlbnRPYmpba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChjdXJyZW50T2JqW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGl0ZXJhdGVMb2NhdGlvbiA9IChvYmopID0+IHtcbiAgICAgIGNvbnN0IHN0YWNrID0gW29ial07XG4gICAgICB3aGlsZSAoc3RhY2s/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgY3VycmVudE9iaiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50T2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gIFxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXk6ICR7a2V5fSwgdmFsdWU6ICR7Y3VycmVudE9ialtrZXldfWApO1xuICAgICAgICAgIGNvbnN0IGxvY2F0aW9uRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1kZXRhaWxzJylcbiAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICBsb2NhdGlvbkRldGFpbHMuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gY3VycmVudE9ialtrZXldO1xuICBcbiAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRPYmpba2V5XSA9PT0gJ29iamVjdCcgJiYgY3VycmVudE9ialtrZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGN1cnJlbnRPYmpba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaXRlcmF0ZShzdG9yZUluZm8pXG4gICAgaXRlcmF0ZUhvdXJzKHN0b3JlSW5mby5ob3VycylcbiAgICBpdGVyYXRlTG9jYXRpb24oc3RvcmVJbmZvLmxvY2F0aW9uKVxuICB9XG5cblxuXG4gIGJ1aWxkQWJvdXQoKTtcbiAgYnVpbGRDb250YWN0Rm9ybSgpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==