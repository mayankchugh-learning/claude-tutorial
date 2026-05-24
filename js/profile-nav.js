(function () {
  var links = window.LEARN_CLAUDE_LINKS;
  if (!links) return;

  document.querySelectorAll('[data-profile-href]').forEach(function (el) {
    var key = el.getAttribute('data-profile-href');
    if (links[key]) el.setAttribute('href', links[key]);
  });
})();
