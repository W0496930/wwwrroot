document.addEventListener("DOMContentLoaded", function() {
    // Select all sections to observe for the fade-in effect
    const sections = document.querySelectorAll("section");
  
    // Options for IntersectionObserver: Trigger when at least 10% is visible
    const options = { threshold: 0.1 };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    // Hide all sections initially and observe them for fade-in effect
    sections.forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  });
  