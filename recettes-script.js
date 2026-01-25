// Dictionnaire des recettes avec leurs ingrédients
const recipes = {
    'bowl': {
        name: 'Bowl Poulet Minceur',
        ingredients: [
            '120 g de blanc de poulet en dés',
            '100 g de riz complet ou quinoa cuit',
            'Légumes à volonté : tomates, concombre, carottes râpées, maïs, poivron',
            '1 c. à soupe de yaourt nature',
            'Citron, sel, poivre, ail en poudre'
        ]
    },
    'omelett': {
        name: 'Omelette Full Légumes',
        ingredients: [
            '2 œufs + 1 blanc d\'œuf',
            'Légumes coupés fin : poivron, oignon, champignons, épinards, tomate',
            '1 c. à café d\'huile d\'olive ou spray d\'huile',
            'Sel et poivre',
            'Optionnel : fromage râpé light ou viande des Grisons'
        ]
    },
    'poisson': {
        name: 'Poisson & Légumes au Four',
        ingredients: [
            '1 filet de cabillaud, colin ou saumon (100–150 g)',
            'Légumes : brocoli, carottes, courgettes, haricots verts (surgelés ou frais)',
            '1 c. à café d\'huile d\'olive',
            'Citron, herbes (thym, persil), sel, poivre'
        ]
    },
    'wrap1': {
        name: 'Wrap Grison & Crudités',
        ingredients: [
            '1 galette de blé complet ou tortilla de maïs',
            '30–40 g de viande des Grisons',
            'Crudités : salade, tomate, concombre, carotte râpée',
            '1 c. à soupe de yaourt nature',
            'Moutarde ou citron'
        ]
    },
    'yaourt': {
        name: 'Yaourt Protéiné Dessert',
        ingredients: [
            '1 yaourt grec 0 % ou fromage blanc / skyr (150 g)',
            '1 petit fruit : demi-banane, kiwi, quelques framboises ou fraises',
            'Optionnel : 1 c. à café de miel, sirop d\'agave ou cannelle'
        ]
    },
    'thon': {
        name: 'Salade Thon Light',
        ingredients: [
            '1 boîte de thon au naturel (100 g), égoutté',
            'Une poignée de salade mixte',
            'Tomate, concombre, oignon rouge (quelques tranches)',
            '1 c. à soupe de maïs',
            '1 c. à soupe de yaourt nature + jus de citron + moutarde',
            'Sel, poivre'
        ]
    },
    'cocotte': {
        name: 'Œufs Cocotte Légumes',
        ingredients: [
            '2 œufs',
            'Légumes : épinards, poivron, champignons, tomate (coupés fin)',
            '1 c. à soupe de lait allégé',
            'Sel, poivre, herbes (persil, ciboulette)',
            'Un peu d\'huile ou spray'
        ]
    },
    'soupe': {
        name: 'Soupe Minceur Détox',
        ingredients: [
            '1 litre de bouillon de légumes léger',
            '2 carottes, 1 courgette, 1 brocoli, poignée de chou-fleur',
            '1 oignon, 2 gousses d\'ail',
            '1 c. à café de miel ou un peu de sel',
            'Herbes : thym, persil, laurier',
            'Poivre'
        ]
    },
    'pates': {
        name: 'Pâtes Courgettes Légères',
        ingredients: [
            '80 g de pâtes complètes (spaghetti ou penne)',
            '2 courgettes moyennes, taillées en julienne',
            '1 boîte petite de tomates concassées (200 ml)',
            '2 gousses d\'ail, 1 oignon',
            '1 c. à café d\'huile d\'olive',
            'Herbes (basilic, origan), sel, poivre'
        ]
    },
    'gingembre': {
        name: 'Poulet Gingembre Sauce Légère',
        ingredients: [
            '150 g de blanc de poulet, coupé en lanières',
            '1 c. à soupe de gingembre frais, râpé',
            '2 gousses d\'ail, hachées',
            '1 c. à soupe de sauce soja légère',
            '100 ml de bouillon de poule léger',
            '1 c. à café d\'huile',
            '1 oignon, 1 poivron, légumes de saison',
            'Poivre, optionnel : citron ou 1 trait de miel'
        ]
    },
    'smoothie1': {
        name: 'Smoothie Protéiné Fruité',
        ingredients: [
            '1 banane',
            '200 ml de lait amande',
            '1 yaourt grec (150 g)',
            '30 g de flocons avoine',
            '30 g de poudre protéinée vanille',
            '1 poignée de myrtilles fraîches',
            '1 c. à soupe de beurre amande'
        ]
    }
};

let selectedRecipes = new Set();

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    setupModal();
    setupShopping();
});

