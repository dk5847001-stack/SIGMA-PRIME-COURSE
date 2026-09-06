import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

import {
    Mail,
    LockKeyhole,
    LogIn,
    ShieldCheck,
    AlertTriangle,
    CheckCircle2,
    Loader2,
    ArrowRight,
} from "lucide-react";

import ThunderSermon from "../components/ThunderSermon";

export default function Login() {
    const location = useLocation();
    const messages = location.state?.message;

    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });


    // =========================
    // Input change
    // =========================

    const handleInputChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value,
        }));
    };


    // =========================
    // Glitch animation
    // =========================

    useEffect(() => {
        if (!messages) return;

        const tl = gsap.timeline({
            repeat: 2,
        });

        tl.to(".glitch-text", {
            x: -3,
            skewX: 10,
            duration: 0.05,
        })
            .to(".glitch-text", {
                x: 3,
                skewX: -8,
                duration: 0.05,
            })
            .to(".glitch-text", {
                x: 0,
                skewX: 0,
                duration: 0.05,
            });

        return () => {
            tl.kill();
        };
    }, [messages]);


    // =========================
    // Form submit
    // =========================

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch(
                "http://localhost:3000/login",
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            console.log(data);

            if (response.ok && data.success) {
                setMessage(data.message);

                const redirectTo =
                    location.state?.from?.pathname ||
                    "/profile";

                // Don't put user object inside formData

                setTimeout(() => {
                    navigate(redirectTo, {
                        replace: true,
                    });
                }, 1000);

            } else {
                setMessage(data.message);
            }

        } catch (err) {
            console.log(err);

            setMessage(
                "Something went wrong. Please try again."
            );

        } finally {
            setLoading(false);
        }
    };


    return (
        <main className="
            relative
            min-h-[calc(100vh-85px)]
            w-full
            overflow-hidden
            flex
            items-center
            justify-center
            px-4
            py-10
            sm:px-6
        ">

            {/* =====================================================
                THUNDER BACKGROUND
            ====================================================== */}

            <div className="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
            ">
                <ThunderSermon />
            </div>


            {/* =====================================================
                DARK ATMOSPHERIC OVERLAY
            ====================================================== */}

            <div className="
                pointer-events-none
                absolute
                inset-0
                bg-black/35
            " />


            {/* =====================================================
                CENTER CONTENT
            ====================================================== */}

            <div className="
                relative
                z-10
                w-full
                max-w-md
            ">


                {/* =================================================
                    TOP SYSTEM LABEL
                ================================================== */}

                <div className="
                    mb-4
                    flex
                    items-center
                    justify-center
                    gap-2
                ">

                    <span className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-300
                        shadow-[0_0_12px_rgba(103,232,249,0.9)]
                    " />

                    <span className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.35em]
                        text-cyan-200/60
                    ">
                        Secure Authentication
                    </span>

                </div>


                {/* =================================================
                    LOGIN CARD
                ================================================== */}

                <div className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/[0.12]
                    bg-white/[0.035]
                    backdrop-blur-2xl
                    shadow-[0_25px_100px_rgba(0,0,0,0.55)]
                ">


                    {/* TOP GLASS LINE */}

                    <div className="
                        pointer-events-none
                        absolute
                        left-0
                        right-0
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-white/40
                        to-transparent
                    " />


                    {/* CYAN GLOW */}

                    <div className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-40
                        w-40
                        rounded-full
                        bg-cyan-400/10
                        blur-3xl
                    " />


                    {/* PURPLE GLOW */}

                    <div className="
                        pointer-events-none
                        absolute
                        -bottom-20
                        -left-20
                        h-40
                        w-40
                        rounded-full
                        bg-purple-500/10
                        blur-3xl
                    " />


                    {/* =================================================
                        CARD CONTENT
                    ================================================== */}

                    <div className="
                        relative
                        z-10
                        p-6
                        sm:p-8
                    ">


                        {/* =============================================
                            HEADER
                        ============================================== */}

                        <div className="text-center">


                            {/* ICON */}

                            <div className="
                                mx-auto
                                mb-5
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-cyan-300/20
                                bg-cyan-300/[0.06]
                                shadow-[0_0_30px_rgba(34,211,238,0.08)]
                            ">

                                <ShieldCheck
                                    size={27}
                                    strokeWidth={1.6}
                                    className="text-cyan-300"
                                />

                            </div>


                            <h1 className="
                                text-2xl
                                font-semibold
                                tracking-tight
                                text-white
                                sm:text-3xl
                            ">
                                Welcome Back
                            </h1>


                            <p className="
                                mt-2
                                text-sm
                                text-white/40
                            ">
                                Sign in to continue to your account
                            </p>

                        </div>


                        {/* =================================================
                            REDIRECT MESSAGE
                        ================================================== */}

                        {messages && (
                            <div className="
                                glitch-text
                                mt-6
                                flex
                                items-start
                                gap-3
                                rounded-xl
                                border
                                border-red-400/20
                                bg-red-400/[0.06]
                                px-4
                                py-3
                            ">

                                <AlertTriangle
                                    size={18}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-red-300
                                    "
                                />

                                <div>

                                    <p className="
                                        text-[10px]
                                        uppercase
                                        tracking-[0.18em]
                                        text-red-300/50
                                    ">
                                        Access Notice
                                    </p>

                                    <p className="
                                        mt-0.5
                                        text-sm
                                        font-medium
                                        text-red-200
                                    ">
                                        {messages}
                                    </p>

                                </div>

                            </div>
                        )}


                        {/* =================================================
                            FORM
                        ================================================== */}

                        <form
                            onSubmit={handleFormSubmit}
                            className="mt-7 space-y-5"
                        >


                            {/* =============================================
                                EMAIL
                            ============================================== */}

                            <div>

                                <label
                                    htmlFor="email"
                                    className="
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-medium
                                        text-white/55
                                    "
                                >

                                    <Mail
                                        size={14}
                                        className="text-cyan-300/70"
                                    />

                                    Email Address

                                </label>


                                <div className="relative">

                                    <Mail
                                        size={17}
                                        strokeWidth={1.7}
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-white/25
                                        "
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email..."
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        autoComplete="email"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/20
                                            pl-11
                                            pr-4
                                            text-sm
                                            text-white
                                            outline-none
                                            transition-all
                                            placeholder:text-white/20
                                            focus:border-cyan-300/35
                                            focus:bg-black/30
                                            focus:ring-2
                                            focus:ring-cyan-300/10
                                        "
                                    />

                                </div>

                            </div>


                            {/* =============================================
                                PASSWORD
                            ============================================== */}

                            <div>

                                <label
                                    htmlFor="password"
                                    className="
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-medium
                                        text-white/55
                                    "
                                >

                                    <LockKeyhole
                                        size={14}
                                        className="text-purple-300/70"
                                    />

                                    Password

                                </label>


                                <div className="relative">

                                    <LockKeyhole
                                        size={17}
                                        strokeWidth={1.7}
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-white/25
                                        "
                                    />

                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password..."
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        autoComplete="current-password"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/20
                                            pl-11
                                            pr-4
                                            text-sm
                                            text-white
                                            outline-none
                                            transition-all
                                            placeholder:text-white/20
                                            focus:border-purple-300/35
                                            focus:bg-black/30
                                            focus:ring-2
                                            focus:ring-purple-300/10
                                        "
                                    />

                                </div>

                            </div>


                            {/* =============================================
                                LOGIN BUTTON
                            ============================================== */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    group
                                    relative
                                    flex
                                    h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-cyan-300/20
                                    bg-cyan-300/[0.07]
                                    text-sm
                                    font-semibold
                                    text-cyan-100
                                    transition-all
                                    duration-300
                                    hover:border-cyan-300/40
                                    hover:bg-cyan-300/[0.12]
                                    hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
                                    disabled:cursor-not-allowed
                                    disabled:opacity-50
                                "
                            >

                                {/* Button shine */}

                                <span className="
                                    pointer-events-none
                                    absolute
                                    inset-y-0
                                    -left-20
                                    w-20
                                    skew-x-[-20deg]
                                    bg-white/10
                                    blur-md
                                    transition-all
                                    duration-700
                                    group-hover:left-[120%]
                                " />


                                {loading ? (
                                    <>
                                        <Loader2
                                            size={17}
                                            className="animate-spin"
                                        />

                                        Logging in...
                                    </>
                                ) : (
                                    <>
                                        <LogIn
                                            size={17}
                                            strokeWidth={1.8}
                                        />

                                        Login

                                        <ArrowRight
                                            size={15}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                            "
                                        />
                                    </>
                                )}

                            </button>


                            {/* =================================================
                                RESPONSE MESSAGE
                            ================================================== */}

                            {message && (
                                <div className={`
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    px-4
                                    py-3
                                    text-sm

                                    ${
                                        message
                                            .toLowerCase()
                                            .includes("success")
                                            ? `
                                                border-green-400/15
                                                bg-green-400/[0.05]
                                                text-green-300
                                            `
                                            : `
                                                border-red-400/15
                                                bg-red-400/[0.05]
                                                text-red-300
                                            `
                                    }
                                `}>

                                    {message
                                        .toLowerCase()
                                        .includes("success") ? (
                                        <CheckCircle2
                                            size={17}
                                            className="shrink-0"
                                        />
                                    ) : (
                                        <AlertTriangle
                                            size={17}
                                            className="shrink-0"
                                        />
                                    )}

                                    <span>
                                        {message}
                                    </span>

                                </div>
                            )}

                        </form>


                        {/* =================================================
                            SECURITY FOOTER
                        ================================================== */}

                        <div className="
                            mt-7
                            flex
                            items-center
                            justify-between
                            border-t
                            border-white/[0.07]
                            pt-5
                        ">

                            <div className="
                                flex
                                items-center
                                gap-2
                            ">

                                <span className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-green-400
                                    shadow-[0_0_8px_rgba(74,222,128,0.8)]
                                " />

                                <span className="
                                    text-[9px]
                                    uppercase
                                    tracking-[0.18em]
                                    text-white/30
                                ">
                                    Secure Session
                                </span>

                            </div>


                            <span className="
                                text-[9px]
                                uppercase
                                tracking-[0.18em]
                                text-white/20
                            ">
                                TLS / AUTH
                            </span>

                        </div>

                    </div>
                </div>


                {/* =================================================
                    BOTTOM STATUS
                ================================================== */}

                <div className="
                    mt-4
                    text-center
                ">

                    <span className="
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-white/20
                    ">
                        Authentication Gateway • v1.0
                    </span>

                </div>

            </div>

        </main>
    );
}