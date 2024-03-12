import React from 'react'
import profileImg from '../images/orologo1.png'
import './nav.css'

function NavAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
        <a
            className='nav-link nav-profile d-flex align-items-center pe-0'
            href='#'
            data-bs-toggle="dropdown"
            >

                <img src={profileImg} alt="Profile" className='rounded-circle' />
                <span className='d-none d-md-block dropdown-toggle ps-2'>Admin</span>
            </a>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
                <li className='dropdown-header'>
                    <h6 className='custom-text' style={{ fontFamily: '15x5'}}>Grace</h6>
                    <span>Developer</span>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li>
                    <a
                        className='dropdown-item d-flex align-items-center'
                        href='users-profile.html'
                    >
                        <i class="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li>
                    <a
                        className='dropdown-item d-flex align-items-center'
                        href='user-profile.html'
                    >
                        <i class="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li>
                    <a
                        className='dropdown-item d-flex align-items-center'
                        href='pages-faq.html'
                    >
                        <i class="bi bi-question-circle"></i>
                        <span>Need Help?</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li>
                    <a className='dropdown-item d-flex align-items-center' href='#'>
                        <i class="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>
    </li>
  );
}

export default NavAvatar
