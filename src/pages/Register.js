import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Register() {
    const[userID, setUserID] = useState("");
    const[name, setName] = useState("");
    const[pwd, setPwd] = useState("");
    const[cpwd, setCpwd] = useState("");
    const[dob, setDob] = useState("");
    const[status, setStatus] = useState("");
    const navigate = useNavigate();

    function handelSubmit(event){
        if(pwd==cpwd)
        {
            let str = `Registered Sussefully\n
            EmailID: ${userID}
            Name: ${name}
            Password: ${pwd}
            DOB: ${dob}
            Married: ${Boolean(status)}`;
            alert(str);
        }
        else{
            alert("Passords Mismatch");
        }
        event.preventDefault();
    }
    function handelReset(event){
        navigate('/login');
    }
    return(
        <div className='maincontainer'>
            <h1 style={{textAlign:"center"}}>Register</h1>
            <section class="w-100 p-4 d-flex justify-content-center pb-4">
                <div className="registercontainer bg-white border rounded-5">
                    <section class="w-100 p-4 d-flex justify-content-center pb-4"> 
                        <form onSubmit={handelSubmit}>
                            <div class="form-outline mb-4">
                                <input type="email" id="l_email" class="form-control" value={userID} onChange={(e) => setUserID(e.target.value)} />
                                <label class="form-label" for="l_email">Email address</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="text" id="l_name" class="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                <label class="form-label" for="l_name">Name</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="password" id="l_pwd" class="form-control" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                                <label class="form-label" for="l_pwd">Password</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="password" id="l_cpwd" class="form-control" value={cpwd} onChange={(e) => setCpwd(e.target.value)}/>
                                <label class="form-label" for="l_cpwd">Confirm Password</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="date" id="l_dob" class="form-control" value={dob} onChange={(e) => setDob(e.target.value)}/>
                                <label class="form-label" for="l_dob">Date Of Birth</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input class="form-check-input" type="checkbox" id="l_status" value={Boolean(status)} onChange={(e) => {
                                    if(e.target.value == false)
                                        setStatus("false");
                                    else
                                        setStatus("true");
                                    //Needs Corrections
                                }}/>
                                <label class="form-check-label" for="l_status"> Married </label>
                            </div>
                            <button type="submit" class="btn btn-dark btn-lg m-1 mb-4 w-45">Register</button>
                            <div onClick={handelReset} class="btn btn-light btn-lg m-1 mb-4 w-45">Clear</div>
                            <div class="text-center">
                            <p style={{color:"brown"}}>Already Registered? <Link to="/login" style={{color:"white"}}>Sign In</Link></p>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </div>
    );
}
