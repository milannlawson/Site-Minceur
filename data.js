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
    image: "images/omelette full legumes.jpeg",
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
