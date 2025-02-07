"use client";
import Login from "./login";
import styles from "./page.module.css";
import Image from "next/image";
import { Inter,Poppins} from 'next/font/google';
import PasswordValidation from "./passwordValidation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


export default function Register(){
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
                    <form method="post" className="mx-auto">
                        <h1 className={styles.h1}>Welcome To StepAlpha</h1>
                        {/* <Login/> */}
                        <div className="mx-auto d-flex flex-column justify-content-center align-items-center">
                            <div className={styles.btnSection1}>
                                <button className={styles.btn1} onClick={(e) => {e.preventDefault(); setActiveForm('login')}}>Login</button>
                                <button className={styles.btn2} onClick={(e) => {e.preventDefault(); setActiveForm('Register')}}>Register</button>
                            </div>
                            <p className={styles.sectiontwoP}>Step Alpha Academy educational platform.</p>
                            <div className={styles.input1}>
                                <label htmlFor="name" className={styles.labels}>Email</label>
                                <input type="email" className={styles.field} placeholder="Enter your email" name="email" required></input>
                            </div>
                            <div className={styles.input2}>
                                <label htmlFor="name" className={styles.labels}>User Name</label>
                                <input type="text" className={styles.field} placeholder="Enter your user name" name="name" required></input>
                            </div>
                            <PasswordValidation />
                            
                        </div>
                        <div className="text-center">
                            <button type="submit" className={`${styles.btn3}`}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}