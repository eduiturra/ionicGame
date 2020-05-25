export interface QuizJson {
    quiz: CategoriaQuiz[];
    ultimaVersion: VersionQuiz;
    imgDownload: ImgUrlHostingQuiz[];
}

export interface VersionQuiz {
    idVersion: string;
    FechaCreacion: Date | string;
}
export interface ImgUrlHostingQuiz {
    idQuiz: string;
    FechaCreacion: Date | string;
    Url: string;
    nombre: string;
}
export interface ImgUrlQuiz {
    idQuiz: string;
    imgUrl: string;
}
export interface CategoriaQuiz {
    id: number;
    Tipo: string;
    Cursos: MallaQuiz[];
}
export interface MallaQuiz {
    CodigoCurso: string;
    Nombre: string;
    Foto: string;
    FechaCreacion: Date | string;
    Objetos: ObjetosQuiz[];
}
export interface ObjetosQuiz {
    CodigoObjeto: string;
    CodigoGoogleGames: string;
    Nombre: string;
    idCurso: string;
    idTipoObjeto: number;
    Indice: number;
    idObjetoPadre: string;
    FechaCreacion: Date | string;
    EvalObjeto: EvalObjetoQuiz;
    ObjetosHijos: ObjetosQuiz[];
}

export interface EvalObjetoQuiz {
    CodigoObjeto: string;
    Intentos: number | null;

    PreguntasRandom: boolean;
    AlternativasRandom: boolean;
    MostrarRespuestas: boolean;
    TiempoSegundos: number;
    NumPreguntas: number;
    PorcentajeAprobar: number;
    PTiempo: number;
    PTijeras: number;
    PAvanzar: number;
    EvalPreguntas: EvalPreguntasQuiz[];
}

export interface EvalPreguntasQuiz {
    id: number;
    Pregunta: string;
    Imagen: string;
    idCorrecta: string | null;
    idEvalObjeto: string;
    Indice: number;
    AltCorrecta: EvalAlternativasQuiz;
    EvalAlternativas: EvalAlternativasQuiz[];
}
export interface EvalAlternativasQuiz {
    id: string;
    Alternativa: string;
    Indice: number;
    idEvalPregunta: number;
}

export class EvalConfigInitQuiz {
    intentos: any = [];
    vidas = 0;
    indice = 0;
    pTiempo = 0;
    pTijeras = 0;
    pSiguiente = 0;
    tiempoSegundos?: number | null = 0;
}

export interface MallaQuizVM {
    CodigoCurso: string;
    Nombre: string;
    Foto: string;
    FechaCreacion: Date | string;
    Nuevo: boolean;
    Objetos: ObjetosQuizVM[];
}
export interface ObjetosQuizVM {
    CodigoObjeto: string;
    CodigoGoogleGames: string;
    Nombre: string;
    idCurso: string;
    idTipoObjeto: number;
    Indice: number;
    idObjetoPadre: string;
    CodigoobjetoAnterior: string;
    EvalObjeto: EvalObjetoQuiz;
}
