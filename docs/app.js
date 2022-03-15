/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/assets/js/slick.js":
/*!*********************************!*\
  !*** ./docs/assets/js/slick.js ***!
  \*********************************/
/***/ (() => {

$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});

/***/ }),

/***/ "./docs/assets/js/toggle.js":
/*!**********************************!*\
  !*** ./docs/assets/js/toggle.js ***!
  \**********************************/
/***/ (() => {

$(document).ready(function () {
  $('.menu-bar').click(function () {
    $('.nav').toggleClass('active');
  });
  $('#login-register').click(function () {
    $('#login').toggleClass('active');
  });
  $('#login-btn').click(function () {
    $('#login').toggleClass('active');
    $('#register').removeClass('active');
  });
  $('#register-btn').click(function () {
    $('#register').toggleClass('active');
    $('#login').removeClass('active');
  });
  $('.close-login-form').click(function () {
    $('#login').removeClass('active');
  });
  $('.close-register-form').click(function () {
    $('#register').removeClass('active');
  });
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./docs/assets/js/app.js ***!
  \*******************************/
__webpack_require__(/*! ./toggle */ "./docs/assets/js/toggle.js");

__webpack_require__(/*! ./slick */ "./docs/assets/js/slick.js");
})();

/******/ })()
;