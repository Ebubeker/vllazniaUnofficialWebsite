import Link from 'next/link';
import React, {useRef, useState, useEffect} from 'react';
import {section, box, newsItem1, sectionTitle, overlay, shortdesc, newsTitle, contain, containOther, title} from './NewsHighlight.module.css';
import store from '../redux/store';

const NewsHighlight = () => {
    store.dispatch({
        type: "GETNEWS",
    });

    const {news} = store.getState();

    const a1 = useRef(null);
    const a2 = useRef(null);
    const a3 = useRef(null);
    const b1 = useRef(null);
    const b2 = useRef(null);
    const b3 = useRef(null);
    const [counter, setCounter] = useState(0);

    const hoverThing = [
        {
        nr: a1,
        anNumb: b1
        },
        {
        nr: a2,
        anNumb: b2
        },
        {
        nr: a3,
        anNumb: b3
        }
    ];

    const over = (nr) => {
        if(nr === a1){
            a1.current.className = overlay;
            a1.current.style.display = "flex";
            b1.current.style.display = "none";
        }
        else if(nr === a2){
            a1.current.className = overlay;
            a2.current.style.display = "flex";
            b2.current.style.display = "none";
        }
        else if(nr === a3){
            a1.current.className = overlay;
            a3.current.style.display = "flex";
            b3.current.style.display = "none";
        }
    }

    const leave = (nr) => {
        if(nr === a1){
            a1.current.style.display = "none";
            b1.current.style.display = "flex";
        }
        else if(nr === a2){
            a2.current.style.display = "none";
            b2.current.style.display = "flex";
        }
        else if(nr === a3){
            a3.current.style.display = "none";
            b3.current.style.display = "flex";
        }
    }

    return (
        <div className={section}>
            <p className={sectionTitle}>Latest News</p>
            <div className={box}>
                {news ? news.map((newa, index) => index < 3 && (
                    <Link href={`/news/${newa.node.slug}`}>
                        <div key={index} style={{backgroundImage: `url(${newa.node.featuredImage.url})`}} onMouseOver={()=> over(hoverThing[index].nr)} onMouseLeave={()=>leave(hoverThing[index].nr)} className={newsItem1}>
                            <div ref={hoverThing[index].nr} className={overlay}>
                                <div className={contain}>
                                    <p className={shortdesc}>{newa.node.title}</p>
                                    <p className={newsTitle}>{newa.node.excerpt}</p>
                                </div>
                            </div>
                            <div ref={hoverThing[index].anNumb} className={containOther}>
                                <div className={title}>
                                    <p className={shortdesc}>{newa.node.title}</p>
                                    <p className={newsTitle}>{newa.node.excerpt}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )) : <p>loading</p>}
            </div>
        </div>
    )
}

export default NewsHighlight
