import React from 'react';
import {section, videoCard, image, cardTitle, cardDesc, videoIcon, sectionTitle, divUp} from './VllazniaTv.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

const VllazniaTv = () => {
    return (
        <div className={divUp}>
            <p className={sectionTitle}>Vllaznia TV+</p>
            <div className={section}>
                <div className={videoCard}>
                    <Link href="https://fcbayern.com/en">
                        <div>
                            <div className={image}>
                                <FontAwesomeIcon className={videoIcon} icon={faPlayCircle}/>
                            </div>
                            <p className={cardTitle}>Vllaznia vs Partizani</p>
                            <p className={cardDesc}>Vllaznia achieved to win the game by 2 to 1, whith goals scored by latifi</p>
                        </div>
                    </Link>
                </div>
                <div className={videoCard}>
                    <Link href="https://fcbayern.com/en">
                        <div>
                            <div className={image}>
                                <FontAwesomeIcon className={videoIcon} icon={faPlayCircle}/>
                            </div>
                            <p className={cardTitle}>Vllaznia vs Partizani</p>
                            <p className={cardDesc}>Vllaznia achieved to win the game by 2 to 1, whith goals scored by latifi</p>
                        </div>
                    </Link>
                </div>
                <div className={videoCard}>
                    <Link href="https://fcbayern.com/en">
                        <div>
                            <div className={image}>
                                <FontAwesomeIcon className={videoIcon} icon={faPlayCircle}/>
                            </div>
                            <p className={cardTitle}>Vllaznia vs Partizani</p>
                            <p className={cardDesc}>Vllaznia achieved to win the game by 2 to 1, whith goals scored by latifi</p>
                        </div>
                    </Link>
                </div>
                <div className={videoCard}>
                    <Link href="https://fcbayern.com/en">
                        <div>
                            <div className={image}>
                                <FontAwesomeIcon className={videoIcon} icon={faPlayCircle}/>
                            </div>
                            <p className={cardTitle}>Vllaznia vs Partizani</p>
                            <p className={cardDesc}>Vllaznia achieved to win the game by 2 to 1, whith goals scored by latifi</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VllazniaTv
