import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import '../PAGES/PageCss.css'
import { Button, Dialog } from '@material-ui/core';
import axios from 'axios';
import AlertDialog from '../alertDialog';
import { useState } from 'react';

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
        background: ' rgb(107, 3, 3)',
        color: 'white',


    },
}));


export default function SignupBox() {
    const [Number, setNumber] = React.useState(null);
    const [Password, setPassword] = React.useState(null);
    const [Mail, setMail] = React.useState(null);
    const [Adress, setAdress] = React.useState(null);
    const [Name, setName] = React.useState(null);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("");


    let data = {
        Phone: Number,
        Password: Password,
        Mail: Mail,
        Adress: Adress,
        Name: Name,
    }



    const onClick = () => {
        console.log("Mail ", Mail, " Password ", Password, " Number ", Number, "Adress", Adress, "Name", Name);
        setOpen(true);
        axios.post("http://localhost:5000/api/Users", data)
            .then(response => {
                console.log("success")
                setStatus("succes");
            }).catch(error => {
                console.log(error + "error");
                setStatus("error")
            })



    }

    return (
        <>
            <AlertDialog
                open={open}
                setOpen={setOpen}
                text={status}
            />
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.paper}>
                    <div class='LoginBox'>
                        <FormControl variant="outlined" color='inherit' >
                            <InputLabel htmlFor="component-outlined">Name</InputLabel>
                            <OutlinedInput id="Name" value={Name} onChange={(event) => { setName(event.target.value) }} label="Name" />
                        </FormControl>
                        <FormControl variant="outlined" color='inherit' >
                            <InputLabel htmlFor="component-outlined">Mail</InputLabel>
                            <OutlinedInput id="Mail" value={Mail} onChange={(event) => { setMail(event.target.value) }} label="Mail" />
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Numara</InputLabel>
                            <OutlinedInput id="Number" value={Number} onChange={(event) => { setNumber(event.target.value) }} label="Number" />
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Şifre</InputLabel>
                            <OutlinedInput id="Password" value={Password} onChange={(event) => { setPassword(event.target.value) }} label="Password" />
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Adres</InputLabel>
                            <OutlinedInput id="Adress" value={Adress} onChange={(event) => { setAdress(event.target.value) }} label="Password" />
                        </FormControl>
                        <Button component='span' onClick={onClick}>Kayıt Ol!</Button>
                    </div>
                </div>
            </form>
        </>
    );
}

