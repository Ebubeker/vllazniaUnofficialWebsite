import React, { useEffect,useState } from 'react';
import abissnet from '../public/images/abissnet-logo.png';
import Image from 'next/image';
import {section, overlay, competitionName, content, timeAndLoc, gameWeek, saying, countdown, count, notCount, Match, homeTeam, teamName, kickOf, awayTeam, image, time, kik, blueLine, redLine, latestNews, newsName, newsFromCoach, situationNews, imageFooter} from './FullScreenNextMatch.module.css';


const FullScreenNextMatch = ({matches}) => {
    
    let game = {};
    let counter = 0;
    matches.forEach(edge => {
        if(edge.node.gameDate !== null && counter === 0){
            game = edge;
            counter++;
        }
    });
    
    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const newYarsDate = new Date(game.node.gameDate);
            
            const totalSeconds = (newYarsDate - currentDate)/1000;
            
            setDays(Math.floor(totalSeconds / 3600 / 24));
            setHours(Math.floor(totalSeconds / 3600) % 24);
            setMinutes((Math.floor(totalSeconds / 60) % 3600) % 24);
            setSeconds(Math.floor(totalSeconds % 60));
        }, 1000);
        return () => clearInterval(interval);
        
      
    }, [seconds]);

    return (
        <div className={section}>
            <div className={overlay}>
                <div className={content}>
                    <div className={competitionName}>
                        <Image className={image} height={"65px"} width={"85px"} src={abissnet}/>
                        <p>Abissnet Superiore</p>
                    </div>
                    <div className={timeAndLoc}>
                        <p><span className={gameWeek}>{game.node.matchDayNr}</span>•<span>{game.node.stadium}</span></p>
                    </div>
                    <div className={saying}>
                        <p>An Away Game Agains Historical Rivals</p>
                    </div>
                    <div className={countdown}>
                        <p className={notCount}>Match Countdown</p>
                        <p className={count}>{days}:{hours}:{minutes}:{seconds}</p>
                    </div>
                    {/* Match */}
                    <div className={Match}>
                        <div className={homeTeam}>
                            <p className={teamName}>{game.node.homeTeam}</p>
                            <img className={image} src={game.node.homeEmblem.url}></img>
                        </div>
                        <div className={kickOf}>
                            <p className={kik}>Kickoff CET</p>
                            <p className={time}>{game.node.gameDate.split("T")[1].split("+")[0].split(":")[0]}:{game.node.gameDate.split("T")[1].split("+")[0].split(":")[1]}</p>
                        </div>
                        <div className={awayTeam}>
                            <img className={image} src={game.node.awayEmblem.url}></img>
                            <p className={teamName}>{game.node.awayTeam}</p>
                        </div>
                    </div>
                    {/* Match */}
                    <div className={latestNews}>
                        <div className={newsName}>
                            <p>Thomas Brdaric</p>
                        </div>
                        <div className={newsFromCoach}>
                            <p>&quot;We are going to the capital only to win this game, and we will.&quot;</p>
                        </div>
                        <div className={situationNews}>
                            <p>&quot;Seems like Air Albania will be full of supporters. Both teams are in a very good shape&quot;</p>
                        </div>
                    </div>
                </div>
                <div className={blueLine}>

                </div>
                <div className={redLine}>

                </div>
                <div className={imageFooter}>
                    <button>Tickets</button>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNextMatch
