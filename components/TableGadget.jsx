import React from 'react';
import {divUp, sectionTitle, section, table, nrAndteam, points, number, team, leagueLogo} from './TableGadget.module.css';
import Image from 'next/image';
import abissnet from '../public/images/abissnet-logo.png';
import kfTirana from '../public/images/kFTiranaLogo.png';
import vllazniaLogo from '../public/images/vllazniaLogo.png';
import laci from '../public/images/laciKf.png';
import partizani from '../public/images/partizaniFk.png';

const TableGadget = () => {
    return (
        <div className={divUp}>
            <p className={sectionTitle}><p>Abissnet Superiore Table</p><Image height={"60px"} width={"80px"} src={abissnet}/></p>
            <div className={section}>
                <ul className={table}>
                    <li>
                        <p className={nrAndteam}><span className={number}>01</span><span className={team}><Image height={"25px"} width={"25px"} src={kfTirana}/><p>KF Tirana</p></span></p>
                        <p className={points}>33 points</p>
                    </li>
                    <li>
                        <p className={nrAndteam}><span className={number}>02</span><span className={team}><Image height={"25px"} width={"25px"} src={partizani}/><p>KF Kukesi</p></span></p>
                        <p className={points}>28 points</p>
                    </li>
                    <li>
                        <p className={nrAndteam}><span className={number}>03</span><span className={team}><Image height={"25px"} width={"25px"} src={laci}/><p>KF Laci</p></span></p>
                        <p className={points}>27 points</p>
                    </li>
                    <li>
                        <p className={nrAndteam}><span className={number}>04</span><span className={team}><Image height={"25px"} width={"25px"} src={vllazniaLogo}/><p>KF Vllaznia</p></span></p>
                        <p className={points}>25 points</p>
                    </li>
                    <li>
                        <p className={nrAndteam}><span className={number}>05</span><span className={team}><Image height={"25px"} width={"25px"} src={vllazniaLogo}/><p>KF Partizani</p></span></p>
                        <p className={points}>18 points</p>
                    </li>
                    <li>
                        <p className={nrAndteam}><span className={number}>06</span><span className={team}><Image height={"25px"} width={"25px"} src={vllazniaLogo}/><p>Teauta</p></span></p>
                        <p className={points}>18 points</p>
                    </li>
                    <li>
                        <p className={nrAndteam}><span className={number}>07</span><span className={team}><Image height={"25px"} width={"25px"} src={vllazniaLogo}/><p>Skenderbeu</p></span></p>
                        <p className={points}>15 points</p>
                    </li>
                    <li>
                        <p className={nrAndteam}><span className={number}>08</span><span className={team}><Image height={"25px"} width={"25px"} src={vllazniaLogo}/><p>Dinamo Tirane</p></span></p>
                        <p className={points}>15 points</p>
                    </li>
                    <li>
                        <p className={nrAndteam}><span className={number}>09</span><span className={team}><Image height={"25px"} width={"25px"} src={vllazniaLogo}/><p>Egnatia</p></span></p>
                        <p className={points}>14 points</p>
                    </li>
                    <li>
                        <p className={nrAndteam}><span className={number}>10</span><span className={team}><Image height={"25px"} width={"25px"} src={vllazniaLogo}/><p>Kastrioti</p></span></p>
                        <p className={points}>8 points</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TableGadget
