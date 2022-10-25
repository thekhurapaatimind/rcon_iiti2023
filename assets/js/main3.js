(function () {
  var bodyEl = document.body,
    openbtn = document.getElementById("open-button"),
    closebtn = document.getElementById("close-button"),
    isOpen = false,
    morphEl = document.getElementById("morph-shape"),
    s = Snap(morphEl.querySelector("svg"));
  path = s.select("path");
  (initialPath = this.path.attr("d")),
    (pathOpen = morphEl.getAttribute("data-morph-open")),
    (isAnimating = false);
  function init() {
    initEvents();
  }
  function initEvents() {
    openbtn.addEventListener("click", toggleMenu);
    if (closebtn) {
      closebtn.addEventListener("click", toggleMenu);
    }
  }
  function toggleMenu() {
    if (isAnimating) return false;
    isAnimating = true;
    if (isOpen) {
      classie.remove(bodyEl, "show-menu");
      setTimeout(function () {
        path.attr("d", initialPath);
        isAnimating = false;
      }, 300);
    } else {
      classie.add(bodyEl, "show-menu");
      path.animate({ path: pathOpen }, 400, mina.easeinout, function () {
        isAnimating = false;
      });
    }
    isOpen = !isOpen;
  }
  init();
})();
