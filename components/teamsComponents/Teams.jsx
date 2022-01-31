import React from 'react';
import { teamData } from '../../public/static/navbarData';
import {container, firstTeam, card, content, teamname, teamType, overlay, title, otherTitle, otherTeams} from './Teams.module.css';

const Teams = () => {

  const data = teamData[0];  

  return (
    <div className={container}>
        <p className={title}>Teams</p>
        <div className={firstTeam}>
            <div style={{backgroundImage: `url(${data.photoUrl})`}} className={card}>
                <div className={overlay}>
                    <div className={content}>
                        <p className={teamname}>KF VLLAZNIA 1919</p>
                        <p className={teamType}>{data.team}</p>
                    </div>
                </div>
            </div>
        </div>
        <p className={otherTitle}>Other Teams</p>
        <div className={otherTeams}>
            <div style={{backgroundImage: `url("https://media.sot.com.al/sot.com.al/media3/-800-0-61233596674eb.jpg")`}} className={card}>
                <div className={overlay}>
                    <div className={content}>
                        <p className={teamname}>KF VLLAZNIA 1919</p>
                        <p className={teamType}>Womens Team</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url("https://www.shkodrasport.com/wp-content/uploads/2019/05/Vllaznia-B-feste-golim.jpg")`}} className={card}>
                <div className={overlay}>
                    <div className={content}>
                        <p className={teamname}>KF VLLAZNIA 1919</p>
                        <p className={teamType}>U23 Team</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url("https://scontent.ftgd2-1.fna.fbcdn.net/v/t1.18169-9/73569_411396192264941_1168187842_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aoKrx3XEfEgAX_De5s-&_nc_oc=AQnli3sLRJHPfAleUfjrdoJzc_r4UxIjWQyVCuGQtApLlhKsEXHBnvixk5WyhfMMdHA&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT_-d2SVW3Wb5EMO5NiKbqMh1G0ZiWBMpun_eTSK1kYlJQ&oe=621D5553")`}} className={card}>
                <div className={overlay}>
                    <div className={content}>
                        <p className={teamname}>KF VLLAZNIA 1919</p>
                        <p className={teamType}>U19 Team</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url("https://www.shkodrasport.com/wp-content/uploads/2021/08/Akademia-Vllaznia.jpg")`}} className={card}>
                <div className={overlay}>
                    <div className={content}>
                        <p className={teamname}>KF VLLAZNIA 1919</p>
                        <p className={teamType}>Youth Academy</p>
                    </div>
                </div>
            </div>
        </div>
        <p className={otherTitle}>Other Sports</p>
        <div className={otherTeams}>
            <div style={{backgroundImage: `url(${"https://scontent.ftgd2-1.fna.fbcdn.net/v/t39.30808-6/240658813_1235893410230619_4954841531213718450_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=Er35vTThWF4AX9yt-h6&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT93EOMH16rwSjMsoKIKoxEMgnYiU8wX6R9obWCVr6R5Gg&oe=61FB5B30"})`}} className={card}>
                <div className={overlay}>
                    <div className={content}>
                        <p className={teamname}>BASKETBALL</p>
                        <p className={teamType}>First Team</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url("https://i0.wp.com/www.starplus-tv.com/wp-content/uploads/2019/05/vllaznia1.jpg?fit=1280%2C720&ssl=1")`}} className={card}>
                <div className={overlay}>
                    <div className={content}>
                        <p className={teamname}>VOLLEYBALL</p>
                        <p className={teamType}>Women's Team</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url("https://scontent.ftgd2-1.fna.fbcdn.net/v/t39.30808-6/250924336_317039600232862_312797986036110560_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=PCh0XFRCkekAX-oZGs7&tn=n-WJabktxhkh68Cf&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT9WxiCmLLd5eHk4OU7w7gOIPWOgkvCxJoOu3o9wBfqzQg&oe=61FB9012")`}} className={card}>
                <div className={overlay}>
                    <div className={content}>
                        <p className={teamname}>BOXING</p>
                        <p className={teamType}>Individual</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url("https://realitetipost.net/wp-content/uploads/2021/05/FB_IMG_1622448739853.jpg")`}} className={card}>
                <div className={overlay}>
                    <div className={content}>
                        <p className={teamname}>Taekwondo</p>
                        <p className={teamType}>Team</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Teams;
