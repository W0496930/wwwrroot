// Accordion for FAQ Section
var accordions = document.querySelectorAll(".accordion");

accordions.forEach(function (accordion) {
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Remove 'active' class from the home link on page load
document.addEventListener("DOMContentLoaded", function () {
  var activeNavItem = document.querySelector('.nav-item.active');

  if (activeNavItem) {
    activeNavItem.classList.remove('active');
  }
});
