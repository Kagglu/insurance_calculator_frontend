import { React, useState } from 'react';

const PageSelector = ({ planCount, page, onPageChange }) => {

    const handlePageChange = (change) => {
        console.log("trying move to:", page + change)
        if (page + change > 0 && page + change <= (planCount / 10 + 1)) {
            onPageChange(page + change);
        }
    }

    return (
        <div>
            <button className="button" onClick={() => handlePageChange(-1)}>←</button>
            <button className="button" onClick={() => handlePageChange(1)}>→</button>
        </div>
    )
}

export default PageSelector;