// Global safety guards & stubs (handles any lingering browser cache or events)
window.stopSpeaking = function () {};
window.stopListening = function () {};
var audioBoothTranscript = null;

// Constants
const SENSOR_UPDATE_INTERVAL = 100; // ms
const PARTICLE_COUNT_DESKTOP = 40;
const PARTICLE_COUNT_MOBILE = 20;
const LOADING_DELAY = 1500; // ms

// Translations object
const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.axel': 'Robot AXEL',
    'nav.telemetry': 'Télémétrie IoT',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.blog': 'Blog',
    'nav.achievements': 'Réalisations',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Développeur IoT & Systèmes Embarqués',
    'hero.description': 'Passionné d\'IA et de robotique, je conçois des solutions innovantes qui connectent le monde physique au numérique avec une approche centrée sur l\'impact social.',
    'hero.contact': 'Me Contacter',
    'hero.download': 'Télécharger CV',
    'about.title': 'À propos',
    'about.bio1': 'Passionné par les technologies innovantes avec 3 ans d\'expérience dans le développement de solutions IoT. Mon expertise couvre les systèmes embarqués, l\'intelligence artificielle et la robotique, avec un focus particulier sur les applications ayant un impact social positif.',
    'about.bio2': 'Je crois fermement que la technologie doit servir l\'humanité. C\'est pourquoi je m\'attache à développer des solutions durables et accessibles qui améliorent concrètement la vie des utilisateurs.',
    'stats.projects': 'Projets IoT',
    'stats.experience': 'Années d\'expérience',
    'stats.awards': 'Prix Innovation',
    'skills.title': 'Compétences Clés',
    'skills.heading': 'Compétences',
    'skills.subtitle': 'Une expertise technique diversifiée au service de l\'innovation',
    'skills.cat1': 'Programmation',
    'skills.cat2': 'Systèmes Embarqués',
    'skills.cat3': 'IoT & Connectivité',
    'skills.cat4': 'IA & Robotique',
    'projects.heading': 'Projets',
    'projects.subtitle': 'Découvrez mes réalisations les plus marquantes',
    'projects.pfe.title': 'AXEL - Robot Semi-Humanoïde Intelligent',
    'projects.pfe.desc': 'Conception et réalisation d\'un robot semi-humanoïde modulaire intelligent basé sur ROS2, l\'intelligence artificielle et la vision par ordinateur (PFE chez DigiGrowing).',
    'projects.p1.title': 'Système IoT de Surveillance Santé',
    'projects.p1.desc': 'Plateforme complète de monitoring des signes vitaux en temps réel avec alertes intelligentes et tableau de bord médical avancé.',
    'projects.p2.title': 'Robot de Navigation Autonome',
    'projects.p2.desc': 'Robot intelligent capable de navigation autonome avec évitement d\'obstacles et cartographie SLAM en temps réel.',
    'projects.p3.title': 'IA de Diagnostic Phyto-Sanitaire',
    'projects.p3.desc': 'Modèle de Deep Learning (CNN) développé avec TensorFlow capable de détecter automatiquement les maladies des plantes et de proposer des solutions de traitement via un tableau de bord interactif.',
    'projects.p4.title': 'Maison Intelligente 3 Étages',
    'projects.p4.desc': 'Système domotique complet avec garage RFID, cuisine intelligente (détection température/gaz/flamme), balcon automatique (rentre vêtements si pluie), ascenseur 3 étages et dashboard mobile temps réel.',
    'projects.p5.title': 'Voiture Autonome avec Capteurs Ultrasoniques',
    'projects.p5.desc': 'Voiture robotique ultra-rapide avec détection d\'obstacles temps réel, scan gauche/droite pour optimisation de trajectoire et navigation autonome sans latence.',
    'projects.p6.title': 'Voiture Contrôlée par Bluetooth',
    'projects.p6.desc': 'Voiture robotique contrôlée via smartphone avec module Bluetooth HC-05. Application mobile pour contrôle direction et vitesse en temps réel.',
    'projects.filter.all': 'Tous les Projets',
    'projects.filter.robotics': 'Robotique & ROS2',
    'projects.filter.iot': 'IoT & Embarqué',
    'projects.filter.ai': 'IA & Deep Learning',
    'projects.filter.web': 'Web & EdTech',
    'projects.more': 'Voir plus de projets',
    'experience.heading': 'Expérience',
    'experience.subtitle': 'Mon parcours professionnel dans l\'écosystème technologique',
    'experience.exp1.role': 'Développeur Robotique & IA (PFE)',
    'experience.exp1.company': 'DigiGrowing',
    'experience.exp1.desc': 'Conception et développement du robot semi-humanoïde AXEL. Intégration de ROS2, MoveIt, vision par ordinateur, et traitement du langage naturel via Gemini API.',
    'experience.exp2.role': 'Développeur IoT & Full-Stack (Stage)',
    'experience.exp2.company': 'QuetraTech',
    'experience.exp2.desc': 'Développement d\'un système complet de gestion d\'accès RFID. Création du dashboard temps réel en React/Node.js et de la base de données de facturation.',
    'education.heading': 'Formation',
    'education.subtitle': 'Mon parcours académique et mes certifications',
    'education.edu1.title': 'Licence en Informatique : IoT & Systèmes Embarqués',
    'education.edu1.school': 'Institut Supérieur d\'Informatique de Mahdia (ISIMA)',
    'education.edu1.desc': 'Licence académique spécialisée en IoT, systèmes embarqués et intelligence artificielle à l\'ISIMA, couronnée par l\'obtention du diplôme et la réalisation de mon projet de fin d\'études AXEL.',
    'education.edu1.status': 'Diplômé en Juin 2026',
    'education.edu2.title': 'Baccalauréat en Sciences de l\'Informatique',
    'education.edu2.school': 'Lycée Secondaire',
    'education.edu2.desc': 'Formation fondamentale en algorithmique, programmation, bases de données et technologies du web.',
    'education.edu2.status': 'Obtenu',
    'blog.heading': 'Blog & Actus',
    'blog.subtitle': 'Partage de connaissances et actualités technologiques',
    'blog.b1.title': 'Introduction à ROS2 pour la Robotique Mobile',
    'blog.b1.desc': 'Découvrez les bases de ROS2, son architecture et comment l\'utiliser pour vos projets de robotique autonome.',
    'blog.b2.title': 'Sécuriser vos appareils IoT avec AWS IoT Core',
    'blog.b2.desc': 'Guide pratique sur la mise en œuvre de la sécurité, des certificats et des règles de message sur AWS.',
    'blog.b3.title': 'L\'IA embarquée : Déployer des modèles sur microcontrôleurs',
    'blog.b3.desc': 'Comment optimiser et déployer des réseaux de neurones légers (TinyML) sur ESP32 ou STM32.',
    'blog.read': 'Lire l\'article',
    'achievements.heading': 'Réalisations',
    'achievements.subtitle': 'Distinctions et engagements marquants',
    'achievements.prize.title': '1er Prix - Compétition du Meilleur Projet',
    'achievements.prize.desc': 'Obtention du 1er Prix Compétition pour Meilleur Projet PFE pour la conception et la réalisation du robot semi-humanoïde intelligent AXEL chez DigiGrowing.',
    'achievements.a1': 'Membre Actif Enactus (2024-2025)',
    'achievements.a2': 'Bénévole & Animateur - Ateliers Robotique (PNL & UE)',
    'achievements.a3': 'Contributeur Open Source IoT & Robotique',
    'contact.heading': 'Contact',
    'contact.subtitle': 'N\'hésitez pas à me contacter pour toute opportunité ou collaboration',
    'contact.stay': 'Restons en contact',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Téléphone',
    'contact.location.label': 'Adresse',
    'contact.location.value': 'Tunis, Tunisie',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'footer.copyright': '© 2026 Fedi Haddad. Tous droits réservés. Conçu avec passion.'
  },
  en: {
    'nav.home': 'Home',
    'nav.axel': 'AXEL Robot',
    'nav.telemetry': 'IoT Telemetry',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.blog': 'Blog',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',
    'hero.subtitle': 'IoT & Embedded Systems Developer',
    'hero.description': 'Passionate about AI and robotics, I design innovative solutions connecting the physical and digital worlds with a focus on social impact.',
    'hero.contact': 'Contact Me',
    'hero.download': 'Download CV',
    'about.title': 'About Me',
    'about.bio1': 'Passionate about innovative technologies with 3 years of experience in developing IoT solutions. My expertise spans embedded systems, artificial intelligence, and robotics, with a particular focus on positive social impact applications.',
    'about.bio2': 'I firmly believe that technology should serve humanity. That is why I focus on developing sustainable and accessible solutions that tangibly improve user lives.',
    'stats.projects': 'IoT Projects',
    'stats.experience': 'Years Experience',
    'stats.awards': 'Innovation Awards',
    'skills.title': 'Core Skills',
    'skills.heading': 'Skills',
    'skills.subtitle': 'Diverse technical expertise serving innovation',
    'skills.cat1': 'Programming',
    'skills.cat2': 'Embedded Systems',
    'skills.cat3': 'IoT & Connectivity',
    'skills.cat4': 'AI & Robotics',
    'projects.heading': 'Projects',
    'projects.subtitle': 'Discover my most outstanding work',
    'projects.pfe.title': 'AXEL - Intelligent Semi-Humanoid Robot',
    'projects.pfe.desc': 'Design and development of an intelligent modular semi-humanoid robot based on ROS2, AI, and computer vision (Graduation Project at DigiGrowing).',
    'projects.p1.title': 'IoT Health Monitoring System',
    'projects.p1.desc': 'Comprehensive vital signs real-time monitoring platform with smart alerts and advanced medical dashboard.',
    'projects.p2.title': 'Autonomous Navigation Robot',
    'projects.p2.desc': 'Intelligent robot capable of autonomous navigation, obstacle avoidance, and real-time SLAM mapping.',
    'projects.p3.title': 'Plant Disease Diagnostic AI',
    'projects.p3.desc': 'Deep Learning model (CNN) developed with TensorFlow able to automatically detect plant diseases and recommend treatment solutions via an interactive dashboard.',
    'projects.p4.title': '3-Floor Smart House',
    'projects.p4.desc': 'Complete home automation system with RFID garage, smart kitchen (temp/gas/flame detection), automated balcony (retracts clothes on rain), 3-floor elevator, and real-time mobile dashboard.',
    'projects.p5.title': 'Autonomous Ultrasonic Vehicle',
    'projects.p5.desc': 'High-speed robotic vehicle with real-time obstacle avoidance, left/right scanning for path optimization, and zero-latency autonomous navigation.',
    'projects.p6.title': 'Bluetooth Controlled Vehicle',
    'projects.p6.desc': 'Smartphone-controlled robotic car with HC-05 Bluetooth module. Custom mobile app for real-time steering and speed control.',
    'projects.filter.all': 'All Projects',
    'projects.filter.robotics': 'Robotics & ROS2',
    'projects.filter.iot': 'IoT & Embedded',
    'projects.filter.ai': 'AI & Deep Learning',
    'projects.filter.web': 'Web & EdTech',
    'projects.more': 'View more projects',
    'experience.heading': 'Experience',
    'experience.subtitle': 'My professional journey in the technology ecosystem',
    'experience.exp1.role': 'Robotics & AI Developer (Graduation Project)',
    'experience.exp1.company': 'DigiGrowing',
    'experience.exp1.desc': 'Design and development of the semi-humanoid robot AXEL. Integrated ROS2, MoveIt, computer vision, and NLP via Gemini API.',
    'experience.exp2.role': 'IoT & Full-Stack Developer (Internship)',
    'experience.exp2.company': 'QuetraTech',
    'experience.exp2.desc': 'Development of a complete RFID access control system. Created the React/Node.js real-time dashboard and automated billing database.',
    'education.heading': 'Education',
    'education.subtitle': 'My academic path and certifications',
    'education.edu1.title': 'Bachelor\'s in Computer Engineering: IoT & Embedded Systems',
    'education.edu1.school': 'Higher Institute of Computer Science of Mahdia (ISIMA)',
    'education.edu1.desc': 'Specialized academic bachelor\'s degree in IoT, embedded systems, and artificial intelligence at ISIMA, graduated in June 2026 with the defense of my AXEL graduation project.',
    'education.edu1.status': 'Graduated in June 2026',
    'education.edu2.title': 'High School Baccalaureate in Computer Science',
    'education.edu2.school': 'Secondary School',
    'education.edu2.desc': 'Foundational training in algorithms, programming, databases, and web technologies.',
    'education.edu2.status': 'Obtained',
    'blog.heading': 'Blog & News',
    'blog.subtitle': 'Knowledge sharing and technology updates',
    'blog.b1.title': 'Introduction to ROS2 for Mobile Robotics',
    'blog.b1.desc': 'Discover ROS2 basics, its architecture, and how to use it for autonomous robotics projects.',
    'blog.b2.title': 'Securing your IoT devices with AWS IoT Core',
    'blog.b2.desc': 'Practical guide to implementing security, certificates, and message rules on AWS.',
    'blog.b3.title': 'Embedded AI: Deploying models on microcontrollers',
    'blog.b3.desc': 'How to optimize and deploy lightweight neural networks (TinyML) on ESP32 or STM32.',
    'blog.read': 'Read article',
    'achievements.heading': 'Achievements',
    'achievements.subtitle': 'Awards and outstanding involvements',
    'achievements.prize.title': '1st Prize - Best Project Competition',
    'achievements.prize.desc': 'Won first place for designing and building the intelligent semi-humanoid robot AXEL in the annual ISIMA innovation competition.',
    'achievements.a1': 'Active Enactus Member (2024-2025)',
    'achievements.a2': 'Volunteer & Facilitator - Robotics Workshops (PNL & EU)',
    'achievements.a3': 'Open Source IoT & Robotics Contributor',
    'contact.heading': 'Contact',
    'contact.subtitle': 'Feel free to contact me for any opportunity or collaboration',
    'contact.stay': 'Let\'s stay in touch',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.location.label': 'Address',
    'contact.location.value': 'Tunis, Tunisia',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'footer.copyright': '© 2026 Fedi Haddad. All rights reserved. Designed with passion.'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.axel': 'الروبوت AXEL',
    'nav.telemetry': 'مراقبة IoT الحية',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.experience': 'الخبرة',
    'nav.education': 'التعليم',
    'nav.blog': 'المدونة',
    'nav.achievements': 'الإنجازات',
    'nav.contact': 'الاتصال',
    'hero.subtitle': 'مطور إنترنت الأشياء والأنظمة المدمجة',
    'hero.description': 'شغوف بالذكاء الاصطناعي والروبوتات، أصمم حلولاً مبتكرة تربط العالم المادي بالرقمي مع التركيز على التأثير الاجتماعي.',
    'hero.contact': 'اتصل بي',
    'hero.download': 'تحميل السيرة الذاتية',
    'about.title': 'من أنا',
    'about.bio1': 'شغوف بالتكنولوجيات الحديثة مع خبرة 3 سنوات في تطوير حلول إنترنت الأشياء (IoT). تشمل خبرتي الأنظمة المدمجة، الذكاء الاصطناعي والروبوتات، مع تركيز خاص على التطبيقات ذات التأثير الاجتماعي الإيجابي.',
    'about.bio2': 'أؤمن بشدة أن التكنولوجيا يجب أن تخدم الإنسانية، ولهذا أركز على تطوير حلول مستدامة وسهلة الاستخدام تحسن حياة المستخدمين بشكل ملموس.',
    'stats.projects': 'مشاريع منجزة',
    'stats.experience': 'سنوات الخبرة',
    'stats.awards': 'جوائز الابتكار',
    'skills.title': 'المهارات الأساسية',
    'skills.heading': 'المهارات',
    'skills.subtitle': 'خبرة تقنية متنوعة في خدمة الابتكار',
    'skills.cat1': 'البرمجة',
    'skills.cat2': 'الأنظمة المدمجة',
    'skills.cat3': 'الاتصال وإنترنت الأشياء',
    'skills.cat4': 'الذكاء الاصطناعي والروبوتات',
    'projects.heading': 'المشاريع',
    'projects.subtitle': 'اكتشف أبرز أعمالي وإنجازاتي',
    'projects.pfe.title': 'الروبوت شبه البشري الذكي AXEL',
    'projects.pfe.desc': 'تصميم وتطوير روبوت شبه بشري ذكي ومرن يعتمد على نظام ROS2 والذكاء الاصطناعي والرؤية الحاسوبية (مشروع تخرج في DigiGrowing).',
    'projects.p1.title': 'نظام مراقبة الصحة عبر إنترنت الأشياء',
    'projects.p1.desc': 'منصة متكاملة لمراقبة المؤشرات الحيوية في الوقت الفعلي مع تنبيهات ذكية ولوحة تحكم طبية متقدمة.',
    'projects.p2.title': 'روبوت الملاحة الذاتي',
    'projects.p2.desc': 'روبوت ذكي قادر على التنقل بشكل مستقل وتجنب العقبات ورسم الخرائط (SLAM) في الوقت الفعلي.',
    'projects.p3.title': 'ذكاء اصطناعي لتشخيص أمراض النباتات',
    'projects.p3.desc': 'نموذج تعلم عميق (CNN) مطور عبر TensorFlow قادر على الكشف التلقائي عن أمراض النباتات واقتراح العلاج عبر لوحة تحكم تفاعلية.',
    'projects.p4.title': 'منزل ذكي ثلاثي الطوابق',
    'projects.p4.desc': 'نظام منزلي ذكي متكامل بمرآب RFID، مطبخ ذكي (كشف الحرارة/الغاز/اللهب)، شرفة آلية (حماية الملابس عند المطر)، مصعد 3 طوابق، ولوحة تحكم للجوال.',
    'projects.p5.title': 'سيارة ذاتية بالموجات فوق الصوتية',
    'projects.p5.desc': 'سيارة روبوتية فائقة السرعة مع تجنب العقبات، مسح يمين/يسار لاختيار المسار الأمثل وملاحة ذاتية فورية.',
    'projects.p6.title': 'سيارة متحكم بها عبر البلوتوث',
    'projects.p6.desc': 'سيارة روبوتية متحكم بها عبر الهاتف الذكي باستخدام وحدة HC-05 Bluetooth وتطبيق جوال للتحكم في السرعة والاتجاه.',
    'projects.filter.all': 'جميع المشاريع',
    'projects.filter.robotics': 'الروبوتات ونظام ROS2',
    'projects.filter.iot': 'إنترنت الأشياء والأنظمة المدمجة',
    'projects.filter.ai': 'الذكاء الاصطناعي والتعلم العميق',
    'projects.filter.web': 'الويب وتكنولوجيا التعليم',
    'projects.more': 'عرض المزيد من المشاريع',
    'experience.heading': 'الخبرة المهنية',
    'experience.subtitle': 'مسيرتي المهنية في بيئة التكنولوجيا والابتكار',
    'experience.exp1.role': 'مطور روبوتات وذكاء اصطناعي (مشروع تخرج)',
    'experience.exp1.company': 'DigiGrowing',
    'experience.exp1.desc': 'تصميم وتطوير روبوت شبه بشري ذكي AXEL. دمج نظام ROS2 ومكتبة MoveIt، الرؤية الحاسوبية، ومعالجة اللغة الطبيعية عبر Gemini API.',
    'experience.exp2.role': 'مطور إنترنت الأشياء وفول ستاك (تدريب)',
    'experience.exp2.company': 'QuetraTech',
    'experience.exp2.desc': 'تطوير نظام متكامل لإدارة الوصول عبر RFID. إنشاء لوحة التحكم التفاعلية باستخدام React/Node.js ونظام الدفع والفوترة.',
    'education.heading': 'التعليم والشهادات',
    'education.subtitle': 'المسار الأكاديمي والشهادات المهنية',
    'education.edu1.title': 'بكالوريوس هندسة الحاسوب: إنترنت الأشياء والأنظمة المدمجة',
    'education.edu1.school': 'المعهد العالي للإعلامية بالمهدية (ISIMA)',
    'education.edu1.desc': 'دراسة أكاديمية متخصصة في إنترنت الأشياء، الأنظمة المدمجة والذكاء الاصطناعي في ISIMA، تكللت بالتخرج ومناقشة مشروع الروبوت AXEL.',
    'education.edu1.status': 'تخرج في يونيو 2026',
    'education.edu2.title': 'بكالوريا في علوم الإعلامية',
    'education.edu2.school': 'المدرسة الثانوية',
    'education.edu2.desc': 'دراسة أساسية في الخوارزميات، البرمجة، قواعد البيانات وتكنولوجيات الويب.',
    'education.edu2.status': 'حاصل عليها',
    'blog.heading': 'المدونة والأخبار',
    'blog.subtitle': 'مشاركة المعرفة وآخر أخبار التكنولوجيا',
    'blog.b1.title': 'مقدمة في نظام ROS2 للروبوتات المتنقلة',
    'blog.b1.desc': 'اكتشف أساسيات ROS2، بنيته البرمجية وكيفية استخدامه في مشاريع الروبوتات ذاتية القيادة.',
    'blog.b2.title': 'تأمين أجهزة إنترنت الأشياء باستخدام AWS IoT Core',
    'blog.b2.desc': 'دليل عملي لتطبيق الحماية الرقمية، الشهادات الأمنية وقواعد البيانات على منصة AWS.',
    'blog.b3.title': 'الذكاء الاصطناعي المدمج: تشغيل النماذج على المعالجات الدقيقة',
    'blog.b3.desc': 'كيفية تحسين وتدريب الشبكات العصبية الخفيفة (TinyML) لتشغيلها على معالجات ESP32 أو STM32.',
    'blog.read': 'اقرأ المقال',
    'achievements.heading': 'الإنجازات والنشاطات',
    'achievements.subtitle': 'الجوائز والتكريمات والعمل التطوعي',
    'achievements.prize.title': 'المركز الأول - مسابقة أفضل مشروع تخرج',
    'achievements.prize.desc': 'الفوز بالمركز الأول في مسابقة الابتكار السنوية لجامعة ISIMA عن تصميم وتطوير الروبوت شبه البشري AXEL.',
    'achievements.a1': 'عضو نشط في منظمة Enactus (2024-2025)',
    'achievements.a2': 'متطوع ومنشط - ورشات الروبوتات للأطفال (جمعية PNL والاتحاد الأوروبي)',
    'achievements.a3': 'مساهم في المشاريع المفتوحة لإنترنت الأشياء والروبوتات',
    'contact.heading': 'اتصل بي',
    'contact.subtitle': 'لا تتردد في الاتصال بي لمناقشة فرص العمل أو التعاون المشترك',
    'contact.stay': 'ابق على اتصال',
    'contact.email.label': 'البريد الإلكتروني',
    'contact.phone.label': 'الهاتف',
    'contact.location.label': 'العنوان',
    'contact.location.value': 'تونس، تونس',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'footer.copyright': '© 2026 فادي حداد. جميع الحقوق محفوظة. صمم بشغف للابتكار.'
  }
};


// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function () {
  try {
    // Loading screen
    const loading = document.getElementById('loading');
    if (loading) {
      setTimeout(() => {
        loading.classList.add('hidden');
      }, LOADING_DELAY);
    }

    // Theme toggle
    initThemeToggle();

    // Mobile menu toggle
    initMobileMenu();

    // Navigation
    initNavigation();

    // Chatbot
    initChatbot();

    // Contact form
    initContactForm();

    // Scroll animations
    initScrollAnimations();
    initStatCounters();

    // Update active nav link on scroll
    initActiveNavOnScroll();

    // Language switcher
    initLanguageSwitcher();

    // Project Category Filters
    initProjectFilters();

    // Project Detail Modal
    initProjectModal();

    // Interactive IoT Telemetry Simulator
    initTelemetrySimulator();

    // AXEL 5-Pillar Tabs & Friendly Mascot
    initAxelTabs();
    initFriendlyMascot();

  } catch (error) {
    console.error('Error initializing portfolio:', error);
  }
});

// Theme Toggle
function initThemeToggle() {
  try {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      const icon = themeToggle.querySelector('i');

      body.setAttribute('data-theme', newTheme);
      if (icon) {
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
      }

      localStorage.setItem('theme', newTheme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    const themeIcon = themeToggle.querySelector('i');
    if (themeIcon && savedTheme === 'light') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  } catch (error) {
    console.error('Error initializing theme toggle:', error);
  }
}

// Mobile Menu
function initMobileMenu() {
  try {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
      // Update ARIA attribute
      const isExpanded = navLinks.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  } catch (error) {
    console.error('Error initializing mobile menu:', error);
  }
}

// Navigation
function initNavigation() {
  try {
    const navLinksElements = document.querySelectorAll('.nav-link');
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');

    navLinksElements.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });

          // Update active nav link
          navLinksElements.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          // Close mobile menu
          if (navLinks && menuToggle) {
            navLinks.classList.remove('active');
            const menuIcon = menuToggle.querySelector('i');
            if (menuIcon) {
              menuIcon.classList.add('fa-bars');
              menuIcon.classList.remove('fa-times');
            }
            menuToggle.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  } catch (error) {
    console.error('Error initializing navigation:', error);
  }
}





