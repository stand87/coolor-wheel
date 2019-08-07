import React, {useState, useEffect, useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import ColorContext from '../../context/ColorContext';

const useStyles = makeStyles({
  card: {
    '&:hover': {
      cursor:'pointer'
    }
  },
  mediaCard: {
    minHeight:100,
    background: ({color}) => color 
  }
});

function ColorCard({selected, index, setSelected}) {
  const [color, setColor] = useState();
  const [chroma, setChroma] = useContext(ColorContext);

  useEffect(() => {
    if (chroma && selected) {
      setColor(chroma);
    } else {
      setChroma(null);
    }
  }, [chroma, selected, setChroma]);

  const onClickCard = () => setSelected(!selected ? index : null);
  
  const classes = useStyles({color: color && color.css()});

  return (
    <Card raised={selected} classes={{root:classes.card}} onClick={onClickCard}>
      <CardHeader classes={{root: classes.mediaCard}} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {color ? color.name() : '-'}
        </Typography>
        {['rgb', 'hsl', 'cmyk', 'lab'].map((space) => (
          <div key={space}>
            <Typography variant="body2" component="p">
              {space.toUpperCase()}:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" paragraph>
              {color ? color.css(space) : '-'}
            </Typography>
          </div>       
        ))}
      </CardContent>
    </Card>
  );
};

export default ColorCard;