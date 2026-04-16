// Floating action button for mobile TOC
(function () {
  const fab = document.createElement("button");
  fab.className = "fab-toc";
  fab.textContent = "☰";
  fab.setAttribute("aria-label", "目錄");
  document.body.appendChild(fab);

  const overlay = document.createElement("div");
  overlay.className = "fab-overlay";
  overlay.innerHTML = '<div class="fab-panel"><p class="fab-title">快速跳轉</p><div class="fab-links" id="fab-links"></div></div>';
  document.body.appendChild(overlay);

  let open = false;

  function toggle() {
    open = !open;
    overlay.classList.toggle("show", open);
    fab.classList.toggle("open", open);
  }

  fab.addEventListener("click", function () {
    if (!open) {
      const headings = document.querySelectorAll("#note-body h2, #note-body h3");
      const container = document.querySelector("#fab-links");
      container.innerHTML = "";
      headings.forEach(function (h) {
        if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, "-");
        const a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = (h.tagName === "H3" ? "  ↳ " : "") + h.textContent;
        a.addEventListener("click", function () { toggle(); });
        container.appendChild(a);
      });
    }
    toggle();
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) toggle();
  });
})();