// Text-only Chatbot functionality
function initChatbot() {
  try {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');

    if (!chatbot || !chatbotToggle || !chatbotClose || !chatbotMessages || !chatbotInput || !chatbotSend) return;

    let conversationHistory = [];

    // Toggle Chatbot
    chatbotToggle.addEventListener('click', () => {
      const isActive = chatbot.classList.contains('active');
      if (isActive) {
        chatbot.classList.remove('active');
        chatbotToggle.setAttribute('aria-expanded', 'false');
      } else {
        chatbot.classList.add('active');
        chatbotToggle.setAttribute('aria-expanded', 'true');
        chatbotInput.focus();
      }
    });

    chatbotClose.addEventListener('click', () => {
      chatbot.classList.remove('active');
      chatbotToggle.setAttribute('aria-expanded', 'false');
    });

    // Intelligent AI Response Engine
    const geminiApiKey = localStorage.getItem('gemini_api_key') || '';
    const fallbackModels = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-1.5-pro', 'gemini-2.5-flash'];

    async function getIntelligentResponse(query) {
      if (!geminiApiKey) {
        return getStaticResponse(query);
      }

      const systemInstruction = `
You are the Virtual Assistant for Fedi Haddad. Never mention the underlying AI model name.
Fedi Haddad is an IoT & Embedded Systems Developer passionate about AI and robotics based in Tunis, Tunisia.
Always respond in the same language as the user's message (French, English, or Arabic).
Be polite, concise, professional, and helpful (maximum 2 short paragraphs).
Speak in the third person as Fedi's AI assistant (e.g. "Fedi a développé...", "Fedi est spécialisé en...").

Fedi's Key Information:
- Role: IoT & Embedded Systems Developer / Computer Engineer
- Education: Licence in IoT & Embedded Systems from ISIMA (Graduated June 2026), Baccalaureate in Computer Science (2023).
- Flagship Project: AXEL Robot (June 2026 PFE at DigiGrowing) - Modular intelligent semi-humanoid robot with ROS2, Computer Vision, MoveIt, NLP / Gemini API. Won 1st Prize for Best Project at ISIMA Innovation Competition.
- EdTech & Web Platform: BideyaBoost (bideyaboost.tn) - Interactive educational orientation and career guidance platform for Tunisian students developed with Next.js, React, TypeScript, Tailwind CSS and AWS Cloud.
- Other Projects: 3-Floor Smart House (RFID, ESP32, elevator, mobile dashboard), Autonomous Ultrasonic Obstacle-Avoiding Car, Bluetooth Controlled Car, Plant Disease Detection AI (CNN/TensorFlow), RFID Access Control System (QuetraTech), IoT Health Monitoring System.
- Certifications: Certified Hashgraph Developer (Dec 2024), NVIDIA DLI (Deep Learning & Multi-GPU), AWS IoT Core (2024), Active Enactus Member.
- Contact: fedihaddad76@gmail.com | +216 58 666 779 | LinkedIn: linkedin.com/in/fedi-haddad-aa59aa243/ | GitHub: github.com/fedihaddad | Website: fedihaddad.me
`;

      conversationHistory.push({
        role: 'user',
        parts: [{ text: query }]
      });

      // Keep conversation history compact
      if (conversationHistory.length > 8) {
        conversationHistory = conversationHistory.slice(-8);
      }

      for (const model of fallbackModels) {
        try {
          const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiApiKey}`;
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: conversationHistory,
              systemInstruction: { parts: [{ text: systemInstruction }] },
              generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.7
              }
            })
          });

          if (!response.ok) {
            console.warn(`Model ${model} returned HTTP ${response.status}, trying next fallback...`);
            continue;
          }

          const data = await response.json();
          if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
            const botReply = data.candidates[0].content.parts[0].text;
            conversationHistory.push({
              role: 'model',
              parts: [{ text: botReply }]
            });
            return botReply;
          }
        } catch (err) {
          console.warn(`Error connecting to model ${model}:`, err);
        }
      }

      // Static fallback if all network requests fail
      return getStaticResponse(query);
    }

    function getStaticResponse(query) {
      const q = query.toLowerCase();
      const currentLang = localStorage.getItem('language') || 'fr';
      if (q.match(/axel|digigrowing|humanoïde|humanoid|pfe|robot.*semi/)) return getResponse(currentLang, 'axel');
      if (q.match(/qui|who|من|fedi|présente|present/)) return getResponse(currentLang, 'intro');
      if (q.match(/python|java|c\+\+|javascript|rust|go|programmation|language/)) return getResponse(currentLang, 'programming');
      if (q.match(/iot|mqtt|lora|lorawan|zigbee|bluetooth|ble|aws.*iot/)) return getResponse(currentLang, 'iot');
      if (q.match(/ia|ai|deep.*learning|machine.*learning|tensorflow|cnn|vision|opencv/)) return getResponse(currentLang, 'ai');
      if (q.match(/robot|robotique|روبوت|ros|ros2|moveit|slam|navigation|rviz/)) return getResponse(currentLang, 'robotics');
      if (q.match(/arduino|esp32|stm32|raspberry|embarqué|embedded|microcontrôleur/)) return getResponse(currentLang, 'embedded');
      if (q.match(/compétence|skill|مهارات/)) return getResponse(currentLang, 'skills');
      if (q.match(/projet|project|مشاريع|maison|car|voiture|santé/)) return getResponse(currentLang, 'projects');
      if (q.match(/expérience|experience|stage|quetratech|خبرة/)) return getResponse(currentLang, 'experience');
      if (q.match(/formation|education|isima|licence|bac|دراسة|تعليم/)) return getResponse(currentLang, 'education');
      if (q.match(/certification|certificate|nvidia|hashgraph|hedera|enactus|شهادات/)) return getResponse(currentLang, 'certifications');
      if (q.match(/contact|email|téléphone|phone|adresse|linkedin|اتصال/)) return getResponse(currentLang, 'contact');
      return getResponse(currentLang, 'default');
    }

    function getResponse(lang, type) {
      const responses = {
        fr: {
          intro: `Je suis l'assistant IA de Fedi Haddad. Fedi est un développeur IoT et systèmes embarqués passionné d'IA et de robotique, diplômé d'ISIMA (Juin 2026) et créateur du robot AXEL primé au 1er Prix d'Innovation ! 🚀`,
          axel: `🤖 Le projet AXEL est le projet phare de Fedi (PFE chez DigiGrowing) !\n• Robot semi-humanoïde modulaire intelligent basé sur ROS2 et MoveIt.\n• Intégration de vision par ordinateur (OpenCV) et IA conversationnelle multilingue (Gemini API).\n• Récompensé par le 🏆 1er Prix Compétition pour Meilleur Projet PFE.`,
          skills: `🎯 Compétences clés de Fedi:\n• Systèmes Embarqués: Arduino, ESP32, STM32, Raspberry Pi, FPGA\n• IoT & Cloud: MQTT, LoRaWAN, BLE, AWS IoT Core\n• IA & Robotique: ROS2, MoveIt, TensorFlow, Computer Vision, Gemini API\n• Programmation: C/C++, Python, JavaScript, Java, Go, Rust`,
          programming: `💻 Langages maîtrisés par Fedi:\n• C/C++ : Programmation bas niveau, microcontrôleurs et nœuds ROS2 temps réel.\n• Python : Intelligence Artificielle, Deep Learning (TensorFlow/Keras), Computer Vision et scripts robotiques.\n• JavaScript / TypeScript : Dashboards interactifs IoT, Node.js et React.\n• Java, Rust & Go : Algorithmique et architectures logicielles distribuées.`,
          iot: `📡 Expertise IoT & Connectivité:\n• Protocoles : MQTT, LoRaWAN, BLE (Bluetooth Low Energy), Zigbee, WiFi, NB-IoT.\n• Cloud IoT : Amazon AWS IoT Core, intégration broker et télémétrie temps réel.\n• Réalisations : Système de surveillance médicale, maison intelligente 3 étages, contrôle d'accès industriel RFID.`,
          ai: `🧠 Intelligence Artificielle & Deep Learning:\n• Détection de maladies des plantes par réseaux convolutionnels (CNN/TensorFlow).\n• Vision par ordinateur sous OpenCV pour navigation et détection d'objets.\n• Modèles multimodaux et LLMs (Gemini API) intégrés sur robot interactif.`,
          robotics: `🦾 Robotique & ROS2:\n• AXEL : Robot semi-humanoïde sous ROS2 Humble avec MoveIt et RViz.\n• Robot mobile autonome avec cartographie SLAM 2D/3D et LIDAR.\n• Cinématique directe/inverse et évitement dynamique d'obstacles.`,
          embedded: `⚡ Systèmes Embarqués & Hardware:\n• Microcontrôleurs : ESP32 (WiFi/BLE), STM32 (ARM Cortex), Arduino Uno/Mega, Raspberry Pi 4.\n• Conception et câblage électronique, capteurs industriels (ultrasons, RFID, gaz, température, LIDAR).\n• FPGA et architectures matérielles.`,
          projects: `🚀 Projets majeurs:\n1️⃣ Robot AXEL (PFE DigiGrowing) - ROS2 & IA (1er Prix)\n2️⃣ Plateforme BideyaBoost (bideyaboost.tn) - Orientation & EdTech\n3️⃣ Surveillance Santé IoT (MQTT & ESP32)\n4️⃣ Maison Intelligente 3 Étages (Arduino + ESP32 + RFID)\n5️⃣ IA Diagnostic Plantes (CNN/TensorFlow)\n6️⃣ Robot Autonome SLAM & Navigation`,
          experience: `💼 Expérience de Fedi:\n• DigiGrowing (2026): Développeur Robotique & IA (Robot AXEL)\n• QuetraTech (2025): Développeur IoT & Full-Stack (Système RFID & Facturation)`,
          education: `🎓 Formation:\n• Licence IoT & Systèmes Embarqués - ISIMA (Diplômé Juin 2026)\n• Baccalauréat en Informatique (2023)\n• Certifié Hashgraph Developer, NVIDIA DLI, AWS IoT Core`,
          certifications: `🏆 Certifications obtenues:\n• Certified Hashgraph Developer (The Hashgraph Association, Déc 2024)\n• Multi-GPU Deep Learning & Fundamentals (NVIDIA DLI, 2024)\n• AWS IoT Core Certification (Amazon Web Services, 2024)\n• Membre Actif Enactus Tunisia (2024-2025)`,
          contact: `📧 Contactez Fedi:\n• Email: fedihaddad76@gmail.com\n• Téléphone: +216 58 666 779\n• Localisation: Tunis, Tunisie\n• LinkedIn: linkedin.com/in/fedi-haddad-aa59aa243/`,
          default: `Je suis l'assistant IA de Fedi. Posez-moi des questions sur ses compétences en IoT, son robot AXEL, ses projets ou son contact !`
        },
        en: {
          intro: `I am Fedi Haddad's AI Assistant. Fedi is an IoT & Embedded Systems Developer graduated from ISIMA (June 2026) and creator of the award-winning AXEL robot! 🚀`,
          axel: `🤖 The AXEL Robot is Fedi's flagship graduation project at DigiGrowing!\n• Modular intelligent semi-humanoid robot powered by ROS2 and MoveIt.\n• Integrated computer vision (OpenCV) and multilingual conversational AI (Gemini API).\n• Awarded 🏆 1st Prize at the ISIMA National Innovation Competition.`,
          skills: `🎯 Fedi's Key Skills:\n• Embedded: Arduino, ESP32, STM32, Raspberry Pi\n• IoT & Cloud: MQTT, LoRaWAN, BLE, AWS IoT Core\n• AI & Robotics: ROS2, MoveIt, TensorFlow, Computer Vision\n• Languages: C/C++, Python, JavaScript, Java, Go, Rust`,
          programming: `💻 Programming Languages:\n• C/C++: Low-level embedded firmware and real-time ROS2 nodes.\n• Python: Deep Learning (TensorFlow/Keras), OpenCV, and robotics pipelines.\n• JavaScript/TS: Web dashboards, Node.js, and React.\n• Java, Rust & Go: Algorithms and backend architectures.`,
          iot: `📡 IoT & Connectivity Expertise:\n• Protocols: MQTT, LoRaWAN, Bluetooth Low Energy (BLE), Zigbee, WiFi.\n• Cloud IoT: AWS IoT Core, telemetry streams and device management.\n• Solutions: Smart telemetry, RFID access control, and 3-floor smart home.`,
          ai: `🧠 AI & Computer Vision:\n• Plant disease diagnostic CNN trained with TensorFlow.\n• Real-time OpenCV vision pipelines for object detection and obstacle avoidance.\n• Multimodal NLP using Gemini API for robot vocal interactions.`,
          robotics: `🦾 Robotics & ROS2:\n• AXEL Semi-Humanoid Robot built with ROS2 Humble, MoveIt, and RViz.\n• Autonomous mobile robot with SLAM mapping and LIDAR navigation.\n• Kinematics, trajectory planning, and hardware integration.`,
          embedded: `⚡ Embedded Systems:\n• Hardware: ESP32, STM32 ARM Cortex, Arduino Uno/Mega, Raspberry Pi.\n• Sensors: LIDAR, ultrasonic, RFID RC522, gas/temp, motor drivers.\n• FPGA and digital electronics.`,
          projects: `🚀 Major Projects:\n1️⃣ Semi-Humanoid Robot AXEL (1st Prize Winner)\n2️⃣ BideyaBoost Platform (bideyaboost.tn) - EdTech & Career Guidance\n3️⃣ IoT Health Monitoring (MQTT & ESP32)\n4️⃣ 3-Floor Smart House (RFID, ESP32)\n5️⃣ Plant Disease AI (CNN)\n6️⃣ Autonomous SLAM Mobile Robot`,
          experience: `💼 Experience:\n• DigiGrowing (2026): Robotics & AI Developer\n• QuetraTech (2025): IoT & Full-Stack Developer`,
          education: `🎓 Education:\n• Bachelor's in IoT & Embedded Systems - ISIMA (2026)\n• Certified Hashgraph Developer, NVIDIA DLI, AWS IoT Core`,
          certifications: `🏆 Certifications:\n• Certified Hashgraph Developer (The Hashgraph Association, Dec 2024)\n• Multi-GPU Deep Learning & Fundamentals (NVIDIA DLI, 2024)\n• AWS IoT Core (Amazon Web Services, 2024)\n• Active Enactus Member (2024-2025)`,
          contact: `📧 Contact Fedi:\n• Email: fedihaddad76@gmail.com\n• Phone: +216 58 666 779\n• Location: Tunis, Tunisia`,
          default: `I am Fedi's AI Assistant. Ask me about his IoT skills, AXEL robot, projects, or contact info!`
        },
        ar: {
          intro: `أنا المساعد الذكي لفادي حداد. فادي مطور إنترنت الأشياء والأنظمة المدمجة خريج جامعة ISIMA ومصمم روبوت AXEL الفائز بالمركز الأول! 🚀`,
          axel: `🤖 روبوت AXEL هو المشروع الرائد لفادي (مشروع التخرج في DigiGrowing)!\n• روبوت شبه بشري ذكي ومرن مبني على نظام ROS2 ومكتبة MoveIt.\n• دمج الرؤية الحاسوبية (OpenCV) ومعالجة اللغة والذكاء التوليدي (Gemini API).\n• فائز بـ 🏆 المركز الأول في مسابقة الابتكار السنوية لجامعة ISIMA.`,
          skills: `🎯 مهارات فادي:\n• الأنظمة المدمجة: Arduino, ESP32, STM32, Raspberry Pi\n• إنترنت الأشياء: MQTT, LoRaWAN, BLE, AWS IoT Core\n• الروبوتات والذكاء الاصطناعي: ROS2, MoveIt, TensorFlow, Computer Vision\n• البرمجة: C/C++, Python, JavaScript, Java, Go, Rust`,
          programming: `💻 لغات البرمجة:\n• C/C++: برمجة الأنظمة المدمجة وبروتوكولات ROS2 المباشرة.\n• Python: التعلم العميق (TensorFlow)، الرؤية الحاسوبية ومعالجة البيانات.\n• JavaScript: لوحات التحكم التفاعلية وNode.js.\n• Java, Rust & Go: الخوارزميات والأنظمة الموزعة.`,
          iot: `📡 إنترنت الأشياء والاتصال:\n• البروتوكولات: MQTT, LoRaWAN, BLE, Zigbee, WiFi.\n• الحوسبة السحابية: AWS IoT Core، إدارة الأجهزة وتدفق البيانات الحية.\n• الحلول: المنازل الذكية، التحكم بالوصول ومراقبة الصحة.`,
          ai: `🧠 الذكاء الاصطناعي والرؤية الحاسوبية:\n• نموذج CNN للكشف التلقائي عن أمراض النباتات.\n• رؤية حاسوبية في الوقت الفعلي عبر OpenCV لتجنب العوائق وتتبع الأجسام.\n• التفاعل الصوتي الذكي باستخدام نماذج Gemini.`,
          robotics: `🦾 الروبوتات ونظام ROS2:\n• روبوت AXEL شبه البشري باستخدام ROS2 Humble وMoveIt.\n• روبوت الملاحة الذاتي وتقنية SLAM مع مستشعر LIDAR.\n• حساب المسارات والتحكم الميكانيكي في الأذرع.`,
          embedded: `⚡ الأنظمة المدمجة والمعالجات:\n• المتحكمات: ESP32, STM32, Arduino, Raspberry Pi 4.\n• أجهزة الاستشعار: RFID, LIDAR, غاز, حرارة, محركات خطوية.\n• دوائر FPGA والإلكترونيات الرقمية.`,
          projects: `🚀 أبرز المشاريع:\n1️⃣ روبوت شبه بشري AXEL (فائز بالمركز الأول)\n2️⃣ منصة BideyaBoost (bideyaboost.tn) - التوجيه الجامعي وتكنولوجيا التعليم\n3️⃣ نظام مراقبة الصحة IoT (MQTT و ESP32)\n4️⃣ منزل ذكي بـ 3 طوابق (RFID + ESP32)\n5️⃣ ذكاء اصطناعي لتشخيص النباتات\n6️⃣ روبوت ملاحة ذاتية SLAM`,
          experience: `💼 الخبرة:\n• DigiGrowing (2026): مطور روبوتات وذكاء اصطناعي\n• QuetraTech (2025): مطور IoT وفول ستاك`,
          education: `🎓 التعليم:\n• بكالوريوس إنترنت الأشياء والأنظمة المدمجة - ISIMA (2026)\n• شهادات معتمدة: Hashgraph, NVIDIA DLI, AWS IoT Core`,
          certifications: `🏆 الشهادات المهنية:\n• مطور معتمد Hedera Hashgraph (ديسمبر 2024)\n• شهادات معهد NVIDIA للتعلم العميق (2024)\n• شهادة AWS IoT Core الاحترافية (2024)\n• عضو نشط في منظمة Enactus (2024-2025)`,
          contact: `📧 اتصل بفادي:\n• البريد: fedihaddad76@gmail.com\n• الهاتف: 779 666 58 216+`,
          default: `أنا مساعد فادي الذكي. اسألني عن مهاراته، روبوت AXEL، مشاريعه أو معلومات التواصل!`
        }
      };
      return responses[lang][type] || responses['fr'][type];
    }

    // Send Message Handler
    async function sendMessage() {
      const message = chatbotInput.value.trim();
      if (!message) return;

      const sanitizedMessage = message.replace(/<[^>]*>/g, '');
      appendMessage('user', sanitizedMessage);
      chatbotInput.value = '';

      // Show typing indicator
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'message bot typing-indicator-msg';
      typingIndicator.id = 'typingIndicator';
      typingIndicator.innerHTML = `
        <div class="msg-content">
          <span class="dot-flashing"></span>
          <span class="dot-flashing"></span>
          <span class="dot-flashing"></span>
        </div>
      `;
      chatbotMessages.appendChild(typingIndicator);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

      try {
        const botReply = await getIntelligentResponse(sanitizedMessage);
        
        const typingEl = document.getElementById('typingIndicator');
        if (typingEl) typingEl.remove();

        appendMessage('bot', botReply);
      } catch (err) {
        console.error('Chatbot error:', err);
        const typingEl = document.getElementById('typingIndicator');
        if (typingEl) typingEl.remove();

        const currentLang = localStorage.getItem('language') || 'fr';
        const fallbackText = getResponse(currentLang, 'default');
        appendMessage('bot', fallbackText);
      }
    }

    function appendMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `message ${sender}`;

      if (sender === 'bot') {
        const formattedText = formatBotText(text);
        msgDiv.innerHTML = `<div class="msg-content">${formattedText}</div>`;
      } else {
        msgDiv.innerHTML = `<div class="msg-content">${escapeHtml(text)}</div>`;
      }

      chatbotMessages.appendChild(msgDiv);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function formatBotText(text) {
      if (!text) return '';
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // Close chatbot when clicking outside
    document.addEventListener('click', (e) => {
      if (chatbot && chatbotToggle && !chatbot.contains(e.target) && !chatbotToggle.contains(e.target)) {
        chatbot.classList.remove('active');
        chatbotToggle.setAttribute('aria-expanded', 'false');
      }
    });
  } catch (error) {
    console.error('Error initializing chatbot:', error);
  }
}

