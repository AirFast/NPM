import React from 'react';
import styles from './Loader.module.css';

const MiniLoader = ({ size }) => {
    return (
        <div className={styles.mini_loader} style={{width: size, height: size}}></div>
    );
};

export default MiniLoader
