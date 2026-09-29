// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tarea } from '../types';
import { colors } from '../theme/colors';

interface Props {
  tarea: Tarea;
}

export default function TaskItem({ tarea }: Props) {
  // Cambiamos el color de la línea lateral si la tarea está completada
  const isCompleted = tarea.estado === 'Completado';

  return (
    <View style={[styles.container, isCompleted && styles.containerCompleted]}>
      <View style={[styles.indicator, isCompleted && styles.indicatorCompleted]} />
      <View style={styles.content}>
        <Text style={[styles.title, isCompleted && styles.textCompleted]}>{tarea.titulo}</Text>
        <Text style={styles.status}>{tarea.estado}</Text>
      </View>
      <Text style={styles.time}>{tarea.horaInicio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  containerCompleted: {
    opacity: 0.6, // Hace que la tarea completada se vea un poco transparente
  },
  indicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
    backgroundColor: colors.primary,
    marginRight: 15,
  },
  indicatorCompleted: {
    backgroundColor: '#D1D1D6',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  status: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  time: {
    fontSize: 14,
    color: colors.textSecondary,
  }
});