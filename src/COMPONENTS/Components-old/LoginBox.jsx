import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import '../PAGES/PageCss.css'
import { Button } from '@material-ui/core';
import axios from 'axios';
import AlertDialog from '../alertDialog';
import { CartContext } from '../../DATA/cart';


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

    },
    textfield: {
        color: 'white'
    }
}));





export default function LoginBox() {
    const [Number, setNumber] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const { Name, setName, Phone, setPhone, Adress, setAdress, Mail, setMail } = useContext(CartContext);


    const onClick = () => {
        console.log("Password", Password, " Number ", Number);
        setOpen(true);


        axios
            .get(`http://localhost:5000/api/Users/${Number}/${Password}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error + " error ");
                setData(error)
            });
    }


    useEffect(() => {
        if (data) {
            setPhone(data.phone)
            setAdress(data.adress)
            setMail(data.mail)
            setName(data.name)
        }
    }, [data])

    return (
        <>
            <AlertDialog
                open={open}
                setOpen={setOpen}
                text={data.name}
            />
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.paper}>
                    <div class='LoginBox'>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Numara</InputLabel>
                            <OutlinedInput id="Phone" value={Number} onChange={(event) => { setNumber(event.target.value) }} label="Numara" />
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Şifre</InputLabel>
                            <OutlinedInput id="Password" value={Password} onChange={(event) => { setPassword(event.target.value) }} label="Şifre" />
                        </FormControl>
                        <Button component='span' onClick={onClick}>Giriş Yap!</Button>
                    </div>
                </div>
            </form>
        </>
    );
}
