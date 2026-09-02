export type Branch = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  color: string;
  definition: string;
  areas: string[];
  profile: string[];
  jobs: string[];
};

export const branches: Branch[] = [
  {
    slug: "civil",
    name: "Ingeniería Civil",
    icon: "🏗️",
    tagline: "Diseña y construye la infraestructura del mundo.",
    color: "from-amber-500 to-orange-600",
    definition:
      "Rama que se ocupa del diseño, construcción y mantenimiento de obras de infraestructura como puentes, carreteras, edificios, presas y sistemas de acueducto.",
    areas: [
      "Estructuras y edificaciones",
      "Vías y transporte",
      "Hidráulica y saneamiento",
      "Geotecnia",
      "Construcción sostenible",
    ],
    profile: [
      "Capacidad de análisis matemático y físico",
      "Liderazgo y trabajo en equipo",
      "Responsabilidad social y ambiental",
      "Pensamiento espacial y creatividad",
    ],
    jobs: [
      "Constructoras y firmas de diseño",
      "Interventoría de obras públicas",
      "Consultoría estructural",
      "Entidades gubernamentales (INVIAS, ANI)",
    ],
  },
  {
    slug: "mecanica",
    name: "Ingeniería Mecánica",
    icon: "⚙️",
    tagline: "Convierte energía en movimiento y soluciones.",
    color: "from-slate-500 to-slate-800",
    definition:
      "Aplica los principios de la física y la ciencia de materiales para el diseño, análisis, fabricación y mantenimiento de sistemas mecánicos y térmicos.",
    areas: [
      "Diseño de máquinas",
      "Termodinámica y energía",
      "Manufactura y materiales",
      "Automatización y mecatrónica",
      "Vehículos y aeronaves",
    ],
    profile: [
      "Curiosidad por el funcionamiento de máquinas",
      "Habilidades de diseño CAD",
      "Precisión y método",
      "Interés por la innovación tecnológica",
    ],
    jobs: [
      "Industria automotriz y aeroespacial",
      "Sector energético (petróleo, gas, renovables)",
      "Manufactura y producción",
      "Mantenimiento industrial",
    ],
  },
  {
    slug: "electrica",
    name: "Ingeniería Eléctrica",
    icon: "⚡",
    tagline: "Ilumina ciudades y potencia industrias.",
    color: "from-yellow-400 to-yellow-600",
    definition:
      "Estudia y aplica la electricidad, la electrónica y el electromagnetismo para generar, transmitir, distribuir y utilizar la energía eléctrica.",
    areas: [
      "Generación y transmisión de energía",
      "Sistemas de potencia",
      "Energías renovables",
      "Control eléctrico",
      "Iluminación y domótica",
    ],
    profile: [
      "Sólida base en física y matemáticas",
      "Atención al detalle y seguridad",
      "Pensamiento sistémico",
      "Interés en la sostenibilidad energética",
    ],
    jobs: [
      "Empresas de energía (ISA, EPM, Codensa)",
      "Diseño de subestaciones",
      "Proyectos solares y eólicos",
      "Consultoría energética",
    ],
  },
  {
    slug: "industrial",
    name: "Ingeniería Industrial",
    icon: "📊",
    tagline: "Optimiza procesos, personas y recursos.",
    color: "from-emerald-500 to-teal-600",
    definition:
      "Se centra en el diseño, mejora e implementación de sistemas integrados de personas, materiales, información, equipos y energía para lograr eficiencia y productividad.",
    areas: [
      "Producción y operaciones",
      "Logística y cadena de suministro",
      "Calidad y mejora continua",
      "Gestión de proyectos",
      "Ergonomía y seguridad industrial",
    ],
    profile: [
      "Visión estratégica y global",
      "Habilidades de liderazgo",
      "Capacidad analítica y estadística",
      "Comunicación efectiva",
    ],
    jobs: [
      "Gerencia de operaciones",
      "Consultoría en procesos",
      "Logística y distribución",
      "Emprendimiento y startups",
    ],
  },
  {
    slug: "sistemas",
    name: "Ingeniería de Sistemas",
    icon: "💻",
    tagline: "Construye el software que mueve el mundo.",
    color: "from-blue-500 to-indigo-600",
    definition:
      "Se ocupa del análisis, diseño, desarrollo, implementación y mantenimiento de sistemas informáticos y de software para resolver problemas organizacionales.",
    areas: [
      "Desarrollo de software",
      "Inteligencia artificial y datos",
      "Ciberseguridad",
      "Redes y computación en la nube",
      "Aplicaciones móviles y web",
    ],
    profile: [
      "Pensamiento lógico y algorítmico",
      "Aprendizaje continuo",
      "Creatividad para resolver problemas",
      "Trabajo colaborativo en equipos ágiles",
    ],
    jobs: [
      "Empresas de tecnología y fintech",
      "Startups y productos digitales",
      "Consultoría en transformación digital",
      "Investigación en IA y ciencia de datos",
    ],
  },
  {
    slug: "quimica",
    name: "Ingeniería Química",
    icon: "🧪",
    tagline: "Transforma la materia en productos útiles.",
    color: "from-fuchsia-500 to-pink-600",
    definition:
      "Aplica principios de química, física, biología y matemáticas para transformar materias primas en productos útiles a escala industrial.",
    areas: [
      "Procesos industriales",
      "Petroquímica y refinación",
      "Alimentos y farmacéutica",
      "Biotecnología",
      "Medio ambiente y sostenibilidad",
    ],
    profile: [
      "Rigor científico",
      "Capacidad experimental",
      "Conciencia ambiental",
      "Atención a la seguridad de procesos",
    ],
    jobs: [
      "Industria petroquímica",
      "Alimentos y bebidas",
      "Farmacéutica y cosmética",
      "Tratamiento de aguas y residuos",
    ],
  },
  {
    slug: "ambiental",
    name: "Ingeniería Ambiental",
    icon: "🌿",
    tagline: "Protege el planeta con soluciones técnicas.",
    color: "from-green-500 to-emerald-700",
    definition:
      "Estudia los problemas ambientales de forma integrada y desarrolla soluciones técnicas para prevenir, controlar y remediar impactos sobre el entorno.",
    areas: [
      "Gestión del recurso hídrico",
      "Calidad del aire",
      "Residuos sólidos y peligrosos",
      "Cambio climático",
      "Evaluación de impacto ambiental",
    ],
    profile: [
      "Compromiso ecológico",
      "Trabajo interdisciplinario",
      "Pensamiento sistémico",
      "Habilidades de comunicación",
    ],
    jobs: [
      "Corporaciones autónomas regionales",
      "Consultoría ambiental",
      "ONGs y cooperación internacional",
      "Gestión ambiental corporativa",
    ],
  },
  {
    slug: "electronica",
    name: "Ingeniería Electrónica",
    icon: "📡",
    tagline: "Diseña dispositivos que conectan el mundo.",
    color: "from-cyan-500 to-blue-600",
    definition:
      "Se especializa en el diseño y desarrollo de circuitos, dispositivos y sistemas electrónicos para telecomunicaciones, control y procesamiento de señales.",
    areas: [
      "Telecomunicaciones",
      "Control y automatización",
      "Procesamiento de señales",
      "Robótica",
      "Internet de las Cosas (IoT)",
    ],
    profile: [
      "Interés por la tecnología y la innovación",
      "Habilidades matemáticas",
      "Creatividad en el diseño",
      "Trabajo minucioso",
    ],
    jobs: [
      "Telecomunicaciones (Claro, Movistar, Tigo)",
      "Automatización industrial",
      "Empresas de electrónica y hardware",
      "Investigación y desarrollo",
    ],
  },
];

export type Association = {
  acronym: string;
  name: string;
  description: string;
  focus: string;
  url: string;
};

export const associations: Association[] = [
  {
    acronym: "SCI",
    name: "Sociedad Colombiana de Ingenieros",
    description:
      "Fundada en 1887, es la corporación de carácter académico-gremial más antigua del país. Agrupa a ingenieros de todas las ramas y actúa como órgano consultor del gobierno.",
    focus: "Gremial y consultora del Estado",
    url: "https://sci.org.co",
  },
  {
    acronym: "COPNIA",
    name: "Consejo Profesional Nacional de Ingeniería",
    description:
      "Entidad pública encargada de expedir la matrícula profesional a los ingenieros en Colombia y vigilar el ejercicio ético de la profesión.",
    focus: "Regulación y ética profesional",
    url: "https://copnia.gov.co",
  },
  {
    acronym: "ACIEM",
    name: "Asociación Colombiana de Ingenieros",
    description:
      "Agrupa ingenieros de las ramas eléctrica, electrónica, mecánica y afines. Emite conceptos técnicos y promueve el desarrollo profesional.",
    focus: "Ingenierías eléctrica, electrónica y mecánica",
    url: "https://aciem.org",
  },
  {
    acronym: "ACIS",
    name: "Asociación Colombiana de Ingenieros de Sistemas",
    description:
      "Reúne a los profesionales de la ingeniería de sistemas y afines, promoviendo la formación continua y la investigación en TI.",
    focus: "Tecnologías de la información",
    url: "https://acis.org.co",
  },
  {
    acronym: "ACOFI",
    name: "Asociación Colombiana de Facultades de Ingeniería",
    description:
      "Agrupa a las facultades de ingeniería del país y trabaja por la calidad y pertinencia de la formación en ingeniería.",
    focus: "Educación en ingeniería",
    url: "https://acofi.edu.co",
  },
  {
    acronym: "ANDI",
    name: "Asociación Nacional de Empresarios de Colombia",
    description:
      "Aunque no es exclusivamente de ingeniería, agrupa a la industria y promueve la innovación y competitividad donde participan ingenieros.",
    focus: "Industria y competitividad",
    url: "https://andi.com.co",
  },
];

