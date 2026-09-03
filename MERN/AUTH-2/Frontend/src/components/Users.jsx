import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Authentication required. Please login again.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    "http://localhost:3000/admin/users",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Failed to fetch users");
                }

                setUsers(data.users || []);
            } catch (err) {
                console.error(err);
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="p-4 text-white md:p-6">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    All Users
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                    Manage all registered users
                </p>
            </div>

            {/* Error */}
            {error && (
                <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                </div>
            )}

            {/* Loading */}
            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-700"></div>
                </div>
            ) : users.length === 0 ? (
                <div className="rounded-xl bg-slate-100 p-8 text-center text-slate-500">
                    No users found.
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl shadow-md border border-slate-200">

                    <table className="w-full min-w-[700px] text-left">

                        <thead>
                            <tr className="bg-slate-800 text-white">
                                <th className="px-5 py-4">#</th>
                                <th className="px-5 py-4">Name</th>
                                <th className="px-5 py-4">Email</th>
                                <th className="px-5 py-4">Role</th>
                                <th className="px-5 py-4 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                    key={user._id}
                                    className="border-b border-slate-200 hover:bg-slate-50 transition"
                                >
                                    <td className="px-5 py-4 text-slate-500">
                                        {index + 1}
                                    </td>

                                    <td className="px-5 py-4 font-medium text-slate-800">
                                        {user.name}
                                    </td>

                                    <td className="px-5 py-4 text-slate-600">
                                        {user.email}
                                    </td>

                                    <td className="px-5 py-4">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                user.role === "admin"
                                                    ? "bg-purple-100 text-purple-700"
                                                    : "bg-green-100 text-green-700"
                                            }`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>

                                    <td className="px-5 py-4 text-center">
                                        <button
                                            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition"
                                        >
                                            Block
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            )}
        </div>
    );
}