import { useState } from 'react';
import chromaJS from 'chroma-js';

function useChroma(hsl) {
  const [color, setColor] = useState(hsl);

  let chroma;
  if (color) {
    const [h, s, l] = color;
    chroma = chromaJS({h, s: s * 0.01, l: l * 0.01});
  }

  return [chroma, setColor];
};

export default useChroma;