import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function FootballIllustration() {
  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" viewBox="0 0 200 200">
        {/* Ball Circle */}
        <Circle cx="100" cy="100" r="70" fill="#FFFFFF" />
        
        {/* Football Panels */}
        <Path
          d="M100,30 L70,60 L85,100 L115,100 L130,60 Z"
          fill="#111111"
          stroke="#444444"
          strokeWidth="1"
        />
        <Path
          d="M130,60 L115,100 L150,130 L170,90 Z"
          fill="#111111"
          stroke="#444444"
          strokeWidth="1"
        />
        <Path
          d="M70,60 L30,90 L50,130 L85,100 Z"
          fill="#111111"
          stroke="#444444"
          strokeWidth="1"
        />
        <Path
          d="M85,100 L50,130 L100,170 L150,130 L115,100 Z"
          fill="#111111"
          stroke="#444444"
          strokeWidth="1"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
