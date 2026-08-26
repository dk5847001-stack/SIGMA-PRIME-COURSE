import { useState, useEffect } from "react"

export default function AdminDashboard() {
  const [subscriber, setSubscriber] = useState([]);


 useEffect(() => {
  const fetchSubscriber = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/subscribers");

      console.log("STATUS:", response.status);
      console.log("OK:", response.ok);

      const data = await response.json();

      console.log("FRONTEND DATA:", data);
      console.log("IS ARRAY:", Array.isArray(data));

      setSubscriber(data.subscriber);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  fetchSubscriber();
}, []);

  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-400.svg"
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-white sm:text-2xl/9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">Judith Black</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-400">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure><br />
        <h2 className="text-center text-white text-4xl font-bold">ALL SUBSCRIBERS</h2>
      </div>
      <br />
      <table className="text-white w-full text-center border-separate border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
            {subscriber.map((sub) => (
              <tr key={sub._id}>
                <td className="border border-gray-300 p-2">
                  {sub.email}
                </td>

                <td className="border border-gray-300 p-2">
                  <span className="bg-[oklch(72.3%_0.219_149.579)] rounded-full py-1 px-4">Active</span>
                </td>

                <td className="border border-gray-300 p-2">
                 <span className="bg-[oklch(72.3%_0.219_149.579)] rounded-full py-1 px-4">Delete</span> || <span className="bg-[oklch(72.3%_0.219_149.579)] rounded-full py-1 px-4">Edit</span>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </section>
  )
}
