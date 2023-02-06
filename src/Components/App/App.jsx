import React, {useEffect, useState} from "react";
import axios from "axios";


function App() {
        const [songs, setSongs] = useState([]);

    async function makeGetRequest(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/music/')
            console.log('initial response', response)
        }
        catch(err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        makeGetRequest();
    }, [])

  return (
    <div>
        <h3>Hello World</h3>
    </div>
  );
}

export default App;
 