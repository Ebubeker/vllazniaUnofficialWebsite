import React from 'react';
import {CardList, CardBox, images, title, cardContent, cardTitle, cardPrice, btn, section} from './ShopGadget.module.css';
import Image from 'next/image';
import HomeKit from '../public/images/vllazniaKit.jpg';

const ShopGadget = ({products}) => {
  return (
    <div className={section}>
      <p className={title}>Vllaznia Most Buyed Products</p>
      <div className={CardList}>
        {products.map((prod)=>(
            <div className={CardBox}>
                <div className={images}>
                    <img src={prod.node.prodImage.url} />
                </div>
                <div className={cardContent}>
                    <p className={cardTitle}>{prod.node.title}</p>
                    <p className={cardPrice}>{prod.node.prize}$</p>
                    <button className={btn}>Buy!</button>
                </div>
            </div>

        ))}
        {/* <div className={CardBox}>
            <div className={images}>
                <Image src={HomeKit} height={'300px'} width={'230px'}/>
            </div>
            <div className={cardContent}>
                <p className={cardTitle}>Vllaznia Home Kit</p>
                <p className={cardPrice}>88$</p>
                <button className={btn}>Buy!</button>
            </div>
        </div>
        <div className={CardBox}>
            <div className={images}>
                <Image src={HomeKit} height={'300px'} width={'230px'}/>
            </div>
            <div className={cardContent}>
                <p className={cardTitle}>Vllaznia Home Kit</p>
                <p className={cardPrice}>88$</p>
                <button className={btn}>Buy!</button>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default ShopGadget;
