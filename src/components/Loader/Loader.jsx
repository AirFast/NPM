import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100 mt-100 mb-100'>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loader;
