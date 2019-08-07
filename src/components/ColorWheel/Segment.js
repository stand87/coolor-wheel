import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: ({hypotenuse, cord, hue}) => ({
    height:hypotenuse,
    width:cord,
    position:'absolute',
    top:'50%',
    transformOrigin:'top center',
    transform: `rotate(${hue}deg)`
  }),
  polygon: ({hue, saturation, lightness}) => ({
    height:'100%',
    width:'100%',
    position:'absolute',
    top:0,
    background:'white',
    transform:'scale(0.98)',
    clipPath:'polygon(50% 0%, 0% 100%, 100% 100%)',
    '&::before': {
      cursor:'pointer',
      content:'""',
      height:'100%',
      width:'100%',
      position:'absolute',
      top:0,
      background:`hsl(${hue}, ${saturation}%, ${lightness}%)`,
      clipPath:'polygon(50% 0%, 0% 100%, 100% 100%)'
    }
  })
}));

function Segment({hsl, radius, angle}) {
  const [hue, saturation, lightness] = hsl;
  const cord = getCordLength(radius, angle);
  const hypotenuse = getHypotenuse(radius, angle);
  
  const classes = useStyles({hypotenuse, cord, hue, saturation, lightness});
  return (
    <div className={classes.container}>
      <div className={classes.polygon}></div>
    </div>
  );
};

function getCordLength(radius, degrees) {
  const radians = degrees * (Math.PI/180);
  return (2 * radius) * Math.sin(radians / 2);
};

function getHypotenuse(radius, degrees) {
  const cord = getCordLength(radius, degrees);
  const opposite = Math.pow(cord / 2, 2);
  const adjacent = Math.pow(radius, 2);

  return Math.sqrt(adjacent - opposite);
}


export default Segment;