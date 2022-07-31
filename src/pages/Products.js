import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import './Products.css'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'

export default function Products(){
    /*const Con = () => {
    return(
        <div className="recipe-container">
            <div className="ingridiance-procedure-container">
                <h2>Ingridiance</h2>
                <p>2 Chicken Legs, Turmeric, Spice</p>
                <h2>Procedure</h2>
                <ul>
                    <li>
                        Cut the Legs to form Slita
                    </li>
                    <li>
                        Boil the legs
                    </li>
                    <li>
                        Aply the spice mixture and turmaric
                    </li>
                    <li>
                        Fry the Legs
                    </li>
                </ul>
            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../p1.webp" />
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
    }*/
    return(
        <div>
            <div className="recipe-container">
                <div className="ingridiance-procedure-container">
                    <h2>Ingridiance</h2>
                    <p>2 Chicken Legs, Turmeric, Spice</p>
                    <h2>Procedure</h2>
                    <ul>
                        <li>
                            Cut the Legs to form Slita
                        </li>
                        <li>
                            Boil the legs
                        </li>
                        <li>
                            Aply the spice mixture and turmaric
                        </li>
                        <li>
                            Fry the Legs
                        </li>
                    </ul>
                </div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p1} />
                    <Card.Body>
                        <Card.Title>Rost Chicken's Leg</Card.Title>
                        <Card.Text>
                            A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="recipe-container">
                <div className="ingridiance-procedure-container">
                    <h2>Ingridiance</h2>
                    <p>2 Chicken Legs, Turmeric, Spice</p>
                    <h2>Procedure</h2>
                    <ul>
                        <li>
                            Cut the Legs to form Slita
                        </li>
                        <li>
                            Boil the legs
                        </li>
                        <li>
                            Aply the spice mixture and turmaric
                        </li>
                        <li>
                            Fry the Legs
                        </li>
                    </ul>
                </div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p2} />
                    <Card.Body>
                        <Card.Title>Rost Chicken's Leg</Card.Title>
                        <Card.Text>
                            A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="recipe-container">
                <div className="ingridiance-procedure-container">
                    <h2>Ingridiance</h2>
                    <p>2 Chicken Legs, Turmeric, Spice</p>
                    <h2>Procedure</h2>
                    <ul>
                        <li>
                            Cut the Legs to form Slita
                        </li>
                        <li>
                            Boil the legs
                        </li>
                        <li>
                            Aply the spice mixture and turmaric
                        </li>
                        <li>
                            Fry the Legs
                        </li>
                    </ul>
                </div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p3} />
                    <Card.Body>
                        <Card.Title>Rost Chicken's Leg</Card.Title>
                        <Card.Text>
                            A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
    
}