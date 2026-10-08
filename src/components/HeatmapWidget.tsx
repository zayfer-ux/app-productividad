// src/components/HeatmapWidget.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { design } from '../theme/design';

const commitsData = [
  { date: '2026-09-01', count: 1 }, { date: '2026-09-02', count: 2 },
  { date: '2026-09-03', count: 3 }, { date: '2026-09-04', count: 4 },
  { date: '2026-09-05', count: 5 }, { date: '2026-09-06', count: 2 },
  { date: '2026-09-07', count: 3 }, { date: '2026-09-08', count: 2 },
  { date: '2026-09-09', count: 4 }, { date: '2026-09-15', count: 2 },
  { date: '2026-09-20', count: 4 }, { date: '2026-09-28', count: 2 },
  { date: '2026-09-30', count: 4 }, { date: '2026-10-01', count: 2 },
  { date: '2026-10-02', count: 4 }, { date: '2026-10-03', count: 3 }
];

export default function HeatmapWidget() {
  const navigation = useNavigation();
  const [gridWidth, setGridWidth] = useState(0);

  const gap = 2;
  const cols = 20;
  const rows = 6;

  // Normalización de datos a 20 columnas
  const endDateObj = new Date(Date.UTC(2026, 9, 3)); // Mes 9 = Octubre
  const startDateObj = new Date(endDateObj.getTime() - (59 * 24 * 60 * 60 * 1000));

  const buckets = new Array(cols).fill(0);

  commitsData.forEach((item) => {
    const d = new Date(`${item.date}T00:00:00Z`);
    const diffTime = d.getTime() - startDateObj.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays >= 0 && diffDays < 60) {
      const bIndex = Math.floor(diffDays / 3);
      if (bIndex >= 0 && bIndex < cols) {
        buckets[bIndex] += item.count;
      }
    }
  });

  const maxBucket = Math.max(...buckets, 1);
  const normalized = buckets.map(val => Math.ceil((val / maxBucket) * rows));

  return (
    <View style={styles.card}>
      <View style={styles.leftCol}>
        <Text style={styles.title}>Ver tu rendimiento</Text>
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Progreso' as never)}
        >
          <Text style={styles.buttonText}>Revisar ahora</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rightCol} onLayout={(e) => setGridWidth(e.nativeEvent.layout.width)}>
        {/* Burbuja Flotante */}
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>▲ +3.45%</Text>
          <View style={styles.bubbleTriangle} />
        </View>

        {/* Cuadrícula Histograma */}
        {gridWidth > 0 && (
          <View style={{ flexDirection: 'row', gap, marginTop: 15 }}>
            {normalized.map((filledCount, colIndex) => (
              <View key={colIndex} style={{ gap }}>
                {Array.from({ length: rows }).map((_, rowIndex) => {
                  const isFilled = rowIndex >= rows - filledCount;
                  return (
                    <View
                      key={rowIndex}
                      style={{
                        width: (gridWidth - (cols - 1) * gap) / cols,
                        aspectRatio: 1,
                        backgroundColor: isFilled ? design.colors.dark : design.colors.cellEmpty,
                        borderRadius: 2,
                      }}
                    />
                  );
                })}
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: design.colors.card,
    borderRadius: design.radii.card,
    padding: 20,
    borderWidth: 1,
    borderColor: design.colors.cardBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
  },
  leftCol: {
    flex: 1,
    paddingRight: 10,
  },
  rightCol: {
    flex: 1.8,
    position: 'relative',
    minHeight: 60,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: design.colors.text,
    marginBottom: 12,
  },
  button: {
    backgroundColor: design.colors.dark,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: design.radii.pill,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: design.colors.surface,
    fontSize: 13,
    fontWeight: '600',
  },
  bubble: {
    position: 'absolute',
    top: -15,
    right: 20,
    backgroundColor: design.colors.surface,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    zIndex: 10,
  },
  bubbleText: {
    color: design.colors.positive,
    fontSize: 11,
    fontWeight: '600',
  },
  bubbleTriangle: {
    position: 'absolute',
    bottom: -4,
    alignSelf: 'center',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: design.colors.surface,
  }
});