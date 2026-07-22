// Interactive mini-activities for each engineering branch.
// Each activity is a sequence of steps. Answering correctly advances the
// visual "builder" one stage; wrong answers give feedback without progressing.

export type Step = {
  prompt: string;
  options: { label: string; correct: boolean; hint?: string }[];
  // Short label describing what gets built when this step is solved.
  builds: string;
};

export type Activity = {
  slug: string;
  title: string;
  intro: string;
  // Ordered visual stages. stages[0] is the empty state; stages[i] is
  // shown after i correct answers. Length must be steps.length + 1.
  stages: string[];
  steps: Step[];
};

export const activities: Record<string, Activity> = {
  sistemas: {
    slug: "sistemas",
    title: "Lógica de programación: encuentra el mayor",
    intro:
      "Vas a construir un programa que reciba tres números y muestre el mayor. Elige el paso correcto en cada momento.",
    stages: [
      "// Editor vacío",
      "inicio",
      "inicio\nleer a, b, c",
      "inicio\nleer a, b, c\nmayor = a",
      "inicio\nleer a, b, c\nmayor = a\nsi b > mayor: mayor = b",
      "inicio\nleer a, b, c\nmayor = a\nsi b > mayor: mayor = b\nsi c > mayor: mayor = c",
      "inicio\nleer a, b, c\nmayor = a\nsi b > mayor: mayor = b\nsi c > mayor: mayor = c\nimprimir mayor\nfin ✅",
    ],
    steps: [
      {
        prompt: "¿Con qué debe comenzar todo algoritmo estructurado?",
        builds: "Inicio del programa",
        options: [
          { label: "imprimir resultado", correct: false, hint: "Eso va al final." },
          { label: "inicio", correct: true },
          { label: "si a > b", correct: false },
          { label: "fin", correct: false },
        ],
      },
      {
        prompt: "¿Cuál es el siguiente paso lógico?",
        builds: "Entrada de datos",
        options: [
          { label: "imprimir mayor", correct: false },
          { label: "leer a, b, c", correct: true },
          { label: "mayor = 0", correct: false },
          { label: "fin", correct: false },
        ],
      },
      {
        prompt: "Necesitamos una variable para guardar el mayor. ¿Cómo inicializarla bien?",
        builds: "Variable acumuladora",
        options: [
          { label: "mayor = 0", correct: false, hint: "Falla si los números son negativos." },
          { label: "mayor = a", correct: true },
          { label: "mayor = a + b + c", correct: false },
          { label: "mayor = ?", correct: false },
        ],
      },
      {
        prompt: "¿Cómo comparamos b con el mayor actual?",
        builds: "Primera comparación",
        options: [
          { label: "si b == mayor: mayor = b", correct: false },
          { label: "si b < mayor: mayor = b", correct: false, hint: "Signo invertido." },
          { label: "si b > mayor: mayor = b", correct: true },
          { label: "mayor = b", correct: false, hint: "Reemplazaría siempre." },
        ],
      },
      {
        prompt: "Falta comparar c. ¿Qué instrucción agregas?",
        builds: "Segunda comparación",
        options: [
          { label: "si c > mayor: mayor = c", correct: true },
          { label: "si c > a: mayor = c", correct: false, hint: "Ignora que b pudo ser mayor." },
          { label: "mayor = c", correct: false },
          { label: "fin", correct: false },
        ],
      },
      {
        prompt: "El algoritmo está casi listo. ¿Cómo cerramos?",
        builds: "Salida y cierre",
        options: [
          { label: "leer mayor", correct: false },
          { label: "imprimir mayor; fin", correct: true },
          { label: "fin", correct: false, hint: "Falta mostrar el resultado." },
          { label: "reiniciar", correct: false },
        ],
      },
    ],
  },

  civil: {
    slug: "civil",
    title: "Construye un puente colgante",
    intro:
      "Elige correctamente cada componente y observa cómo tu puente se construye paso a paso.",
    stages: [
      "🌊——————————🌊",
      "🌊🟫————————🟫🌊",
      "🌊🟫🗼——————🗼🟫🌊",
      "🌊🟫🗼〰〰〰〰🗼🟫🌊",
      "🌊🟫🗼══════🗼🟫🌊",
      "🌊🟫🗼══════🗼🟫🌊\n     🚗  🚙  🚚 ✅",
    ],
    steps: [
      {
        prompt: "Primero, ¿qué material eliges para las bases (estribos) sobre el terreno?",
        builds: "Estribos",
        options: [
          { label: "Arena suelta", correct: false, hint: "No soporta la carga." },
          { label: "Concreto reforzado", correct: true },
          { label: "Madera", correct: false },
          { label: "Vidrio", correct: false },
        ],
      },
      {
        prompt: "Para las torres altas que sostendrán los cables, ¿qué usarías?",
        builds: "Torres",
        options: [
          { label: "Acero estructural", correct: true },
          { label: "Ladrillo apilado", correct: false },
          { label: "Plástico", correct: false },
          { label: "Cartón prensado", correct: false },
        ],
      },
      {
        prompt: "¿Qué elemento transmite las cargas del tablero a las torres?",
        builds: "Cables principales",
        options: [
          { label: "Cuerda de fibra natural", correct: false, hint: "Se degrada muy rápido." },
          { label: "Cadena de eslabones sueltos", correct: false },
          { label: "Cables de acero de alta resistencia", correct: true },
          { label: "Cinta adhesiva", correct: false },
        ],
      },
      {
        prompt: "Para el tablero por donde pasan los vehículos, ¿qué eliges?",
        builds: "Tablero",
        options: [
          { label: "Losa de concreto sobre vigas de acero", correct: true },
          { label: "Tablones sueltos de madera", correct: false },
          { label: "Vidrio templado", correct: false },
          { label: "Lámina de aluminio delgada", correct: false },
        ],
      },
      {
        prompt: "Antes de abrirlo al tráfico, ¿qué debes hacer?",
        builds: "Prueba de carga",
        options: [
          { label: "Abrirlo directamente", correct: false, hint: "Sin pruebas es un riesgo." },
          { label: "Pintar la señalización", correct: false },
          { label: "Realizar prueba de carga e inspección", correct: true },
          { label: "Cortar el listón", correct: false },
        ],
      },
    ],
  },

  mecanica: {
    slug: "mecanica",
    title: "Ensambla un motor de 4 tiempos",
    intro: "Arma un motor eligiendo la pieza correcta en cada etapa.",
    stages: [
      "⬜⬜⬜  (bloque vacío)",
      "🟦 bloque montado",
      "🟦 + 🔩 cigüeñal",
      "🟦 + 🔩 + 🥄 pistones",
      "🟦 + 🔩 + 🥄 + 🎩 culata",
      "🚗  motor listo ✅",
    ],
    steps: [
      {
        prompt: "¿Cuál es la pieza base sobre la que se monta todo?",
        builds: "Bloque",
        options: [
          { label: "El bloque del motor", correct: true },
          { label: "El volante", correct: false },
          { label: "La correa", correct: false },
          { label: "La bujía", correct: false },
        ],
      },
      {
        prompt: "¿Qué transforma el movimiento lineal en rotativo?",
        builds: "Cigüeñal",
        options: [
          { label: "Cigüeñal", correct: true },
          { label: "Radiador", correct: false },
          { label: "Filtro de aire", correct: false },
          { label: "Batería", correct: false },
        ],
      },
      {
        prompt: "¿Qué pieza recibe la explosión del combustible?",
        builds: "Pistones",
        options: [
          { label: "Pistones", correct: true },
          { label: "Alternador", correct: false },
          { label: "Correa de distribución", correct: false },
          { label: "Cárter", correct: false },
        ],
      },
      {
        prompt: "¿Qué cierra la cámara de combustión por arriba?",
        builds: "Culata",
        options: [
          { label: "Culata con válvulas", correct: true },
          { label: "Tapa del maletero", correct: false },
          { label: "Silenciador", correct: false },
          { label: "Cárter", correct: false },
        ],
      },
      {
        prompt: "¿Qué inicia la combustión en un motor de gasolina?",
        builds: "Chispa de encendido",
        options: [
          { label: "El termómetro", correct: false },
          { label: "La bujía", correct: true },
          { label: "El pedal", correct: false },
          { label: "El limpiaparabrisas", correct: false },
        ],
      },
    ],
  },

  electrica: {
    slug: "electrica",
    title: "Energiza una vivienda",
    intro:
      "Conecta correctamente los elementos para llevar energía desde la fuente hasta las luces.",
    stages: [
      "🏚️  sin energía",
      "🔋 fuente conectada",
      "🔋—⚡ transformador",
      "🔋—⚡—🔌 tablero eléctrico",
      "🔋—⚡—🔌—💡 iluminación",
      "🏠✨ vivienda energizada ✅",
    ],
    steps: [
      {
        prompt: "¿Cuál es una fuente renovable de generación adecuada?",
        builds: "Fuente",
        options: [
          { label: "Panel solar fotovoltaico", correct: true },
          { label: "Vela encendida", correct: false },
          { label: "Ventilador de mano", correct: false },
          { label: "Batería descargada", correct: false },
        ],
      },
      {
        prompt: "Para transportar la energía a larga distancia con pocas pérdidas se usa…",
        builds: "Alta tensión",
        options: [
          { label: "Alta tensión con transformador elevador", correct: true },
          { label: "Baja tensión sin transformador", correct: false, hint: "Aumentan las pérdidas." },
          { label: "Cables de cobre delgados sin aislante", correct: false },
          { label: "Corriente estática", correct: false },
        ],
      },
      {
        prompt: "Antes de entrar al tablero, la tensión debe…",
        builds: "Transformador reductor",
        options: [
          { label: "Reducirse con un transformador", correct: true },
          { label: "Duplicarse", correct: false },
          { label: "Cortarse totalmente", correct: false },
          { label: "Convertirse en calor", correct: false },
        ],
      },
      {
        prompt: "¿Qué protege los circuitos internos ante sobrecargas?",
        builds: "Protecciones",
        options: [
          { label: "Interruptores termomagnéticos (breakers)", correct: true },
          { label: "Un enchufe común", correct: false },
          { label: "Cinta aislante", correct: false },
          { label: "Un temporizador de cocina", correct: false },
        ],
      },
      {
        prompt: "Para iluminación eficiente hoy se usa…",
        builds: "Iluminación",
        options: [
          { label: "Bombilla incandescente", correct: false, hint: "Consume mucho." },
          { label: "Bombilla LED", correct: true },
          { label: "Vela de cera", correct: false },
          { label: "Lámpara de aceite", correct: false },
        ],
      },
    ],
  },

  industrial: {
    slug: "industrial",
    title: "Optimiza una línea de producción",
    intro:
      "Toma decisiones para mejorar eficiencia, calidad y flujo de la línea.",
    stages: [
      "⚙️  línea sin definir",
      "📦 materia prima organizada",
      "🏭 estaciones balanceadas",
      "🔍 control de calidad",
      "🚚 logística de salida",
      "📈 línea optimizada ✅",
    ],
    steps: [
      {
        prompt: "¿Cómo debes recibir y ubicar la materia prima?",
        builds: "Recepción",
        options: [
          { label: "Amontonada donde quepa", correct: false },
          { label: "Con inventario y ubicación estandarizada (5S)", correct: true },
          { label: "En la puerta del baño", correct: false },
          { label: "Comprando de más siempre", correct: false, hint: "Genera exceso de inventario." },
        ],
      },
      {
        prompt: "Una estación tarda mucho más que las demás. ¿Qué haces?",
        builds: "Balanceo",
        options: [
          { label: "Ignorarlo", correct: false },
          { label: "Balancear la línea redistribuyendo tareas", correct: true },
          { label: "Acelerar a los operarios sin cambios", correct: false, hint: "Aumenta errores." },
          { label: "Cerrar la planta", correct: false },
        ],
      },
      {
        prompt: "¿Dónde conviene ubicar el control de calidad?",
        builds: "Calidad",
        options: [
          { label: "Solo al final, cuando ya está todo hecho", correct: false, hint: "Detecta tarde." },
          { label: "En puntos críticos del proceso", correct: true },
          { label: "En la cafetería", correct: false },
          { label: "Una vez al año", correct: false },
        ],
      },
      {
        prompt: "Para reducir tiempos de entrega al cliente conviene…",
        builds: "Logística",
        options: [
          { label: "Planear rutas y usar despachos frecuentes", correct: true },
          { label: "Esperar a llenar un camión al año", correct: false },
          { label: "No coordinar con transporte", correct: false },
          { label: "Enviar todo por correo postal", correct: false },
        ],
      },
      {
        prompt: "¿Con qué indicador mides mejora continua?",
        builds: "Indicadores",
        options: [
          { label: "El clima", correct: false },
          { label: "Productividad, OEE y calidad", correct: true },
          { label: "Cantidad de reuniones", correct: false },
          { label: "Color de los uniformes", correct: false },
        ],
      },
    ],
  },

  quimica: {
    slug: "quimica",
    title: "Diseña un proceso químico seguro",
    intro:
      "Selecciona correctamente las etapas para transformar materia prima en producto.",
    stages: [
      "🧪 laboratorio vacío",
      "🧪 + reactivos",
      "🧪 + reactor",
      "🧪 + separación",
      "🧪 + control",
      "🏭 planta operando ✅",
    ],
    steps: [
      {
        prompt: "Antes de manipular reactivos debes…",
        builds: "Seguridad",
        options: [
          { label: "Usar EPP y leer la ficha de seguridad (MSDS)", correct: true },
          { label: "Oler el reactivo para identificarlo", correct: false, hint: "Peligroso." },
          { label: "Mezclar sin medir", correct: false },
          { label: "Calentar hasta que reaccione algo", correct: false },
        ],
      },
      {
        prompt: "Para que la reacción sea eficiente conviene…",
        builds: "Reactor",
        options: [
          { label: "Controlar temperatura, presión y catalizador", correct: true },
          { label: "Solo esperar sin controlar variables", correct: false },
          { label: "Aumentar todo al máximo", correct: false, hint: "Riesgo de explosión." },
          { label: "Reactor abierto al ambiente", correct: false },
        ],
      },
      {
        prompt: "Después de reaccionar hay que separar el producto. ¿Cómo?",
        builds: "Separación",
        options: [
          { label: "Con destilación, filtración o extracción según el caso", correct: true },
          { label: "Tirando todo a la basura", correct: false },
          { label: "Congelando y descongelando al azar", correct: false },
          { label: "Sin separar", correct: false },
        ],
      },
      {
        prompt: "¿Cómo garantizas calidad del producto?",
        builds: "Control de calidad",
        options: [
          { label: "Análisis de laboratorio y trazabilidad", correct: true },
          { label: "Adivinar por el color", correct: false },
          { label: "Preguntar al cliente", correct: false },
          { label: "No controlar", correct: false },
        ],
      },
      {
        prompt: "Los residuos generados deben…",
        builds: "Gestión ambiental",
        options: [
          { label: "Verterse al río", correct: false, hint: "Ilegal y peligroso." },
          { label: "Tratarse y disponerse según normativa", correct: true },
          { label: "Quemarse a cielo abierto", correct: false },
          { label: "Guardarse indefinidamente sin plan", correct: false },
        ],
      },
    ],
  },

  ambiental: {
    slug: "ambiental",
    title: "Recupera un río contaminado",
    intro: "Aplica acciones técnicas en el orden correcto para sanear el río.",
    stages: [
      "🏞️💀 río contaminado",
      "🏞️🔬 diagnóstico",
      "🏞️🚫 corte de vertimientos",
      "🏞️♻️ tratamiento",
      "🏞️🌱 restauración",
      "🐟🌳 río sano ✅",
    ],
    steps: [
      {
        prompt: "¿Qué haces primero?",
        builds: "Diagnóstico",
        options: [
          { label: "Muestreo y análisis de agua", correct: true },
          { label: "Echar cloro por todo el río", correct: false, hint: "Puede empeorar." },
          { label: "Tapar el río", correct: false },
          { label: "Culpar a los vecinos", correct: false },
        ],
      },
      {
        prompt: "Identificas descargas industriales sin tratar. ¿Qué exiges?",
        builds: "Control en la fuente",
        options: [
          { label: "Instalación de plantas de tratamiento (PTAR) en la fuente", correct: true },
          { label: "Nada, dejar que siga", correct: false },
          { label: "Aumentar la descarga", correct: false },
          { label: "Cambiar el río de lugar", correct: false },
        ],
      },
      {
        prompt: "Para el agua ya contaminada aguas abajo se puede aplicar…",
        builds: "Tratamiento",
        options: [
          { label: "Sistemas de biorremediación y humedales artificiales", correct: true },
          { label: "Solo esperar años", correct: false },
          { label: "Vaciar el río", correct: false },
          { label: "Añadir más residuos", correct: false },
        ],
      },
      {
        prompt: "Para estabilizar las orillas y la biodiversidad…",
        builds: "Restauración",
        options: [
          { label: "Reforestación con especies nativas", correct: true },
          { label: "Cementar las dos orillas", correct: false, hint: "Elimina el ecosistema." },
          { label: "Sembrar especies invasoras", correct: false },
          { label: "Cazar toda la fauna", correct: false },
        ],
      },
      {
        prompt: "Para que la recuperación se mantenga…",
        builds: "Monitoreo",
        options: [
          { label: "Educación ambiental y monitoreo continuo", correct: true },
          { label: "Cerrar el proyecto y olvidar", correct: false },
          { label: "Publicar solo en redes sociales", correct: false },
          { label: "Cobrar entrada al río", correct: false },
        ],
      },
    ],
  },

  electronica: {
    slug: "electronica",
    title: "Arma un sensor IoT",
    intro:
      "Diseña un dispositivo que mida temperatura y la envíe a la nube. Elige cada componente.",
    stages: [
      "🔲 protoboard vacía",
      "🔲 + 🔌 alimentación",
      "🔲 + 🌡️ sensor",
      "🔲 + 🧠 microcontrolador",
      "🔲 + 📶 comunicación",
      "📱☁️ datos en la nube ✅",
    ],
    steps: [
      {
        prompt: "Para alimentar el circuito de forma segura y estable usas…",
        builds: "Alimentación",
        options: [
          { label: "Fuente regulada de 3.3V/5V", correct: true },
          { label: "Enchufe de 110V directo al chip", correct: false, hint: "Lo quemas." },
          { label: "Batería sin regular de 12V", correct: false },
          { label: "Cable pelado a la red", correct: false },
        ],
      },
      {
        prompt: "Para medir temperatura eliges…",
        builds: "Sensor",
        options: [
          { label: "Sensor digital DHT22 o LM35", correct: true },
          { label: "Un LED", correct: false },
          { label: "Un motor DC", correct: false },
          { label: "Un altavoz", correct: false },
        ],
      },
      {
        prompt: "El cerebro que procesa la señal es…",
        builds: "Microcontrolador",
        options: [
          { label: "Un microcontrolador (ESP32 / Arduino)", correct: true },
          { label: "Un imán", correct: false },
          { label: "Un capacitor solo", correct: false },
          { label: "Un cable de cobre", correct: false },
        ],
      },
      {
        prompt: "Para enviar los datos por Internet sin cables usas…",
        builds: "Comunicación",
        options: [
          { label: "Wi-Fi o LoRa integrados", correct: true },
          { label: "Señales de humo", correct: false },
          { label: "Un cable RCA a la nube", correct: false },
          { label: "Nada, se envían solos", correct: false },
        ],
      },
      {
        prompt: "En la nube conviene…",
        builds: "Visualización",
        options: [
          { label: "Almacenar y visualizar en un dashboard (MQTT/HTTP)", correct: true },
          { label: "Imprimir en papel cada dato", correct: false },
          { label: "Guardar en un cajón", correct: false },
          { label: "Borrar inmediatamente", correct: false },
        ],
      },
    ],
  },
};
