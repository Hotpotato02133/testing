import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id='footer' className='footer'>
        <div className='copyright'>
            &copy; Copyright{ ' ' }
            <strong>
                <span>ORO Business Group</span>
            </strong>
            . All Rights Reserved
        </div>
        <div className="credits">
            Developed by <a href='#'>ORO Dev Team</a>
        </div>
    </footer>
  );
}

export default Footer
