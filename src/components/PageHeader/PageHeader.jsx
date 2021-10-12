import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/actions/productAction';
import styles from './PageHeader.module.css';

const PageHeader = () => {
    const { searchValue } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleSetSearchValue = e => {
        dispatch(setSearchValue(e.target.value));
    }

    return (
        <header className='row align-items-center mb-40'>
            <div className='col-9'>
                <h1 className='mb-0'>{searchValue ? `Search Product: ${searchValue}` : 'All Products'}</h1>
            </div>
            <div className='col-3'>
                <input className={styles.search_input} type='text' value={searchValue} onChange={handleSetSearchValue}/>
            </div>
        </header>
    );
};

export default PageHeader;
