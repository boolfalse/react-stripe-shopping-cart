
import React, {useContext} from 'react';
import {Button, Modal, Navbar} from "react-bootstrap";
import {CartContext} from "../CartContext";
import CartProduct from "./CartProduct";

export default function NavbarComponent() {
    const cart = useContext(CartContext);
    const [showModal, setShowModal] = React.useState(false);

    const productsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleShowModal = () => {
        setShowModal(true);
    }

    return (<>
        <Navbar expand='sm'>
            <Navbar.Brand href='#home'>E-commerce Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button onClick={handleShowModal}>Cart ({productsCount} Items)</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>{
               productsCount === 0 ?
                   <p>No products in cart.</p> :
                   <>
                       <p>You have {productsCount} products in cart.</p>
                       <ul>{
                           cart.items.map(item => (
                               <CartProduct key={item.id} id={item.id} quantity={item.quantity} />
                           ))
                       }</ul>
                       <p>Total: ${cart.getTotalCost().toFixed(2)}</p>
                       <Button variant='success' href='#'>Checkout</Button>
                   </>
            }</Modal.Body>
        </Modal>
    </>);
}
