import './About.css'
import pp from '../images/myphoto.png'
import { Card } from 'react-bootstrap'
export default function About(){
    return(
        <div className='maincontainer'>
            <div className='aboutcontainer1 container p-4'>
                <form className='aboutcontainer1contents'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={pp} style={{borderRadius:"20px"}} width="200"></img>
                            <div className='row'>
                                <lable>Restrunt Recipe Owner</lable>
                            </div>
                        </div>
                        <div className='col-md-2'>

                        </div>
                        <div className='col-md-4'>
                            <div className='row'>
                                <h3>
                                    Location
                                </h3>
                                <lable>Restrunt Recipe, 190/20 Comercial Street, Erode</lable>
                            </div>
                            <div className='row'>
                                <label>_____________________</label>
                            </div>
                            <div className='row'>
                                <h3>
                                    Established
                                </h3>
                                <lable>Since 1980</lable>
                            </div>
                            <div className='row'>
                                <label>_____________________</label>
                            </div>
                            <div className='row'>
                                <h3>
                                    Number of Workers
                                </h3>
                                <lable>25</lable>
                            </div>
                            <div className='row'>
                                <label>_____________________</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-10'>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-10'>
                            <br/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-10'>
                            <h3 style={{textAlign:"center"}}>Location (map)</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d489.0637006463843!2d77.72208220191328!3d11.297414451986006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1659268876872!5m2!1sen!2sin"
                            width="100%" loading="lazy" className='map'></iframe>
                        </div>
                    </div>
                </form>
            </div>
            <hr/>
            <div className='aboutcontainer2'>
                <h3 style={{textAlign:"center", color:"white"}}>Star Employees</h3>
                <div className='aboutcontainer2contents'>
                    <Card style={{ width: '14rem', borderColor:'black'}}>
                        <Card.Img variant="top" src={pp}/>
                        <Card.Body>
                            <Card.Title>XYZ Employee</Card.Title>
                            <Card.Text>
                                AXYZ........
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem', borderColor:'black' }}>
                        <Card.Img variant="top" src={pp}/>
                        <Card.Body>
                            <Card.Title>XYZ Employee</Card.Title>
                            <Card.Text>
                                AXYZ........
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem', borderColor:'black' }}>
                        <Card.Img variant="top" src={pp}/>
                        <Card.Body>
                            <Card.Title>XYZ Employee</Card.Title>
                            <Card.Text>
                                AXYZ........
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem', borderColor:'black' }}>
                        <Card.Img variant="top" src={pp}/>
                        <Card.Body>
                            <Card.Title>XYZ Employee</Card.Title>
                            <Card.Text>
                                AXYZ........
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}