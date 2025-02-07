"use client";
import Login from "./login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Register from "./register";
import styles from "./page.module.css";

import PasswordValidation from "./passwordValidation";


export default function MainRegister(){
    const [activeForm, setActiveForm] = useState('register');
    return (
        
        <div>
            <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
                <div className="row mx-auto h-100">
                    <div className="col-md-4 mx-auto d-none d-md-flex justify-content-center align-items-center">
                        <div className="container-fluid d-flex justify-content-center align-items-center" style={{position: 'relative', width: '100%', height: '100%'}}>
                        <img src="/SA.png" alt="company_logo" className="img-fluid" style={{maxHeight: '100%', width: '120%'}} />
                        </div>
                    </div>
                <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center">
                
                    {activeForm === 'register' ? (<Register ToLogin={() => setActiveForm('login')}/>) : (<Login ToRegister={() => setActiveForm('register')}/>)}
                </div>
            </div>
            </div>
        </div>
    );
}