// src/components/TabIcon.tsx
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface Props {
  name: string;
  color: string;
  size?: number;
  focused?: boolean;
  cutout?: string;
}

const HOUSE = 'M4 10.8 12 4.2l8 6.6v7.7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z';
const DOOR = 'M9.5 20.5v-5a2.5 2.5 0 0 1 5 0v5';
const FOLDER = 'M3.5 7.5a2 2 0 0 1 2-2h3.6c.5 0 1 .2 1.3.6l1 1.4h7.1a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z';
const CAL_BODY = 'M5.5 5h13a2 2 0 0 1 2 2v11.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z';
const PROFILE_SHOULDERS = 'M6.3 18.4c1-2.2 3-3.4 5.7-3.4s4.7 1.2 5.7 3.4';

export default function TabIcon({ name, color, size = 26, focused = false, cutout = '#FFFFFF' }: Props) {
  if (focused) {
    switch (name) {
      case 'home':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24">
            <Path d={`${HOUSE}${DOOR}z`} fill={color} fillRule="evenodd" />
          </Svg>
        );
      case 'projects':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24">
            <Path d={FOLDER} fill={color} />
          </Svg>
        );
      case 'progress':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M12.5 3.5H8A4.5 4.5 0 0 0 3.5 8v8A4.5 4.5 0 0 0 8 20.5h8a4.5 4.5 0 0 0 4.5-4.5v-3.5" />
            <Path d="M7.5 15.5c3 0 5-3 8.5-7.5" />
            <Path d="M12 8h4v4" />
            <Path d="M16 5V3M18.8 5.2l1.6-1.6M19 8h2" />
          </Svg>
        );
      case 'calendar':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24">
            <Path d={CAL_BODY} fill={color} />
            <Path d="M8 3v3.5M16 3v3.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <Path d="M3.5 10h17" stroke={cutout} strokeWidth="2" />
            <Circle cx={8} cy={13.5} r={1} fill={cutout} />
            <Circle cx={12} cy={13.5} r={1} fill={cutout} />
            <Circle cx={16} cy={13.5} r={1} fill={cutout} />
            <Circle cx={8} cy={17} r={1} fill={cutout} />
            <Circle cx={12} cy={17} r={1} fill={cutout} />
          </Svg>
        );
      case 'profile':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24">
            <Circle cx={12} cy={12} r={9} fill={color} />
            <Circle cx={12} cy={10} r={3} stroke={cutout} strokeWidth="2" fill="none" />
            <Path d={PROFILE_SHOULDERS} stroke={cutout} strokeWidth="2" fill="none" strokeLinecap="round" />
          </Svg>
        );
      default:
        return null;
    }
  }

  // Estado inactivo
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {name === 'home' && (
        <>
          <Path d={HOUSE} />
          <Path d={DOOR} />
        </>
      )}
      {name === 'projects' && (
        <>
          <Path d={FOLDER} />
          <Path d="M3.5 10.5h17" />
        </>
      )}
      {name === 'progress' && (
        <>
          <Path d="M12.5 3.5H8A4.5 4.5 0 0 0 3.5 8v8A4.5 4.5 0 0 0 8 20.5h8a4.5 4.5 0 0 0 4.5-4.5v-3.5" />
          <Path d="M7.5 15.5c3 0 5-3 8.5-7.5" />
          <Path d="M12 8h4v4" />
          <Path d="M16 5V3M18.8 5.2l1.6-1.6M19 8h2" />
        </>
      )}
      {name === 'calendar' && (
        <>
          <Path d={CAL_BODY} />
          <Path d="M8 3v3.5M16 3v3.5M3.5 10h17" />
          <Circle cx={8} cy={13.5} r={1} fill={color} stroke="none" />
          <Circle cx={12} cy={13.5} r={1} fill={color} stroke="none" />
          <Circle cx={16} cy={13.5} r={1} fill={color} stroke="none" />
          <Circle cx={8} cy={17} r={1} fill={color} stroke="none" />
          <Circle cx={12} cy={17} r={1} fill={color} stroke="none" />
        </>
      )}
      {name === 'profile' && (
        <>
          <Circle cx={12} cy={12} r={9} />
          <Circle cx={12} cy={10} r={3} />
          <Path d={PROFILE_SHOULDERS} />
        </>
      )}
    </Svg>
  );
}