import React from 'react';

const SearchResults = ({results,selectId,isLoading}) => {
    return (
        <>
        {
            isLoading?
            <h2>Loading...</h2>:
            <>
            {results.length?
                results.map(({id,name}) => {
                return <button className="btn" key={id} id={id} onClick={() => selectId(id)}>{name}</button>
                })
            :
            <h2>No Results!</h2>}
            </>
        }
        </>
    )
};

export default SearchResults;