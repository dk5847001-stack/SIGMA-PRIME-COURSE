import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    UserRound,
    Mail,
    LockKeyhole,
    UserPlus,
    ShieldCheck,
    CheckCircle2,
    AlertCircle,
    Loader2,
    ArrowRight,
} from "lucide-react";

import ThunderSermon from "../components/ThunderSermon";

export default function Signup() {
    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
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

        try {
            const response = await fetch(
                "http://localhost:3000/signup",
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            console.log(data);

            if (response.ok && data.success) {
                setMessage(data.message);
                setFormData(data.user);

                setTimeout(() => {
                    navigate("/profile");
                }, 1000);
            } else {
                setMessage(data.message);
            }

        } catch (err) {
            console.log(err);
            setMessage(data.message);
        }
        finally {
            setLoading(false);
        }
    };

    const isSuccess =
        message &&
        message.toLowerCase().includes("success");

    return (
        <main className="min-h-[calc(100vh-85px)] w-full flex items-center justify-center px-4 py-10 sm:px-6">

            {/* ================= CARD ================= */}
            <div className="relative w-full max-w-md">

                {/* ================= SIGNUP CARD ================= */}
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[28px]
                        border border-white/[0.12]
                        bg-white/[0.035]
                        backdrop-blur-2xl
                        shadow-[0_25px_100px_rgba(0,0,0,0.55)]
                    "
                >

                    {/* ================= THUNDER BACKGROUND ================= */}
                    <div className="absolute inset-0 pointer-events-none">
                        <ThunderSermon />
                    </div>

                    {/* Dark glass overlay */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-black/55
                            backdrop-blur-[2px]
                            pointer-events-none
                        "
                    />

                    {/* ================= CONTENT ================= */}
                    <div className="relative z-10 p-6 sm:p-8">

                        {/* Header */}
                        <div className="text-center mb-7">

                            {/* Icon */}
                            <div
                                className="
                                    mx-auto
                                    mb-4
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border border-cyan-300/20
                                    bg-cyan-400/[0.08]
                                    shadow-[0_0_35px_rgba(34,211,238,0.12)]
                                "
                            >
                                <UserPlus
                                    size={30}
                                    className="text-cyan-300"
                                />
                            </div>

                            {/* Small label */}
                            <div
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-gray-400
                                "
                            >
                                <ShieldCheck
                                    size={13}
                                    className="text-emerald-400"
                                />

                                Secure Registration
                            </div>

                            {/* Title */}
                            <h1
                                className="
                                    mt-4
                                    text-3xl
                                    sm:text-4xl
                                    font-bold
                                    tracking-tight
                                    text-white
                                "
                            >
                                Create Account
                            </h1>

                            <p className="mt-2 text-sm text-gray-400">
                                Join us and create your secure account.
                            </p>

                        </div>


                        {/* ================= FORM ================= */}
                        <form
                            onSubmit={handleFormSubmit}
                            className="space-y-4"
                        >

                            {/* ================= NAME ================= */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-gray-400
                                    "
                                >
                                    <UserRound size={14} />
                                    Full Name
                                </label>

                                <div className="relative group">

                                    <UserRound
                                        size={18}
                                        className="
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                            transition
                                            group-focus-within:text-cyan-300
                                        "
                                    />

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name..."
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/30
                                            py-3.5
                                            pl-11
                                            pr-4
                                            text-sm
                                            text-white
                                            placeholder:text-gray-600
                                            outline-none
                                            transition-all
                                            focus:border-cyan-400/50
                                            focus:bg-black/40
                                            focus:ring-2
                                            focus:ring-cyan-400/10
                                        "
                                    />

                                </div>
                            </div>


                            {/* ================= EMAIL ================= */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-gray-400
                                    "
                                >
                                    <Mail size={14} />
                                    Email Address
                                </label>

                                <div className="relative group">

                                    <Mail
                                        size={18}
                                        className="
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                            transition
                                            group-focus-within:text-cyan-300
                                        "
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email..."
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/30
                                            py-3.5
                                            pl-11
                                            pr-4
                                            text-sm
                                            text-white
                                            placeholder:text-gray-600
                                            outline-none
                                            transition-all
                                            focus:border-cyan-400/50
                                            focus:bg-black/40
                                            focus:ring-2
                                            focus:ring-cyan-400/10
                                        "
                                    />

                                </div>
                            </div>


                            {/* ================= PASSWORD ================= */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-gray-400
                                    "
                                >
                                    <LockKeyhole size={14} />
                                    Password
                                </label>

                                <div className="relative group">

                                    <LockKeyhole
                                        size={18}
                                        className="
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                            transition
                                            group-focus-within:text-cyan-300
                                        "
                                    />

                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Create a password..."
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/30
                                            py-3.5
                                            pl-11
                                            pr-4
                                            text-sm
                                            text-white
                                            placeholder:text-gray-600
                                            outline-none
                                            transition-all
                                            focus:border-cyan-400/50
                                            focus:bg-black/40
                                            focus:ring-2
                                            focus:ring-cyan-400/10
                                        "
                                    />

                                </div>
                            </div>


                            {/* ================= SECURITY INFO ================= */}
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-white/[0.08]
                                    bg-white/[0.025]
                                    px-4
                                    py-3
                                "
                            >
                                <ShieldCheck
                                    size={18}
                                    className="shrink-0 text-emerald-400"
                                />

                                <p className="text-[11px] leading-relaxed text-gray-400">
                                    Your account information is transmitted
                                    securely.
                                </p>
                            </div>


                            {/* ================= SIGNUP BUTTON ================= */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    group
                                    relative
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-cyan-300/20
                                    bg-cyan-400/[0.12]
                                    px-5
                                    py-3.5
                                    text-sm
                                    font-bold
                                    text-cyan-100
                                    shadow-[0_0_30px_rgba(34,211,238,0.08)]
                                    transition-all
                                    duration-300
                                    hover:border-cyan-300/40
                                    hover:bg-cyan-400/[0.18]
                                    hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                                    active:scale-[0.98]
                                    disabled:cursor-not-allowed
                                    disabled:opacity-50
                                "
                            >

                                {/* Shine */}
                                <span
                                    className="
                                        absolute
                                        inset-y-0
                                        -left-full
                                        w-1/2
                                        skew-x-[-20deg]
                                        bg-white/10
                                        transition-all
                                        duration-700
                                        group-hover:left-[120%]
                                    "
                                />

                                {loading ? (
                                    <>
                                        <Loader2
                                            size={18}
                                            className="animate-spin"
                                        />

                                        Creating account...
                                    </>
                                ) : (
                                    <>
                                        <UserPlus size={18} />

                                        Create Account

                                        <ArrowRight
                                            size={17}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                            "
                                        />
                                    </>
                                )}

                            </button>


                            {/* ================= RESPONSE MESSAGE ================= */}
                            {message && (
                                <div
                                    className={`
                                        flex
                                        items-start
                                        gap-3
                                        rounded-xl
                                        border
                                        px-4
                                        py-3
                                        text-sm
                                        ${
                                            isSuccess
                                                ? "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300"
                                                : "border-red-400/20 bg-red-400/[0.08] text-red-300"
                                        }
                                    `}
                                >

                                    {isSuccess ? (
                                        <CheckCircle2
                                            size={18}
                                            className="mt-0.5 shrink-0"
                                        />
                                    ) : (
                                        <AlertCircle
                                            size={18}
                                            className="mt-0.5 shrink-0"
                                        />
                                    )}

                                    <p>{message}</p>

                                </div>
                            )}

                        </form>


                        {/* ================= FOOTER ================= */}
                        <div
                            className="
                                mt-7
                                border-t
                                border-white/[0.08]
                                pt-5
                                text-center
                            "
                        >
                            <p className="text-xs text-gray-500">
                                Already have an account?
                            </p>

                            <button
                                type="button"
                                onClick={() => navigate("/login")}
                                className="
                                    mt-1
                                    inline-flex
                                    items-center
                                    gap-1
                                    text-sm
                                    font-semibold
                                    text-cyan-300
                                    transition
                                    hover:text-cyan-200
                                "
                            >
                                Login here
                                <ArrowRight size={14} />
                            </button>
                        </div>


                        {/* Secure session */}
                        <div className="mt-5 flex justify-center">
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-[10px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-gray-600
                                "
                            >
                                <span
                                    className="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-emerald-400
                                        shadow-[0_0_8px_rgba(52,211,153,0.8)]
                                    "
                                />

                                Secure Session
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}