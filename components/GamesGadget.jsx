import React from 'react';
import vllaznia from '../public/images/vllazniaLogo.png';
import tirana from '../public/images/kFTiranaLogo.png';
import laci from '../public/images/laciKf.png'
import partizani from '../public/images/partizaniFk.png';
import Image from 'next/image';
import { Carousel } from '@trendyol-js/react-carousel';
import {container, gameBox, emblems, scoreOrDate, halfTimeOrTime, carousel} from './GamesGadget.module.css';

const GamesGadget = () => {
    return (
        <div className={container}>
            <Carousel className={carousel} show={9} slide={3} swiping={true}>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                        <Image height={"60px"} width={"60px"} src={partizani} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>1</span> - <span>1</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(1:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={tirana} />
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>0</span> - <span>2</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(0:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                        <Image height={"60px"} width={"60px"} src={laci} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>1</span> - <span>0</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(1:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                        <Image height={"60px"} width={"60px"} src={partizani} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>1</span> - <span>1</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(1:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={tirana} />
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>0</span> - <span>2</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(0:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                        <Image height={"60px"} width={"60px"} src={laci} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>1</span> - <span>0</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(1:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                        <Image height={"60px"} width={"60px"} src={partizani} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>1</span> - <span>1</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(1:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={tirana} />
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>0</span> - <span>2</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(0:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                        <Image height={"60px"} width={"60px"} src={laci} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>1</span> - <span>0</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(1:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                        <Image height={"60px"} width={"60px"} src={partizani} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>1</span> - <span>1</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(1:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={tirana} />
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>0</span> - <span>2</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(0:0)</p>
                    </div>
                </div>
                <div className={gameBox}>
                    <div className={emblems}>
                        <Image height={"60px"} width={"60px"} src={vllaznia} />
                        <Image height={"60px"} width={"60px"} src={laci} />
                    </div>
                    <div className={scoreOrDate}>
                        <p><span>1</span> - <span>0</span></p>
                    </div>
                    <div className={halfTimeOrTime}>
                        <p>(1:0)</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default GamesGadget
