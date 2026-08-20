import { useEffect, useState } from "react";
import "./Joker.css"
export default function Joker() {
    let [joke, setJoke] = useState({ punchline: "", setup: "" });
    let url = "https://official-joke-api.appspot.com/random_joke";

    let getJokes = async () => {
        let response = await fetch(url);
        let result = await response.json();
        console.log(result);
        setJoke({ punchline: result.punchline, setup: result.setup });
    }

  useEffect(()=>{
    getJokes();
  }, [])

    return (
        <div className="Joker">
            <h2>Hello, Welcome to Jokes protel</h2><br />
            <div className="buttons">
                <button onClick={getJokes}>Get New Jokes.</button>

                {
                    joke.setup &&
                    (<p style={{ width: "800px", margin: "auto" }}>jokes : {joke.setup} <br />punchline : <b>{joke.punchline}</b></p>)
                }
            </div>
        </div>
    )
}