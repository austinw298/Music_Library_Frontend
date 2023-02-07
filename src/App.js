import React, {useEffect, useState} from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import AddSong from "./Components/AddSong/AddSong";
import './App.css'

function App() {
        const [songs, setSongs] = useState([]);

    async function makeGetRequest(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/music/')
            console.log('response.data', response.data)
            setSongs(response.data);

            //1. save response.data to state using setSongs - check axios slides
        }
        catch(err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        makeGetRequest();
    }, [])

    function addNewEntry(entry){

      let tempEntries = [entry, ...songs];
      
      setSongs(tempEntries);
    }

  return (
    <div>
      <div className="background">
        <DisplayMusic props={songs}/>

        <AddSong addNewSong={addNewEntry}/>
      </div>
    </div>
  );
}

export default App;
 