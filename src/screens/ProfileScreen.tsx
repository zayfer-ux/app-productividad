// src/screens/ProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function ProfileScreen() {
  // Estado para simular el botón de Modo Oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función auxiliar para crear botones de configuración rápidamente
  const renderSettingItem = (iconName: keyof typeof Ionicons.glyphMap, title: string, isSwitch = false) => (
    <TouchableOpacity 
      style={styles.settingItem} 
      activeOpacity={isSwitch ? 1 : 0.7}
    >
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          <Ionicons name={iconName} size={20} color={colors.textPrimary} />
        </View>
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      
      {isSwitch ? (
        <Switch 
          value={isDarkMode} 
          onValueChange={setIsDarkMode}
          trackColor={{ false: '#D1D1D6', true: '#34C759' }} // Verde estilo iOS
          thumbColor={'#ffffff'}
        />
      ) : (
        <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Perfil</Text>
        </View>

        {/* Tarjeta Principal de Usuario */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>M</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Misael</Text>
            <Text style={styles.userRole}>Ingeniería en Sistemas</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={16} color={colors.surface} />
          </TouchableOpacity>
        </View>

        {/* Sección de Configuración */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.cardGroup}>
            {renderSettingItem('person-outline', 'Datos personales')}
            <View style={styles.divider} />
            {renderSettingItem('notifications-outline', 'Notificaciones')}
            <View style={styles.divider} />
            {renderSettingItem('moon-outline', 'Modo oscuro', true)}
          </View>
        </View>

        {/* Sección de Ayuda */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soporte</Text>
          <View style={styles.cardGroup}>
            {renderSettingItem('help-buoy-outline', 'Centro de ayuda')}
            <View style={styles.divider} />
            {renderSettingItem('shield-checkmark-outline', 'Privacidad y seguridad')}
          </View>
        </View>

        {/* Botón de Cerrar Sesión */}
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>

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
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 20,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.surface,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  userRole: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 10,
    marginLeft: 10,
    textTransform: 'uppercase',
  },
  cardGroup: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginLeft: 65, // Alinea la línea con el texto, no con el ícono
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: '#FFF0F0', // Fondo rojo muy tenue
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD6D6',
  },
  logoutText: {
    color: '#FF3B30', // Rojo estilo iOS
    fontSize: 16,
    fontWeight: 'bold',
  }
});