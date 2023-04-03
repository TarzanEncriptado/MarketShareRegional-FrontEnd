import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from "../Signup";
import '../../styles/styles.css'
import jpIMG from '../../assets/icone-login.png'
const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <div className="container-login">
            <header className="h-42 p-6 rounded-lg bg-green-700">
                <div className="col-span-3 flex items-center justify-center">
                        <span className="login-form-title">
                            Market ShareRegional 
                        </span>
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                        <span className="login-form-title">
                            <img src={jpIMG} alt="Market-Share-Image" />
                        </span>
                    </div>
           </header>
           <div className="flex items-center justify-center">
                <div className="wrap-login">
                    <div className="">
                    <form action="" className="login-form">
                        <div className="wrap-input">
                            <input 
                            className={email !== "" ? 'has-val input' : 'input'}
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>
                        <div className="wrap-input">
                            <input 
                            className={password !== "" ? 'has-val input' : 'input'} 
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>
                        <div className="">
                        <Link to="/Home">
                            <button className="login-form-btn">Login</button>
                        </Link>
                        </div>
                                                
                        <div className="text-center">
                            <span className="txt1">Não possui conta?</span>
                        <Link to="/Signup">
                                <button className="login-form-btn-cadastrar">cadastre-se</button>
                        </Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin