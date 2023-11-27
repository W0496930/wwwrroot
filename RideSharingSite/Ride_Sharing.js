//Establishing the accordion in the FAQ Section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//Added this line of code to prevent the home link from being highlighted by default on page load.
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.nav-item.active').classList.remove('active');
});