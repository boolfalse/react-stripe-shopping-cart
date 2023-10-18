
import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { productsArray } from "../productsStore";

function CartProduct({id, quantity}) {
    const cart = useContext(CartContext);
    const productData = productsArray.find(product => product.id === id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    );
}

export default CartProduct;
