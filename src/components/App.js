import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
  return (
    <div>
      <Header />
      {notes.map((notesItems) => {
        return (<Note 
        key = {notesItems.key}
        title={notesItems.title}
        content={notesItems.content}
      />)
      })}
      
      <Footer />
    </div>
  );
}

export default App;
