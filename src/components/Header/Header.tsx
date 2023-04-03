import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return  (
        <div className='Header'>
            <header>
                <h1>Header do site </h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Signin">Login</Link>
                    <Link to="/Signup">Cadastre-se</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;