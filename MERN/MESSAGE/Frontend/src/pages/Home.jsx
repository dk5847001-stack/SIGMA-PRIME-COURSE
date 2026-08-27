import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState({
        message: "",
        error: false
    });

    const handleInputChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setStatus({
            message: "",
            error: false
        });

        try {
            const response = await fetch(
                "http://localhost:3000/api/messages",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong!");
            }

            console.log(data);

            setStatus({
                message: "Your message has been sent successfully! 🚀",
                error: false
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            navigate("/admin")
        } catch (err) {
            console.log(err);

            setStatus({
                message: err.message || "Failed to send message!",
                error: true
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white px-4 py-12 sm:px-6 lg:px-8">

            {/* Background Glow */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

                <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>

                <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl"></div>
            </div>

            {/* Heading */}
            <div className="mx-auto mb-10 max-w-3xl text-center">
                <span className="mb-3 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
                    Get In Touch
                </span>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Contact{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Us
                    </span>
                </h1>

                <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base">
                    Have a question, suggestion, or need help? Send us a
                    message and our team will get back to you as soon as
                    possible.
                </p>
            </div>

            {/* Main Card */}
            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl lg:grid-cols-5">

                {/* Left Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 p-7 sm:p-10 lg:col-span-2">

                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"></div>

                    <div className="relative z-10">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                            Let's Talk
                        </p>

                        <h2 className="text-3xl font-bold leading-tight">
                            We'd love to hear from you.
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-slate-400">
                            Whether you have a question about our services,
                            feedback about the website, or simply want to say
                            hello, feel free to reach out.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-10 space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold">
                                        Email
                                    </p>
                                    <p className="mt-1 text-sm text-slate-400">
                                        support@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold">
                                        Response Time
                                    </p>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Usually within 24 hours
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="p-6 sm:p-10 lg:col-span-3">

                    <form
                        onSubmit={handleFormSubmit}
                        className="space-y-5"
                    >

                        {/* Name + Email */}
                        <div className="grid gap-5 sm:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                                />
                            </div>

                        </div>

                        {/* Subject */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                placeholder="What is this about?"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Message
                            </label>

                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                            ></textarea>
                        </div>

                        {/* Status Message */}
                        {status.message && (
                            <div
                                className={`rounded-xl border px-4 py-3 text-sm ${
                                    status.error
                                        ? "border-red-400/20 bg-red-400/10 text-red-300"
                                        : "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                                }`}
                            >
                                {status.message}
                            </div>
                        )}

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="h-5 w-5 animate-spin"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />

                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        />
                                    </svg>

                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                                    </svg>
                                </>
                            )}
                        </button>

                    </form>
                </div>
            </div>

            {/* Bottom Text */}
            <p className="mx-auto mt-8 max-w-xl text-center text-xs text-slate-600">
                By submitting this form, you agree to be contacted regarding
                your inquiry.
            </p>

        </div>
    );
}