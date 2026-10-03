// src/navigation/AppNavigator.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap = 'home';
              if (route.name === 'Inicio') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Agenda') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textSecondary,
            tabBarShowLabel: false, // Ocultamos el texto para que se vea más minimalista
            tabBarStyle: {
              backgroundColor: colors.surface,
              borderTopWidth: 1,
              borderTopColor: colors.border,
              height: 70,
              paddingBottom: 10,
              paddingTop: 10,
            },
          })}
        >
          <Tab.Screen name="Inicio" component={HomeScreen} />
          <Tab.Screen name="Agenda" component={ScheduleScreen} />
        </Tab.Navigator>

        {/* BOTÓN FLOTANTE (FAB) */}
        <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
          <Ionicons name="add" size={32} color={colors.surface} />
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 25, // Lo eleva sobre la barra
    right: 20, // Lo pega a la derecha
    backgroundColor: colors.primary, // Color negro
    width: 60,
    height: 60,
    borderRadius: 30, // Lo hace perfectamente redondo
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Le damos una sombra para que flote
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  }
});