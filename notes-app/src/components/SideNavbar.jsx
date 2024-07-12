import React from 'react';
import MainPage from './MainPage';
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block sidebar bg-primary-subtle" style={{height:'89vh'}}>
                    <div className="position-sticky">
                        <ul className="nav flex-column pt-2">
                            <li className="nav-item pt-2">
                                <NavLink className="nav-link active" to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item pt-2">
                                <NavLink className="nav-link" to="/usernotes">Notes</NavLink>
                            </li>
                            <li className="nav-item pt-2">
                                <a className="nav-link" href="#">Reminder</a>
                            </li>
                            <li className="nav-item pt-2">
                                <a className="nav-link" href="#">Edit Label</a>
                            </li>
                            <li className="nav-item pt-2">
                                <a className="nav-link" href="#">Archive/Bin</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2">
                    <MainPage />
                </main>
            </div>
        </div>
    );
}

export default SideNavbar;
