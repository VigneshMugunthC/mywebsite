import { Card, Badge, CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import {useState, useRef } from 'react';
import './Cart.css'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'

export default function Cart(){
    const[add, setAdd] = useState("");
    const[name, setName] = useState("");
    const[num, setNum] = useState("");
    const[card, setCard] = useState("");
    return(
        <div>
            <div className="cart-contents">
            <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={p1} />
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                    <Badge bg="primary">9</Badge>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={p2} />
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                    <Badge bg="primary">9</Badge>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={p3} />
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                    <Badge bg="primary">9</Badge>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={p1} />
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                    <Badge bg="primary">4</Badge>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={p2} />
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                    <Badge bg="primary">2</Badge>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={p3} />
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                    <Badge bg="primary">5</Badge>
                </Card.Body>
            </Card>
            </CardGroup>
            </div>
            <div className="cart-container">
                <div>
                <section class="p-4 d-flex justify-content-center pb-4 w-100"> 
                        <form>
                            <div class="form-outline mb-4">
                                <input type="text" id="l_add" class="form-control" value={add} onChange={(e) => setAdd(e.target.value)} />
                                <label class="form-label" for="l_add">Address</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="text" id="l_name" class="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                                <label class="form-label" for="l_name">Name</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="text" id="l_num" class="form-control" value={num} onChange={(e) => setNum(e.target.value)}/>
                                <label class="form-label" for="l_num">Phone Number</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="text" id="l_card" class="form-control" value={card} onChange={(e) => setCard(e.target.value)}/>
                                <label class="form-label" for="l_card">Name</label>
                            </div>
                            <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="l_remember" checked />
                                <label class="form-check-label" for="l_remember"> Remember me </label>
                                </div>
                            </div>
                            </div>
                            <button type="submit" class="btn btn-dark btn-lg mb-4 w-100">Save</button>
                            <div class="text-center">
                            </div>
                        </form>
                    </section>
                </div>
                <div>
                    <div className="m-4 p-4">
                    <h2 style={{color:"black"}}>Order Review</h2><br/>
                    <ul>
                        <li><h4 /*style={{color:"black"}}*/>Rosterd Chicken's Leg x9</h4></li>
                        <li><h4>Rosterd Chicken's Leg x9</h4></li>
                        <li><h4>Rosterd Chicken's Leg x9</h4></li>
                        <li><h4>Rosterd Chicken's Leg x4</h4></li>
                        <li><h4>Rosterd Chicken's Leg x2</h4></li>
                        <li><h4>Rosterd Chicken's Leg x5</h4></li>
                    </ul>
                    </div>
                    <div className="m-4 p-4">
                        <button type="submit" class="btn btn-dark btn-lg mb-4 w-100">PLACE ORDER</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}