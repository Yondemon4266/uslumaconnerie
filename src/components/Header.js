import React from 'react';
import Button from './Button';


const Header = () => {
    
    return (
        <header>
            <div className="header-container">
            <h1>MAÇONNERIE USLU <br/> VOTRE ARTISAN À PROXIMITÉ</h1>
            <Button/>
            <a href="#services">
                <i className="fa-solid fa-arrow-down"></i> 
            </a>
            </div>
            
        </header>
    );
};

export default Header;