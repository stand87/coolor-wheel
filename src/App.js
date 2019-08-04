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

  const onRangeChange = (event, value) => {
    setSegments(value);
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
              onChange={onRangeChange}
              getAriaValueText={(value) => value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={6}
              max={30}
            />
          </Grid>
          <Grid item xs={8} container justify='center' alignItems='center'>
            <ColorWheel segments={segments} size={800}/>
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
