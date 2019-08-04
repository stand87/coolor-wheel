import React from 'react';
import styled from 'styled-components';

import Segment from '../Segment';

const External = styled.div`
  position:absolute;
  height:${({size}) => size}px;
  width:${({size}) => size}px;
  border-radius:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Internal = styled.div`
  height:${({size}) => size}px;
  width:${({size}) => size}px;
  border-radius:100%;
  z-index:1;
`;

const DEFAULT_SATURATION = 80;
const DEFAULT_LIGHTNESS = 50;
const DEFAULT_COLORS = [{
  name: 'red', 
  hsl: [0, DEFAULT_SATURATION, DEFAULT_LIGHTNESS]
}, {
  name: 'yellow', 
  hsl: [60, DEFAULT_SATURATION, DEFAULT_LIGHTNESS]
}, {
  name: 'green', 
  hsl: [120, DEFAULT_SATURATION, DEFAULT_LIGHTNESS]
}, {
  name: 'cyan', 
  hsl: [180, DEFAULT_SATURATION, DEFAULT_LIGHTNESS]
},{
  name: 'blue', 
  hsl: [240, DEFAULT_SATURATION, DEFAULT_LIGHTNESS]
},{
  name: 'purple', 
  hsl: [300, DEFAULT_SATURATION, DEFAULT_LIGHTNESS]
}];

const ANGLE = 360 / 60;
function ColorWheel({segments, size}) {
  const getColors = () => {
    const colors = [];
    let angle = 0;
    for (let index = 0; index < segments; index++) {
      angle = angle + (360 / segments);
      colors.push([angle, DEFAULT_SATURATION, DEFAULT_LIGHTNESS]);
    }
    return colors;
  };

  return (
    <External size={(size / 3) + (8 * segments)}>
      <Internal size={(size / 6) + (8 * segments)}></Internal>
      {getColors().map((hsl, idx) => <Segment key={idx} hsl={hsl} angle={360 / segments} radius={size / 2}/>)}
    </External>
  );
};

export default ColorWheel;