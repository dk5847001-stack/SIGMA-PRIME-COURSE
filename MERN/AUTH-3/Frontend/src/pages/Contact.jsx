export default function Contact() {
    return (
        <div className="relative min-h-[calc(100vh-65px)] px-4 py-10 sm:py-14 lg:py-20 flex items-center justify-center overflow-hidden">

            {/* =========================================
                DECORATIVE GLOW
                No background color on main page
            ========================================== */}

            <div className="pointer-events-none absolute top-10 left-[8%] w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="pointer-events-none absolute bottom-10 right-[8%] w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-purple-500/10 blur-[120px]" />


            {/* =========================================
                MAIN CONTENT
            ========================================== */}

            <div className="relative w-full max-w-6xl">

                {/* TOP LABEL */}

                <div className="text-center mb-8 sm:mb-10">

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-md">

                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />

                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-cyan-300 font-medium">
                            Communication Portal
                        </span>

                    </div>

                    <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                        Let's{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h1>

                    <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
                        Have a question, idea, or project in mind?
                        Send us a message and we'll get back to you.
                    </p>

                </div>


                {/* =========================================
                    GLASS PANEL
                ========================================== */}

                <div className="relative">

                    {/* Neon border */}

                    <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-cyan-500/30 via-blue-500/10 to-purple-500/30 blur-[1px]" />


                    <div
                        className="
                            relative
                            rounded-[28px]
                            border
                            border-white/10
                            bg-white/[0.035]
                            backdrop-blur-2xl
                            shadow-[0_25px_100px_rgba(0,0,0,0.45)]
                            overflow-hidden
                        "
                    >

                        {/* Top line */}

                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />


                        <div className="grid grid-cols-1 lg:grid-cols-5">

                            {/* =====================================
                                LEFT INFORMATION PANEL
                            ====================================== */}

                            <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">

                                <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                                    Contact Information
                                </span>

                                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                                    We're here to help.
                                </h2>

                                <p className="mt-4 text-sm text-gray-400 leading-7">
                                    Whether you're looking for support,
                                    collaboration, or simply want to say hello,
                                    feel free to reach out.
                                </p>


                                {/* CONTACT ITEMS */}

                                <div className="mt-8 space-y-4">

                                    {/* Email */}

                                    <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] transition-all duration-300">

                                        <div className="w-11 h-11 shrink-0 rounded-xl border border-cyan-400/15 bg-cyan-400/5 flex items-center justify-center text-lg">
                                            ✉️
                                        </div>

                                        <div className="min-w-0">

                                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                                                Email
                                            </p>

                                            <p className="mt-1 text-sm text-gray-200 break-all">
                                                support@example.com
                                            </p>

                                        </div>

                                    </div>


                                    {/* Phone */}

                                    <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-blue-400/30 hover:bg-blue-400/[0.03] transition-all duration-300">

                                        <div className="w-11 h-11 shrink-0 rounded-xl border border-blue-400/15 bg-blue-400/5 flex items-center justify-center text-lg">
                                            📞
                                        </div>

                                        <div>

                                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                                                Phone
                                            </p>

                                            <p className="mt-1 text-sm text-gray-200">
                                                +91 XXXXX XXXXX
                                            </p>

                                        </div>

                                    </div>


                                    {/* Response */}

                                    <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-purple-400/30 hover:bg-purple-400/[0.03] transition-all duration-300">

                                        <div className="w-11 h-11 shrink-0 rounded-xl border border-purple-400/15 bg-purple-400/5 flex items-center justify-center text-lg">
                                            ⚡
                                        </div>

                                        <div>

                                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                                                Response Time
                                            </p>

                                            <p className="mt-1 text-sm text-gray-200">
                                                Usually within 24 hours
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* STATUS */}

                                <div className="mt-8 flex items-center gap-3">

                                    <span className="relative flex w-3 h-3">

                                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />

                                        <span className="relative inline-flex w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />

                                    </span>

                                    <span className="text-xs text-gray-400">
                                        Support system is operational
                                    </span>

                                </div>

                            </div>


                            {/* =====================================
                                RIGHT FORM
                            ====================================== */}

                            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">

                                <div className="flex items-center justify-between mb-7">

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                                            Message Center
                                        </p>

                                        <h2 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                                            Send a Message
                                        </h2>

                                    </div>


                                    <div className="hidden sm:flex items-center gap-2">

                                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

                                        <span className="text-[10px] font-mono text-gray-500">
                                            SECURE
                                        </span>

                                    </div>

                                </div>


                                <form className="space-y-5">

                                    {/* NAME */}

                                    <div>

                                        <label className="block mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="
                                                w-full
                                                h-12
                                                px-4
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-white/[0.025]
                                                text-white
                                                placeholder-gray-600
                                                outline-none
                                                transition-all
                                                duration-300
                                                focus:border-cyan-400/40
                                                focus:ring-2
                                                focus:ring-cyan-400/10
                                                hover:border-white/20
                                            "
                                        />

                                    </div>


                                    {/* EMAIL */}

                                    <div>

                                        <label className="block mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="
                                                w-full
                                                h-12
                                                px-4
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-white/[0.025]
                                                text-white
                                                placeholder-gray-600
                                                outline-none
                                                transition-all
                                                duration-300
                                                focus:border-cyan-400/40
                                                focus:ring-2
                                                focus:ring-cyan-400/10
                                                hover:border-white/20
                                            "
                                        />

                                    </div>


                                    {/* SUBJECT */}

                                    <div>

                                        <label className="block mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="What would you like to discuss?"
                                            className="
                                                w-full
                                                h-12
                                                px-4
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-white/[0.025]
                                                text-white
                                                placeholder-gray-600
                                                outline-none
                                                transition-all
                                                duration-300
                                                focus:border-cyan-400/40
                                                focus:ring-2
                                                focus:ring-cyan-400/10
                                                hover:border-white/20
                                            "
                                        />

                                    </div>


                                    {/* MESSAGE */}

                                    <div>

                                        <label className="block mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                                            Message
                                        </label>

                                        <textarea
                                            rows="5"
                                            placeholder="Write your message..."
                                            className="
                                                w-full
                                                px-4
                                                py-3
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-white/[0.025]
                                                text-white
                                                placeholder-gray-600
                                                outline-none
                                                resize-none
                                                transition-all
                                                duration-300
                                                focus:border-cyan-400/40
                                                focus:ring-2
                                                focus:ring-cyan-400/10
                                                hover:border-white/20
                                            "
                                        />

                                    </div>


                                    {/* BUTTON */}

                                    <button
                                        type="submit"
                                        className="
                                            group
                                            relative
                                            w-full
                                            h-12
                                            rounded-xl
                                            overflow-hidden
                                            border
                                            border-cyan-400/30
                                            bg-cyan-400/10
                                            text-cyan-200
                                            font-semibold
                                            transition-all
                                            duration-300
                                            hover:bg-cyan-400/15
                                            hover:border-cyan-300/50
                                            hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                                            active:scale-[0.99]
                                        "
                                    >

                                        {/* Button shine */}

                                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                        <span className="relative flex items-center justify-center gap-2">

                                            Send Message

                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                →
                                            </span>

                                        </span>

                                    </button>

                                </form>


                                {/* SECURITY TEXT */}

                                <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-gray-600">

                                    <span>🔒</span>

                                    <span>
                                        Your message is transmitted securely.
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* =====================================
                            BOTTOM HUD
                        ====================================== */}

                        <div className="border-t border-white/10 px-6 sm:px-8 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">

                            <span className="text-[10px] font-mono tracking-wider text-gray-600">
                                CONTACT://PORTAL
                            </span>

                            <span className="text-[10px] font-mono text-gray-600">
                                CONNECTION ESTABLISHED
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}