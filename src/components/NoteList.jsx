import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ NoteList, onDelete, onArchive }) => {
    return (
        <>
            { NoteList.length !== 0 ?
                <div className="notes-list">
                    {
                        NoteList.map(item => (
                            <NoteItem key={item.id} note={item } onDelete={onDelete} onArchive={onArchive} />
                        ))
                    }
                </div> :
                <p className="notes-list__empty-message"> Tidak Catatan Disini</p>
            }
        </>
   )
}

export default NoteList;