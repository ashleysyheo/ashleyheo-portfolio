import React, { useCallback, useState, useContext } from 'react';
import GalleryView from './GalleryView';
import ListView from './ListView';
import './IndexSort.scss';
import WorkContext from '../contexts/works';

const IndexSort = () => {
    
    const [display, setDisplay] = useState(true);
    const state = useContext(WorkContext);

    const displayStyle = useCallback((e) => {
        e.target.name === 'list' ? setDisplay(true) : setDisplay(false);
    }, []);

    return (
        <div className='sort-container'>
            <div className='sort-box'>
                <button name="gallery" className='sort' onClick={ displayStyle }>{ display ? '●' : '○' } gallery</button>
                <button name="list" className='sort' onClick={ displayStyle }>{ display ? '○' : '●' } list</button>
            </div>
            { display ? <GalleryView works={ state.works } /> : <ListView works={ state.works }/> }
        </div>
    );
};

export default IndexSort;