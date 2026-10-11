export interface Oportunidad {
  id: number;
  titulo: string;
  tipo: 'Práctica' | 'Beca' | 'Hackathon' | 'Convocatoria' | 'Competencia' | 'Curso' | 'Conferencia';
  organizacion: string;
  modalidad: 'Presencial' | 'Virtual' | 'Híbrida';
  fechaCierre: string; // formato AAAA-MM-DD
  cupos: number;
}
