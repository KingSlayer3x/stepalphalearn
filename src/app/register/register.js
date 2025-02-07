import { useState } from "react";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PasswordValidation from "./passwordValidation";
import Login from "./login";

export default function Register({ ToLogin }){
    const [activeForm, setActiveForm] = useState('register');

    return(
        <form method="post" className="mx-auto">
            <h1 className={styles.h1}>Welcome To StepAlpha</h1>          
            <div className="mx-auto d-flex flex-column justify-content-center align-items-center">
                <div className={styles.btnSection1}>
                    <button className={styles.btn1} onClick={(e) => {e.preventDefault(); ToLogin()}}>Login</button>
                    <button className={styles.btn2} onClick={(e) => e.preventDefault()} disable>Register</button>
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
                <div className="text-center">
                    <button type="submit" className={`${styles.btn3}`}>Register</button>
                </div>
            </div>
        </form>
    )
}