import React from 'react'
import './searchBar.css'

function SearchBar() {
  return (
    <div className='search-bar'>
        <div className="search-form d-flex align-items-center"
        method='POST'
        action='#'
        >
            <input
                type='text'
                name='query'
                id='search'
                placeholder='Search'
                title='Enter search keyword'
            />
            <button type='submit' title='Search'>
                <i class="bi bi-search"></i>
            </button>
        </div>
    </div>
  );
}

export default SearchBar
