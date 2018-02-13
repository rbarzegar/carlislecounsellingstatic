class OffCanvas {
   toggle() {
      const hamburger = document.getElementById('hamburger');
      const offCanvasMenu = document.getElementById('slideDownMenu');
      hamburger.addEventListener('click', () => {
         hamburger.classList.toggle('open');
         slideDownMenu.classList.toggle('slideDown');
      });
   }
}

export default OffCanvas;  // This sets out what gets exported from this file - es6 notation
