class FixedNav {
   fixedNav() {
      const nav = document.querySelector('.main-navigation');
      const topOfNav = nav.offsetTop;

      function fixtheNav() {
         console.log(window.scrollY, topOfNav);
         if (window.scrollY >= topOfNav) {
            document.body.style.paddingTop = nav.offsetHeight + 'px';
            document.body.classList.add('fixed-nav');
         } else {
            document.body.style.paddingTop = 0;
            document.body.classList.remove('fixed-nav');
         }
      }

      window.addEventListener('scroll', fixtheNav);
   }
}

export default FixedNav;