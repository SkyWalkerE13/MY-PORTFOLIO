/**
 * ============================================================================
 * FUTURISTIC CYBERPUNK DEVELOPER PORTFOLIO - i18n TRANSLATION ENGINE
 * Operator: Erzhan Ikramov / Ержан Икрамов
 * Supported Languages: English (en), Russian (ru), Kazakh (kz), German (de), Japanese (ja)
 * ============================================================================
 */

'use strict';

const I18N = {
  currentLang: 'en',
  supportedLanguages: ['en', 'ru', 'kz', 'de', 'ja'],

  languageMeta: {
    en: { name: 'English', native: 'English', flag: 'EN' },
    ru: { name: 'Russian', native: 'Русский', flag: 'RU' },
    kz: { name: 'Kazakh', native: 'Қазақша', flag: 'KZ' },
    de: { name: 'German', native: 'Deutsch', flag: 'DE' },
    ja: { name: 'Japanese', native: '日本語', flag: 'JA' }
  },

  translations: {
    // ------------------------------------------------------------------------
    // ENGLISH
    // ------------------------------------------------------------------------
    en: {
      langCode: 'EN',
      operatorName: 'ERZHAN IKRAMOV',
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
        netStatus: 'NET: ONLINE',
        langTitle: 'SYS.LANG'
      },
      hero: {
        telemetry: 'SYS.ONLINE // ASTANA NODE // 51.1694° N, 71.4491° E',
        greeting: "HELLO, WORLD. I'M",
        name: 'ERZHAN IKRAMOV',
        profession: 'FULL STACK DEVELOPER | AI AUTOMATION ENGINEER',
        titles: [
          'Full Stack Developer',
          'AI Automation Engineer',
          'Systems & Cloud Architect',
          'LLM Workflow Specialist',
          'Creative Interface Technologist'
        ],
        intro: 'I build digital experiences, intelligent systems, and software solutions that connect technology with real-world problems.',
        btnExplore: 'EXPLORE MY WORK',
        btnContact: 'CONTACT ME',
        btnCv: 'INITIALIZE CV',
        profileId: 'ID: OPERATIVE // 0x7E3',
        profileStatus: 'STATUS: AVAILABLE',
        scrollText: 'SCROLL TO DECRYPT'
      },
      about: {
        tag: '// 01. INTEL & PROFILE',
        title: 'ABOUT THE ARCHITECT',
        subtitle: 'Bridging complex distributed backend architectures with immersive, high-performance interfaces and autonomous AI pipelines.',
        p1: 'I am <strong>Erzhan Ikramov</strong>, a Full Stack Developer and AI Automation Engineer passionate about engineering resilient software ecosystems, scalable backend microservices, and modern digital interfaces.',
        p2: 'My engineering background spans modern web application development, cloud-native deployments, and workflow automation. I specialize in designing autonomous AI agents, orchestrating complex LLM pipelines, and building mission-critical platforms that eliminate operational friction and accelerate human ingenuity.',
        p3: "My career goals center on constructing autonomous, intelligent computing frameworks and high-load web applications. When I'm not writing code or building AI pipelines, I actively investigate distributed systems, robotics telemetry, and creative interactive web technologies.",
        statId: 'IDENTIFIER:',
        statNode: 'CURRENT NODE:',
        statNodeVal: 'ASTANA, KZ',
        statCore: 'SYSTEM CORE:',
        statCoreVal: 'FULL STACK & AI',
        statAvail: 'AVAILABILITY:',
        statAvailVal: 'OPEN TO OFFERS',
        btnComms: 'INITIATE COMMS',
        cardLocationLabel: 'LOCATION',
        cardLocationVal: 'Astana, Kazakhstan',
        cardRoleLabel: 'PRIMARY ROLE',
        cardRoleVal: 'Full Stack Developer',
        cardFocusLabel: 'STRATEGIC FOCUS',
        cardFocusVal: 'AI & Automation',
        cardAvailLabel: 'CURRENT AVAILABILITY',
        cardAvailVal: 'Open to Opportunities',
        pillar1Title: 'HIGH RESILIENCE',
        pillar1Desc: 'Fault-tolerant system design and clean code standards.',
        pillar2Title: 'NEURAL WORKFLOWS',
        pillar2Desc: 'Smart automation that reduces manual toil by up to 90%.',
        pillar3Title: 'FLUID UX',
        pillar3Desc: 'Cybernetic, accessible, and ultra-fast user experiences.'
      },
      skills: {
        tag: '// 02. TECHNICAL MATRIX',
        title: 'CORE STACK & CAPABILITIES',
        subtitle: 'A comprehensive overview of production-tested technologies, languages, database architectures, and automation suites.',
        filterAll: 'ALL MODULES',
        filterFrontend: 'FRONTEND',
        filterBackend: 'BACKEND',
        filterDatabase: 'DATABASE',
        filterTools: 'TOOLS',
        filterAi: 'AI & AUTOMATION',
        tagFrontend: 'UI / UX / CLIENT',
        tagBackend: 'APIS / SERVICES',
        tagDatabase: 'PERSISTENCE / STORAGE',
        tagTools: 'DEVOPS / WORKFLOW',
        tagAi: 'NEURAL / INTELLIGENCE'
      },
      projects: {
        tag: '// 03. MISSION DIRECTIVES',
        title: 'PROJECTS PORTFOLIO',
        subtitle: 'Production deployments, intelligent systems, and scalable applications engineered with modern web and AI frameworks.',
        statusProd: 'PRODUCTION',
        statusLive: 'LIVE SYSTEM',
        statusAuto: 'AUTONOMOUS',
        statusExp: 'EXPERIMENTAL',
        p1Title: 'PROJECT 01 — COBOT MANAGEMENT CRM',
        p1Desc: 'A management platform for collaborative robotics, customer management, and maintenance tracking. Features real-time IoT telemetry, service scheduling, and diagnostics dashboards.',
        p2Title: 'PROJECT 02 — OPEN HYPE E-COMMERCE',
        p2Desc: 'An e-commerce platform with product catalogs, inventory management, and online ordering. Built for high-throughput transactions with resilient checkout flows and responsive interfaces.',
        p3Title: 'PROJECT 03 — AI AUTOMATION SYSTEM',
        p3Desc: 'An AI-powered automation solution for business workflows. Integrates autonomous multi-agent reasoning, document extraction, vector indexing, and automated webhook triggers.',
        p4Title: 'PROJECT 04 — PERSONAL SOFTWARE PROJECT',
        p4Desc: 'A placeholder for an additional application. Features high-concurrency microservices, modular data synchronization, and developer telemetry tooling.',
        btnGithub: 'GITHUB REPO',
        btnLive: 'LIVE DEMO'
      },
      experience: {
        tag: '// 04. CHRONOLOGY & PROTOCOLS',
        title: 'EXPERIENCE & EDUCATION',
        subtitle: 'A vertical track of professional roles, technical achievements, academic milestones, and certifications.',
        tabWork: 'WORK CHRONOLOGY',
        tabEdu: 'EDUCATION & CERTS',
        role1: 'Lead Full Stack & AI Automation Developer',
        company1: '[COMPANY NAME / TECH LAB]',
        period1: '2024 — PRESENT',
        resp1_1: 'Architected and deployed enterprise microservices and collaborative robotics telemetry platforms.',
        resp1_2: 'Integrated LLM-based autonomous agent networks with n8n, saving 30+ engineering hours per week.',
        resp1_3: 'Designed responsive high-frequency dashboards with real-time WebSocket state management.',
        role2: 'Full Stack Software Engineer',
        company2: '[SOFTWARE STUDIO / ENTERPRISE]',
        period2: '2022 — 2024',
        resp2_1: 'Engineered scalable web applications using TypeScript, Next.js, Python, and PostgreSQL.',
        resp2_2: 'Streamlined Docker container workflows and CI/CD automated deployment pipelines.',
        resp2_3: 'Implemented secure token-based authentication and role-based access control (RBAC).',
        role3: 'Junior Software Developer',
        company3: '[DIGITAL VENTURES / STARTUP]',
        period3: '2021 — 2022',
        resp3_1: 'Developed RESTful API endpoints and integrated relational database schemas with PostgreSQL & MySQL.',
        resp3_2: 'Collaborated with UX/UI design teams to build pixel-perfect responsive web components.',
        resp3_3: 'Authored comprehensive automated unit tests and API integration suites.',
        edu1Role: 'B.S. in Computer Science / Software Engineering',
        edu1Org: '[UNIVERSITY / INSTITUTION NAME]',
        edu1Period: '2018 — 2022',
        edu1_1: 'Graduated with honors; specialized in Algorithms, Distributed Systems, and Database Architectures.',
        edu1_2: 'Capstone Project: Autonomous Telemetry Monitoring System for Embedded Controllers.',
        cert1Role: 'Generative AI & Autonomous Agent Architecture',
        cert1Org: 'AI & AUTOMATION SPECIALIST',
        cert1Period: 'CERTIFICATION',
        cert1_1: 'Advanced credential in multi-agent orchestration, function calling, and vector search retrieval.',
        cert1_2: 'Practical certification in enterprise n8n workflow integrations and API resilience.',
        cert2Role: 'Docker & Cloud-Native Architecture',
        cert2Org: 'CLOUD & CONTAINERS',
        cert2Period: 'CERTIFICATION',
        cert2_1: 'Comprehensive credential in containerization, multi-stage builds, and microservices clustering.'
      },
      contact: {
        tag: '// 05. TRANSMISSION PROTOCOL',
        title: 'ESTABLISH SECURE LINK',
        subtitle: 'Direct communication frequency for project inquiries, technical collaborations, and full-time engineering opportunities.',
        commsTitle: 'COMMUNICATION FREQUENCIES',
        labelInbox: 'DIRECT INBOX',
        labelLocation: 'PHYSICAL NODE',
        valLocation: 'Astana, Kazakhstan',
        labelStatus: 'AVAILABILITY STATUS',
        valStatus: 'Accepting New Directives',
        labelSec: 'SECURITY PROTOCOL',
        valSec: 'TLS 1.3 // PGP Verified',
        latency: 'RESPONSE LATENCY: TYPICALLY < 24 HOURS // TIME ZONE: UTC+5 (ASTANA)',
        terminalReady: 'TERMINAL // INPUT_READY',
        nameLabel: 'OPERATOR IDENTIFIER [YOUR NAME] *',
        namePlaceholder: 'e.g. Elena Rostova',
        emailLabel: 'RETURN FREQUENCY [EMAIL ADDRESS] *',
        emailPlaceholder: 'e.g. operator@domain.com',
        subjectLabel: 'PACKET HEADER [SUBJECT] *',
        subjectPlaceholder: 'e.g. Software Engineering Opportunity',
        messageLabel: 'PAYLOAD DATA [MESSAGE] *',
        messagePlaceholder: 'Detail project parameters, requirements, or inquiry...',
        btnSubmit: 'TRANSMIT PACKET',
        btnSubmitting: 'TRANSMITTING PACKETS...',
        errName: 'Please provide a valid operator identifier.',
        errEmail: 'Please enter a valid transmission email address.',
        errSubject: 'Please designate a transmission subject.',
        errMessage: 'Payload message must contain at least 10 characters.',
        errGeneral: '>> TRANSMISSION ABORTED: Please correct highlighted fields.',
        successTitle: '[✓] TRANSMISSION PACKET VALIDATED & BUFFERED',
        successNotice: 'Notice: Frontend template mode active. To route live transmissions, connect your Formspree/EmailJS endpoint in js/script.js.'
      },
      footer: {
        tagline: 'ARCHITECTING INTELLIGENT EXPERIENCES FOR THE DIGITAL FRONTIER',
        copyright: '© 2026 ERZHAN IKRAMOV. ALL RIGHTS RESERVED.',
        backToTop: 'BACK TO TOP'
      },
      toasts: {
        boot: 'SYS.BOOT: Welcome, Operator Erzhan Ikramov. Neural link online.',
        langSwitched: 'LANGUAGE PROTOCOL: ENGLISH SYNCHRONIZED',
        packetSent: 'TRANSMISSION PACKET BUFFERED',
        addressCopied: 'FREQUENCY ADDRESS COPIED TO BUFFER'
      }
    },

    // ------------------------------------------------------------------------
    // RUSSIAN (Русский)
    // ------------------------------------------------------------------------
    ru: {
      langCode: 'RU',
      operatorName: 'ЕРЖАН ИКРАМОВ',
      nav: {
        home: 'Главная',
        about: 'Обо мне',
        skills: 'Навыки',
        projects: 'Проекты',
        experience: 'Опыт',
        contact: 'Контакты',
        netStatus: 'СЕТЬ: ОНЛАЙН',
        langTitle: 'ЯЗЫК СИСТЕМЫ'
      },
      hero: {
        telemetry: 'SYS.ONLINE // УЗЕЛ АСТАНА // 51.1694° N, 71.4491° E',
        greeting: 'ПРИВЕТ, МИР. Я',
        name: 'ЕРЖАН ИКРАМОВ',
        profession: 'FULL STACK РАЗРАБОТЧИК | ИНЖЕНЕР AI-АВТОМАТИЗАЦИИ',
        titles: [
          'Full Stack разработчик',
          'Инженер AI-автоматизации',
          'Архитектор систем и облака',
          'Специалист по LLM пайплайнам',
          'Креативный веб-инженер'
        ],
        intro: 'Я создаю цифровые интерфейсы, интеллектуальные системы и программные решения, объединяющие технологии с реальными задачами.',
        btnExplore: 'СМОТРЕТЬ РАБОТЫ',
        btnContact: 'СВЯЗАТЬСЯ',
        btnCv: 'СКАЧАТЬ РЕЗЮМЕ',
        profileId: 'ID: ОПЕРАТИВНИК // 0x7E3',
        profileStatus: 'СТАТУС: ДОСТУПЕН',
        scrollText: 'ПРОКРУТИТЕ ДЛЯ ДЕШИФРОВКИ'
      },
      about: {
        tag: '// 01. ДОСЬЕ И ПРОФИЛЬ',
        title: 'ОБ АРХИТЕКТОРЕ',
        subtitle: 'Объединение сложных распределенных backend-архитектур с высокопроизводительными интерфейсами и автономными AI-пайплайнами.',
        p1: 'Я — <strong>Ержан Икрамов</strong>, Full Stack разработчик и инженер AI-автоматизации. Специализируюсь на проектировании отказоустойчивых цифровых систем, масштабируемых backend-микросервисов и современных интерфейсов.',
        p2: 'Мой инженерный опыт охватывает разработку веб-приложений, облачные развертывания и автоматизацию бизнес-процессов. Я создаю автономных AI-агентов, оркестрирую сложные LLM-конвейеры и создаю высоконадежные платформы, устраняющие операционную рутину.',
        p3: 'Мои цели — разработка интеллектуальных вычислительных платформ и высоконагруженных систем. В свободное время исследую распределенные реестры, телеметрию робототехники и креативные веб-технологии.',
        statId: 'ИДЕНТИФИКАТОР:',
        statNode: 'ТЕКУЩИЙ УЗЕЛ:',
        statNodeVal: 'АСТАНА, КЗ',
        statCore: 'СИСТЕМНОЕ ЯДРО:',
        statCoreVal: 'FULL STACK И AI',
        statAvail: 'ДОСТУПНОСТЬ:',
        statAvailVal: 'ОТКРЫТ К ПРЕДЛОЖЕНИЯМ',
        btnComms: 'НАЧАТЬ СВЯЗЬ',
        cardLocationLabel: 'ЛОКАЦИЯ',
        cardLocationVal: 'Астана, Казахстан',
        cardRoleLabel: 'ОСНОВНАЯ РОЛЬ',
        cardRoleVal: 'Full Stack разработчик',
        cardFocusLabel: 'СТРАТЕГИЧЕСКИЙ ФОКУС',
        cardFocusVal: 'AI и автоматизация',
        cardAvailLabel: 'ТЕКУЩИЙ СТАТУС',
        cardAvailVal: 'Открыт к предложениям',
        pillar1Title: 'ВЫСОКАЯ НАДЕЖНОСТЬ',
        pillar1Desc: 'Отказоустойчивая архитектура и стандарты чистого кода.',
        pillar2Title: 'НЕЙРОННЫЕ ПРОЦЕССЫ',
        pillar2Desc: 'Интеллектуальная автоматизация, снижающая рутину до 90%.',
        pillar3Title: 'ПЛАВНЫЙ UX',
        pillar3Desc: 'Кибернетические, доступные и сверхбыстрые интерфейсы.'
      },
      skills: {
        tag: '// 02. ТЕХНИЧЕСКАЯ МАТРИЦА',
        title: 'СТЕК И КОМПЕТЕНЦИИ',
        subtitle: 'Комплексный обзор проверенных в продакшене технологий, языков программирования, баз данных и средств автоматизации.',
        filterAll: 'ВСЕ МОДУЛИ',
        filterFrontend: 'FRONTEND',
        filterBackend: 'BACKEND',
        filterDatabase: 'БАЗЫ ДАННЫХ',
        filterTools: 'ИНСТРУМЕНТЫ',
        filterAi: 'AI И АВТОМАТИЗАЦИЯ',
        tagFrontend: 'UI / UX / КЛИЕНТ',
        tagBackend: 'API / СЕРВИСЫ',
        tagDatabase: 'ХРАНЕНИЕ / ДАННЫЕ',
        tagTools: 'DEVOPS / РАЗРАБОТКА',
        tagAi: 'НЕЙРОСЕТИ / АГЕНТЫ'
      },
      projects: {
        tag: '// 03. ДИРЕКТИВЫ МИССИЙ',
        title: 'ПОРТФОЛИО ПРОЕКТОВ',
        subtitle: 'Продакшен-системы, интеллектуальные сервисы и масштабируемые решения на базе современных веб- и AI-фреймворков.',
        statusProd: 'ПРОДАКШЕН',
        statusLive: 'РАБОТАЕТ',
        statusAuto: 'АВТОНОМНЫЙ',
        statusExp: 'ЭКСПЕРИМЕНТ',
        p1Title: 'ПРОЕКТ 01 — COBOT MANAGEMENT CRM',
        p1Desc: 'Платформа управления коллаборативной робототехникой, взаимоотношениями с клиентами и сервисным обслуживанием. Включает телеметрию IoT в реальном времени и графики ТО.',
        p2Title: 'ПРОЕКТ 02 — OPEN HYPE E-COMMERCE',
        p2Desc: 'Платформа электронной коммерции с каталогом товаров, учетом складских запасов и онлайн-заказами. Спроектирована для высоких нагрузок с мгновенным чекаутом.',
        p3Title: 'ПРОЕКТ 03 — AI AUTOMATION SYSTEM',
        p3Desc: 'Комплексное решение для автоматизации бизнес-процессов на базе AI. Объединяет мультиагентные цепочки, извлечение документов, векторный поиск и вебхуки.',
        p4Title: 'ПРОЕКТ 04 — PERSONAL SOFTWARE PROJECT',
        p4Desc: 'Платформа для распределенных микросервисов, модульной синхронизации данных и мониторинга системных метрик.',
        btnGithub: 'РЕПОЗИТОРИЙ GITHUB',
        btnLive: 'ДЕМО-ВЕРСИЯ'
      },
      experience: {
        tag: '// 04. ХРОНОЛОГИЯ И ПРОТОКОЛЫ',
        title: 'ОПЫТ И ОБРАЗОВАНИЕ',
        subtitle: 'Вертикальный таймлайн профессиональных ролей, технических достижений, академических степеней и сертификатов.',
        tabWork: 'ХРОНОЛОГИЯ РАБОТЫ',
        tabEdu: 'ОБРАЗОВАНИЕ И СЕРТИФИКАТЫ',
        role1: 'Ведущий Full Stack & AI разработчик',
        company1: '[КОМПАНИЯ / ТЕХНОЛОГИЧЕСКАЯ ЛАБОРАТОРИЯ]',
        period1: '2024 — ПО НАСТ. ВРЕМЯ',
        resp1_1: 'Проектирование и запуск корпоративных микросервисов и телеметрии для коллаборативной робототехники.',
        resp1_2: 'Внедрение автономных LLM-агентов через n8n, экономящее более 30 инженерных часов еженедельно.',
        resp1_3: 'Разработка высокочастотных панелей мониторинга на базе WebSocket в режиме реального времени.',
        role2: 'Full Stack инженер-программист',
        company2: '[ИТ-СТУДИЯ / КОРПОРАЦИЯ]',
        period2: '2022 — 2024',
        resp2_1: 'Разработка масштабируемых веб-приложений с использованием TypeScript, Next.js, Python и PostgreSQL.',
        resp2_2: 'Оптимизация Docker-контейнеров и автоматизация CI/CD пайплайнов доставки ПО.',
        resp2_3: 'Реализация защищенной токен-аутентификации и ролевого доступа пользователей (RBAC).',
        role3: 'Младший разработчик ПО',
        company3: '[СТАРТАП / ВЕНЧУРНЫЙ ПРОЕКТ]',
        period3: '2021 — 2022',
        resp3_1: 'Создание REST API эндпоинтов и проектирование реляционных схем БД в PostgreSQL и MySQL.',
        resp3_2: 'Сотрудничество с UX/UI дизайнерами для верстки пиксель-перфект адаптивных интерфейсов.',
        resp3_3: 'Написание автоматических интеграционных и модульных тестов.',
        edu1Role: 'Бакалавр: Компьютерные науки и программная инженерия',
        edu1Org: '[НАИМЕНОВАНИЕ УНИВЕРСИТЕТА]',
        edu1Period: '2018 — 2022',
        edu1_1: 'Окончил с отличием; специализация на алгоритмах, распределенных системах и архитектуре БД.',
        edu1_2: 'Дипломный проект: Автономная система мониторинга телеметрии для встраиваемых контроллеров.',
        cert1Role: 'Архитектура генеративного ИИ и автономных агентов',
        cert1Org: 'AI & AUTOMATION SPECIALIST',
        cert1Period: 'СЕРТИФИКАТ',
        cert1_1: 'Продвинутый уровень оркестрации мультиагентных систем, вызова функций и векторного поиска.',
        cert1_2: 'Практическая сертификация по интеграциям корпоративных сценариев в n8n.',
        cert2Role: 'Docker и Cloud-Native архитектура',
        cert2Org: 'ОБЛАЧНЫЕ ТЕХНОЛОГИИ',
        cert2Period: 'СЕРТИФИКАТ',
        cert2_1: 'Комплексная квалификация в области контейнеризации и микросервисной кластеризации.'
      },
      contact: {
        tag: '// 05. ПРОТОКОЛ ПЕРЕДАЧИ',
        title: 'УСТАНОВИТЬ СВЯЗЬ',
        subtitle: 'Прямая линия связи для вопросов по проектам, технического сотрудничества и предложений о работе.',
        commsTitle: 'КАНАЛЫ СВЯЗИ',
        labelInbox: 'ПРЯМОЙ EMAIL',
        labelLocation: 'ФИЗИЧЕСКИЙ УЗЕЛ',
        valLocation: 'Астана, Казахстан',
        labelStatus: 'СТАТУС ДОСТУПНОСТИ',
        valStatus: 'Принимаю новые директивы',
        labelSec: 'ПРОТОКОЛ БЕЗОПАСНОСТИ',
        valSec: 'TLS 1.3 // PGP шифрование',
        latency: 'ВРЕМЯ ОТВЕТА: ОБЫЧНО < 24 ЧАСОВ // ЧАСОВОЙ ПОЯС: UTC+5 (АСТАНА)',
        terminalReady: 'ТЕРМИНАЛ // ГОТОВ К ВВОДУ',
        nameLabel: 'ИДЕНТИФИКАТОР ОПЕРАТОРА [ВАШЕ ИМЯ] *',
        namePlaceholder: 'напр. Елена Ростова',
        emailLabel: 'ОБРАТНАЯ ЧАСТОТА [EMAIL АДРЕС] *',
        emailPlaceholder: 'напр. operator@domain.com',
        subjectLabel: 'ЗАГОЛОВОК ПАКЕТА [ТЕМА] *',
        subjectPlaceholder: 'напр. Предложение о сотрудничестве',
        messageLabel: 'ПОЛЕЗНАЯ НАГРУЗКА [СООБЩЕНИЕ] *',
        messagePlaceholder: 'Опишите параметры проекта, технические требования или вопрос...',
        btnSubmit: 'ПЕРЕДАТЬ ПАКЕТ',
        btnSubmitting: 'ПЕРЕДАЧА ДАННЫХ...',
        errName: 'Пожалуйста, укажите имя оператора.',
        errEmail: 'Введите корректный email адрес.',
        errSubject: 'Укажите тему сообщения.',
        errMessage: 'Сообщение должно содержать не менее 10 символов.',
        errGeneral: '>> ПЕРЕДАЧА ПРЕРВАНА: Исправьте выделенные поля.',
        successTitle: '[✓] ПАКЕТ ДАННЫХ ПРОВЕРЕН И ЗАБУФЕРИЗИРОВАН',
        successNotice: 'Примечание: Режим фронтенд-шаблона. Для реальной отправки укажите эндпоинт Formspree/EmailJS в js/script.js.'
      },
      footer: {
        tagline: 'ПРОЕКТИРОВАНИЕ ИНТЕЛЛЕКТУАЛЬНЫХ СИСТЕМ ДЛЯ ЦИФРОВОГО БУДУЩЕГО',
        copyright: '© 2026 ЕРЖАН ИКРАМОВ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.',
        backToTop: 'НАВЕРХ'
      },
      toasts: {
        boot: 'SYS.BOOT: Добро пожаловать, оператор Ержан Икрамов. Нейролинк в норме.',
        langSwitched: 'ПРОТОКОЛ ЯЗЫКА: РУССКИЙ СИНХРОНИЗИРОВАН',
        packetSent: 'ПАКЕТ ПЕРЕДАЧИ ЗАБУФЕРИЗИРОВАН',
        addressCopied: 'АДРЕС СВЯЗИ СКОПИРОВАН В БУФЕР'
      }
    },

    // ------------------------------------------------------------------------
    // KAZAKH (Қазақша)
    // ------------------------------------------------------------------------
    kz: {
      langCode: 'KZ',
      operatorName: 'ЕРЖАН ИКРАМОВ',
      nav: {
        home: 'Басты',
        about: 'Мен туралы',
        skills: 'Дағдылар',
        projects: 'Жобалар',
        experience: 'Тәжірибе',
        contact: 'Байланыс',
        netStatus: 'ЖЕЛІ: ОНЛАЙН',
        langTitle: 'ЖҮЙЕ ТІЛІ'
      },
      hero: {
        telemetry: 'SYS.ONLINE // АСТАНА ТОРАБЫ // 51.1694° N, 71.4491° E',
        greeting: 'СӘЛЕМ, ӘЛЕМ. МЕН',
        name: 'ЕРЖАН ИКРАМОВ',
        profession: 'FULL STACK ӘЗІРЛЕУШІ | AI-АВТОМАТТАНДЫРУ ИНЖЕНЕРІ',
        titles: [
          'Full Stack әзірлеуші',
          'AI-автоматтандыру инженері',
          'Бұлттық жүйелер архитекторы',
          'LLM конвейерлері маманы',
          'Интерактивті веб-инженер'
        ],
        intro: 'Мен технологияларды шынайы мәселелермен байланыстыратын сандық жүйелерді, зияткерлік алгоритмдерді және бағдарламалық шешімдерді жасаймын.',
        btnExplore: 'ЖҰМЫСТАРЫМДЫ КӨРУ',
        btnContact: 'БАЙЛАНЫСУ',
        btnCv: 'ТҮЙІНДЕМЕ (CV)',
        profileId: 'ID: ОПЕРАТИВНИК // 0x7E3',
        profileStatus: 'СТАТУС: ҚОЛЖЕТІМДІ',
        scrollText: 'ШИФРДЫ АШУ ҮШІН АЙНАЛДЫРЫҢЫЗ'
      },
      about: {
        tag: '// 01. ДЕРЕК ЖӘНЕ ПРОФИЛЬ',
        title: 'АРХИТЕКТОР ТУРАЛЫ',
        subtitle: 'Күрделі бөлінген backend-архитектураларды өнімді интерфейстермен және автономды AI конвейерлерімен біріктіру.',
        p1: 'Мен — <strong>Ержан Икрамов</strong>, Full Stack әзірлеуші және AI-автоматтандыру инженерімін. Сенімді бағдарламалық экожүйелерді, ауқымды backend микросервистерін және заманауи сандық интерфейстерді құрумен айналысамын.',
        p2: 'Менің инженерлік тәжірибем веб-қосымшаларды жасауды, бұлттық инфрақұрылымды және бизнес-процестерді автоматтандыруды қамтиды. Мен автономды AI-агенттерді жобалап, күрделі LLM конвейерлерін басқарамын.',
        p3: 'Мақсатым — жоғары жүктемелі веб-қосымшалар мен автономды есептеу жүйелерін дамыту. Бос уақытымда робототехника телеметриясын, бөлінген жүйелерді және креативті веб-технологияларды зерттеймін.',
        statId: 'ИДЕНТИФИКАТОР:',
        statNode: 'АҒЫМДАҒЫ ТОРАП:',
        statNodeVal: 'АСТАНА, ҚЗ',
        statCore: 'ЖҮЙЕЛІК ӨЗЕК:',
        statCoreVal: 'FULL STACK ЖӘНЕ AI',
        statAvail: 'ҚОЛЖЕТІМДІЛІК:',
        statAvailVal: 'ҰСЫНЫСТАРҒА АШЫҚ',
        btnComms: 'БАЙЛАНЫС ОРНАТУ',
        cardLocationLabel: 'ОРНАЛАСҚАН ЖЕРІ',
        cardLocationVal: 'Астана, Қазақстан',
        cardRoleLabel: 'НЕГІЗГІ ҚЫЗМЕТІ',
        cardRoleVal: 'Full Stack әзірлеуші',
        cardFocusLabel: 'СТРАТЕГИЯЛЫҚ БАҒЫТ',
        cardFocusVal: 'AI және автоматтандыру',
        cardAvailLabel: 'АҒЫМДАҒЫ СТАТУС',
        cardAvailVal: 'Ұсыныстарға ашық',
        pillar1Title: 'ЖОҒАРЫ СЕНІМДІЛІК',
        pillar1Desc: 'Ақауларға төзімді жүйе дизайны және таза код стандарттары.',
        pillar2Title: 'НЕЙРОНДЫҚ АҒЫНДАР',
        pillar2Desc: 'Қол еңбегін 90%-ға дейін қысқартатын ақылды автоматтандыру.',
        pillar3Title: 'ЖЫЛДАМ UX',
        pillar3Desc: 'Кибернетикалық, ыңғайлы және өте жылдам пайдаланушы интерфейстері.'
      },
      skills: {
        tag: '// 02. ТЕХНИКАЛЫҚ МАТРИЦА',
        title: 'НЕГІЗГІ ТЕХНОЛОГИЯЛАР МЕН ДАҒДЫЛАР',
        subtitle: 'Өндірісте сыналған технологиялардың, бағдарламалау тілдерінің, дерекқор архитектуралары мен автоматтандыру құралдарының шолуы.',
        filterAll: 'БАРЛЫҚ МОДУЛЬДЕР',
        filterFrontend: 'FRONTEND',
        filterBackend: 'BACKEND',
        filterDatabase: 'ДЕРЕКҚОРЛАР',
        filterTools: 'ҚҰРАЛДАР',
        filterAi: 'AI ЖӘНЕ АВТОМАТТАНДЫРУ',
        tagFrontend: 'UI / UX / КЛИЕНТ',
        tagBackend: 'API / СЕРВИСТЕР',
        tagDatabase: 'САҚТАУ / ДЕРЕКТЕР',
        tagTools: 'DEVOPS / ЖҰМЫС ҮРДІСІ',
        tagAi: 'НЕЙРОЖЕЛІ / АГЕНТТЕР'
      },
      projects: {
        tag: '// 03. МИССИЯ ДИРЕКТИВАЛАРЫ',
        title: 'ЖОБАЛАР ПОРТФОЛИОСЫ',
        subtitle: 'Заманауи веб және AI шеңберлерінде құрылған өндірістік жүйелер мен масштабталатын бағдарламалар.',
        statusProd: 'ӨНДІРІСТЕ',
        statusLive: 'ЖҰМЫС ІСТЕЙДІ',
        statusAuto: 'АВТОНОМДЫ',
        statusExp: 'ТӘЖІРИБЕЛІК',
        p1Title: 'ЖОБА 01 — COBOT MANAGEMENT CRM',
        p1Desc: 'Коллаборативті робототехниканы, тұтынушыларды басқару және сервистік қызметті қадағалау платформасы. Нақты уақыттағы IoT телеметриясы бар.',
        p2Title: 'ЖОБА 02 — OPEN HYPE E-COMMERCE',
        p2Desc: 'Тауарлар каталогы, қойманы басқару және онлайн тапсырыс беру платформасы. Жоғары жүктемелер мен жылдам төлемдерге арналған.',
        p3Title: 'ЖОБА 03 — AI AUTOMATION SYSTEM',
        p3Desc: 'Бизнес-процестерді автоматтандыруға арналған жасанды интеллект шешімі. Көп агентті жүйелер мен құжаттарды өңдеуді біріктіреді.',
        p4Title: 'ЖОБА 04 — PERSONAL SOFTWARE PROJECT',
        p4Desc: 'Бөлінген микросервистер мен деректерді синхрондауға арналған жеке қосымша.',
        btnGithub: 'GITHUB РЕПОЗИТОРИЙІ',
        btnLive: 'ТІКЕЛЕЙ ДЕМО'
      },
      experience: {
        tag: '// 04. ХРОНОЛОГИЯ МЕН ХАТТАМАЛАР',
        title: 'ТӘЖІРИБЕ ЖӘНЕ БІЛІМ',
        subtitle: 'Кәсіби лауазымдардың, техникалық жетістіктердің, академиялық кезеңдер мен сертификаттардың тізбегі.',
        tabWork: 'ЖҰМЫС ТӘЖІРИБЕСІ',
        tabEdu: 'БІЛІМ ЖӘНЕ СЕРТИФИКАТТАР',
        role1: 'Жетекші Full Stack және AI әзірлеуші',
        company1: '[КОМПАНИЯ АТАУЫ / ТЕХНОЛАБ]',
        period1: '2024 — ҚАЗІРГІ УАҚЫТҚА ДЕЙІН',
        resp1_1: 'Кәсіпорын деңгейіндегі микросервистер мен робототехника телеметриясын жобалау.',
        resp1_2: 'n8n арқылы LLM агенттерін біріктіріп, аптасына 30+ инженерлік сағатты үнемдеу.',
        resp1_3: 'Нақты уақыттағы WebSocket күйін басқаратын мониторинг панельдерін жасау.',
        role2: 'Full Stack бағдарламалық жасақтама инженері',
        company2: '[БАҒДАРЛАМАЛЫҚ СТУДИЯ / КӘСІПОРЫН]',
        period2: '2022 — 2024',
        resp2_1: 'TypeScript, Next.js, Python және PostgreSQL арқылы ауқымды веб-қосымшаларды жасау.',
        resp2_2: 'Docker контейнерлері мен CI/CD автоматтандырылған құрастыру конвейерлерін оңтайландыру.',
        resp2_3: 'Қауіпсіз токендік аутентификация және рөлдік қолжетімділікті (RBAC) енгізу.',
        role3: 'Кіші бағдарламашы',
        company3: '[СТАРТАП / ВЕНЧУРЛЫҚ ЖОБА]',
        period3: '2021 — 2022',
        resp3_1: 'RESTful API эндпоинттерін жасау және PostgreSQL мен MySQL-де реляциялық дерекқорларды басқару.',
        resp3_2: 'Дизайн командасымен бірлесіп бейімделгіш веб-интерфейстерді әзірлеу.',
        resp3_3: 'Автоматтандырылған сынақ тестілерін жазу.',
        edu1Role: 'Бакалавр: Компьютерлік ғылымдар және бағдарламалық инженерия',
        edu1Org: '[УНИВЕРСИТЕТ АТАУЫ]',
        edu1Period: '2018 — 2022',
        edu1_1: 'Үздік бітірді; алгоритмдер, бөлінген жүйелер және дерекқор архитектуралары бойынша маманданды.',
        edu1_2: 'Дипломдық жоба: Ендірілген контроллерлерге арналған автономды телеметриялық жүйе.',
        cert1Role: 'Генеративті AI және автономды агенттер архитектурасы',
        cert1Org: 'AI & AUTOMATION SPECIALIST',
        cert1Period: 'СЕРТИФИКАТ',
        cert1_1: 'Көп агентті басқару, функцияларды шақыру және векторлық іздеу бойынша біліктілік.',
        cert1_2: 'n8n арқылы кәсіпорындық автоматтандыру интеграцияларының тәжірибелік сертификаты.',
        cert2Role: 'Docker және бұлттық архитектура',
        cert2Org: 'БҰЛТТЫҚ ТЕХНОЛОГИЯЛАР',
        cert2Period: 'СЕРТИФИКАТ',
        cert2_1: 'Контейнерлеу және микросервистік кластерлеу бойынша толық біліктілік.'
      },
      contact: {
        tag: '// 05. БАЙЛАНЫС ХАТТАМАСЫ',
        title: 'ҚАУІПСІЗ БАЙЛАНЫС ОРНАТУ',
        subtitle: 'Жобалар бойынша сұрақтар, техникалық ынтымақтастық және жұмыс ұсыныстары үшін тікелей арна.',
        commsTitle: 'БАЙЛАНЫС АРНАЛАРЫ',
        labelInbox: 'ТІКЕЛЕЙ EMAIL',
        labelLocation: 'ФИЗИКАЛЫҚ ТОРАП',
        valLocation: 'Астана, Қазақстан',
        labelStatus: 'ҚОЛЖЕТІМДІЛІК СТАТУСЫ',
        valStatus: 'Жаңа тапсырмаларды қабылдауда',
        labelSec: 'ҚАУІПСІЗДІК ХАТТАМАСЫ',
        valSec: 'TLS 1.3 // PGP шифрланған',
        latency: 'ЖАУАП БЕРУ УАҚЫТЫ: ӘДЕТТЕ < 24 САҒАТ // УАҚЫТ БЕЛДЕУІ: UTC+5 (АСТАНА)',
        terminalReady: 'ТЕРМИНАЛ // ЕНГІЗУГЕ ДАЙЫН',
        nameLabel: 'ОПЕРАТОР ИДЕНТИФИКАТОРЫ [АТЫҢЫЗ] *',
        namePlaceholder: 'мыс. Динара Сапар',
        emailLabel: 'КЕРІ БАЙЛАНЫС ЧАСТОТАСЫ [EMAIL] *',
        emailPlaceholder: 'мыс. operator@domain.com',
        subjectLabel: 'ПАКЕТ ТАҚЫРЫБЫ [ТАҚЫРЫП] *',
        subjectPlaceholder: 'мыс. Ынтымақтастық туралы ұсыныс',
        messageLabel: 'ЖҮКТЕМЕ МӘЛІМЕТІ [ХАБАРЛАМА] *',
        messagePlaceholder: 'Жоба параметрлерін, талаптарды немесе сұрақты жазыңыз...',
        btnSubmit: 'ПАКЕТТІ ЖІБЕРУ',
        btnSubmitting: 'ДЕРЕКТЕР БЕРІЛУДЕ...',
        errName: 'Оператор атын дұрыс енгізіңіз.',
        errEmail: 'Жарамды email адресін жазыңыз.',
        errSubject: 'Хабарлама тақырыбын көрсетіңіз.',
        errMessage: 'Хабарлама кемінде 10 таңбадан тұруы керек.',
        errGeneral: '>> БЕРІЛУ ТОҚТАТЫЛДЫ: Белгіленген өрістерді түзеңіз.',
        successTitle: '[✓] ДЕРЕКТЕР ПАКЕТІ ТЕКСЕРІЛДІ ЖӘНЕ БУФЕРГЕ ЖАЗЫЛДЫ',
        successNotice: 'Ескертпе: Фронтенд-үлгі режимі белсенді. Хабарламаны тікелей жіберу үшін js/script.js файлындағы Formspree/EmailJS параметрін баптаңыз.'
      },
      footer: {
        tagline: 'САНДЫҚ БОЛАШАҚҚА АРНАЛҒАН ЗИЯТКЕРЛІК ЖҮЙЕЛЕРДІ ЖОБАЛАУ',
        copyright: '© 2026 ЕРЖАН ИКРАМОВ. БАРЛЫҚ ҚҰҚЫҚТАР ҚОРҒАЛҒАН.',
        backToTop: 'ЖОҒАРЫҒА'
      },
      toasts: {
        boot: 'SYS.BOOT: Қош келдіңіз, оператор Ержан Икрамов. Нейробайланыс белсенді.',
        langSwitched: 'ТІЛ ХАТТАМАСЫ: ҚАЗАҚША СИНХРОНДАЛДЫ',
        packetSent: 'ХАБАРЛАМА ПАКЕТІ БУФЕРГЕ ЖАЗЫЛДЫ',
        addressCopied: 'БАЙЛАНЫС АДРЕСІ БУФЕРГЕ КӨШІРІЛДІ'
      }
    },

    // ------------------------------------------------------------------------
    // GERMAN (Deutsch)
    // ------------------------------------------------------------------------
    de: {
      langCode: 'DE',
      operatorName: 'ERZHAN IKRAMOV',
      nav: {
        home: 'Startseite',
        about: 'Über mich',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
        experience: 'Erfahrung',
        contact: 'Kontakt',
        netStatus: 'NETZ: ONLINE',
        langTitle: 'SYS.SPRACHE'
      },
      hero: {
        telemetry: 'SYS.ONLINE // KNOTEN ASTANA // 51.1694° N, 71.4491° E',
        greeting: 'HALLO, WELT. ICH BIN',
        name: 'ERZHAN IKRAMOV',
        profession: 'FULL-STACK-ENTWICKLER | KI-AUTOMATISIERUNGSINGENIEUR',
        titles: [
          'Full-Stack-Entwickler',
          'KI-Automatisierungsingenieur',
          'System- & Cloud-Architekt',
          'LLM-Workflow-Spezialist',
          'Kreativer Webtechnologe'
        ],
        intro: 'Ich entwickle digitale Erlebnisse, intelligente Systeme und Softwarelösungen, die Technologie mit realen Herausforderungen verbinden.',
        btnExplore: 'MEINE ARBEITEN',
        btnContact: 'KONTAKTIEREN',
        btnCv: 'LEBENSLAUF',
        profileId: 'ID: OPERATOR // 0x7E3',
        profileStatus: 'STATUS: VERFÜGBAR',
        scrollText: 'SCROLLEN ZUM ENTSCHLÜSSELN'
      },
      about: {
        tag: '// 01. PROFIL & DOSSIER',
        title: 'ÜBER DEN ARCHITEKTEN',
        subtitle: 'Verbindung komplexer verteilter Backend-Architekturen mit performanten Benutzeroberflächen und autonomen KI-Pipelines.',
        p1: 'Ich bin <strong>Erzhan Ikramov</strong>, Full-Stack-Entwickler und Ingenieur für KI-Automatisierung. Mein Fokus liegt auf der Entwicklung ausfallsicherer Software-Ökosysteme, skalierbarer Backend-Microservices und moderner Benutzeroberflächen.',
        p2: 'Meine Erfahrung umfasst moderne Webentwicklung, Cloud-Native-Bereitstellungen und Workflow-Automatisierung. Ich bin spezialisiert auf autonome KI-Agenten, komplexe LLM-Pipelines und geschäftskritische Systeme.',
        p3: 'Mein Ziel ist der Aufbau intelligenter, hochbelastbarer Softwaresysteme. In meiner Freizeit beschäftige ich mich mit verteilten Systemen, Robotik-Telemetrie und kreativen Webtechnologien.',
        statId: 'IDENTIFIKATOR:',
        statNode: 'KNOTENPUNKT:',
        statNodeVal: 'ASTANA, KZ',
        statCore: 'SYSTEMKERN:',
        statCoreVal: 'FULL-STACK & KI',
        statAvail: 'VERFÜGBARKEIT:',
        statAvailVal: 'OFFEN FÜR ANGEBOTE',
        btnComms: 'KONTAKT INITIALISIEREN',
        cardLocationLabel: 'STANDORT',
        cardLocationVal: 'Astana, Kasachstan',
        cardRoleLabel: 'HAUPTROLLE',
        cardRoleVal: 'Full-Stack-Entwickler',
        cardFocusLabel: 'FOKUS',
        cardFocusVal: 'KI & Automatisierung',
        cardAvailLabel: 'VERFÜGBARKEIT',
        cardAvailVal: 'Offen für Angebote',
        pillar1Title: 'HOHE RESILIENZ',
        pillar1Desc: 'Fehlertolerantes Systemdesign und saubere Codestandards.',
        pillar2Title: 'NEURONALE WORKFLOWS',
        pillar2Desc: 'Intelligente Automatisierung, die manuelle Arbeit um bis zu 90% reduziert.',
        pillar3Title: 'FLUIDE UX',
        pillar3Desc: 'Cybernetische, barrierefreie und ultraschnelle Nutzererlebnisse.'
      },
      skills: {
        tag: '// 02. TECHNISCHE MATRIX',
        title: 'TECH-STACK & FÄHIGKEITEN',
        subtitle: 'Umfassende Übersicht über praxiserprobte Technologien, Programmiersprachen, Datenbankarchitekturen und Automatisierungs-Tools.',
        filterAll: 'ALLE MODULE',
        filterFrontend: 'FRONTEND',
        filterBackend: 'BACKEND',
        filterDatabase: 'DATENBANKEN',
        filterTools: 'WERKZEUGE',
        filterAi: 'KI & AUTOMATISIERUNG',
        tagFrontend: 'UI / UX / CLIENT',
        tagBackend: 'APIS / DIENSTE',
        tagDatabase: 'DATENSPEICHERUNG',
        tagTools: 'DEVOPS / WORKFLOW',
        tagAi: 'NEURONAL / KI-AGENTEN'
      },
      projects: {
        tag: '// 03. MISSIONSDIREKTIVEN',
        title: 'PROJEKT-PORTFOLIO',
        subtitle: 'Produktionsreife Systeme, intelligente Plattformen und skalierbare Web- und KI-Anwendungen.',
        statusProd: 'PRODUKTION',
        statusLive: 'LIVE-SYSTEM',
        statusAuto: 'AUTONOM',
        statusExp: 'EXPERIMENTELL',
        p1Title: 'PROJEKT 01 — COBOT MANAGEMENT CRM',
        p1Desc: 'Verwaltungsplattform für kollaborative Robotik, Kundenmanagement und Wartungsverfolgung mit Echtzeit-IoT-Telemetrie und Service-Dashboards.',
        p2Title: 'PROJEKT 02 — OPEN HYPE E-COMMERCE',
        p2Desc: 'E-Commerce-Plattform mit Produktkatalogen, Bestandsverwaltung und Online-Bestellungen. Entwickelt für hohe Transaktionsraten.',
        p3Title: 'PROJEKT 03 — AI AUTOMATION SYSTEM',
        p3Desc: 'KI-gestützte Automatisierungslösung für Unternehmensabläufe mit Multi-Agenten-Orchestrierung, Dokumentenextraktion und Webhooks.',
        p4Title: 'PROJEKT 04 — PERSONAL SOFTWARE PROJECT',
        p4Desc: 'Plattform für hochparallele Microservices, modulare Datensynchronisation und Entwickler-Telemetrie.',
        btnGithub: 'GITHUB REPO',
        btnLive: 'LIVE-DEMO'
      },
      experience: {
        tag: '// 04. CHRONOLOGIE & PROTOKOLLE',
        title: 'ERFAHRUNG & AUSBILDUNG',
        subtitle: 'Vertikaler Zeitstrahl über berufliche Stationen, technische Meilensteine, akademische Abschlüsse und Zertifikate.',
        tabWork: 'BERUFSERFAHRUNG',
        tabEdu: 'AUSBILDUNG & ZERTIFIKATE',
        role1: 'Lead Full-Stack & KI-Automatisierungsentwickler',
        company1: '[UNTERNEHMEN / TECH-LABOR]',
        period1: '2024 — HEUTE',
        resp1_1: 'Architektur und Bereitstellung von Microservices und Telemetrieplattformen für kollaborative Robotik.',
        resp1_2: 'Integration von LLM-Agentennetzwerken via n8n mit über 30 Stunden wöchentlicher Zeitersparnis.',
        resp1_3: 'Entwicklung reaktionsschneller Echtzeit-Dashboards mit WebSocket-Zustandsverwaltung.',
        role2: 'Full-Stack Software-Ingenieur',
        company2: '[SOFTWARE-STUDIO / UNTERNEHMEN]',
        period2: '2022 — 2024',
        resp2_1: 'Entwicklung skalierbarer Webanwendungen mit TypeScript, Next.js, Python und PostgreSQL.',
        resp2_2: 'Optimierung von Docker-Containern und automatisierten CI/CD-Deployment-Pipelines.',
        resp2_3: 'Implementierung sicherer tokenbasierter Authentifizierung und rollenbasierter Zugriffskontrolle (RBAC).',
        role3: 'Junior Software-Entwickler',
        company3: '[STARTUP / DIGITAL VENTURES]',
        period3: '2021 — 2022',
        resp3_1: 'Entwicklung von REST-APIs und relationalen Datenbankschemata in PostgreSQL und MySQL.',
        resp3_2: 'Zusammenarbeit mit UI/UX-Designern für pixelgenaue responsive Weboberflächen.',
        resp3_3: 'Erstellung automatisierter Unit- und Integrationstests.',
        edu1Role: 'Bachelor in Informatik / Software Engineering',
        edu1Org: '[UNIVERSITÄTSNAME]',
        edu1Period: '2018 — 2022',
        edu1_1: 'Mit Auszeichnung abgeschlossen; Schwerpunkt auf Algorithmen, verteilten Systemen und Datenbanken.',
        edu1_2: 'Abschlussarbeit: Autonomes Telemetrie-Überwachungssystem für Embedded-Controller.',
        cert1Role: 'Generative KI & Autonome Agenten-Architektur',
        cert1Org: 'AI & AUTOMATION SPECIALIST',
        cert1Period: 'ZERTIFIKAT',
        cert1_1: 'Fortgeschrittene Zertifizierung in Multi-Agenten-Orchestrierung und Vektorsuche.',
        cert1_2: 'Praxiszertifikat für n8n-Workflow-Integrationen in Unternehmen.',
        cert2Role: 'Docker & Cloud-Native Architektur',
        cert2Org: 'CLOUD & CONTAINER',
        cert2Period: 'ZERTIFIKAT',
        cert2_1: 'Umfassende Qualifikation in Containerisierung und Microservice-Clustering.'
      },
      contact: {
        tag: '// 05. ÜBERTRAGUNGSPROTOKOLL',
        title: 'SICHERE VERBINDUNG HERSTELLEN',
        subtitle: 'Direkter Kommunikationskanal für Projektanfragen, technische Kooperationen und Festanstellungen.',
        commsTitle: 'KOMMUNIKATIONSKANÄLE',
        labelInbox: 'DIREKTER POSTEINGANG',
        labelLocation: 'PHYSISCHER KNOTEN',
        valLocation: 'Astana, Kasachstan',
        labelStatus: 'VERFÜGBARKEITSSTATUS',
        valStatus: 'Nimmt neue Projekte an',
        labelSec: 'SICHERHEITSPROTOKOLL',
        valSec: 'TLS 1.3 // PGP-Verschlüsselung',
        latency: 'ANTWORTZEIT: IN DER REGEL < 24 STUNDEN // ZEITZONE: UTC+5 (ASTANA)',
        terminalReady: 'TERMINAL // EINGABEBEREIT',
        nameLabel: 'OPERATOR-KENNUNG [IHR NAME] *',
        namePlaceholder: 'z.B. Elena Rostova',
        emailLabel: 'RÜCKMELDE-FREQUENZ [E-MAIL-ADRESSE] *',
        emailPlaceholder: 'z.B. operator@domain.com',
        subjectLabel: 'PAKET-KOPFZEILE [BETREFF] *',
        subjectPlaceholder: 'z.B. Projektanfrage Software-Engineering',
        messageLabel: 'NUTZDATEN [NACHRICHT] *',
        messagePlaceholder: 'Beschreiben Sie Ihre Projektparameter oder Anfrage...',
        btnSubmit: 'PAKET ÜBERTRAGEN',
        btnSubmitting: 'ÜBERTRAGE DATEN...',
        errName: 'Bitte geben Sie einen gültigen Namen ein.',
        errEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        errSubject: 'Bitte geben Sie einen Betreff an.',
        errMessage: 'Die Nachricht muss mindestens 10 Zeichen lang sein.',
        errGeneral: '>> ÜBERTRAGUNG ABGEBROCHEN: Bitte korrigieren Sie die markierten Felder.',
        successTitle: '[✓] ÜBERTRAGUNGSPAKET GEPRÜFT UND GEPUFFERT',
        successNotice: 'Hinweis: Frontend-Vorschaumodus aktiv. Für echten E-Mail-Versand Formspree/EmailJS-Endpunkt in js/script.js konfigurieren.'
      },
      footer: {
        tagline: 'ARCHITEKTUR INTELLIGENTER SYSTEME FÜR DIE DIGITALE ZUKUNFT',
        copyright: '© 2026 ERZHAN IKRAMOV. ALLE RECHTE VORBEHALTEN.',
        backToTop: 'NACH OBEN'
      },
      toasts: {
        boot: 'SYS.BOOT: Willkommen, Operator Erzhan Ikramov. Neuronale Verbindung stabil.',
        langSwitched: 'SPRACHPROTOKOLL: DEUTSCH SYNCHRONISIERT',
        packetSent: 'ÜBERTRAGUNGSPAKET GEPUFFERT',
        addressCopied: 'ADRESSE IN DIE ZWISCHENABLAGE KOPIERT'
      }
    },

    // ------------------------------------------------------------------------
    // JAPANESE (日本語)
    // ------------------------------------------------------------------------
    ja: {
      langCode: 'JA',
      operatorName: 'エルジャン・イクラモフ',
      nav: {
        home: 'ホーム',
        about: '私について',
        skills: 'スキル',
        projects: 'プロジェクト',
        experience: '経歴',
        contact: 'お問い合わせ',
        netStatus: '通信: オンライン',
        langTitle: 'システム言語'
      },
      hero: {
        telemetry: 'SYS.ONLINE // アスタナ・ノード // 51.1694° N, 71.4491° E',
        greeting: 'ハロー・ワールド。私は',
        name: 'エルジャン・イクラモフ',
        profession: 'フルスタックエンジニア | AI自動化エンジニア',
        titles: [
          'フルスタックエンジニア',
          'AI自動化エンジニア',
          'システム＆クラウドアーキテクト',
          'LLMワークフロー専門家',
          'クリエイティブWeb技術者'
        ],
        intro: 'テクノロジーを現実世界の課題と結びつけるデジタル体験、インテリジェントシステム、およびソフトウェアソリューションを構築します。',
        btnExplore: '実績を見る',
        btnContact: 'お問い合わせ',
        btnCv: '履歴書を表示',
        profileId: 'ID: オペレーター // 0x7E3',
        profileStatus: 'ステータス: 稼働可能',
        scrollText: 'スクロールして復号'
      },
      about: {
        tag: '// 01. 機密プロファイル',
        title: 'アーキテクトについて',
        subtitle: '複雑な分散バックエンドアーキテクチャと高性能なUI、自律型AIパイプラインを高度に融合。',
        p1: '私は<strong>エルジャン・イクラモフ</strong>（Erzhan Ikramov）、フルスタックエンジニア兼AI自動化エンジニアです。耐障害性に優れたソフトウェアエコシステム、スケーラブルなバックエンド、先進的なUIの構築を専門としています。',
        p2: 'Webアプリケーション開発、クラウドネイティブ環境の構築、ワークフロー自動化に豊富な経験を有しています。自律型AIエージェントの設計や大規模言語モデル（LLM）のパイプライン構築を手がけ、業務の摩擦を排除します。',
        p3: '自律的で高信頼なインテリジェント計算基盤と大規模Webシステムの開発を追求しています。開発以外の時間には、分散システム、ロボティクス・テレメトリ、革新的なWeb技術を研究しています。',
        statId: '識別子:',
        statNode: '現在ノード:',
        statNodeVal: 'カザフスタン、アスタナ',
        statCore: 'システム中核:',
        statCoreVal: 'フルスタック＆AI',
        statAvail: '稼働状況:',
        statAvailVal: '案件募集中',
        btnComms: '通信を開始する',
        cardLocationLabel: '所在地',
        cardLocationVal: 'カザフスタン、アスタナ',
        cardRoleLabel: '主な役割',
        cardRoleVal: 'フルスタックエンジニア',
        cardFocusLabel: '注力分野',
        cardFocusVal: 'AI & 自動化',
        cardAvailLabel: '現在の稼働',
        cardAvailVal: '案件募集中',
        pillar1Title: '高耐障害性',
        pillar1Desc: 'フォールトトレラントな設計とクリーンコード基準の徹底。',
        pillar2Title: 'ニューラル自動化',
        pillar2Desc: '手動タスクを最大90%削減する高度な自動化。',
        pillar3Title: '流麗なUX',
        pillar3Desc: 'サイバネティックかつ高速でアクセシブルな体験。'
      },
      skills: {
        tag: '// 02. 技術マトリクス',
        title: 'コアスタックと技術力',
        subtitle: '本番環境で検証済みのテクノロジー、言語、データベース、自動化ツールの包括的な概要。',
        filterAll: '全モジュール',
        filterFrontend: 'フロントエンド',
        filterBackend: 'バックエンド',
        filterDatabase: 'データベース',
        filterTools: '開発ツール',
        filterAi: 'AI & 自動化',
        tagFrontend: 'UI / UX / クライアント',
        tagBackend: 'API / サービス',
        tagDatabase: 'データ永続化',
        tagTools: 'DevOps / ワークフロー',
        tagAi: 'ニューラル / 知能エージェント'
      },
      projects: {
        tag: '// 03. ミッション実績',
        title: 'プロジェクトポートフォリオ',
        subtitle: '最新のWebおよびAI技術で構築された実稼働システムとスケーラブルなアプリケーション。',
        statusProd: '本番稼働中',
        statusLive: '稼働システム',
        statusAuto: '自律動作',
        statusExp: '実験的プロジェクト',
        p1Title: 'PROJECT 01 — 協働ロボット管理CRM',
        p1Desc: '協働ロボット工学、顧客管理、保守追跡のためのプラットフォーム。リアルタイムIoTテレメトリと保守スケジュールを搭載。',
        p2Title: 'PROJECT 02 — OPEN HYPE ECプラットフォーム',
        p2Desc: '商品カタログ、在庫管理、オンライン注文を備えたECプラットフォーム。高スループット決済と堅牢なチェックアウトを実現。',
        p3Title: 'PROJECT 03 — AIワークフロー自動化システム',
        p3Desc: '企業向けAI自動化ソリューション。マルチエージェント推論、文書解析、ベクトル検索、自動Webhookを統合。',
        p4Title: 'PROJECT 04 — 自作ソフトウェアプロジェクト',
        p4Desc: '高並行性マイクロサービスとデータ同期、開発者テレメトリツールを備えたカスタムアプリケーション。',
        btnGithub: 'GITHUBリポジトリ',
        btnLive: 'ライブデモ'
      },
      experience: {
        tag: '// 04. 経歴・プロトコル',
        title: '職歴と学歴',
        subtitle: '実務経験、技術的達成、学術的背景、および取得資格の垂直タイムライン。',
        tabWork: '職務経歴',
        tabEdu: '学歴・認定資格',
        role1: 'リード フルスタック＆AI自動化開発者',
        company1: '[企業名 / テックラボ]',
        period1: '2024 — 現在',
        resp1_1: 'エンタープライズ・マイクロサービスおよび協働ロボット・テレメトリ基盤の設計・構築。',
        resp1_2: 'n8nを活用したLLM自律エージェントの統合により、週あたり30時間以上のエンジニア工数を削減。',
        resp1_3: 'WebSocketを活用したリアルタイム高頻度監視ダッシュボードの構築。',
        role2: 'フルスタック ソフトウェアエンジニア',
        company2: '[ソフトウェアスタジオ / 企業]',
        period2: '2022 — 2024',
        resp2_1: 'TypeScript、Next.js、Python、PostgreSQLを使用した高信頼Webアプリケーションの設計。',
        resp2_2: 'Dockerコンテナの最適化およびCI/CDデプロイパイプラインの自動化。',
        resp2_3: '堅牢なトークン認証およびロールベースのアクセス制御（RBAC）の実装。',
        role3: 'ジュニア ソフトウェアエンジニア',
        company3: '[スタートアップ / ベンチャー]',
        period3: '2021 — 2022',
        resp3_1: 'RESTful APIエンドポイントの開発およびPostgreSQL・MySQLのリレーショナルスキーマ構築。',
        resp3_2: 'UI/UXデザイナーと連携し、ピクセルパーフェクトなレスポンシブWebを実装。',
        resp3_3: '自動化された単体テストおよびAPI統合テストスイートの作成。',
        edu1Role: '学士: コンピュータサイエンス / ソフトウェア工学',
        edu1Org: '[大学名]',
        edu1Period: '2018 — 2022',
        edu1_1: '優等で卒業。アルゴリズム、分散システム、データベースアーキテクチャを専攻。',
        edu1_2: '卒業研究: 組込みコントローラ向け自律型テレメトリ監視システム。',
        cert1Role: '生成AI＆自律エージェント アーキテクチャ認定',
        cert1Org: 'AI & AUTOMATION SPECIALIST',
        cert1Period: '認定資格',
        cert1_1: 'マルチエージェントオーケストレーション、ファンクションコーリング、ベクトル検索の高度資格。',
        cert1_2: 'エンタープライズn8nワークフロー統合の実践認定。',
        cert2Role: 'Docker＆クラウドネイティブ アーキテクチャ',
        cert2Org: 'クラウド＆コンテナ',
        cert2Period: '認定資格',
        cert2_1: 'コンテナ化、マルチステージビルド、マイクロサービスクラスタリングの包括的資格。'
      },
      contact: {
        tag: '// 05. 通信プロトコル',
        title: '暗号化通信を確立',
        subtitle: 'プロジェクトのご相談、技術提携、採用・業務委託に関する直接通信周波数。',
        commsTitle: '通信チャネル',
        labelInbox: 'ダイレクト受信箱',
        labelLocation: '物理ノード',
        valLocation: 'カザフスタン、アスタナ',
        labelStatus: '稼働ステータス',
        valStatus: '新規プロジェクト受付中',
        labelSec: 'セキュリティ仕様',
        valSec: 'TLS 1.3 // PGP検証済み',
        latency: '応答時間: 通常24時間以内 // タイムゾーン: UTC+5（アスタナ）',
        terminalReady: 'ターミナル // 入力準備完了',
        nameLabel: 'オペレーター名 [お名前] *',
        namePlaceholder: '例: 田中 太郎',
        emailLabel: '返信用周波数 [メールアドレス] *',
        emailPlaceholder: '例: operator@domain.com',
        subjectLabel: 'パケットヘッダー [件名] *',
        subjectPlaceholder: '例: ソフトウェア開発のご相談',
        messageLabel: 'ペイロードデータ [メッセージ本文] *',
        messagePlaceholder: 'プロジェクトの要件やご質問をご記入ください...',
        btnSubmit: 'パケットを送信',
        btnSubmitting: 'データ送信中...',
        errName: 'お名前を正しく入力してください。',
        errEmail: '有効なメールアドレスを入力してください。',
        errSubject: '件名を入力してください。',
        errMessage: 'メッセージは10文字以上で入力してください。',
        errGeneral: '>> 送信中断: 赤くハイライトされた項目を確認してください。',
        successTitle: '[✓] 送信パケットが検証され、バッファに格納されました',
        successNotice: '※現在フロントエンドプレビューモードです。実際の送信用にjs/script.jsでFormspreeやEmailJSの接続を行ってください。'
      },
      footer: {
        tagline: 'デジタルフロンティアのためのインテリジェント体験を設計する',
        copyright: '© 2026 エルジャン・イクラモフ（ERZHAN IKRAMOV）. ALL RIGHTS RESERVED.',
        backToTop: '最上部へ戻る'
      },
      toasts: {
        boot: 'SYS.BOOT: ようこそ、オペレーター エルジャン・イクラモフ。ニューラルリンク確立。',
        langSwitched: '言語プロトコル: 日本語を同期しました',
        packetSent: '送信パケットがバッファされました',
        addressCopied: '連絡先アドレスをクリップボードにコピーしました'
      }
    }
  },

  /**
   * Initialize Language from localStorage or browser preference
   */
  init() {
    const saved = localStorage.getItem('cyber_portfolio_lang');
    if (saved && this.supportedLanguages.includes(saved)) {
      this.currentLang = saved;
    } else {
      const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
      if (browserLang === 'ru') this.currentLang = 'ru';
      else if (browserLang === 'kk' || browserLang === 'kz') this.currentLang = 'kz';
      else if (browserLang === 'de') this.currentLang = 'de';
      else if (browserLang === 'ja') this.currentLang = 'ja';
      else this.currentLang = 'en';
    }
    this.applyTranslations(this.currentLang, false);
  },

  /**
   * Set and apply a language
   * @param {string} lang - 'en' | 'ru' | 'kz' | 'de' | 'ja'
   * @param {boolean} triggerToast - whether to show CyberToast
   */
  setLanguage(lang, triggerToast = true) {
    if (!this.supportedLanguages.includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem('cyber_portfolio_lang', lang);
    this.applyTranslations(lang, triggerToast);
  },

  /**
   * Apply translations to all DOM elements marked with data-i18n
   */
  applyTranslations(lang, triggerToast = false) {
    const t = this.translations[lang] || this.translations.en;
    document.documentElement.lang = lang === 'kz' ? 'kk' : lang;

    // Helper to resolve nested key e.g. "hero.greeting"
    const resolve = (path, obj) => {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = resolve(key, t);
      if (val !== undefined) {
        if (typeof val === 'string' && val.includes('<')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = resolve(key, t);
      if (val) el.placeholder = val;
    });

    // Update glitch text attributes (data-text)
    document.querySelectorAll('[data-i18n-glitch]').forEach((el) => {
      const key = el.getAttribute('data-i18n-glitch');
      const val = resolve(key, t);
      if (val) {
        el.setAttribute('data-text', val);
        el.textContent = val;
      }
    });

    // Update Cyber Glitch Button text & clones
    document.querySelectorAll('.cybr-btn').forEach((btn) => {
      const key = btn.getAttribute('data-i18n-btn');
      if (key) {
        const val = resolve(key, t);
        if (val) {
          const contentEl = btn.querySelector('.cybr-btn__content');
          const glitchEl = btn.querySelector('.cybr-btn__glitch');
          if (contentEl) contentEl.textContent = val;
          if (glitchEl) glitchEl.textContent = val + '_';
        }
      }
    });

    // Update Orbit Menu active label and items
    const langLabel = document.getElementById('current-lang-label');
    if (langLabel) langLabel.textContent = t.langCode;

    document.querySelectorAll('.orbit-lang-item').forEach((item) => {
      if (item.getAttribute('data-lang') === lang) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Notify Typewriter to update titles
    if (window.updateTypewriterTitles && t.hero && t.hero.titles) {
      window.updateTypewriterTitles(t.hero.titles);
    }

    // Trigger CyberToast if available
    if (triggerToast && window.cyberToaster) {
      window.cyberToaster.show(t.toasts.langSwitched, 'info');
    }
  }
};

if (typeof window !== 'undefined') {
  window.I18N = I18N;
}
