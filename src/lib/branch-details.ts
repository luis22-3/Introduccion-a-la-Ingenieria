// Datos ampliados de cada rama, redactados para el curso de
// Introducción a la Ingeniería (fuentes: DANE, MinTrabajo, portales de empleo 2024-2025).

export type Stage = { label: string; title: string; items: string };
export type Role = { role: string; salary: string };
export type Faq = { q: string; a: string };

export type BranchDetail = {
  semesters: string;
  demand: string; // texto corto
  demandPct: number;
  satisfaction: string;
  salaryRange: string;
  difficulty: number; // 1-5
  difficultyNote: string;
  modality: string;
  intro: string;
  path: Stage[];
  timeline: Role[];
  tools: string[];
  employers: string[];
  testimonial: { quote: string; name: string; role: string };
  faqs: Faq[];
  related: string[]; // slugs
};

export const branchDetails: Record<string, BranchDetail> = {
  civil: {
    semesters: "10 semestres",
    demand: "Alta",
    demandPct: 88,
    satisfaction: "4.5/5",
    salaryRange: "$3.0M – $8.5M",
    difficulty: 4,
    difficultyNote: "Media - Alta",
    modality: "Presencial",
    intro:
      "Planea, calcula y supervisa las obras que sostienen a una ciudad: puentes, vías, edificios y redes de agua. Trabajo de oficina y de campo en partes casi iguales.",
    path: [
      { label: "01", title: "Fundamentos", items: "Cálculo, Física, Dibujo técnico, Estática" },
      { label: "02", title: "Ciencias de la ingeniería", items: "Resistencia de materiales, Suelos, Hidráulica" },
      { label: "03", title: "Especialización", items: "Estructuras, Vías, Sanitaria, Geotecnia" },
      { label: "04", title: "Profesional", items: "Presupuestos, Interventoría, Práctica y grado" },
    ],
    timeline: [
      { role: "Practicante de obra", salary: "1 SMMLV" },
      { role: "Residente junior", salary: "$3.0M – $4.5M" },
      { role: "Residente / Calculista", salary: "$4.5M – $6.5M" },
      { role: "Director de obra", salary: "$7M – $12M" },
      { role: "Gerente de proyectos", salary: "$12M+" },
    ],
    tools: ["AutoCAD", "Revit", "SAP2000", "ETABS", "Civil 3D", "MS Project", "Excel"],
    employers: ["Conconcreto", "Odinsa", "Mario Huertas", "INVÍAS", "ANI", "Alcaldías"],
    testimonial: {
      quote:
        "El primer día en obra entendí que el plano es apenas la mitad del trabajo: la otra mitad es coordinar gente y resolver imprevistos.",
      name: "Laura M.",
      role: "Residente de obra, Bogotá",
    },
    faqs: [
      { q: "¿Se pasa todo el tiempo en obra?", a: "No. Hay perfiles de diseño y consultoría que son de oficina; obra suele ser el inicio de la carrera." },
      { q: "¿Cuánta matemática tiene?", a: "Bastante en los primeros semestres; después se vuelve aplicada al cálculo estructural e hidráulico." },
      { q: "¿Necesito matrícula profesional?", a: "Sí, la expide el COPNIA una vez te gradúas." },
    ],
    related: ["ambiental", "mecanica", "industrial"],
  },
  mecanica: {
    semesters: "10 semestres",
    demand: "Alta",
    demandPct: 85,
    satisfaction: "4.4/5",
    salaryRange: "$3.2M – $9M",
    difficulty: 4,
    difficultyNote: "Media - Alta",
    modality: "Presencial",
    intro:
      "Diseña, fabrica y mantiene todo lo que se mueve o transfiere energía: máquinas, motores, sistemas térmicos y líneas de producción.",
    path: [
      { label: "01", title: "Fundamentos", items: "Cálculo, Física mecánica, Dibujo CAD" },
      { label: "02", title: "Ciencias térmicas", items: "Termodinámica, Fluidos, Transferencia de calor" },
      { label: "03", title: "Diseño", items: "Elementos de máquinas, Materiales, Manufactura" },
      { label: "04", title: "Profesional", items: "Mantenimiento, Automatización, Proyecto de grado" },
    ],
    timeline: [
      { role: "Practicante de planta", salary: "1 SMMLV" },
      { role: "Ingeniero junior", salary: "$3.2M – $4.5M" },
      { role: "Ingeniero de diseño / mantenimiento", salary: "$5M – $7M" },
      { role: "Jefe de mantenimiento", salary: "$8M – $11M" },
      { role: "Gerente técnico", salary: "$12M+" },
    ],
    tools: ["SolidWorks", "Inventor", "ANSYS", "MATLAB", "CNC", "SAP PM", "Excel"],
    employers: ["Ecopetrol", "Tecnoglass", "Cementos Argos", "Bavaria", "Renault Sofasa"],
    testimonial: {
      quote:
        "Me gusta que un cálculo que hice en un cuaderno termina siendo una pieza girando a 3000 rpm en la planta.",
      name: "Julián R.",
      role: "Ingeniero de mantenimiento",
    },
    faqs: [
      { q: "¿Es solo motores?", a: "No: energía, HVAC, manufactura, robótica y mantenimiento son campos igual de grandes." },
      { q: "¿Sirve saber programar?", a: "Sí, cada vez más: MATLAB, Python y PLC abren muchas puertas." },
      { q: "¿Hay trabajo fuera de la industria pesada?", a: "Sí, en energías renovables, alimentos y consultoría." },
    ],
    related: ["electrica", "industrial", "electronica"],
  },
  electrica: {
    semesters: "10 semestres",
    demand: "Alta",
    demandPct: 87,
    satisfaction: "4.4/5",
    salaryRange: "$3.5M – $9.5M",
    difficulty: 4,
    difficultyNote: "Alta",
    modality: "Presencial",
    intro:
      "Genera, transporta y entrega energía de forma segura. Desde subestaciones y redes hasta parques solares y eólicos.",
    path: [
      { label: "01", title: "Fundamentos", items: "Cálculo, Electromagnetismo, Circuitos" },
      { label: "02", title: "Sistemas", items: "Máquinas eléctricas, Análisis de potencia" },
      { label: "03", title: "Especialización", items: "Protecciones, Subestaciones, Renovables" },
      { label: "04", title: "Profesional", items: "RETIE, Diseño eléctrico, Práctica" },
    ],
    timeline: [
      { role: "Practicante", salary: "1 SMMLV" },
      { role: "Diseñador eléctrico junior", salary: "$3.5M – $5M" },
      { role: "Ingeniero de proyectos", salary: "$5.5M – $8M" },
      { role: "Especialista en potencia", salary: "$9M – $13M" },
      { role: "Gerente de energía", salary: "$14M+" },
    ],
    tools: ["ETAP", "DIgSILENT", "AutoCAD Electrical", "PVsyst", "MATLAB", "PLC"],
    employers: ["ISA", "EPM", "Enel Colombia", "Celsia", "XM", "Consultoras RETIE"],
    testimonial: {
      quote:
        "Diseñar la conexión de un parque solar y luego verlo entregando energía al sistema fue lo mejor de mi práctica.",
      name: "Andrea P.",
      role: "Ingeniera de proyectos, Celsia",
    },
    faqs: [
      { q: "¿Es peligrosa?", a: "Se trabaja con normas estrictas (RETIE) y protocolos; el riesgo se gestiona con formación." },
      { q: "¿Diferencia con electrónica?", a: "Eléctrica trabaja con potencia (kV, MW); electrónica con señales y dispositivos." },
      { q: "¿Hay futuro con la transición energética?", a: "Es justamente el campo con mayor crecimiento hoy." },
    ],
    related: ["electronica", "mecanica", "ambiental"],
  },
  industrial: {
    semesters: "10 semestres",
    demand: "Muy alta",
    demandPct: 92,
    satisfaction: "4.3/5",
    salaryRange: "$3.0M – $9M",
    difficulty: 3,
    difficultyNote: "Media",
    modality: "Presencial / Virtual",
    intro:
      "Hace que los sistemas de personas, máquinas e información funcionen mejor: menos costo, menos desperdicio, más calidad.",
    path: [
      { label: "01", title: "Fundamentos", items: "Cálculo, Estadística, Contabilidad" },
      { label: "02", title: "Operaciones", items: "Procesos, Investigación de operaciones, Costos" },
      { label: "03", title: "Gestión", items: "Logística, Calidad, Proyectos" },
      { label: "04", title: "Profesional", items: "Simulación, Analítica, Práctica empresarial" },
    ],
    timeline: [
      { role: "Practicante", salary: "1 SMMLV" },
      { role: "Analista de procesos", salary: "$3.0M – $4.5M" },
      { role: "Coordinador de operaciones", salary: "$5M – $7M" },
      { role: "Jefe de planta / logística", salary: "$8M – $11M" },
      { role: "Gerente de operaciones", salary: "$13M+" },
    ],
    tools: ["Excel avanzado", "Power BI", "SAP", "Minitab", "Python", "FlexSim", "Lean/Six Sigma"],
    employers: ["Nutresa", "Postobón", "Rappi", "DHL", "Sura", "Consultoras (EY, Deloitte)"],
    testimonial: {
      quote:
        "Rediseñamos el flujo de un centro de distribución y bajamos 18% el tiempo de despacho. Ese fue mi proyecto de grado.",
      name: "Camilo T.",
      role: "Analista de operaciones",
    },
    faqs: [
      { q: "¿Es la más fácil?", a: "No es fácil, es más amplia: menos física dura, más estadística, gestión y datos." },
      { q: "¿Se puede trabajar en tecnología?", a: "Sí, en operaciones y analítica de startups y e-commerce." },
      { q: "¿Sirve para emprender?", a: "Es de las que más herramientas da para montar y ordenar un negocio." },
    ],
    related: ["sistemas", "mecanica", "quimica"],
  },
  sistemas: {
    semesters: "10 semestres",
    demand: "Muy alta",
    demandPct: 95,
    satisfaction: "4.6/5",
    salaryRange: "$4.5M – $12M",
    difficulty: 4,
    difficultyNote: "Media - Alta",
    modality: "Presencial / Virtual",
    intro:
      "Construye software y sistemas de información: desde una app hasta la infraestructura y los modelos de datos que la sostienen.",
    path: [
      { label: "01", title: "Fundamentos", items: "Programación, Matemáticas discretas, Lógica" },
      { label: "02", title: "Desarrollo", items: "Estructuras de datos, Bases de datos, Redes, S.O." },
      { label: "03", title: "Especialización", items: "Web, IA, Ingeniería de software, Seguridad" },
      { label: "04", title: "Profesional", items: "Arquitectura, Nube, Práctica profesional" },
    ],
    timeline: [
      { role: "Practicante", salary: "1 – 2 SMMLV" },
      { role: "Desarrollador junior", salary: "$3.5M – $5.5M" },
      { role: "Desarrollador semi senior", salary: "$6M – $9M" },
      { role: "Desarrollador senior", salary: "$9M – $14M" },
      { role: "Arquitecto / Tech lead", salary: "$15M+" },
    ],
    tools: ["Java", "Python", "JavaScript", "SQL", "Git", "Docker", "React", "AWS"],
    employers: ["Globant", "Mercado Libre", "Nequi", "Bancolombia", "Rappi", "Endava"],
    testimonial: {
      quote:
        "Empecé haciendo un CRUD feo en tercer semestre; hoy mantengo un servicio que usan miles de personas al día.",
      name: "Andrés M.",
      role: "Desarrollador backend, Globant",
    },
    faqs: [
      { q: "¿Necesito saber programar antes de entrar?", a: "No. Ayuda, pero el primer semestre arranca desde cero." },
      { q: "¿Tiene mucha matemática?", a: "Menos cálculo que otras ingenierías, pero mucha lógica y discretas." },
      { q: "¿Se consigue empleo rápido?", a: "Es de las que más practicantes contrata, incluso remoto." },
    ],
    related: ["electronica", "industrial", "electrica"],
  },
  quimica: {
    semesters: "10 semestres",
    demand: "Media - Alta",
    demandPct: 78,
    satisfaction: "4.2/5",
    salaryRange: "$3.2M – $9M",
    difficulty: 5,
    difficultyNote: "Alta",
    modality: "Presencial",
    intro:
      "Convierte materia prima en producto a escala industrial, controlando reacciones, energía y seguridad del proceso.",
    path: [
      { label: "01", title: "Fundamentos", items: "Química general, Cálculo, Física" },
      { label: "02", title: "Balances", items: "Balances de materia y energía, Termodinámica" },
      { label: "03", title: "Procesos", items: "Operaciones unitarias, Reactores, Control" },
      { label: "04", title: "Profesional", items: "Diseño de planta, HSE, Práctica" },
    ],
    timeline: [
      { role: "Practicante de planta", salary: "1 SMMLV" },
      { role: "Ingeniero de procesos junior", salary: "$3.2M – $4.8M" },
      { role: "Ingeniero de procesos", salary: "$5M – $7.5M" },
      { role: "Superintendente de planta", salary: "$9M – $12M" },
      { role: "Gerente de producción", salary: "$13M+" },
    ],
    tools: ["Aspen Plus", "HYSYS", "MATLAB", "Excel", "Diagramas P&ID", "HAZOP"],
    employers: ["Ecopetrol", "Alpina", "Bayer", "Team Foods", "Cervecería", "Farmacéuticas"],
    testimonial: {
      quote:
        "Lo más duro fue balances de materia; lo más satisfactorio fue ver ese mismo balance corriendo en una planta real.",
      name: "Valentina G.",
      role: "Ingeniera de procesos",
    },
    faqs: [
      { q: "¿Es solo laboratorio?", a: "El laboratorio es formación; el trabajo real es de proceso, planta y datos." },
      { q: "¿Qué tan difícil es?", a: "Es exigente en química y termodinámica; requiere constancia." },
      { q: "¿Dónde se trabaja?", a: "Alimentos, farmacéutica, petroquímica, cosmética y ambiental." },
    ],
    related: ["ambiental", "industrial", "mecanica"],
  },
  ambiental: {
    semesters: "10 semestres",
    demand: "Media - Alta",
    demandPct: 75,
    satisfaction: "4.3/5",
    salaryRange: "$2.8M – $7.5M",
    difficulty: 3,
    difficultyNote: "Media",
    modality: "Presencial",
    intro:
      "Diagnostica y resuelve problemas de agua, aire, residuos y clima con soluciones técnicas y cumplimiento normativo.",
    path: [
      { label: "01", title: "Fundamentos", items: "Química, Biología, Cálculo, Ecología" },
      { label: "02", title: "Recursos", items: "Hidrología, Calidad del aire, Suelos" },
      { label: "03", title: "Tratamiento", items: "PTAR, Residuos, Modelación ambiental" },
      { label: "04", title: "Profesional", items: "Licencias, EIA, Normatividad, Práctica" },
    ],
    timeline: [
      { role: "Practicante", salary: "1 SMMLV" },
      { role: "Analista ambiental", salary: "$2.8M – $4M" },
      { role: "Consultor ambiental", salary: "$4.5M – $6.5M" },
      { role: "Coordinador HSE", salary: "$7M – $10M" },
      { role: "Gerente de sostenibilidad", salary: "$11M+" },
    ],
    tools: ["ArcGIS", "QGIS", "EPANET", "AERMOD", "Excel", "ISO 14001"],
    employers: ["CAR", "Corpoamazonía", "Consultoras ambientales", "Mineras", "ONG", "Acueductos"],
    testimonial: {
      quote:
        "Muestrear un río y después ver la PTAR funcionando cambia por completo la forma en que ves el agua que tomas.",
      name: "Sara C.",
      role: "Consultora ambiental",
    },
    faqs: [
      { q: "¿Es activismo?", a: "No: es ingeniería con normas, cálculos y diseño de sistemas de tratamiento." },
      { q: "¿Hay campo laboral?", a: "Sí, crece con la exigencia normativa y los compromisos ESG de las empresas." },
      { q: "¿Se trabaja en campo?", a: "Bastante al inicio: muestreos, visitas y monitoreo." },
    ],
    related: ["quimica", "civil", "industrial"],
  },
  electronica: {
    semesters: "10 semestres",
    demand: "Alta",
    demandPct: 86,
    satisfaction: "4.4/5",
    salaryRange: "$3.5M – $10M",
    difficulty: 4,
    difficultyNote: "Alta",
    modality: "Presencial",
    intro:
      "Diseña circuitos, sensores y sistemas embebidos: el puente entre el mundo físico y el software que lo controla.",
    path: [
      { label: "01", title: "Fundamentos", items: "Circuitos, Cálculo, Programación en C" },
      { label: "02", title: "Dispositivos", items: "Electrónica analógica y digital, Microcontroladores" },
      { label: "03", title: "Sistemas", items: "Señales, Control, Comunicaciones, Robótica" },
      { label: "04", title: "Profesional", items: "IoT, Embebidos, Proyecto de grado" },
    ],
    timeline: [
      { role: "Practicante", salary: "1 SMMLV" },
      { role: "Ingeniero de soporte / diseño", salary: "$3.5M – $5M" },
      { role: "Ingeniero de automatización", salary: "$5.5M – $8M" },
      { role: "Especialista embebidos / redes", salary: "$9M – $12M" },
      { role: "Líder de I+D", salary: "$13M+" },
    ],
    tools: ["Arduino", "ESP32", "Altium", "Proteus", "MATLAB", "PLC/SCADA", "Python"],
    employers: ["Claro", "Tigo", "Siemens", "Schneider", "Integradores de automatización", "Startups hardware"],
    testimonial: {
      quote:
        "Hicimos un sensor de calidad de aire para la universidad; hoy trabajo montando ese mismo tipo de redes IoT.",
      name: "Daniel O.",
      role: "Ingeniero de automatización",
    },
    faqs: [
      { q: "¿Se programa mucho?", a: "Sí: C, Python y lógica de PLC son parte del día a día." },
      { q: "¿Diferencia con sistemas?", a: "Electrónica llega hasta el hardware; sistemas se queda en software e información." },
      { q: "¿Sirve para robótica?", a: "Es la ruta más directa junto con mecatrónica." },
    ],
    related: ["electrica", "sistemas", "mecanica"],
  },
};
