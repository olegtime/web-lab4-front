import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearData } from '../utils/dataSlice';

const ClearButton = () => {
    const dispatch = useDispatch();
    const hasData = useSelector((state) => state.data.data?.length !== 0);

    const handleClear = (event) => {
        event.preventDefault();
        dispatch(clearData());
    };

    return (
        <div id="clearDiv" style={{ display: hasData ? 'block' : 'none' }}>
            <form id="clearResults" onSubmit={handleClear}>
                <input type="submit" value="Очистить историю" id="submit-button" />
            </form>
        </div>
    );
};

export default ClearButton;
