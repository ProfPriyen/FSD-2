import React, {useEffect, useState} from 'react'
import axios from "axios"


const Example5 = () => {
const [joke,setJoke] = useState("");

// useEffect(() => {
//     fetchJoke()
// }) to auto fetch joke

const fetchJoke =() =>{
    axios
    .get("https://official-joke-api.appspot.com/random_joke")
.then((response) => {
    const{setup,punchline}=response.data;
    setJoke(`${setup} ${punchline}`);
})
.catch((error)=>{
    console.error(error);
});
};
  return (
    <div>
  <h1>Random Joke Generator</h1>
  <p>{joke}</p>
  <button onClick={fetchJoke}>Get Another Joke</button>    
    </div>
  )
}

export default Example5
