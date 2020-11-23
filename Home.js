import { render } from '@testing-library/react';
import React, { useState, state, Component, props, useContext, uniqid } from 'react';
import { Button, Col, Row, Container, Card, Modal, NavDropdown, ButtonGroup, Dropdown, openModal, closeModal, Navbar, Nav, } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import shoe1 from '../images/shoe1.PNG'

import shoe2 from '../images/shoe2.PNG'

import shoe3 from '../images/shoe3.PNG'

import shoe4 from '../images/shoe4.PNG'
import { CartContext } from './CartContext';


function HomePage() {


    /* constructor(props) {
        super(props)
        this.state = {
            count: 0,
            totalPrice: 0,
            price: 0
        }

    }
    handleClick = e => {
        const count = this.state.count;
        const totalPrice = this.state.totalPrice;
        this.setState({ count: count + 1 })
        console.log("Quantity:" + count);
    } */
    const [cart, setCart] = useState([])



    const [products] = useState([
        {
            name: 'Carman salas brown',
            cost: 10.99,
            image: 'https://cdn.shopify.com/s/files/1/2290/7887/products/MFF201112-WHT_1_copy_800x1000_crop_center.jpg?v=1592675582'
        },
        {
            name: 'Carman salas pink',
            cost: 24.05,
            image: 'https://dynamic.zacdn.com/NBnSsAYA35tFtsS6AfsKMf7qCwY=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/crystal-korea-fashion-3315-7286031-1.jpg'
        },
        {
            name: 'Carman salas burgundy',
            cost: 18.01,
            image: 'https://www.beststylo.com/wp-content/uploads/2015/01/shiny-and-glittery-wnter-wear-fleet-shoes-for-women-by-stylo.jpg'
        },
        {
            name: 'Carman salas print',
            cost: 12,
            image: 'https://www.beststylo.com/wp-content/uploads/2019/04/lovely-winter-wear-jogger-shoes-for-women.jpg'
        },
    ]);
    
    const addToCart = (product) => {

        setCart([...cart, product]);
   


    }




    return (
        <div>
            <div style={{ paddingLeft: '20px', paddingTop: '20px', color: '#868c94' }}>
                <Card style={{ width: '18rem', fontWeight: '600!important', fontSize: '16px!important' }}>
                    <Card.Body>ITEM: ({cart.length}) <br />TOTAL:({})  </Card.Body>
                </Card>
            </div>
            {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1 fr' }}> */}
            <Container style={{ margin: 'auto', display: 'inline-flex' }}>
                <div className='d-flex'>
                    <div className='p-2'>
                        <Card style={{ width: '30rem' }}>
                            <div >
                                {products.map((product, indx) => (
                                    <div key={indx}>
                                        <Card.Img variant="top" src={product.image} />
                                        <Card.Body>
                                            <Card.Title style={{ display: 'block', textAlign: 'center' }}><h2>{product.name}</h2>
                                                <h4>{product.cost}</h4></Card.Title>

                                            <Button onClick={() => addToCart(product)} variant="primary" style={{
                                                display: 'inline-block',
                                                padding: '15px 22px',
                                                margin: '0 .4em .4em 0',
                                                borderRadius: '2em',
                                                boxSizing: 'border-box',
                                                textDecoration: 'none',
                                                fontFamily: '"Roboto",sans-serif',
                                                fontWeight: '300',
                                                fontSize: '16px',
                                                color: '#fff',
                                                backgroundColor: '#4eb5f1',
                                                marginLeft: '35%'
                                            }}>Add to cart</Button>
                                        </Card.Body>

                                    </div>
                                ))}
                            </div>
                        </Card>
                        {/* <Card.Img variant="top" src={shoe1} />
                            <Card.Body>
                                <Card.Title style={{ display: 'block', textAlign: 'center' }}><h2>Carman salas brown</h2>
                                    <h4>price={10.99}</h4></Card.Title>

                                <Button onClick={this.handleClick} variant="primary" style={{
                                    display: 'inline-block',
                                    padding: '15px 22px',
                                    margin: '0 .4em .4em 0',
                                    borderRadius: '2em',
                                    boxSizing: 'border-box',
                                    textDecoration: 'none',
                                    fontFamily: '"Roboto",sans-serif',
                                    fontWeight: '300',
                                    fontSize: '16px',
                                    color: '#fff',
                                    backgroundColor: '#4eb5f1',
                                    marginLeft: '35%'
                                }}>Add to cart</Button>
                            </Card.Body>
                        </Card> */}
                    </div>

                    {/* <div className='d-flex'>
                        <div className='p-2'>
                            <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={shoe2} style={{ height: '455px' }} />
                                <Card.Body>
                                    <Card.Title style={{ display: 'block', textAlign: 'center' }}><h2>Carman salas pink</h2>
                                        <h4>24.05</h4></Card.Title>

                                    <Button variant="primary" style={{
                                        display: 'inline-block',
                                        padding: '15px 22px',
                                        margin: '0 .4em .4em 0',
                                        borderRadius: '2em',
                                        boxSizing: 'border-box',
                                        textDecoration: 'none',
                                        fontFamily: '"Roboto",sans-serif',
                                        fontWeight: '300',
                                        fontSize: '16px',
                                        color: '#fff',
                                        backgroundColor: '#4eb5f1',
                                        marginLeft: '35%'
                                    }}>Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className='d-flex'>
                    <div className='p-2'>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={shoe3} style={{ height: '380px' }} />
                            <Card.Body>
                                <Card.Title style={{ display: 'block', textAlign: 'center' }}><h2>Carman salas burgundy</h2>
                                    <h4>18.01</h4></Card.Title>

                                <Button variant="primary" style={{
                                    display: 'inline-block',
                                    padding: '15px 22px',
                                    margin: '0 .4em .4em 0',
                                    borderRadius: '2em',
                                    boxSizing: 'border-box',
                                    textDecoration: 'none',
                                    fontFamily: '"Roboto",sans-serif',
                                    fontWeight: '300',
                                    fontSize: '16px',
                                    color: '#fff',
                                    backgroundColor: '#4eb5f1',
                                    marginLeft: '35%'
                                }}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='d-flex'>
                        <div className='p-2'>
                            <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={shoe4} style={{ height: '380px' }} />
                                <Card.Body>
                                    <Card.Title style={{ display: 'block', textAlign: 'center' }}><h2>Carman salas print</h2>
                                        <h4>12</h4></Card.Title>

                                    <Button variant="primary" style={{
                                        display: 'inline-block',
                                        padding: '15px 22px',
                                        margin: '0 .4em .4em 0',
                                        borderRadius: '2em',
                                        boxSizing: 'border-box',
                                        textDecoration: 'none',
                                        fontFamily: '"Roboto",sans-serif',
                                        fontWeight: '300',
                                        fontSize: '16px',
                                        color: '#fff',
                                        backgroundColor: '#4eb5f1',
                                        marginLeft: '35%'
                                    }}>Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div> */}

                </div>
            </Container>
            
        </div>



    )

}

export default HomePage;