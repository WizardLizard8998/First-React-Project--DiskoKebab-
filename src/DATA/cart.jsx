import React, { createContext, useState, } from 'react';

const CartContext = createContext();

function CartProvider(props) {
    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Adress, setAdress] = useState("");
    const [Mail, setMail] = useState("");
    const [Order, setOrder] = useState("");


    return (
        <CartContext.Provider
            value={{
                Name: Name,
                Phone: Phone,
                Adress: Adress,
                Mail: Mail,
                Order: Order,
                setName,
                setPhone,
                setAdress,
                setMail,
                setOrder,
            }}>
            {props.children}
        </CartContext.Provider>
    );



}

export { CartContext, CartProvider };
