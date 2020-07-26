import React from "react";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import Logo from "../../image/Logo/Logo.png";
import Sun from "../../image/Sun/sun_PNG13416.png"
import Moon from '../../image/Moon/Moon.png'
import {SearchResultsContext} from "../../context/SearchResultsContext";
import {BrightThemeContext} from "../../context/BrightTheme";


import {user} from '../../constans/constans'
import {UserInfo} from "../user-info/UserInfo";

import './Header.scss'


 export function Header(props) {

    return (
        <SearchResultsContext.Consumer>
            {
                (value) => {
                    const {onSubmit, onSearchInfo} = value;
                    return (
                        <BrightThemeContext.Consumer>
                            {
                                (value) => {
                                    const {isBrightTheme, toggleTheme} = value;
                                    return (
                                        <div className={`may-header ${isBrightTheme && 'bright'}`}>
                                            <img src={Logo} className="may-header-logo"/>

                                                <form action="" method="post" className="search" onSubmit={onSubmit}>
                                                    <input type="search" name="" placeholder="Search" className="input"
                                                           onChange={onSearchInfo}/>

                                                <input type="submit" name="" value="" className="submit"/>
                                                </form>

                                            <div className='choose-theme'>
                                                <img src={Moon} className='choose-theme-img-moon'/>
                                                <label className="switch">

                                                    <input type="checkbox" onClick={toggleTheme}/>
                                                    <span className="slider round"></span>
                                                </label>
                                                <img src={Sun} className='choose-theme-img'/>
                                            </div>
                                            <UserInfo user={user}/>

                                        </div>

                                    )
                                }
                            }
                        </BrightThemeContext.Consumer>
                    )
                }
            }

        </SearchResultsContext.Consumer>
    )
}

