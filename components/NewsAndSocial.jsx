import React from 'react';
import {section, news, social, sideTitle, newsCard, newsImage, gridnews, newsContent, newsType, newsTitle, galleryContent, galleryItem} from './NewsAndSocial.module.css';
import Link from 'next/link';

const NewsAndSocial = () => {
    return (
        <div className={section}>
            <div className={news}>
                <p className={sideTitle}>News</p>
                <div className={gridnews}>
                    <Link href={"/"}>
                        <div className={newsCard}>
                            <div className={newsImage}></div>
                            <div className={newsContent}>
                                <p className={newsType}>Friendly</p>
                                <p className={newsTitle}>Vllaznia played yesterday against Terbuni</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className={newsCard}>
                            <div className={newsImage}></div>
                            <div className={newsContent}>
                                <p className={newsType}>Friendly</p>
                                <p className={newsTitle}>Vllaznia played yesterday against Terbuni</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className={newsCard}>
                            <div className={newsImage}></div>
                            <div className={newsContent}>
                                <p className={newsType}>Friendly</p>
                                <p className={newsTitle}>Vllaznia played yesterday against Terbuni</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className={newsCard}>
                            <div className={newsImage}></div>
                            <div className={newsContent}>
                                <p className={newsType}>Friendly</p>
                                <p className={newsTitle}>Vllaznia played yesterday against Terbuni</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className={newsCard}>
                            <div className={newsImage}></div>
                            <div className={newsContent}>
                                <p className={newsType}>Friendly</p>
                                <p className={newsTitle}>Vllaznia played yesterday against Terbuni</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className={newsCard}>
                            <div className={newsImage}></div>
                            <div className={newsContent}>
                                <p className={newsType}>Friendly</p>
                                <p className={newsTitle}>Vllaznia played yesterday against Terbuni</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className={newsCard}>
                            <div className={newsImage}></div>
                            <div className={newsContent}>
                                <p className={newsType}>Friendly</p>
                                <p className={newsTitle}>Vllaznia played yesterday against Terbuni</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={social}>
                <p className={sideTitle}>Gallery</p>
                <div className={galleryContent}>
                    <div className={galleryItem}>
                        <p>12th of January - Before Tirana game</p>
                    </div>
                    <div className={galleryItem}>
                        <p>12th of January - Before Tirana game</p>
                    </div>
                    <div className={galleryItem}>
                        <p>12th of January - Before Tirana game</p>
                    </div>
                    <div className={galleryItem}>
                        <p>12th of January - Before Tirana game</p>
                    </div>
                    <div className={galleryItem}>
                        <p>12th of January - Before Tirana game</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsAndSocial
