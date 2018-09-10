import React from 'react';
import './header-info.scss';

const HeaderInfo = ({totalResults, totalPages, page}) => {

    return (
        <div className="search-info">

            <div className="search-info__total-results">

                Total Results: {totalResults}

            </div>

            <div className="search-info__navigation">

                  Page <button>&lt;</button> {page} - {totalPages} <button>&gt;</button>

            </div>

        </div>
    )

}

export default HeaderInfo;
