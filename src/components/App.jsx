import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notas, setNotas] =  useState([]);

  function newItem(keepItem, index){
    return <Note 
    key={index} 
    id={index} 
    title={keepItem.title}
    content={keepItem.content}
    onChecked = {deleteItem}
    />
  }

  function deleteItem(id){
    setNotas(prevNotes => {
      return prevNotes.filter((notes, index) =>{
        return index !== id;
      })
    })
  }

  function addItem(newNote){
    setNotas( prevItems => {
      return [...prevItems, newNote]
    }
    )
    console.log(notas)
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {notas.map(newItem)}
      <Footer />
    </div>
  );
}

export default App;
