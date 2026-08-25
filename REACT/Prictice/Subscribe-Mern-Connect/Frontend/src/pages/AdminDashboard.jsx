export default function AdminDashboard(){
    return(
        <div className="text-white p-4">
            <h2 className="text-center text-white text-6xl font-bold font-sans">Welcome to Admin Panel</h2><br />
            <p className="text-center text-2xl">Subscriber List</p><br />

            <table className="w-full border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
                <thead>
                    <tr>
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-center bg-[oklch(36.4%_0.029_323.89)]">Email</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-center bg-[oklch(36.4%_0.029_323.89)]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center bg-[oklch(27.5%_0.011_216.9)]">dk034117@gmail.com</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center bg-[oklch(27.5%_0.011_216.9)]">Delete  Edit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}