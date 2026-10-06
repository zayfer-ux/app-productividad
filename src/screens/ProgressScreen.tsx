// src/screens/ProgressScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { colors } from '../theme/colors';

// Datos simulados para la gráfica semanal
const weeklyData = {
  labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
  datasets: [
    {
      data: [3, 5, 2, 8, 4, 1, 6], // Tareas completadas por día
    },
  ],
};

export default function ProgressScreen() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Tu Rendimiento</Text>
          <Text style={styles.subtitle}>Resumen de los últimos 7 días</Text>
        </View>

        {/* Tarjetas de Estadísticas Rápidas */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>29</Text>
            <Text style={styles.statLabel}>Tareas completadas</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>85%</Text>
            <Text style={styles.statLabel}>Efectividad</Text>
          </View>
        </View>

        {/* Gráfica de Barras */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Productividad Diaria</Text>
          <BarChart
            data={weeklyData}
            width={screenWidth - 40} // Ancho de la pantalla menos el padding
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            withInnerLines={false}
            showBarTops={false}
            fromZero={true}
            chartConfig={{
              backgroundColor: colors.surface,
              backgroundGradientFrom: colors.surface,
              backgroundGradientTo: colors.surface,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Barras oscuras
              labelColor: () => colors.textSecondary,
              barPercentage: 0.6,
              barRadius: 6, // Bordes redondeados en las barras
            }}
            style={styles.chart}
          />
        </View>

        {/* Resumen extra */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Punto fuerte</Text>
          <Text style={styles.summaryText}>
            Tu día más productivo esta semana fue el <Text style={styles.highlight}>Jueves</Text>, con 8 tareas finalizadas. ¡Sigue manteniendo ese ritmo!
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120, // Espacio para la barra flotante inferior
  },
  header: {
    marginTop: 20,
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: colors.surface,
    width: '47%',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  chartContainer: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 30,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginLeft: 20,
    marginBottom: 15,
  },
  chart: {
    borderRadius: 20,
    paddingRight: 10,
  },
  summaryContainer: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  summaryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  highlight: {
    color: colors.primary,
    fontWeight: 'bold',
  }
});