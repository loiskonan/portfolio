export const personalInfo = {
  name: "Konan Lois Nathanael",
  title: "Développeur d'Applications Digitales",
  subtitle: "Consultant Full Stack",
  email: "loiskonan3@gmail.com",
  phone: ["+225 05 55 51 56 69", "+225 07 07 09 80 78"],
  location: "Abidjan, Côte d'Ivoire",
  address: "23 BP 2394 Abidjan 08",
  bio: "Consultant Développeur Full Stack passionné par la transformation digitale et l'optimisation des processus métiers. Fort d'une expérience acquise sur des projets d'entreprise, j'interviens de l'analyse des besoins à la mise en production de solutions web et mobiles performantes et sécurisées. Compétent en React.js, Node.js, TypeScript, Flutter, React Native, MySQL et MongoDB, avec une solide maîtrise des API REST, de l'architecture applicative et des méthodologies Agile/Scrum.",
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Basique" },
  ],
  achievements: [
    "Finaliste — Concours national Prototypage Made in CI 2025",
    "Finaliste — Hackathon Yako Insurtech 2025",
  ],
  photos: [
    {
      src: "/assets/profile.png",
      alt: "Konan Lois Nathanael — portrait professionnel",
    },
    {
      src: "/assets/profile-2.png",
      alt: "Konan Lois Nathanael — photo de présentation",
    },
  ],
};

export const skills = {
  frontend: ["React", "React Native", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Flutter/Dart", "Figma"],
  backend: ["Node.js", "Express", "PHP", "Laravel", "API REST", "Firebase"],
  database: ["MySQL", "MongoDB", "Firestore"],
  tools: ["Git", "Jira", "Postman", "Swagger", "Visio", "UML", "Windev"],
  other: ["Gestion de Projet", "Scrum/Agile", "Rédaction de cahiers des charges"],
};

export const experiences = [
  {
    company: "NSIA Vie & Assurances",
    role: "Développeur / Support Projet IT",
    period: "Déc. 2024 — Déc. 2025",
    description: "Développement Full-Stack au sein d'une équipe IT en transformation digitale.",
    missions: [
      "Développement Full-Stack (React / Node.js)",
      "Rédaction de cahiers des charges et chartes projet",
      "Création de workflows logiciels (Visio)",
      "Création d'API REST (Node.js, Express, CORS)",
      "Apprentissage et application de Scrum",
    ],
  },
  {
    company: "NSIA Vie & Assurances",
    role: "Consultant Développeur — E-com Réseau Mobile",
    period: "Mars 2026 — Mai 2026",
    description: "Développement d'applications web et mobile pour le réseau commercial.",
    missions: [
      "Participation aux ateliers d'expression de besoins",
      "Développement mobile (React Native / Node.js)",
      "Développement web (React.js) avec tableaux de bord décisionnels",
      "Conception d'API REST sécurisées (API Key, Helmet, CORS, JWT)",
      "Documentation et tests avec Swagger",
      "Gestion de bases de données MySQL",
    ],
  },
];

export const projects = [
  {
    title: "NSIA Santé",
    subtitle: "Application de gestion de l'infirmerie",
    period: "2024 — 2025",
    description: "Application complète de gestion infirmière avec modules de pharmacie, consultations, dossiers médicaux et traitements spécifiques.",
    tech: ["React", "Node.js", "Express", "MongoDB", "MySQL"],
    highlights: [
      "Gestion de pharmacie et consultations",
      "Dossiers médicaux et traitements spécifiques",
      "API REST avec authentification JWT",
    ],
    category: "web",
  },
  {
    title: "CgestBankA",
    subtitle: "Gestion des contrats",
    period: "2024 — 2025",
    description: "Plateforme de consultation, recherche avancée et exportation de contrats avec statistiques détaillées par filtres.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    highlights: [
      "Recherche avancée et exportation",
      "Statistiques détaillées par filtres",
      "Architecture modulaire et maintenable",
    ],
    category: "web",
  },
  {
    title: "Dataflow",
    subtitle: "Transfert de fichiers",
    period: "2024 — 2025",
    description: "Application web de transfert sécurisé de fichiers entre NSIA Vie Assurances et ses banques partenaires.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    highlights: [
      "Transfert sécurisé inter-institutionnel",
      "Middleware de sécurité (Helmet, CORS)",
      "Authentification et autorisation JWT",
    ],
    category: "web",
  },
  {
    title: "E-com Réseau Mobile",
    subtitle: "Application Mobile",
    period: "2026",
    description: "Application mobile pour les commerciaux : souscription de contrats, suivi des performances, commissions et demandes de règlement.",
    tech: ["React Native", "Node.js", "Express", "MySQL"],
    highlights: [
      "Souscription et suivi des performances",
      "Gestion des commissions",
      "API sécurisée avec clé API",
    ],
    category: "mobile",
  },
  {
    title: "E-com Réseau Mobile",
    subtitle: "Plateforme Web",
    period: "2026",
    description: "Plateforme de pilotage du réseau commercial : objectifs, commissions, équipes, agences et tableaux de bord décisionnels.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    highlights: [
      "Tableaux de bord de pilotage",
      "Gestion des équipes et agences",
      "Reporting et indicateurs de performance",
    ],
    category: "web",
  },
  {
    title: "NeuroScore",
    subtitle: "Application éducative médicale",
    period: "Oct. — Déc. 2024",
    description: "Application mobile éducative pour étudiants en médecine, développée en collaboration avec le Dr Konan Meleine Landry.",
    tech: ["React Native", "Node.js", "MongoDB"],
    highlights: [
      "Cours sur la neurologie et l'anatomie",
      "Enrichissement des connaissances cliniques",
      "Collaboration médicale",
    ],
    category: "mobile",
  },
  {
    title: "Euphoria Pressing",
    subtitle: "Gestion de pressing",
    period: "Août — Oct. 2024",
    description: "Application mobile et desktop de gestion de pressing avec automatisation, facturation et analyse statistique des ventes.",
    tech: ["Flutter", "Firebase", "Firestore"],
    highlights: [
      "Automatisation des processus",
      "Génération de factures",
      "Tableaux de bord financiers",
    ],
    category: "mobile",
  },
];

