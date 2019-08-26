import React, { useState } from 'react';

import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

import { ColorProvider } from '../../context/ColorContext';
import ColorWheel from '../ColorWheel';
import ColorCards from '../ColorCards';
import useChroma from '../../hooks/useChroma';

const COLOR_WHEEL_SIZE = 600;

const useStyle = makeStyles((theme) => ({
  colorWheel: {
    minHeight:COLOR_WHEEL_SIZE
  }
}));

function Home() {
  const classes = useStyle();
  const [chroma, setChroma] = useChroma();
  const [segments, setSegments] = useState(6);
  const [saturation, setSaturation] = useState(1);
  const [lightness, setLightness] = useState(50);

  const onSegmentsChange = (event, value) => setSegments(value);
  const onSaturationChange = (event, value) => setSaturation(value);
  const onLightnessChange = (event, value) => setLightness(value);

  const getColorWheels = () => {
    const colorWheels = [];
    let size = COLOR_WHEEL_SIZE;
    let sat = 90;
    for (let index = 0; index < saturation; index++) {
      colorWheels.push(<ColorWheel key={index} index={index} segments={segments} size={size} saturation={sat} lightness={lightness} />);
      size -= 60;
      sat -= 10;
    }
    return colorWheels;
  };

  const onReset = () => {
    setSegments(6);
    setSaturation(1);
    setLightness(50);
  };

  return (
    <ColorProvider value={[chroma, setChroma]}>
      <Grid container spacing={5}>
        <Grid item xs={2}>
          Segments
          <Slider
            defaultValue={segments}
            value={segments}
            onChange={onSegmentsChange}
            getAriaValueText={(value) => value}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={6}
            max={30}
          />
          Saturation
          <Slider
            defaultValue={saturation}
            value={saturation}
            onChange={onSaturationChange}
            getAriaValueText={(value) => value}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
          Lightness
          <Slider
            defaultValue={lightness}
            value={lightness}
            onChange={onLightnessChange}
            getAriaValueText={(value) => value}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={[]}
            min={1}
            max={100}
          />
          <Button onClick={onReset}>Reset</Button>
        </Grid>
        <Grid classes={{container: classes.colorWheel}} item xs={8} container justify='center' alignItems='center'>
          {getColorWheels()}
        </Grid>
      </Grid>
      <Grid container>
        <ColorCards />
      </Grid>
    </ColorProvider>
  );
}

export default Home;