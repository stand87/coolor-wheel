import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ColorCard from './ColorCard';

function ColorCards() {
  const [selected, setSelected] = useState(null);

  const getCards = () => {
    return [1,2,3,4,5].map((number) => (
      <Grid item xs={3} key={number}>
        <ColorCard selected={selected === number} setSelected={setSelected} index={number} />
      </Grid>
    ));
  };

  return (
    <Grid item xs={12}>
      <Grid container spacing={2} wrap="nowrap">
        {getCards()}
      </Grid>
    </Grid>
  );
};

export default ColorCards;