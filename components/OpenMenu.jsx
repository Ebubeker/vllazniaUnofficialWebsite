import React, {useRef, useEffect, useContext, useState} from 'react';
import {overlay, overMenu, overMenuClose, navList, navlink, loginBtnOver, overMenuContent, Languages, image, iconTimes, navLinkArrow, whiteMenu, menuTitle, underTitle, whiteMenuList, whiteMenuLink, whiteContainer, rightArrowIcon, whiteMenuOut} from './OpenMenu.module.css';
import Image from 'next/image';
import vllazniaName from '../public/images/vllazniaName.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavbarContext } from '../contexts/NavbarContext';
import { NavbarData } from '../public/static/navbarData';

const OpenMenu = () => {

    const [currentWhiteElement, setCurrentWhiteElement] = useState("Teams");

    const menu = useRef(null);
    const whitemen = useRef(null);
    const sidwayMenu = useRef(null);
    const [count, setCount] = useState(0);
    const {navIs, setNav} = useContext(NavbarContext);
    
    const closeNav = () => {
        setNav(true);
    } 

    const changetheWhiteMenu = (navbarwhit)=>{
        setCurrentWhiteElement(navbarwhit);
    }

    useEffect(() => {
        if(count === 0){
            menu.current.style.display = "none";
            setCount(1);
        }else if(navIs === true){
            sidwayMenu.current.className = overMenuClose;
            whitemen.current.className = whiteMenuOut;
            setTimeout(() => {
                menu.current.style.display = "none";
            }, 450);
        }else if(navIs === false){
            sidwayMenu.current.className = overMenu;
            whitemen.current.className = whiteMenu;
            menu.current.style.display = "block";
        }
    }, [navIs])

    return (
        <div ref={menu} className={overlay}>
            <div ref={sidwayMenu} className={overMenu}>
                <FontAwesomeIcon onClick={closeNav} className={iconTimes} icon={faTimes}/>
                <div style={{marginTop: "20px"}} className={overMenuContent}>
                    <Image width={'200px'} height={'60px'} className={image} src={vllazniaName}/>
                </div>
                <ul className={navList}>
                    {NavbarData.map((navIt)=>(
                        <li key={navIt.name} onMouseOver={()=>changetheWhiteMenu(navIt.name)} className={navlink}>{navIt.name} <FontAwesomeIcon className={navLinkArrow} icon={faChevronRight}/></li>
                    ))}
                </ul>
                <div className={overMenuContent}>
                    <button className={loginBtnOver}>Login</button>
                    <p className={Languages}><span>Albanian</span> | <span>English</span></p>
                </div>
            </div>  
            <div ref={whitemen} className={whiteMenu}>
                    {NavbarData.map((navIt, index)=>{
                        if(currentWhiteElement === navIt.name){
                            return(
                                <div key={index} className={whiteContainer}>
                                    <div className={menuTitle}>
                                        <p>{navIt.name}</p>
                                    </div>
                                    {navIt.content.map((navcont, index)=>(
                                        <div key={index}>
                                            <p className={underTitle}>{navcont.title} <FontAwesomeIcon className={rightArrowIcon} icon={faArrowRight} /></p>
                                            <ul className={whiteMenuList}>
                                                {navcont.content.map((conte, index)=>(
                                                    <li key={index} className={whiteMenuLink}>{conte}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    })}
            </div>
        </div>
    )
}

export default OpenMenu
