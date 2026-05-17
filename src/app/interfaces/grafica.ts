export interface Grafica {
  name:  string;
  value: number;
  color: string;
}
export interface ReqGrafComentarios {
    fechaInicial: string;
    fechaFinal  : string;
    type        : string;
    comentarios?: string[];
}
export interface RespGraficaComentarios {
    comentario: string;
    graph:      Graph[];
}
export interface Graficas {
    labels:   string[];
    datasets: Comentario[];
}
export interface Comentario {
    data:  number[];
    label: string;
}
export interface RespGraficaCalificaciones {
    positive: Graph[];
    negative: Graph[];
}
export interface Graph {
    fecha:    string;
    cantidad: number;
}
