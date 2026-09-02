import { Link } from "react-router-dom";

export default function Unauthorized() {

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">

            <div className="text-center">

                <h1 className="text-7xl font-bold text-red-500 mb-4">
                    403
                </h1>

                <h2 className="text-3xl font-bold mb-3">
                    Access Denied
                </h2>

                <p className="text-gray-400 text-lg mb-8">
                    Sorry, you don't have permission to access this page.
                </p>

                <Link
                    to="/"
                    className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
                >
                    ← Go to Home
                </Link>

            </div>

        </div>
    );
}