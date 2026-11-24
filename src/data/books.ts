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
  emails: ["manantialesdelreino@gmail.com", "cristiasidia@gmail.com"],
  youtube: "https://www.youtube.com/c/ArcadioSierraDiaz",
  amazon: "https://www.amazon.com/author/arcadiosierradiaz",
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
      "Comentario homilético a la epístola de Pablo a los Efesios: el plan divino de la salvación, el origen eterno e histórico de la Iglesia, su unidad como el nuevo hombre corporativo, el andar del cristiano y la lucha contra el enemigo de Dios con la panoplia de Dios.",
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
      "Los juicios escatológicos de Dios están a las puertas. El autor expone los juicios que Dios ha establecido, el costo de identificarse auténticamente con Cristo y lo que ocurrirá ante el tribunal de Cristo: las obras manifiestas y los niveles de recompensas.",
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
      "No todos los que han creído en Jesucristo reinarán con Él, sino los vencedores. Un estudio de las siete promesas a los vencedores: la salvación, la cruz, el mundo, las obras, la justicia, la Iglesia y el tribunal de Cristo, hasta las bodas del Cordero.",
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
