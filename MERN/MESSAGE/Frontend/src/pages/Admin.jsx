import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const navigate = useNavigate();

    const [message, setMessage] = useState([]);

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/messages"
                );

                const data = await response.json();

                console.log(data.message);

                setMessage(data.message);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchMessage();
    }, []);

    const handleMessageDelete = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/messages/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await response.json();

            console.log(data);

            // Remove deleted message from UI
            setMessage((previousMessage) => {
                return previousMessage.filter((msg) => msg._id !== id);
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleMessageEdit = async (id) => {
        navigate(`/edit/${id}`);
    }

    return (
        <div className="w-full p-2 sm:p-4">

            {/* Heading */}
            <h2 className="text-center text-xl sm:text-2xl font-semibold py-3">
                Welcome to Admin Panel
            </h2>

            {/* Responsive Table Container */}
            <div className="w-full overflow-x-auto rounded-lg">

                <table className="w-full min-w-[800px] text-center border-collapse">

                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th className="p-3 bg-gray-800 border border-gray-600">
                                Name
                            </th>

                            <th className="p-3 bg-gray-800 border border-gray-600">
                                Email
                            </th>

                            <th className="p-3 bg-gray-800 border border-gray-600">
                                Subject
                            </th>

                            <th className="p-3 bg-gray-800 border border-gray-600">
                                Message
                            </th>

                            <th className="p-3 bg-gray-800 border border-gray-600">
                                Delete
                            </th>
                            <th className="p-3 bg-gray-800 border border-gray-600">
                                Edit
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {message.map((msg) => {
                            return (
                                <tr key={msg._id}>

                                    <td className="p-3 bg-slate-700 border border-gray-600 break-words">
                                        {msg.name}
                                    </td>

                                    <td className="p-3 bg-slate-700 border border-gray-600 break-words">
                                        {msg.email}
                                    </td>

                                    <td className="p-3 bg-slate-700 border border-gray-600 break-words">
                                        {msg.subject}
                                    </td>

                                    <td className="p-3 bg-slate-700 border border-gray-600 max-w-[300px] break-words">
                                        {msg.message}
                                    </td>

                                    <td className="p-3 bg-slate-700 border border-gray-600">
                                        <button
                                            onClick={() =>
                                                handleMessageDelete(msg._id)
                                            }
                                            className="px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 transition cursor-pointer text-white"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td className="p-3 bg-slate-700 border border-gray-600">
                                        <button
                                            onClick={() =>
                                                handleMessageEdit(msg._id)
                                            }
                                            className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 active:bg-red-800 transition cursor-pointer text-white"
                                        >
                                            Edit
                                        </button>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    );
}