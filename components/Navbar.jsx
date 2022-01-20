import React, {useContext, useRef} from 'react';
import Image from 'next/image';
import vllazniaLogo from '../public/images/vllazniaLogo.png';
import {Brand, user, img, icon, navbar, content, loginBtn, shower, navLink, overMenu, navList, navlink, loginBtnOver, overMenuContent, Languages} from './Navbar.module.css';
import { NavButton } from '.';
import { OpenMenu } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { NavbarContext } from '../contexts/NavbarContext';

const Navbar = () => {

    const {navIs, setNav} = useContext(NavbarContext);

    return (
        <nav className={navbar}>
            <NavButton iconState={navIs}/>
            <div className={content}>
                <div className={Brand}>
                    <Image className={img} src={vllazniaLogo} alt={vllazniaLogo} height="55px" width="55px"/>
                    <FontAwesomeIcon className={shower} icon={faChevronRight}/>
                    <p className={navLink}>Home</p>
                </div>
                <div className={user}>
                    <button className={loginBtn}>Login</button>
                    <FontAwesomeIcon className={icon} icon={faShoppingCart}/>
                    <FontAwesomeIcon className={icon} icon={faSearch}/>
                </div>
            </div>
            <OpenMenu navState={navIs}/>
        </nav>
    )
}

export default Navbar
