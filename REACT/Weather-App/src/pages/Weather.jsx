import SearchBox from "../components/SearchBox";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <h2>Weather Search</h2><br />
            <SearchBox />
        </div>
    )
}