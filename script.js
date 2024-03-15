const barIcon = document.getElementById("barsIcon");
const xmarkIcon = document.getElementById("xmarkIcon");
const dropMenu = document.getElementById("dropMenu");
barIcon.addEventListener('click', ()=> {
    console.log("hi");
    barIcon.style.display = "none";
    xmarkIcon.style.display = "block";
    dropMenu.style.display = "block";
});
xmarkIcon.addEventListener('click', ()=> {
    barIcon.style.display = "block";
    xmarkIcon.style.display = "none";
    dropMenu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById('scrollToTop');
  
    // Show or hide the button based on the scroll position
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    };
  
    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener('click', function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  