import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Footer() {

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState({
        error: false,
    });

    const [showMessage, setShowMessage] = useState("");

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log(email);

        try {

            const response = await fetch(
                "http://localhost:3000/api/subscribers",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email
                    })
                }
            );

            const data = await response.json();

            console.log(data);

            if (!data.success) {

                setShowMessage(data.message);

                setMessage({
                    error: true,
                });

            } else {

                setShowMessage(data.message);

                setMessage({
                    error: false,
                });

                setEmail("");
            }

        } catch (err) {

            console.log("Error : ", err);

            setShowMessage("Something went wrong!");

            setMessage({
                error: true,
            });
        }
    }

    return (
        <div>

            <hr className='text-gray-600' />

            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">

                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

                        <div className="max-w-xl lg:max-w-lg">

                            <h2 className="text-4xl font-semibold tracking-tight text-white">
                                Subscribe to our newsletter
                            </h2>

                            <p className="mt-4 text-lg text-gray-300">
                                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis.
                                Duis tempor incididunt dolore.
                            </p>

                            <div className="mt-6 flex max-w-md gap-x-4">

                                <form onSubmit={handleFormSubmit}>

                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        Email address
                                    </label>

                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={handleInputChange}
                                        autoComplete="email"
                                        className="w-70 mr-2 min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    />

                                    <button
                                        type="submit"
                                        className="hover:cursor-pointer hover:bg-blue-950 w-25 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Subscribe
                                    </button>

                                    {showMessage && (
                                        <p
                                            className={
                                                message.error
                                                    ? "mt-3 text-sm text-red-500"
                                                    : "mt-3 text-sm text-green-500"
                                            }
                                        >
                                            {showMessage}
                                        </p>
                                    )}

                                </form>

                            </div>
                        </div>

                        {/* Baaki tumhara existing JSX same rahega */}

                    </div>
                </div>

            </div>
        </div>
    )
}