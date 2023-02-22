import React , { useState }from "react";
import { toast } from 'react-toastify';

const toastId1 = 'toast-1';
const toastId2 = 'toast-2';
const toastId3 = 'toast-3';
const NoteInput = ({ addNewNote }) => {
    const [formData, setFormData] = useState({
        title: '',
        noteBody: '',
        noteBodyLength :0
    })

    const onTitleChange = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const onBodyChange = (event) => {
        event.preventDefault();
        if (event.target.value.length <= 50) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
                noteBodyLength:event.target.value.length
            })
        } else {
            toast.error("max length for not body is 50", { toastId: toastId1 });
        }
    }
    const onSubmitButton = (event) => {
        event.preventDefault();
        if (formData.title === '') {
            toast.error('Title Cannot be empty', { toast: toastId2 });
        }
        else if (formData.noteBody === '') {
            toast.error('Note body Cannot be empty! ', { toastId: toastId3 });
        } else {
            const newData = {
                id: +new Date(),
                title: formData.title,
                body: formData.noteBody,
                archived: false,
                createAt : new Date()
            }
            const result = addNewNote(newData);
            if (!result.eror) {
                toast.success('new note save');
                setFormData({
                    ...formData,
                    title: '',
                    noteBody: '',
                    noteBodyLength : 0
                })
            } else {
                toast.error('Catatan baru gagal di tambahkan');
            }
        }
    }    


    return (
        <div className="note-input">
            <h2>New Note</h2>
            <form>
                <p className="note-input__title__char-limit">Character Left : {50 - formData.noteBodyLength}</p>
                <input type="text" className="note-input__title" name="title" value={formData.title} placeholder="Title" required onChange={onTitleChange} />
                <textarea name="noteBody" className="note-input__body" type="text" placeholder="Your Notes Here..."  required value={formData.noteBody} onChange={onBodyChange}></textarea>
                <button type="submit"   onClick={onSubmitButton}>Add Note</button> 
            </form>
        </div>
    )
}
 
export default NoteInput; 