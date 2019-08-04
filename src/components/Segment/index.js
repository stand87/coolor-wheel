import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height:${({hipotenuse}) => hipotenuse}px;
  width:${({cord}) => cord}px;
  position:absolute;
  top:50%;
  transform-origin:top center;
  transform: rotate(${({angle}) => angle}deg);
`;

const Background = styled.div`
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  background:white;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const Color = styled.div`
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  background: hsl(${({hue}) => hue}, ${({saturation}) => saturation}%, ${({lightness}) => lightness}%);
  z-index:1;
  transform:scale(0.98);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

function Segment(props) {
  const [h, s, l] = props.hsl;
  const radians = props.angle * (Math.PI/180);
  const cord = (2 * props.radius) * Math.sin(radians / 2);
  const y = Math.pow(cord / 2, 2);
  const r = Math.pow(props.radius, 2);
  const hipotenuse = Math.sqrt(r - y);
  return (
    <Container angle={h} cord={cord} hipotenuse={hipotenuse}>
      <Color hue={h} saturation={s} lightness={l}/>
      <Background />
    </Container>
  );
};

export default Segment;