// src/navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabIcon from '../components/Tabicon';

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
            const tintColor = focused ? '#000000' : '#8E8E93';
            let iconName = 'home';
            
            if (route.name === 'Inicio') iconName = 'home';
            else if (route.name === 'Proyectos') iconName = 'projects';
            else if (route.name === 'Progreso') iconName = 'progress';
            else if (route.name === 'Calendario') iconName = 'calendar';
            else if (route.name === 'Perfil') iconName = 'profile';

            return <TabIcon name={iconName} color={tintColor} size={26} focused={focused} />;
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 2,
            marginBottom: 10,
          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            backgroundColor: '#ffffff',
            borderRadius: 40,
            height: 75,
            borderTopWidth: 0,
            paddingBottom: 0,
            paddingTop: 8,
            boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
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