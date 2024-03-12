import React from 'react'
import './sideBar.css'

function SideBar() {
  return (
    <aside id='siderbar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>
            <li className='sidebar-nav-item'>
                <a className='nav-link' href='/'>
                    <i class="bi bi-grid"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <hr class="hr" />

            <li className='sidebar-nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target='#components-nav'
                    data-bs-toggle='collapse'
                    href='#'
                >
                    <i class="bi bi-gem"></i>
                    <span>Jewelry</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                    id='components-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='#'>
                            <i class="bi bi-gem"></i>
                            <span>Products</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-ticket-detailed"></i>
                            <span>Discount</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-box"></i>
                            <span>Physical Inventory</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-person"></i>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-boxes"></i>
                            <span>Stock Withdrawal</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-bag"></i>
                            <span>Purchases</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-laptop"></i>
                            <span>POS Branch</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-printer"></i>
                            <span>Reports</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className='sidebar-nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target='#tel-nav'
                    data-bs-toggle='collapse'
                    href='#'
                >
                    <i class="bi bi-phone"></i>
                    <span>Telecom</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                    id='tel-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='#'>
                            <i class="bi bi-boxes"></i>
                            <span>Suppliers</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-bag"></i>
                            <span>Purchase Order</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-truck"></i>
                            <span>Stock Arrival</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-phone"></i>
                            <span>Product</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-card-checklist"></i>
                            <span>Product List</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className='sidebar-nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target='#drug-nav'
                    data-bs-toggle='collapse'
                    href='#'
                >
                    <i class="bi bi-shop"></i>
                    <span>Drug Store & Grocery</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                    id='drug-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='#'>
                            <i class="bi bi-boxes"></i>
                            <span>Suppliers</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-person"></i>
                            <span>Customer</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-bag"></i>
                            <span>Purchase Order</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-truck"></i>
                            <span>Stock Arrival</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className='sidebar-nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target='#charts-nav'
                    data-bs-toggle='collapse'
                    href='#'
                >
                    <i class="bi bi-truck"></i>
                    <span>Foton</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                    id='charts-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='#'>
                            <i class="bi bi-truck"></i>
                            <span>Suppliers</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-person"></i>
                            <span>Customer</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-bag"></i>
                            <span>Purchase Order</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-truck"></i>
                            <span>Stock Arrival</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className='sidebar-nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target='#payroll-nav'
                    data-bs-toggle='collapse'
                    href='#'
                >
                    <i class="bi bi-credit-card"></i>
                    <span>Payroll</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                    id='payroll-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='#'>
                            <i class="bi bi-people"></i>
                            <span>ORO Employee List</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-card-checklist"></i>
                            <span>Attendance</span>
                        </a>
                    </li>
                </ul>
            </li>

            <hr class="hr" />

            <li className='sidebar-nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target='#settings-nav'
                    data-bs-toggle='collapse'
                    href='#'
                >
                    <i class="bi bi-gear"></i>
                    <span>Settings</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                    id='settings-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='#'>
                            <i class="bi bi-people"></i>
                            <span>User Accounts</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-building-check"></i>
                            <span>Branch List</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i class="bi bi-border-width"></i>
                            <span>Set weighing scale</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
  );
}

export default SideBar
