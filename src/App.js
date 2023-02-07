import React, {useEffect, useState} from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";


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

  return (
    <div id = ''>
        <DisplayMusic props={songs}/>
        {/*2.  Map through songs array using .map to display properties of each song using dot notation */}
    </div>
  );
}

export default App;
 