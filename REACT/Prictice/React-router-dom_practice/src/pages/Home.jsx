import "./Home.css";
export default function Home(){
    return(
        <div className="Home">
            <h1>Hello🙋‍♀️, welcome to home page.</h1>
            <div className="section1">
                <div className="homeLeft">
            <h2>Student Details</h2>
            <button>Name : Dilkhush Kumar</button>
            <button>Email : contact@internovatech.in</button>
            <button>Mo. no. : +91 9905167559</button>
            <button>Branch : B.Tech CSE</button>
            <button>Prn : 240205131051</button>
            <button>College : Sandip University</button>
                </div>
                {/* ------------------------------------- */}
                <div className="homeRight">
            <h2>Quick Action</h2>
            <button>View your profile</button>
            <button>Register for internship</button>
            <button>Go to your enrollment page</button>
            <button>View your progress</button>
            <button>Got to certificate Deshboard</button>
            <button>Got to Training page</button>
                </div>
            </div>
        </div>
    )
}