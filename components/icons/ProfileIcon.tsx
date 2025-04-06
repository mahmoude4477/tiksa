import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function ProfileIcon({ color }: { color: string }) {
  return (
    <Svg width="24" height="23" viewBox="0 0 24 23" fill="none">
      <Path
        d="M11.9122 11.1275C14.6535 11.1275 16.8757 9.05169 16.8757 6.4911C16.8757 3.93051 14.6535 1.85474 11.9122 1.85474C9.17096 1.85474 6.94873 3.93051 6.94873 6.4911C6.94873 9.05169 9.17096 11.1275 11.9122 11.1275Z"
        stroke={color}
        strokeWidth="2.00066"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.4398 20.4001C20.4398 16.8115 16.6179 13.9092 11.9125 13.9092C7.20713 13.9092 3.38525 16.8115 3.38525 20.4001"
        stroke={color}
        strokeWidth="2.00066"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
