import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import bg1 from '../images/bg1.jpg'
import bg2 from '../images/bg2.jpg'
import bg3 from '../images/bg3.jpg'
import bg4 from '../images/bg4.jpg'
import bg5 from '../images/bg5.jpg'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import { Badge, Card, CardGroup } from 'react-bootstrap';

export default function Home(){
    return(
      <div className='maincontainer'>
        <Carousel fade className='maincarousel'>
            <Carousel.Item className='carouselitem'>
                <img
                className="carouselimage"
                src={bg1}
                alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Hi</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselitem'>
                <img
                className="carouselimage"
                src={bg2}
                alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Welcome</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselitem'>
                <img
                className="carouselimage"
                src={bg3}
                alt="First slide"
                />
                <Carousel.Caption>
                  <h2>To</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselitem'>
                <img
                className="carouselimage"
                src={bg4}
                alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Restarunt</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselitem'>
                <img
                className="carouselimage"
                src={bg5}
                alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Recipe</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <hr/>
        <h2>Today's Special</h2><br/>
        <CardGroup>
          <Card className='todayspecialcard'>
                <Card.Img variant="top" src={p1} className='todayspecialimg'/>
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='todayspecialcard'>
                <Card.Img variant="top" src={p2} className='todayspecialimg'/>
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='todayspecialcard'>
                <Card.Img variant="top" src={p3} className='todayspecialimg'/>
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='todayspecialcard'>
                <Card.Img variant="top" src={p1} className='todayspecialimg'/>
                <Card.Body>
                    <Card.Title>Rost Chicken's Leg</Card.Title>
                    <Card.Text>
                        A Quic grab and go meal made up of chick leg. Grab one as a snack any time.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        <hr/>
      </div>
    )
}