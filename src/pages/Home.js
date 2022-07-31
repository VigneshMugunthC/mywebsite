import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

export default function Home(){
    return(
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block"
                src="../public/bg.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Hi</h2>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    )
}