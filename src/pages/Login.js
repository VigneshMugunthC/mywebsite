import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const[userID, setUserID] = useState("");
    const[pwd, setPwd] = useState("");

    function handelSubmit(event){
        if(userID == "vigmug2@gmail.com" && pwd=="CvM")
            alert("Successful Login");
        else
            alert("Wrong EmailID ID or Password");
        event.preventDefault();
    }

    return(
        <div>
            <section class="w-100 p-4 d-flex justify-content-center pb-4">
                <div class="bg-white border rounded-5" style={{backgroundImage:"url('../bg.jpg')",color: "white"}}>
                    <section class="w-100 p-4 d-flex justify-content-center pb-4"> 
                        <form onSubmit={handelSubmit}>
                            <div class="form-outline mb-4">
                                <input type="email" id="l_email" class="form-control" value={userID} onChange={(e) => setUserID(e.target.value)} />
                                <label class="form-label" for="l_email">Email address</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="password" id="l_pwd" class="form-control" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                                <label class="form-label" for="l_pwd">Password</label>
                            </div>
                            <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="l_remember" checked />
                                <label class="form-check-label" for="l_remember"> Remember me </label>
                                </div>
                            </div>
                            <div class="col">
                                <a href="" style={{textDecoration:"none"}}>Forgot password?</a>
                            </div>
                            </div>
                            <button type="submit" class="btn btn-dark btn-lg mb-4 w-100">Sign in</button>
                            <div class="text-center">
                            <p>Not a member? <Link to="/register" style={{textDecoration:"none"}}>Register</Link></p>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </div>
    );
}
