// Constants
const SENSOR_UPDATE_INTERVAL = 100; // ms
const PARTICLE_COUNT_DESKTOP = 40;
const PARTICLE_COUNT_MOBILE = 20;
const LOADING_DELAY = 1500; // ms

// Translations object
const translations = {
  fr: {
    'nav.home': 'Accueil',
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
    'experience.heading': 'Expérience',
    'experience.subtitle': 'Mon parcours professionnel dans l\'innovation technologique',
    'experience.exp1.title': 'Stagiaire Développeur Robotique & IA',
    'experience.exp1.company': 'DigiGrowing',
    'experience.exp1.date': 'Août 2025 - Septembre 2025',
    'experience.exp1.desc': 'Conception d\'un robot éducatif interactif pour enfants : intégration d\'une caméra et de deux bras articulés. Développement d\'une interface multilingue (Arabe, Français, Anglais) permettant l\'interaction vocale, le tutorat scolaire et le storytelling. Mise en place d\'un dashboard de supervision parentale pour le suivi des programmes éducatifs et la sécurité.',
    'experience.exp2.title': 'Stagiaire Développeur IoT & Full-Stack',
    'experience.exp2.company': 'QuetraTech',
    'experience.exp2.date': 'Juillet 2025 - Août 2025',
    'experience.exp2.desc': 'Développement d\'un système intelligent de gestion d\'accès pour pépinière d\'entreprises. Implémentation du contrôle d\'accès par RFID, gestion complète des utilisateurs (CRUD) et historique détaillé par bureau. Conception d\'un dashboard temps réel intégrant un système de paiement et de facturation automatisé pour la gestion administrative.',
    'education.heading': 'Formation',
    'education.subtitle': 'Mon parcours académique et formations continues',
    'education.edu1.title': 'Licence en IoT et Systèmes Embarqués (Dernière année)',
    'education.edu1.school': 'Institut Supérieur d\'Informatique de Mahdia (ISIMA)',
    'education.edu1.date': '2023 - 2026 (Actuellement en 2025-2026)',
    'education.edu1.desc': 'Phase finale de la licence spécialisée en IoT, systèmes embarqués et intelligence artificielle. Préparation du projet de fin d\'études.',
    'education.edu2.title': 'Baccalauréat en Informatique',
    'education.edu2.school': 'Lycée Secondaire',
    'education.edu2.date': 'Obtenu en 2023',
    'education.edu2.desc': 'Diplôme de fin d\'études secondaires, marquant le début du parcours spécialisé en technologies de l\'Information.',
    'blog.heading': 'Blog',
    'blog.subtitle': 'Mes réflexions sur l\'innovation technologique',
    'blog.post1.title': 'L\'avenir des systèmes embarqués dans l\'IoT',
    'blog.post1.excerpt': 'Exploration des tendances émergentes et des défis techniques dans le développement de systèmes embarqués pour l\'Internet des Objets.',
    'blog.post2.title': 'IA et robotique : vers une symbiose parfaite',
    'blog.post2.excerpt': 'Comment l\'intelligence artificielle révolutionne la robotique moderne et ouvre de nouvelles perspectives d\'innovation.',
    'blog.post3.title': 'IoT et développement durable',
    'blog.post3.excerpt': 'L\'impact positif des technologies IoT sur l\'environnement et leur rôle dans la transition écologique.',
    'achievements.heading': 'Réalisations',
    'achievements.subtitle': 'Reconnaissances et accomplissements marquants',
    'achievements.cert.heading': 'Parcours de Certifications',
    'achievements.cert.view': 'Voir le certificat',
    'achievements.cert1.date': 'Décembre 2024',
    'achievements.cert1.title': 'Hashgraph Developer',
    'achievements.cert1.issuer': 'The Hashgraph Association',
    'achievements.cert1.desc': 'Certification de développeur sur la technologie Hedera Hashgraph (DLT), attestant des compétences en développement de smart contracts et d\'applications décentralisées.',
    'achievements.other.heading': 'Autres Accomplissements',
    'achievements.other1.title': 'Bénévole & Animateur',
    'achievements.other1.org': 'Association PNL & Union Européenne',
    'achievements.other1.desc': 'Engagement citoyen et animation d\'ateliers de robotique au sein des collèges et lycées de Mahdia avec l\'Association PNL (Pensée Nationale Libre) et l\'Union Européenne.',
    'achievements.other2.title': 'Contributeur Open Source',
    'achievements.other2.desc': 'Contributions actives à des projets open source majeurs dans l\'écosystème IoT et robotique.',
    'contact.heading': 'Contact',
    'contact.subtitle': 'Discutons de vos projets innovants',
    'contact.stay': 'Restons en contact',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Téléphone',
    'contact.location.label': 'Localisation',
    'contact.location.value': 'Tunis, Tunisie',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'footer.copyright': '© 2026 Fedi Haddad. Tous droits réservés. Conçu avec passion pour l\'innovation.'
  },
  en: {
    'nav.home': 'Home',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.blog': 'Blog',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',
    'hero.subtitle': 'IoT Developer & Embedded Systems',
    'hero.description': 'Passionate about AI and robotics, I design innovative solutions that connect the physical world to the digital with a focus on social impact.',
    'hero.contact': 'Contact Me',
    'hero.download': 'Download CV',
    'about.title': 'About',
    'about.bio1': 'Passionate about innovative technologies with 3 years of experience in developing IoT solutions. My expertise covers embedded systems, artificial intelligence and robotics, with a particular focus on applications with positive social impact.',
    'about.bio2': 'I firmly believe that technology should serve humanity. That\'s why I focus on developing sustainable and accessible solutions that concretely improve users\' lives.',
    'stats.projects': 'IoT Projects',
    'stats.experience': 'Years of experience',
    'stats.awards': 'Innovation Awards',
    'skills.title': 'Key Skills',
    'skills.heading': 'Skills',
    'skills.subtitle': 'Diversified technical expertise for innovation',
    'skills.cat1': 'Programming',
    'skills.cat2': 'Embedded Systems',
    'skills.cat3': 'IoT & Connectivity',
    'skills.cat4': 'AI & Robotics',
    'projects.heading': 'Projects',
    'projects.subtitle': 'Discover my most notable achievements',
    'projects.p1.title': 'Health Monitoring IoT System',
    'projects.p1.desc': 'Complete platform for real-time vital signs monitoring with intelligent alerts and advanced medical dashboard.',
    'projects.p2.title': 'Autonomous Navigation Robot',
    'projects.p2.desc': 'Intelligent robot capable of autonomous navigation with obstacle avoidance and real-time SLAM mapping.',
    'projects.p3.title': 'Plant Disease Detection AI',
    'projects.p3.desc': 'Deep Learning (CNN) model developed with TensorFlow capable of automatically detecting plant diseases and proposing treatment solutions via an interactive dashboard.',
    'projects.p4.title': 'Smart House 3 Floors',
    'projects.p4.desc': 'Complete home automation system with RFID garage, smart kitchen (temperature/gas/flame detection), automatic balcony (retracts clothes when raining), 3-floor elevator and real-time mobile dashboard.',
    'projects.p5.title': 'Autonomous Car with Ultrasonic Sensors',
    'projects.p5.desc': 'Ultra-fast robotic car with real-time obstacle detection, left/right scanning for trajectory optimization and autonomous navigation without latency.',
    'projects.p6.title': 'Bluetooth Controlled Car',
    'projects.p6.desc': 'Robotic car controlled via smartphone with Bluetooth HC-05 module. Mobile application for real-time direction and speed control.',
    'experience.heading': 'Experience',
    'experience.subtitle': 'My professional journey in technological innovation',
    'experience.exp1.title': 'Robotics & AI Developer Intern',
    'experience.exp1.company': 'DigiGrowing',
    'experience.exp1.date': 'August 2025 - September 2025',
    'experience.exp1.desc': 'Design of an interactive educational robot for children: integration of a camera and two articulated arms. Development of a multilingual interface (Arabic, French, English) enabling voice interaction, academic tutoring and storytelling. Implementation of a parental supervision dashboard for monitoring educational programs and safety.',
    'experience.exp2.title': 'IoT & Full-Stack Developer Intern',
    'experience.exp2.company': 'QuetraTech',
    'experience.exp2.date': 'July 2025 - August 2025',
    'experience.exp2.desc': 'Development of an intelligent access management system for business incubator. Implementation of RFID access control, complete user management (CRUD) and detailed history per office. Design of a real-time dashboard integrating an automated payment and billing system for administrative management.',
    'education.heading': 'Education',
    'education.subtitle': 'My academic background and continuing education',
    'education.edu1.title': 'Bachelor\'s Degree in IoT and Embedded Systems (Final Year)',
    'education.edu1.school': 'Higher Institute of Computer Science of Mahdia (ISIMA)',
    'education.edu1.date': '2023 - 2026 (Currently in 2025-2026)',
    'education.edu1.desc': 'Final phase of specialized bachelor\'s degree in IoT, embedded systems and artificial intelligence. Preparation of final year project.',
    'education.edu2.title': 'High School Diploma in Computer Science',
    'education.edu2.school': 'Secondary School',
    'education.edu2.date': 'Obtained in 2023',
    'education.edu2.desc': 'Secondary education diploma, marking the beginning of specialized studies in Information Technology.',
    'blog.heading': 'Blog',
    'blog.subtitle': 'My thoughts on technological innovation',
    'blog.post1.title': 'The Future of Embedded Systems in IoT',
    'blog.post1.excerpt': 'Exploration of emerging trends and technical challenges in embedded systems development for the Internet of Things.',
    'blog.post2.title': 'AI and Robotics: Towards Perfect Symbiosis',
    'blog.post2.excerpt': 'How artificial intelligence revolutionizes modern robotics and opens new perspectives for innovation.',
    'blog.post3.title': 'IoT and Sustainable Development',
    'blog.post3.excerpt': 'The positive impact of IoT technologies on the environment and their role in ecological transition.',
    'achievements.heading': 'Achievements',
    'achievements.subtitle': 'Recognition and notable accomplishments',
    'achievements.cert.heading': 'Certifications Journey',
    'achievements.cert.view': 'View certificate',
    'achievements.cert1.date': 'December 2024',
    'achievements.cert1.title': 'Hashgraph Developer',
    'achievements.cert1.issuer': 'The Hashgraph Association',
    'achievements.cert1.desc': 'Developer certification in Hedera Hashgraph (DLT) technology, attesting to skills in smart contracts development and decentralized applications.',
    'achievements.other.heading': 'Other Accomplishments',
    'achievements.other1.title': 'Volunteer & Facilitator',
    'achievements.other1.org': 'PNL Association & European Union',
    'achievements.other1.desc': 'Civic engagement and facilitation of robotics workshops in middle and high schools in Mahdia with PNL Association (Free National Thought) and the European Union.',
    'achievements.other2.title': 'Open Source Contributor',
    'achievements.other2.desc': 'Active contributions to major open source projects in the IoT and robotics ecosystem.',
    'contact.heading': 'Contact',
    'contact.subtitle': 'Let\'s discuss your innovative projects',
    'contact.stay': 'Stay in touch',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.location.label': 'Location',
    'contact.location.value': 'Tunis, Tunisia',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'footer.copyright': '© 2026 Fedi Haddad. All rights reserved. Designed with passion for innovation.'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.experience': 'الخبرة',
    'nav.education': 'التعليم',
    'nav.blog': 'المدونة',
    'nav.achievements': 'الإنجازات',
    'nav.contact': 'اتصل بي',
    'hero.subtitle': 'مطور إنترنت الأشياء والأنظمة المدمجة',
    'hero.description': 'شغوف بالذكاء الاصطناعي والروبوتات، أصمم حلولاً مبتكرة تربط العالم المادي بالرقمي مع التركيز على التأثير الاجتماعي.',
    'hero.contact': 'اتصل بي',
    'hero.download': 'تحميل السيرة الذاتية',
    'about.title': 'نبذة عني',
    'about.bio1': 'شغوف بالتقنيات المبتكرة مع 3 سنوات من الخبرة في تطوير حلول إنترنت الأشياء. تغطي خبرتي الأنظمة المدمجة والذكاء الاصطناعي والروبوتات، مع التركيز بشكل خاص على التطبيقات ذات التأثير الاجتماعي الإيجابي.',
    'about.bio2': 'أؤمن إيماناً راسخاً بأن التكنولوجيا يجب أن تخدم الإنسانية. لذلك أركز على تطوير حلول مستدامة ومتاحة تحسن حياة المستخدمين بشكل ملموس.',
    'stats.projects': 'مشاريع إنترنت الأشياء',
    'stats.experience': 'سنوات الخبرة',
    'stats.awards': 'جوائز الابتكار',
    'skills.title': 'المهارات الأساسية',
    'skills.heading': 'المهارات',
    'skills.subtitle': 'خبرة تقنية متنوعة في خدمة الابتكار',
    'skills.cat1': 'البرمجة',
    'skills.cat2': 'الأنظمة المدمجة',
    'skills.cat3': 'إنترنت الأشياء والاتصال',
    'skills.cat4': 'الذكاء الاصطناعي والروبوتات',
    'projects.heading': 'المشاريع',
    'projects.subtitle': 'اكتشف إنجازاتي الأكثر تميزاً',
    'projects.p1.title': 'نظام إنترنت الأشياء لمراقبة الصحة',
    'projects.p1.desc': 'منصة كاملة لمراقبة العلامات الحيوية في الوقت الفعلي مع تنبيهات ذكية ولوحة تحكم طبية متقدمة.',
    'projects.p2.title': 'روبوت تنقل ذاتي',
    'projects.p2.desc': 'روبوت ذكي قادر على التنقل الذاتي مع تجنب العقبات ورسم خرائط SLAM في الوقت الفعلي.',
    'projects.p3.title': 'الذكاء الاصطناعي لتشخيص أمراض النباتات',
    'projects.p3.desc': 'نموذج تعلم عميق (CNN) مطور باستخدام TensorFlow قادر على اكتشاف أمراض النباتات تلقائياً واقتراح حلول العلاج عبر لوحة تحكم تفاعلية.',
    'projects.p4.title': 'منزل ذكي 3 طوابق',
    'projects.p4.desc': 'نظام دوموتيك كامل مع كراج RFID، مطبخ ذكي (كشف الحرارة/الغاز/اللهب)، شرفة آلية (تدخل الملابس إذا مطر)، مصعد 3 طوابق ولوحة تحكم موبايل فورية.',
    'projects.p5.title': 'سيارة ذاتية بمستشعرات فوق صوتية',
    'projects.p5.desc': 'سيارة روبوتية فائقة السرعة مع كشف العقبات في الوقت الفعلي، مسح يسار/يمين لتحسين المسار وملاحة ذاتية بدون تأخير.',
    'projects.p6.title': 'سيارة تتحكم بها عبر Bluetooth',
    'projects.p6.desc': 'سيارة روبوتية تتحكم بها عبر الهاتف الذكي بوحدة Bluetooth HC-05. تطبيق موبايل للتحكم في الاتجاه والسرعة في الوقت الفعلي.',
    'experience.heading': 'الخبرة',
    'experience.subtitle': 'رحلتي المهنية في الابتكار التكنولوجي',
    'experience.exp1.title': 'متدرب مطور روبوتات وذكاء اصطناعي',
    'experience.exp1.company': 'DigiGrowing',
    'experience.exp1.date': 'أغسطس 2025 - سبتمبر 2025',
    'experience.exp1.desc': 'تصميم روبوت تعليمي تفاعلي للأطفال: دمج كاميرا وذراعين مفصليتين. تطوير واجهة متعددة اللغات (العربية والفرنسية والإنجليزية) تتيح التفاعل الصوتي والتدريس الأكاديمي ورواية القصص. إنشاء لوحة تحكم إشرافية للآباء لمتابعة البرامج التعليمية والسلامة.',
    'experience.exp2.title': 'متدرب مطور إنترنت الأشياء وتطوير شامل',
    'experience.exp2.company': 'QuetraTech',
    'experience.exp2.date': 'يوليو 2025 - أغسطس 2025',
    'experience.exp2.desc': 'تطوير نظام ذكي لإدارة الوصول لحاضنة الأعمال. تنفيذ التحكم في الوصول عبر RFID، وإدارة كاملة للمستخدمين (CRUD) وسجل مفصل لكل مكتب. تصميم لوحة تحكم في الوقت الفعلي تدمج نظام دفع وفواتير آلي للإدارة الإدارية.',
    'education.heading': 'التعليم',
    'education.subtitle': 'خلفيتي الأكاديمية والتعليم المستمر',
    'education.edu1.title': 'بكالوريوس في إنترنت الأشياء والأنظمة المدمجة (السنة النهائية)',
    'education.edu1.school': 'المعهد العالي للإعلامية بالمهدية (ISIMA)',
    'education.edu1.date': '2023 - 2026 (حالياً في 2025-2026)',
    'education.edu1.desc': 'المرحلة النهائية من درجة البكالوريوس المتخصصة في إنترنت الأشياء والأنظمة المدمجة والذكاء الاصطناعي. إعداد مشروع التخرج.',
    'education.edu2.title': 'البكالوريا في علوم الكمبيوتر',
    'education.edu2.school': 'المدرسة الثانوية',
    'education.edu2.date': 'حصل عليها في 2023',
    'education.edu2.desc': 'شهادة نهاية الدراسة الثانوية، تمثل بداية الدراسات المتخصصة في تكنولوجيا المعلومات.',
    'blog.heading': 'المدونة',
    'blog.subtitle': 'أفكاري حول الابتكار التكنولوجي',
    'blog.post1.title': 'مستقبل الأنظمة المدمجة في إنترنت الأشياء',
    'blog.post1.excerpt': 'استكشاف الاتجاهات الناشئة والتحديات التقنية في تطوير الأنظمة المدمجة لإنترنت الأشياء.',
    'blog.post2.title': 'الذكاء الاصطناعي والروبوتات: نحو تكامل مثالي',
    'blog.post2.excerpt': 'كيف يُحدث الذكاء الاصطناعي ثورة في الروبوتات الحديثة ويفتح آفاقاً جديدة للابتكار.',
    'blog.post3.title': 'إنترنت الأشياء والتنمية المستدامة',
    'blog.post3.excerpt': 'التأثير الإيجابي لتقنيات إنترنت الأشياء على البيئة ودورها في التحول البيئي.',
    'achievements.heading': 'الإنجازات',
    'achievements.subtitle': 'التقدير والإنجازات البارزة',
    'achievements.cert.heading': 'رحلة الشهادات',
    'achievements.cert.view': 'عرض الشهادة',
    'achievements.cert1.date': 'ديسمبر 2024',
    'achievements.cert1.title': 'مطور Hashgraph',
    'achievements.cert1.issuer': 'جمعية Hashgraph',
    'achievements.cert1.desc': 'شهادة مطور في تقنية Hedera Hashgraph (DLT)، تشهد على المهارات في تطوير العقود الذكية والتطبيقات اللامركزية.',
    'achievements.other.heading': 'إنجازات أخرى',
    'achievements.other1.title': 'متطوع وميسر',
    'achievements.other1.org': 'جمعية PNL والاتحاد الأوروبي',
    'achievements.other1.desc': 'المشاركة المدنية وتيسير ورش عمل الروبوتات في المدارس الإعدادية والثانوية في المهدية مع جمعية PNL (الفكر الوطني الحر) والاتحاد الأوروبي.',
    'achievements.other2.title': 'مساهم في المصادر المفتوحة',
    'achievements.other2.desc': 'مساهمات نشطة في مشاريع المصادر المفتوحة الرئيسية في نظام إنترنت الأشياء والروبوتات.',
    'contact.heading': 'اتصل بي',
    'contact.subtitle': 'لنناقش مشاريعك المبتكرة',
    'contact.stay': 'ابق على تواصل',
    'contact.email.label': 'البريد الإلكتروني',
    'contact.phone.label': 'الهاتف',
    'contact.location.label': 'الموقع',
    'contact.location.value': 'تونس، تونس',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'footer.copyright': '© 2025 فادي حداد. جميع الحقوق محفوظة. مصمم بشغف للابتكار.'
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

    // Update active nav link on scroll
    initActiveNavOnScroll();

    // Language switcher
    initLanguageSwitcher();

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





// Chatbot functionality
function initChatbot() {
  try {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');

    if (!chatbot || !chatbotToggle || !chatbotClose || !chatbotMessages || !chatbotInput || !chatbotSend) return;

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

    // Comprehensive Knowledge Base about Fedi Haddad
    const knowledgeBase = {
      profile: {
        name: 'Fedi Haddad',
        title: 'Développeur IoT & Systèmes Embarqués',
        email: 'fedihaddad76@gmail.com',
        phone: '+216 58 666 779',
        location: 'Tunis, Tunisie',
        linkedin: 'https://linkedin.com/in/fedi-haddad-aa59aa243/',
        github: 'https://github.com/fedihaddad',
        yearsExperience: 3,
        currentStatus: 'Étudiant en dernière année - Licence IoT et Systèmes Embarqués'
      },
      
      skills: {
        programming: ['Python', 'C/C++', 'JavaScript', 'Java', 'Go', 'Rust'],
        embedded: ['Arduino', 'Raspberry Pi', 'ESP32/ESP8266', 'STM32', 'PIC', 'FPGA'],
        iot: ['MQTT', 'LoRaWAN', 'Bluetooth LE', 'WiFi', 'Zigbee', 'NB-IoT'],
        ai: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'PyTorch', 'OpenCV', 'CNN'],
        robotics: ['ROS/ROS2', 'SLAM', 'Navigation autonome', 'Computer Vision'],
        web: ['React', 'Node.js', 'Full-Stack Development'],
        other: ['RFID', 'Cloud IoT (AWS)', 'Git', 'Dashboard Development']
      },

      projects: [
        {
          name: 'Robot Éducatif Interactif',
          company: 'DigiGrowing',
          tech: ['Robotique', 'IA', 'Computer Vision', 'NLP'],
          description: 'Robot éducatif pour enfants avec caméra et deux bras articulés. Interface multilingue (Arabe, Français, Anglais) avec interaction vocale, tutorat scolaire et storytelling. Dashboard de supervision parentale.',
          impact: 'Innovation pédagogique pour l\'éducation des enfants'
        },
        {
          name: 'Système de Gestion d\'Accès Intelligent',
          company: 'QuetraTech',
          tech: ['IoT', 'RFID', 'Full-Stack', 'React', 'Node.js'],
          description: 'Système de gestion d\'accès pour pépinière d\'entreprises avec contrôle RFID, gestion utilisateurs (CRUD), historique par bureau, dashboard temps réel, système de paiement et facturation automatisé.',
          impact: 'Automatisation complète de la gestion administrative'
        },
        {
          name: 'Maison Intelligente 3 Étages',
          tech: ['Arduino Uno', 'ESP32', 'IoT', 'RFID', 'Capteurs', 'Dashboard Mobile'],
          description: 'Maison domotique complète avec garage intelligent (RFID + détection mouvement), cuisine intelligente (ventilateur/fenêtre auto si température élevée/gaz/flamme), balcon automatique (rentre les vêtements si pluie), ascenseur 3 étages avec sélection par bouton. Dashboard mobile temps réel pour monitoring complet.',
          impact: 'Domotique avancée et confort intelligent'
        },
        {
          name: 'Voiture Autonome avec Capteurs Ultrasoniques',
          tech: ['Arduino', 'Capteurs Ultrasoniques', 'Robotique', 'Navigation Autonome'],
          description: 'Voiture robotique ultra-rapide avec détection d\'obstacles temps réel. Scan gauche/droite pour trouver la meilleure route automatiquement. Navigation autonome sans latence avec optimisation de trajectoire intelligente.',
          impact: 'Robotique mobile et navigation autonome'
        },
        {
          name: 'Voiture Contrôlée par Bluetooth',
          tech: ['Arduino Uno', 'Module Bluetooth', 'Mobile App'],
          description: 'Voiture robotique contrôlée via smartphone avec module Bluetooth HC-05. Application mobile pour contrôle direction et vitesse en temps réel.',
          impact: 'IoT mobile et contrôle sans fil'
        },
        {
          name: 'IA de Diagnostic Phyto-Sanitaire',
          tech: ['Deep Learning', 'CNN', 'TensorFlow', 'Python'],
          description: 'Modèle de Deep Learning capable de détecter automatiquement les maladies des plantes et proposer des solutions de traitement via un dashboard interactif.',
          impact: 'Agriculture intelligente et prévention des maladies'
        },
        {
          name: 'Système IoT de Surveillance Santé',
          tech: ['IoT', 'Arduino', 'ESP32', 'MQTT', 'React', 'Node.js'],
          description: 'Plateforme de monitoring des signes vitaux en temps réel avec alertes intelligentes et dashboard médical avancé.',
          impact: 'Télémédecine et surveillance santé en temps réel'
        }
      ],

      experience: [
        {
          role: 'Stagiaire Développeur Robotique & IA',
          company: 'DigiGrowing',
          period: 'Août 2025 - Septembre 2025',
          tasks: [
            'Conception robot éducatif interactif',
            'Intégration caméra et bras articulés',
            'Développement interface multilingue (AR/FR/EN)',
            'Implémentation interaction vocale et NLP',
            'Dashboard supervision parentale'
          ]
        },
        {
          role: 'Stagiaire Développeur IoT & Full-Stack',
          company: 'QuetraTech',
          period: 'Juillet 2025 - Août 2025',
          tasks: [
            'Système gestion d\'accès RFID',
            'CRUD utilisateurs complet',
            'Dashboard temps réel',
            'Système paiement et facturation',
            'Historique détaillé par bureau'
          ]
        }
      ],

      education: [
        {
          degree: 'Licence en IoT et Systèmes Embarqués',
          school: 'Institut Supérieur d\'Informatique de Mahdia (ISIMA)',
          period: '2023 - 2026',
          status: 'En cours - Dernière année (2025-2026)',
          specialization: 'IoT, Systèmes Embarqués, Intelligence Artificielle'
        },
        {
          degree: 'Baccalauréat en Informatique',
          school: 'Lycée Secondaire',
          year: '2023',
          status: 'Obtenu'
        }
      ],

      certifications: [
        {
          name: 'Hashgraph Developer',
          issuer: 'The Hashgraph Association',
          date: 'Décembre 2024',
          id: 'f73bc0a5-deb5-47fe-831e-7e2b8ec68713',
          skills: ['DLT', 'Smart Contracts', 'Applications Décentralisées', 'Hedera Hashgraph']
        },
        {
          name: 'Multi-GPU Deep Learning - Data Parallelism',
          issuer: 'NVIDIA Deep Learning Institute',
          date: '2024',
          skills: ['Deep Learning', 'Multi-GPU Training', 'Data Parallelism']
        },
        {
          name: 'Deep Learning Fundamentals',
          issuer: 'NVIDIA Deep Learning Institute',
          date: '2024',
          skills: ['Deep Learning', 'Neural Networks', 'Model Training']
        },
        {
          name: 'AWS IoT Core Certification',
          issuer: 'Amazon Web Services',
          date: '2024',
          skills: ['Cloud IoT', 'AWS Services', 'Scalable Solutions']
        }
      ],

      achievements: [
        'Membre Actif Enactus (2024-2025) - Projets entrepreneuriaux à impact social',
        'Bénévole & Animateur - Association PNL & Union Européenne',
        'Animation ateliers robotique dans collèges et lycées de Mahdia',
        'Contributeur Open Source - Écosystème IoT et Robotique',
        '15+ Projets IoT réalisés',
        '3 Prix Innovation'
      ],

      languages: {
        french: 'Courant',
        arabic: 'Langue maternelle',
        english: 'Professionnel'
      },

      interests: [
        'Intelligence Artificielle',
        'Robotique',
        'IoT et domotique',
        'Développement durable',
        'Impact social de la technologie',
        'Innovation pédagogique',
        'Open Source'
      ]
    };

    // Conversation Context
    let conversationHistory = [];
    let lastTopic = null;

    // Response Variations for natural conversation
    const responseVariations = {
      intro: 0,
      programming: 0,
      iot: 0,
      ai: 0,
      robotics: 0,
      embedded: 0
    };

    // Intelligent Response System
    function getIntelligentResponse(query) {
      const q = query.toLowerCase();
      const currentLang = localStorage.getItem('language') || 'fr';
      
      // Store conversation history
      conversationHistory.push(q);
      if (conversationHistory.length > 5) {
        conversationHistory.shift();
      }
      
      // Personal Info
      if (q.match(/qui|who|من/)) {
        return getResponse(currentLang, 'intro');
      }
      
      // Skills - Programming
      if (q.match(/python|java|c\+\+|javascript|rust|go|programmation|programming|برمجة/)) {
        return getResponse(currentLang, 'programming');
      }
      
      // Skills - IoT
      if (q.match(/iot|mqtt|lora|zigbee|bluetooth|internet.*chose|إنترنت الأشياء/)) {
        return getResponse(currentLang, 'iot');
      }
      
      // Skills - AI/ML
      if (q.match(/ia|intelligence.*artificielle|ai|machine.*learning|deep.*learning|tensorflow|pytorch|cnn|الذكاء الاصطناعي/)) {
        return getResponse(currentLang, 'ai');
      }
      
      // Skills - Robotics
      if (q.match(/robot|robotique|ros|slam|navigation|روبوت/)) {
        return getResponse(currentLang, 'robotics');
      }
      
      // Skills - Embedded
      if (q.match(/arduino|esp32|stm32|raspberry|embarqué|embedded|fpga|pic/)) {
        return getResponse(currentLang, 'embedded');
      }
      
      // All Skills Summary
      if (q.match(/compétence|skill|مهارة|capacité|savoir.*faire/)) {
        return getResponse(currentLang, 'skills');
      }
      
      // Projects
      if (q.match(/projet|project|مشروع|réalisation/)) {
        return getResponse(currentLang, 'projects');
      }
      
      // Experience
      if (q.match(/expérience|experience|خبرة|stage|internship|travail|work/)) {
        return getResponse(currentLang, 'experience');
      }
      
      // Education
      if (q.match(/formation|education|étude|تعليم|diplôme|isima|university|université/)) {
        return getResponse(currentLang, 'education');
      }
      
      // Certifications
      if (q.match(/certification|certificate|شهادة|nvidia|aws|hashgraph|hedera/)) {
        return getResponse(currentLang, 'certifications');
      }
      
      // Contact
      if (q.match(/contact|email|téléphone|phone|هاتف|appel|joindre|touch|reach|speak|talk|message|write|communicate|contacter|écrire|parler|discuter|get.*in.*touch/)) {
        return getResponse(currentLang, 'contact');
      }
      
      // Achievements
      if (q.match(/enactus|bénévole|volunteer|متطوع|réalisation|achievement|prix|award/)) {
        return getResponse(currentLang, 'achievements');
      }
      
      // Location
      if (q.match(/où|where|أين|localisation|location|ville|city|tunisie|tunisia/)) {
        return getResponse(currentLang, 'location');
      }
      
      // Availability
      if (q.match(/disponible|available|متاح|recrut|embauche|hire|cherche/)) {
        return getResponse(currentLang, 'availability');
      }
      
      // Languages
      if (q.match(/langue|language|لغة|parle|speak|يتحدث/)) {
        return getResponse(currentLang, 'languages');
      }
      
      // Default
      return getResponse(currentLang, 'default');
    }

    // Multi-language Responses
    function getResponse(lang, type) {
      const responses = {
        fr: {
          intro: `Je suis Fedi Haddad, développeur IoT & Systèmes Embarqués passionné d'IA et de robotique. Avec 3 ans d'expérience, je conçois des solutions innovantes qui connectent le monde physique au numérique avec un fort impact social. 🚀`,
          
          programming: `💻 Langages de programmation maîtrisés:\n• Python (expert)\n• C/C++ (avancé)\n• JavaScript/TypeScript\n• Java, Go, Rust\n\nJe développe en full-stack et spécialisé en systèmes embarqués!`,
          
          iot: `🌐 Expert IoT avec:\n• Protocoles: MQTT, LoRaWAN, Bluetooth LE, WiFi, Zigbee, NB-IoT\n• Hardware: ESP32/ESP8266, Arduino, STM32\n• Cloud: AWS IoT Core (certifié)\n• Projets: Système de gestion d'accès RFID, surveillance santé temps réel`,
          
          ai: `🤖 IA & Deep Learning:\n• TensorFlow, PyTorch, OpenCV\n• CNN pour diagnostic phyto-sanitaire\n• Computer Vision\n• NLP multilingue (FR/AR/EN)\n• Certifié NVIDIA DLI (Deep Learning Fundamentals + Multi-GPU)`,
          
          robotics: `🦾 Robotique:\n• ROS/ROS2\n• Navigation autonome + SLAM\n• Robot éducatif interactif multilingue\n• Intégration vision par ordinateur\n• Manipulation avec bras articulés`,
          
          embedded: `⚙️ Systèmes Embarqués:\n• Arduino, Raspberry Pi\n• ESP32/ESP8266, STM32, PIC, FPGA\n• RTOS et programmation bas niveau\n• Capteurs et actionneurs\n• Conception PCB`,
          
          skills: `🎯 Compétences complètes:\n\n💻 Programmation: Python, C/C++, JavaScript, Java, Go, Rust\n⚙️ Embarqué: Arduino, ESP32, STM32, Raspberry Pi, FPGA\n🌐 IoT: MQTT, LoRaWAN, AWS IoT, RFID\n🤖 IA: TensorFlow, PyTorch, CNN, Computer Vision\n🦾 Robotique: ROS/ROS2, SLAM, Navigation autonome\n🌐 Web: React, Node.js, Full-Stack\n\n15+ projets IoT réalisés !`,
          
          projects: `🚀 Projets majeurs:\n\n1️⃣ Robot Éducatif (DigiGrowing)\n   • Interface multilingue AR/FR/EN\n   • Interaction vocale + vision\n   • Dashboard parental\n\n2️⃣ Maison Intelligente 3 Étages\n   • 2 Arduino + ESP32\n   • Garage RFID + détection mouvement\n   • Cuisine smart (temp/gaz/flamme)\n   • Balcon auto + Ascenseur 3 étages\n   • Dashboard mobile temps réel\n\n3️⃣ Voiture Autonome Ultrasonique\n   • Navigation autonome ultra-rapide\n   • Détection obstacles + scan L/R\n   • Optimisation route intelligente\n\n4️⃣ Voiture Bluetooth Arduino\n   • Contrôle smartphone\n   • Module Bluetooth HC-05\n\n5️⃣ Gestion Accès IoT (QuetraTech)\n   • RFID + Dashboard temps réel\n\n6️⃣ IA Diagnostic Plantes\n   • CNN/TensorFlow\n\n7️⃣ Surveillance Santé IoT\n   • Monitoring temps réel`,
          
          experience: `💼 Expérience (3 ans):\n\n🤖 DigiGrowing (Août-Sept 2025)\n   Développeur Robotique & IA\n   • Robot éducatif multilingue\n   • NLP + Computer Vision\n\n🌐 QuetraTech (Juil-Août 2025)\n   Développeur IoT & Full-Stack\n   • Système RFID\n   • Dashboard + Paiement automatisé\n\nProjects: 15+ réalisations IoT`,
          
          education: `🎓 Formation:\n\n📚 Licence IoT & Systèmes Embarqués\n   ISIMA - Dernière année (2023-2026)\n   Spécialisation: IoT, IA, Robotique\n\n🎓 Bac Informatique (2023)\n   Lycée Secondaire`,
          
          certifications: `🏆 Certifications:\n\n✅ Hashgraph Developer (Déc 2024)\n   The Hashgraph Association\n   Smart Contracts + DLT\n\n✅ Deep Learning (2024)\n   NVIDIA DLI - Fundamentals + Multi-GPU\n\n✅ AWS IoT Core (2024)\n   Amazon Web Services\n\nID Hashgraph: f73bc0a5-deb5-47fe-831e-7e2b8ec68713`,
          
          contact: `📧 Me contacter:\n\n📱 Email: fedihaddad76@gmail.com\n📞 Tél: +216 58 666 779\n📍 Tunis, Tunisie\n💼 LinkedIn: linkedin.com/in/fedi-haddad-aa59aa243/\n💻 GitHub: github.com/fedihaddad`,
          
          achievements: `🌟 Réalisations:\n\n✨ Membre Actif Enactus (2024-2025)\n   Projets entrepreneuriaux à impact social\n\n🤝 Bénévole & Animateur\n   Association PNL + Union Européenne\n   Ateliers robotique collèges/lycées Mahdia\n\n💻 Contributeur Open Source\n   IoT & Robotique\n\n🏆 15+ Projets IoT | 3 Prix Innovation`,
          
          location: `📍 Localisation:\nBasé à Tunis, Tunisie 🇹🇳\nÉtudiant à l'ISIMA (Institut Supérieur d'Informatique de Mahdia)\nDisponible pour opportunités en Tunisie et international`,
          
          availability: `💼 Disponibilité:\n\n📚 Actuellement: Dernière année Licence IoT (ISIMA)\n🎯 Recherche: Stage PFE / CDI à partir de Juin 2026\n🌍 Mobilité: Tunisie + International\n✅ Ouvert à: Full-time, Projets freelance, Collaborations\n\nContactez-moi: fedihaddad76@gmail.com`,
          
          languages: `🗣️ Langues:\n\n🇹🇳 Arabe: Langue maternelle\n🇫🇷 Français: Courant\n🇬🇧 Anglais: Professionnel\n\nJe développe des solutions multilingues!`,
          
          default: `Je suis l'assistant de Fedi Haddad. Posez-moi des questions sur:\n\n💻 Compétences (IoT, IA, Robotique, Programmation)\n🚀 Projets (Robot éducatif, IA diagnostic, IoT)\n📚 Formation (ISIMA, Certifications)\n💼 Expérience (DigiGrowing, QuetraTech)\n📧 Contact\n\nQue voulez-vous savoir ?`
        },
        
        en: {
          intro: `I'm Fedi Haddad, IoT & Embedded Systems developer passionate about AI and robotics. With 3 years of experience, I design innovative solutions connecting the physical world to digital with strong social impact. 🚀`,
          
          programming: `💻 Programming Languages:\n• Python (expert)\n• C/C++ (advanced)\n• JavaScript/TypeScript\n• Java, Go, Rust\n\nFull-stack developer specialized in embedded systems!`,
          
          iot: `🌐 IoT Expert with:\n• Protocols: MQTT, LoRaWAN, Bluetooth LE, WiFi, Zigbee, NB-IoT\n• Hardware: ESP32/ESP8266, Arduino, STM32\n• Cloud: AWS IoT Core (certified)\n• Projects: RFID access system, real-time health monitoring`,
          
          ai: `🤖 AI & Deep Learning:\n• TensorFlow, PyTorch, OpenCV\n• CNN for plant disease diagnosis\n• Computer Vision\n• Multilingual NLP (FR/AR/EN)\n• NVIDIA DLI Certified (Deep Learning + Multi-GPU)`,
          
          robotics: `🦾 Robotics:\n• ROS/ROS2\n• Autonomous navigation + SLAM\n• Interactive multilingual educational robot\n• Computer vision integration\n• Articulated arm manipulation`,
          
          embedded: `⚙️ Embedded Systems:\n• Arduino, Raspberry Pi\n• ESP32/ESP8266, STM32, PIC, FPGA\n• RTOS and low-level programming\n• Sensors and actuators\n• PCB design`,
          
          skills: `🎯 Complete Skills:\n\n💻 Programming: Python, C/C++, JavaScript, Java, Go, Rust\n⚙️ Embedded: Arduino, ESP32, STM32, Raspberry Pi, FPGA\n🌐 IoT: MQTT, LoRaWAN, AWS IoT, RFID\n🤖 AI: TensorFlow, PyTorch, CNN, Computer Vision\n🦾 Robotics: ROS/ROS2, SLAM, Autonomous Navigation\n🌐 Web: React, Node.js, Full-Stack\n\n18+ IoT projects completed!`,
          
          projects: `🚀 Major Projects:\n\n1️⃣ Educational Robot (DigiGrowing)\n   • Multilingual AR/FR/EN + voice\n\n2️⃣ Smart House 3 Floors\n   • 2 Arduino + ESP32\n   • RFID garage + motion sensor\n   • Smart kitchen + auto balcony\n   • 3-floor elevator + mobile dashboard\n\n3️⃣ Autonomous Ultrasonic Car\n   • Ultra-fast navigation + L/R scan\n\n4️⃣ Bluetooth Car (Arduino)\n   • Smartphone control\n\n5️⃣ IoT Access (QuetraTech)\n6️⃣ AI Plant Diagnosis\n7️⃣ Health Monitoring IoT`,
          
          experience: `💼 Experience (3 years):\n\n🤖 DigiGrowing (Aug-Sept 2025)\n   Robotics & AI Developer\n   • Multilingual educational robot\n   • NLP + Computer Vision\n\n🌐 QuetraTech (Jul-Aug 2025)\n   IoT & Full-Stack Developer\n   • RFID system\n   • Dashboard + Automated payment\n\nProjects: 15+ IoT implementations`,
          
          education: `🎓 Education:\n\n📚 Bachelor's in IoT & Embedded Systems\n   ISIMA - Final year (2023-2026)\n   Specialization: IoT, AI, Robotics\n\n🎓 High School Diploma in CS (2023)\n   Secondary School`,
          
          certifications: `🏆 Certifications:\n\n✅ Hashgraph Developer (Dec 2024)\n   The Hashgraph Association\n   Smart Contracts + DLT\n\n✅ Deep Learning (2024)\n   NVIDIA DLI - Fundamentals + Multi-GPU\n\n✅ AWS IoT Core (2024)\n   Amazon Web Services\n\nHashgraph ID: f73bc0a5-deb5-47fe-831e-7e2b8ec68713`,
          
          contact: `📧 Contact me:\n\n📱 Email: fedihaddad76@gmail.com\n📞 Phone: +216 58 666 779\n📍 Tunis, Tunisia\n💼 LinkedIn: linkedin.com/in/fedi-haddad-aa59aa243/\n💻 GitHub: github.com/fedihaddad`,
          
          achievements: `🌟 Achievements:\n\n✨ Active Enactus Member (2024-2025)\n   Social impact entrepreneurial projects\n\n🤝 Volunteer & Facilitator\n   PNL Association + European Union\n   Robotics workshops in Mahdia schools\n\n💻 Open Source Contributor\n   IoT & Robotics\n\n🏆 15+ IoT Projects | 3 Innovation Awards`,
          
          location: `📍 Location:\nBased in Tunis, Tunisia 🇹🇳\nStudent at ISIMA (Higher Institute of Computer Science of Mahdia)\nAvailable for opportunities in Tunisia and internationally`,
          
          availability: `💼 Availability:\n\n📚 Currently: Final year IoT Bachelor's (ISIMA)\n🎯 Seeking: Internship / Full-time from June 2026\n🌍 Mobility: Tunisia + International\n✅ Open to: Full-time, Freelance projects, Collaborations\n\nContact: fedihaddad76@gmail.com`,
          
          languages: `🗣️ Languages:\n\n🇹🇳 Arabic: Native\n🇫🇷 French: Fluent\n🇬🇧 English: Professional\n\nI develop multilingual solutions!`,
          
          default: `I'm Fedi Haddad's assistant. Ask me about:\n\n💻 Skills (IoT, AI, Robotics, Programming)\n🚀 Projects (Educational robot, AI diagnosis, IoT)\n📚 Education (ISIMA, Certifications)\n💼 Experience (DigiGrowing, QuetraTech)\n📧 Contact\n\nWhat would you like to know?`
        },
        
        ar: {
          intro: `أنا فادي حداد، مطور إنترنت الأشياء والأنظمة المدمجة شغوف بالذكاء الاصطناعي والروبوتات. مع 3 سنوات خبرة، أصمم حلولاً مبتكرة تربط العالم المادي بالرقمي مع تأثير اجتماعي قوي. 🚀`,
          
          programming: `💻 لغات البرمجة:\n• Python (خبير)\n• C/C++ (متقدم)\n• JavaScript/TypeScript\n• Java, Go, Rust\n\nمطور full-stack متخصص في الأنظمة المدمجة!`,
          
          iot: `🌐 خبير إنترنت الأشياء:\n• البروتوكولات: MQTT, LoRaWAN, Bluetooth LE, WiFi, Zigbee, NB-IoT\n• الأجهزة: ESP32/ESP8266, Arduino, STM32\n• السحابة: AWS IoT Core (معتمد)\n• المشاريع: نظام RFID، مراقبة صحية فورية`,
          
          ai: `🤖 الذكاء الاصطناعي والتعلم العميق:\n• TensorFlow, PyTorch, OpenCV\n• CNN لتشخيص أمراض النباتات\n• Computer Vision\n• معالجة لغات طبيعية متعددة (FR/AR/EN)\n• معتمد NVIDIA DLI (التعلم العميق + Multi-GPU)`,
          
          robotics: `🦾 الروبوتات:\n• ROS/ROS2\n• التنقل الذاتي + SLAM\n• روبوت تعليمي تفاعلي متعدد اللغات\n• تكامل الرؤية الحاسوبية\n• تحكم بالأذرع المفصلية`,
          
          embedded: `⚙️ الأنظمة المدمجة:\n• Arduino, Raspberry Pi\n• ESP32/ESP8266, STM32, PIC, FPGA\n• RTOS والبرمجة منخفضة المستوى\n• المستشعرات والمحركات\n• تصميم PCB`,
          
          skills: `🎯 المهارات الكاملة:\n\n💻 البرمجة: Python, C/C++, JavaScript, Java, Go, Rust\n⚙️ المدمجة: Arduino, ESP32, STM32, Raspberry Pi, FPGA\n🌐 IoT: MQTT, LoRaWAN, AWS IoT, RFID\n🤖 الذكاء الاصطناعي: TensorFlow, PyTorch, CNN\n🦾 الروبوتات: ROS/ROS2, SLAM\n🌐 الويب: React, Node.js, Full-Stack\n\n18+ مشروع IoT منجز!`,
          
          projects: `🚀 المشاريع الرئيسية:\n\n1️⃣ روبوت تعليمي (DigiGrowing)\n   • متعدد اللغات AR/FR/EN\n\n2️⃣ منزل ذكي 3 طوابق\n   • 2 Arduino + ESP32\n   • كراج RFID + كشف حركة\n   • مطبخ ذكي + شرفة آلية\n   • مصعد 3 طوابق + لوحة موبايل\n\n3️⃣ سيارة ذاتية بالموجات فوق الصوتية\n   • ملاحة فائقة السرعة + مسح ي/ش\n\n4️⃣ سيارة Bluetooth (Arduino)\n   • تحكم بالهاتف\n\n5️⃣ إدارة الوصول IoT (QuetraTech)\n6️⃣ ذكاء اصطناعي للنباتات\n7️⃣ مراقبة صحية IoT`,
          
          experience: `💼 الخبرة (3 سنوات):\n\n🤖 DigiGrowing (أغسطس-سبتمبر 2025)\n   مطور روبوتات وذكاء اصطناعي\n   • روبوت تعليمي متعدد اللغات\n   • NLP + رؤية حاسوبية\n\n🌐 QuetraTech (يوليو-أغسطس 2025)\n   مطور IoT وفول ستاك\n   • نظام RFID\n   • لوحة تحكم + دفع آلي\n\nالمشاريع: 15+ إنجاز IoT`,
          
          education: `🎓 التعليم:\n\n📚 بكالوريوس IoT والأنظمة المدمجة\n   ISIMA - السنة النهائية (2023-2026)\n   التخصص: IoT، ذكاء اصطناعي، روبوتات\n\n🎓 بكالوريا علوم الحاسوب (2023)\n   المدرسة الثانوية`,
          
          certifications: `🏆 الشهادات:\n\n✅ Hashgraph Developer (ديسمبر 2024)\n   The Hashgraph Association\n   العقود الذكية + DLT\n\n✅ التعلم العميق (2024)\n   NVIDIA DLI - Fundamentals + Multi-GPU\n\n✅ AWS IoT Core (2024)\n   Amazon Web Services\n\nمعرف Hashgraph: f73bc0a5-deb5-47fe-831e-7e2b8ec68713`,
          
          contact: `📧 اتصل بي:\n\n📱 البريد: fedihaddad76@gmail.com\n📞 الهاتف: 779 666 58 216+\n📍 تونس، تونس\n💼 LinkedIn: linkedin.com/in/fedi-haddad-aa59aa243/\n💻 GitHub: github.com/fedihaddad`,
          
          achievements: `🌟 الإنجازات:\n\n✨ عضو نشط Enactus (2024-2025)\n   مشاريع ريادية ذات تأثير اجتماعي\n\n🤝 متطوع وميسر\n   جمعية PNL + الاتحاد الأوروبي\n   ورش روبوتات في مدارس المهدية\n\n💻 مساهم مصادر مفتوحة\n   IoT والروبوتات\n\n🏆 15+ مشروع IoT | 3 جوائز ابتكار`,
          
          location: `📍 الموقع:\nمقيم في تونس، تونس 🇹🇳\nطالب في ISIMA (المعهد العالي للإعلامية بالمهدية)\nمتاح لفرص في تونس ودولياً`,
          
          availability: `💼 التوفر:\n\n📚 حالياً: السنة النهائية بكالوريوس IoT (ISIMA)\n🎯 أبحث عن: تدريب / عمل دائم من يونيو 2026\n🌍 التنقل: تونس + دولي\n✅ منفتح على: دوام كامل، مشاريع مستقلة، تعاون\n\nاتصل: fedihaddad76@gmail.com`,
          
          languages: `🗣️ اللغات:\n\n🇹🇳 العربية: اللغة الأم\n🇫🇷 الفرنسية: بطلاقة\n🇬🇧 الإنجليزية: احترافي\n\nأطور حلولاً متعددة اللغات!`,
          
          default: `أنا مساعد فادي حداد. اسألني عن:\n\n💻 المهارات (IoT، ذكاء اصطناعي، روبوتات، برمجة)\n🚀 المشاريع (روبوت تعليمي، تشخيص ذكي، IoT)\n📚 التعليم (ISIMA، الشهادات)\n💼 الخبرة (DigiGrowing، QuetraTech)\n📧 التواصل\n\nماذا تريد أن تعرف؟`
        }
      };

      return responses[lang][type] || responses['fr'][type];
    }

    // Generate follow-up suggestions based on topic
    function getFollowUpSuggestions(topic) {
      const currentLang = localStorage.getItem('language') || 'fr';
      const suggestions = {
        fr: {
          intro: ['Quelles sont tes compétences?', 'Montre-moi tes projets', 'Quelle est ton expérience?'],
          programming: ['Parle-moi de tes projets', 'Tu connais l\'IA?', 'Expertise en IoT?'],
          iot: ['Projets IoT réalisés?', 'Expérience AWS IoT?', 'Protocoles IoT maîtrisés?'],
          ai: ['Projets d\'IA?', 'Certifications NVIDIA?', 'Computer Vision?'],
          robotics: ['Robot éducatif?', 'ROS et SLAM?', 'Navigation autonome?'],
          embedded: ['Systèmes embarqués?', 'Arduino ou ESP32?', 'Projets avec STM32?'],
          projects: ['Parle du robot éducatif', 'Diagnostic phyto?', 'Système RFID?'],
          experience: ['DigiGrowing?', 'QuetraTech?', 'Stages réalisés?'],
          contact: ['Disponibilité?', 'Localisation?', 'LinkedIn?']
        },
        en: {
          intro: ['What are your skills?', 'Show me your projects', 'What\'s your experience?'],
          programming: ['Tell me about projects', 'Do you know AI?', 'IoT expertise?'],
          iot: ['IoT projects done?', 'AWS IoT experience?', 'IoT protocols?'],
          ai: ['AI projects?', 'NVIDIA certifications?', 'Computer Vision?'],
          robotics: ['Educational robot?', 'ROS and SLAM?', 'Autonomous navigation?'],
          embedded: ['Embedded systems?', 'Arduino or ESP32?', 'STM32 projects?'],
          projects: ['Tell about educational robot', 'Phyto diagnostic?', 'RFID system?'],
          experience: ['DigiGrowing?', 'QuetraTech?', 'Internships?'],
          contact: ['Availability?', 'Location?', 'LinkedIn?']
        },
        ar: {
          intro: ['ما هي مهاراتك؟', 'أرني مشاريعك', 'ما هي خبرتك؟'],
          programming: ['أخبرني عن المشاريع', 'هل تعرف الذكاء الاصطناعي؟', 'خبرة IoT؟'],
          iot: ['مشاريع IoT؟', 'خبرة AWS IoT؟', 'بروتوكولات IoT؟'],
          ai: ['مشاريع ذكاء اصطناعي؟', 'شهادات NVIDIA؟', 'رؤية حاسوبية؟'],
          robotics: ['روبوت تعليمي؟', 'ROS و SLAM؟', 'ملاحة ذاتية؟'],
          embedded: ['أنظمة مدمجة؟', 'Arduino أو ESP32؟', 'مشاريع STM32؟'],
          projects: ['أخبرني عن الروبوت', 'التشخيص الذكي؟', 'نظام RFID؟'],
          experience: ['DigiGrowing؟', 'QuetraTech؟', 'تدريبات؟'],
          contact: ['التوفر؟', 'الموقع؟', 'LinkedIn؟']
        }
      };
      return suggestions[currentLang][topic] || suggestions[currentLang]['intro'];
    }

    // Find similar topics (Did you mean?)
    function findSimilarTopic(query) {
      const keywords = {
        contact: ['contact', 'email', 'phone', 'touch', 'reach', 'هاتف', 'البريد'],
        skills: ['skill', 'compétence', 'مهارة', 'expertise', 'capacité'],
        projects: ['project', 'projet', 'مشروع', 'réalisation'],
        experience: ['experience', 'expérience', 'خبرة', 'stage', 'work'],
        ai: ['ai', 'ia', 'intelligence', 'الذكاء', 'tensorflow', 'pytorch'],
        iot: ['iot', 'mqtt', 'lora', 'إنترنت الأشياء', 'zigbee'],
        robotics: ['robot', 'robotique', 'روبوت', 'ros', 'slam']
      };
      
      const q = query.toLowerCase();
      for (const [topic, words] of Object.entries(keywords)) {
        for (const word of words) {
          if (q.includes(word)) {
            return topic;
          }
        }
      }
      return null;
    }

    // Typing animation
    function addTypingIndicator() {
      const typing = document.createElement('div');
      typing.className = 'message bot typing-indicator';
      typing.innerHTML = '<span></span><span></span><span></span>';
      typing.id = 'typing-indicator';
      chatbotMessages.appendChild(typing);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      return typing;
    }

    function removeTypingIndicator() {
      const typing = document.getElementById('typing-indicator');
      if (typing) typing.remove();
    }

    function sendMessage() {
      const message = chatbotInput.value.trim();
      if (!message) return;

      // Sanitize input
      const sanitizedMessage = message.replace(/<[^>]*>/g, '');

      // Add user message
      const userMessage = document.createElement('div');
      userMessage.className = 'message user';
      userMessage.textContent = sanitizedMessage;
      chatbotMessages.appendChild(userMessage);

      // Clear input
      chatbotInput.value = '';

      // Add typing indicator
      const typingIndicator = addTypingIndicator();

      // Get intelligent response
      const response = getIntelligentResponse(sanitizedMessage);

      // Detect topic for follow-up suggestions
      const detectedTopic = findSimilarTopic(sanitizedMessage);
      if (detectedTopic) {
        lastTopic = detectedTopic;
      }

      // Add bot response with typing animation delay
      setTimeout(() => {
        removeTypingIndicator();
        
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.textContent = response;
        chatbotMessages.appendChild(botMessage);

        // Add follow-up suggestions if topic detected
        if (lastTopic) {
          const suggestions = getFollowUpSuggestions(lastTopic);
          const suggestionsDiv = document.createElement('div');
          suggestionsDiv.className = 'follow-up-suggestions';
          suggestionsDiv.innerHTML = suggestions.map(s => 
            `<button class="suggestion-btn" onclick="document.getElementById('chatbotInput').value='${s}'; document.getElementById('chatbotSend').click();">${s}</button>`
          ).join('');
          chatbotMessages.appendChild(suggestionsDiv);
        }

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 800);

      // Scroll to bottom
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
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
