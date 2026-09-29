// src/types/index.ts

// Estructura para los Proyectos (las tarjetas con gráficas)
export interface Proyecto {
  id: string;
  titulo: string;
  porcentajeCompletado: number; // Ej. 32
  estado: 'Activo' | 'Pausado' | 'Completado';
  descripcion?: string; 
}

// Estructura para las Tareas Diarias (la agenda y lista de hoy)
export interface Tarea {
  id: string;
  titulo: string;
  estado: 'Pendiente' | 'En progreso' | 'Completado';
  horaInicio: string;  // Ej. "09:15 AM"
  horaFin: string;     // Ej. "10:15 AM"
  fecha: string;       // Ej. "2026-11-17"
  proyectoId?: string; // (Opcional) Para vincular la tarea a un proyecto específico
}