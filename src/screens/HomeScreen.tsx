// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { colors } from '../theme/colors';

// Importamos nuestros nuevos componentes y los datos
import ProjectCard from '../components/ProjectCard';
import TaskItem from '../components/TaskItem';
import { proyectosMock, tareasMock } from '../data/mockData';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Bienvenido, Misael</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Buscar proyecto, tarea, evento..." 
            placeholderTextColor={colors.textSecondary}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tu rendimiento</Text>
          <View style={styles.placeholderCard}>
            <Text style={styles.placeholderText}>[Mapa de Calor: Fase 4]</Text>
          </View>
        </View>

        {/* Sección de Proyectos con Scroll Horizontal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proyectos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {proyectosMock.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </ScrollView>
        </View>

        {/* Sección de Tareas de Hoy */}
        <View style={styles.section}>
          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Tareas de hoy</Text>
            <Text style={styles.seeAll}>Ver todo</Text>
          </View>
          {tareasMock.map((tarea) => (
            <TaskItem key={tarea.id} tarea={tarea} />
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
    paddingBottom: 100,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  searchContainer: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchInput: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  section: {
    marginBottom: 30,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 15,
  },
  horizontalScroll: {
    marginHorizontal: -20, // Permite que el scroll toque los bordes de la pantalla
    paddingHorizontal: 20,
  },
  seeAll: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  placeholderCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  placeholderText: {
    color: colors.textSecondary,
    fontStyle: 'italic',
  }
});