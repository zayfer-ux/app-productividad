// src/data/mockData.ts
import { Proyecto, Tarea } from '../types';

export const proyectosMock: Proyecto[] = [
  { 
    id: '1', 
    titulo: 'Toma de decisiones', 
    porcentajeCompletado: 32, 
    estado: 'Activo', 
    descripcion: 'Analizando métricas' 
  },
  { 
    id: '2', 
    titulo: 'Rediseño Web', 
    porcentajeCompletado: 75, 
    estado: 'Activo', 
    descripcion: 'Fase de exploración' 
  }
];

export const tareasMock: Tarea[] = [
  { 
    id: '1', 
    titulo: 'Desarrollo de diseño web', 
    estado: 'Pendiente', 
    horaInicio: '10:15 AM', 
    horaFin: '11:15 AM', 
    fecha: '2026-09-29' 
  },
  { 
    id: '2', 
    titulo: 'Revisión y feedback', 
    estado: 'Completado', 
    horaInicio: '11:30 AM', 
    horaFin: '12:30 PM', 
    fecha: '2026-09-29' 
  }
];