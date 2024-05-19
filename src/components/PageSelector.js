import { React, useEffect, useState } from 'react';

const PageSelector = ({ planCount, page, onPageChange }) => {

    const handlePageChange = (newPage) => {
        console.log("trying move to:", newPage)
        if (newPage > 0 && newPage < (planCount / 10 + 1)) {
            onPageChange(newPage);
        }
    }

    const pageButtons = [];

    for (let i = 1; i <= planCount / 10; i++) {
        pageButtons.push(
            <button id={i} key={i} className="button page-button" onClick={() => handlePageChange(i)}>
                {i}
            </button>
        )
    }

    useEffect(() => {
        const activePage = document.getElementById(page);
        activePage.classList.add('page-selected');
        return () => {
            activePage.classList.remove('page-selected');
        }
    });

    return (
        <div>
            <button className="button page-button" onClick={() => handlePageChange(page - 1)}>←</button>
            {pageButtons}
            <button className="button page-button" onClick={() => handlePageChange(page + 1)}>→</button>
        </div>
    )
}

export default PageSelector;