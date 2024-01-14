import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(entryList){
    return <Entry name= {entryList.name} face= {entryList.emoji}  meaning= {entryList.meaning}/>;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
            {emojipedia.map(createEntry)}
          </dl>
    </div>
  );
}

export default App;
