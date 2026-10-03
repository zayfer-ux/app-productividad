// src/components/HeatmapWidget.tsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';
import { colors } from '../theme/colors';

const commitsData = [
  { date: '2026-09-01', count: 1 },
  { date: '2026-09-02', count: 2 },
  { date: '2026-09-03', count: 3 },
  { date: '2026-09-04', count: 4 },
  { date: '2026-09-05', count: 5 },
  { date: '2026-09-06', count: 2 },
  { date: '2026-09-07', count: 3 },
  { date: '2026-09-08', count: 2 },
  { date: '2026-09-09', count: 4 },
  { date: '2026-09-15', count: 2 },
  { date: '2026-09-20', count: 4 },
  { date: '2026-09-28', count: 2 },
  { date: '2026-09-30', count: 4 },
  { date: '2026-10-01', count: 2 },
  { date: '2026-10-02', count: 4 },
  { date: '2026-10-03', count: 3 }
];

export default function HeatmapWidget() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Ver tu rendimiento</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Revisar ahora</Text>
          </View>
        </View>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>▲ +3.45%</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <ContributionGraph
          values={commitsData}
          endDate={new Date('2026-10-03')}
          numDays={60}
          width={Dimensions.get('window').width - 80}
          height={110}
          chartConfig={{
            backgroundColor: colors.surface,
            backgroundGradientFrom: colors.surface,
            backgroundGradientTo: colors.surface,
            color: (opacity = 1) => `rgba(34, 34, 34, ${opacity})`,
            labelColor: () => colors.textSecondary,
          }}
          // Esta es la línea que elimina la alerta roja:
          tooltipDataAttrs={(value: any) => {
            return {
              'data-tip': value && value.count ? `${value.count} tareas` : 'Sin tareas',
            };
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: colors.surface,
    fontSize: 12,
    fontWeight: 'bold',
  },
  percentageContainer: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  percentageText: {
    color: '#2E7D32',
    fontSize: 12,
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'flex-end',
    marginLeft: -40,
  }
});