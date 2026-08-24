import Form from "../components/Form";
import User from "../components/User";

export default function Home(){
    return(
        <div>
            <h1 className="text-center text-3xl font-bold font-sans">Hello gyes, welcome to home page.</h1><br /><hr /><br />
            <Form /><br /><br /><hr /><hr /><br />
            <User />
        </div>
    )
}