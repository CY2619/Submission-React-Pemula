import React from "react";

const SearchBarHeader = ({ onSearch }) => {
    
    const onSearchBarChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <div className="note-search">
            <input
                type="text"
                placeholder="Ketik untuk mencari catatan..."
                onChange={onSearchBarChange}
            />
        </div>
    )
}

export default SearchBarHeader;