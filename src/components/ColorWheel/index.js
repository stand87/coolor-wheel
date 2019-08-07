import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Segment from './Segment';

const useStyles = makeStyles((theme) => ({
  container: ({index, size, segments}) => ({
    zIndex:index,
    position:'absolute',
    height:size,
    width:size,
    clipPath:'circle(40%)'
  })
}));

function ColorWheel({index, segments, size, saturation, lightness}) {
  const classes = useStyles({index, segments, size});

  const getColors = () => {
    const colors = [];
    let angle = 0;
    for (let index = 0; index < segments; index++) {
      angle += (360 / segments);
      colors.push((
        <Segment key={index} hsl={[angle, saturation, lightness]} angle={360 / segments} radius={size / 2} />
        ));
    }
    return colors;
  };

  return (
    <div className={classes.container}>
      {getColors()}
    </div>
  );
};

export default ColorWheel;