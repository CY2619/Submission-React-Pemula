import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './components/NoteApp';


import "./style.css";


const root = createRoot(document.getElementById('root'));
root.render(<NotesApp/>);  