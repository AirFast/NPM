import React from 'react';
import { Link } from 'react-router-dom';

const EmptyProductsList = () => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100 mt-100 mb-100'>
            <p>You have not added any products. <Link to={'/'}>Return to the shop.</Link></p>
        </div>
    );
};

export default EmptyProductsList;
