import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Segment from './Segment';

const useStyles = makeStyles((theme) => ({
  container: ({index, size, segments}) => ({
    zIndex:index,
    position:'absolute',
    height:size / 3 + segments * 8,
    width:size / 3 + segments * 8,
    borderRadius:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
    // '&::after': {
    //   content:'""',
    //   height:size / 10 + segments * 8,
    //   width:size / 10 + segments * 8,
    //   borderRadius:'100%',
    //   background:'white',
    //   zIndex:index + 1,
    // }
  })
}));

function ColorWheel({index, segments, size, saturation, lightness}) {
  const classes = useStyles({index, segments, size});

  const getColors = () => {
    const colors = [];
    let angle = 0;
    for (let index = 0; index < segments; index++) {
      angle = angle + (360 / segments);
      colors.push([angle, saturation, lightness]);
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