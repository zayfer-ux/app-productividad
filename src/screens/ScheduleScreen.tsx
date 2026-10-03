// src/screens/ScheduleScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

export default function ScheduleScreen() {
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  // Simulamos los números de los días (17 al 23) basándonos en tu diseño
  const dates = [17, 18, 19, 20, 21, 22, 23];
  // Simulamos las horas del día
  const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];

  return (
    <SafeAreaView style={styles.container}>
      
      {/* 1. Cabecera del Calendario */}
      <View style={styles.calendarHeader}>
        <Text style={styles.monthText}>Noviembre 2026</Text>
        <View style={styles.daysRow}>
          {days.map((day, index) => (
            <View key={index} style={styles.dayColumn}>
              <Text style={styles.dayText}>{day}</Text>
              <Text style={[styles.dateText, index === 1 && styles.dateTextActive]}>
                {dates[index]}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* 2. Línea de tiempo vertical (Timeline) */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.timeline}>
        {hours.map((hour, index) => (
          <View key={index} style={styles.timeBlock}>
            <Text style={styles.timeLabel}>{hour}</Text>
            
            <View style={styles.lineArea}>
              {/* Línea divisoria muy tenue */}
              <View style={styles.horizontalLine} />
              
              {/* Tarea simulada a las 10 AM (Como en tu imagen) */}
              {hour === '10 AM' && (
                <View style={styles.taskCard}>
                  <View style={styles.taskIndicator} />
                  <View>
                    <Text style={styles.taskTitle}>Wireframing y brainstorming</Text>
                    <Text style={styles.taskStatus}>En progreso • 9:15 AM - 10:15 AM</Text>
                  </View>
                </View>
              )}

              {/* Tarea simulada a la 1 PM */}
              {hour === '1 PM' && (
                <View style={styles.taskCard}>
                  <View style={styles.taskIndicatorUpcoming} />
                  <View>
                    <Text style={styles.taskTitle}>Diseño del sistema</Text>
                    <Text style={styles.taskStatusUpcoming}>Próximo • 11:15 AM - 1:00 PM</Text>
                  </View>
                </View>
              )}
            </View>

          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calendarHeader: {
    padding: 20,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 15,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayColumn: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  dateTextActive: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    backgroundColor: '#E5E5EA', // Un pequeño resalte para el día "hoy"
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  timeline: {
    flex: 1,
    padding: 20,
  },
  timeBlock: {
    flexDirection: 'row',
    marginBottom: 30,
    minHeight: 60,
  },
  timeLabel: {
    width: 50,
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  lineArea: {
    flex: 1,
    position: 'relative',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: colors.border,
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },
  taskCard: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  taskIndicator: {
    width: 4,
    backgroundColor: colors.primary, // Negro
    borderRadius: 2,
    marginRight: 12,
  },
  taskIndicatorUpcoming: {
    width: 4,
    backgroundColor: colors.textSecondary, // Gris
    borderRadius: 2,
    marginRight: 12,
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  taskStatus: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  taskStatusUpcoming: {
    fontSize: 12,
    color: '#D1D1D6', // Más tenue para las futuras
  }
});