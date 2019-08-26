import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import ColorContext from '../../context/ColorContext';

const useStyles = makeStyles((theme) => ({
  polygon: ({hue, saturation, lightness, points}) => ({
    height:'100%',
    width:'100%',
    position:'absolute',
    top:0,
    background:`hsl(${hue}, ${saturation}%, ${lightness}%)`,
    clipPath:`polygon(50% 50%, ${points[0]}px ${points[1]}px, ${points[2]}px ${points[3]}px)`
  })
}));

function Segment({hsl, radius, angle}) {
  const [hue, saturation, lightness] = hsl;
  const setChroma = useContext(ColorContext)[1];
  const points = getPolygon(radius, hue, angle);

  const onClick = () => setChroma(hsl);

  const classes = useStyles({hue, saturation, lightness, points});
  return (
    <div className={classes.polygon} onClick={onClick}>
    </div>
  );
};

function getPolygon(radius, degrees, angle) {
  const point1 = getVertices(radius, degrees);
  const point2 = getVertices(radius, degrees - angle);
  return [...point1, ...point2];
};

function getVertices(radius, degrees) {
  const radians = (degrees) * (Math.PI/180);
  const opposite = Math.sin(radians) * radius;
  const adjacent = Math.cos(radians) * radius;
  return [opposite + radius, adjacent + radius];
};

export default React.memo(Segment);