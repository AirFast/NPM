import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader_wrap}>
            <div className='h-100 d-flax justify-content-center align-items-center'>
                <div className={styles.loader}></div>
            </div>
        </div>
    );
};

export default Loader;
