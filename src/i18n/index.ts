import { LOCALES } from "../consts";

type Texts = {
  [key in (typeof LOCALES)[number]]: {
    [key: string]: string;
  };
};

export const texts: Texts = {
  en: {
    // components
    // --- header
    "components.header.lang": "Language",
    "components.header.theme": "Theme",
    "components.header.paris": "Paris",
    "components.header.france": "France",
    // --- navigation
    "components.navigation.home": "Home",
    "components.navigation.socials": "Socials",
    "components.navigation.projects": "Projects",
    "components.navigation.blog": "Blog",
    // --- theme
    "components.theme.default": "Default themes",
    "components.theme.special": "Special themes",
    "components.theme.search": "Search a theme",
    // --- lang
    "components.lang.choose": "Choose a language",
    "components.lang.current": "current",
    // --- modal
    "components.modal.close": "Close",
    // --- items
    "components.items.more": "Read more",
    "components.items.now": "right now",
    "components.items.from": "From",
    "components.items.to": "to",
    "components.items.work.looking": "Looking for",
    "components.items.work.near": "near",
    "components.items.certification.certifiedBy": "Certified by",
    // pages
    // --- blog
    "pages.blog.meta.title": "Blog",
    "pages.blog.meta.description":
      "Read my latest articles, thoughts, and tech tutorials. I write about web development, software engineering, automation, and tech culture.",
    "pages.blog.meta.keywords":
      "blog, articles, thoughts, tutorials, web development, software engineering, automation, tech culture",
    "pages.blog.title": "Blog - Insights & Experiments",
    "pages.blog.subtitle": "Exploring web development, automation, and new technologies—one project at a time.",
    "pages.blog.articles": "Articles",
    // --- socials
    "pages.socials.meta.title": "Connect with me",
    "pages.socials.meta.description":
      "Find and follow me across social media and professional networks. Stay updated on my latest projects, blog posts, and tech insights.",
    "page.socials.meta.keywords": "socials, social media, professional networks, projects, blog posts, tech insights",
    "pages.socials.title": "My Socials - Let's Stay Connected",
    "pages.socials.subtitle":
      "Find me on social and professional platforms to follow my projects and connect over web development and automation.",
    "pages.socials.featured": "Featured",
    "pages.socials.links": "Social Links",
    // --- projects
    "pages.projects.meta.title": "Projects & Works",
    "pages.projects.meta.description":
      "Explore my latest web development projects, automation tools, and tech experiments. Always building, always learning.",
    "pages.projects.meta.keywords": "projects, works, web development, automation tools, tech experiments",
    "pages.projects.title": "Projects, Creations and contributions",
    "pages.projects.subtitle":
      "Here are some of the projects I've led, built, or contributed to. I focus on creating developer tools, automation solutions, and innovative web applications that improve efficiency, streamline workflows, and push the boundaries of technology.",
    "pages.projects.creations": "Creations",
    "pages.projects.projects": "Projects",
    "pages.projects.contributions": "Contributions",
    // --- home (index)
    "pages.index.meta.title": "Web & Software Developer",
    "pages.index.meta.description":
      "20-year-old Web Developer & Computer Science Student passionate about building sleek, high-performance websites and automating workflows. Always exploring new technologies to solve problems and optimize efficiency.",
    "pages.index.meta.keywords":
      "web developer, software developer, computer science student, web development, automation, new technologies",
    "pages.index.title": "Full-Stack Software Engineer - Pierre Guéroult - Paris, France",
    "pages.index.subtitle":
      " 20 year-old web developer & Computer Science Student. I love crafting sleek websites and automating workflows to make life easier. Passionate about clean code, problem-solving, and making tech work smarter, not harder. Always exploring new technologies, always up for a challenge. Whether it's web development, automation, or something completely out of my comfort zone - I'm in.",
    "pages.index.works": "Works",
    "pages.index.schools": "Schools",
    "pages.index.certifications": "Certifications",
  },
  fr: {
    // components
    // --- header
    "components.header.lang": "Langue",
    "components.header.theme": "Thème",
    "components.header.paris": "Paris",
    "components.header.france": "France",
    // --- navigation
    "components.navigation.home": "Accueil",
    "components.navigation.socials": "Réseaux",
    "components.navigation.projects": "Projets",
    "components.navigation.blog": "Blog",
    // --- theme
    "components.theme.default": "Thèmes par défaut",
    "components.theme.special": "Thèmes spéciaux",
    "components.theme.search": "Rechercher un thème",
    // --- lang
    "components.lang.choose": "Changer de langue",
    "components.lang.current": "actuelle",
    // --- modal
    "components.modal.close": "Fermer",
    // --- items
    "components.items.more": "Lire la suite",
    "components.items.now": "en ce moment",
    "components.items.from": "De",
    "components.items.to": "à",
    "components.items.work.looking": "À la recherche",
    "components.items.work.near": "autour de",
    // pages
    // --- blog
    "pages.blog.meta.title": "Blog",
    "pages.blog.meta.description":
      "Lisez mes derniers articles, pensées et tutoriels techniques. J'écris sur le développement web, l'ingénierie logicielle, l'automatisation et la culture tech.",
    "pages.blog.meta.keywords":
      "blog, articles, pensées, tutoriels, développement web, ingénierie logicielle, automatisation, culture tech",
    "pages.blog.title": "Blog - Réflexions & Expérimentations",
    "pages.blog.subtitle":
      "Explorer le développement web, l'automatisation et les nouvelles technologies—un projet à la fois.",
    "pages.blog.articles": "Articles",
    "pages.blog.translation.title": "Traduction en cours...",
    "pages.blog.translation.text":
      "Ces articles ne sont pas encore disponibles en français, mais j'y travaille ! En attendant, vous pouvez les lire en anglais ou revenir plus tard pour la version traduite.",
    // --- socials
    "pages.socials.meta.title": "Connectons nous",
    "pages.socials.meta.description":
      "Trouvez et suivez-moi sur les réseaux sociaux et les réseaux professionnels. Restez informé de mes derniers projets, articles de blog et insights tech.",
    "page.socials.meta.keywords":
      "réseaux, réseaux sociaux, réseaux professionnels, projets, articles de blog, insights tech",
    "pages.socials.title": "Mes Réseaux - Restons Connectés",
    "pages.socials.subtitle":
      "Retrouvez-moi sur les plateformes sociales et professionnelles pour suivre mes projets et échanger autour du développement web et de l'automatisation.",
    "pages.socials.featured": "Mis en avant",
    "pages.socials.links": "Liens de mes réseaux",
    // --- projects
    "pages.projects.meta.title": "Projets & Travaux",
    "pages.projects.meta.description":
      "Explorez mes derniers projets de développement web, outils d'automatisation et expérimentations tech. Toujours en construction, toujours en apprentissage.",
    "pages.projects.meta.keywords":
      "projets, travaux, développement web, outils d'automatisation, expérimentations tech",
    "pages.projects.title": "Projets, Créations et contributions",
    "pages.projects.subtitle":
      "Voici quelques-uns des projets que j'ai menés, construits ou auxquels j'ai contribué. Je me concentre sur la création d'outils pour développeurs, de solutions d'automatisation et d'applications web innovantes qui améliorent la vie et repoussent les limites de la technologie.",
    "pages.projects.creations": "Créations",
    "pages.projects.projects": "Projets",
    "pages.projects.contributions": "Contributions",
    "pages.projects.translation.title": "Traduction en cours...",
    "pages.projects.translation.text":
      "Ces pages de projets ne sont pas encore disponible en français, mais j'y travaille ! En attendant, vous pouvez les lire en anglais ou revenir plus tard pour la version traduite.",
    // --- home (index)
    "pages.index.meta.title": "Développeur Web & Logiciel",
    "pages.index.meta.description":
      "Développeur Web de 20 ans & Étudiant en Informatique passionné par la création de sites web élégants et performants et l'automatisation des workflows. Toujours à la recherche de nouvelles technologies pour résoudre des problèmes et optimiser l'efficacité.",
    "pages.index.meta.keywords":
      "développeur web, développeur logiciel, étudiant en informatique, développement web, automatisation, nouvelles technologies",
    "pages.index.title": "Ingénieur Logiciel Full-Stack - Pierre Guéroult - Paris, France",
    "pages.index.subtitle":
      "Développeur web de 20 ans & Étudiant en Informatique. J'adore créer des sites web élégants et automatiser les workflows pour faciliter la vie. Passionné par le code propre, la résolution de problèmes et la mise en place de technologies intelligentes. Toujours à la recherche de nouvelles technologies, toujours prêt à relever un défi. Que ce soit le développement web, l'automatisation ou quelque chose complètement hors de ma zone de confort - je suis partant.",
    "pages.index.works": "Emplois",
    "pages.index.schools": "Écoles",
    "pages.index.certifications": "Certifications",
  },
  ar: {
    // components
    // --- header
    "components.header.lang": "اللغة",
    "components.header.theme": "السمة",
    "components.header.paris": "باريس",
    "components.header.france": "فرنسا",
    // --- navigation
    "components.navigation.home": "الرئيسية",
    "components.navigation.socials": "وسائل التواصل",
    "components.navigation.projects": "المشاريع",
    "components.navigation.blog": "المدونة",
    // --- theme
    "components.theme.default": "السمات الافتراضية",
    "components.theme.special": "السمات الخاصة",
    "components.theme.search": "ابحث عن سمة",
    // --- lang
    "components.lang.choose": "تغيير اللغة",
    "components.lang.current": "الحالية",
    // --- modal
    "components.modal.close": "إغلاق",
    // --- items
    "components.items.more": "اقرأ المزيد",
    "components.items.now": "الآن",
    "components.items.from": "من",
    "components.items.to": "إلى",
    "components.items.work.looking": "يبحث عن",
    "components.items.work.near": "بالقرب من",
    // pages
    // --- blog
    "pages.blog.meta.title": "المدونة",
    "pages.blog.meta.description":
      "اقرأ أحدث مقالاتي وأفكاري ودروسي التقنية. أكتب عن تطوير الويب وهندسة البرمجيات والأتمتة وثقافة التكنولوجيا.",
    "pages.blog.meta.keywords": "مدونة، مقالات، أفكار، دروس، تطوير الويب، هندسة البرمجيات، الأتمتة، ثقافة التكنولوجيا",
    "pages.blog.title": "المدونة - رؤى وتجارب",
    "pages.blog.subtitle": "استكشاف تطوير الويب والأتمتة والتقنيات الجديدة، مشروع بعد آخر.",
    "pages.blog.articles": "المقالات",
    "pages.blog.translation.title": "الترجمة قيد التنفيذ...",
    "pages.blog.translation.text":
      "هذه المقالات غير متاحة حاليًا باللغة العربية، لكنني أعمل على ذلك! في الوقت الحالي، يمكنك قراءتها باللغة الإنجليزية أو العودة لاحقًا للاطلاع على النسخة المترجمة.",
    // --- socials
    "pages.socials.meta.title": "تواصل معي",
    "pages.socials.meta.description":
      "ابحث عني وتابعني عبر وسائل التواصل الاجتماعي والشبكات المهنية. ابقَ على اطلاع بأحدث مشاريعي ومقالاتي التقنية.",
    "page.socials.meta.keywords":
      "وسائل التواصل، التواصل الاجتماعي، الشبكات المهنية، المشاريع، المقالات، الأفكار التقنية",
    "pages.socials.title": "وسائل التواصل - لنبقَ على اتصال",
    "pages.socials.subtitle":
      "ابحث عني على المنصات الاجتماعية والمهنية لمتابعة مشاريعي والتواصل حول تطوير الويب والأتمتة.",
    "pages.socials.featured": "المميز",
    "pages.socials.links": "روابط التواصل",
    // --- projects
    "pages.projects.meta.title": "المشاريع والأعمال",
    "pages.projects.meta.description":
      "استكشف أحدث مشاريعي في تطوير الويب وأدوات الأتمتة والتجارب التقنية. دائم البناء، دائم التعلم.",
    "pages.projects.meta.keywords": "المشاريع، الأعمال، تطوير الويب، أدوات الأتمتة، التجارب التقنية",
    "pages.projects.title": "المشاريع، الإبداعات والمساهمات",
    "pages.projects.subtitle":
      "إليك بعض المشاريع التي قدتُها أو بنيتُها أو ساهمتُ فيها. أركز على إنشاء أدوات للمطورين، وحلول الأتمتة، وتطبيقات الويب المبتكرة التي تحسّن الكفاءة وتبسط سير العمل وتدفع حدود التكنولوجيا.",
    "pages.projects.creations": "الإبداعات",
    "pages.projects.projects": "المشاريع",
    "pages.projects.contributions": "المساهمات",
    "pages.projects.translation.title": "الترجمة قيد التنفيذ...",
    "pages.projects.translation.text":
      "هذه الصفحات الخاصة بالمشاريع غير متاحة حاليًا باللغة العربية، لكنني أعمل على ذلك! في الوقت الحالي، يمكنك قراءتها باللغة الإنجليزية أو العودة لاحقًا للاطلاع على النسخة المترجمة.",
    // --- home (index)
    "pages.index.meta.title": "مطور ويب وبرمجيات",
    "pages.index.meta.description":
      "مطور ويب وطالب علوم الحاسوب بعمر 20 عامًا، شغوف بإنشاء مواقع ويب أنيقة وعالية الأداء وأتمتة سير العمل. أستكشف دائمًا التقنيات الجديدة لحل المشكلات وتحسين الكفاءة.",
    "pages.index.meta.keywords": "مطور ويب، مطور برمجيات، طالب علوم الحاسوب، تطوير الويب، الأتمتة، التقنيات الجديدة",
    "pages.index.title": "مهندس برمجيات متكامل - بيير غيرو - باريس، فرنسا",
    "pages.index.subtitle":
      "مطور ويب وطالب علوم الحاسوب بعمر 20 عامًا. أحب إنشاء مواقع أنيقة وأتمتة سير العمل لجعل الحياة أسهل. شغوف بالكود النظيف وحل المشكلات وجعل التكنولوجيا تعمل بذكاء وليس بجهد. دائمًا أستكشف التقنيات الجديدة، ودائمًا مستعد للتحدي. سواء كان تطوير ويب، أتمتة، أو شيئًا خارج نطاق راحتي - أنا مستعد.",
    "pages.index.works": "الأعمال",
    "pages.index.schools": "المدارس",
    "pages.index.certifications": "الشهادات",
  },
};

export const useTranslation =
  (lang: (typeof LOCALES)[number]) => (key: keyof (typeof texts)[(typeof LOCALES)[number]]) =>
    texts[lang][key] ?? key;
