import React from 'react';
import style from './TableError.module.css';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    fadeInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInLeft')
    }
}

const TableError = props => {
    const { error } = props;
    return (
        <StyleRoot style={styles.fadeInUp}>
            <div className={style.container}>
                <p className={style.errorText}>{error}</p>
            </div>
        </StyleRoot>
    );
}

export default TableError;