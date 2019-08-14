import React from 'react';
import './header.css';

const Header = props => {
    return (
        <div>
            <div className='container'>
            <h1 className='header'>{props.dataprops.title}</h1>
            </div>
        </div>
    );
};

export default Header;