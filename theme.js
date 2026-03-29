// ── Thème clair/sombre ──
(function () {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
})();

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  document.getElementById("themeToggle").textContent = next === "dark" ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("themeToggle");
  if (btn) {
    const current = document.documentElement.getAttribute("data-theme");
    btn.textContent = current === "dark" ? "☀️" : "🌙";
  }
});
