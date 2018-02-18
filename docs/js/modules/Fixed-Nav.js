class FixedNav {
   fixedNav() {
      const nav = document.querySelector(".main-navigation");
      const headerTitle = document.getElementById("headerTitle");
      const topOfNav = nav.offsetTop;

      function fixtheNav() {
         console.log(window.scrollY, topOfNav);
         if (window.scrollY >= topOfNav) {
            if (window.innerWidth < 700) {
               document.body.style.paddingTop = nav.offsetHeight + "px";
            }
            document.body.classList.add("fixed-nav");
            
         } else {
            document.body.classList.remove("fixed-nav");
            if (window.innerWidth < 700) {
               document.body.style.paddingTop = 0;
            }
         }
      }

      window.addEventListener("scroll", fixtheNav);
   }
}

export default FixedNav;
