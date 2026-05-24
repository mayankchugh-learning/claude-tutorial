(function () {
  const sections = document.querySelectorAll('.lesson-section[id]');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const searchInput = document.getElementById('sidebar-search');

  function setActiveLink(id) {
    sidebarLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  }

  if (sections.length && sidebarLinks.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var q = searchInput.value.toLowerCase().trim();
      sidebarLinks.forEach(function (link) {
        var text = link.textContent.toLowerCase();
        link.style.display = !q || text.includes(q) ? '' : 'none';
      });
    });
  }
})();
