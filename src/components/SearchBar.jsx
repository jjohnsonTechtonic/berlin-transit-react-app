import React, { useRef } from 'react';
import {slugify} from '../scripts/utilities';

const SearchBar = ({search}) => {
    const searchBarRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const term = searchBarRef.current.value;
        search(slugify(term));
        searchBarRef.current.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" ref={searchBarRef}/>
            <button className="btn" type="submit">Search</button>
        </form>
    );
};

export default SearchBar;