export const education = [
  {
    degree: "Master 1 — Ingénierie de données et de décision",
    school: "Université Internationale d'Abidjan (IUA)",
    period: "2024 — 2025",
  },
  {
    degree: "Licence Informatique — Option MIAGE",
    school: "Université Internationale d'Abidjan (IUA)",
    period: "2023 — 2024",
  },
  {
    degree: "Baccalauréat D",
    school: "Jean Piaget",
    period: "2018 — 2019",
  },
  {
    degree: "BEPC",
    school: "Petit Séminaire St Augustin de Bingerville",
    period: "2014 — 2015",
  },
];

export const certifications = [
  {
    name: "Certificat PSMI",
    issuer: "En cours",
  },
  {
    name: "Formation AMOA Academy",
    issuer: "Catalytys Consulting",
    period: "Déc. 2024 — Déc. 2025",
    topics: ["Gestion de projet", "Rédaction de processus", "Tenue d'ateliers", "Conduite du changement"],
  },
];

export const ambitions = {
  targetYear: 2035,
  title: "Vision 2035",
  subtitle: "Mes ambitions et objectifs",
  vision:
    "Mon objectif est de m'imposer comme l'un des plus grands entrepreneurs tech de Côte d'Ivoire, en créant ma propre startup innovante et en bâtissant une entreprise à fort impact sur le continent africain.",
  goals: [
  {
    title: "Entrepreneur tech de référence",
    description:
      "Devenir une figure incontournable de l'écosystème technologique ivoirien et africain.",
  },
  {
    title: "Créer ma startup",
    description:
      "Lancer et développer une entreprise tech ambitieuse, porteuse de solutions concrètes aux défis locaux et régionaux.",
  },
  {
    title: "Couverture Forbes Afrique",
    description:
      "Figurer en tête d'affiche de Forbes Afrique en 2035, symbole d'une réussite entrepreneuriale exemplaire.",
  },
  ],
  coverImage: {
    src: "/assets/forbes-2035.png",
    alt: "Illustration — Couverture Forbes Afrique 2035, Lois Konan",
  },
  quotes: [
    {
      text: "Un rêve écrit devient un objectif, un objectif décomposé en étapes devient un plan, un plan soutenu par des actions devient une réalité.",
      author: "Greg Reid",
    },
    {
      text: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
      author: "Albert Schweitzer",
    },
  ],
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Ambitions", href: "#ambitions" },
  { label: "Compétences", href: "#competences" },
  { label: "Expériences", href: "#experiences" },
  { label: "Projets", href: "#projets" },
  { label: "Formation", href: "#formation" },
  { label: "Contact", href: "#contact" },
];