// Contact form handling with Formspree AJAX
function initContactForm() {
  try {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const message = contactForm.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        alert('Veuillez remplir les champs obligatoires.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Envoyé !';
          contactForm.reset();
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }, 3000);
        } else {
          throw new Error('Formspree error');
        }
      } catch (error) {
        console.error('Submission error:', error);
        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Erreur';
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3000);
        alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      }
    });
  } catch (error) {
    console.error('Error initializing contact form:', error);
  }
}

// Scroll animations
function initScrollAnimations() {
  try {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
          entry.target.classList.add('animate-on-scroll');
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .section-header, .hero-left, .hero-right > div').forEach(el => {
      observer.observe(el);
    });

    // Observe certification timeline items with stagger effect
    const certTimelineItems = document.querySelectorAll('.cert-timeline-item');
    certTimelineItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.15}s`;
      observer.observe(item);
    });
  } catch (error) {
    console.error('Error initializing scroll animations:', error);
  }
}

// Kinetic Number Counters Animation for Metrics Strip
function initStatCounters() {
  try {
    const metricBoxes = document.querySelectorAll('.metrics-grid .metric-box');
    if (!metricBoxes.length) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          metricBoxes.forEach((box, idx) => {
            const numEl = box.querySelector('.metric-number');
            if (!numEl) return;
            const text = numEl.textContent.trim();

            if (text.includes('15+')) {
              animateCounter(numEl, 0, 15, '+', 1200);
            } else if (text.includes('4+')) {
              animateCounter(numEl, 0, 4, '+', 1000);
            } else {
              numEl.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease';
              numEl.style.transform = 'scale(0.8)';
              numEl.style.opacity = '0';
              setTimeout(() => {
                numEl.style.transform = 'scale(1)';
                numEl.style.opacity = '1';
              }, idx * 120);
            }
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.25 });

    const container = document.querySelector('.metrics-strip');
    if (container) observer.observe(container);

    function animateCounter(el, start, end, suffix, duration) {
      let startTime = null;
      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Easing out quad
        const eased = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(start + (end - start) * eased);
        el.textContent = `${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = `${end}${suffix}`;
        }
      }
      requestAnimationFrame(step);
    }
  } catch (err) {
    console.error('Error initializing stat counters:', err);
  }
}

