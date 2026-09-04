import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Loading profile...</p>;
    }

    if (!user) {
        return <p>Please login first.</p>;
    }

    return (
        <div>

            <p>Your Profile</p>

            <p>Name : {user.name}</p>

            <p>Email : {user.email}</p>

            <p>Role : {user.role}</p>

        </div>
    );
}