import React from 'react'
import './logo.css'
import Orologo from '../assets/orologo1.png'


function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    return (
        <div className='d-flex align-items-center justify-content-between'>
            <a href='/' className='logo d-flex align-items-center'>
                <img src={Orologo} alt="logo" />
                <span className='d-none d-lg-block fw-bold'>Business Group</span>
            </a>
            <i className='bi bi-list toogle-sidebar-btn' onClick={handleToggleSideBar}></i>
        </div>
    );
}

export default Logo
