import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useState } from 'react';
import AlertDialog from '../alertDialog';

const useStyles = makeStyles((theme) => ({


    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


export default function OrderButton(props) {
    const classes = useStyles();

    const { Name, Phone, Adress, Mail, Order } = props;
    const [open, setOpen] = useState(false);

    const data = {
        Name: Name,
        Phone: Phone,
        Adress: Adress,
        Mail: Mail,
        Order: Order,
    }



    const onClick = () => {
        axios.defaults.headers['Access-Control-Allow-Origin'] = "*"
        axios.defaults.headers['Access-Control-Allow-Headers'] = "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type, Host, Accept, Acces-Control-Allow-Methods"

        setOpen(true);

        axios
            .post("http://localhost:5000/api/cart", data)
            .then((response) => {
                console.log("success" + response)
            })
            .catch((error) => {
                console.log(error)
            });

    }





    return (
        <div className={classes.root}>
            <AlertDialog
                open={open}
                setOpen={setOpen}
                text={'Siparişiniz verilmiştir. İyi günler'}
            />

            <Button variant='contained' onClick={onClick}>Sipariş et</Button>
        </div>
    );
}
