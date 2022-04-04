import { Button } from '@material-ui/core';
import axios from 'axios';
import { useContext, useState } from 'react';
import TextGrid from '../COMPONENTS/textGrid';
import { CartContext } from '../DATA/cart';
import './PageCss.css';
import { makeStyles } from '@material-ui/core/styles';
import AlertDialog from '../COMPONENTS/alertDialog';

const useStyles = makeStyles((theme) => ({


    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


function OrderButton(props) {
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



export default function CartPage() {

    const { Name, Phone, Adress, Mail, Order, } = useContext(CartContext);

    const textName = "Merhaba  " + Name
    const textPhone = "Telefon : " + Phone
    const textAdress = "Adresiniz : " + Adress
    const textMail = "E-posta : " + Mail
    const textOrder = `Siparişiniz:  ` + Order


    // const data = {
    //     Name: Name,
    //     Phone: Phone,
    //     Adress: Adress,
    //     Mail: Mail,
    //     Order: Order,
    // }

    // const onClick = () => {
    //     axios
    //         .post(`http://localhost:5000/api/Cart`, data)
    //         .then((response) => {
    //             console.log("success "+ response)
    //             setOpen(true);

    //         })
    // }

    return (
        <div className='denemePage'>
            <TextGrid className='orderGrid'
                text0={textName}
                text1={textPhone}
                text2={textAdress}
                text3={textMail}
                text4={textOrder} />
            <OrderButton className='orderGrid'
                Name={Name}
                Phone={Phone}
                Adress={Adress}
                Mail={Mail}
                Order={Order}
            />
        </div>


    );

}