// ============ GESTION MODALS ============
function openModal(recipeName) {
    const modalMap = {
        'bowl': 'bowlModal',
        'omelett': 'omelettModal',
        'poisson': 'poissonModal',
        'wrap1': 'wrap1Modal',
        'yaourt': 'yaourtModal',
        'thon': 'thonModal',
        'cocotte': 'cocotteModal',
        'soupe': 'soupeModal',
        'pates': 'patesModal',
        'gingembre': 'gingembreModal',
        'smoothie1': 'smoothie1Modal',
        'porridge1': 'porridge1Modal',
        'rillettes1': 'rillettes1Modal',
        'avocado1': 'avocado1Modal',
        'pancakes1': 'pancakes1Modal',
        'yaourt1': 'yaourt1Modal',
        'wrap2': 'wrap2Modal',
        'poulet_frit1': 'poulet_frit1Modal'
    };
    
    const modal = document.getElementById(modalMap[recipeName]);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(recipeName) {
    const modalMap = {
        'bowl': 'bowlModal',
        'omelett': 'omelettModal',
        'poisson': 'poissonModal',
        'wrap1': 'wrap1Modal',
        'yaourt': 'yaourtModal',
        'thon': 'thonModal',
        'cocotte': 'cocotteModal',
        'soupe': 'soupeModal',
        'pates': 'patesModal',
        'gingembre': 'gingembreModal',
        'smoothie1': 'smoothie1Modal',
        'porridge1': 'porridge1Modal',
        'rillettes1': 'rillettes1Modal',
        'avocado1': 'avocado1Modal',
        'pancakes1': 'pancakes1Modal',
        'yaourt1': 'yaourt1Modal',
        'wrap2': 'wrap2Modal',
        'poulet_frit1': 'poulet_frit1Modal'
    };
    
    const modal = document.getElementById(modalMap[recipeName]);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function setupModal() {
    // Fermeture au clic extérieur
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // Fermeture à l'Échap
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        }
    });
}

// ============ GESTION LISTE DE COURSES ============
function setupShopping() {
    const toggleBtn = document.getElementById('shoppingToggle');
    const printBtn = document.getElementById('printList');
    const clearBtn = document.getElementById('clearList');

    toggleBtn.addEventListener('click', function() {
        document.getElementById('shoppingList').classList.toggle('hidden');
    });

    printBtn.addEventListener('click', printShoppingList);
    clearBtn.addEventListener('click', clearShoppingList);

    // Ajouter les boutons "Ajouter" à chaque section ingrédients
    addShoppingButtons();
}

function addShoppingButtons() {
    // Parcourir TOUTES les modales
    const allModals = document.querySelectorAll('.modal');
    
    allModals.forEach(modal => {
        // Trouver le nom de la recette depuis l'ID de la modale
        const modalId = modal.id;
        const recipeName = modalId.replace('Modal', '');
        
        // Trouver la section Ingrédients
        const modalBody = modal.querySelector('.modal-body');
        if (!modalBody) return;
        
        const sections = modalBody.querySelectorAll('.recipe-section');
        
        sections.forEach(section => {
            const h3 = section.querySelector('h3');
            
            // Vérifier si c'est la section Ingrédients
            if (h3 && h3.textContent.includes('Ingrédients')) {
                
                // Vérifier si les boutons existent déjà
                if (section.querySelector('.modal-buttons')) return;
                
                // BOUTON 1 : Liste de courses
                const shoppingBtn = document.createElement('button');
                shoppingBtn.className = 'add-to-shopping';
                shoppingBtn.innerHTML = '➕ Liste courses';
                shoppingBtn.onclick = function(e) {
                    e.preventDefault();
                    toggleRecipe(recipeName, shoppingBtn);
                };
                
                // BOUTON 2 : J'ai mangé ça
                const eatBtn = document.createElement('button');
                eatBtn.className = 'eat-btn';
                eatBtn.innerHTML = '🍽️ J\'ai mangé';
                eatBtn.onclick = function(e) {
                    e.preventDefault();
                    addToCalories(recipeName);
                };
                
                // CONTENEUR des 2 boutons
                const buttonsContainer = document.createElement('div');
                buttonsContainer.className = 'modal-buttons';
                
                buttonsContainer.appendChild(shoppingBtn);
                buttonsContainer.appendChild(eatBtn);
                
                section.appendChild(buttonsContainer);
            }
        });
    });
}


function toggleRecipe(recipeId, buttonElement) {
    if (selectedRecipes.has(recipeId)) {
        selectedRecipes.delete(recipeId);
        if (buttonElement) buttonElement.classList.remove('added');
    } else {
        selectedRecipes.add(recipeId);
        if (buttonElement) buttonElement.classList.add('added');
    }
    updateShoppingList();
    // Envoyer les calories au tracker
    if (window.parent && window.parent.postMessage) {
        const todayTotal = Array.from(selectedRecipes).reduce((sum, id) => {
            return sum + RECIPES_CALORIES[id] || 0;
        }, 0);
        window.parent.postMessage({
            type: 'addCalories',
            total: todayTotal
        }, '*');
    }
}

