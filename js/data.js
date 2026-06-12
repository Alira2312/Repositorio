/* =========================================================
   data.js — Contenido del portafolio en 2 idiomas (es / en).
   - "contact": datos que NO cambian con el idioma (correo, redes, etc.)
   - "es" / "en": todo el texto traducible (UI, servicios, proyectos, CV...)
   Para editar: cambia el bloque del idioma que quieras. La estructura de
   ambos idiomas debe ser igual (mismos proyectos, mismas habilidades, etc.).
   ========================================================= */
window.PORTFOLIO_DATA = {

  /* ---------- Datos compartidos (idioma-neutral) ---------- */
  contact: {
    name: 'Alberto Lira',
    email: 'alberto.lira2312@gmail.com',
    phone: '+52 664 293 9122',
    phoneRaw: '+526642939122',
    whatsapp: '526642939122',                  // dígitos (lada país 52 + número)
    github: 'https://github.com/tu-usuario',   // <-- tu GitHub
    linkedin: 'https://www.linkedin.com/in/tu-usuario', // <-- tu LinkedIn
    experienceYears: '4',
    age: 27,
    cvFile: 'assets/cv-alberto-lira.pdf'
  },

  /* ===================== ESPAÑOL ===================== */
  es: {
    ui: {
      nav: { about: 'Sobre mí', services: 'Servicios', process: 'Proceso', skills: 'Habilidades', projects: 'Proyectos', whyme: 'Por qué yo', quote: 'Cotiza', cv: 'CV', contact: 'Contáctame' },
      hero: { greeting: 'Hola, soy', cta1: 'Ver mi trabajo', cta2: 'Trabajemos juntos', years: 'años de experiencia', ageUnit: 'años' },
      about: { eyebrow: 'Sobre mí', title: 'Convierto problemas operativos en software confiable', cta: 'Hablemos de tu proyecto', badge: 'años de experiencia' },
      services: { eyebrow: 'Lo que ofrezco', title: 'Servicios', subtitle: 'Soluciones de software a la medida, de la base de datos a la interfaz.' },
      process: { eyebrow: 'Proceso', title: 'Cómo trabajo', subtitle: 'Un camino claro y sin rodeos, de la idea a la entrega.' },
      skills: { eyebrow: 'Tecnologías', title: 'Lenguajes, herramientas y sistemas', subtitle: 'El stack con el que trabajo todos los días.', tools: 'Herramientas y sistemas', domains: 'Áreas de dominio' },
      projects: { eyebrow: 'Portafolio', title: 'Proyectos & cosas que he hecho', subtitle: 'Una selección de sistemas y soluciones en las que he trabajado.', all: 'Todos', detail: 'Ver detalle' },
      whyme: { eyebrow: 'Por qué trabajar conmigo', title: 'Lo que me hace diferente', subtitle: 'No solo escribo código: resuelvo el problema de operación completo.' },
      cv: { eyebrow: 'Trayectoria', title: 'Currículum', subtitle: 'Mi experiencia y formación profesional.', download: 'Descargar CV (PDF)', experience: 'Experiencia', education: 'Educación', certs: 'Certificaciones & idiomas' },
      contact: { eyebrow: 'Contacto', title: '¿Tienes un proyecto en mente?', lead: 'Cuéntame qué necesitas y con gusto te ayudo a llevarlo a la realidad. Respondo en menos de 24 horas.', name: 'Nombre', email: 'Correo', subject: 'Asunto', message: 'Mensaje', send: 'Enviar mensaje' },
      modal: { challenge: 'El reto', solution: 'La solución', result: 'Resultado', features: 'Funcionalidades', view: 'Ver demo', code: 'Código', tech: 'Tecnologías' },
      quote: { eyebrow: 'Cotizador', title: 'Cotiza tu proyecto en segundos', subtitle: 'Elige el tipo de proyecto y lo que necesitas; te muestro un estimado al instante.', step1: '1. ¿Qué necesitas?', step2: '2. Agrega lo que apliques', estimate: 'Estimado aproximado', currency: 'MXN', cta: 'Pedir esta cotización por WhatsApp', note: 'Estimación orientativa. La cotización final depende del alcance y se acuerda contigo sin compromiso.', playLine: '¿Lo estás pensando? Mientras tanto, juega un rato 👇', play: 'Jugar', modeOnce: 'Pago único', modeRent: 'Renta mensual', weeks: 'Tiempo estimado', weeksUnit: 'semanas', breakdown: 'Desglose', base: 'Proyecto base', total: 'Total', perMonth: '/mes', rentNote: 'Renta mensual: incluye hosting, soporte y actualizaciones. Sin pago inicial fuerte.' },
      game: { title: 'Juega un rato', tetris: 'Tetris', sudoku: 'Sudoku', pick: 'Elige tu juego', score: 'Puntos', lines: 'Líneas', start: 'Jugar', pause: 'Pausa', over: '¡Fin del juego!', how: 'Flechas para mover/rotar · ↓ para bajar · o usa los botones', restart: 'Reiniciar', sNew: 'Nuevo', sErase: 'Borrar', sEasy: 'Fácil', sMed: 'Media', sHard: 'Difícil', sWin: '¡Resuelto! 🎉', sHow: 'Toca una celda y elige un número (1-9).' },
      footer: { rights: 'Todos los derechos reservados.' }
    },
    role: 'Desarrollador de Software & Soluciones',
    tagline: 'Diseño y construyo sistemas de almacén, integraciones y aplicaciones web a la medida — del modelo de datos en SQL Server hasta la interfaz que usa el operador.',
    availability: 'Disponible para proyectos',
    location: 'México',
    whatsappMsg: 'Hola Alberto, vi tu portafolio y me gustaría platicar sobre un proyecto.',
    bio: [
      'Soy desarrollador de software con foco en operaciones y logística. Me especializo en sistemas de gestión de almacén (WMS), punto de venta, clasificación de inventario, fulfillment y reportería operativa.',
      'Trabajo el ciclo completo: diseño la base de datos, escribo los stored procedures, levanto la API y entrego una interfaz limpia y usable. Me gusta resolver problemas reales del piso de operación con software confiable.'
    ],
    highlights: [
      { icon: 'bi-database-fill', text: 'Bases de datos SQL Server de alto volumen' },
      { icon: 'bi-diagram-3-fill', text: 'Arquitectura backend ASP.NET / Web API' },
      { icon: 'bi-phone-fill', text: 'Apps móviles (Ionic / Angular)' },
      { icon: 'bi-graph-up-arrow', text: 'Reportería y automatización de procesos' }
    ],
    stats: [
      { value: '4',   label: 'Años de experiencia' },
      { value: '30+', label: 'Proyectos entregados' },
      { value: '10+', label: 'Sistemas en producción' },
      { value: '∞',   label: 'Café consumido' }
    ],
    services: [
      { icon: 'bi-window-stack', title: 'Aplicaciones Web a la medida', desc: 'Sistemas internos, paneles administrativos y portales construidos sobre ASP.NET MVC, Angular y Bootstrap.', items: ['Frontend responsivo', 'Backend robusto', 'Roles y permisos (RBAC)'] },
      { icon: 'bi-database-gear', title: 'Bases de datos & SQL', desc: 'Diseño de esquemas, stored procedures, optimización de consultas y migraciones en SQL Server.', items: ['Modelado de datos', 'Stored procedures', 'Tuning de performance'] },
      { icon: 'bi-shop', title: 'Puntos de venta (POS)', desc: 'Sistemas de punto de venta para retail y alimentos: ventas, tickets, combos y corte de caja.', items: ['Catálogo y precios', 'Tickets y caja', 'Reportes de venta'] },
      { icon: 'bi-box-seam', title: 'Inventario & almacén (WMS)', desc: 'Control de existencias, bins, movimientos, clasificación y fulfillment de órdenes.', items: ['Control de inventario', 'Entradas/salidas', 'Auditoría de ubicaciones'] },
      { icon: 'bi-arrow-left-right', title: 'Integraciones & APIs', desc: 'Conexión entre sistemas, automatización de flujos y servicios web REST.', items: ['APIs REST', 'Webhooks', 'ETL / sincronización'] },
      { icon: 'bi-file-earmark-bar-graph', title: 'Reportería & Dashboards', desc: 'Reportes operativos en Excel multi-hoja y tableros de indicadores para toma de decisiones.', items: ['Reportes Excel (.xlsx)', 'KPIs operativos', 'Exportes automatizados'] }
    ],
    process: [
      { icon: 'bi-chat-dots', step: '01', title: 'Contacto', desc: 'Me cuentas qué necesitas. Escucho el problema y aclaro dudas para entender el alcance real.' },
      { icon: 'bi-clipboard-check', step: '02', title: 'Propuesta', desc: 'Te entrego una propuesta clara: alcance, tiempos y costo. Sin sorpresas ni letras chiquitas.' },
      { icon: 'bi-code-square', step: '03', title: 'Desarrollo', desc: 'Construyo la solución con entregas y avances que puedes revisar, no una caja negra.' },
      { icon: 'bi-rocket-takeoff', step: '04', title: 'Entrega & soporte', desc: 'Pongo el sistema en marcha, te capacito y doy soporte para que todo siga funcionando.' }
    ],
    skillGroups: [
      { name: 'Lenguajes', icon: 'bi-code-slash', skills: [ { name: 'C# / .NET', level: 92 }, { name: 'JavaScript', level: 90 }, { name: 'SQL (T-SQL)', level: 93 }, { name: 'PHP', level: 75 }, { name: 'HTML5 / CSS3', level: 90 } ] },
      { name: 'Frameworks & Frontend', icon: 'bi-layers', skills: [ { name: 'ASP.NET MVC / Web API', level: 90 }, { name: 'Angular / AngularJS', level: 82 }, { name: 'Bootstrap', level: 90 }, { name: 'Ionic', level: 78 }, { name: 'Node.js', level: 72 } ] }
    ],
    tools: ['SQL Server', 'Visual Studio', 'VS Code', 'Git / GitHub', 'IIS', 'Coolify', 'Docker', 'Sentry', 'jQuery', 'Entity Framework', 'XAMPP', 'Postman', 'Linux', 'Windows Server'],
    domains: ['Punto de venta (retail / alimentos)', 'Gestión de inventario y almacén', 'Fulfillment y logística', 'Integraciones de sistemas', 'Reportería operativa', 'Soporte y diagnóstico de producción'],
    projects: [
      {
        title: 'Punto de Venta — Boutique', category: 'Punto de Venta', icon: 'bi-bag-heart', image: 'assets/img/pos-boutique.svg',
        desc: 'Sistema de punto de venta para boutique de ropa: catálogo por tallas y colores, ventas, tickets, control de caja y descuentos.',
        tags: ['POS', 'Ventas', 'Inventario', 'Tickets'], link: '', repo: '',
        problem: 'La boutique llevaba ventas e inventario a mano, con errores de stock por talla/color y cortes de caja lentos.',
        solution: 'Construí un POS con catálogo por variantes (talla/color), cobro rápido, impresión de ticket y descuento de inventario en tiempo real.',
        result: 'Cobros más rápidos, inventario confiable por variante y cortes de caja en minutos en lugar de horas.',
        features: ['Catálogo por talla y color', 'Ventas y tickets', 'Descuentos y promociones', 'Corte de caja por turno', 'Control de existencias']
      },
      {
        title: 'POS Donas & Café', category: 'Punto de Venta', icon: 'bi-cup-hot', image: 'assets/img/pos-donas.svg',
        desc: 'Punto de venta para cafetería/dulcería: menú de productos, combos, ventas rápidas en mostrador y corte de caja por turno.',
        tags: ['POS', 'Menú', 'Combos', 'Corte de caja'], link: '', repo: '',
        problem: 'En mostrador necesitaban cobrar muy rápido en hora pico y armar combos sin equivocarse en el precio.',
        solution: 'Desarrollé un POS táctil con menú visual, combos predefinidos y atajos para las ventas más comunes.',
        result: 'Filas más ágiles, menos errores de cobro y un corte de caja claro al cerrar el turno.',
        features: ['Menú visual por categorías', 'Combos y paquetes', 'Venta rápida en mostrador', 'Corte de caja por turno']
      },
      {
        title: 'Sistema de Ahorros', category: 'Finanzas', icon: 'bi-piggy-bank', image: 'assets/img/ahorros.svg',
        desc: 'Aplicación para registrar y dar seguimiento a ahorros: metas, aportaciones, retiros y reportes de saldo por usuario.',
        tags: ['Finanzas', 'Metas', 'Reportes'], link: '', repo: '',
        problem: 'Llevar el control de ahorros y aportaciones en hojas de cálculo era confuso y propenso a errores.',
        solution: 'Creé una app donde cada usuario registra aportaciones y retiros, define metas y ve su saldo y avance.',
        result: 'Transparencia total del saldo, historial de movimientos y metas con porcentaje de avance.',
        features: ['Metas de ahorro', 'Aportaciones y retiros', 'Historial de movimientos', 'Reportes de saldo por usuario']
      },
      {
        title: 'Gestor de Inventario', category: 'Inventario', icon: 'bi-clipboard-data', image: 'assets/img/inventario.svg',
        desc: 'Gestor de inventario: control de existencias, entradas y salidas, kardex y alertas automáticas por bajo stock.',
        tags: ['Inventario', 'Existencias', 'Alertas'], link: '', repo: '',
        problem: 'No había visibilidad real de existencias y se compraba de más o se quedaban sin producto clave.',
        solution: 'Implementé un gestor con kardex de entradas/salidas, niveles mínimos y alertas automáticas de reorden.',
        result: 'Stock confiable, menos quiebres de inventario y compras basadas en datos, no en suposiciones.',
        features: ['Kardex de entradas/salidas', 'Niveles mínimos', 'Alertas de bajo stock', 'Reportes de existencias']
      },
      {
        title: 'Proceso de Almacén', category: 'Inventario', icon: 'bi-box-seam', image: 'assets/img/almacen.svg',
        desc: 'Sistema de proceso de almacén: recepción, acomodo, conteos cíclicos y surtido, con trazabilidad de movimientos.',
        tags: ['Almacén', 'Conteos', 'Surtido', 'Trazabilidad'], link: '', repo: '',
        problem: 'El flujo de almacén (recibir, acomodar, surtir) no estaba estandarizado y se perdía la trazabilidad.',
        solution: 'Diseñé un proceso digital de recepción, acomodo por ubicación, conteos cíclicos y surtido con registro de cada movimiento.',
        result: 'Trazabilidad de punta a punta, conteos más exactos y un flujo de almacén ordenado y medible.',
        features: ['Recepción de mercancía', 'Acomodo por ubicación', 'Conteos cíclicos', 'Surtido y trazabilidad']
      }
    ],
    whyme: [
      { icon: 'bi-people-fill', title: 'Hablo con el operador', desc: 'Diseño pensando en quien usa el sistema todos los días, no solo en el código.' },
      { icon: 'bi-clipboard2-check-fill', title: 'Entregas claras', desc: 'Avances revisables y comunicación constante. Sabes en qué vas en todo momento.' },
      { icon: 'bi-stack', title: 'Del dato a la interfaz', desc: 'Cubro todo el ciclo: base de datos, backend, API e interfaz. Una sola persona, sin huecos.' },
      { icon: 'bi-headset', title: 'Soporte real', desc: 'No desaparezco al entregar: doy soporte y capacito a tu equipo.' }
    ],
    // Precios SOLO orientativos en MXN — AJÚSTALOS a tus tarifas reales.
    // base = precio del proyecto · weeks = semanas estimadas
    quote: {
      rentFactor: 0.10,   // renta mensual = total × este factor (incluye hosting/soporte)
      types: [
        { key: 'pos', label: 'Punto de venta', icon: 'bi-shop', base: 8000, weeks: 3 },
        { key: 'inv', label: 'Inventario / Almacén', icon: 'bi-box-seam', base: 12000, weeks: 4 },
        { key: 'web', label: 'Web a la medida', icon: 'bi-window-stack', base: 10000, weeks: 4 },
        { key: 'api', label: 'Integración / API', icon: 'bi-arrow-left-right', base: 9000, weeks: 3 },
        { key: 'report', label: 'Reportes / Dashboard', icon: 'bi-graph-up', base: 6000, weeks: 2 }
      ],
      addons: [
        { key: 'multi', label: 'Multiusuario y roles', icon: 'bi-people', price: 3000, weeks: 1 },
        { key: 'mobile', label: 'App móvil', icon: 'bi-phone', price: 6000, weeks: 3 },
        { key: 'reports', label: 'Reportes avanzados', icon: 'bi-bar-chart', price: 2500, weeks: 1 },
        { key: 'integ', label: 'Integración con otros sistemas', icon: 'bi-diagram-3', price: 4000, weeks: 2 },
        { key: 'support', label: 'Soporte y capacitación', icon: 'bi-headset', price: 2000, weeks: 1 },
        { key: 'deploy', label: 'Hosting y publicación', icon: 'bi-cloud-upload', price: 1500, weeks: 1 }
      ]
    },
    cv: {
      experience: [
        { period: '2022 — Presente', role: 'Desarrollador de Software', org: 'MI Technologies', desc: 'Desarrollo y soporte de sistemas de almacén, punto de venta e inventario. Diseño de base de datos, stored procedures, APIs y diagnóstico de operación en producción.' },
        { period: '20XX — 2022', role: 'Desarrollador Web', org: 'Empresa anterior', desc: 'Desarrollo de aplicaciones web internas, puntos de venta y portales. (Edita con tu experiencia real.)' }
      ],
      education: [
        { period: '20XX — 20XX', title: 'Ingeniería en Sistemas Computacionales', org: 'Universidad', desc: 'Formación en desarrollo de software, bases de datos y arquitectura de sistemas. (Edita con tus datos reales.)' }
      ],
      certifications: ['Español — Nativo', 'Inglés — Técnico / lectura', 'Microsoft SQL Server (agrega tus certificaciones reales)', 'Desarrollo web full-stack']
    }
  },

  /* ===================== ENGLISH ===================== */
  en: {
    ui: {
      nav: { about: 'About', services: 'Services', process: 'Process', skills: 'Skills', projects: 'Projects', whyme: 'Why me', quote: 'Quote', cv: 'Resume', contact: 'Contact me' },
      hero: { greeting: "Hi, I'm", cta1: 'See my work', cta2: "Let's work together", years: 'years of experience', ageUnit: 'years old' },
      about: { eyebrow: 'About me', title: 'I turn operational problems into reliable software', cta: "Let's talk about your project", badge: 'years of experience' },
      services: { eyebrow: 'What I offer', title: 'Services', subtitle: 'Custom software solutions, from the database to the interface.' },
      process: { eyebrow: 'Process', title: 'How I work', subtitle: 'A clear, straightforward path from idea to delivery.' },
      skills: { eyebrow: 'Technologies', title: 'Languages, tools and systems', subtitle: 'The stack I work with every day.', tools: 'Tools & systems', domains: 'Domain areas' },
      projects: { eyebrow: 'Portfolio', title: "Projects & things I've built", subtitle: "A selection of systems and solutions I've worked on.", all: 'All', detail: 'View details' },
      whyme: { eyebrow: 'Why work with me', title: 'What makes me different', subtitle: "I don't just write code: I solve the whole operational problem." },
      cv: { eyebrow: 'Career', title: 'Resume', subtitle: 'My professional experience and education.', download: 'Download CV (PDF)', experience: 'Experience', education: 'Education', certs: 'Certifications & languages' },
      contact: { eyebrow: 'Contact', title: 'Got a project in mind?', lead: "Tell me what you need and I'll gladly help you make it happen. I reply within 24 hours.", name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send message' },
      modal: { challenge: 'The challenge', solution: 'The solution', result: 'Result', features: 'Features', view: 'View demo', code: 'Code', tech: 'Technologies' },
      quote: { eyebrow: 'Quote', title: 'Get a quote in seconds', subtitle: 'Pick the project type and what you need; I show you an instant estimate.', step1: '1. What do you need?', step2: '2. Add what applies', estimate: 'Approximate estimate', currency: 'MXN', cta: 'Request this quote on WhatsApp', note: 'Indicative estimate. The final quote depends on scope and is agreed with you, no commitment.', playLine: 'Still thinking it over? Play a bit meanwhile 👇', play: 'Play', modeOnce: 'One-time', modeRent: 'Monthly rental', weeks: 'Estimated time', weeksUnit: 'weeks', breakdown: 'Breakdown', base: 'Base project', total: 'Total', perMonth: '/mo', rentNote: 'Monthly rental: includes hosting, support and updates. No large upfront payment.' },
      game: { title: 'Take a break', tetris: 'Tetris', sudoku: 'Sudoku', pick: 'Pick your game', score: 'Score', lines: 'Lines', start: 'Play', pause: 'Pause', over: 'Game over!', how: 'Arrows to move/rotate · ↓ to drop · or use the buttons', restart: 'Restart', sNew: 'New', sErase: 'Erase', sEasy: 'Easy', sMed: 'Medium', sHard: 'Hard', sWin: 'Solved! 🎉', sHow: 'Tap a cell and pick a number (1-9).' },
      footer: { rights: 'All rights reserved.' }
    },
    role: 'Software Developer & Solutions',
    tagline: 'I design and build warehouse systems, integrations and custom web apps — from the SQL Server data model to the interface the operator uses.',
    availability: 'Available for projects',
    location: 'Mexico',
    whatsappMsg: 'Hi Alberto, I saw your portfolio and would like to talk about a project.',
    bio: [
      'I am a software developer focused on operations and logistics. I specialize in warehouse management systems (WMS), point of sale, inventory classification, fulfillment and operational reporting.',
      'I work the full cycle: I design the database, write the stored procedures, build the API and deliver a clean, usable interface. I enjoy solving real shop-floor problems with reliable software.'
    ],
    highlights: [
      { icon: 'bi-database-fill', text: 'High-volume SQL Server databases' },
      { icon: 'bi-diagram-3-fill', text: 'ASP.NET / Web API backend architecture' },
      { icon: 'bi-phone-fill', text: 'Mobile apps (Ionic / Angular)' },
      { icon: 'bi-graph-up-arrow', text: 'Reporting and process automation' }
    ],
    stats: [
      { value: '4',   label: 'Years of experience' },
      { value: '30+', label: 'Projects delivered' },
      { value: '10+', label: 'Systems in production' },
      { value: '∞',   label: 'Coffee consumed' }
    ],
    services: [
      { icon: 'bi-window-stack', title: 'Custom web applications', desc: 'Internal systems, admin panels and portals built on ASP.NET MVC, Angular and Bootstrap.', items: ['Responsive frontend', 'Robust backend', 'Roles & permissions (RBAC)'] },
      { icon: 'bi-database-gear', title: 'Databases & SQL', desc: 'Schema design, stored procedures, query optimization and migrations on SQL Server.', items: ['Data modeling', 'Stored procedures', 'Performance tuning'] },
      { icon: 'bi-shop', title: 'Point of sale (POS)', desc: 'POS systems for retail and food: sales, receipts, combos and cash closeout.', items: ['Catalog & pricing', 'Receipts & cash', 'Sales reports'] },
      { icon: 'bi-box-seam', title: 'Inventory & warehouse (WMS)', desc: 'Stock control, bins, movements, classification and order fulfillment.', items: ['Inventory control', 'Inbound/outbound', 'Location audits'] },
      { icon: 'bi-arrow-left-right', title: 'Integrations & APIs', desc: 'Connecting systems, automating workflows and REST web services.', items: ['REST APIs', 'Webhooks', 'ETL / sync'] },
      { icon: 'bi-file-earmark-bar-graph', title: 'Reporting & dashboards', desc: 'Multi-sheet Excel operational reports and KPI dashboards for decision making.', items: ['Excel reports (.xlsx)', 'Operational KPIs', 'Automated exports'] }
    ],
    process: [
      { icon: 'bi-chat-dots', step: '01', title: 'Contact', desc: 'You tell me what you need. I listen to the problem and clarify doubts to understand the real scope.' },
      { icon: 'bi-clipboard-check', step: '02', title: 'Proposal', desc: 'I deliver a clear proposal: scope, timeline and cost. No surprises, no fine print.' },
      { icon: 'bi-code-square', step: '03', title: 'Development', desc: 'I build the solution with deliverables and progress you can review — not a black box.' },
      { icon: 'bi-rocket-takeoff', step: '04', title: 'Delivery & support', desc: 'I launch the system, train your team and provide support so everything keeps running.' }
    ],
    skillGroups: [
      { name: 'Languages', icon: 'bi-code-slash', skills: [ { name: 'C# / .NET', level: 92 }, { name: 'JavaScript', level: 90 }, { name: 'SQL (T-SQL)', level: 93 }, { name: 'PHP', level: 75 }, { name: 'HTML5 / CSS3', level: 90 } ] },
      { name: 'Frameworks & Frontend', icon: 'bi-layers', skills: [ { name: 'ASP.NET MVC / Web API', level: 90 }, { name: 'Angular / AngularJS', level: 82 }, { name: 'Bootstrap', level: 90 }, { name: 'Ionic', level: 78 }, { name: 'Node.js', level: 72 } ] }
    ],
    tools: ['SQL Server', 'Visual Studio', 'VS Code', 'Git / GitHub', 'IIS', 'Coolify', 'Docker', 'Sentry', 'jQuery', 'Entity Framework', 'XAMPP', 'Postman', 'Linux', 'Windows Server'],
    domains: ['Point of sale (retail / food)', 'Inventory & warehouse management', 'Fulfillment & logistics', 'System integrations', 'Operational reporting', 'Production support & troubleshooting'],
    projects: [
      {
        title: 'Point of Sale — Boutique', category: 'Point of Sale', icon: 'bi-bag-heart', image: 'assets/img/pos-boutique.svg',
        desc: 'POS system for a clothing boutique: catalog by size and color, sales, receipts, cash control and discounts.',
        tags: ['POS', 'Sales', 'Inventory', 'Receipts'], link: '', repo: '',
        problem: 'The boutique tracked sales and inventory by hand, with stock errors per size/color and slow cash closeouts.',
        solution: 'I built a POS with variant catalog (size/color), fast checkout, receipt printing and real-time inventory deduction.',
        result: 'Faster checkouts, reliable inventory per variant and cash closeouts in minutes instead of hours.',
        features: ['Catalog by size and color', 'Sales & receipts', 'Discounts & promotions', 'Cash closeout per shift', 'Stock control']
      },
      {
        title: 'POS Donuts & Coffee', category: 'Point of Sale', icon: 'bi-cup-hot', image: 'assets/img/pos-donas.svg',
        desc: 'POS for a café/sweets shop: product menu, combos, fast counter sales and cash closeout per shift.',
        tags: ['POS', 'Menu', 'Combos', 'Cash closeout'], link: '', repo: '',
        problem: 'At the counter they needed to charge very fast at peak hours and build combos without pricing mistakes.',
        solution: 'I developed a touch POS with a visual menu, predefined combos and shortcuts for the most common sales.',
        result: 'Faster lines, fewer pricing errors and a clear cash closeout at the end of the shift.',
        features: ['Visual menu by category', 'Combos & bundles', 'Fast counter sales', 'Cash closeout per shift']
      },
      {
        title: 'Savings System', category: 'Finance', icon: 'bi-piggy-bank', image: 'assets/img/ahorros.svg',
        desc: 'App to record and track savings: goals, deposits, withdrawals and balance reports per user.',
        tags: ['Finance', 'Goals', 'Reports'], link: '', repo: '',
        problem: 'Tracking savings and deposits in spreadsheets was confusing and error-prone.',
        solution: 'I built an app where each user records deposits and withdrawals, sets goals and sees their balance and progress.',
        result: 'Full balance transparency, movement history and goals with progress percentage.',
        features: ['Savings goals', 'Deposits & withdrawals', 'Movement history', 'Balance reports per user']
      },
      {
        title: 'Inventory Manager', category: 'Inventory', icon: 'bi-clipboard-data', image: 'assets/img/inventario.svg',
        desc: 'Inventory manager: stock control, inbound/outbound, kardex and automatic low-stock alerts.',
        tags: ['Inventory', 'Stock', 'Alerts'], link: '', repo: '',
        problem: 'There was no real stock visibility, so they over-bought or ran out of key products.',
        solution: 'I implemented a manager with inbound/outbound kardex, minimum levels and automatic reorder alerts.',
        result: 'Reliable stock, fewer stockouts and data-driven purchasing instead of guesswork.',
        features: ['Inbound/outbound kardex', 'Minimum levels', 'Low-stock alerts', 'Stock reports']
      },
      {
        title: 'Warehouse Process', category: 'Inventory', icon: 'bi-box-seam', image: 'assets/img/almacen.svg',
        desc: 'Warehouse process system: receiving, put-away, cycle counts and picking, with movement traceability.',
        tags: ['Warehouse', 'Counts', 'Picking', 'Traceability'], link: '', repo: '',
        problem: 'The warehouse flow (receive, put away, pick) was not standardized and traceability was lost.',
        solution: 'I designed a digital process for receiving, location put-away, cycle counts and picking, logging every movement.',
        result: 'End-to-end traceability, more accurate counts and an orderly, measurable warehouse flow.',
        features: ['Goods receiving', 'Location put-away', 'Cycle counts', 'Picking & traceability']
      }
    ],
    whyme: [
      { icon: 'bi-people-fill', title: 'I talk to the operator', desc: 'I design around the person who uses the system every day, not just the code.' },
      { icon: 'bi-clipboard2-check-fill', title: 'Clear deliverables', desc: 'Reviewable progress and constant communication. You always know where things stand.' },
      { icon: 'bi-stack', title: 'From data to interface', desc: 'I cover the full cycle: database, backend, API and UI. One person, no gaps.' },
      { icon: 'bi-headset', title: 'Real support', desc: "I don't disappear after delivery: I provide support and train your team." }
    ],
    // Indicative prices in MXN — adjust to your real rates.
    quote: {
      rentFactor: 0.10,
      types: [
        { key: 'pos', label: 'Point of sale', icon: 'bi-shop', base: 8000, weeks: 3 },
        { key: 'inv', label: 'Inventory / Warehouse', icon: 'bi-box-seam', base: 12000, weeks: 4 },
        { key: 'web', label: 'Custom web app', icon: 'bi-window-stack', base: 10000, weeks: 4 },
        { key: 'api', label: 'Integration / API', icon: 'bi-arrow-left-right', base: 9000, weeks: 3 },
        { key: 'report', label: 'Reports / Dashboard', icon: 'bi-graph-up', base: 6000, weeks: 2 }
      ],
      addons: [
        { key: 'multi', label: 'Multi-user & roles', icon: 'bi-people', price: 3000, weeks: 1 },
        { key: 'mobile', label: 'Mobile app', icon: 'bi-phone', price: 6000, weeks: 3 },
        { key: 'reports', label: 'Advanced reports', icon: 'bi-bar-chart', price: 2500, weeks: 1 },
        { key: 'integ', label: 'Integration with other systems', icon: 'bi-diagram-3', price: 4000, weeks: 2 },
        { key: 'support', label: 'Support & training', icon: 'bi-headset', price: 2000, weeks: 1 },
        { key: 'deploy', label: 'Hosting & deployment', icon: 'bi-cloud-upload', price: 1500, weeks: 1 }
      ]
    },
    cv: {
      experience: [
        { period: '2022 — Present', role: 'Software Developer', org: 'MI Technologies', desc: 'Development and support of warehouse, point-of-sale and inventory systems. Database design, stored procedures, APIs and production troubleshooting.' },
        { period: '20XX — 2022', role: 'Web Developer', org: 'Previous company', desc: 'Development of internal web apps, point-of-sale and portals. (Edit with your real experience.)' }
      ],
      education: [
        { period: '20XX — 20XX', title: 'B.Sc. in Computer Systems Engineering', org: 'University', desc: 'Education in software development, databases and system architecture. (Edit with your real data.)' }
      ],
      certifications: ['Spanish — Native', 'English — Technical / reading', 'Microsoft SQL Server (add your real certifications)', 'Full-stack web development']
    }
  }
};
