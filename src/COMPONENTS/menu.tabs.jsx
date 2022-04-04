import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { foods } from '../DATA/foods';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Draggable from 'react-draggable';
import '../PAGES/PageCss.css';

import { CartContext } from '../DATA/cart';
import { useContext } from 'react';

function PaperComponent(props) {
    return (

        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper  {...props} />
        </Draggable>

    );
}

function DraggableDialog(props) {
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
                        <img className='image' src={img} alt='dialogimg' />
                    </DialogContent>
                    <DialogContentText >
                        {description}
                    </DialogContentText>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="secondary">
                            İptal
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

const useStyles = makeStyles((theme) => ({


    rootAppBar: {
        backgroundColor: theme.palette.background.paper,
        width: 'auto',
        height: 'auto',
        color: 'white',
    },


    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        background: ' rgb(107, 3, 3)',

    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    typo: {
        color: "white",
    },

}));

/*
complexGrid component;
This component is creates little boxes in order to show content of the data
(This one is for display menu's datas like food)
*/


/*
Creates a paper to use its area on the parent
Creates a grid to divide paper in order to manage parts
Button Base displays image when clicked (not completed)
Typography organizes the texts 
*/

function ComplexGrid(props) {
    const classes = useStyles();
    const { foodName, foodDescription, foodImage, foodPrice } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image} >
                            <img className={classes.img} alt="complex" src={foodImage} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container className={classes.typo}>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs >
                                <Typography gutterBottom variant="subtitle1"   >
                                    {foodName}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {foodDescription}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <DraggableDialog
                                        img={foodImage}
                                        title={foodName}
                                        description={foodDescription}
                                        price={foodPrice}
                                    />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{foodPrice}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

function TabPanel(props) {
    
    const { children, value, index, ...other } = props;
    return (
        <div
            className='MenuPage'
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index &&
                foods[value].map(food => (
                    <Box p={3} >
                        <ComplexGrid
                            key={value}
                            foodName={food.foodName}
                            foodDescription={food.foodDescription}
                            foodImage={food.foodImage}
                            foodPrice={food.foodPrice}
                        />

                    </Box>
                ))
            }
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}



export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div >
            <AppBar position="static" className={classes.rootAppBar} >
                <Tabs
                    className='sliderContent'
                    value={value}
                    onChange={handleChange}
                    indicatorColor="inherit"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs "
                >
                    <Tab label="Ana Yemek" {...a11yProps(0)} />
                    <Tab label="İçecekler" {...a11yProps(1)} />
                    <Tab label="Tatlılar" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                </TabPanel>
            </SwipeableViews>
        </div >
    );
}
