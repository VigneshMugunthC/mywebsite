import './About.css'
export default function About(){
    return(
        <div>
            <div className='container p-4'>
                <form>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src="../myphoto.png" width="200"></img>
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
                        <div className='col-md-3'>
                        </div>
                        <div className='col-md-4'>
                            <h3>Location (map)</h3>
                        </div>
                        <div className='col-md-3'>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-10'>
                            <br/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-10'>
                            <lable>Want to add a Location using Google map..........................................................................................</lable>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}