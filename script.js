document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const makeActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.remove("active", "text-cyan-400", "font-bold", "ml-5");
      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("active", "text-cyan-400", "font-bold", "ml-5");
      }
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          makeActive(entry.target.id);
        }
      });
    },
    { threshold: 0.6 } // Change the visibility threshold as needed
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
