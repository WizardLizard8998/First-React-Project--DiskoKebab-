import React, { createContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import '../PAGES/PageCss.css';
import { makeStyles } from '@material-ui/styles';
import { CartContext } from '../../DATA/cart';
import { useContext } from 'react';

function PaperComponent(props) {
    return (

        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper  {...props} />
        </Draggable>

    );
}

export default function DraggableDialog(props) {
    const [open, setOpen] = React.useState(false);
    const { img, title, description, price } = props;
    const { Order, setOrder } = useContext(CartContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        const s = title + " " + price + " \n"

        setOrder(Order + s);
        console.log(Order);
    };

    return (
        <div >
            <Button variant="outlined" color='inherit' size='small' onClick={handleClickOpen}>
                Göster
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <div>
                    <DialogTitle style={{ cursor: 'move' }} className='backgroundColor' id="draggable-dialog-title">
                        {title}
                    </DialogTitle>
                    <DialogContent >
                        <img className='image' src={img} alt='image' />
                    </DialogContent>
                    <DialogContentText >
                        {description}
                    </DialogContentText>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="secondary">
                            İpta
                        </Button>
                        <Button onClick={handleClick} color="secondary">
                            sepete ekle
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}
