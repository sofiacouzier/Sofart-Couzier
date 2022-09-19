
import React from 'react'
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <div>
            <button className="botonCarrito">
                <Link to={"/Cart"} ><img className='carrito' src="../img/shopping-cart.png" width={40} alt="" />
                </Link>


            </button>
        </div>
    );
}

export default CartWidget;