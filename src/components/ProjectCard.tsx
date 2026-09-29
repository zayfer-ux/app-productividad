// src/components/ProjectCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Proyecto } from '../types';
import { colors } from '../theme/colors';

interface Props {
  proyecto: Proyecto;
}

export default function ProjectCard({ proyecto }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.percentage}>{proyecto.porcentajeCompletado}%</Text>
      {/* El espacio gris donde insertaremos la gráfica en la Fase 4 */}
      <View style={styles.chartPlaceholder} />
      <Text style={styles.title}>{proyecto.titulo}</Text>
      {proyecto.descripcion && <Text style={styles.description}>{proyecto.descripcion}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    marginRight: 15,
    width: 160,
    borderWidth: 1,
    borderColor: colors.border,
  },
  percentage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  chartPlaceholder: {
    height: 60,
    backgroundColor: colors.background,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: colors.textSecondary,
  }
});