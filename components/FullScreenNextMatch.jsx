import React from 'react';
import abissnet from '../public/images/abissnet-logo.png';
import KfTirana from '../public/images/kFTiranaLogo.png';
import KfVllaznia from '../public/images/vllazniaLogo.png';
import Image from 'next/image';
import {section, overlay, competitionName, content, timeAndLoc, gameWeek, saying, countdown, count, notCount, Match, homeTeam, teamName, kickOf, awayTeam, image, time, kik, blueLine, redLine, latestNews, newsName, newsFromCoach, situationNews, imageFooter} from './FullScreenNextMatch.module.css';

const FullScreenNextMatch = () => {
    return (
        <div className={section}>
            <div className={overlay}>
                <div className={content}>
                    <div className={competitionName}>
                        <Image className={image} height={"65px"} width={"85px"} src={abissnet}/>
                        <p>Abissnet Superiore</p>
                    </div>
                    <div className={timeAndLoc}>
                        <p><span className={gameWeek}>Matchday 16</span>•<span>Air Albania Stadium</span></p>
                    </div>
                    <div className={saying}>
                        <p>An Away Game Agains Historical Rivals</p>
                    </div>
                    <div className={countdown}>
                        <p className={notCount}>Match Countdown</p>
                        <p className={count}>07:23:21:47</p>
                    </div>
                    <div className={Match}>
                        <div className={homeTeam}>
                            <p className={teamName}>KF Tirana</p>
                            <Image className={image} height={"175px"} width={"175px"} src={KfTirana}></Image>
                        </div>
                        <div className={kickOf}>
                            <p className={kik}>Kickoff CET</p>
                            <p className={time}>19:45</p>
                        </div>
                        <div className={awayTeam}>
                            <Image className={image} height={"175px"} width={"175px"} src={KfVllaznia}></Image>
                            <p className={teamName}>KF Vllaznia</p>
                        </div>
                    </div>
                    <div className={latestNews}>
                        <div className={newsName}>
                            <p>Thomas Brdaric</p>
                        </div>
                        <div className={newsFromCoach}>
                            <p>"We are going to the capital only to win this game, and we will."</p>
                        </div>
                        <div className={situationNews}>
                            <p>"Seems like Air Albania will be full of supporters. Both teams are in a very good shape"</p>
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
