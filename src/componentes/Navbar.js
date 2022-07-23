import React from 'react';
import '../estilos/Navbar.css';
import CartWidget from './CartWidget';

const Navbar = () => {
    return(
        <nav>
            <div className='main'>
                
                <h1> Ponyo </h1>
            </div>
            <div className='nav'>
                <button className='boton'> Remeras </button>
                <button className='boton'> Pantalones</button>
                <button className='boton'> Camperas </button>
                <button className='boton'> Buzos </button>
            </div> 
            <CartWidget> </CartWidget>
        </nav>
    )
}

export default Navbar