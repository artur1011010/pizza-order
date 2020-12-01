import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollMagic from 'scrollmagic';
import $ from 'jquery';

let controller = new ScrollMagic.Controller();
 // controller.addScene(new ScrollMagic.Scene({duration : 100}));
// controller.scrollTo(function (newScrollPos, callback) {
//   console.log("SASAS")
//   $(this).animate({ scrollTop: newScrollPos }, 400, "swing", callback);
// });

// $(document).on('scroll', function () {
//   controller.scrollTo(200);
//   var scrollPos = controller.scrollPos();
//   console.log("scrollPos: " + scrollPos);
// });


// $(document).on('scroll', function () {
//   var scrollPos = controller.scrollPos();
//   // set a new scroll position calculation method
//   controller.scrollPos(function () {
//     return this.info("vertical") ? -10 : 10
//   });
// });

// $(window).scroll(function () {
//   console.log("scroll+++++");
//   $(".body-wraper").css({
//     "top": ($(window).scrollTop()) + 5000
//   });
// });


// $(window).scroll(function () {
//   console.log("animate")
//   $('html, body').animate({
//     scrollTop: $(".body-wraper").offset().top
//   },500);
// });



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



