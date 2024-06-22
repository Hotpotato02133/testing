import React, { useState, useEffect, useRef } from 'react';
import './sideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (window.innerWidth <= 768 && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const toggleSubMenu = (event, menu) => {
        event.preventDefault();  // Prevent the default anchor click behavior
        setOpenSubMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    // const toggleSubMenu = (event, menuName) => {
    //     event.preventDefault();
    //     setOpenSubMenus({
    //         ...openSubMenus,
    //         [menuName]: !openSubMenus[menuName]
    //     });
    // };

    const preventDefaultScroll = (event) => {
        event.preventDefault();
    };

    return (
        <aside id='sidebar' className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
            <ul className='sidebar-nav' id='sidebar-nav'>
                <li className='sidebar-nav-item'>
                    <a className='nav-link' href='/'>
                        <i className="bi bi-speedometer2"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <hr className="hr" />

                <li className='sidebar-nav-item'>
                    <a
                        className={`nav-link ${openSubMenus['jewelry-nav'] ? '' : 'collapsed'}`}
                        onClick={(event) => toggleSubMenu(event, 'jewelry-nav')}
                        href='#'
                    >
                        <i className="bi bi-gem"></i>
                        <span>Jewelry</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id='jewelry-nav'
                        className={`nav-content collapse ${openSubMenus['jewelry-nav'] ? 'show' : ''}`}
                    >
                        {/* <li>
                            <a href='#' onClick={preventDefaultScroll}>
                                <i className="bi bi-people"></i>
                                <span>Products</span>
                            </a>
                        </li> */}
                        <li>
                            <a
                                className={`nav-link ${openSubMenus['profile-nav'] ? '' : 'collapsed'}`}
                                onClick={(event) => toggleSubMenu(event, 'profile-nav')}
                                href='#'
                            >
                                <i className="bi bi-x-diamond"></i>
                                <span>Profile</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id='profile-nav'
                                className={`nav-content collapse ${openSubMenus['profile-nav'] ? 'show' : ''}`}
                            >
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-boxes"></i>
                                        <span>Products</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-x-diamond"></i>
                                        <span>Classification</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-gem'></i>
                                        <span>Karats</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-credit-card'></i>
                                        <span>Service Fee</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-boxes'></i>
                                        <span>Supplier</span>
                                    </a>
                                </li>
                                {/* Add more third-level menu items here */}
                            </ul>
                        </li>
                        <li>
                            <a href='#' onClick={preventDefaultScroll}>
                                <i className="bi bi-piggy-bank"></i>
                                <span>Discount</span>
                            </a>
                        </li>

                        <li>
                            <a
                                className={`nav-link ${openSubMenus['entry-nav'] ? '' : 'collapsed'}`}
                                onClick={(event) => toggleSubMenu(event, 'entry-nav')}
                                href='#'
                            >
                                <i className="bi bi-laptop"></i>
                                <span>Entry</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id='entry-nav'
                                className={`nav-content collapse ${openSubMenus['entry-nav'] ? 'show' : ''}`}
                            >
                                {/* <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-exclamation-diamond"></i>
                                        <span>Issue</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-arrow-90deg-left"></i>
                                        <span>Transfer to another branch</span>
                                    </a>
                                </li> */}
                                <li>
                                    <a
                                        className={`nav-link ${openSubMenus['purchases-level4-nav'] ? '' : 'collapsed'}`}
                                        onClick={(event) => toggleSubMenu (event, 'purchases-level4-nav')}
                                        href='#'
                                    >
                                        <i className='bi bi-bag'></i>
                                        <span>Purchases</span>
                                        <i className={`bi bi-chevron-down ms-auto ${openSubMenus['purchases-level4-nav'] ? '' : 'collapsed'}`}></i>
                                    </a>
                                    <ul
                                        id='purchases-level4-nav'
                                        className={`nav-content collapse ${openSubMenus['purchases-level4-nav'] ? 'show' : ''}`}
                                    >
                                        <li>
                                            <a href='#' onClick={preventDefaultScroll}>
                                                <i className='bi bi-cart2'></i>
                                                <span>Order</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' onClick={preventDefaultScroll}>
                                                <i className='bi bi-receipt'></i>
                                                <span>Invoice</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/* Add more third-level menu items here */}
                                <li>
                                    <a
                                        className={`nav-link ${openSubMenus['stockwithdrawal-level4-nav'] ? '' : 'collapsed'}`}
                                        onClick={(event) => toggleSubMenu (event, 'stockwithdrawal-level4-nav')}
                                        href='#'
                                    >
                                        <i className='bi bi-arrow-left-right'></i>
                                        <span>Stock Withdrawal</span>
                                        <i className={`bi bi-chevron-down ms-auto ${openSubMenus['stockwithdrawal-level4-nav'] ? '' : 'collapsed'}`}></i>
                                    </a>
                                    <ul
                                        id='stockwithdrawal-level4-nav'
                                        className={`nav-content collapse ${openSubMenus['stockwithdrawal-level4-nav'] ? 'show' : ''}`}
                                    >
                                        <li>
                                            <a href='#' onClick={preventDefaultScroll}>
                                                <i className='bi bi-exclamation-diamond'></i>
                                                <span>Issue</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' onClick={preventDefaultScroll}>
                                                <i className='bi bi-arrow-return-left'></i>
                                                <span>Transfer to Another Branch</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a
                                className={`nav-link ${openSubMenus['phyinventory-nav'] ? '' : 'collapsed'}`}
                                onClick={(event) => toggleSubMenu(event, 'phyinventory-nav')}
                                href='#'
                            >
                                <i className="bi bi-boxes"></i>
                                <span>Physical Inventory</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id='phyinventory-nav'
                                className={`nav-content collapse ${openSubMenus['phyinventory-nav'] ? 'show' : ''}`}
                            >
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-upc-scan"></i>
                                        <span>Scan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-calendar-check"></i>
                                        <span>Set # of days</span>
                                    </a>
                                </li>
                                {/* Add more third-level menu items here */}
                                {/* <li>
                                    
                                    <a
                                        className={`nav-link ${openSubMenus['phyinventory-level4-nav'] ? '' : 'collapsed'}`}
                                        onClick={(event) => toggleSubMenu (event, 'phyinventory-level4-nav')}
                                        href='#'
                                    >
                                        <i className='bi bi-box'></i>
                                        <span>Level 4 Menu</span>
                                        <i className='bi bi-chevron-down ms-auto'></i>
                                    </a>
                                    <ul
                                        id='phyinventory-level4-nav'
                                        className={`nav-content collapse ${openSubMenus['phyinventory-level4-nav'] ? 'show' : ''}`}
                                    >
                                        <li>
                                            <a href='#' onClick={preventDefaultScroll}>
                                                <i className='bi bi-box'></i>
                                                <span>Level 4A Item</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' onClick={preventDefaultScroll}>
                                                <i className='bi bi-box'></i>
                                                <span>Level 4B Item</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>

                        <li>
                            <a
                                className={`nav-link ${openSubMenus['sidereports-nav'] ? '' : 'collapsed'}`}
                                onClick={(event) => toggleSubMenu(event, 'sidereports-nav')}
                                href='#'
                            >
                                <i className="bi bi-printer"></i>
                                <span>Reports</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id='sidereports-nav'
                                className={`nav-content collapse ${openSubMenus['sidereports-nav'] ? 'show' : ''}`}
                            >
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-graph-up"></i>
                                        <span>Sales</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-wallet2"></i>
                                        <span>Installment (Layaway)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-clipboard-check'></i>
                                        <span>Consolidated</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`nav-link ${openSubMenus['reportsinv-level4-nav'] ? '' : 'collapsed'}`}
                                        onClick={(event) => toggleSubMenu (event, 'reportsinv-level4-nav')}
                                        href='#'
                                    >
                                        <i className='bi bi-boxes'></i>
                                        <span>Inventory</span>
                                        <i className={`bi bi-chevron-down ms-auto ${openSubMenus['reportsinv-level4-nav'] ? '' : 'collapsed'}`}></i>
                                    </a>
                                    <ul
                                        id='reportsinv-level4-nav'
                                        className={`nav-content collapse ${openSubMenus['reportsinv-level4-nav'] ? 'show' : ''}`}
                                    >
                                        <li>
                                            <a href='#' onClick={preventDefaultScroll}>
                                                <i className='bi bi-collection'></i>
                                                <span>Daily Physical</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' onClick={preventDefaultScroll}>
                                                <i className='bi bi-clipboard'></i>
                                                <span>Detailed Listing</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-credit-card'></i>
                                        <span>Credit Card</span>
                                    </a>
                                </li>

                                {/* Part 2 of my Code */}
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-graph-up-arrow'></i>
                                        <span>Incentive Program (Flaps)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-search'></i>
                                        <span>Item Tracking</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-upc-scan'></i>
                                        <span>Barcode (Tag)</span>
                                    </a>
                                </li>

                                {/* Add more third-level menu items here */}
                            </ul>
                        </li>

                        <li>
                            <a
                                className={`nav-link ${openSubMenus['pointofsales-nav'] ? '' : 'collapsed'}`}
                                onClick={(event) => toggleSubMenu(event, 'pointofsales-nav')}
                                href='#'
                            >
                                <i className="bi bi-box"></i>
                                <span>Point-Of-Sales</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id='pointofsales-nav'
                                className={`nav-content collapse ${openSubMenus['pointofsales-nav'] ? 'show' : ''}`}
                            >
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-card-checklist"></i>
                                        <span>Sales List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-list-check"></i>
                                        <span>Item List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-list-check'></i>
                                        <span>Layaway List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-list-check'></i>
                                        <span>Branch List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-people'></i>
                                        <span>Account (Branch)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-people'></i>
                                        <span>Accounts (Senior Citizen)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-people'></i>
                                        <span>Accounts (ORO Gold Card)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-arrow-left-right'></i>
                                        <span>Returns & Exchange</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-cash'></i>
                                        <span>Funding & Withdrawal</span>
                                    </a>
                                </li>
                                {/* Add more third-level menu items here */}
                            </ul>
                        </li>

                        <li>
                            <a href='#' onClick={preventDefaultScroll}>
                                <i className="bi bi-arrow-repeat"></i>
                                <span>Sync to Firebase</span>
                            </a>
                        </li>

                    </ul>
                </li>

                {/* Telecom Menu */}
                <li className='sidebar-nav-item'>
                    <a
                        className={`nav-link ${openSubMenus['telecom-nav'] ? '' : 'collapsed'}`}
                        onClick={(event) => toggleSubMenu(event, 'telecom-nav')}
                        href='#'
                    >
                        <i className="bi bi-phone"></i>
                        <span>Telecom</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id='telecom-nav'
                        className={`nav-content collapse ${openSubMenus['telecom-nav'] ? 'show' : ''}`}
                    >
                        <li>
                            <a href='#' onClick={preventDefaultScroll}>
                                <i className="bi bi-people"></i>
                                <span>Products</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' onClick={preventDefaultScroll}>
                                <i className="bi bi-building-check"></i>
                                <span>Discount</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link ${openSubMenus['telecom-custom-nav'] ? '' : 'collapsed'}`}
                                onClick={(event) => toggleSubMenu(event, 'telecom-custom-nav')}
                                href='#'
                            >
                                <i className="bi bi-box"></i>
                                <span>Physical Inventory</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id='telecom-custom-nav'
                                className={`nav-content collapse ${openSubMenus['telecom-custom-nav'] ? 'show' : ''}`}
                            >
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-box"></i>
                                        <span>Physical Inventory</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-bag"></i>
                                        <span>Set Inventory # of days</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-bag'></i>
                                        <span>Level 3A Menu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-bag'></i>
                                        <span>Level 3B Menu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-bag'></i>
                                        <span>Level 3C Menu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-bag'></i>
                                        <span>Level 3C Menu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className='bi bi-bag'></i>
                                        <span>Level 3D Menu</span>
                                    </a>
                                </li>
                                {/* Add more third-level menu items here */}
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* Drug Store Grocery */}
                <li className='sidebar-nav-item'>
                    <a
                        className={`nav-link ${openSubMenus['drugstore-nav'] ? '' : 'collapsed'}`}
                        onClick={(event) => toggleSubMenu(event, 'drugstore-nav')}
                        href='#'
                    >
                        <i className="bi bi-shop"></i>
                        <span>Drugstore</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id='drugstore-nav'
                        className={`nav-content collapse ${openSubMenus['drugstore-nav'] ? 'show' : ''}`}
                    >
                        <li>
                            <a href='#' onClick={preventDefaultScroll}>
                                <i className="bi bi-people"></i>
                                <span>Products</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' onClick={preventDefaultScroll}>
                                <i className="bi bi-building-check"></i>
                                <span>Discount</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link ${openSubMenus['drugstore-custom-nav'] ? '' : 'collapsed'}`}
                                onClick={(event) => toggleSubMenu(event, 'drugstore-custom-nav')}
                                href='#'
                            >
                                <i className="bi bi-box"></i>
                                <span>Physical Inventory</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id='drugstore-custom-nav'
                                className={`nav-content collapse ${openSubMenus['drugstore-custom-nav'] ? 'show' : ''}`}
                            >
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-box"></i>
                                        <span>Physical Inventory</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-bag"></i>
                                        <span>Set Inventory # of days</span>
                                    </a>
                                </li>
                                {/* Add more third-level menu items here */}
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* Foton */}
                <li className='sidebar-nav-item'>
                    <a
                        className={`nav-link ${openSubMenus['foton-nav'] ? '' : 'collapsed'}`}
                        onClick={(event) => toggleSubMenu(event, 'foton-nav')}
                        href='#'
                    >
                        <i className="bi bi-truck"></i>
                        <span>Foton</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id='foton-nav'
                        className={`nav-content collapse ${openSubMenus['foton-nav'] ? 'show' : ''}`}
                    >
                        <li>
                            <a href='#' onClick={preventDefaultScroll}>
                                <i className="bi bi-people"></i>
                                <span>Suppliers</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' onClick={preventDefaultScroll}>
                                <i className="bi bi-building-check"></i>
                                <span>Purchase Order</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link ${openSubMenus['foton-custom-nav'] ? '' : 'collapsed'}`}
                                onClick={(event) => toggleSubMenu(event, 'foton-custom-nav')}
                                href='#'
                            >
                                <i className="bi bi-box"></i>
                                <span>Physical Inventory</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id='foton-custom-nav'
                                className={`nav-content collapse ${openSubMenus['foton-custom-nav'] ? 'show' : ''}`}
                            >
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-box"></i>
                                        <span>Physical Inventory</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' onClick={preventDefaultScroll}>
                                        <i className="bi bi-bag"></i>
                                        <span>Set Inventory # of days</span>
                                    </a>
                                </li>
                                {/* Add more third-level menu items here */}
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;
