import React from 'react';
import {section, videoCard, image, cardTitle, cardDesc, videoIcon, sectionTitle, divUp} from './VllazniaTv.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import store from '../redux/store';

const VllazniaTv = () => {

    store.dispatch({
        type: "GETVIDEOS",
    });

    const {videos} = store.getState();

    return (
        <div className={divUp}>
            <p className={sectionTitle}>Vllaznia TV+</p>
            <div className={section}>
                {videos.map((video, index)=> index < 4 && 
                    <div key={index} className={videoCard}>
                        <Link href="https://fcbayern.com/en">
                            <div>
                                <div className={image} style={{backgroundImage: `url(${video.node.videImage.url})`}}>
                                    <FontAwesomeIcon className={videoIcon} icon={faPlayCircle}/>
                                </div>
                                <p className={cardTitle}>{video.node.title}</p>
                                <p className={cardDesc}>{video.node.description}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VllazniaTv