export type Milestone = {
  era: string;
  year: string;
  title: string;
  text: string;
  icon: string;
  fact: string;
  more: string[];
};

export const historyMilestones: Milestone[] = [
  {
    era: "Prehistoria",
    year: "Antes de 3000 a.C.",
    title: "Los orígenes",
    text: "Las primeras herramientas, la rueda y la construcción de refugios marcan el nacimiento de la ingeniería como práctica humana.",
    icon: "🪓",
    fact: "Los utensilios de piedra tallada son las primeras evidencias de diseño e ingeniería en la historia humana.",
    more: [
      "La rueda aparece hacia el 3500 a.C. en Mesopotamia, primero como torno de alfarero.",
      "El dominio del fuego permitió la metalurgia temprana del cobre.",
    ],
  },
  {
    era: "Antigüedad",
    year: "3000 a.C. – 476 d.C.",
    title: "Grandes obras del mundo antiguo",
    text: "Pirámides de Egipto, acueductos romanos, la Gran Muralla China y las obras griegas evidencian una ingeniería sofisticada al servicio de civilizaciones.",
    icon: "🏛️",
    fact: "Los egipcios usaron rampas y palancas para construir las pirámides, un ejemplo temprano de ingeniería estructural.",
    more: [
      "Roma construyó más de 400 km de acueductos solo para abastecer la ciudad.",
      "Arquímedes formalizó la palanca, la polea y el principio de flotación.",
    ],
  },
  {
    era: "Edad Media",
    year: "476 – 1400",
    title: "Catedrales y molinos",
    text: "Se desarrollan técnicas de construcción góticas, molinos de agua y viento, y avances en metalurgia y navegación.",
    icon: "⛪",
    fact: "El arbotante gótico permitió muros más altos y delgados: control de cargas siglos antes del cálculo estructural.",
    more: [
      "Los molinos hidráulicos fueron la primera fuente de energía mecánica a gran escala.",
      "La brújula y el timón de codaste transformaron la navegación.",
    ],
  },
  {
    era: "Renacimiento",
    year: "1400 – 1600",
    title: "Ciencia e ingeniería se encuentran",
    text: "Figuras como Leonardo da Vinci integran arte, ciencia y diseño. Aparecen los primeros tratados de ingeniería militar y civil.",
    icon: "📐",
    fact: "Leonardo dejó más de 6.000 páginas de bocetos técnicos: máquinas voladoras, engranajes y puentes desmontables.",
    more: [
      "La imprenta de Gutenberg democratizó el conocimiento técnico.",
      "Brunelleschi levantó la cúpula de Florencia sin cimbras tradicionales.",
    ],
  },
  {
    era: "Revolución Industrial",
    year: "1760 – 1840",
    title: "Máquinas de vapor y fábricas",
    text: "James Watt y otros inauguran la era de la producción mecanizada. Nace la ingeniería mecánica y civil moderna.",
    icon: "⚙️",
    fact: "La máquina de vapor de James Watt fue clave para el desarrollo de la industria y el ferrocarril moderno.",
    more: [
      "Surgen las primeras escuelas formales de ingeniería civil en Europa.",
      "El hierro fundido y luego el acero cambian la escala de puentes y edificios.",
    ],
  },
  {
    era: "Siglo XIX",
    year: "1840 – 1900",
    title: "Electricidad y ferrocarriles",
    text: "Faraday, Edison y Tesla impulsan la ingeniería eléctrica. Se expanden las redes ferroviarias y los grandes puentes de acero.",
    icon: "💡",
    fact: "La 'guerra de las corrientes' entre Edison (DC) y Tesla (AC) definió cómo se distribuye hoy la energía en el mundo.",
    more: [
      "La Torre Eiffel (1889) demostró el potencial del hierro forjado.",
      "Colombia inaugura sus primeros ferrocarriles y plantas eléctricas.",
    ],
  },
  {
    era: "Siglo XX",
    year: "1900 – 2000",
    title: "Aviación, espacio y computación",
    text: "De los hermanos Wright al hombre en la Luna, y del primer computador a Internet: la ingeniería redefine la vida moderna.",
    icon: "🚀",
    fact: "El computador de la nave Apollo 11 tenía menos memoria que una calculadora actual, y aun así llegó a la Luna.",
    more: [
      "La ingeniería industrial nace con Taylor y Ford y la línea de ensamblaje.",
      "El transistor (1947) abre la puerta a toda la electrónica moderna.",
    ],
  },
  {
    era: "Siglo XXI",
    year: "2000 – Actualidad",
    title: "Ingeniería digital y sostenible",
    text: "Inteligencia artificial, energías renovables, biotecnología y exploración espacial marcan una nueva era enfocada en sostenibilidad e innovación.",
    icon: "🔋",
    fact: "Los microchips modernos pueden contener miles de millones de transistores en un área menor que una uña.",
    more: [
      "La energía solar es hoy la fuente de electricidad más barata en gran parte del mundo.",
      "La ingeniería incorpora criterios ambientales y sociales (ODS) en cada proyecto.",
    ],
  },
];


