import React, {useRef, useEffect, useContext, useState} from 'react';
import {stripe, bar, stripeUnique, stripeUniqueOut, stripeOpen} from './NavButton.module.css';
import { NavbarContext } from '../contexts/NavbarContext';

const NavButton = () => {

    const unqStripe = useRef(null);
    const barsLines = useRef(null);
    const barIcon = useRef(null);
    const [count, setCount] = useState(0);
    const {navIs, setNav} = useContext(NavbarContext);

    const openNav = () => {
        setNav(false);
    }

    const over = ()=>{
        unqStripe.current.className = stripeUniqueOut;
    }

    const out = ()=>{
        unqStripe.current.className = stripeUnique;
    }

    useEffect(() => {
        if(count === 0){
            barIcon.current.style.display = "block";
            setCount(1);
        }
        else if(navIs === false){
            barIcon.current.style.display = "none";
        }else if(navIs === true){
            setTimeout(() => {
                barIcon.current.style.display = "block";
            }, 450);
        }
    }, [navIs]);

    return (
        <div ref={barIcon} onClick={openNav} onMouseOver={over} onMouseLeave={out} className={bar}>
            <div ref={barsLines} className={stripe}></div>
            <div ref={unqStripe} className={stripeUnique}></div>
            <div ref={barsLines} className={stripe}></div>
        </div>
    )
}

export default NavButton
