// src/navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// ¡Aquí está la magia! Importamos 3 familias de íconos distintas
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const iconSize = 24;
            // Colores exactos de tu imagen (Negro activo, Gris tenue inactivo)
            const tintColor = focused ? '#000000' : '#9E9E9E';

            // Asignamos el ícono perfecto buscando en múltiples librerías
            if (route.name === 'Inicio') {
              return <Ionicons name={focused ? 'home' : 'home-outline'} size={iconSize} color={tintColor} />;
            } 
            else if (route.name === 'Proyectos') {
              return <Ionicons name={focused ? 'folder' : 'folder-outline'} size={iconSize} color={tintColor} />;
            } 
            else if (route.name === 'Progreso') {
              // Feather 'external-link' es lo más parecido nativamente a tu caja con flecha
              return <Feather name="external-link" size={iconSize} color={tintColor} />;
            } 
            else if (route.name === 'Calendario') {
              // MaterialCommunityIcons tiene el calendario más parecido al de tu diseño
              return <MaterialCommunityIcons name={focused ? 'calendar-month' : 'calendar-month-outline'} size={iconSize} color={tintColor} />;
            } 
            else if (route.name === 'Perfil') {
              return <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={iconSize + 2} color={tintColor} />;
            }
          },
          tabBarActiveTintColor: '#000000', // Texto Negro cuando está activo
          tabBarInactiveTintColor: '#9E9E9E', // Texto Gris cuando está inactivo
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 10, // Letra pequeñita y elegante como en la imagen
            fontWeight: '600',
            marginTop: 4,
          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            backgroundColor: '#ffffff',
            borderRadius: 40, // Curvatura perfecta tipo píldora
            height: 70, // Altura exacta para centrar íconos y textos
            borderTopWidth: 0,
            paddingBottom: 10, // Ajuste para el texto
            paddingTop: 10, // Ajuste para los íconos
            elevation: 10, // Sombra en Android
            shadowColor: '#000', // Sombra en iOS
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.12,
            shadowRadius: 12,
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Proyectos" component={ProjectsScreen} />
        <Tab.Screen name="Progreso" component={ProgressScreen} />
        <Tab.Screen name="Calendario" component={ScheduleScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}