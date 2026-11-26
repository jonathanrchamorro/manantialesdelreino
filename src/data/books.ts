export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  year?: number;
  pages?: number;
  isbn?: string;
  cover: string;
  pdf?: string;
  epigraph?: { text: string; reference: string };
  summary: string;
  chapters: string[];
};

export const SITE = {
  name: "Manantiales del Reino",
};

export const AUTHOR = {
  name: "Arcadio Sierra Díaz",
  photo: "/img/arcadio-sierra-diaz.jpg",
  bio: "Colombiano; estudioso y expositor de la Palabra de Dios. Los libros que ha escrito son exegéticos con énfasis en lo histórico y lo escatológico, cuya línea editorial tiene como referente fundamental el contexto bíblico.",
  emails: ["cristiasidia@gmail.com"],
  whatsapp: {
    display: "+57 314 2568416",
    url: `https://wa.me/573142568416?text=${encodeURIComponent("Hola, le escribo desde la página Manantiales del Reino.")}`,
  },
  youtube: "https://www.youtube.com/c/ArcadioSierraDiaz",
  amazon: "https://www.amazon.com/stores/author/B00IYPT0HW/allbooks",
};

// Entry order here does not matter: BOOKS is sorted below.
const BOOK_ENTRIES: Book[] = [
  {
    slug: "efesios-el-misterio-de-cristo-revelado",
    title: "Efesios",
    subtitle: "El misterio de Cristo revelado",
    year: 2004,
    pages: 388,
    cover: "/portadas/efesios-el-misterio-de-cristo-revelado.jpg",
    pdf: "/libros/efesios-el-misterio-de-cristo-revelado.pdf",
    epigraph: {
      text: "…que por revelación me fue declarado el misterio… misterio que en otras generaciones no se dio a conocer a los hijos de los hombres, como ahora es revelado a sus santos apóstoles y profetas por el Espíritu.",
      reference: "Efesios 3:3-5",
    },
    summary:
      "La epístola del apóstol Pablo a los Efesios es considerada uno de los documentos más elevados que hayan sido escritos en la historia de la humanidad; y esto se debe tanto a la profundidad de su carga revelacional, así como a lo sublime de su mensaje acerca de los eternos propósitos de Dios con relación al hombre, y acerca de la naturaleza y al destino de la iglesia.",
    chapters: [
      "Introducción I: Autoría. Esbozo de un perfil paulino",
      "Introducción II: Visión panorámica y estructural",
      "El plan divino de la salvación",
      "El origen eterno de la Iglesia",
      "El origen histórico de la Iglesia",
      "Triunfo y supremacía de Cristo",
      "Cómo se produce la Iglesia",
      "Cómo se edifica la Iglesia",
      "Revelación del misterio de Cristo",
      "Fortalecimiento del hombre interior",
      "La unidad de la Iglesia",
      "La Iglesia como el nuevo hombre corporativo",
      "La Iglesia como el nuevo hombre corporativo II",
      "El andar del cristiano",
      "El misterio del matrimonio de Cristo y la Iglesia",
      "Cristo en el hogar y en el trabajo",
      "Lucha de la Iglesia contra el enemigo de Dios",
      "La panoplia de Dios",
    ],
  },
  {
    slug: "el-juicio-escatologico-de-los-hijos-de-dios",
    title: "El juicio escatológico de los hijos de Dios",
    year: 2023,
    pages: 79,
    cover: "/portadas/el-juicio-escatologico-de-los-hijos-de-dios.jpg",
    pdf: "/libros/el-juicio-escatologico-de-los-hijos-de-dios.pdf",
    epigraph: {
      text: "¡Oh almas adúlteras! ¿No sabéis que la amistad del mundo es enemistad contra Dios? Cualquiera, pues, que quiera ser amigo del mundo, se constituye enemigo de Dios.",
      reference: "Santiago 4:4",
    },
    summary:
      "Un aspecto importante del desarrollo escatológico de la salvación eterna que recibimos de Dios por gracia por medio de la fe en la obra expiatoria de Jesucristo, es el testimonio de santidad en el curso de nuestra vida en este cuerpo mortal, y nuestra obediencia a la voluntad de Dios; de todo lo cual tendremos que rendir cuentas delante del Tribunal de Cristo el día de su regreso a la tierra.",
    chapters: [
      "Los juicios establecidos por Dios",
      "Para vivir es necesario morir",
      "La auténtica identificación con Cristo",
      "Tiempo y justificación del juicio",
      "El tribunal de Cristo",
    ],
  },
  {
    slug: "los-vencedores-y-el-reino-milenial",
    title: "Los vencedores y el Reino Milenial",
    year: 1999,
    pages: 205,
    cover: "/portadas/los-vencedores-y-el-reino-milenial.jpg",
    pdf: "/libros/los-vencedores-y-el-reino-milenial.pdf",
    epigraph: {
      text: "Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame.",
      reference: "Lucas 9:23",
    },
    summary:
      "Es necesario conocer que no todos los hijos de Dios son vencedores; y que la salvación es sólo la puerta para designios más altos que nos depara el Señor. Por ejemplo, sólo los vencedores entrarán a reinar con Cristo sobre las naciones en el reino milenial. Este libro te enseña detalles de ese importante tema.",
    chapters: [
      "Los vencedores y la salvación",
      "Los vencedores y la cruz",
      "Los vencedores y el mundo",
      "Los vencedores y las obras",
      "Los vencedores y la justicia",
      "Los vencedores y la Iglesia",
      "Los vencedores y el tribunal de Cristo",
    ],
  },
  {
    slug: "los-concilios-ecumenicos",
    title: "Los concilios ecuménicos",
    subtitle: "Un perfil de los concilios episcopales a través de los siglos",
    year: 2001,
    pages: 259,
    isbn: "979-870-8942074",
    cover: "/portadas/los-concilios-ecumenicos.jpg",
    pdf: "/libros/los-concilios-ecumenicos.pdf",
    summary:
      "Los estudiosos del desarrollo histórico de la Iglesia de Jesucristo, en esta obra encontrarán un resumen certero de cada uno de los concilios ecuménicos de la cristiandad, escenarios donde los jerarcas del clero debatieron y definieron los grandes dogmas fundamentales y las controversias relacionadas con Dios mismo, con la Trinidad, con Cristo y sus naturalezas, con el Espíritu Santo, con la salvación, entre otros tópicos; pero también en el seno de esas asambleas se han protocolizado divisiones, se han cocinado cismas, y nuevas grietas han surgido.",
    chapters: [
      "Concilio de Nicea",
      "Concilio de Constantinopla I",
      "Concilio de Éfeso",
      "Concilio de Calcedonia",
      "Concilio de Constantinopla II",
      "Concilio de Constantinopla III",
      "Concilio de Nicea II",
      "Concilio de Constantinopla IV",
      "Concilio Lateranense I",
      "Concilio Lateranense II",
      "Concilio Lateranense III",
      "Concilio Lateranense IV",
      "Concilio de Lyon I",
      "Concilio de Lyon II",
      "Concilio de Vienne",
      "Concilio de Constanza",
      "Concilio de Basilea-Ferrara y Florencia",
      "Concilio de Letrán V",
      "Concilio de Trento",
      "Concilio Vaticano I",
      "Concilio Vaticano II",
    ],
  },
  {
    slug: "las-doncellas-de-las-lamparas-encendidas",
    title: "Las doncellas de las lámparas encendidas",
    year: 2022,
    pages: 69,
    isbn: "978-150-2859822",
    cover: "/portadas/las-doncellas-de-las-lamparas-encendidas.jpg",
    pdf: "/libros/las-doncellas-de-las-lamparas-encendidas.pdf",
    epigraph: {
      text: "Porque os celo con celo de Dios; pues os he desposado con un solo esposo, para presentaros como una virgen pura a Cristo.",
      reference: "2 Corintios 11:2",
    },
    summary:
      "La realidad del reino de los cielos se ha hecho presente; está a las puertas; y la iglesia no está preparada para recibir al Rey, quien se acerca a pasos agigantados. Una vez frente al Señor, sentado en los estrados de su tribunal, habremos de rendirle cuentas de todos nuestros actos durante nuestro paso por esta tierra.",
    chapters: [
      "Amasando tortas para la reina del cielo",
      "El reino de los cielos ha llegado",
      "Nuestra constitución y salvación tripartita",
      "El nuevo nacimiento",
      "Preparación para las bodas del Cordero",
      "El tribunal de Cristo",
      "Las fiestas proféticas",
      "Los vencedores",
      "Las bodas del Cordero en el marco del matrimonio hebreo",
      "Disciplinas para las vírgenes insensatas",
    ],
  },
  {
    slug: "las-profundidades-de-nuestro-enigmatico-corazon",
    title: "Las profundidades de nuestro enigmático corazón",
    year: 2022,
    pages: 59,
    cover: "/portadas/las-profundidades-de-nuestro-enigmatico-corazon.jpg",
    pdf: "/libros/las-profundidades-de-nuestro-enigmatico-corazon.pdf",
    epigraph: {
      text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.",
      reference: "Salmos 51:10",
    },
    summary:
      "A decir verdad, nuestro corazón subjetivo es el centro neurálgico de nuestro carácter y de nuestra personalidad; pues es la sede misma de nuestra alma y de nuestro espíritu. Siendo así, nuestro corazón es el asiento de nuestra mente, de nuestros sentimientos y de nuestra voluntad; como también allí se localiza nuestra conciencia, allí opera la intuición y la comunión con Dios.",
    chapters: [
      "El corazón, asiento del alma",
      "El corazón, sede del espíritu humano",
      "La conciencia y la libertad",
    ],
  },
  {
    slug: "el-hombre-interior",
    title: "El hombre interior",
    subtitle: "Inmersión en el interior del ser humano",
    year: 2002,
    pages: 225,
    cover: "/portadas/el-hombre-interior.jpg",
    pdf: "/libros/el-hombre-interior.pdf",
    summary:
      "Una inmersión, a la luz de la Palabra de Dios, en el hombre interior de los redimidos: la Trinidad divina y el ser humano, la diferencia entre el alma y el espíritu, las funciones del espíritu regenerado, la renovación del alma y el camino del creyente de Egipto a la Tierra Prometida.",
    chapters: [
      "La Trinidad divina y el ser humano",
      "El hombre interior y el hombre exterior",
      "El espíritu humano en el hombre interior",
      "Muerte para generar vida",
      "La renovación del alma",
      "De Egipto a la Tierra Prometida",
    ],
  },
  {
    slug: "el-nuevo-odre-de-dios",
    title: "El nuevo odre de Dios",
    year: 2009,
    pages: 153,
    cover: "/portadas/el-nuevo-odre-de-dios.jpg",
    pdf: "/libros/el-nuevo-odre-de-dios.pdf",
    summary:
      "Al hablar del nuevo odre de Dios, se concluye que hubo un antiguo odre que ya no le sirve a Dios para sus propósitos; y esto, a la vez, nos lleva a asegurar que hubo un vino en la antigüedad que ya fue reemplazado por un vino nuevo de parte del Señor.",
    chapters: [
      "Cristo, el vino nuevo; la Iglesia, el nuevo odre",
      "Edificando el odre",
      "Gerizim: Trasfondo histórico de una religión",
      "El odre viejo desechado",
      "El odre de Dios en la historia de la iglesia",
    ],
  },
  {
    slug: "el-vuelo-infinito-de-los-elegidos",
    title: "El vuelo infinito de los elegidos",
    year: 2022,
    pages: 141,
    isbn: "979-836-1825080",
    cover: "/portadas/el-vuelo-infinito-de-los-elegidos.jpg",
    pdf: "/libros/el-vuelo-infinito-de-los-elegidos.pdf",
    epigraph: {
      text: "Si fuerais del mundo, el mundo amaría lo suyo; pero porque no sois del mundo, antes yo os elegí del mundo, por eso el mundo os aborrece.",
      reference: "Juan 15:19",
    },
    summary:
      "Un recorrido por el plan redentor de Dios desde la elección hasta la glorificación: justificación, santificación, regeneración y redención, para desembocar en la apertura de los sellos, las siete trompetas y la parusía del Señor.",
    chapters: [
      "La elección",
      "Los estadios de la salvación",
      "La justificación",
      "La santificación",
      "La regeneración de los elegidos",
      "La redención",
      "La apertura de los sellos",
      "A la final trompeta",
      "El reino",
      "La glorificación",
      "Apéndice: Filadelfia y la gran tribulación",
    ],
  },
  {
    slug: "la-muerte-no-mata",
    title: "La muerte no mata",
    subtitle: "Lo que nos espera al final del oscuro túnel de la muerte",
    year: 2024,
    pages: 85,
    cover: "/portadas/la-muerte-no-mata.jpg",
    pdf: "/libros/la-muerte-no-mata.pdf",
    epigraph: {
      text: "Mejor es la buena fama que el buen ungüento; y mejor el día de la muerte que el día del nacimiento.",
      reference: "Eclesiastés 7:1",
    },
    summary:
      "¿Qué hay después de cruzar el umbral de la muerte? A la luz de la revelación bíblica, el autor expone los lugares de ultratumba —el Paraíso, el Hades, el abismo, el lago de fuego y la nueva Jerusalén— y cómo encarar la muerte con esperanza.",
    chapters: [
      "Lugares de ultratumba",
      "Diversas connotaciones de la muerte en el ser humano",
      "Encarando la muerte",
      "Apéndice I: Si se humillare mi pueblo",
      "Apéndice II: Cómo introducir la cruz en tu vida y negar tu ego",
    ],
  },
  {
    slug: "los-misterios-de-dios-revelados",
    title: "Los misterios de Dios revelados",
    subtitle: "Desafío de Dios a la humanidad en estos tiempos pre-escatológicos",
    year: 2017,
    pages: 169,
    cover: "/portadas/los-misterios-de-dios-revelados.jpg",
    pdf: "/libros/los-misterios-de-dios-revelados.pdf",
    epigraph: {
      text: "Porque no quiero, hermanos, que ignoréis este misterio…",
      reference: "Romanos 11:25",
    },
    summary:
      "Doce misterios que la Escritura revela: del reino de los cielos y el endurecimiento de Israel, a Cristo, la piedad, la fe, la iglesia, la iniquidad y la transformación del cuerpo de los santos.",
    chapters: [
      "El misterio del reino de los cielos",
      "El misterio del endurecimiento de Israel",
      "El misterio de Cristo",
      "El misterio de la piedad",
      "El misterio de la fe",
      "El misterio de la iglesia",
      "El misterio de la habitación íntima del Cristo vivo en el creyente",
      "El misterio de las siete estrellas y de los siete candeleros de oro",
      "El misterio de la mujer y de la bestia que la trae",
      "El misterio de la iniquidad",
      "El misterio de la transformación del cuerpo de los santos",
      "El misterio de la voluntad de Dios",
    ],
  },
  {
    slug: "a-la-final-trompeta",
    title: "A la final trompeta",
    subtitle: "¿Qué papel desempeña Israel en la parusía de Cristo?",
    cover: "/portadas/a-la-final-trompeta.jpg",
    summary:
      "Sin duda, Israel es el reloj profético de Dios, y a ese cronómetro de dimensiones históricas debemos estar atentos los hijos de Dios. Además del mundo, no faltan llamados exegetas y profetas que desdeñan.",
    chapters: [],
  },
];

// Display order: books ready to read first, newest to oldest; upcoming books last.
// Ties fall back to alphabetical title so the order never depends on how entries are typed.
export const BOOKS: Book[] = [...BOOK_ENTRIES].sort((a, b) => {
  if (Boolean(a.pdf) !== Boolean(b.pdf)) return a.pdf ? -1 : 1;
  const byYear = (b.year ?? 0) - (a.year ?? 0);
  return byYear !== 0 ? byYear : a.title.localeCompare(b.title, "es");
});

export function getBook(slug: string): Book | undefined {
  return BOOKS.find((b) => b.slug === slug);
}

export const AVAILABLE_BOOKS = BOOKS.filter((b) => b.pdf);
