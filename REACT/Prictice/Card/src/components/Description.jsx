import "../css/Description.css";
export default function Description({Title, Description}){
    return(
        <div className="Description">
            <h2>{Title}</h2>
            <p>{Description}</p>
        </div>
    )
}