import React from 'react';
import '../PAGES/PageCss.css';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        backgroundColor: 'rgb(107, 3, 3)',
        borderRadius: '10px',
        width: '160px',
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
    },
    
}));


export default function ButtonBox() {
    const classes = useStyles();
    const history = useHistory();

    return (

        <div class='LoginPage'>
            <div className={classes.paper}>
                <Button component='span' onClick={(event) => { history.push('/NewSignUp') }}> Kayıt Ol! </Button>
            </div>

        </div>

    );


}