// Update active nav link on scroll
function initActiveNavOnScroll() {
  try {
    let ticking = false;

    function updateActiveNavOnScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = document.querySelectorAll('section[id]');
          const scrollPos = window.scrollY + 100;

          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
              document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
              });
              if (navLink) {
                navLink.classList.add('active');
              }
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', updateActiveNavOnScroll);
  } catch (error) {
    console.error('Error initializing active nav on scroll:', error);
  }
}

// Language Switcher
function initLanguageSwitcher() {
  try {
    const languageButtons = document.querySelectorAll('.language-btn');
    const languageSelector = document.querySelector('.language-selector');
    const body = document.body;

    // Load saved language or default to French
    const savedLang = localStorage.getItem('language') || 'fr';
    setLanguage(savedLang);

    // Mobile dropdown toggle
    if (window.innerWidth <= 768) {
      languageSelector.addEventListener('click', (e) => {
        if (e.target.classList.contains('language-btn') && !e.target.classList.contains('active')) {
          // Clicking inactive button - select it
          const lang = e.target.getAttribute('data-lang');
          setLanguage(lang);
          localStorage.setItem('language', lang);
          languageSelector.classList.remove('expanded');
        } else if (e.target.classList.contains('active') || e.target.closest('.language-btn.active')) {
          // Clicking active button - toggle dropdown
          languageSelector.classList.toggle('expanded');
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!languageSelector.contains(e.target)) {
          languageSelector.classList.remove('expanded');
        }
      });
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        languageSelector.classList.remove('expanded');
      }
    });

    languageButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.innerWidth > 768) {
          const lang = btn.getAttribute('data-lang');
          setLanguage(lang);
          localStorage.setItem('language', lang);
        }
      });
    });

    function setLanguage(lang) {
      // Update active button
      languageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('active');
        }
      });

      // Update body direction for Arabic
      if (lang === 'ar') {
        body.setAttribute('dir', 'rtl');
      } else {
        body.setAttribute('dir', 'ltr');
      }

      // Update all translatable elements
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          element.textContent = translations[lang][key];
        }
      });

      // Add fade-in animation to translated elements
      elements.forEach((element, index) => {
        element.style.animation = 'none';
        setTimeout(() => {
          element.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s forwards`;
        }, 10);
      });
    }
  } catch (error) {
    console.error('Error initializing language switcher:', error);
  }
}

// Project Category Filters
function initProjectFilters() {
  try {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category === filter || category.includes(filter)) {
            card.removeAttribute('data-hidden');
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          } else {
            card.setAttribute('data-hidden', 'true');
            card.style.display = 'none';
          }
        });
      });
    });
  } catch (err) {
    console.error('Error initializing project filters:', err);
  }
}

// Project Details Data & Modal Logic
// Project Details Data & Modal Logic
const projectDetailsData = {
  axel: {
    title: "AXEL — AI-Powered Semi-Humanoid Robot & 3D Desktop Platform",
    badge: "🏆 1er Prix Compétition pour Meilleur Projet PFE (DigiGrowing)",
    category: "Robotique, ROS 2 Jazzy, Electron 3D & IA Multilingue",
    image: "logo_axel.webp",
    status: "Système Validé & Opérationnel (1er Prix)",
    role: "Software Developer · AI & Robotics Engineer",
    org: "DigiGrowing / ISIMA (Mahdia, Tunisie)",
    arch: "23 DOF • ROS 2 Jazzy & Electron Desktop",
    cpu: "Raspberry Pi 5 (Quad ARM @ 2.4GHz)",
    proto: "ROSBridge WebSocket (ws://axel.local:9090)",
    validation: "1er Prix Compétition pour Meilleur Projet PFE",
    description: "AXEL est une plateforme robotique semi-humanoïde intelligente modulaire développée lors de mon Projet de Fin d'Études (PFE) chez DigiGrowing (couronnée par le 1er Prix Compétition pour Meilleur Projet PFE). La plateforme logicielle a été conçue comme une application de bureau dédiée (Electron, React, TypeScript, Tailwind CSS, Three.js) reliée au middleware ROS 2 Jazzy via ROSBridge over WebSockets (ws://axel.local:9090). Elle intègre la visualisation 3D du modèle robotique sous Three.js, la planification de trajectoire MoveIt 2 sur une architecture 23 DOF avec Pick & Place autonome, et une perception avancée unissant vision OpenCV (tracking squelettique 17 repères) et interaction vocale multilingue en Darija Tunisienne 🇹🇳.",
    requirements: [
      "Application Desktop Dédiée : Interface native sous Electron, React, TypeScript et Tailwind CSS combinant composants réutilisables et streaming temps réel.",
      "Visualisation 3D Interactive : Rendu 3D sous Three.js permettant l'inspection multi-angles, l'exploration de la structure articulaire URDF et l'affichage des trajectoires de motion-planning.",
      "Communication ROS 2 & ROSBridge : Architecture WebSocket basée sur nom d'hôte (ws://axel.local:9090) avec gestion automatique des retries pour découpler l'UI du hardware physique.",
      "Simulation & Motion Planning : Pile robotique ROS 2 Jazzy, MoveIt 2 et RViz pour cinématique 23 DOF et préhension autonome d'objets (Pick & Place).",
      "Perception & Voix Darija 🇹🇳 : Dialogue vocal en Darija Tunisienne, détection faciale, reconnaissance de gestes et estimation de posture 17 repères squelettiques."
    ],
    archDetail: "Architecture modulaire inter-couches reliant l'application desktop superviseur au monde physique : Niveau 1 (Desktop Electron · React · TypeScript · Three.js) ↔ Niveau 2 (WebSocket ROSBridge · ws://axel.local:9090 · Retry Handling) ↔ Niveau 3 (Middleware ROS 2 Jazzy · MoveIt 2 · Topics & Services) ↔ Niveau 4 (Raspberry Pi 5 · Contrôleurs PCA9685 I2C · 23 Servomoteurs Haute Précision & Caméra HD).",
    hardwareList: [
      "Raspberry Pi 5 (8 GB RAM)",
      "23x Servomoteurs Haute Précision Calibrés",
      "Caméra HD Grand Angle 1080p",
      "Microphone Array USB Directionnel",
      "Contrôleurs PWM PCA9685 I2C",
      "Alimentation Industrielle Dédiée 5V / 10A"
    ],
    challenge: "Coordonner des technologies hétérogènes aux responsabilités distinctes : intégrer une application desktop Electron communicant via WebSockets à faible latence (< 80ms) avec ROS 2 Jazzy, gérer les reconnexions résilientes par nom d'hôte (ws://axel.local:9090), rendre un modèle 3D interactif sous Three.js tout en traitant les flux de vision et la voix dialectale en direct.",
    solution: "Conception d'une architecture distribuée découplée : MoveIt 2 et RViz gèrent la cinématique inverse et la simulation d'évitement d'obstacles, ROSBridge assure le pont WebSocket asynchrone, Three.js restitue la posture 3D et les trajectoires planifiées, et un pipeline OpenCV/NLP traite les flux de perception sans impacter la cadence cinématique.",
    specs: ["Electron Desktop App", "React & TypeScript", "Tailwind CSS", "Three.js 3D Visualisation", "ROS 2 Jazzy", "ROSBridge WebSocket", "ws://axel.local:9090", "MoveIt 2 & RViz", "23 DOF Architecture", "Pick & Place Autonome", "Raspberry Pi 5", "Python & C++", "OpenCV Vision & Pose (17 Pts)", "Voix Darija Tunisienne 🇹🇳"],
    metrics: "🥇 1er Prix Compétition pour Meilleur Projet PFE • 23 Degrés de Liberté opérationnels • Latence WebSocket < 80ms • Endpoint ws://axel.local:9090 résilient • Précision NLP Darija 94%.",
    githubUrl: "https://github.com/fedihaddad"
  },
  bideyaboost: {
    title: "BideyaBoost — Plateforme d'Orientation Universitaire & Développement de Carrière",
    badge: "🚀 EdTech & Orientation IA (bideyaboost.tn)",
    category: "Full-Stack Web, Next.js, TypeScript & Cloud AWS",
    image: "bideyaboost.webp",
    status: "Plateforme en Production (Live)",
    role: "Full-Stack Developer & Technical Lead",
    org: "BideyaBoost (Tunisie)",
    arch: "Next.js App Router, React, TypeScript, Tailwind CSS & AWS",
    cpu: "Cloud AWS (US-East / Global CDN)",
    proto: "HTTPS / REST APIs / Webhooks",
    validation: "bideyaboost.tn en Ligne & Opérationnel",
    description: "BideyaBoost (bideyaboost.tn) est une plateforme éducative interactive complète conçue pour accompagner les élèves, bacheliers et étudiants tunisiens dans leur orientation universitaire et leur insertion professionnelle. Développée avec Next.js, React, TypeScript et Tailwind CSS, la plateforme intègre des tests psychométriques interactifs pour identifier les compétences clés, des recommandations d'orientation personnalisées, du mentorat avec des professionnels du secteur, ainsi que des ateliers et contenus interactifs multimédias (podcasts, reels pédagogiques).",
    requirements: [
      "Orientation & Conseil Personnalisé : Recommandations académiques et professionnelles adaptées aux profils et aspirations des étudiants tunisiens.",
      "Tests Psychométriques & Évaluation : Outils interactifs d'auto-évaluation pour identifier les forces, aptitudes et filières optimales.",
      "Réseau de Mentorat d'Experts : Mise en relation directe entre étudiants et professionnels confirmés de divers domaines (ingénierie, médecine, business, sciences).",
      "Contenus Multimédias & Ateliers : Podcasts, capsules vidéo courtes et ateliers pratiques stimulant l'employabilité et les soft skills.",
      "Architecture Trilingue & Inclusive : Support complet en Français, Arabe (Tunisien) et Anglais avec thèmes Clair et Sombre dynamiques."
    ],
    archDetail: "Architecture web full-stack moderne déployée sur AWS avec Next.js App Router : Frontend composantiel haute performance en TypeScript et Tailwind CSS, rendu hybride SSR/SSG pour un SEO optimal, gestion de formulaires et profils utilisateurs, tests psychométriques scorés en temps réel et infrastructure DNS/CDN haute disponibilité garantissant une latence minimale.",
    hardwareList: [
      "Infrastructure Cloud AWS Haute Disponibilité",
      "Next.js 14 / React Engine",
      "TypeScript Strict Type Checking",
      "Tailwind CSS Design System & Dark/Light Modes",
      "Réseau de Distribution Mondial CDN",
      "Domaine Officiel : bideyaboost.tn"
    ],
    challenge: "Créer une expérience fluide et inclusive capable de guider des milliers d'étudiants à travers des flux d'orientation complexes, tout en intégrant des tests interactifs scorés, une gestion trilingue (FR/AR/EN) et des temps de chargement instantanés sur mobile et desktop.",
    solution: "Adoption d'une architecture Next.js / TypeScript modulaire, d'un design system fluide sous Tailwind CSS avec adaptation ergonomique mobile, et déploiement sur une infrastructure cloud AWS résiliente assurant performance et haute disponibilité.",
    specs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AWS Cloud", "Tests Psychométriques", "Orientation Académique", "Mentorat", "Trilingue (FR/AR/EN)", "bideyaboost.tn"],
    metrics: "Plateforme déployée et active (bideyaboost.tn) • Milliers d'étudiants accompagnés • Performance Lighthouse > 90 • Score psychométrique instantané.",
    githubUrl: "https://bideyaboost.tn"
  },
  sante: {
    title: "Système IoT de Surveillance Santé & Signes Vitaux",
    badge: "IoT Médical & Cloud",
    category: "IoT & Systèmes Embarqués",
    image: "sante.webp",
    status: "Télémétrie Médicale Validée",
    role: "Développeur IoT Embarqué",
    org: "Projet Médical R&D",
    arch: "ESP32, MQTT/TLS & Node.js",
    cpu: "ESP32 Xtensa Dual-Core 240MHz",
    proto: "MQTT over TLS 1.3, Wi-Fi",
    validation: "Signes Vitaux Temps Réel",
    description: "Station connectée de télésurveillance médicale portable permettant la capture continue des signes vitaux (pouls cardiaque, saturation en oxygène SpO2, température corporelle) avec détection automatique d'anomalies et alertes d'urgence.",
    requirements: [
      "Mesure continue et non-invasive des constantes vitales : SpO2, fréquence cardiaque et température cutanée.",
      "Transmission sans fil sécurisée chiffrée de bout en bout conforme aux exigences de confidentialité médicale.",
      "Détection instantanée des arythmies et désaturations d'oxygène avec émission d'alertes soignants automatiques."
    ],
    archDetail: "Le microcontrôleur ESP32 échantillonne les capteurs biomédicaux via bus I2C et One-Wire. Les trames physiologiques sont horodatées, filtrées numériquement et publiées via MQTT sécurisé over TLS sur un broker cloud relié à une API Node.js et dashboard React.",
    hardwareList: [
      "ESP32-WROOM-32 Dual-Core",
      "Capteur SpO2 / Pouls MAX30102",
      "Sonde Température Précision DS18B20",
      "Écran OLED 0.96\" I2C",
      "Batterie LiPo 3.7V + Circuit TP4056"
    ],
    challenge: "Garantir la fiabilité absolue de la transmission des données physiologiques critiques en temps réel sous contraintes de bande passante et d'autonomie énergétique.",
    solution: "Mise en œuvre du protocole MQTT sécurisé over TLS avec un microcontrôleur ESP32 basse consommation, combiné à un serveur Node.js et une interface médicale responsive en React pour le personnel soignant.",
    specs: ["ESP32", "C / C++ Embarqué", "FreeRTOS", "MAX30102", "DS18B20", "MQTT / TLS", "Node.js", "React", "Alertes Webhooks"],
    metrics: "Latence de transmission < 150ms • Autonomie sur batterie > 18h • Précision oxymétrie de pouls SpO2 ±1.5%.",
    githubUrl: "https://github.com/fedihaddad"
  },
  robot: {
    title: "Robot de Navigation Autonome & Cartographie SLAM",
    badge: "Navigation Autonome",
    category: "Robotique & ROS",
    image: "robot.webp",
    status: "SLAM 2D & Navigation Validés",
    role: "Ingénieur Robotique Mobile",
    org: "R&D Robotique Autonome",
    arch: "ROS 2 Nav2, RPLIDAR 360°",
    cpu: "Raspberry Pi 4 (Quad ARM Cortex-A72)",
    proto: "ROS 2 Topics, UART Série, Wi-Fi",
    validation: "SLAM 2D Loop Closure Validé",
    description: "Robot mobile à deux roues motrices et roulette folle capable d'explorer de manière autonome des environnements intérieurs inconnus grâce à un LIDAR à 360 degrés et des caméras de profondeur.",
    requirements: [
      "Exploration autonome et cartographie vectorielle 2D en temps réel d'environnements intérieurs inconnus.",
      "Navigation point-à-point avec calcul de trajectoire optimal et évitement d'obstacles dynamiques.",
      "Fermeture de boucle (Loop Closure) robuste sans dérive odométrique sur longues distances."
    ],
    archDetail: "Pipeline ROS 2 Nav2 orchestrant la localisation et cartographie simultanée (Cartographer / SLAM Toolbox). Le capteur RPLIDAR 360° génère le scan laser 2D, fusionné à l'odométrie des encodeurs de roue via un filtre de Kalman étendu (EKF).",
    hardwareList: [
      "Raspberry Pi 4 (4 GB RAM)",
      "RPLIDAR A1 360° Laser Scanner",
      "Châssis Robotique Différentiel 2WD",
      "Encodeurs Optiques de Vitesse",
      "Double Pont en H L298N",
      "Batterie Li-Ion 12V 3000mAh"
    ],
    challenge: "Évitement d'obstacles dynamiques et génération en direct d'une carte vectorielle 2D sans perte de localisation (problème du loop closure).",
    solution: "Mise en œuvre de l'algorithme Gmapping et de la pile de navigation ROS (Nav2). Fusion de données odométriques et laser scan LIDAR pour un positionnement décimétrique précis.",
    specs: ["Raspberry Pi 4", "RPLIDAR 360°", "ROS Navigation (Nav2)", "SLAM Gmapping", "OpenCV", "Python", "TF2", "RViz"],
    metrics: "Précision cartographique < 3cm • Vitesse de navigation autonome 0.4 m/s • Taux de succès navigation 98%.",
    githubUrl: "https://github.com/fedihaddad"
  },
  agriculture: {
    title: "IA de Diagnostic Phyto-Sanitaire des Plantes",
    badge: "Deep Learning & Vision",
    category: "IA & Deep Learning",
    image: "agriculture.webp",
    status: "Modèle Précision 95.4% Déployé",
    role: "Ingénieur Machine Learning",
    org: "Projet Agro-Tech",
    arch: "CNN TensorFlow / MobileNetV2",
    cpu: "Station GPU CUDA + Inférence WebGL",
    proto: "REST API, JSON, HTTPS",
    validation: "Précision > 95% Validée",
    description: "Application intelligente basée sur un réseau de neurones convolutif (CNN) entraîné sur des milliers d'images foliaires pour détecter et classifier automatiquement les maladies végétales à partir d'une simple photo.",
    requirements: [
      "Classification automatique de 14 pathologies foliaires sur cultures maraîchères et fruitières.",
      "Temps d'inférence < 200ms sur terminal mobile ou navigateur sans équipement GPU client.",
      "Génération automatique de fiches de recommandations agronomiques et traitements biologiques."
    ],
    archDetail: "Réseau neuronal convolutif à base de MobileNetV2 entraîné avec TensorFlow. Pipeline complet d'ingestion d'images, normalisation de texture foliaire, data augmentation et inférence servie via API Python REST légère.",
    hardwareList: [
      "Serveur d'entraînement GPU NVIDIA",
      "Caméra Smartphone / Web HD",
      "Conteneur Docker d'Inférence API"
    ],
    challenge: "Maintenir une précision de prédiction supérieure à 95% malgré les variations de luminosité, d'angles de prise de vue et d'arrière-plans complexes.",
    solution: "Entraînement sous TensorFlow d'une architecture CNN avec techniques de Data Augmentation et Transfer Learning (MobileNetV2 pour exécution légère). Déploiement d'un tableau de bord intuitif proposant des traitements ciblés.",
    specs: ["TensorFlow & Keras", "Convolutional Neural Networks (CNN)", "Python", "Data Augmentation", "Transfer Learning", "Dashboard Web", "FastAPI"],
    metrics: "Exactitude globale (Accuracy) 95.4% • Inférence moyenne en 120ms • 14 pathologies foliaires reconnues.",
    githubUrl: "https://github.com/fedihaddad"
  },
  'smart-house': {
    title: "Maison Intelligente 3 Étages & Domotique",
    badge: "Domotique Avancée",
    category: "IoT & Systèmes Embarqués",
    image: "smart-house.webp",
    status: "Maquette 3 Étages 100% Opérationnelle",
    role: "Développeur Hardware & IoT",
    org: "Smart Home Building",
    arch: "ESP32, RFID, Multi-Capteurs",
    cpu: "ESP32 Dual-Core + Arduino ATmega328P",
    proto: "I2C, UART, Wi-Fi, MQTT",
    validation: "Maquette 3 Étages Opérationnelle",
    description: "Maquette complète d'habitat connecté sur 3 niveaux intégrant un ascenseur motorisé avec boutons d'appel, contrôle d'accès au garage par badges RFID, surveillance des fuites de gaz/flammes, et balcon automatique qui rétracte le linge en cas de pluie.",
    requirements: [
      "Pilotage précis d'un ascenseur 3 niveaux motorisé par pas-à-pas avec détection de fin de course.",
      "Contrôle d'accès sans contact au garage sécurisé par transpondeurs RFID Mifare RC522.",
      "Sécurité incendie et gaz avec alerte immédiate et fermeture automatique des vannes.",
      "Balcon intelligent motorisé rétractant le linge automatiquement dès les premières gouttes de pluie."
    ],
    archDetail: "Architecture hiérarchique maître-esclave : l'ESP32 assure le rôle de passerelle réseau IoT et superviseur logique, communiquant via bus I2C/UART avec des contrôleurs Arduino esclaves affectés aux actionneurs critiques.",
    hardwareList: [
      "ESP32-WROOM Dual-Core",
      "Arduino Uno (ATmega328P)",
      "Moteur Pas-à-Pas 28BYJ-48 + Driver ULN2003",
      "Module RFID RC522 + Badges",
      "Capteur de Pluie Résistif",
      "Capteurs Gaz MQ-2 & Capteur de Flamme",
      "Servomoteurs SG90 Micro"
    ],
    challenge: "Gérer simultanément des dizaines de capteurs et actionneurs sans blocage CPU sur microcontrôleur.",
    solution: "Architecture multitâche coopérative avec ESP32 et Arduino Uno communiquant via bus I2C/UART, connectée à une application mobile pour le monitoring et le pilotage manuel à distance.",
    specs: ["ESP32 & Arduino Uno", "Lecteur RFID RC522", "Capteur de pluie & servomoteur", "Capteurs Gaz MQ-2 & Flamme", "Moteur Pas-à-Pas (Ascenseur)", "App Mobile", "Bus I2C / UART"],
    metrics: "3 étages domotisés synchronisés • Temps de réponse ascenseur < 200ms • Zéro faux positif incendie.",
    githubUrl: "https://github.com/fedihaddad"
  },
  'autonomous-car': {
    title: "Voiture Autonome avec Capteurs Ultrasoniques",
    badge: "Robotique Embarquée",
    category: "Robotique & Embarqué",
    image: "autonomous-car.webp",
    status: "Zéro Collision • Réactivité < 50ms",
    role: "Développeur C++ Embarqué",
    org: "Robotique Mobile",
    arch: "Arduino Uno & Capteurs Ultrasons",
    cpu: "ATmega328P (16 MHz)",
    proto: "Signaux PWM, GPIO, Impulsion Écho",
    validation: "Zéro Latence Détectée",
    description: "Véhicule autonome miniature capable de se déplacer à vive allure en évitant les collisions. Équipé d'un capteur ultrasonique monté sur servomoteur pour scanner la route à 180°.",
    requirements: [
      "Déplacement autonome haute vitesse sans collision avec l'environnement ou les obstacles mobiles.",
      "Balayage panoramique à 180° par capteur ultrasonique motorisé pour cartographie de proximité.",
      "Algorithme réactif de marche arrière et dégagement automatique en cas d'impasse."
    ],
    archDetail: "Contrôleur déterministe haute cadence en C++ embarqué. Le microcontrôleur mesure les temps de vol acoustiques ultrasoniques et génère des signaux PWM vers les ponts en H pour le contrôle différentiel des roues.",
    hardwareList: [
      "Arduino Uno (ATmega328P)",
      "Capteur Ultrasonique HC-SR04",
      "Servomoteur Tourelle SG90",
      "Double Pont en H L298N",
      "4x Moteurs CC avec Réducteurs",
      "Châssis Robotique 4WD"
    ],
    challenge: "Prendre des décisions de trajectoire en moins de 50 millisecondes pour éviter les obstacles à haute vitesse.",
    solution: "Algorithme d'évitement adaptatif écrit en C++ embarqué mesurant les distances gauche/centre/droite avant de calculer l'angle optimal de braquage et la régulation PWM des moteurs.",
    specs: ["Arduino Uno", "Capteur Ultrasonique HC-SR04", "Servomoteur SG90", "Driver Moteur L298N", "C++ Embarqué", "Régulation PWM"],
    metrics: "Temps de réaction < 45ms • Distance de sécurité maintenue : 25cm • Autonomie sur batterie 2h30.",
    githubUrl: "https://github.com/fedihaddad"
  },
  'bluetooth-car': {
    title: "Voiture Contrôlée par Bluetooth",
    badge: "Contrôle Sans Fil",
    category: "IoT & Embarqué",
    image: "bluetooth-car.webp",
    status: "Watchdog Sécurisé & Contrôle Fluide",
    role: "Développeur Embarqué & Mobile",
    org: "Robotique Télécommandée",
    arch: "Module HC-05 & App Android",
    cpu: "ATmega328P (16 MHz)",
    proto: "Bluetooth SPP 2.0 (UART 9600 bauds)",
    validation: "Watchdog Sécurisé",
    description: "Robot mobile piloté sans fil depuis un smartphone Android via le protocole Bluetooth, offrant un contrôle précis de la vitesse et de la direction en temps réel.",
    requirements: [
      "Pilotage sans fil omnidirectionnel réactif (marche avant, arrière, rotation progressive) via smartphone.",
      "Dispositif de sécurité Watchdog arrêtant immédiatement les moteurs en cas de rupture de signal.",
      "Ajustement continu de la vitesse via modulateur PWM asservi sur l'application mobile."
    ],
    archDetail: "Liaison série sans fil via le module HC-05 connecté aux broches UART matérielles de l'Arduino. Trame binaire compacte décodée en temps réel avec timer logiciel Watchdog réinitialisé à chaque trame reçue.",
    hardwareList: [
      "Arduino Uno (ATmega328P)",
      "Module Radio Bluetooth HC-05",
      "Double Pont en H L298N",
      "4x Moteurs CC à Réducteur",
      "Châssis 4WD Tout-Terrain",
      "Smartphone Android avec App Personnalisée"
    ],
    challenge: "Éliminer la latence de commande Bluetooth tout en assurant un arrêt d'urgence automatique en cas de rupture de signal.",
    solution: "Module Bluetooth HC-05 connecté en liaison série UART avec protocole de trames légères et watchdog de sécurité pour neutraliser les moteurs si la connexion est perdue.",
    specs: ["Arduino Uno", "Module HC-05 Bluetooth", "Châssis 4WD", "Pont en H L298N", "App Android Personnalisée", "UART", "Contrôle PWM"],
    metrics: "Latence commande < 25ms • Portée sans fil 15 mètres • Sécurité Watchdog 100% active.",
    githubUrl: "https://github.com/fedihaddad"
  }
};

function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  const data = projectDetailsData[projectId];
  if (!data) return;

  const tabButtons = modal.querySelectorAll('.modal-tab-btn');
  const tabPanes = modal.querySelectorAll('.modal-tab-pane');

  // Reset to first tab
  tabButtons.forEach((b, idx) => {
    if (idx === 0) b.classList.add('active');
    else b.classList.remove('active');
  });
  tabPanes.forEach((p, idx) => {
    if (idx === 0) p.classList.add('active');
    else p.classList.remove('active');
  });

  // Header info
  const titleEl = document.getElementById('modalTitle');
  if (titleEl) titleEl.textContent = data.title;
  const badgeEl = document.getElementById('modalBadge');
  if (badgeEl) badgeEl.innerHTML = `<i class="fas fa-award"></i> ${data.badge}`;
  const catEl = document.getElementById('modalCategory');
  if (catEl) catEl.textContent = data.category;

  // Image & status
  const modalImg = document.getElementById('modalImage');
  if (modalImg) {
    modalImg.src = data.image;
    modalImg.alt = data.title;
    if (data.image.includes('logo_axel')) {
      modalImg.style.objectFit = 'contain';
    } else {
      modalImg.style.objectFit = 'cover';
    }
  }
  const statusEl = document.getElementById('modalImageStatus');
  if (statusEl) statusEl.textContent = data.status || 'Système Validé & Opérationnel';

  // Links
  const gitBtn = document.getElementById('modalGithubBtn');
  const headerGitBtn = document.getElementById('modalHeaderGitBtn');
  if (gitBtn) gitBtn.href = data.githubUrl || 'https://github.com/fedihaddad';
  if (headerGitBtn) headerGitBtn.href = data.githubUrl || 'https://github.com/fedihaddad';

  // Quick Specs Snapshot (Left Column)
  const roleEl = document.getElementById('modalSpecRole');
  const orgEl = document.getElementById('modalSpecOrg');
  const archEl = document.getElementById('modalSpecArch');
  const cpuEl = document.getElementById('modalSpecCpu');
  const protoEl = document.getElementById('modalSpecProto');
  const validEl = document.getElementById('modalSpecValid');

  if (roleEl) roleEl.textContent = data.role || 'Software & Robotics Engineer';
  if (orgEl) orgEl.textContent = data.org || 'DigiGrowing / ISIMA';
  if (archEl) archEl.textContent = data.arch || 'Système Modulaire';
  if (cpuEl) cpuEl.textContent = data.cpu || 'Unité Embarquée Dédiée';
  if (protoEl) protoEl.textContent = data.proto || 'Protocoles Temps Réel';
  if (validEl) validEl.textContent = data.validation || '1er Prix du Jury';

  // Tab 1: Overview & Requirements
  const descEl = document.getElementById('modalDesc');
  if (descEl) descEl.textContent = data.description;

  const reqContainer = document.getElementById('modalRequirements');
  if (reqContainer) {
    reqContainer.innerHTML = '';
    (data.requirements || []).forEach(req => {
      const li = document.createElement('li');
      li.textContent = req;
      reqContainer.appendChild(li);
    });
  }

  // Tab 2: Architecture & Hardware
  const archDetailEl = document.getElementById('modalArchDetail');
  if (archDetailEl) archDetailEl.textContent = data.archDetail || data.solution;

  const hwContainer = document.getElementById('modalHardwareList');
  if (hwContainer) {
    hwContainer.innerHTML = '';
    (data.hardwareList || []).forEach(hw => {
      const span = document.createElement('span');
      span.className = 'hardware-chip';
      span.innerHTML = `<i class="fas fa-microchip"></i> ${hw}`;
      hwContainer.appendChild(span);
    });
  }

  // Tab 3: Challenges & Engineering Solution
  const challengeEl = document.getElementById('modalChallenge');
  const solutionEl = document.getElementById('modalSolution');
  if (challengeEl) challengeEl.textContent = data.challenge;
  if (solutionEl) solutionEl.textContent = data.solution;

  // Tab 4: Tech Stack & Metrics
  const tagsContainer = document.getElementById('modalTags');
  if (tagsContainer) {
    tagsContainer.innerHTML = '';
    (data.specs || []).forEach(spec => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = spec;
      tagsContainer.appendChild(span);
    });
  }

  const metricsEl = document.getElementById('modalMetrics');
  if (metricsEl) metricsEl.textContent = data.metrics || 'Validation opérationnelle complète.';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Expose globally on window immediately
window.openProjectModal = openProjectModal;

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
window.closeProjectModal = closeProjectModal;

function initProjectModal() {
  try {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');

    // Tab buttons inside modal
    const tabButtons = modal.querySelectorAll('.modal-tab-btn');
    const tabPanes = modal.querySelectorAll('.modal-tab-pane');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-modal-tab');
        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const activePane = document.getElementById(targetTab);
        if (activePane) activePane.classList.add('active');
      });
    });

    // Open modal when clicking details buttons
    document.querySelectorAll('[data-project-target]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project-target');
        openProjectModal(projectId);
      });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
      }
    });
  } catch (err) {
    console.error('Error initializing project modal:', err);
  }
}

// Live IoT Telemetry Simulator (Real-time demo for recruiters)
function initTelemetrySimulator() {
  try {
    const tempValEl = document.getElementById('telemetryTemp');
    const humidValEl = document.getElementById('telemetryHumid');
    const heapValEl = document.getElementById('telemetryHeap');
    const pingValEl = document.getElementById('telemetryPing');
    const rawStreamEl = document.getElementById('telemetryRawStream');
    const relayBtn = document.getElementById('telemetryRelayBtn');

    if (!tempValEl || !humidValEl || !heapValEl || !pingValEl || !rawStreamEl) return;

    let relayState = false;
    let baseTemp = 24.6;
    let baseHumid = 52.4;

    function updateTelemetry() {
      // Small realistic jitter
      const temp = (baseTemp + (Math.random() * 0.8 - 0.4)).toFixed(1);
      const humid = Math.round(baseHumid + (Math.random() * 2 - 1));
      const heap = Math.round(284 + (Math.random() * 6 - 3));
      const ping = Math.round(18 + (Math.random() * 8 - 4));

      tempValEl.textContent = temp;
      humidValEl.textContent = humid;
      heapValEl.textContent = heap;
      pingValEl.textContent = ping;

      const rawJson = `{"dev":"ESP32-S3","temp":${temp},"rh":${humid},"heap_kb":${heap},"relay_g21":${relayState ? 1 : 0},"ping_ms":${ping}}`;
      rawStreamEl.textContent = rawJson;
    }

    setInterval(updateTelemetry, 2500);

    if (relayBtn) {
      relayBtn.addEventListener('click', () => {
        relayState = !relayState;
        relayBtn.classList.toggle('active', relayState);
        const icon = relayBtn.querySelector('i');
        const text = relayBtn.querySelector('span');

        if (relayState) {
          if (icon) icon.className = 'fas fa-lightbulb';
          if (text) text.textContent = 'Relais GPIO21 : ON';
        } else {
          if (icon) icon.className = 'far fa-lightbulb';
          if (text) text.textContent = 'Relais GPIO21 : OFF';
        }
        updateTelemetry();
      });
    }
  } catch (err) {
    console.error('Error initializing telemetry simulator:', err);
  }
}

// ============================================================================
// AXEL 60 FPS HTML5 CANVAS KINEMATICS SIMULATOR & INTERACTIVE PLAYGROUND
// ============================================================================
function initAxelPlayground() {
  // Deprecated 2D arm simulator removed - AXEL is a semi-humanoid robot with 23 DOF
}

// 5 Core Engineering Pillars Tab Navigation
function initAxelTabs() {
  try {
    const tabBtns = document.querySelectorAll('.axel-tab-btn');
    const tabPanes = document.querySelectorAll('.axel-tab-pane');

    if (!tabBtns.length || !tabPanes.length) return;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetId = btn.getAttribute('data-tab');
        tabPanes.forEach(pane => {
          if (pane.id === targetId) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });
      });
    });
  } catch (err) {
    console.error('Error initializing AXEL tabs:', err);
  }
}

// Friendly Mascot Floating Tooltip & Hero Wave Interactions
function initFriendlyMascot() {
  try {
    const tooltip = document.getElementById('mascotTooltip');
    const tooltipClose = document.getElementById('mascotTooltipClose');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const heroWave = document.querySelector('.friendly-wave');

    if (tooltipClose && tooltip) {
      tooltipClose.addEventListener('click', (e) => {
        e.stopPropagation();
        tooltip.style.opacity = '0';
        tooltip.style.pointerEvents = 'none';
        setTimeout(() => tooltip.style.display = 'none', 300);
      });
    }

    if (tooltip && chatbotToggle) {
      tooltip.addEventListener('click', () => {
        chatbotToggle.click();
        tooltip.style.opacity = '0';
        tooltip.style.pointerEvents = 'none';
      });
    }

    if (heroWave) {
      heroWave.addEventListener('click', () => {
        heroWave.style.animation = 'none';
        setTimeout(() => {
          heroWave.style.animation = 'friendlyWave 0.8s ease';
        }, 10);
      });
    }
  } catch (err) {
    console.error('Error initializing friendly mascot:', err);
  }
}


