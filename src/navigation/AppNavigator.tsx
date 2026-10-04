// src/navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
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
            const iconSize = 25; // Tamaño equilibrado
            const tintColor = focused ? '#000000' : '#8E8E93'; // Un gris ligeramente más oscuro para mejor contraste

            if (route.name === 'Inicio') {
              return <Ionicons name={focused ? 'home' : 'home-outline'} size={iconSize} color={tintColor} />;
            } 
            else if (route.name === 'Proyectos') {
              return <Ionicons name={focused ? 'folder' : 'folder-outline'} size={iconSize} color={tintColor} />;
            } 
            else if (route.name === 'Progreso') {
              return <Feather name="external-link" size={iconSize} color={tintColor} />;
            } 
            else if (route.name === 'Calendario') {
              return <MaterialCommunityIcons name={focused ? 'calendar-month' : 'calendar-month-outline'} size={iconSize} color={tintColor} />;
            } 
            else if (route.name === 'Perfil') {
              return <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={iconSize + 3} color={tintColor} />;
            }
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#8E8E93', // Gris mejorado
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 11, // Letra un poco más grande
            fontWeight: '600',
            marginTop: 2, // Menos espacio arriba
            marginBottom: 10, // Más espacio abajo para que no se corte
          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            backgroundColor: '#ffffff',
            borderRadius: 40,
            height: 75, // Barra un poco más alta para que quepa todo sin problemas
            borderTopWidth: 0,
            paddingBottom: 0, // Quitamos el padding inferior por defecto
            paddingTop: 8, // Empujamos un poco los iconos hacia abajo
            elevation: 10,
            shadowColor: '#000',
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