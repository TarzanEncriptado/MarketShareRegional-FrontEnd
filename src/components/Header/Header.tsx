import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return  (
        <div className='Header'>
            <header>
                <h1>Header do site </h1>
                <nav>
                    <Link to="/Home">Home</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;