import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function SearchIcon({ color }: { color: string }) {
  return (
    <Svg width="24" height="23" viewBox="0 0 24 23" fill="none">
      <Path
        d="M11.416 19.4727C16.6243 19.4727 20.8466 15.5287 20.8466 10.6636C20.8466 5.79846 16.6243 1.85449 11.416 1.85449C6.20758 1.85449 1.98535 5.79846 1.98535 10.6636C1.98535 15.5287 6.20758 19.4727 11.416 19.4727Z"
        stroke={color}
        strokeWidth="1.37779"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.8394 20.4L19.854 18.5454"
        stroke={color}
        strokeWidth="1.37779"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
