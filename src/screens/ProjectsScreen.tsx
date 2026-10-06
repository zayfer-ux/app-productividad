// src/screens/ProjectsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { proyectosMock } from '../data/mockData';

export default function ProjectsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Encabezado con título y botón de agregar */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Tus Proyectos</Text>
            <Text style={styles.subtitle}>{proyectosMock.length} activos en este momento</Text>
          </View>
          
          <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
            <Ionicons name="add" size={26} color={colors.surface} />
          </TouchableOpacity>
        </View>

        {/* Lista de proyectos con barras de progreso lineales */}
        <View style={styles.listContainer}>
          {proyectosMock.map((proyecto) => (
            <TouchableOpacity key={proyecto.id} style={styles.projectCard} activeOpacity={0.7}>
              <View style={styles.cardHeader}>
                <Text style={styles.projectTitle}>{proyecto.titulo}</Text>
                <Text style={styles.percentageText}>{proyecto.porcentajeCompletado}%</Text>
              </View>

              <Text style={styles.projectDescription}>{proyecto.descripcion}</Text>

              {/* Barra de progreso visual */}
              <View style={styles.progressBarBackground}>
                <View 
                  style={[
                    styles.progressBarFill, 
                    { width: `${proyecto.porcentajeCompletado}%` } // Se llena dinámicamente según el dato
                  ]} 
                />
              </View>
            </TouchableOpacity>
          ))}
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
    paddingBottom: 120, // Mucho espacio abajo para que la barra flotante no tape el último proyecto
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
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
  addButton: {
    backgroundColor: colors.primary, // Botón negro
    width: 48,
    height: 48,
    borderRadius: 24, // Círculo perfecto
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  listContainer: {
    flexDirection: 'column',
  },
  projectCard: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  percentageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  projectDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#F0F0F0', // Gris muy clarito
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FF8A00', // El naranja de acento de nuestra app
    borderRadius: 4,
  }
});