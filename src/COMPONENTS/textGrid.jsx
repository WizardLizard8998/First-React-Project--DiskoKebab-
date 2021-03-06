import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: '10%',
    display: 'flex',
    maxWidth: 500,
    backgroundColor: 'rgb(107, 3, 3)',
  },
  typo: {
    color: 'white',
  },
}));


/*
textGrid ;
this component is same with complexGrid 
the main difference is this component is not here to display any data but shows text
(in this example it shows contact info or in main page shows hello text)
*/

export default function TextGrid(props) {
  const classes = useStyles();
  const { text0, text1, text2, text3, text4 } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs className={classes.typo}>
              <Typography gutterBottom variant="subtitle1">
                {text0}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                {text1}
              </Typography>
              <Typography variant="body2" >
                {text2}
              </Typography>
              <Typography variant="body2">
                {text3}
              </Typography>
              <Typography variant="body2">
                {text4}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
