import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is my header</h1>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/Mobiles">Mobiles</a>
                <a href="/Laptops">Laptop</a>
                <a href=""></a> */}
                
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobile</NavLink>
                <NavLink to='/Laptops'>Laptop</NavLink>
                <NavLink to='/Users'>Users</NavLink>
                <NavLink to='/Users2'>Users2</NavLink>
                <NavLink to='posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;