// src/components/ProjectCard.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';
import { Proyecto } from '../types';
import { design } from '../theme/design';
import { colors } from '../theme/colors';

interface Props {
  proyecto: Proyecto;
}

export default function ProjectCard({ proyecto }: Props) {
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  const rawData = proyecto.id === '1' ? [20, 45, 28, 80, 99, 43] : [10, 25, 15, 60, 40, 85];

  // Cálculo de puntos dinámico basado en las medidas reales del contenedor
  const getPoints = () => {
    if (chartSize.width === 0) return "";
    const maxVal = Math.max(...rawData);
    const minVal = Math.min(...rawData);
    const padding = 15;
    
    return rawData.map((val, i) => {
      const x = padding + (i / (rawData.length - 1)) * (chartSize.width - padding * 2);
      const y = (chartSize.height - padding) - ((val - minVal) / (maxVal - minVal) * (chartSize.height - padding * 2));
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <View style={styles.card}>
      <View style={styles.chartContainer} onLayout={(e) => setChartSize(e.nativeEvent.layout)}>
        {chartSize.width > 0 && (
          <Svg width="100%" height="100%">
            <Polyline 
              points={getPoints()} 
              fill="none" 
              stroke={colors.accent || '#FF8A00'} 
              strokeWidth={3} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </Svg>
        )}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>{proyecto.titulo}</Text>
        {proyecto.descripcion && (
          <Text style={styles.description} numberOfLines={2}>{proyecto.descripcion}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 196,
    backgroundColor: design.colors.card,
    borderRadius: design.radii.card,
    borderWidth: 1,
    borderColor: design.colors.cardBorder,
    padding: 8,
    marginRight: 15,
  },
  chartContainer: {
    height: 100,
    backgroundColor: design.colors.surface,
    borderRadius: design.radii.inner,
    overflow: 'hidden',
  },
  textContainer: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: design.colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: design.colors.muted,
    lineHeight: 18,
  }
});