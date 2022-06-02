import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {

    

    return (
        <header className="header-row">
            <div className="container">
                <div className="header-links">
                    <Link className='header-link' to='/'><div>Все котики</div></Link>
                    <Link className="header-link" to='/favorite'><div>Любимые котики</div></Link>
                </div> 
            </div>
        </header>
    );
}

export default Header;