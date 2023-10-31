import React from 'react';
import { NavLink } from 'react-router-dom';

const MentionsLegales = () => {
    return (
        <div className='mentions-legales'>
            <p>@2023 Maçonnerie USLU</p>
            <div className="mentions-legales-container">
                <NavLink to="./mentions-legales">
                    <p>Mentions légales</p>
                </NavLink>
            </div>
        </div>
    );
};

export default MentionsLegales;