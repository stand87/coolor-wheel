import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Segment from './Segment';

const useStyles = makeStyles((theme) => ({
  container: ({size, segments}) => ({
    position:'absolute',
    height:size / 3 + segments * 8,
    width:size / 3 + segments * 8,
    borderRadius:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
    '&::after': {
      content:'""',
      height:size / 6 + segments * 8,
      width:size / 6 + segments * 8,
      borderRadius:'100%',
      background:'white',
      zIndex:1,
    }
  })
}));

const DEFAULT_SATURATION = 80;
const DEFAULT_LIGHTNESS = 50;

function ColorWheel({segments, size}) {
  const classes = useStyles({segments, size});

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
    <div className={classes.container}>
      {getColors().map((hsl, idx) => <Segment key={idx} hsl={hsl} angle={360 / segments} radius={size / 2}/>)}
    </div>
  );
};

export default ColorWheel;