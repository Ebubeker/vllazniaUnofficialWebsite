import React, {useState, useEffect} from 'react';
import {section, news, social, sideTitle, newsCard, newsImage, gridnews, newsContent, newsType, newsTitle, galleryContent, galleryItem} from './NewsAndSocial.module.css';
import Link from 'next/link';

const NewsAndSocial = ({gallery, news}) => {

    const [newses, setNews] = useState([]);

    const {edges} = gallery;

    useEffect(() => {
      setNews(news.edges);
    }, []);

    return (
        <div className={section}>
            <div className={news}>
                <p className={sideTitle}>News</p>
                <div className={gridnews}>
                    {newses.map((news, i)=>(
                        <Link key={i} href={"/"}>
                            <div className={newsCard}>
                                <div className={newsImage} style={{backgroundImage: `url(${news.node.featuredImage.url})`}}></div>
                                <div className={newsContent}>
                                    <p className={newsType}>{news.node.title}</p>
                                    <p className={newsTitle}>{news.node.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={social}>
                <p className={sideTitle}>Gallery</p>
                <div className={galleryContent}>
                    {edges.map(gall => (
                        <div className={galleryItem} style={{backgroundImage: `url("${gall.node.photo.url}")`}}>
                            <p>{gall.node.photoImage}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsAndSocial
