import { useState, useEffect } from 'react';
import chromaJS from 'chroma-js';

function useChroma(hsl) {
  const [color, setColor] = useState(hsl);
  const [chroma, setChroma] = useState(null);

  useEffect(() => {
    if (color) {
      const [h, s, l] = color;
      setChroma(chromaJS({h, s: s * 0.01, l: l * 0.01}));
    } else {
      setChroma(null);
    }
  }, [color]);

  return [chroma, setColor];
};

export default useChroma;