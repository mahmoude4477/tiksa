import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function HomeIcon({ color }: { color: string }) {
  return (
    <Svg width="25" height="23" viewBox="0 0 25 23" fill="none">
      <Path
        d="M9.10946 2.67905L3.66614 6.64106C2.75724 7.30139 2.02002 8.70696 2.02002 9.77293V16.763C2.02002 18.9516 3.92871 20.7439 6.27166 20.7439H17.9662C20.3092 20.7439 22.2178 18.9516 22.2178 16.7725V9.905C22.2178 8.76356 21.3998 7.30139 20.4 6.65049L14.1589 2.56585C12.7451 1.64138 10.4728 1.68855 9.10946 2.67905Z"
        fill="white"
        stroke={color}
        strokeWidth="1.52649"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.1187 16.9706V14.1406"
        stroke={color}
        strokeWidth="1.52649"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
