import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";



const AppBody = ({ notes, addNewNote, onDelete, onArchive }) => {
    return (
        <div className="note-app__body">
            <h2 className="note-body__heading">Welcome to your personal notes!</h2>
            <NoteInput addNewNote={addNewNote} />
            <h2>Active Notes</h2>
            <NoteList notesList={notes.filter(note => note.archived === false)} onDelete={onDelete} onArchive={onArchive} />
            <h2>Archive</h2>
            <NoteList notesList={notes.filter(note => note.archived === true)} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default AppBody;