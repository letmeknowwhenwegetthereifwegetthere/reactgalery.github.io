import React from "react";
import "../index.css";


const Footer = (props) => {
    const { desc } = props;
    
    return (
        <footer className="bg-secondary text-white p-5 text-center">
            <p>Para ver mas pinturas a la venta haga click en el boton.</p>
            <button type="button" >Buscar mas pinturas</button>
        </footer>
    );
};

export default Footer;