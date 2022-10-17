
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../app/Provider';
function CartWidget() {
    const { carrito } = useContext(AppContext)

    return (
        <div>
            <button className="botonCarrito">
                <Link to={"/Cart"} ><img className='carrito' src="../img/shopping-cart.png" width={40} alt="" />
                </Link> <h5 style={{ backgroundColor: 'white' }} >{carrito.length}</h5>
            </button>

        </div>
    );
}

export default CartWidget;