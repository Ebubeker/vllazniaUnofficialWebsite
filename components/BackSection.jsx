import React from 'react';
import {section} from './BackSection.module.css';

const BackSection = ({children}) => {
    return (
        <div className={section}>
            {children}
        </div>
    )
}

export default BackSection
