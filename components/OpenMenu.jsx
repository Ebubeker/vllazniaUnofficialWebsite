import React, {useRef, useEffect, useContext, useState} from 'react';
import {overlay, overMenu, overMenuClose, navList, navlink, loginBtnOver, overMenuContent, Languages, image, iconTimes, navLinkArrow, whiteMenu, menuTitle, underTitle, whiteMenuList, whiteMenuLink, whiteContainer, rightArrowIcon, whiteMenuOut, arrowToCloseWhite} from './OpenMenu.module.css';
import Image from 'next/image';
import vllazniaName from '../public/images/vllazniaName.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavbarContext } from '../contexts/NavbarContext';
import { NavbarData } from '../public/static/navbarData';
import Link from 'next/link';

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
        whitemen.current.style.display = "block";
        setCurrentWhiteElement(navbarwhit);
    }

    const reverseWhiteMenu = () => {
        if(whitemen.current.style.display === "block"){
            whitemen.current.style.display = "none";
        }
    }

    const turnOff = () => {
        setNav(true)
    }

    useEffect(() => {
        if(count === 0){
            menu.current.style.display = "none";
            setCount(1);
        }else if(navIs === true){
            sidwayMenu.current.className = overMenuClose;
            whitemen.current.className = whiteMenuOut;
            // setCount(0);
            setTimeout(() => {
                menu.current.style.display = "none";
            }, 450);
        }else if(navIs === false){
            if(count === 1){
                sidwayMenu.current.className = overMenu;
                whitemen.current.style.display = "none";
                menu.current.style.display = "block";
                setCount(2)
            }else{
                sidwayMenu.current.className = overMenu;
                whitemen.current.className = whiteMenu;
                // whitemen.current.style.display = "block";
                menu.current.style.display = "block";
            }
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
                        <li key={navIt.name} onClick={()=>changetheWhiteMenu(navIt.name)} onMouseOver={()=>changetheWhiteMenu(navIt.name)} className={navlink}>{navIt.name} <FontAwesomeIcon className={navLinkArrow} icon={faChevronRight}/></li>
                    ))}
                </ul>
                <div className={overMenuContent}>
                    <button className={loginBtnOver}>Login</button>
                    <p className={Languages}><span>Albanian</span> | <span>English</span></p>
                </div>
            </div>  
            <div ref={whitemen} className={whiteMenu}>
                <div onClick={reverseWhiteMenu} className={arrowToCloseWhite}>X close</div>
                    {NavbarData.map((navIt, index)=>{
                        if(currentWhiteElement === navIt.name){
                            return(
                                <div key={index} className={whiteContainer}>
                                    <div className={menuTitle}>
                                        <Link href={`/${navIt.branch}`}>
                                            <p onClick={turnOff}>{navIt.name}</p>
                                        </Link>
                                    </div>
                                    {navIt.content.map((navcont, index)=>(
                                        <div key={index}>
                                                <Link href={`/${navIt.branch}`}>
                                                    <p onClick={turnOff} className={underTitle}>{navcont.title} <FontAwesomeIcon className={rightArrowIcon} icon={faArrowRight} /></p>
                                                </Link>
                                                <ul className={whiteMenuList}>
                                                    {navcont.content.map((conte, index)=>(
                                                        <Link key={index} href={`/${navIt.branch}`}>
                                                            <li onClick={turnOff}  className={whiteMenuLink}>{conte}</li>
                                                        </Link>
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
