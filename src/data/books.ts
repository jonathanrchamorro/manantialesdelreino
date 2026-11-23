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

export const BOOKS: Book[] = [
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
      "Sin duda, Israel es el reloj profético de Dios, y a ese cronómetro de dimensiones históricas debemos estar atentos los hijos de Dios. Además del mundo, no faltan llamados exegetas y profetas que desvelan.",
    chapters: [],
  },
];

export function getBook(slug: string): Book | undefined {
  return BOOKS.find((b) => b.slug === slug);
}

export const AVAILABLE_BOOKS = BOOKS.filter((b) => b.pdf);