export const courseTopics = [
  {
    unit: "Unidad 1",
    title: "La ingeniería y el ingeniero",
    items: [
      "Definición y naturaleza de la ingeniería",
      "Perfil y competencias del ingeniero",
      "Ética profesional y responsabilidad social",
    ],
  },
  {
    unit: "Unidad 2",
    title: "Historia y evolución",
    items: [
      "Origen de la ingeniería",
      "Hitos históricos por época",
      "Ingeniería contemporánea",
    ],
  },
  {
    unit: "Unidad 3",
    title: "Ramas de la ingeniería",
    items: [
      "Ingenierías tradicionales",
      "Ingenierías emergentes",
      "Interdisciplinariedad",
    ],
  },
  {
    unit: "Unidad 4",
    title: "Método y pensamiento del ingeniero",
    items: [
      "Método científico y de ingeniería",
      "Resolución de problemas",
      "Creatividad e innovación",
    ],
  },
  {
    unit: "Unidad 5",
    title: "Contexto profesional",
    items: [
      "Agremiaciones y normatividad",
      "Campos laborales",
      "Tendencias globales y sostenibilidad",
    ],
  },
  {
    unit: "Unidad 6",
    title: "Carreras profesionales y posgrados",
    items: [
      "Carreras profesionales en ingeniería",
      "Especializaciones y maestrías",
      "Doctorados, investigación y formación continua",
    ],
  },
];
