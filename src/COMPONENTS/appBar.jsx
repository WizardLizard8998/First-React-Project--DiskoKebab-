
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import '../PAGES/PageCss.css';



const useStyles = makeStyles((theme) => ({ //css config on makeStyles
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(107, 3, 3)',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '100%',
  },
  logo: {
    cursor: 'pointer',
    height: '100%',
    width: '60%',
    display: 'flex',
    color: "white",
  },
  buttons: {
    cursor: 'pointer',
    height: 'auto',
    width: '30%',
    display: 'flex',
    justifyContent: 'right',
    color: "white"

  }

}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory(); // creates link history

  return (

    <div className={classes.root}>
      <AppBar position="static" color='transparent' >
        <Toolbar>
          <div className={classes.logo} onClick={() => history.push('/')}>
            <Typography variant="h5" className={classes.title} color="inherit" >
              Disko Kebab
            </Typography>
          </div>
          <div className='menuBox'>
            <div className={classes.buttons} onClick={() => history.push('/Sepet')}>
              Sepet
            </div>
            <div className={classes.buttons} onClick={() => history.push('/Menu')}>
              Menu
            </div>
            <div className={classes.buttons} onClick={() => history.push('/BizeUlasin')}>
              Bize Ulaşın
            </div>
            <div className={classes.buttons} onClick={() => history.push('/LoginPage')}>
              Giriş
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
