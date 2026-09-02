import u1Definicion from "@/assets/units/u1-definicion.jpg";
import u1Perfil from "@/assets/units/u1-perfil.jpg";
import u1Etica from "@/assets/units/u1-etica.jpg";
import u2Origen from "@/assets/units/u2-origen.jpg";
import u2Hitos from "@/assets/units/u2-hitos.jpg";
import u2Contemporanea from "@/assets/units/u2-contemporanea.jpg";
import u3Tradicionales from "@/assets/units/u3-tradicionales.jpg";
import u3Emergentes from "@/assets/units/u3-emergentes.jpg";
import u3Interdisciplinar from "@/assets/units/u3-interdisciplinar.jpg";
import u4Metodo from "@/assets/units/u4-metodo.jpg";
import u4Problemas from "@/assets/units/u4-problemas.jpg";
import u4Creatividad from "@/assets/units/u4-creatividad.jpg";
import u5Agremiaciones from "@/assets/units/u5-agremiaciones.jpg";
import u5Campos from "@/assets/units/u5-campos.jpg";
import u5Sostenibilidad from "@/assets/units/u5-sostenibilidad.jpg";
import u6Carreras from "@/assets/units/u6-carreras.jpg";
import u6Posgrados from "@/assets/units/u6-posgrados.jpg";
import u6Doctorados from "@/assets/units/u6-doctorados.jpg";

type UnitImage = { src: string; alt: string };

/** Imagen ilustrativa por subtema, indexada por slug de unidad e índice de subtema. */
export const unitImages: Record<string, UnitImage[]> = {
  "la-ingenieria-y-el-ingeniero": [
    {
      src: u1Definicion,
      alt: "Ilustración de un ingeniero revisando planos junto a engranajes",
    },
    {
      src: u1Perfil,
      alt: "Ilustración del perfil profesional de un ingeniero con su portátil",
    },
    {
      src: u1Etica,
      alt: "Ilustración de una balanza que equilibra tecnología y responsabilidad social",
    },
  ],
  "historia-y-evolucion": [
    {
      src: u2Origen,
      alt: "Ilustración de una pirámide y un acueducto, orígenes de la ingeniería",
    },
    {
      src: u2Hitos,
      alt: "Ilustración de hitos históricos: máquina de vapor, Torre Eiffel, bombilla y computador",
    },
    {
      src: u2Contemporanea,
      alt: "Ilustración de un ingeniero con dron, brazo robótico y turbinas eólicas",
    },
  ],
  "ramas-de-la-ingenieria": [
    {
      src: u3Tradicionales,
      alt: "Ilustración de grúa, engranaje y torre eléctrica, ingenierías tradicionales",
    },
    {
      src: u3Emergentes,
      alt: "Ilustración de ADN, satélite y microchip, ingenierías emergentes",
    },
    {
      src: u3Interdisciplinar,
      alt: "Ilustración de profesionales de distintas áreas colaborando alrededor de una idea",
    },
  ],
  "metodo-y-pensamiento-del-ingeniero": [
    {
      src: u4Metodo,
      alt: "Ilustración de un científico con clipboard, frascos y engranajes en ciclo",
    },
    {
      src: u4Problemas,
      alt: "Ilustración de un ingeniero con llave resolviendo un problema paso a paso",
    },
    {
      src: u4Creatividad,
      alt: "Ilustración de un cohete despegando desde una bombilla, creatividad e innovación",
    },
  ],
  "contexto-profesional": [
    {
      src: u5Agremiaciones,
      alt: "Ilustración de edificio institucional con certificados y documentos legales",
    },
    {
      src: u5Campos,
      alt: "Ilustración de obra de construcción, oficina y laboratorio, campos laborales",
    },
    {
      src: u5Sostenibilidad,
      alt: "Ilustración del planeta Tierra con paneles solares, turbinas eólicas y hojas",
    },
  ],
  "carreras-profesionales-y-posgrados": [
    {
      src: u6Carreras,
      alt: "Ilustración de profesionales de distintas ingenierías frente a una ciudad",
    },
    {
      src: u6Posgrados,
      alt: "Ilustración de un graduado con diploma y libros de posgrado",
    },
    {
      src: u6Doctorados,
      alt: "Ilustración de un investigador con microscopio y gráficos en laboratorio",
    },
  ],
};
