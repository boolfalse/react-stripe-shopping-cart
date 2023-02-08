
import React from 'react';
import {Button, Modal, Navbar} from "react-bootstrap";

export default function NavbarComponent() {
    const [showModal, setShowModal] = React.useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleShowModal = () => {
        setShowModal(true);
    }

    return (
        <>
            <Navbar expand='sm'>
                <Navbar.Brand href='#home'>E-commerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShowModal}>Cart 0 Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal Body</p>
                </Modal.Body>
            </Modal>
        </>
    );
}
