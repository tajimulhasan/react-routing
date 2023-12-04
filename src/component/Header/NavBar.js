import React from 'react';
import './Navbar.css';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {
    return (
        <div className='header d-flex justify-content-center align-items-center mt-4'>
            <ul className='d-flex  justify-content-evenly w-50'>
                <li className='list-unstyled p-2'> <CustomLink to='/home'>HOME</CustomLink> </li>
                <li className='list-unstyled p-2'> <CustomLink to='/review'>REVIEW</CustomLink> </li>
                <li className='list-unstyled p-2'> <CustomLink to='/dashboard'>DASHBOARD</CustomLink> </li>
                <li className='list-unstyled p-2'> <CustomLink to='/blogs'>BLOGS</CustomLink> </li>
                <li className='list-unstyled p-2'> <CustomLink to='/about'>ABOUT</CustomLink> </li>
            </ul>
        </div>
    );
};

export default NavBar;