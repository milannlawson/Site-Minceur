// ═══════════════════════════════════════════════════════════
//  DATA.JS — Source unique de vérité pour toutes les recettes
//  Pour ajouter une recette : ajoute un objet dans ce tableau.
//  Tout le site (cartes, modals, liste de courses, calories)
//  se met à jour automatiquement.
// ═══════════════════════════════════════════════════════════

const RECIPES = [
  // Bowl Poulet Minceur
  {
    id: "bowl",
    name: "Bowl Poulet Minceur",
    image: "images/Bowl Poulet Minceur.jpeg",
    time: "10–15 min",
    calories: 350,
    difficulty: "Facile",
    category: "plat",
    description: "Un bol coloré et équilibré avec poulet, riz et légumes frais.",
    ingredients: [
      "120 g de blanc de poulet en dés",
      "100 g de riz complet ou quinoa cuit",
      "Légumes à volonté : tomates, concombre, carottes râpées, maïs, poivron",
      "1 c. à soupe de yaourt nature",
      "Citron, sel, poivre, ail en poudre"
    ],
    steps: [
      "Faire revenir le poulet à la poêle avec 1 c. à café d'huile max.",
      "Préparer tous les légumes crus dans un bol.",
      "Mélanger yaourt nature + citron + sel + poivre + ail.",
      "Assembler : riz, légumes, poulet, puis la sauce yaourt par-dessus."
    ],
    tip: "Plus tu mets de légumes, plus l'assiette est grosse pour un total calorique raisonnable. C'est l'astuce idéale pour te sentir rassasié(e) sans culpabilité !"
  },
  // Omelette Full Légumes
  {
    id: "omelett",
    name: "Omelette Full Légumes",
    image: "images/Omelette Full Legumes.jpg",
    time: "7–10 min",
    calories: 200,
    difficulty: "Très facile",
    category: "plat",
    description: "Riche en protéines avec un maximum de légumes colorés.",
    ingredients: [
      "2 œufs + 1 blanc d'œuf",
      "Légumes coupés fin : poivron, oignon, champignons, épinards, tomate",
      "1 c. à café d'huile d'olive ou spray d'huile",
      "Sel et poivre",
      "Optionnel : fromage râpé light ou viande des Grisons"
    ],
    steps: [
      "Poêler rapidement les légumes coupés fin dans l'huile.",
      "Battre les œufs avec le blanc dans un bol.",
      "Verser le mélange sur les légumes.",
      "Cuire à feu moyen jusqu'à ce que l'omelette soit cuite, environ 5 min."
    ],
    tip: "Le blanc d'œuf ajouté augmente les protéines pour la satiété sans ajouter beaucoup de calories. Tu peux ajouter un peu de fromage ou de viande des Grisons pour plus de goût sans dépasser 220 kcal."
  },
  // Poisson & Légumes au Four
  {
    id: "poisson",
    name: "Poisson & Légumes au Four",
    image: "images/Poisson & Legumes au Four.jpeg",
    time: "20 min",
    calories: 280,
    difficulty: "Facile",
    category: "plat",
    description: "Cuit lentement au four pour une saveur délicate et naturelle.",
    ingredients: [
      "1 filet de cabillaud, colin ou saumon (100–150 g)",
      "Légumes : brocoli, carottes, courgettes, haricots verts (surgelés ou frais)",
      "1 c. à café d'huile d'olive",
      "Citron, herbes (thym, persil), sel, poivre"
    ],
    steps: [
      "Préchauffer le four à 180–200 °C.",
      "Préparer une feuille de papier cuisson ou un plat.",
      "Mettre le poisson au centre avec les légumes autour.",
      "Arroser d'huile d'olive, assaisonner (citron, herbes, sel, poivre).",
      "Cuire 15–20 min au four."
    ],
    tip: "Très pratique pour le soir : tu lances au four et tu fais autre chose pendant que ça cuit ! La papillote rend le poisson super tendre et concentre les saveurs."
  },
  // Wrap Grison & Crudités
  {
    id: "wrap1",
    name: "Wrap Grison & Crudites",
    image: "images/Wrap Grison & Crudites.jpeg",
    time: "5 min",
    calories: 280,
    difficulty: "Très facile",
    category: "plat",
    description: "Léger et savoureux, parfait pour un déjeuner sur le pouce.",
    ingredients: [
      "1 galette de blé complet ou tortilla de maïs",
      "30–40 g de viande des Grisons",
      "Crudités : salade, tomate, concombre, carotte râpée",
      "1 c. à soupe de yaourt nature",
      "Moutarde ou citron"
    ],
    steps: [
      "Tartiner la galette avec le yaourt nature + moutarde ou citron.",
      "Ajouter les tranches de viande des Grisons.",
      "Remplir avec les crudités (salade, tomate, concombre, carottes).",
      "Rouler serré comme un kebab, couper en deux et déguster !"
    ],
    tip: "Tu as le côté snack/sandwich mais beaucoup plus léger qu'un vrai sandwich gras. Parfait pour un déjeuner rapide ou même pour grignoter devant la télé sans culpabilité."
  },
  // Yaourt Protéiné Dessert
  {
    id: "yaourt",
    name: "Yaourt Protéiné Dessert",
    image: "images/Yaourt Proteine Dessert.jpeg",
    time: "3 min",
    calories: 180,
    difficulty: "Très facile",
    category: "dessert",
    description: "Sucré, satisfaisant et bourré de protéines naturelles.",
    ingredients: [
      "1 yaourt grec 0 % ou fromage blanc / skyr (150 g)",
      "1 petit fruit : demi-banane, kiwi, quelques framboises ou fraises",
      "Optionnel : 1 c. à café de miel, sirop d'agave ou cannelle"
    ],
    steps: [
      "Mettre le yaourt grec ou fromage blanc dans un bol.",
      "Couper ou ajouter les fruits.",
      "Ajouter un peu de miel ou de cannelle selon tes envies.",
      "Mélanger délicatement et déguster immédiatement."
    ],
    tip: "Ça cale super bien en fin de repas ou en collation grâce aux protéines. Le ratio protéines/calories est excellent. Idéal quand tu as une petite fringale sucrée !"
  },
  // Salade Thon Light
  {
    id: "thon",
    name: "Salade Thon Light",
    image: "images/Salade Thon Light.png",
    time: "8 min",
    calories: 220,
    difficulty: "Très facile",
    category: "plat",
    description: "Protéinée et ultra-légère avec thon et crudités croustillantes.",
    ingredients: [
      "1 boîte de thon au naturel (100 g), égoutté",
      "Une poignée de salade mixte",
      "Tomate, concombre, oignon rouge (quelques tranches)",
      "1 c. à soupe de maïs",
      "1 c. à soupe de yaourt nature + jus de citron + moutarde",
      "Sel, poivre"
    ],
    steps: [
      "Égoutter le thon et l'émietter dans un grand bol.",
      "Ajouter la salade, tomate, concombre et oignon.",
      "Préparer la sauce : yaourt + citron + moutarde.",
      "Assaisonner et mélanger le tout."
    ],
    tip: "Tu peux préparer la sauce en plus grosse quantité et la garder 2 jours au frigo pour gagner du temps."
  },
  // Œufs Cocotte Légumes
  {
    id: "cocotte",
    name: "Œufs Cocotte Légumes",
    image: "images/Oeufs Cocotte Legumes.png",
    time: "12 min",
    calories: 240,
    difficulty: "Facile",
    category: "plat",
    description: "Œufs pochés dans un lit de légumes, chaud et réconfortant.",
    ingredients: [
      "2 œufs",
      "Légumes : épinards, poivron, champignons, tomate (coupés fin)",
      "1 c. à soupe de lait allégé",
      "Sel, poivre, herbes (persil, ciboulette)",
      "Un peu d'huile ou spray"
    ],
    steps: [
      "Préchauffer le four à 180 °C.",
      "Faire revenir les légumes dans un ramequin allant au four.",
      "Casser les œufs par-dessus, ajouter un filet de lait.",
      "Enfourner 10–12 min jusqu'à ce que le blanc soit pris."
    ],
    tip: "Parfait pour un brunch léger. Tu peux varier les légumes selon la saison."
  },
  // Soupe Minceur Détox
  {
    id: "soupe",
    name: "Soupe Minceur Détox",
    image: "images/Soupe Minceur Detox.png",
    time: "25 min",
    calories: 150,
    difficulty: "Facile",
    category: "plat",
    description: "Bouillon léger riche en légumes, idéal pour l'hiver.",
    ingredients: [
      "1 litre de bouillon de légumes léger",
      "2 carottes, 1 courgette, 1 brocoli, poignée de chou-fleur",
      "1 oignon, 2 gousses d'ail",
      "1 c. à café de miel ou un peu de sel",
      "Herbes : thym, persil, laurier",
      "Poivre"
    ],
    steps: [
      "Éplucher et couper tous les légumes.",
      "Faire revenir l'oignon et l'ail dans une marmite.",
      "Ajouter les légumes et le bouillon.",
      "Laisser mijoter 20 min, mixer si souhaité."
    ],
    tip: "Prépare une grosse quantité et congèle en portions. Idéal pour un dîner express les soirs de flemme."
  },
  // Pâtes Courgettes Légères
  {
    id: "pates",
    name: "Pâtes Courgettes Légères",
    image: "images/Pates Courgettes Legeres.png",
    time: "15 min",
    calories: 320,
    difficulty: "Très facile",
    category: "plat",
    description: "Pâtes complètes avec sauce légère tomate et courgettes.",
    ingredients: [
      "80 g de pâtes complètes (spaghetti ou penne)",
      "2 courgettes moyennes, taillées en julienne",
      "1 boîte petite de tomates concassées (200 ml)",
      "2 gousses d'ail, 1 oignon",
      "1 c. à café d'huile d'olive",
      "Herbes (basilic, origan), sel, poivre"
    ],
    steps: [
      "Faire cuire les pâtes selon le paquet.",
      "En parallèle, faire revenir ail et oignon dans l'huile.",
      "Ajouter courgettes et tomates, laisser mijoter 8 min.",
      "Mélanger les pâtes avec la sauce et servir."
    ],
    tip: "Le secret c'est de bien assaisonner la sauce. N'hésite pas à ajouter du basilic frais en fin de cuisson."
  },
  // Poulet Gingembre Sauce Légère
  {
    id: "gingembre",
    name: "Poulet Gingembre Sauce Légère",
    image: "images/Poulet Gingembre Sauce Legere.png",
    time: "18 min",
    calories: 310,
    difficulty: "Facile",
    category: "plat",
    description: "Poulet fondant avec une sauce épicée et réconfortante.",
    ingredients: [
      "150 g de blanc de poulet, coupé en lanières",
      "1 c. à soupe de gingembre frais, râpé",
      "2 gousses d'ail, hachées",
      "1 c. à soupe de sauce soja légère",
      "100 ml de bouillon de poule léger",
      "1 c. à café d'huile",
      "1 oignon, 1 poivron, légumes de saison",
      "Poivre, optionnel : citron ou 1 trait de miel"
    ],
    steps: [
      "Faire sauter le poulet à feu vif 3–4 min.",
      "Ajouter gingembre, ail et oignon, cuire 2 min.",
      "Verser la sauce soja et le bouillon.",
      "Laisser réduire 5 min, ajouter les légumes et servir."
    ],
    tip: "Le gingembre frais fait toute la différence. Si tu n'en as pas, le gingembre en poudre marche aussi (1/2 c. à café)."
  },
  // Smoothie Protéiné Fruité
  {
    id: "smoothie1",
    name: "Smoothie Protéiné Fruité",
    image: "images/Smoothie Proteine.png",
    time: "5 min",
    calories: 280,
    difficulty: "Très facile",
    category: "petit-dejeuner",
    description: "Smoothie protéiné fruité pour bien démarrer la journée.",
    ingredients: [
      "1 banane",
      "200 ml de lait d'amande",
      "1 yaourt grec (150 g)",
      "30 g de flocons d'avoine",
      "30 g de poudre protéinée vanille",
      "1 poignée de myrtilles fraîches",
      "1 c. à soupe de beurre d'amande"
    ],
    steps: [
      "Mettre tous les ingrédients dans un blender.",
      "Mixer jusqu'à obtenir une texture lisse.",
      "Verser dans un grand verre.",
      "Déguster immédiatement."
    ],
    tip: "Prépare les fruits en sachets au congélateur pour gagner du temps le matin."
  },
  // Porridge Pomme Cannelle
  {
    id: "porridge1",
    name: "Porridge Pomme Cannelle",
    image: "images/Porridge pomme.png",
    time: "10 min",
    calories: 320,
    difficulty: "Facile",
    category: "petit-dejeuner",
    description: "Un porridge onctueux à la pomme et à la cannelle pour un matin réconfortant.",
    ingredients: [
      "50 g de flocons d'avoine",
      "200 ml de lait d'amande",
      "1 pomme râpée",
      "1 c. à café de cannelle",
      "1 c. à soupe de miel",
      "Pincée de sel",
      "1 poignée d'amandes effilées"
    ],
    steps: [
      "Faire chauffer le lait avec les flocons d'avoine.",
      "Ajouter la pomme râpée et la cannelle.",
      "Remuer jusqu'à épaississement (5 min).",
      "Servir avec le miel et les amandes effilées."
    ],
    tip: "Tu peux préparer la base la veille au frigo (overnight oats) et réchauffer le matin."
  },
  // Rillettes de Thon & Chips Patates Douces
  {
    id: "rillettes1",
    name: "Rillettes de Thon & Chips Patates Douces",
    image: "images/Rillettes de Thon et Chips Patates Douces.jpg",
    time: "25 min",
    calories: 350,
    difficulty: "Facile",
    category: "snack",
    description: "Des rillettes maison avec des chips croustillantes de patates douces.",
    ingredients: [
      "250 g de thon frais",
      "Huile d'olive",
      "Sel, poivre",
      "Persil/ciboulette frais",
      "Citron vert",
      "Moutarde (optionnel)",
      "Crème fraîche allégée (optionnel)"
    ],
    steps: [
      "Émietter le thon dans un bol.",
      "Ajouter un filet d'huile, le citron vert et les herbes.",
      "Assaisonner et mélanger.",
      "Trancher finement les patates douces et cuire au four à 180 °C 15 min.",
      "Servir les chips avec les rillettes."
    ],
    tip: "Pour des chips bien croustillantes, coupe-les le plus fin possible et retourne-les à mi-cuisson."
  },
  // Tartines Avocat & Œuf Poché
  {
    id: "avocado1",
    name: "Tartines Avocat & Œuf Poché",
    image: "images/Tartines Avocado.png",
    time: "12 min",
    calories: 350,
    difficulty: "Facile",
    category: "petit-dejeuner",
    description: "Le classique revisité : avocat crémeux et œuf coulant sur pain complet.",
    ingredients: [
      "Pain complet",
      "1 avocat",
      "2 œufs",
      "Jus de citron",
      "Piment de Cayenne",
      "Tomates cerises (5-6)"
    ],
    steps: [
      "Toaster les tranches de pain complet.",
      "Écraser l'avocat avec le citron, sel et poivre.",
      "Pocher les œufs 3 min dans l'eau frémissante vinaigrée.",
      "Étaler l'avocat sur le pain, poser l'œuf, saupoudrer de piment.",
      "Ajouter les tomates cerises coupées en deux."
    ],
    tip: "Pour un œuf poché parfait, crée un tourbillon dans l'eau avant d'y glisser l'œuf."
  },
  // Pancakes Protéinés Myrtilles
  {
    id: "pancakes1",
    name: "Pancakes Protéinés Myrtilles",
    image: "images/Pancakes Myrtilles.jpg",
    time: "15 min",
    calories: 380,
    difficulty: "Facile",
    category: "petit-dejeuner",
    description: "Des pancakes moelleux et protéinés pour un petit-déjeuner gourmand.",
    ingredients: [
      "Farine complète",
      "Poudre protéinée",
      "2 œufs",
      "1 banane",
      "Lait d'amande",
      "Levure chimique",
      "100 g de myrtilles fraîches"
    ],
    steps: [
      "Mélanger la farine, la poudre protéinée et la levure.",
      "Ajouter les œufs, la banane écrasée et le lait.",
      "Incorporer les myrtilles à la pâte.",
      "Cuire à la poêle 2–3 min par face à feu moyen."
    ],
    tip: "Ajoute un filet de miel ou de sirop d'érable pour le gourmandise."
  },
  // Yaourt Grec, Granola & Fruits
  {
    id: "yaourt1",
    name: "Yaourt Grec, Granola & Fruits",
    image: "images/Yaourt Granola.jpg",
    time: "3 min",
    calories: 290,
    difficulty: "Très facile",
    category: "petit-dejeuner",
    description: "Le petit-déjeuner express par excellence : crémeux, croquant et fruité.",
    ingredients: [
      "Yaourt grec",
      "50 g de granola maison",
      "1 poignée de fruits rouges",
      "Miel",
      "Amandes",
      "Graines de chia"
    ],
    steps: [
      "Verser le yaourt dans un bol.",
      "Ajouter le granola et les fruits rouges.",
      "Parsemer d'amandes et de graines de chia.",
      "Arroser d'un filet de miel."
    ],
    tip: "Prépare ton granola maison le week-end pour la semaine : flocons d'avoine, miel, huile de coco, noix — 20 min au four à 160 °C."
  },
  // Wrap aux Œufs Brouillés
  {
    id: "wrap2",
    name: "Wrap aux Œufs Brouillés",
    image: "images/Wrap Oeufs.jpg",
    time: "10 min",
    calories: 420,
    difficulty: "Facile",
    category: "petit-dejeuner",
    description: "Un wrap garni d'œufs brouillés crémeux, d'avocat et d'épinards.",
    ingredients: [
      "Tortillas de blé complet",
      "3 œufs",
      "Avocat",
      "Épinards",
      "1 tomate",
      "Fromage blanc",
      "Ciboulette"
    ],
    steps: [
      "Brouiller les œufs à feu doux avec une noisette de fromage blanc.",
      "Étaler de l'avocat écrasé sur la tortilla.",
      "Ajouter les épinards, la tomate coupée et les œufs brouillés.",
      "Parsemer de ciboulette et rouler serré."
    ],
    tip: "Le secret des œufs brouillés crémeux : cuire à feu très doux en remuant constamment."
  },
  // Poulet Frit, Riz & Légumes
  {
    id: "poulet_frit1",
    name: "Poulet Frit, Riz & Légumes",
    image: "images/Poulet frit, riz et legumes.png",
    time: "25 min",
    calories: 450,
    difficulty: "Facile",
    category: "plat",
    description: "Poulet frit coréen croustillant avec riz et légumes frais. Inspiré de @cooklikedaiki.",
    ingredients: [
      "400 g d'escalopes de poulet",
      "1 œuf",
      "Fécule de maïs",
      "Carottes",
      "Concombre",
      "Sauce teriyaki",
      "Sauce soja sucrée",
      "Sauce soja salée",
      "Vinaigre de riz",
      "Miel",
      "Gochujang",
      "Sucre de canne",
      "Paprika fumé",
      "Ail en poudre",
      "Sel et poivre"
    ],
    steps: [
      "Couper le poulet en morceaux.",
      "Mélanger le poulet avec du poivre, de la sauce teriyaki et un œuf.",
      "Enrober de fécule de maïs.",
      "Cuire au AirFryer jusqu'à dorure.",
      "Éplucher et trancher carottes et concombre en fines bandes.",
      "Pour la sauce : mélanger sauce soja sucrée et salée, eau, gochujang, vinaigre de riz, miel et sucre.",
      "Faire cuire la sauce à feu moyen jusqu'à épaississement.",
      "Enrober le poulet cuit dans la sauce.",
      "Dresser avec du riz et les légumes sur le côté."
    ],
    tip: "Pour plus de croustillant, double la panure ou ajoute du bicarbonate. Accompagne de riz et légumes pour équilibrer.",
    tiktok: "https://www.tiktok.com/embed/v2/7595264068945382678"
  },
  // Cheesecake à la Goyave
  {
    id: "cheesecake1",
    name: "Cheesecake à la Goyave",
    image: "images/Cheesecake Goyave.jpeg",
    time: "35 min",
    calories: 320,
    difficulty: "Facile",
    category: "dessert",
    description: "Un cheesecake crémeux et tropical à la goyave. Inspiré de @myrlands_cakes.",
    ingredients: [
      "200 g de biscuits Petit-Beurre ou Spéculoos",
      "80 g de beurre fondu",
      "600 g de Philadelphia (à température ambiante)",
      "200 g de mascarpone (optionnel pour plus de légèreté)",
      "120–150 g de sucre (selon goût)",
      "2 œufs + 1 jaune",
      "10 g de maïzena",
      "1 c. à c. d'essence de vanille",
      "200 g de coulis de goyave ou purée de goyave",
      "Optionnel : quelques dés de goyave fraîche pour décor"
    ],
    steps: [
      "Mixer les biscuits en poudre, ajouter le beurre fondu.",
      "Tasser au fond d'un moule à charnière, réfrigérer 10 min.",
      "Fouetter le cream cheese, ajouter mascarpone, sucre, vanille.",
      "Incorporer les œufs, le jaune et la maïzena.",
      "Verser sur la base biscuitée.",
      "Enfourner à 160 °C pendant 70 min (centre légèrement tremblotant).",
      "Laisser refroidir puis 2h au réfrigérateur.",
      "Étaler le coulis de goyave sur le dessus et décorer."
    ],
    tip: "Pour une version plus légère, remplace une partie du cream cheese par du fromage blanc 0 %. Se conserve 3 jours au frais.",
    tiktok: "https://www.tiktok.com/embed/v2/7595264068945382678"
  },
  // Salade Quinoa Complète
  {
    id: "salade_quinoa",
    name: "Salade Quinoa Complète",
    image: "images/Salade Quinoa.jpg",
    time: "15 min",
    calories: 340,
    difficulty: "Facile",
    category: "plat",
    description: "Salade complète au quinoa, croquante et nourrissante.",
    ingredients: [
      "100 g de quinoa cuit",
      "Concombre, tomate, poivron",
      "Feta light (30 g)",
      "Olives noires",
      "Jus de citron, huile d'olive",
      "Menthe ou persil frais"
    ],
    steps: [
      "Cuire le quinoa et laisser refroidir.",
      "Couper tous les légumes en dés.",
      "Mélanger le tout dans un saladier.",
      "Assaisonner avec citron, huile et herbes."
    ],
    tip: "Prépare le quinoa à l'avance pour un meal prep express."
  },
  // Bowl Poulet Quinoa
  {
    id: "bowl_quinoa",
    name: "Bowl Poulet Quinoa",
    image: "images/Bowl Poulet Quinoa.jpg",
    time: "15 min",
    calories: 380,
    difficulty: "Facile",
    category: "plat",
    description: "Un bowl healthy et complet avec poulet grillé et quinoa.",
    ingredients: [
      "120 g de blanc de poulet",
      "100 g de quinoa cuit",
      "Avocat, tomate cerise, maïs",
      "Épinards frais",
      "Sauce yaourt-citron"
    ],
    steps: [
      "Griller le poulet assaisonné à la poêle.",
      "Assembler le quinoa, les légumes et le poulet dans un bol.",
      "Ajouter l'avocat en tranches.",
      "Napper de sauce yaourt-citron."
    ],
    tip: "Varie les toppings selon les saisons pour ne jamais te lasser."
  },
  // Chia Pudding Onctueux
  {
    id: "chia_pudding",
    name: "Chia Pudding",
    image: "images/Chia Pudding.jpg",
    time: "5 min + repos",
    calories: 250,
    difficulty: "Très facile",
    category: "petit-dejeuner",
    description: "Un pudding de chia onctueux à préparer la veille.",
    ingredients: [
      "3 c. à soupe de graines de chia",
      "200 ml de lait d'amande ou coco",
      "1 c. à café de miel ou sirop d'érable",
      "Fruits frais pour le topping",
      "Optionnel : extrait de vanille"
    ],
    steps: [
      "Mélanger les graines de chia avec le lait et le miel.",
      "Bien remuer et laisser reposer 5 min, puis remuer à nouveau.",
      "Couvrir et placer au réfrigérateur toute la nuit.",
      "Le matin, ajouter les fruits frais et déguster."
    ],
    tip: "La texture idéale s'obtient après 6-8h au frigo. Prépare plusieurs pots pour la semaine."
  },
  // Wrap Crudités Fraîcheur
  {
    id: "wrap_crudites",
    name: "Wrap Crudités Fraîcheur",
    image: "images/Wrap Crudites.jpg",
    time: "5 min",
    calories: 260,
    difficulty: "Très facile",
    category: "plat",
    description: "Un wrap frais et croquant, parfait pour l'été.",
    ingredients: [
      "1 tortilla complète",
      "Carottes râpées, concombre, laitue",
      "Houmous ou fromage frais",
      "Graines de sésame",
      "Sel, poivre"
    ],
    steps: [
      "Étaler le houmous sur la tortilla.",
      "Disposer les crudités en ligne au centre.",
      "Parsemer de graines de sésame.",
      "Rouler serré et couper en deux."
    ],
    tip: "Idéal à emporter. Emballe-le dans du papier aluminium pour qu'il tienne bien."
  },
  // Poêlée de Crevettes
  {
    id: "poelee_crevettes",
    name: "Poêlée de Crevettes",
    image: "images/Poelee Crevettes.jpg",
    time: "12 min",
    calories: 260,
    difficulty: "Facile",
    category: "plat",
    description: "Des crevettes sautées à l'ail avec des légumes croquants.",
    ingredients: [
      "200 g de crevettes décortiquées",
      "2 gousses d'ail",
      "Courgette, poivron, oignon",
      "1 c. à café d'huile d'olive",
      "Persil frais, sel, poivre",
      "Optionnel : piment d'Espelette"
    ],
    steps: [
      "Faire chauffer l'huile et saisir les crevettes 2 min de chaque côté.",
      "Réserver les crevettes, faire sauter les légumes 5 min.",
      "Ajouter l'ail, remettre les crevettes.",
      "Parsemer de persil et servir."
    ],
    tip: "Ne pas trop cuire les crevettes, elles deviennent caoutchouteuses. 2 min par face suffisent."
  },
  // Curry de Pois Chiches
  {
    id: "curry_pois_chiches",
    name: "Curry de Pois Chiches",
    image: "images/Curry de pois chiches.png",
    time: "20 min",
    calories: 330,
    difficulty: "Facile",
    category: "plat",
    description: "Un curry végétarien parfumé, rassasiant et riche en protéines végétales.",
    ingredients: [
      "1 boîte de pois chiches (400 g), égouttés",
      "1 boîte de tomates concassées (400 ml)",
      "1 oignon, 3 gousses d'ail",
      "1 c. à café de curry, 1 c. à café de curcuma",
      "100 ml de lait de coco allégé",
      "1 c. à café d'huile d'olive",
      "Coriandre fraîche, sel, poivre"
    ],
    steps: [
      "Faire revenir l'oignon et l'ail dans l'huile 3 min.",
      "Ajouter les épices et mélanger 1 min.",
      "Verser les tomates concassées et les pois chiches.",
      "Ajouter le lait de coco, laisser mijoter 12 min.",
      "Servir avec du riz complet ou du pain naan complet, parsemer de coriandre."
    ],
    tip: "Le lait de coco allégé donne toute la richesse du curry sans exploser les calories. Prépare-en une grande quantité, c'est encore meilleur réchauffé le lendemain."
  },
  // Tabboulé Libanais Frais
  {
    id: "tabboule",
    name: "Tabboulé Libanais Frais",
    image: "images/Tabboule Libanais Frais.png",
    time: "15 min",
    calories: 200,
    difficulty: "Très facile",
    category: "plat",
    description: "Le vrai tabboulé libanais : herbes fraîches, boulgour et citron.",
    ingredients: [
      "80 g de boulgour fin (ou quinoa pour version sans gluten)",
      "1 gros bouquet de persil plat haché finement",
      "Quelques feuilles de menthe fraîche",
      "2 tomates, 1/4 de concombre",
      "2 oignons verts",
      "Jus de 2 citrons",
      "1 c. à soupe d'huile d'olive, sel, poivre"
    ],
    steps: [
      "Réhydrater le boulgour dans de l'eau bouillante 10 min, égoutter et laisser refroidir.",
      "Hacher finement le persil, la menthe et les oignons verts.",
      "Couper les tomates et le concombre en tout petits dés.",
      "Mélanger tous les ingrédients, assaisonner généreusement avec citron, sel et poivre.",
      "Laisser reposer 15 min au frais avant de servir."
    ],
    tip: "Dans le vrai tabboulé libanais, il y a beaucoup plus d'herbes que de boulgour — c'est là tout son secret minceur !"
  },
  // Energy Balls Dattes & Noix
  {
    id: "energy_balls",
    name: "Energy Balls Dattes & Noix",
    image: "images/Energy Balls.png",
    time: "15 min + repos",
    calories: 120,
    difficulty: "Très facile",
    category: "snack",
    description: "Des boules d'énergie naturelles sans sucre ajouté, parfaites pour l'effort.",
    ingredients: [
      "150 g de dattes Medjool dénoyautées",
      "100 g de flocons d'avoine",
      "50 g de noisettes ou amandes",
      "2 c. à soupe de cacao en poudre non sucré",
      "1 c. à soupe de beurre d'amande",
      "Noix de coco râpée pour rouler (optionnel)"
    ],
    steps: [
      "Mixer les dattes, noix et flocons d'avoine jusqu'à obtenir une pâte.",
      "Ajouter le cacao et le beurre d'amande, mixer encore.",
      "Former des boules de la taille d'une noix avec les mains.",
      "Rouler dans la noix de coco si souhaité.",
      "Réfrigérer 30 min avant de déguster."
    ],
    tip: "Une boule = environ 120 kcal. Prépare une vingtaine de boules et garde-les au frigo toute la semaine pour les fringales."
  },
  // Mousse au Chocolat Noir Légère
  {
    id: "mousse_chocolat",
    name: "Mousse au Chocolat Noir Légère",
    image: "images/Mousse chocolat.png",
    time: "15 min + repos",
    calories: 190,
    difficulty: "Facile",
    category: "dessert",
    description: "Une mousse au chocolat aérienne et légère sans crème fraîche.",
    ingredients: [
      "100 g de chocolat noir 70 % (minimum)",
      "4 blancs d'œufs",
      "2 c. à soupe de cacao en poudre non sucré",
      "1 c. à soupe de miel",
      "1 pincée de sel"
    ],
    steps: [
      "Faire fondre le chocolat au bain-marie, laisser tiédir.",
      "Monter les blancs en neige ferme avec la pincée de sel.",
      "Incorporer le miel et le cacao dans le chocolat fondu.",
      "Incorporer 1/4 des blancs vigoureusement, puis le reste délicatement.",
      "Verser dans des ramequins et réfrigérer minimum 2h."
    ],
    tip: "Sans crème fraîche ni jaune d'œuf, cette mousse est bien plus légère que la version classique. Le chocolat à 70 % est moins sucré mais plus intense — quelques cuillères suffisent."
  },
  // Bowl Açaí Maison
  {
    id: "acai_bowl",
    name: "Bowl Açaí Maison",
    image: "images/Acai bowl.png",
    time: "5 min",
    calories: 300,
    difficulty: "Très facile",
    category: "petit-dejeuner",
    description: "Le bowl tendance, ultra coloré, plein d'antioxydants et rassasiant.",
    ingredients: [
      "100 g de purée d'açaï surgelée (ou myrtilles)",
      "1 banane congelée",
      "100 ml de lait d'amande",
      "Toppings : granola, fruits rouges, rondelles de banane, noix de coco râpée",
      "1 c. à café de miel"
    ],
    steps: [
      "Mixer la purée d'açaï + banane congelée + lait d'amande jusqu'à texture épaisse.",
      "Verser dans un bol (la consistance doit être ferme, pas liquide).",
      "Disposer les toppings : granola, fruits, banane, noix de coco.",
      "Arroser d'un filet de miel et servir immédiatement."
    ],
    tip: "La clé : utiliser le minimum de lait pour garder une texture épaisse. Si la base est trop liquide, remets 15 min au congélateur avant d'ajouter les toppings."
  },
  // Galettes de Légumes
  {
    id: "galettes_legumes",
    name: "Galettes de Légumes",
    image: "images/Galettes legumes.png",
    time: "20 min",
    calories: 230,
    difficulty: "Facile",
    category: "plat",
    description: "Des galettes croustillantes et savoureuses pour varier les repas.",
    ingredients: [
      "2 courgettes râpées",
      "2 carottes râpées",
      "2 œufs",
      "3 c. à soupe de flocons d'avoine ou farine complète",
      "Herbes fraîches (ciboulette, persil)",
      "Sel, poivre, ail en poudre",
      "1 c. à café d'huile pour la cuisson"
    ],
    steps: [
      "Râper les légumes et bien les essorer avec un torchon propre.",
      "Mélanger avec les œufs, la farine, les herbes et les épices.",
      "Former des galettes et les aplatir légèrement.",
      "Faire dorer à la poêle 3–4 min de chaque côté à feu moyen.",
      "Servir avec du yaourt nature ou une sauce légère."
    ],
    tip: "L'étape d'essorer les légumes est cruciale : si tu sautes cette étape, les galettes seront molles et ne tiendront pas. Bien presser pour enlever le maximum d'eau !"
  },

  // ── PLATS ──────────────────────────────────────────────

  // Saumon Teriyaki & Brocoli
  {
    id: "saumon_teriyaki",
    name: "Saumon Teriyaki & Brocoli",
    image: "images/Saumon Teriyaki.jpg",
    time: "15 min",
    calories: 380,
    difficulty: "Facile",
    category: "plat",
    description: "Saumon laqué façon teriyaki maison avec brocoli vapeur.",
    ingredients: [
      "1 pavé de saumon (150 g)",
      "200 g de brocoli en fleurettes",
      "2 c. à soupe de sauce soja légère",
      "1 c. à soupe de miel",
      "1 c. à café d'huile de sésame",
      "1 gousse d'ail, gingembre frais",
      "Graines de sésame, riz complet (optionnel)"
    ],
    steps: [
      "Mélanger sauce soja, miel, ail et gingembre pour la marinade.",
      "Faire mariner le saumon 10 min.",
      "Cuire le brocoli à la vapeur 5 min.",
      "Saisir le saumon à la poêle 3 min par face en l'arrosant de marinade.",
      "Servir avec le brocoli et parsemer de sésame."
    ],
    tip: "La sauce teriyaki maison est bien moins sucrée que celle du commerce. Tu peux préparer une grosse quantité et la garder au frigo 1 semaine."
  },

  // Wok de Légumes au Tofu
  {
    id: "wok_tofu",
    name: "Wok de Légumes au Tofu",
    image: "images/Wok Tofu.jpg",
    time: "18 min",
    calories: 290,
    difficulty: "Facile",
    category: "plat",
    description: "Tofu croustillant sauté avec légumes croquants à l'asiatique.",
    ingredients: [
      "200 g de tofu ferme, coupé en dés",
      "Carottes, poivron, chou chinois, pois gourmands",
      "2 c. à soupe de sauce soja",
      "1 c. à café d'huile de sésame",
      "1 c. à café de gingembre râpé",
      "2 gousses d'ail",
      "Piment (optionnel), coriandre"
    ],
    steps: [
      "Éponger le tofu et le faire dorer dans une poêle très chaude sans matière grasse.",
      "Réserver le tofu. Faire sauter les légumes à feu vif 4 min.",
      "Ajouter ail, gingembre, sauce soja et huile de sésame.",
      "Remettre le tofu, mélanger 1 min et servir."
    ],
    tip: "Pour un tofu vraiment croustillant, presse-le 30 min dans un torchon avant cuisson pour enlever l'excès d'eau."
  },

  // Buddha Bowl Végétarien
  {
    id: "buddha_bowl",
    name: "Buddha Bowl Végétarien",
    image: "images/Buddha Bowl.jpg",
    time: "20 min",
    calories: 400,
    difficulty: "Facile",
    category: "plat",
    description: "Un bowl coloré et complet, 100 % végétal et rassasiant.",
    ingredients: [
      "100 g de quinoa ou riz complet cuit",
      "1/2 avocat",
      "100 g de pois chiches rôtis",
      "Carottes râpées, concombre, épinards",
      "1 betterave cuite",
      "Sauce tahini : 1 c. à soupe de tahini, citron, ail, eau"
    ],
    steps: [
      "Rôtir les pois chiches au four à 200 °C 15 min avec paprika et cumin.",
      "Préparer la sauce tahini en mélangeant tous les ingrédients.",
      "Disposer tous les éléments en sections dans un bol.",
      "Napper de sauce tahini et servir."
    ],
    tip: "La sauce tahini transforme tout bowl banal en quelque chose d'exceptionnel. Prépare-en un pot pour la semaine."
  },

  // Chili con Carne Léger
  {
    id: "chili",
    name: "Chili con Carne Léger",
    image: "images/Chili con Carne.jpg",
    time: "30 min",
    calories: 360,
    difficulty: "Facile",
    category: "plat",
    description: "Un chili savoureux avec moins de gras, autant de goût.",
    ingredients: [
      "200 g de bœuf haché 5 % MG",
      "1 boîte de haricots rouges (400 g)",
      "1 boîte de tomates concassées (400 ml)",
      "1 oignon, 2 gousses d'ail",
      "1 c. à café de cumin, paprika fumé, piment en poudre",
      "Sel, poivre"
    ],
    steps: [
      "Faire revenir l'oignon et l'ail, ajouter le bœuf et cuire 5 min.",
      "Ajouter les épices, mélanger 1 min.",
      "Verser tomates et haricots, laisser mijoter 20 min.",
      "Rectifier l'assaisonnement et servir avec riz ou pain complet."
    ],
    tip: "Le chili est encore meilleur réchauffé le lendemain : les saveurs se développent. Prépare-en une grande quantité et congèle."
  },

  // Salade César Légère au Poulet
  {
    id: "salade_cesar",
    name: "Salade César Légère",
    image: "images/Salade Cesar.jpg",
    time: "12 min",
    calories: 300,
    difficulty: "Facile",
    category: "plat",
    description: "La classique César revisitée avec une sauce allégée maison.",
    ingredients: [
      "120 g de blanc de poulet grillé en lamelles",
      "Cœur de laitue romaine",
      "Parmesan râpé (10 g)",
      "Croûtons complets (optionnel)",
      "Sauce : yaourt grec, jus de citron, moutarde, ail, anchois (optionnel)"
    ],
    steps: [
      "Préparer la sauce en mélangeant yaourt, citron, moutarde et ail.",
      "Couper la salade en morceaux, disposer dans un saladier.",
      "Ajouter le poulet grillé, le parmesan et les croûtons.",
      "Napper de sauce et servir immédiatement."
    ],
    tip: "La sauce au yaourt remplace avantageusement la mayo classique : même crémosité pour 3x moins de calories."
  },

  // Tartare de Saumon Avocat
  {
    id: "tartare_saumon",
    name: "Tartare de Saumon & Avocat",
    image: "images/Tartare Saumon.jpg",
    time: "10 min",
    calories: 320,
    difficulty: "Facile",
    category: "plat",
    description: "Fraîcheur et élégance avec ce tartare express au saumon.",
    ingredients: [
      "150 g de saumon frais (qualité sashimi)",
      "1/2 avocat",
      "1 c. à soupe de sauce soja",
      "1 c. à café d'huile de sésame",
      "Jus de citron vert",
      "Ciboulette, sésame, piment (optionnel)"
    ],
    steps: [
      "Couper le saumon en petits dés réguliers.",
      "Couper l'avocat en dés de même taille.",
      "Mélanger délicatement avec sauce soja, citron, huile de sésame.",
      "Dresser à l'emporte-pièce, parsemer de ciboulette et sésame."
    ],
    tip: "Achète du saumon estampillé 'sashimi grade' chez le poissonnier. Pour un tartare plus sûr, congèle le saumon 24h avant."
  },

  // Papillote de Cabillaud Citron-Herbes
  {
    id: "papillote_cabillaud",
    name: "Papillote de Cabillaud Citron",
    image: "images/Papillote Cabillaud.jpg",
    time: "20 min",
    calories: 240,
    difficulty: "Très facile",
    category: "plat",
    description: "Cuisson en papillote pour un poisson ultra moelleux et parfumé.",
    ingredients: [
      "2 filets de cabillaud (130 g chacun)",
      "1 citron en rondelles",
      "Tomates cerises, haricots verts",
      "1 c. à café d'huile d'olive",
      "Herbes de Provence, aneth, sel, poivre",
      "2 gousses d'ail"
    ],
    steps: [
      "Préchauffer le four à 190 °C.",
      "Disposer chaque filet sur une feuille de papier cuisson.",
      "Ajouter les légumes, citron, herbes, ail et un filet d'huile.",
      "Fermer hermétiquement la papillote et enfourner 15 min."
    ],
    tip: "La papillote garde toute l'humidité et les arômes. Ouvre-la à table pour un effet waouh garanti !"
  },

  // Steak Haché & Patate Douce Rôtie
  {
    id: "steak_patate_douce",
    name: "Steak Haché & Patate Douce",
    image: "images/Steak Patate Douce.jpg",
    time: "25 min",
    calories: 420,
    difficulty: "Facile",
    category: "plat",
    description: "Le combo protéines-glucides idéal post-entraînement.",
    ingredients: [
      "1 steak haché 5 % MG (150 g)",
      "1 patate douce moyenne",
      "Salade verte, tomate",
      "1 c. à café d'huile d'olive",
      "Paprika, cumin, sel, poivre",
      "Sauce : yaourt grec, moutarde, citron"
    ],
    steps: [
      "Couper la patate douce en cubes, assaisonner et rôtir au four 20 min à 200 °C.",
      "Assaisonner le steak et le cuire à la poêle selon ton goût.",
      "Préparer la sauce yaourt-moutarde.",
      "Dresser avec la salade et la patate douce rôtie."
    ],
    tip: "La patate douce remplace avantageusement les frites : index glycémique plus bas et bien plus de nutriments."
  },

  // Soupe Thaï Coco-Citronnelle
  {
    id: "soupe_thai",
    name: "Soupe Thaï Coco-Citronnelle",
    image: "images/Soupe Thai.jpg",
    time: "20 min",
    calories: 280,
    difficulty: "Facile",
    category: "plat",
    description: "Une soupe parfumée inspirée du tom kha avec crevettes.",
    ingredients: [
      "150 g de crevettes décortiquées",
      "400 ml de lait de coco allégé",
      "300 ml de bouillon de poulet",
      "1 tige de citronnelle, 3 feuilles de kaffir",
      "Champignons, poivron, pousses de bambou",
      "Jus de citron vert, coriandre, piment"
    ],
    steps: [
      "Faire chauffer le bouillon avec citronnelle et feuilles de kaffir 5 min.",
      "Ajouter le lait de coco et les légumes, cuire 5 min.",
      "Ajouter les crevettes, cuire 3 min.",
      "Terminer avec citron vert et coriandre fraîche."
    ],
    tip: "Si tu n'as pas de kaffir, utilise du zeste de citron vert. La citronnelle doit juste infuser, ne la mange pas."
  },

  // Gratin de Courgettes Léger
  {
    id: "gratin_courgettes",
    name: "Gratin de Courgettes Léger",
    image: "images/Gratin Courgettes.jpg",
    time: "30 min",
    calories: 250,
    difficulty: "Facile",
    category: "plat",
    description: "Un gratin réconfortant et léger, parfait pour l'été.",
    ingredients: [
      "3 courgettes moyennes",
      "2 œufs",
      "100 g de fromage blanc 0 %",
      "30 g de parmesan râpé",
      "1 gousse d'ail, persil",
      "Sel, poivre, muscade"
    ],
    steps: [
      "Couper les courgettes en rondelles et les faire sauter 5 min.",
      "Mélanger œufs, fromage blanc, parmesan, ail et herbes.",
      "Disposer les courgettes dans un plat, verser l'appareil dessus.",
      "Enfourner 20 min à 180 °C jusqu'à gratinage."
    ],
    tip: "Le fromage blanc remplace la crème fraîche : même onctuosité, 5x moins de matières grasses. Ajoute de la ricotta pour plus de douceur."
  },

  // Salade Niçoise
  {
    id: "salade_nicoise",
    name: "Salade Niçoise",
    image: "images/Salade Nicoise.jpg",
    time: "15 min",
    calories: 310,
    difficulty: "Très facile",
    category: "plat",
    description: "La vraie niçoise : complète, fraîche et sans fioritures.",
    ingredients: [
      "1 boîte de thon au naturel (100 g)",
      "2 œufs durs",
      "Haricots verts cuits, tomates, concombre",
      "Olives noires, anchois (optionnel)",
      "Salade verte",
      "Vinaigrette : huile d'olive, vinaigre, moutarde, sel"
    ],
    steps: [
      "Cuire les œufs 10 min, les passer sous l'eau froide et écaler.",
      "Disposer la salade dans un grand plat.",
      "Ajouter tous les éléments en sections distinctes.",
      "Arroser de vinaigrette et servir."
    ],
    tip: "La vraie niçoise ne contient pas de pommes de terre ni de riz. C'est ce qui en fait une salade si légère et complète."
  },

  // Spaghetti Bolognaise Light
  {
    id: "bolognaise",
    name: "Spaghetti Bolognaise Light",
    image: "images/Bolognaise.jpg",
    time: "30 min",
    calories: 390,
    difficulty: "Facile",
    category: "plat",
    description: "La bolognaise de la semaine, allégée et tout aussi savoureuse.",
    ingredients: [
      "80 g de spaghetti complets",
      "150 g de bœuf haché 5 % MG",
      "1 boîte de tomates concassées",
      "1 oignon, 2 gousses d'ail, 1 carotte",
      "1 c. à café d'huile d'olive",
      "Basilic, origan, sel, poivre"
    ],
    steps: [
      "Faire revenir oignon, ail et carotte en brunoise.",
      "Ajouter le bœuf, cuire jusqu'à coloration.",
      "Verser les tomates, assaisonner, laisser mijoter 20 min.",
      "Cuire les pâtes, égoutter et mélanger avec la sauce."
    ],
    tip: "La carotte dans la bolognaise absorbe l'acidité des tomates naturellement — pas besoin de sucre."
  },

  // Poulet Tikka Masala Light
  {
    id: "tikka_masala",
    name: "Poulet Tikka Masala Light",
    image: "images/Tikka Masala.jpg",
    time: "25 min",
    calories: 340,
    difficulty: "Facile",
    category: "plat",
    description: "Le plat indien préféré au monde, version allégée.",
    ingredients: [
      "150 g de blanc de poulet en cubes",
      "100 ml de lait de coco allégé",
      "1 boîte de tomates concassées (200 ml)",
      "1 oignon, 2 gousses d'ail, gingembre frais",
      "1 c. à café de garam masala, curcuma, cumin, paprika",
      "Coriandre fraîche"
    ],
    steps: [
      "Mariner le poulet avec épices, ail et gingembre 10 min.",
      "Faire revenir l'oignon, ajouter le poulet et colorer 5 min.",
      "Verser tomates et lait de coco, laisser mijoter 15 min.",
      "Servir avec riz basmati, parsemer de coriandre."
    ],
    tip: "Le lait de coco allégé apporte la douceur sans les calories. Utilise du yaourt grec à la place pour encore plus de légèreté."
  },

  // Quiche Légère aux Légumes
  {
    id: "quiche_legumes",
    name: "Quiche Légère aux Légumes",
    image: "images/Quiche Legumes.jpg",
    time: "40 min",
    calories: 290,
    difficulty: "Facile",
    category: "plat",
    description: "Une quiche sans pâte, moelleuse et pleine de légumes.",
    ingredients: [
      "3 œufs",
      "200 ml de lait demi-écrémé",
      "Légumes : épinards, champignons, poivron, oignon",
      "50 g de fromage râpé allégé",
      "Sel, poivre, muscade",
      "1 c. à café d'huile"
    ],
    steps: [
      "Préchauffer le four à 180 °C.",
      "Faire revenir les légumes, laisser refroidir légèrement.",
      "Battre œufs, lait, sel, poivre et muscade.",
      "Mélanger avec les légumes, verser dans un moule huilé.",
      "Parsemer de fromage et enfourner 30 min."
    ],
    tip: "Sans pâte = 150 kcal en moins par part ! La texture reste très moelleuse grâce aux œufs et au lait."
  },

  // Risotto aux Champignons Léger
  {
    id: "risotto_champignons",
    name: "Risotto aux Champignons",
    image: "images/Risotto Champignons.jpg",
    time: "30 min",
    calories: 350,
    difficulty: "Facile",
    category: "plat",
    description: "Un risotto crémeux allégé, sans beurre ni crème.",
    ingredients: [
      "80 g de riz arborio",
      "200 g de champignons (Paris ou shiitaké)",
      "500 ml de bouillon de légumes chaud",
      "1 échalote, 2 gousses d'ail",
      "30 g de parmesan râpé",
      "1 c. à café d'huile d'olive, persil, sel, poivre"
    ],
    steps: [
      "Faire revenir l'échalote et l'ail, ajouter les champignons.",
      "Ajouter le riz, nacrer 2 min à feu vif.",
      "Verser le bouillon chaud louche par louche en remuant constamment.",
      "Hors du feu, incorporer le parmesan et servir."
    ],
    tip: "Le secret du risotto léger : le parmesan en petite quantité et un bouillon très aromatique remplacent le beurre."
  },

  // ── PETIT-DÉJEUNER ──────────────────────────────────────

  // Overnight Oats Chocolat-Banane
  {
    id: "overnight_choco",
    name: "Overnight Oats Chocolat-Banane",
    image: "images/Overnight Oats.jpg",
    time: "5 min + nuit",
    calories: 340,
    difficulty: "Très facile",
    category: "petit-dejeuner",
    description: "La version choco du petit-dej qui se prépare la veille.",
    ingredients: [
      "50 g de flocons d'avoine",
      "200 ml de lait d'amande",
      "1 c. à soupe de cacao non sucré",
      "1 banane (moitié dedans, moitié sur le dessus)",
      "1 c. à soupe de beurre d'amande",
      "1 c. à café de miel"
    ],
    steps: [
      "Mélanger flocons, lait, cacao, miel et beurre d'amande.",
      "Écraser la moitié de la banane et l'incorporer.",
      "Couvrir et réfrigérer toute la nuit.",
      "Le matin, garnir avec le reste de banane en rondelles."
    ],
    tip: "Prépare 3 ou 4 pots le dimanche soir pour toute la semaine. Le matin c'est prêt en 0 seconde."
  },

  // Crêpes Complètes Protéinées
  {
    id: "crepes_proteinees",
    name: "Crêpes Complètes Protéinées",
    image: "images/Crepes Proteinees.jpg",
    time: "20 min",
    calories: 310,
    difficulty: "Facile",
    category: "petit-dejeuner",
    description: "Des crêpes moelleuses à la farine complète, riches en protéines.",
    ingredients: [
      "80 g de farine complète",
      "30 g de poudre protéinée vanille",
      "2 œufs",
      "200 ml de lait d'amande",
      "1 c. à soupe de miel",
      "Garniture : fruits rouges, yaourt grec"
    ],
    steps: [
      "Mélanger farine et protéines dans un bol.",
      "Ajouter les œufs, puis le lait petit à petit en fouettant.",
      "Laisser reposer 10 min.",
      "Cuire les crêpes dans une poêle anti-adhésive sans matière grasse.",
      "Garnir de yaourt grec et fruits rouges."
    ],
    tip: "La pâte doit être très fluide pour des crêpes fines. Si elle est trop épaisse, ajoute un peu de lait."
  },

  // Muffins Avoine & Myrtilles
  {
    id: "muffins_avoine",
    name: "Muffins Avoine & Myrtilles",
    image: "images/Muffins Avoine.jpg",
    time: "25 min",
    calories: 180,
    difficulty: "Facile",
    category: "petit-dejeuner",
    description: "Des muffins moelleux sans sucre raffiné, parfaits à emporter.",
    ingredients: [
      "100 g de flocons d'avoine mixés",
      "2 œufs",
      "1 banane mûre écrasée",
      "100 ml de lait d'amande",
      "2 c. à soupe de miel",
      "1 c. à café de levure",
      "100 g de myrtilles fraîches ou surgelées"
    ],
    steps: [
      "Préchauffer le four à 180 °C.",
      "Mixer les flocons en farine, mélanger avec la levure.",
      "Battre œufs, banane, lait et miel, incorporer à la farine.",
      "Ajouter les myrtilles délicatement.",
      "Verser dans des moules à muffins, enfourner 18 min."
    ],
    tip: "Ces muffins se conservent 3 jours dans une boîte hermétique ou 1 mois au congélateur. Réchauffer 30 sec au micro-ondes."
  },

  // Toast Saumon & Œuf Poché
  {
    id: "toast_saumon",
    name: "Toast Saumon & Œuf Poché",
    image: "images/Toast Saumon.jpg",
    time: "10 min",
    calories: 330,
    difficulty: "Facile",
    category: "petit-dejeuner",
    description: "Un brunch protéiné élégant et facile à préparer.",
    ingredients: [
      "2 tranches de pain complet",
      "80 g de saumon fumé",
      "2 œufs",
      "2 c. à soupe de fromage frais allégé",
      "Aneth, câpres",
      "Jus de citron, poivre"
    ],
    steps: [
      "Toaster le pain complet.",
      "Étaler le fromage frais, poser les tranches de saumon.",
      "Pocher les œufs 3 min dans l'eau frémissante vinaigrée.",
      "Poser l'œuf poché sur le saumon, parsemer d'aneth et câpres.",
      "Terminer avec un filet de citron et du poivre."
    ],
    tip: "Prépare tous les ingrédients avant de pocher les œufs — ils n'attendent pas !"
  },

  // Smoothie Bowl Mangue-Passion
  {
    id: "smoothie_bowl_mangue",
    name: "Smoothie Bowl Mangue-Passion",
    image: "images/Smoothie Bowl Mangue.jpg",
    time: "5 min",
    calories: 270,
    difficulty: "Très facile",
    category: "petit-dejeuner",
    description: "Un bowl tropical vitaminé pour un réveil ensoleillé.",
    ingredients: [
      "150 g de mangue surgelée",
      "1 banane congelée",
      "100 ml de jus d'orange",
      "1 fruit de la passion",
      "Toppings : granola, noix de coco, kiwi"
    ],
    steps: [
      "Mixer mangue, banane et jus d'orange jusqu'à texture épaisse.",
      "Verser dans un bol.",
      "Déposer le fruit de la passion, granola et noix de coco.",
      "Ajouter les rondelles de kiwi et servir immédiatement."
    ],
    tip: "Utilise le minimum de jus pour garder une texture épaisse. Si ça coule, c'est que tu as mis trop de liquide — ajoute plus de fruits congelés."
  },

  // Granola Maison Protéiné
  {
    id: "granola_maison",
    name: "Granola Maison Protéiné",
    image: "images/Granola Maison.jpg",
    time: "25 min",
    calories: 220,
    difficulty: "Très facile",
    category: "petit-dejeuner",
    description: "Ton granola maison, croustillant et sans conservateurs.",
    ingredients: [
      "200 g de flocons d'avoine",
      "50 g d'amandes et noix mélangées",
      "2 c. à soupe de miel ou sirop d'érable",
      "2 c. à soupe d'huile de coco",
      "1 c. à café de cannelle",
      "50 g de raisins secs ou cranberries"
    ],
    steps: [
      "Préchauffer le four à 160 °C.",
      "Mélanger flocons, noix, miel, huile et cannelle.",
      "Étaler sur une plaque en couche uniforme.",
      "Enfourner 20 min en remuant à mi-cuisson.",
      "Laisser refroidir complètement avant d'ajouter les fruits secs."
    ],
    tip: "Ne remue pas pendant la cuisson si tu veux des grosses touffes de granola croustillantes. Laisse vraiment refroidir avant de casser — il durcit en refroidissant."
  },

  // ── SNACKS ─────────────────────────────────────────────

  // Houmous Maison & Crudités
  {
    id: "houmous_maison",
    name: "Houmous Maison & Crudités",
    image: "images/Houmous Maison.jpg",
    time: "10 min",
    calories: 160,
    difficulty: "Très facile",
    category: "snack",
    description: "Un houmous crémeux maison avec ses crudités croquantes.",
    ingredients: [
      "1 boîte de pois chiches (400 g), égouttés",
      "2 c. à soupe de tahini",
      "Jus d'1 citron",
      "1 gousse d'ail",
      "2 c. à soupe d'huile d'olive",
      "Sel, cumin, paprika pour décorer",
      "Crudités : carottes, concombre, céleri, poivron"
    ],
    steps: [
      "Mixer pois chiches, tahini, citron, ail et huile jusqu'à texture lisse.",
      "Ajouter 2–3 c. à soupe d'eau froide pour la texture souhaitée.",
      "Dresser dans un bol, faire un puits et verser un filet d'huile.",
      "Saupoudrer de paprika et servir avec les crudités."
    ],
    tip: "Le secret d'un houmous ultra lisse : peler les pois chiches un par un (long mais ça vaut le coup). Ou utiliser des pois chiches en conserve bien rincés."
  },

  // Edamame Épicés
  {
    id: "edamame",
    name: "Edamame Épicés",
    image: "images/Edamame.jpg",
    time: "8 min",
    calories: 140,
    difficulty: "Très facile",
    category: "snack",
    description: "Le snack japonais : riche en protéines, rapide et addictif.",
    ingredients: [
      "200 g d'edamame surgelés (dans leurs cosses)",
      "Fleur de sel",
      "Optionnel : piment, ail en poudre, citron"
    ],
    steps: [
      "Faire bouillir de l'eau salée.",
      "Plonger les edamame 5 min.",
      "Égoutter et rincer à l'eau froide.",
      "Saupoudrer de fleur de sel et servir."
    ],
    tip: "On mange les fèves en pressant la cosse avec les dents — on ne mange pas la cosse elle-même. Parfait devant un film !"
  },

  // Crackers Graines Maison
  {
    id: "crackers_graines",
    name: "Crackers Graines Maison",
    image: "images/Crackers Graines.jpg",
    time: "30 min",
    calories: 130,
    difficulty: "Facile",
    category: "snack",
    description: "Des crackers croustillants aux graines, sans farine.",
    ingredients: [
      "50 g de graines de tournesol",
      "50 g de graines de sésame",
      "30 g de graines de lin",
      "30 g de graines de chia",
      "1 c. à soupe de sauce soja",
      "Eau, sel, herbes"
    ],
    steps: [
      "Préchauffer le four à 160 °C.",
      "Mélanger toutes les graines avec eau et sauce soja pour lier.",
      "Étaler finement sur une plaque avec papier cuisson.",
      "Enfourner 20–25 min jusqu'à ce que ce soit doré et croustillant.",
      "Laisser refroidir et casser en morceaux."
    ],
    tip: "Ces crackers se conservent 2 semaines dans une boîte hermétique. Parfaits avec du houmous ou du guacamole."
  },

  // Guacamole Maison
  {
    id: "guacamole",
    name: "Guacamole Maison",
    image: "images/Guacamole.jpg",
    time: "8 min",
    calories: 150,
    difficulty: "Très facile",
    category: "snack",
    description: "Le vrai guacamole mexicain, frais et sans fioritures.",
    ingredients: [
      "2 avocats mûrs",
      "Jus d'1 citron vert",
      "1/2 oignon rouge haché fin",
      "1 tomate épépinée en dés",
      "Coriandre fraîche",
      "Sel, piment (optionnel)"
    ],
    steps: [
      "Écraser les avocats à la fourchette (pas trop lisse).",
      "Ajouter le citron vert pour éviter l'oxydation.",
      "Incorporer oignon, tomate et coriandre.",
      "Assaisonner, goûter et ajuster le citron."
    ],
    tip: "Le guacamole doit être légèrement grumeleux, pas en purée. Le citron vert est indispensable : il empêche le noircissement et équilibre le gras de l'avocat."
  },

  // Verrines Concombre-Fromage Frais
  {
    id: "verrines_concombre",
    name: "Verrines Concombre-Fromage Frais",
    image: "images/Verrines Concombre.jpg",
    time: "8 min",
    calories: 90,
    difficulty: "Très facile",
    category: "snack",
    description: "Un snack frais et léger en quelques minutes.",
    ingredients: [
      "1/2 concombre",
      "100 g de fromage frais allégé (St Môret ou Philadelphia light)",
      "Aneth ou menthe fraîche",
      "Jus de citron",
      "Sel, poivre",
      "Quelques radis pour décorer"
    ],
    steps: [
      "Éplucher et couper le concombre en dés ou en rondelles.",
      "Mélanger le fromage frais avec citron, aneth, sel et poivre.",
      "Dresser en verrines : concombre, crème fraîche, décorer.",
      "Réfrigérer 10 min avant de servir."
    ],
    tip: "Idéal pour l'apéritif ou une collation rafraîchissante. Remplace le fromage frais par du tzatziki pour varier."
  },

  // ── DESSERTS ────────────────────────────────────────────

  // Banana Nice Cream
  {
    id: "banana_nice_cream",
    name: "Banana Nice Cream",
    image: "images/Banana Nice Cream.jpg",
    time: "5 min + congélo",
    calories: 160,
    difficulty: "Très facile",
    category: "dessert",
    description: "Une glace à la banane 1 ingrédient, crémeuse comme du vrai ice cream.",
    ingredients: [
      "3 bananes bien mûres, congelées en rondelles",
      "Optionnel : cacao, beurre d'amande, fruits rouges, vanille"
    ],
    steps: [
      "Congeler les rondelles de banane au moins 4h.",
      "Mixer les bananes congelées jusqu'à obtenir une texture crémeuse.",
      "Ajouter un ingrédient au choix pour varier les saveurs.",
      "Servir immédiatement ou remettre 30 min au congélo pour plus de fermeté."
    ],
    tip: "Plus les bananes sont mûres (avec des taches noires), plus la glace sera sucrée et crémeuse. Ne lésine pas sur la maturité !"
  },

  // Compote Maison Pomme-Cannelle
  {
    id: "compote_pomme",
    name: "Compote Pomme-Cannelle Maison",
    image: "images/Compote Pomme.jpg",
    time: "20 min",
    calories: 100,
    difficulty: "Très facile",
    category: "dessert",
    description: "La compote maison : zéro sucre ajouté, 100 % pommes.",
    ingredients: [
      "4 pommes (Golden ou Fuji)",
      "1 c. à café de cannelle",
      "Jus d'1/2 citron",
      "Optionnel : vanille, cardamome"
    ],
    steps: [
      "Éplucher et couper les pommes en morceaux.",
      "Mettre dans une casserole avec 3 c. à soupe d'eau.",
      "Cuire à feu doux 15 min jusqu'à ce que les pommes soient fondantes.",
      "Mixer ou écraser à la fourchette, ajouter cannelle et citron."
    ],
    tip: "Sans sucre ajouté, les pommes Golden sont naturellement assez sucrées. En pot stérilisé, cette compote se conserve 1 mois."
  },

  // Tarte aux Fruits Légère
  {
    id: "tarte_fruits",
    name: "Tarte aux Fruits Légère",
    image: "images/Tarte Fruits.jpg",
    time: "35 min",
    calories: 240,
    difficulty: "Facile",
    category: "dessert",
    description: "Une tarte légère avec crème pâtissière allégée et fruits frais.",
    ingredients: [
      "1 pâte brisée allégée (ou maison avec farine complète)",
      "Crème allégée : 250 ml de lait demi-écrémé, 2 jaunes, 30 g de maïzena, 1 c. à soupe de miel, vanille",
      "Fruits frais : fraises, kiwi, framboises, myrtilles"
    ],
    steps: [
      "Cuire la pâte à blanc 15 min à 180 °C.",
      "Préparer la crème pâtissière : chauffer le lait, mélanger jaunes-maïzena, verser le lait chaud, recuire jusqu'à épaississement.",
      "Étaler la crème froide sur la pâte.",
      "Disposer les fruits harmonieusement et réfrigérer 1h."
    ],
    tip: "Le miel remplace le sucre dans la crème : saveur plus complexe et index glycémique plus bas."
  },

  // Panna Cotta Légère Coulis Framboise
  {
    id: "panna_cotta",
    name: "Panna Cotta Légère & Coulis Framboise",
    image: "images/Panna Cotta.jpg",
    time: "15 min + repos",
    calories: 170,
    difficulty: "Facile",
    category: "dessert",
    description: "Un dessert italien délicat, léger et frais.",
    ingredients: [
      "400 ml de lait d'amande",
      "2 feuilles de gélatine",
      "2 c. à soupe de miel",
      "1 c. à café d'extrait de vanille",
      "Coulis : 150 g de framboises, 1 c. à soupe de miel"
    ],
    steps: [
      "Faire tremper la gélatine dans l'eau froide 5 min.",
      "Chauffer le lait avec miel et vanille sans bouillir.",
      "Essorer la gélatine et la dissoudre dans le lait chaud.",
      "Verser dans des ramequins, réfrigérer 4h minimum.",
      "Mixer les framboises avec le miel pour le coulis, démouler et servir."
    ],
    tip: "Le lait d'amande remplace la crème entière : même texture gélifiée, 4x moins de calories. Parsème de quelques framboises fraîches pour la présentation."
  },

  // Clafoutis Cerises Léger
  {
    id: "clafoutis",
    name: "Clafoutis aux Cerises Léger",
    image: "images/Clafoutis Cerises.jpg",
    time: "40 min",
    calories: 200,
    difficulty: "Facile",
    category: "dessert",
    description: "Le clafoutis traditionnel revisité plus léger et tout aussi gourmand.",
    ingredients: [
      "300 g de cerises fraîches ou surgelées",
      "3 œufs",
      "40 g de farine complète",
      "200 ml de lait demi-écrémé",
      "2 c. à soupe de miel",
      "1 c. à café de vanille"
    ],
    steps: [
      "Préchauffer le four à 180 °C.",
      "Fouetter œufs, miel, vanille puis incorporer farine et lait.",
      "Disposer les cerises dans un plat légèrement huilé.",
      "Verser l'appareil et enfourner 30–35 min.",
      "Servir tiède, saupoudrer de sucre glace si souhaité."
    ],
    tip: "Les cerises avec noyaux rendent le clafoutis plus savoureux (les noyaux libèrent un goût d'amande) — mais pense à prévenir tes convives !"
  }
];

// Catégories pour le filtrage
const CATEGORIES = {
  all: "Tout",
  "petit-dejeuner": "Petit-déjeuner",
  plat: "Plats",
  snack: "Snacks",
  dessert: "Desserts"
};
