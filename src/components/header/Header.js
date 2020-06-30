import React from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../../image/Logo.png'
import {links} from "../../constans/constans";

import './Header.scss'

export function Header (props){


    return(
        <div className="may-header">
            <img src={Logo} className="may-header-logo" />

            <div className="may-header-links-wrapper">
                {
                    links.map(item => {
                        return  (
                            <div  key={item.url}>
                                <NavLink to={item.url} activeClassName="active" className="may-header-links-wrapper-link nav-link">{item.name}</NavLink>
                            </div>
                        )
                    })
                }
            </div>

            <form action="" method="post" className="search">
                <input type="search" name="" placeholder="Search" className="input"/>
                <input type="submit" name="" value="" className="submit"/>
            </form>
        </div>
    )
}