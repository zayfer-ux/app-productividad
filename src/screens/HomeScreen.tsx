// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { colors } from '../theme/colors';

import HeatmapWidget from '../components/HeatmapWidget';
import ProjectCard from '../components/ProjectCard';
import TaskItem from '../components/TaskItem';
import { proyectosMock, tareasMock } from '../data/mockData';

export default function HomeScreen() {
  // 1. Creamos la "memoria" para guardar lo que el usuario escribe
  const [searchQuery, setSearchQuery] = useState('');

  // 2. Lógica de filtrado en tiempo real
  const proyectosFiltrados = proyectosMock.filter(proyecto => 
    proyecto.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tareasFiltradas = tareasMock.filter(tarea => 
    tarea.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Bienvenido, Misael</Text>
        </View>

        {/* Barra de Búsqueda Interactiva */}
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Buscar proyecto, tarea, evento..." 
            placeholderTextColor={colors.textSecondary}
            value={searchQuery} // Conectamos el valor al estado
            onChangeText={setSearchQuery} // Actualizamos el estado cada que escribes
          />
        </View>

        <View style={styles.section}>
          <HeatmapWidget />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proyectos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {/* Si no hay resultados, mostramos un mensaje */}
            {proyectosFiltrados.length === 0 ? (
              <Text style={styles.noResultsText}>No se encontraron proyectos.</Text>
            ) : (
              // Usamos la lista filtrada en lugar de la original
              proyectosFiltrados.map((proyecto) => (
                <ProjectCard key={proyecto.id} proyecto={proyecto} />
              ))
            )}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Tareas de hoy</Text>
            <Text style={styles.seeAll}>Ver todo</Text>
          </View>
          
          {tareasFiltradas.length === 0 ? (
            <Text style={styles.noResultsText}>No se encontraron tareas.</Text>
          ) : (
            // Usamos la lista filtrada
            tareasFiltradas.map((tarea) => (
              <TaskItem key={tarea.id} tarea={tarea} />
            ))
          )}
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
    paddingBottom: 100, // Espacio para que la barra flotante no tape el contenido final
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
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  seeAll: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  noResultsText: {
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginTop: 10,
  }
});