import React from 'react';
import './pageTitle.css';


function PageTitle({ page }) {
    return (
      <div className="pagetitle">
          <h1>{page}</h1>
          <nav>
              <button className='nav-button active'>POS Jewelry</button>
              <button className='nav-button'>ORO Payroll</button>
          </nav>
      </div>
    );
}

export default PageTitle;