function updateShoppingList() {
    const list = document.getElementById('ingredientsList');
    const totalSpan = document.getElementById('totalRecipes');
    
    list.innerHTML = '';
    
    if (selectedRecipes.size === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.className = 'empty-message';
        emptyMsg.innerHTML = '📌 Sélectionne une recette pour voir les ingrédients !';
        list.appendChild(emptyMsg);
        totalSpan.textContent = '0';
        return;
    }

    const allIngredients = {};

    // Regrouper les ingrédients par recette
    selectedRecipes.forEach(recipeId => {
        if (recipes[recipeId]) {
            recipes[recipeId].ingredients.forEach(ingredient => {
                if (!allIngredients[ingredient]) {
                    allIngredients[ingredient] = [];
                }
                allIngredients[ingredient].push(recipes[recipeId].name);
            });
        }
    });

    // Afficher les ingrédients regroupés
    Object.entries(allIngredients).forEach(([ingredient, recipeNames]) => {
        const li = document.createElement('li');
        li.className = 'ingredient-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'ingredient-checkbox';
        checkbox.addEventListener('change', function() {
            const text = li.querySelector('.ingredient-text');
            if (this.checked) {
                text.classList.add('checked');
            } else {
                text.classList.remove('checked');
            }
        });

        const text = document.createElement('span');
        text.className = 'ingredient-text';
        text.textContent = ingredient;

        const recipe = document.createElement('span');
        recipe.className = 'ingredient-recipe';
        recipe.textContent = recipeNames.length > 1 ? `${recipeNames.length} recettes` : '1 recette';

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(recipe);
        list.appendChild(li);
    });

    totalSpan.textContent = selectedRecipes.size;
    
    // ===== COMPTEUR CALORIES =====
    // Envoyer les calories au tracker
    const todayTotal = Array.from(selectedRecipes).reduce((sum, recipeId) => {
        return sum + (recipes[recipeId]?.calories || 0);
    }, 0);

    if (window.frames.length > 0) {
        window.parent.postMessage({
            type: 'addCalories',
            total: todayTotal,
            recipes: Array.from(selectedRecipes)
        }, '*');
    }
}

function printShoppingList() {
    if (selectedRecipes.size === 0) {
        alert('📌 Sélectionne au moins une recette avant d\'imprimer !');
        return;
    }

    const printWindow = window.open('', '_blank');
    const listHTML = document.getElementById('ingredientsList').innerHTML;
    const recipeTitles = Array.from(selectedRecipes).map(id => recipes[id].name).join(' + ');

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Ma Liste de Courses</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    margin: 40px;
                    color: #2c3e50;
                    background: white;
                }
                h1 {
                    color: #32a084;
                    border-bottom: 3px solid #32a084;
                    padding-bottom: 10px;
                }
                h2 {
                    color: #32a084;
                    font-size: 1.1rem;
                    margin-top: 20px;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    padding: 12px 0;
                    border-bottom: 1px solid #e0e6ed;
                    display: flex;
                    align-items: center;
                }
                input[type="checkbox"] {
                    transform: scale(1.5);
                    margin-right: 15px;
                    cursor: pointer;
                }
                .ingredient-recipe {
                    font-size: 0.85rem;
                    color: #32a084;
                    background: #e8f5f1;
                    padding: 3px 8px;
                    border-radius: 12px;
                    margin-left: auto;
                }
                .recipe-list {
                    background: #e8f5f1;
                    padding: 15px;
                    border-radius: 8px;
                    margin: 20px 0;
                    border-left: 4px solid #32a084;
                }
                @media print {
                    body { margin: 20px; }
                    h1 { page-break-after: avoid; }
                }
            </style>
        </head>
        <body>
            <h1>🛒 Ma Liste de Courses</h1>
            <div class="recipe-list">
                <h2>📝 Recettes sélectionnées :</h2>
                <p>${recipeTitles}</p>
            </div>
            <h2>Ingrédients à acheter</h2>
            <ul>${listHTML}</ul>
            <p style="margin-top: 40px; text-align: center; color: #7f8c8d; font-size: 0.9rem;">
                Généré depuis Recettes Minceur Light
            </p>
        </body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
}

function clearShoppingList() {
    selectedRecipes.clear();
    document.querySelectorAll('.add-to-shopping').forEach(btn => {
        btn.classList.remove('added');
    });
    updateShoppingList();
}

// ===== AJOUTER AUX CALORIES =====
function addToCalories(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;
    
    // Envoyer au tracker
    if (window.parent && window.parent.postMessage) {
        window.parent.postMessage({
            type: 'addCalories',
            recipeId: recipeId,
            calories: recipe.calories,
            name: recipe.name
        }, '*');
        
        // Notification
        showNotification(`${recipe.name} ajouté ! (+${recipe.calories} kcal)`);
    }
}

function showNotification(message) {
    // Notification toast
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed; top: 20px; right: 20px; 
        background: #32a084; color: white; padding: 1rem 1.5rem;
        border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000; transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    setTimeout(() => toast.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        toast.style.transform = 'translateX(400px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
