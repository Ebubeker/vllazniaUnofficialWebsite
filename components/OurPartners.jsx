import React from 'react';
import {section, title, partners, image} from './OurPartners.module.css';
import Image from 'next/image';
import adidas from '../public/images/adidas.png';
import samsung from '../public/images/samsung.png';

const OurPartners = () => {
    return (
        <div className={section}>
            <div className={title}>
                <p>Our Partners</p>
            </div>
            <div className={partners}>
                <Image className={image} height={"100px"} width={"130px"} src={adidas}></Image>
                <Image className={image} height={"100px"} width={"120px"} src={samsung}></Image>
            </div>
        </div>
    )
}

export default OurPartners
