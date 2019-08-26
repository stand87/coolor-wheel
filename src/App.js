import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

import Home from './components/Home';

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop:theme.spacing(15),
    paddingBottom:theme.spacing(15),
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
  return (
    <Container classes={{root: classes.container}}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Coolor Wheel
          </Typography>
        </Toolbar>
      </AppBar>
      <Home />
    </Container>
  );
}

export default App;
