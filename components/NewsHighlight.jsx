import React, {useRef} from 'react';
import {section, box, newsItem1, sectionTitle, overlay, shortdesc, newsTitle, contain, containOther, title} from './NewsHighlight.module.css';

const NewsHighlight = () => {

    const a1 = useRef(null);
    const a2 = useRef(null);
    const a3 = useRef(null);
    const b1 = useRef(null);
    const b2 = useRef(null);
    const b3 = useRef(null);
    const divToCancel = useRef(null)

    const news = [{
        url: "https://media.sot.com.al/sot.com.al/media3/-800-0-60752acb5e658.jpg",
        short: "After 1-1 draw against kukesi",
        title: "Training has been made more intensive for the next game",
        nr: a1,
        anNumb: b1
    },
    {
        url: "https://fshf.org/wp-content/uploads/2021/05/3C4969A7-2DBF-4BE9-9040-A6784E54A646.jpeg",
        short: "Winning the Cup Final",
        title: "Being triumphant in Tirana gives more motivation to players",
        nr: a2,
        anNumb: b2
    },
    {
        url: "https://www.supersport.al/wp-content/uploads/2021/12/vllaznia-kukesi-1.png",
        short: "After 1-1 draw against kukesi",
        title: "Training has been made more intensive for the next game",
        nr: a3,
        anNumb: b3
    }];

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
                {news.map((newa, index) => (
                    <div key={index} style={{backgroundImage: `url(${newa.url})`}} onMouseOver={()=> over(newa.nr)} onMouseLeave={()=>leave(newa.nr)} className={newsItem1}>
                        <div ref={newa.nr} className={overlay}>
                            <div className={contain}>
                                <p className={shortdesc}>{newa.short}</p>
                                <p className={newsTitle}>{newa.title}</p>
                            </div>
                        </div>
                        <div ref={newa.anNumb} className={containOther}>
                            <div className={title}>
                                <p className={shortdesc}>{newa.short}</p>
                                <p className={newsTitle}>{newa.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewsHighlight
