import { courseTopics } from "./engineering-data";

export type SubtopicDetail = {
  title: string;
  summary: string;
  estimate: string;
  heading: string;
  paragraphs: string[];
  keyIdea: string;
};

export type UnitDetail = {
  slug: string;
  unit: string;
  title: string;
  intro: string;
  weeks: number;
  weekRange: string;
  subtopics: SubtopicDetail[];
};

export const unitDetails: UnitDetail[] = [
  {
    slug: "la-ingenieria-y-el-ingeniero",
    unit: "Unidad 1",
    title: "La ingeniería y el ingeniero",
    intro:
      "Qué es realmente la ingeniería, qué hace un ingeniero en el día a día y qué compromisos éticos asume con la sociedad.",
    weeks: 3,
    weekRange: "Semanas 1-3 del curso",
    subtopics: [
      {
        title: "Definición y naturaleza de la ingeniería",
        summary: "Qué es la ingeniería y en qué se diferencia de la ciencia.",
        estimate: "1 semana",
        heading: "Definición y naturaleza de la ingeniería",
        paragraphs: [
          "La ingeniería aplica conocimiento científico, matemático y técnico para resolver problemas concretos con recursos limitados: tiempo, dinero, materiales y personas.",
          "Mientras la ciencia busca explicar el mundo, la ingeniería busca transformarlo. Por eso toda solución de ingeniería implica decidir entre alternativas y asumir compromisos (trade-offs).",
        ],
        keyIdea:
          "No existe la solución perfecta: existe la mejor solución posible bajo las restricciones del proyecto.",
      },
      {
        title: "Perfil y competencias del ingeniero",
        summary: "Habilidades técnicas y blandas que exige la profesión.",
        estimate: "1 semana",
        heading: "Perfil y competencias del ingeniero",
        paragraphs: [
          "Además del dominio técnico, el ingeniero necesita comunicación clara, trabajo en equipo, pensamiento crítico y capacidad de aprender tecnologías nuevas durante toda su carrera.",
          "En proyectos reales, buena parte del tiempo se dedica a documentar, negociar requerimientos y coordinar con otras disciplinas.",
        ],
        keyIdea:
          "Un buen cálculo mal comunicado casi nunca llega a ejecutarse.",
      },
      {
        title: "Ética profesional y responsabilidad social",
        summary: "Códigos de ética, seguridad pública y consecuencias.",
        estimate: "1 semana",
        heading: "Ética profesional y responsabilidad social",
        paragraphs: [
          "En Colombia el ejercicio está regulado por el COPNIA y por el Código de Ética Profesional: la seguridad y el bienestar de las personas están por encima de cualquier interés económico.",
          "Casos como fallas estructurales o filtraciones de datos muestran que un error de criterio profesional tiene impacto directo en vidas humanas.",
        ],
        keyIdea:
          "La firma de un ingeniero es una responsabilidad legal, no un trámite.",
      },
    ],
  },
  {
    slug: "historia-y-evolucion",
    unit: "Unidad 2",
    title: "Historia y evolución",
    intro:
      "Cómo pasamos de las obras hidráulicas antiguas a la ingeniería digital contemporánea.",
    weeks: 3,
    weekRange: "Semanas 4-6 del curso",
    subtopics: [
      {
        title: "Origen de la ingeniería",
        summary: "Primeras obras, herramientas y saberes empíricos.",
        estimate: "1 semana",
        heading: "Origen de la ingeniería",
        paragraphs: [
          "Las primeras obras de ingeniería —canales, caminos, murallas y pirámides— nacieron de la observación y la repetición, mucho antes de que existiera una teoría formal.",
          "El conocimiento se transmitía de maestro a aprendiz y se validaba con la experiencia de lo que se mantenía en pie.",
        ],
        keyIdea:
          "La ingeniería fue oficio empírico durante milenios antes de volverse disciplina científica.",
      },
      {
        title: "Hitos históricos por época",
        summary: "Revolución industrial, electricidad y computación.",
        estimate: "1 semana",
        heading: "Hitos históricos por época",
        paragraphs: [
          "La máquina de vapor, el acero estructural, la electrificación y el transistor marcaron saltos en la escala de lo que era posible construir.",
          "Cada hito trajo también nuevas profesiones: la ingeniería mecánica, la eléctrica, la electrónica y la de sistemas nacieron de necesidades concretas.",
        ],
        keyIdea:
          "Cada gran tecnología crea una nueva rama de la ingeniería.",
      },
      {
        title: "Ingeniería contemporánea",
        summary: "Sostenibilidad, datos y trabajo interdisciplinario.",
        estimate: "1 semana",
        heading: "Ingeniería contemporánea",
        paragraphs: [
          "Hoy los proyectos se evalúan también por su huella ambiental, su uso de datos y su capacidad de escalar sin excluir comunidades.",
          "El ingeniero contemporáneo trabaja con simulación, modelos digitales y equipos distribuidos en varios países.",
        ],
        keyIdea:
          "La sostenibilidad dejó de ser un requisito opcional del diseño.",
      },
    ],
  },
  {
    slug: "ramas-de-la-ingenieria",
    unit: "Unidad 3",
    title: "Ramas de la ingeniería",
    intro:
      "Explora las principales ramas de la ingeniería y su impacto en la sociedad actual, incluyendo las tendencias emergentes y los desafíos del futuro.",
    weeks: 4,
    weekRange: "Semanas 7-10 del curso",
    subtopics: [
      {
        title: "Ingenierías tradicionales",
        summary: "Civil, mecánica, eléctrica, química e industrial.",
        estimate: "1-2 semanas",
        heading: "Ingenierías tradicionales",
        paragraphs: [
          "Las ramas clásicas se consolidaron alrededor de la infraestructura, la energía, la manufactura y los procesos productivos.",
          "Comparten una base común de matemáticas, física y diseño, y se diferencian en el tipo de sistema que intervienen.",
        ],
        keyIdea:
          "Todas las ramas comparten el mismo método: modelar, calcular, construir y verificar.",
      },
      {
        title: "Ingenierías emergentes",
        summary: "Nuevas ramas y áreas interdisciplinarias.",
        estimate: "1 semana",
        heading: "Ingenierías emergentes",
        paragraphs: [
          "Las ingenierías emergentes integran múltiples disciplinas para dar solución a desafíos complejos como el cambio climático, la transformación digital y la sostenibilidad.",
          "Algunos ejemplos incluyen la Ingeniería Ambiental, la Biomédica, la Ingeniería de Datos, la Robótica e Inteligencia Artificial, y la Ingeniería Sostenible.",
        ],
        keyIdea:
          "La colaboración entre distintas ramas es clave para innovar y generar soluciones con impacto real en el mundo.",
      },
      {
        title: "Interdisciplinariedad",
        summary: "Cómo se combinan disciplinas en proyectos reales.",
        estimate: "1 semana",
        heading: "Interdisciplinariedad",
        paragraphs: [
          "Un hospital, una planta solar o una app de salud requieren civiles, eléctricos, de sistemas, industriales y ambientales trabajando sobre el mismo cronograma.",
          "Saber traducir tu lenguaje técnico al de otras disciplinas es una ventaja profesional enorme.",
        ],
        keyIdea:
          "Los problemas reales no vienen clasificados por rama.",
      },
    ],
  },
  {
    slug: "metodo-y-pensamiento-del-ingeniero",
    unit: "Unidad 4",
    title: "Método y pensamiento del ingeniero",
    intro:
      "La forma estructurada de pensar que distingue a un ingeniero al enfrentar problemas abiertos.",
    weeks: 3,
    weekRange: "Semanas 11-13 del curso",
    subtopics: [
      {
        title: "Método científico y de ingeniería",
        summary: "Del problema a la solución verificada.",
        estimate: "1 semana",
        heading: "Método científico y de ingeniería",
        paragraphs: [
          "El método de ingeniería parte de una necesidad, define requerimientos, genera alternativas, prototipa y evalúa resultados contra criterios medibles.",
          "A diferencia del método científico, su producto final no es una conclusión sino un artefacto o sistema que funciona.",
        ],
        keyIdea:
          "Si no puedes medirlo, no puedes afirmar que la solución funciona.",
      },
      {
        title: "Resolución de problemas",
        summary: "Descomponer, priorizar y validar supuestos.",
        estimate: "1 semana",
        heading: "Resolución de problemas",
        paragraphs: [
          "Un problema grande se resuelve dividiéndolo en partes verificables y atacando primero la que tiene mayor incertidumbre.",
          "Escribir los supuestos evita que un error temprano se propague por todo el diseño.",
        ],
        keyIdea:
          "Definir bien el problema es la mitad de la solución.",
      },
      {
        title: "Creatividad e innovación",
        summary: "Generar alternativas y prototipar rápido.",
        estimate: "1 semana",
        heading: "Creatividad e innovación",
        paragraphs: [
          "La creatividad en ingeniería es disciplinada: se generan muchas alternativas y se descartan con criterios técnicos y económicos.",
          "Prototipar barato y temprano permite fallar cuando el error todavía es corregible.",
        ],
        keyIdea:
          "Innovar es equivocarse pronto y barato, no acertar a la primera.",
      },
    ],
  },
  {
    slug: "contexto-profesional",
    unit: "Unidad 5",
    title: "Contexto profesional",
    intro:
      "El entorno legal, gremial y laboral en el que ejercerás como ingeniero en Colombia y el mundo.",
    weeks: 3,
    weekRange: "Semanas 14-16 del curso",
    subtopics: [
      {
        title: "Agremiaciones y normatividad",
        summary: "COPNIA, SCI, ACOFI y matrícula profesional.",
        estimate: "1 semana",
        heading: "Agremiaciones y normatividad",
        paragraphs: [
          "Para ejercer legalmente en Colombia se requiere matrícula profesional expedida por el COPNIA o el consejo correspondiente a la rama.",
          "Las agremiaciones también ofrecen formación continua, congresos y redes de contacto profesional.",
        ],
        keyIdea:
          "La matrícula profesional habilita el ejercicio; sin ella no puedes firmar proyectos.",
      },
      {
        title: "Campos laborales",
        summary: "Sectores, roles y trayectorias posibles.",
        estimate: "1 semana",
        heading: "Campos laborales",
        paragraphs: [
          "Un ingeniero puede trabajar en diseño, operación, consultoría, docencia, investigación, gestión de proyectos o emprendimiento.",
          "La trayectoria típica va de practicante a junior, luego a especialista y finalmente a liderazgo técnico o gerencia.",
        ],
        keyIdea:
          "El título abre varias trayectorias; la especialización la eliges tú.",
      },
      {
        title: "Tendencias globales y sostenibilidad",
        summary: "Transición energética, IA y economía circular.",
        estimate: "1 semana",
        heading: "Tendencias globales y sostenibilidad",
        paragraphs: [
          "La transición energética, la automatización con IA y la economía circular están redefiniendo la demanda de perfiles en todas las ramas.",
          "Los Objetivos de Desarrollo Sostenible son hoy un marco habitual para justificar proyectos de ingeniería.",
        ],
        keyIdea:
          "Las competencias en datos y sostenibilidad ya no son un diferencial: son un requisito.",
      },
    ],
  },
];

export const currentUnitSlug = "ramas-de-la-ingenieria";

export function getUnitDetail(slug: string) {
  return unitDetails.find((u) => u.slug === slug);
}

export function slugForTopicIndex(i: number) {
  return unitDetails[i]?.slug ?? unitDetails[0].slug;
}

export const totalCourseWeeks = unitDetails.reduce((s, u) => s + u.weeks, 0);

export { courseTopics };
