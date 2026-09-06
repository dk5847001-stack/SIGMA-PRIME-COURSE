import { useEffect, useState } from "react";

export default function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/profile",
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                const data = await response.json();

                console.log(data);

                if (response.ok && data.success) {
                    setUser(data.user);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="relative min-h-[calc(100vh-65px)] flex items-center justify-center px-4 py-12 overflow-hidden">

            {/* =================================================
                DECORATIVE BACKGROUND GLOWS
            ================================================= */}

            <div className="pointer-events-none absolute top-10 left-[10%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

            <div className="pointer-events-none absolute bottom-10 right-[10%] w-80 h-80 bg-purple-500/10 rounded-full blur-[140px]" />

            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />


            {/* =================================================
                MAIN PROFILE CONTAINER
            ================================================= */}

            <div className="relative w-full max-w-5xl">

                {/* OUTER NEON BORDER */}

                <div
                    className="
                        absolute
                        -inset-[1px]
                        rounded-[30px]
                        bg-gradient-to-r
                        from-cyan-500/40
                        via-blue-500/20
                        to-purple-500/40
                        blur-[1px]
                    "
                />


                {/* MAIN GLASS PANEL */}

                <div
                    className="
                        relative
                        rounded-[30px]
                        border
                        border-white/10
                        bg-slate-950/60
                        backdrop-blur-2xl
                        shadow-[0_25px_100px_rgba(0,0,0,0.55)]
                        overflow-hidden
                    "
                >

                    {/* =================================================
                        TOP HUD LINE
                    ================================================= */}

                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />


                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="relative px-6 sm:px-10 lg:px-12 pt-8 pb-8">

                        {/* Decorative grid lines */}

                        <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] bg-[size:35px_35px]" />


                        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">


                            {/* USER IDENTITY */}

                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

                                {/* AVATAR */}

                                <div className="relative">

                                    {/* Outer glow */}

                                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl scale-125" />

                                    {/* Ring */}

                                    <div className="relative w-28 h-28 rounded-full p-[2px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">

                                        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">

                                            <span className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                                {user.name
                                                    ? user.name
                                                        .charAt(0)
                                                        .toUpperCase()
                                                    : "U"}
                                            </span>

                                        </div>

                                    </div>


                                    {/* ONLINE DOT */}

                                    <span
                                        className="
                                            absolute
                                            bottom-1
                                            right-1
                                            w-5
                                            h-5
                                            rounded-full
                                            bg-emerald-400
                                            border-4
                                            border-slate-950
                                            shadow-[0_0_15px_rgba(52,211,153,.8)]
                                        "
                                    />

                                </div>


                                {/* USER DETAILS */}

                                <div className="text-center sm:text-left">

                                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mb-2">

                                        <span className="text-[10px] tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                                            SYSTEM USER
                                        </span>

                                        <span className="px-2 py-0.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 text-[10px] text-emerald-400">
                                            ONLINE
                                        </span>

                                    </div>


                                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">

                                        {user.name || "Loading..."}

                                    </h1>


                                    <p className="mt-2 text-gray-400 text-sm break-all">

                                        {user.email || "Loading email..."}

                                    </p>


                                    {/* USER ID STYLE */}

                                    <div className="mt-4 flex items-center justify-center sm:justify-start gap-2">

                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

                                        <span className="text-xs text-gray-500 font-mono">
                                            AUTHENTICATED SESSION
                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* ROLE */}

                            <div className="flex flex-col items-center lg:items-end gap-2">

                                <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500">
                                    ACCESS LEVEL
                                </span>

                                <div
                                    className="
                                        px-5
                                        py-2.5
                                        rounded-xl
                                        border
                                        border-cyan-400/20
                                        bg-cyan-400/5
                                        text-cyan-300
                                        font-bold
                                        text-sm
                                        uppercase
                                        tracking-wider
                                        shadow-[0_0_25px_rgba(34,211,238,.08)]
                                    "
                                >
                                    {user.role || "Loading..."}
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        DIVIDER
                    ================================================= */}

                    <div className="mx-6 sm:mx-10 border-t border-white/10" />


                    {/* =================================================
                        PROFILE DATA
                    ================================================= */}

                    <div className="px-6 sm:px-10 lg:px-12 py-9">

                        <div className="flex items-center justify-between mb-6">

                            <div>

                                <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 mb-1">
                                    USER DATABASE
                                </p>

                                <h2 className="text-xl font-bold text-white">
                                    Account Information
                                </h2>

                            </div>


                            <div className="hidden sm:flex items-center gap-2">

                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                                <span className="text-xs text-gray-500 font-mono">
                                    SECURE
                                </span>

                            </div>

                        </div>


                        {/* =================================================
                            INFORMATION GRID
                        ================================================= */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                            {/* NAME */}

                            <div
                                className="
                                    group
                                    relative
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-5
                                    overflow-hidden
                                    transition-all
                                    duration-300
                                    hover:border-cyan-400/30
                                    hover:bg-cyan-400/[0.035]
                                    hover:-translate-y-1
                                "
                            >

                                <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent" />

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                                            FULL NAME
                                        </p>

                                        <p className="mt-3 text-lg font-semibold text-white">
                                            {user.name || "Loading..."}
                                        </p>

                                    </div>


                                    <div
                                        className="
                                            w-11
                                            h-11
                                            rounded-xl
                                            border
                                            border-cyan-400/10
                                            bg-cyan-400/5
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                            group-hover:bg-cyan-400/10
                                            transition
                                        "
                                    >
                                        👤
                                    </div>

                                </div>

                            </div>


                            {/* EMAIL */}

                            <div
                                className="
                                    group
                                    relative
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-5
                                    overflow-hidden
                                    transition-all
                                    duration-300
                                    hover:border-blue-400/30
                                    hover:bg-blue-400/[0.035]
                                    hover:-translate-y-1
                                "
                            >

                                <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-blue-400 to-transparent" />

                                <div className="flex items-start justify-between gap-4">

                                    <div className="min-w-0">

                                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                                            EMAIL ADDRESS
                                        </p>

                                        <p className="mt-3 text-lg font-semibold text-white break-all">
                                            {user.email || "Loading..."}
                                        </p>

                                    </div>


                                    <div
                                        className="
                                            w-11
                                            h-11
                                            shrink-0
                                            rounded-xl
                                            border
                                            border-blue-400/10
                                            bg-blue-400/5
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                        "
                                    >
                                        ✉️
                                    </div>

                                </div>

                            </div>


                            {/* ROLE */}

                            <div
                                className="
                                    group
                                    relative
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-5
                                    overflow-hidden
                                    transition-all
                                    duration-300
                                    hover:border-purple-400/30
                                    hover:bg-purple-400/[0.035]
                                    hover:-translate-y-1
                                "
                            >

                                <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-purple-400 to-transparent" />

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                                            ACCOUNT ROLE
                                        </p>

                                        <div className="mt-3">

                                            <span
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    px-3
                                                    py-1.5
                                                    rounded-lg
                                                    border
                                                    border-purple-400/20
                                                    bg-purple-400/5
                                                    text-purple-300
                                                    text-sm
                                                    font-bold
                                                    uppercase
                                                "
                                            >

                                                <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" />

                                                {user.role || "Loading..."}

                                            </span>

                                        </div>

                                    </div>


                                    <div
                                        className="
                                            w-11
                                            h-11
                                            rounded-xl
                                            border
                                            border-purple-400/10
                                            bg-purple-400/5
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                        "
                                    >
                                        🛡️
                                    </div>

                                </div>

                            </div>


                            {/* SECURITY */}

                            <div
                                className="
                                    group
                                    relative
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-5
                                    overflow-hidden
                                    transition-all
                                    duration-300
                                    hover:border-emerald-400/30
                                    hover:bg-emerald-400/[0.035]
                                    hover:-translate-y-1
                                "
                            >

                                <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-emerald-400 to-transparent" />

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                                            SESSION STATUS
                                        </p>

                                        <div className="mt-3 flex items-center gap-2">

                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />

                                            <span className="text-lg font-semibold text-emerald-300">
                                                Secure
                                            </span>

                                        </div>

                                    </div>


                                    <div
                                        className="
                                            w-11
                                            h-11
                                            rounded-xl
                                            border
                                            border-emerald-400/10
                                            bg-emerald-400/5
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                        "
                                    >
                                        🔐
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        BOTTOM STATUS BAR
                    ================================================= */}

                    <div
                        className="
                            px-6
                            sm:px-10
                            lg:px-12
                            py-5
                            border-t
                            border-white/10
                            bg-black/20
                            flex
                            flex-col
                            sm:flex-row
                            items-center
                            justify-between
                            gap-3
                        "
                    >

                        <div className="flex items-center gap-2">

                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />

                            <span className="text-xs text-gray-500 font-mono">
                                PROFILE://ACTIVE
                            </span>

                        </div>


                        <p className="text-xs text-gray-600 text-center">
                            Identity data is protected by secure authentication.
                        </p>


                        <span className="text-[10px] text-gray-600 font-mono">
                            v1.0.0
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}