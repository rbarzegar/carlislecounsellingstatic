// The main file is the top file which will bundle everything else and push to app.js
import SmoothScroll from 'smooth-scroll';
import OffCanvas from './modules/Off-Canvas';
import FixedNav from './modules/Fixed-Nav';

var offCanvas = new OffCanvas();
offCanvas.toggle();

var scroll = new SmoothScroll('a[href*="#"]', {
   // Speed & Easing
   speed: 750, // Integer. How fast to complete the scroll in milliseconds
   offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
   easing: "easeOut", // Easing pattern to use
});

var fixedNav = new FixedNav();
fixedNav.fixedNav();