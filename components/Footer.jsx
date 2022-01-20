import React from 'react';
import {section, sponsorship, content, contentText, socialMedia, smallMenu, icon} from './Footer.module.css';
import { OurPartners } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={section}>
        <div className={sponsorship}>
            <OurPartners />
        </div>
        <div className={content}>
            <div className={contentText}>
                <p>Club Football Vllaznia Shkoder</p>
                <p>The oldest team in Albania</p>
                <p>4012 Shkoder, Albania</p>
            </div>
            <div className={contentText}>
                <p>+355 69 345 1234</p>
                <p>Free from all costs</p>
                <p>helping@vllazniaTeam.com</p>
            </div>
            <div className={contentText}>
                <p>The stadium opens</p>
                <p>2 to 3 hours before the</p>
                <p>game starts</p>
            </div>
        </div>
        <div className={socialMedia}>
            <FontAwesomeIcon className={icon} icon={faFacebookF}/>
            <FontAwesomeIcon className={icon} icon={faInstagram}/>
            <FontAwesomeIcon className={icon} icon={faTwitter}/>
            <FontAwesomeIcon className={icon} icon={faYoutube}/>
        </div>
        <div className={smallMenu}>
            <Link href="beker-dev.vercel.app">
                <p>&copy; 2022 Ebubeker Rexha</p>
            </Link>
            <Link href="beker-dev.vercel.app">
                <p>Schedule</p>
            </Link>
            <Link href="beker-dev.vercel.app">
                <p>Teams</p>
            </Link>
            <Link href="beker-dev.vercel.app">
                <p>News</p>
            </Link>
            <Link href="beker-dev.vercel.app">
                <p>Gallery</p>
            </Link>
        </div>
    </div>
  );
};

export default Footer;
