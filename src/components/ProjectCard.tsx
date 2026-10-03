// src/components/ProjectCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Proyecto } from '../types';
import { colors } from '../theme/colors';

interface Props {
  proyecto: Proyecto;
}

export default function ProjectCard({ proyecto }: Props) {
  // Creamos datos simulados para la gráfica. 
  // Si es el proyecto 1 mostramos una curva, si es otro mostramos otra distinta.
  const data = {
    labels: [], 
    datasets: [
      {
        data: proyecto.id === '1' ? [20, 45, 28, 80, 99, 43] : [10, 25, 15, 60, 40, 85],
        color: (opacity = 1) => `rgba(255, 138, 0, ${opacity})`, // Nuestro color de acento naranja
        strokeWidth: 3
      }
    ]
  };

  return (
    <View style={styles.card}>
      <Text style={styles.percentage}>{proyecto.porcentajeCompletado}%</Text>
      
      {/* Aquí insertamos la mini gráfica */}
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={130} // Ajustado al ancho de la tarjeta
          height={70} 
          withDots={false} // Quitamos los puntos para un look minimalista
          withInnerLines={false} // Sin cuadrícula de fondo
          withOuterLines={false}
          withHorizontalLabels={false} // Sin textos de números
          withVerticalLabels={false}
          chartConfig={{
            backgroundColor: colors.surface,
            backgroundGradientFrom: colors.surface,
            backgroundGradientTo: colors.surface,
            color: (opacity = 1) => `rgba(255, 138, 0, ${opacity})`,
          }}
          bezier // Hace que la línea sea curva y suave
          style={styles.chart}
        />
      </View>

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
    marginBottom: 5,
  },
  chartContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: -35, // Ajuste negativo para centrar la gráfica recortando el margen interno por defecto
  },
  chart: {
    paddingRight: 0,
    paddingTop: 10,
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