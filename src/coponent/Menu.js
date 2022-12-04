import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {


    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Menu recherche
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="blog"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;