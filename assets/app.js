(function (){

   var navMenu = document.getElementById('NavMenu');

   function main() {
      setupListeners();
      setupMenu();
   }

   function setupMenu() {
      document.getElementById("buttonMenu").addEventListener('click', function(){
         toggleMenu();
      });
   }

   function toggleMenu() {
      navMenu.classList.toggle("s-nav__graph-active");
   }

   function setupListeners() {
      var links = navMenu.querySelectorAll('a');
      
      for (var index = 0; index < links.length; index++) {
         links[index].addEventListener('click', (event) => {
            event.preventDefault();

            var sectionId = event.currentTarget.getAttribute('href');
            jumpToSection(sectionId);
            toggleMenu();

         })
      }
   }

   function jumpToSection(sectionId) {
      Jump(sectionId, {
         duration: 1000,
         offset: -87,
         a11y: false,
      });
   }

   main();
})();
