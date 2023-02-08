
import React from 'react';
import {Col, Row} from "react-bootstrap";
import {productsArray} from "../productsStore";
import ProductCard from "../components/ProductCard";

export default function Store() {
    return (
        <div>
            <h2 align='center' className='p-3'>Welcome to the store!</h2>
            <Row xs={1} md={3} className='g-4'>
                {productsArray.map((product, index) => (
                    <Col align='center' key={index}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
