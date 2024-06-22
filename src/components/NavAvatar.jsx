import React from 'react';
import profileImg from '../assets/user1.png';
import './nav.css';

function NavAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
      <a
        className='nav-link nav-profile d-flex align-items-center pe-0'
        href='#'
        id='navbarDropdown'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <img src={profileImg} alt='Profile' className='rounded-circle' />
        <span className='d-none d-md-block dropdown-toggle ps-2'>User</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile' aria-labelledby='navbarDropdown'>
        <li className='dropdown-header'>
          <h6 className='custom-text'>James</h6>
          <span>Developer</span>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a className='dropdown-item d-flex align-items-center' href='users-profile.html'>
            <i className='bi bi-person'></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a className='dropdown-item d-flex align-items-center' href='account-settings.html'>
            <i className='bi bi-gear'></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a className='dropdown-item d-flex align-items-center' href='pages-faq.html'>
            <i className='bi bi-question-circle'></i>
            <span>Need Help?</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a className='dropdown-item d-flex align-items-center' href='#'>
            <i className='bi bi-box-arrow-right'></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
