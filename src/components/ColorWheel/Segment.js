import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: ({hipotenuse, cord, hue}) => ({
    height:hipotenuse,
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

function Segment(props) {
  const [hue, saturation, lightness] = props.hsl;
  const radians = props.angle * (Math.PI/180);
  const cord = (2 * props.radius) * Math.sin(radians / 2);
  const y = Math.pow(cord / 2, 2);
  const r = Math.pow(props.radius, 2);
  const hipotenuse = Math.sqrt(r - y);

  const classes = useStyles({hipotenuse, cord, hue, saturation, lightness});
  return (
    <div className={classes.container}>
      <div className={classes.polygon}></div>
    </div>
  );
};

export default Segment;