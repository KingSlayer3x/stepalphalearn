'use client';
import { useState } from "react";
import Register from "./register";

export default function Login({ ToRegister }){
    return (<>
    <h2>hello</h2>
    <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center">
    <button  onClick={(e) => {e.preventDefault(); ToRegister(); console.log("clicked")}}>Register</button>

    </div>
</>);

}