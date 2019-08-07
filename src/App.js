import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

import ColorWheel from './components/ColorWheel';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    height:'100vh',
    width:'100vw'
  },
  body: {
    height:'100%',
    paddingTop:theme.spacing(15),
    [theme.breakpoints.down('xs')]: {
      paddingTop:theme.spacing(14)
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop:theme.spacing(16)
    }
  }
}));

function App() {
  const classes = useStyle();
  const [segments, setSegments] = useState(6);
  const [saturation, setSaturation] = useState(1);
  const [lightness, setLightness] = useState(50);

  const onSegmentsChange = (event, value) => setSegments(value);
  const onSaturationChange = (event, value) => setSaturation(value);
  const onLightnessChange = (event, value) => setLightness(value);

  const getColorWheels = () => {
    const colorWheels = [];
    let size = 1000;
    let sat = 90;
    for (let index = 0; index < saturation; index++) {
      colorWheels.push(<ColorWheel key={index} index={index} segments={segments} size={size} saturation={sat} lightness={lightness} />);
      size = size - 100;
      sat = sat - 10;
    }
    return colorWheels;
  };

  return (
    <Grid classes={{root:classes.root}} container justify="center">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Coolor Wheel
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container item classes={{container: classes.body}} xs={10}>
        <Grid container spacing={5}>
          <Grid item xs={2}>
            Segments
            <Slider
              defaultValue={segments}
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
              onChange={onLightnessChange}
              getAriaValueText={(value) => value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={100}
            />
          </Grid>
          <Grid item xs={8} container justify='center' alignItems='center'>
            {getColorWheels()}
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item>
            Picked colors
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
