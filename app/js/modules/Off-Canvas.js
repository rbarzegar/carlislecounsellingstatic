class OffCanvas {
   toggle() {
      const hamburger = document.getElementById('hamburger');
      const offCanvasMenu = document.getElementById('offCanvasMenu');
      hamburger.addEventListener('click', () => {
         hamburger.classList.toggle('open');
         offCanvasMenu.classList.toggle('slideIn');
      });

   }
}

export default OffCanvas;  // This sets out what gets exported from this file - es6 notation
