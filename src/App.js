import React, { useState } from 'react';
import styled from 'styled-components';

import ColorWheel from './components/ColorWheel';

const Content = styled.div`
  height:100vh;
  position:relative;
  display:flex;
  background:white;
  justify-content:center;
  align-items:center;
`;

function App() {
  const [segments, setSegments] = useState(3);

  const onRangeChange = (event) => {
    setSegments(event.currentTarget.value);
  };

  return (
    <div>
      <input type="range" onChange={onRangeChange} min="3" max="36" value={segments} />
      <Content>
        <ColorWheel segments={segments} size={800}/>
      </Content>
    </div>
  );
}

export default App;
