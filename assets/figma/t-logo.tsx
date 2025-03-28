import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TLogo = (props) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Path d="M11 8H29V15H24V32H16V15H11V8Z" fill="#00A3FF" />
  </Svg>
);

export default TLogo;
