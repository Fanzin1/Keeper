import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import Notes from "../notes.js";

function createNote(noteItem){
    return (
        <Note
        key={noteItem.key}
        title={noteItem.title} 
        content={noteItem.content}         
        />
    );
}

function App(){
    return (
        <div>
            <Header />
            {Notes.map(createNote)}
            <Footer />
        </div>
    )
}

export default App;