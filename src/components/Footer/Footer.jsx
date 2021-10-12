import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='container'>
            <div className='row'>
                <div className='col-12 mt-80 mb-30 d-flex flex-direction-row justify-content-space-between align-items-center'>
                    <p>All Rights Reserved &copy; {year} AirFast</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
