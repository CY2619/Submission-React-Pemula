import React from 'react';
import SearchBarHeader from './SearchBar_header';


const NoteAppHeader = ({ onSearch }) => {
    return (
        <div className='note-app__header'>
            <h1>My Notes  </h1>
            <SearchBarHeader/>
        </div>
    )
}

export default NoteAppHeader;