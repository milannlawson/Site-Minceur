// ═══════════════════════════════════════════════════════════
//  APP.JS — Moteur de la page recettes
//  Génère dynamiquement les cartes, le modal et la liste
//  de courses à partir de data.js
// ═══════════════════════════════════════════════════════════

(function () {
  "use strict";

  // ── State ──
  let activeFilter = "all";
  let searchQuery = "";
  const selectedRecipes = new Set();
  const shoppingChecks = {};

  // ── DOM refs ──
  const grid = document.getElementById("recipesGrid");
  const filterContainer = document.getElementById("filterBtns");
  const searchInput = document.getElementById("searchInput");
  const shoppingToggleBtn = document.getElementById("shoppingToggleBtn");
  const shoppingPanel = document.getElementById("shoppingPanel");
  const shoppingItems = document.getElementById("shoppingItems");
  const selectedCountEl = document.getElementById("selectedCount");
  const printListBtn = document.getElementById("printListBtn");
  const clearListBtn = document.getElementById("clearListBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalCard = document.getElementById("modalCard");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");

  // ═════════════════════════════
  //  FILTERS
  // ═════════════════════════════
  function renderFilters() {
    const frag = document.createDocumentFragment();
    Object.entries(CATEGORIES).forEach(([key, label]) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (key === "all" ? " active" : "");
      btn.textContent = label;
      btn.addEventListener("click", () => {
        activeFilter = key;
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderGrid();
      });
      frag.appendChild(btn);
    });
    filterContainer.appendChild(frag);
  }

  // ═════════════════════════════
  //  GRID
  // ═════════════════════════════
  function getFilteredRecipes() {
    return RECIPES.filter((r) => {
      const matchCat = activeFilter === "all" || r.category === activeFilter;
      const matchSearch =
        !searchQuery ||
        r.name.toLowerCase().includes(searchQuery) ||
        r.description.toLowerCase().includes(searchQuery) ||
        r.ingredients.some((i) => i.toLowerCase().includes(searchQuery));
      return matchCat && matchSearch;
    });
  }

  function renderGrid() {
    grid.innerHTML = "";
    const recipes = getFilteredRecipes();

    if (recipes.length === 0) {
      grid.innerHTML = '<div class="no-results">Aucune recette trouvée — essaie un autre mot-clé.</div>';
      return;
    }

    const frag = document.createDocumentFragment();
    recipes.forEach((r, i) => {
      const card = document.createElement("div");
      card.className = "recipe-card fade-up";
      card.style.animationDelay = `${Math.min(i * 0.06, 0.5)}s`;
      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${encodeImagePath(r.image)}" alt="${r.name}" loading="lazy">
          <span class="card-badge">${CATEGORIES[r.category] || r.category}</span>
          <span class="card-cal">${r.calories} kcal</span>
        </div>
        <div class="card-body">
          <div class="card-title">${r.name}</div>
          <div class="card-desc">${r.description}</div>
          <div class="card-meta">
            <span class="card-time">⏱ ${r.time}</span>
            <span class="card-difficulty">${r.difficulty}</span>
          </div>
          <div class="card-actions">
            <button class="card-btn card-btn-shop" data-id="${r.id}" title="Ajouter à la liste de courses">
              🛒
            </button>
            <button class="card-btn card-btn-eat" data-id="${r.id}" title="J'ai mangé ça">
              🍽
            </button>
          </div>
        </div>
      `;
      card.addEventListener("click", () => openModal(r));
      // Bouton 🛒 — stopPropagation empêche l'ouverture du modal
      card.querySelector('.card-btn-shop').addEventListener('click', (e) => {
        e.stopPropagation(); // ← Le clic reste sur le bouton, ne remonte pas à la carte
        toggleShoppingRecipe(r.id, e.currentTarget);
      });

      // Bouton 🍽 — idem
      card.querySelector('.card-btn-eat').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCalories(r);
      });
      frag.appendChild(card);
    });
    grid.appendChild(frag);
  }

  function encodeImagePath(path) {
    // Encode just the filename part, keep the images/ prefix
    const parts = path.split("/");
    const folder = parts.slice(0, -1).join("/");
    const file = parts[parts.length - 1];
    return folder + "/" + encodeURIComponent(file);
  }

  // ═════════════════════════════
  //  MODAL
  // ═════════════════════════════
  function openModal(recipe) {
    modalImg.src = encodeImagePath(recipe.image);
    modalImg.alt = recipe.name;
    modalTitle.textContent = recipe.name;

    // Meta
    modalMeta.innerHTML = `
      <div class="modal-meta-item">
        <div class="modal-meta-label">Temps</div>
        <div class="modal-meta-value">${recipe.time}</div>
      </div>
      <div class="modal-meta-item">
        <div class="modal-meta-label">Calories</div>
        <div class="modal-meta-value">${recipe.calories}</div>
      </div>
      <div class="modal-meta-item">
        <div class="modal-meta-label">Portion</div>
        <div class="modal-meta-value">1</div>
      </div>
    `;

    // Body
    let html = "";

    // Ingredients
    html += `<div class="modal-section"><h3>🛒 Ingrédients</h3><ul>`;
    recipe.ingredients.forEach((ing) => {
      html += `<li>${ing}</li>`;
    });
    html += `</ul></div>`;

    // Steps
    html += `<div class="modal-section"><h3>👨‍🍳 Préparation</h3><ol>`;
    recipe.steps.forEach((step) => {
      html += `<li>${step}</li>`;
    });
    html += `</ol></div>`;

    // TikTok
    if (recipe.tiktok) {
      html += `
        <div class="tiktok-embed">
          <iframe src="${recipe.tiktok}" title="Vidéo TikTok" allowfullscreen></iframe>
        </div>
      `;
    }

    // Tip
    if (recipe.tip) {
      html += `<div class="modal-tip">💡 ${recipe.tip}</div>`;
    }

    // Actions
    const inShop = selectedRecipes.has(recipe.id);
    html += `
      <div class="modal-actions">
        <button class="btn btn-secondary" id="modalShopBtn" data-id="${recipe.id}">
          ${inShop ? "✅ Dans la liste" : "🛒 Ajouter à la liste"}
        </button>
        <button class="btn btn-primary" id="modalEatBtn" data-id="${recipe.id}">
          🍽 J'ai mangé ça
        </button>
      </div>
    `;

    modalBody.innerHTML = html;

    // Button listeners
    document.getElementById("modalShopBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleShoppingRecipe(recipe.id, e.currentTarget);
    });
    document.getElementById("modalEatBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCalories(recipe);
    });

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModalFn() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModalFn);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModalFn();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModalFn();
  });

  // Prevent modal card clicks from closing
  modalCard.addEventListener("click", (e) => e.stopPropagation());

  // ═════════════════════════════
  //  SHOPPING LIST
  // ═════════════════════════════
  function toggleShoppingRecipe(recipeId, btnEl) {
    if (selectedRecipes.has(recipeId)) {
      selectedRecipes.delete(recipeId);
      // Retire la classe active sur TOUS les boutons shop de cette recette
      document.querySelectorAll(`.card-btn-shop[data-id="${recipeId}"]`)
        .forEach(b => b.classList.remove('active'));
      // Met à jour le bouton dans le modal si ouvert
      const modalBtn = document.getElementById('modalShopBtn');
      if (modalBtn && modalBtn.dataset.id === recipeId) {
        modalBtn.textContent = "🛒 Ajouter à la liste";
        modalBtn.classList.remove("btn-primary");
        modalBtn.classList.add("btn-secondary");
      }
    } else {
      selectedRecipes.add(recipeId);
      document.querySelectorAll(`.card-btn-shop[data-id="${recipeId}"]`)
        .forEach(b => b.classList.add('active'));
      const modalBtn = document.getElementById('modalShopBtn');
      if (modalBtn && modalBtn.dataset.id === recipeId) {
        modalBtn.textContent = "✅ Dans la liste";
        modalBtn.classList.remove("btn-secondary");
        modalBtn.classList.add("btn-primary");
      }
    }
    renderShoppingList();
  }

  function renderShoppingList() {
    shoppingItems.innerHTML = "";
    selectedCountEl.textContent = selectedRecipes.size;

    if (selectedRecipes.size === 0) {
      shoppingItems.innerHTML = '<li class="shopping-empty">Sélectionne une recette pour voir les ingrédients ici.</li>';
      return;
    }

    // Aggregate ingredients
    const ingredientMap = {};
    selectedRecipes.forEach((id) => {
      const recipe = RECIPES.find((r) => r.id === id);
      if (!recipe) return;
      recipe.ingredients.forEach((ing) => {
        if (!ingredientMap[ing]) ingredientMap[ing] = [];
        ingredientMap[ing].push(recipe.name);
      });
    });

    Object.entries(ingredientMap).forEach(([ing, names]) => {
      const li = document.createElement("li");
      li.className = "shopping-item";

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!shoppingChecks[ing];
      cb.addEventListener("change", () => {
        shoppingChecks[ing] = cb.checked;
        textSpan.classList.toggle("checked", cb.checked);
      });

      const textSpan = document.createElement("span");
      textSpan.className = "shopping-item-text" + (cb.checked ? " checked" : "");
      textSpan.textContent = ing;

      const badge = document.createElement("span");
      badge.className = "shopping-item-recipe";
      badge.textContent = names.length > 1 ? `${names.length} recettes` : "1 recette";

      li.appendChild(cb);
      li.appendChild(textSpan);
      li.appendChild(badge);
      shoppingItems.appendChild(li);
    });
  }

  shoppingToggleBtn.addEventListener("click", () => {
    shoppingPanel.classList.toggle("open");
    renderShoppingList();
  });

  clearListBtn.addEventListener("click", () => {
    selectedRecipes.clear();
    Object.keys(shoppingChecks).forEach((k) => delete shoppingChecks[k]);
    renderShoppingList();
    toast("Liste vidée");
  });

  printListBtn.addEventListener("click", () => {
    if (selectedRecipes.size === 0) {
      toast("Sélectionne au moins une recette d'abord !");
      return;
    }
    const names = Array.from(selectedRecipes).map((id) => RECIPES.find((r) => r.id === id)?.name).filter(Boolean);
    const w = window.open("", "_blank");
    w.document.write(`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Ma Liste de Courses</title>
      <style>
        body{font-family:-apple-system,sans-serif;margin:40px;color:#2d2a26}
        h1{color:#5e7a52;border-bottom:3px solid #5e7a52;padding-bottom:10px}
        .note{background:#e9f0e6;padding:12px 16px;border-radius:8px;border-left:4px solid #5e7a52;margin:16px 0}
        ul{list-style:none;padding:0}
        li{padding:10px 0;border-bottom:1px solid #e5dfd7;display:flex;align-items:center}
        input{transform:scale(1.4);margin-right:14px}
      </style></head><body>
      <h1>🛒 Ma Liste de Courses</h1>
      <div class="note"><strong>Recettes :</strong> ${names.join(" · ")}</div>
      ${shoppingItems.innerHTML}
    </body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 300);
  });

  // ═════════════════════════════
  //  CALORIES (localStorage)
  // ═════════════════════════════
  function addToCalories(recipe) {
    const key = new Date().toISOString().split("T")[0];
    const data = JSON.parse(localStorage.getItem("caloriesData") || "{}");
    if (!data[key]) data[key] = [];
    data[key].push({
      recipeId: recipe.id,
      name: recipe.name,
      calories: recipe.calories,
      time: new Date().toLocaleTimeString("fr-FR"),
    });
    window.dbSet("caloriesData", JSON.stringify(data));
    toast(`${recipe.name} ajouté ! +${recipe.calories} kcal`);
    closeModalFn();
  }

  // ═════════════════════════════
  //  TOAST
  // ═════════════════════════════
  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => el.classList.add("show"));
    });
    setTimeout(() => {
      el.classList.remove("show");
      setTimeout(() => el.remove(), 400);
    }, 2500);
  }

  // ═════════════════════════════
  //  SEARCH
  // ═════════════════════════════
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderGrid();
  });

  // ═════════════════════════════
  //  INIT
  // ═════════════════════════════
  renderFilters();
  renderGrid();
  renderShoppingList();
})();
