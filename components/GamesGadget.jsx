import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from '@trendyol-js/react-carousel';
import {container, gameBox, emblems, scoreOrDate, halfTimeOrTime, carousel} from './GamesGadget.module.css';


const GamesGadget = ({width, matches}) => {

    const [show, setShow] = useState(null);
    const {edges} = matches;
    
    useEffect(() => {
        if(width > 1200){
            setShow(6);
            console.log('hi')
        }else if(width <= 1200 && width > 834){
            setShow(4);
        }else if(width <= 834 && width > 450){
            setShow(2);
        }else if(width < 450){
            setShow(1);
        }
    }, [show]);

    return (
        <div className={container}>
            <Carousel className={carousel} show={show} infinite={false} slide={1} >
                {edges.map((game, i)=>(
                    <div key={i} className={gameBox}>
                        <div className={emblems}>
                            <img  src={game.node.homeEmblem.url} />
                            <img  src={game.node.awayEmblem.url} />
                        </div>
                        <div className={scoreOrDate}>
                            {game.node.gameDate ? <p>{game.node.gameDate.split("T")[1].split("+")[0]}</p> : <p><span>{game.node.homeGoals}</span> - <span>{game.node.awayGoals}</span></p>}
                        </div>
                        <div className={halfTimeOrTime}>
                            {game.node.gameDate ? <p>{game.node.gameDate.split("T")[0]}</p> : <p>({game.node.halfTimeHome}:{game.node.halfTimeAway})</p>}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default GamesGadget;

