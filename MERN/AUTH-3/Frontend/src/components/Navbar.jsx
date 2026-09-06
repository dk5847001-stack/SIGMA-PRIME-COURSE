import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import {
    Home,
    ShieldCheck,
    Mail,
    Info,
    User,
    LogIn,
    UserPlus,
    LogOut,
    Menu,
    X,
    ChevronRight,
    CircleUserRound,
    Search,
    Command,
    ArrowUpRight,
    Sparkles,
    Activity,
} from "lucide-react";

import TornPaper from "./TornPaper";

export default function Navbar() {

    // =========================================================
    // ROUTER
    // =========================================================

    const location = useLocation();
    const navigate = useNavigate();

    // =========================================================
    // AUTH STATE
    // =========================================================

    const [user, setUser] = useState(null);

    // =========================================================
    // MOBILE MENU
    // =========================================================

    const [menuOpen, setMenuOpen] = useState(false);

    // =========================================================
    // SEARCH STATE
    // =========================================================

    const [searchQuery, setSearchQuery] = useState("");
    const [searchOpen, setSearchOpen] = useState(false);

    const desktopSearchRef = useRef(null);
    const mobileSearchRef = useRef(null);
    const desktopInputRef = useRef(null);
    const mobileInputRef = useRef(null);

    // =========================================================
    // AUTH CHECK
    // =========================================================

    useEffect(() => {

        const checkAuth = async () => {

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

        checkAuth();

    }, [location.pathname]);

    // =========================================================
    // LOGIN
    // =========================================================

    const handleLoginButton = () => {

        setMenuOpen(false);
        setSearchOpen(false);
        setSearchQuery("");

        navigate("/login");

    };

    // =========================================================
    // SIGNUP
    // =========================================================

    const handleSignupButton = () => {

        setMenuOpen(false);
        setSearchOpen(false);
        setSearchQuery("");

        navigate("/signup");

    };

    // =========================================================
    // LOGOUT
    // =========================================================

    const handleLogoutButton = async () => {

        try {

            const response = await fetch(
                "http://localhost:3000/logout",
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            const data = await response.json();

            console.log(data);

            if (response.ok && data.success) {

                setUser(null);
                setMenuOpen(false);
                setSearchOpen(false);
                setSearchQuery("");

                navigate("/login");

            }

        } catch (err) {

            console.log(err);

        }

    };

    // =========================================================
    // CLOSE MOBILE MENU
    // =========================================================

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // =========================================================
    // ACTIVE ROUTE
    // =========================================================

    const isActive = (path) => {
        return location.pathname === path;
    };

    // =========================================================
    // BASIC NAV ITEMS
    // =========================================================

    const navItems = [

        {
            name: "Home",
            path: "/",
            icon: Home,
            keywords: "home main landing start",
        },

        {
            name: "Contact",
            path: "/contact",
            icon: Mail,
            keywords: "contact message email support help",
        },

        {
            name: "About",
            path: "/about",
            icon: Info,
            keywords: "about company information details",
        },

    ];

    // =========================================================
    // SEARCH ITEMS
    // =========================================================

    const searchItems = [

        ...navItems,

        ...(user
            ? [
                {
                    name: "Profile",
                    path: "/profile",
                    icon: User,
                    keywords: "profile account user personal settings",
                },
            ]
            : []),

        ...(user?.role === "admin"
            ? [
                {
                    name: "Admin",
                    path: "/admin",
                    icon: ShieldCheck,
                    keywords:
                        "admin administrator dashboard management control",
                },
            ]
            : []),

        {
            name: "Login",
            path: "/login",
            icon: LogIn,
            keywords:
                "login signin sign in authentication account",
        },

        {
            name: "Sign Up",
            path: "/signup",
            icon: UserPlus,
            keywords:
                "signup sign up register registration create account",
        },

    ];

    // =========================================================
    // FILTER SEARCH RESULTS
    // =========================================================

    const filteredResults = searchItems.filter((item) => {

        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return true;
        }

        return (
            item.name.toLowerCase().includes(query) ||
            item.path.toLowerCase().includes(query) ||
            item.keywords.toLowerCase().includes(query)
        );

    });

    // =========================================================
    // SEARCH NAVIGATION
    // =========================================================

    const handleSearchItemClick = (path) => {

        navigate(path);

        setSearchQuery("");
        setSearchOpen(false);
        setMenuOpen(false);

    };

    // =========================================================
    // SEARCH SUBMIT
    // =========================================================

    const handleSearch = (event) => {

        event.preventDefault();

        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return;
        }

        // Exact match
        const exactResult = searchItems.find(
            (item) =>
                item.name.toLowerCase() === query ||
                item.path.toLowerCase() === query
        );

        if (exactResult) {

            handleSearchItemClick(exactResult.path);

            return;
        }

        // Partial match
        const partialResult = searchItems.find(
            (item) =>
                item.name.toLowerCase().includes(query) ||
                item.path.toLowerCase().includes(query) ||
                item.keywords.toLowerCase().includes(query)
        );

        if (partialResult) {

            handleSearchItemClick(partialResult.path);

        }

    };

    // =========================================================
    // CLOSE SEARCH WHEN CLICKING OUTSIDE
    // =========================================================

    useEffect(() => {

        const handleClickOutside = (event) => {

            const desktopContains =
                desktopSearchRef.current?.contains(event.target);

            const mobileContains =
                mobileSearchRef.current?.contains(event.target);

            if (!desktopContains && !mobileContains) {
                setSearchOpen(false);
            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);

    // =========================================================
    // KEYBOARD SHORTCUTS
    // =========================================================

    useEffect(() => {

        const handleKeyboard = (event) => {

            // ESC
            if (event.key === "Escape") {

                setSearchOpen(false);
                setSearchQuery("");

                return;

            }

            // CTRL + K / CMD + K
            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                setSearchOpen(true);

                if (window.innerWidth >= 1024) {

                    desktopInputRef.current?.focus();

                } else {

                    mobileInputRef.current?.focus();

                }

            }

        };

        document.addEventListener(
            "keydown",
            handleKeyboard
        );

        return () => {

            document.removeEventListener(
                "keydown",
                handleKeyboard
            );

        };

    }, []);

    // =========================================================
    // CLOSE MOBILE MENU ON ROUTE CHANGE
    // =========================================================

    useEffect(() => {

        setMenuOpen(false);
        setSearchOpen(false);
        setSearchQuery("");

    }, [location.pathname]);

    // =========================================================
    // RENDER
    // =========================================================

    return (

        <header
            className="
                sticky
                top-0
                z-50
                w-full
                px-2
                pt-2
                sm:px-4
                sm:pt-3
                lg:px-6
                xl:px-8
            "
        >

            {/* =====================================================
                NAVBAR
            ====================================================== */}

            <nav
                className="
                    relative
                    z-50
                    w-full
                    overflow-visible
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    backdrop-blur-xl
                    shadow-[0_12px_50px_rgba(0,0,0,0.4)]
                "
            >

                {/* =================================================
                    TORN PAPER BACKGROUND

                    IMPORTANT:
                    z-0
                    NOT negative z-index
                ================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-0
                        overflow-hidden
                        rounded-2xl
                        opacity-100
                    "
                >

                    <TornPaper
                        tearSpeed={0.65}
                        glowIntensity={1}
                        pixelScale={1}
                    />

                </div>


                {/* =================================================
                    GLASS DARK OVERLAY
                ================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-[1]
                        rounded-2xl
                        bg-black/20
                        backdrop-blur-[5px]
                    "
                />


                {/* =================================================
                    TOP LIGHT
                ================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-0
                        right-0
                        top-0
                        z-[2]
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-300/50
                        to-transparent
                    "
                />


                {/* =================================================
                    LEFT GLOW
                ================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-16
                        top-0
                        z-[1]
                        h-20
                        w-40
                        rounded-full
                        bg-cyan-400/[0.04]
                        blur-3xl
                    "
                />


                {/* =================================================
                    MAIN NAV CONTENT
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        flex
                        min-h-[64px]
                        items-center
                        justify-between
                        gap-2
                        px-3
                        sm:min-h-[68px]
                        sm:gap-3
                        sm:px-5
                        lg:px-6
                        xl:px-7
                    "
                >

                    {/* =================================================
                        LOGO
                    ================================================== */}

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="
                            group
                            flex
                            shrink-0
                            items-center
                            gap-2.5
                            sm:gap-3
                        "
                    >

                        {/* LOGO ICON */}

                        <div
                            className="
                                relative
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-cyan-300/20
                                bg-cyan-400/[0.07]
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                group-hover:border-cyan-300/40
                                group-hover:bg-cyan-400/[0.12]
                                group-hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
                            "
                        >

                            <ShieldCheck
                                size={20}
                                strokeWidth={1.8}
                                className="
                                    text-cyan-300
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            />

                            <span
                                className="
                                    absolute
                                    -right-0.5
                                    -top-0.5
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-cyan-300
                                    shadow-[0_0_12px_rgba(103,232,249,0.95)]
                                "
                            />

                        </div>


                        {/* LOGO TEXT */}

                        <div className="hidden sm:block">

                            <div
                                className="
                                    text-[14px]
                                    font-semibold
                                    tracking-[0.18em]
                                    text-white
                                    sm:text-[15px]
                                "
                            >
                                NEXUS
                            </div>

                            <div
                                className="
                                    text-[8px]
                                    tracking-[0.28em]
                                    text-white/35
                                    sm:text-[9px]
                                "
                            >
                                SECURE SYSTEM
                            </div>

                        </div>

                    </Link>


                    {/* =================================================
                        DESKTOP AREA
                    ================================================== */}

                    <div
                        className="
                            hidden
                            lg:flex
                            flex-1
                            items-center
                            justify-center
                            gap-3
                            xl:gap-4
                        "
                    >

                        {/* =================================================
                            DESKTOP SEARCH
                        ================================================== */}

                        <div
                            ref={desktopSearchRef}
                            className="
                                relative
                                w-[190px]
                                xl:w-[260px]
                                2xl:w-[320px]
                            "
                        >

                            <form onSubmit={handleSearch}>

                                <div
                                    className="
                                        group
                                        flex
                                        h-10
                                        items-center
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.035]
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        focus-within:border-cyan-300/30
                                        focus-within:bg-white/[0.055]
                                        focus-within:shadow-[0_0_25px_rgba(34,211,238,0.08)]
                                    "
                                >

                                    <Search
                                        size={16}
                                        strokeWidth={1.8}
                                        className="
                                            ml-3
                                            shrink-0
                                            text-white/35
                                            transition-colors
                                            duration-300
                                            group-focus-within:text-cyan-300
                                        "
                                    />

                                    <input
                                        ref={desktopInputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(event) => {

                                            setSearchQuery(
                                                event.target.value
                                            );

                                            setSearchOpen(true);

                                        }}
                                        onFocus={() =>
                                            setSearchOpen(true)
                                        }
                                        placeholder="Search system..."
                                        autoComplete="off"
                                        className="
                                            h-full
                                            min-w-0
                                            flex-1
                                            bg-transparent
                                            px-2.5
                                            text-sm
                                            text-white
                                            outline-none
                                            placeholder:text-white/25
                                        "
                                    />

                                    <div
                                        className="
                                            mr-2
                                            hidden
                                            items-center
                                            gap-1
                                            rounded-md
                                            border
                                            border-white/10
                                            bg-white/[0.04]
                                            px-1.5
                                            py-1
                                            text-[9px]
                                            text-white/30
                                            xl:flex
                                        "
                                    >

                                        <Command size={10} />

                                        <span>K</span>

                                    </div>

                                </div>

                            </form>


                            {/* =================================================
                                DESKTOP SEARCH DROPDOWN
                            ================================================== */}

                            {searchOpen && (

                                <div
                                    className="
                                        absolute
                                        left-0
                                        right-0
                                        top-[calc(100%+10px)]
                                        z-[100]
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-black/90
                                        p-2
                                        shadow-[0_25px_70px_rgba(0,0,0,0.65)]
                                        backdrop-blur-2xl
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            px-3
                                            pb-2
                                            pt-1
                                        "
                                    >

                                        <span
                                            className="
                                                text-[9px]
                                                font-medium
                                                uppercase
                                                tracking-[0.22em]
                                                text-white/25
                                            "
                                        >
                                            Quick Navigation
                                        </span>

                                        <span
                                            className="
                                                text-[8px]
                                                uppercase
                                                tracking-widest
                                                text-cyan-300/40
                                            "
                                        >
                                            Nexus
                                        </span>

                                    </div>


                                    {filteredResults.length > 0 ? (

                                        <div className="space-y-1">

                                            {filteredResults.map(
                                                (item) => {

                                                    const Icon =
                                                        item.icon;

                                                    return (

                                                        <button
                                                            key={item.path}
                                                            type="button"
                                                            onClick={() =>
                                                                handleSearchItemClick(
                                                                    item.path
                                                                )
                                                            }
                                                            className="
                                                                group
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-3
                                                                rounded-xl
                                                                px-3
                                                                py-2.5
                                                                text-left
                                                                transition-all
                                                                duration-200
                                                                hover:bg-white/[0.06]
                                                            "
                                                        >

                                                            <div
                                                                className="
                                                                    flex
                                                                    h-8
                                                                    w-8
                                                                    shrink-0
                                                                    items-center
                                                                    justify-center
                                                                    rounded-lg
                                                                    border
                                                                    border-white/10
                                                                    bg-white/[0.035]
                                                                    transition-all
                                                                    group-hover:border-cyan-300/20
                                                                    group-hover:bg-cyan-300/[0.06]
                                                                "
                                                            >

                                                                <Icon
                                                                    size={15}
                                                                    strokeWidth={
                                                                        1.8
                                                                    }
                                                                    className="
                                                                        text-cyan-300/60
                                                                        group-hover:text-cyan-300
                                                                    "
                                                                />

                                                            </div>


                                                            <div className="min-w-0 flex-1">

                                                                <p
                                                                    className="
                                                                        truncate
                                                                        text-sm
                                                                        text-white/70
                                                                        group-hover:text-white
                                                                    "
                                                                >
                                                                    {
                                                                        item.name
                                                                    }
                                                                </p>

                                                                <p
                                                                    className="
                                                                        truncate
                                                                        text-[10px]
                                                                        text-white/25
                                                                    "
                                                                >
                                                                    {
                                                                        item.path
                                                                    }
                                                                </p>

                                                            </div>


                                                            <ArrowUpRight
                                                                size={14}
                                                                className="
                                                                    text-white/15
                                                                    transition-all
                                                                    group-hover:text-cyan-300
                                                                    group-hover:translate-x-0.5
                                                                    group-hover:-translate-y-0.5
                                                                "
                                                            />

                                                        </button>

                                                    );

                                                }
                                            )}

                                        </div>

                                    ) : (

                                        <div className="px-3 py-7 text-center">

                                            <Search
                                                size={20}
                                                className="
                                                    mx-auto
                                                    mb-2
                                                    text-white/15
                                                "
                                            />

                                            <p
                                                className="
                                                    text-xs
                                                    text-white/40
                                                "
                                            >
                                                No destination found
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-[9px]
                                                    text-white/20
                                                "
                                            >
                                                Try Home, Profile or Admin
                                            </p>

                                        </div>

                                    )}

                                </div>

                            )}

                        </div>


                        {/* =================================================
                            DESKTOP NAV LINKS
                        ================================================== */}

                        <div className="flex items-center gap-1">

                            {navItems.map((item) => {

                                const Icon = item.icon;
                                const active = isActive(item.path);

                                return (

                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`
                                            group
                                            relative
                                            flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            px-3
                                            py-2.5
                                            text-sm
                                            transition-all
                                            duration-300
                                            xl:px-4
                                            ${
                                                active
                                                    ? `
                                                        bg-white/[0.075]
                                                        text-cyan-200
                                                        shadow-[inset_0_0_20px_rgba(255,255,255,0.025)]
                                                    `
                                                    : `
                                                        text-white/55
                                                        hover:bg-white/[0.045]
                                                        hover:text-white
                                                    `
                                            }
                                        `}
                                    >

                                        <Icon
                                            size={16}
                                            strokeWidth={1.8}
                                            className={`
                                                transition-all
                                                duration-300
                                                ${
                                                    active
                                                        ? "text-cyan-300"
                                                        : "text-white/40 group-hover:text-cyan-300"
                                                }
                                            `}
                                        />

                                        <span>
                                            {item.name}
                                        </span>


                                        {active && (

                                            <span
                                                className="
                                                    absolute
                                                    bottom-0.5
                                                    left-1/2
                                                    h-[2px]
                                                    w-5
                                                    -translate-x-1/2
                                                    rounded-full
                                                    bg-cyan-300
                                                    shadow-[0_0_10px_rgba(103,232,249,0.9)]
                                                "
                                            />

                                        )}

                                    </Link>

                                );

                            })}


                            {/* =================================================
                                ADMIN
                            ================================================== */}

                            {user?.role === "admin" && (

                                <Link
                                    to="/admin"
                                    className={`
                                        group
                                        relative
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        px-3
                                        py-2.5
                                        text-sm
                                        transition-all
                                        duration-300
                                        xl:px-4
                                        ${
                                            isActive("/admin")
                                                ? `
                                                    bg-purple-400/[0.09]
                                                    text-purple-200
                                                `
                                                : `
                                                    text-white/55
                                                    hover:bg-purple-400/[0.05]
                                                    hover:text-white
                                                `
                                        }
                                    `}
                                >

                                    <ShieldCheck
                                        size={16}
                                        strokeWidth={1.8}
                                        className="
                                            text-purple-300
                                            transition-transform
                                            duration-300
                                            group-hover:scale-110
                                        "
                                    />

                                    <span>
                                        Admin
                                    </span>


                                    {isActive("/admin") && (

                                        <span
                                            className="
                                                absolute
                                                bottom-0.5
                                                left-1/2
                                                h-[2px]
                                                w-5
                                                -translate-x-1/2
                                                rounded-full
                                                bg-purple-300
                                                shadow-[0_0_10px_rgba(216,180,254,0.8)]
                                            "
                                        />

                                    )}

                                </Link>

                            )}


                            {/* =================================================
                                PROFILE
                            ================================================== */}

                            {user && (

                                <Link
                                    to="/profile"
                                    className={`
                                        group
                                        relative
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        px-3
                                        py-2.5
                                        text-sm
                                        transition-all
                                        duration-300
                                        xl:px-4
                                        ${
                                            isActive("/profile")
                                                ? `
                                                    bg-white/[0.075]
                                                    text-cyan-200
                                                `
                                                : `
                                                    text-white/55
                                                    hover:bg-white/[0.045]
                                                    hover:text-white
                                                `
                                        }
                                    `}
                                >

                                    <User
                                        size={16}
                                        strokeWidth={1.8}
                                        className="
                                            text-cyan-300
                                        "
                                    />

                                    <span>
                                        Profile
                                    </span>

                                </Link>

                            )}

                        </div>

                    </div>


                    {/* =================================================
                        DESKTOP RIGHT SIDE
                    ================================================== */}

                    <div
                        className="
                            hidden
                            shrink-0
                            items-center
                            gap-2
                            lg:flex
                            xl:gap-3
                        "
                    >

                        {user ? (

                            <>

                                {/* =================================================
                                    USER STATUS
                                ================================================== */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2.5
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.025]
                                        px-2.5
                                        py-2
                                        backdrop-blur-xl
                                    "
                                >

                                    <div
                                        className="
                                            relative
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-cyan-300/10
                                            bg-cyan-400/[0.07]
                                        "
                                    >

                                        <CircleUserRound
                                            size={17}
                                            strokeWidth={1.7}
                                            className="text-cyan-300"
                                        />

                                        <span
                                            className="
                                                absolute
                                                right-0
                                                top-0
                                                h-1.5
                                                w-1.5
                                                rounded-full
                                                bg-emerald-400
                                                shadow-[0_0_8px_rgba(52,211,153,0.8)]
                                            "
                                        />

                                    </div>


                                    <div className="leading-tight">

                                        <p
                                            className="
                                                text-[8px]
                                                uppercase
                                                tracking-[0.2em]
                                                text-white/30
                                            "
                                        >
                                            Welcome
                                        </p>

                                        <p
                                            className="
                                                max-w-[90px]
                                                truncate
                                                text-sm
                                                font-medium
                                                text-white
                                                xl:max-w-[120px]
                                            "
                                        >
                                            {user.name}
                                        </p>

                                    </div>

                                </div>


                                {/* =================================================
                                    LOGOUT
                                ================================================== */}

                                <button
                                    onClick={handleLogoutButton}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-red-400/10
                                        bg-red-400/[0.035]
                                        px-3
                                        py-2.5
                                        text-sm
                                        text-red-300/80
                                        transition-all
                                        duration-300
                                        hover:border-red-400/25
                                        hover:bg-red-400/[0.08]
                                        hover:text-red-200
                                        xl:px-4
                                    "
                                >

                                    <LogOut
                                        size={16}
                                        strokeWidth={1.8}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-0.5
                                        "
                                    />

                                    <span>
                                        Logout
                                    </span>

                                </button>

                            </>

                        ) : (

                            <>

                                {/* =================================================
                                    SIGN UP
                                ================================================== */}

                                <button
                                    onClick={handleSignupButton}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.025]
                                        px-3
                                        py-2.5
                                        text-sm
                                        text-white/65
                                        transition-all
                                        duration-300
                                        hover:border-white/20
                                        hover:bg-white/[0.06]
                                        hover:text-white
                                        xl:px-4
                                    "
                                >

                                    <UserPlus
                                        size={16}
                                        strokeWidth={1.8}
                                        className="
                                            text-white/50
                                            transition-colors
                                            group-hover:text-cyan-300
                                        "
                                    />

                                    <span>
                                        Sign Up
                                    </span>

                                </button>


                                {/* =================================================
                                    LOGIN
                                ================================================== */}

                                <button
                                    onClick={handleLoginButton}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-cyan-300/20
                                        bg-cyan-300/[0.06]
                                        px-3
                                        py-2.5
                                        text-sm
                                        text-cyan-200
                                        transition-all
                                        duration-300
                                        hover:border-cyan-300/40
                                        hover:bg-cyan-300/[0.10]
                                        hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
                                        xl:px-4
                                    "
                                >

                                    <LogIn
                                        size={16}
                                        strokeWidth={1.8}
                                    />

                                    <span>
                                        Login
                                    </span>

                                    <ChevronRight
                                        size={14}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-0.5
                                        "
                                    />

                                </button>

                            </>

                        )}

                    </div>


                    {/* =================================================
                        MOBILE / TABLET SEARCH
                    ================================================== */}

                    <div
                        ref={mobileSearchRef}
                        className="
                            relative
                            ml-auto
                            flex-1
                            max-w-[220px]
                            sm:max-w-[320px]
                            lg:hidden
                        "
                    >

                        <form onSubmit={handleSearch}>

                            <div
                                className="
                                    group
                                    flex
                                    h-10
                                    items-center
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.035]
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    focus-within:border-cyan-300/30
                                    focus-within:bg-white/[0.055]
                                "
                            >

                                <Search
                                    size={15}
                                    strokeWidth={1.8}
                                    className="
                                        ml-3
                                        shrink-0
                                        text-white/35
                                        group-focus-within:text-cyan-300
                                    "
                                />

                                <input
                                    ref={mobileInputRef}
                                    type="text"
                                    value={searchQuery}
                                    onChange={(event) => {

                                        setSearchQuery(
                                            event.target.value
                                        );

                                        setSearchOpen(true);

                                    }}
                                    onFocus={() =>
                                        setSearchOpen(true)
                                    }
                                    placeholder="Search..."
                                    autoComplete="off"
                                    className="
                                        min-w-0
                                        flex-1
                                        bg-transparent
                                        px-2
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-white/25
                                    "
                                />

                            </div>

                        </form>


                        {/* =================================================
                            MOBILE SEARCH DROPDOWN
                        ================================================== */}

                        {searchOpen && (

                            <div
                                className="
                                    absolute
                                    right-0
                                    top-[calc(100%+10px)]
                                    z-[100]
                                    w-[260px]
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-black/90
                                    p-2
                                    shadow-[0_25px_70px_rgba(0,0,0,0.65)]
                                    backdrop-blur-2xl
                                    sm:w-[310px]
                                "
                            >

                                <div
                                    className="
                                        px-3
                                        pb-2
                                        pt-1
                                        text-[9px]
                                        uppercase
                                        tracking-[0.22em]
                                        text-white/25
                                    "
                                >
                                    Quick Navigation
                                </div>


                                {filteredResults.length > 0 ? (

                                    <div className="space-y-1">

                                        {filteredResults.map(
                                            (item) => {

                                                const Icon =
                                                    item.icon;

                                                return (

                                                    <button
                                                        key={item.path}
                                                        type="button"
                                                        onClick={() =>
                                                            handleSearchItemClick(
                                                                item.path
                                                            )
                                                        }
                                                        className="
                                                            group
                                                            flex
                                                            w-full
                                                            items-center
                                                            gap-3
                                                            rounded-xl
                                                            px-3
                                                            py-2.5
                                                            text-left
                                                            transition-all
                                                            duration-200
                                                            hover:bg-white/[0.06]
                                                        "
                                                    >

                                                        <div
                                                            className="
                                                                flex
                                                                h-8
                                                                w-8
                                                                shrink-0
                                                                items-center
                                                                justify-center
                                                                rounded-lg
                                                                border
                                                                border-white/10
                                                                bg-white/[0.035]
                                                            "
                                                        >

                                                            <Icon
                                                                size={15}
                                                                className="
                                                                    text-cyan-300/70
                                                                    group-hover:text-cyan-300
                                                                "
                                                            />

                                                        </div>


                                                        <div className="min-w-0 flex-1">

                                                            <p
                                                                className="
                                                                    truncate
                                                                    text-sm
                                                                    text-white/75
                                                                    group-hover:text-white
                                                                "
                                                            >
                                                                {
                                                                    item.name
                                                                }
                                                            </p>

                                                            <p
                                                                className="
                                                                    truncate
                                                                    text-[10px]
                                                                    text-white/25
                                                                "
                                                            >
                                                                {
                                                                    item.path
                                                                }
                                                            </p>

                                                        </div>


                                                        <ArrowUpRight
                                                            size={13}
                                                            className="
                                                                text-white/20
                                                                group-hover:text-cyan-300
                                                            "
                                                        />

                                                    </button>

                                                );

                                            }
                                        )}

                                    </div>

                                ) : (

                                    <div
                                        className="
                                            px-3
                                            py-6
                                            text-center
                                        "
                                    >

                                        <Search
                                            size={20}
                                            className="
                                                mx-auto
                                                mb-2
                                                text-white/15
                                            "
                                        />

                                        <p
                                            className="
                                                text-xs
                                                text-white/40
                                            "
                                        >
                                            No destination found
                                        </p>

                                    </div>

                                )}

                            </div>

                        )}

                    </div>


                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        onClick={() =>
                            setMenuOpen((previous) => !previous)
                        }
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.035]
                            text-white/70
                            transition-all
                            duration-300
                            hover:border-white/20
                            hover:bg-white/[0.07]
                            hover:text-white
                            lg:hidden
                        "
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                    >

                        {menuOpen ? (

                            <X
                                size={20}
                                strokeWidth={1.8}
                            />

                        ) : (

                            <Menu
                                size={20}
                                strokeWidth={1.8}
                            />

                        )}

                    </button>

                </div>


                {/* =====================================================
                    MOBILE MENU
                ====================================================== */}

                {menuOpen && (

                    <div
                        className="
                            relative
                            z-20
                            border-t
                            border-white/[0.07]
                            px-3
                            pb-4
                            pt-3
                            lg:hidden
                        "
                    >

                        {/* =================================================
                            NAV LINKS
                        ================================================== */}

                        <div className="space-y-1">

                            {navItems.map((item) => {

                                const Icon = item.icon;
                                const active = isActive(item.path);

                                return (

                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMenu}
                                        className={`
                                            flex
                                            items-center
                                            gap-3
                                            rounded-xl
                                            px-4
                                            py-3
                                            text-sm
                                            transition-all
                                            duration-200
                                            ${
                                                active
                                                    ? `
                                                        bg-white/[0.075]
                                                        text-cyan-200
                                                    `
                                                    : `
                                                        text-white/55
                                                        hover:bg-white/[0.045]
                                                        hover:text-white
                                                    `
                                            }
                                        `}
                                    >

                                        <Icon
                                            size={17}
                                            strokeWidth={1.8}
                                            className={
                                                active
                                                    ? "text-cyan-300"
                                                    : "text-white/40"
                                            }
                                        />

                                        <span>
                                            {item.name}
                                        </span>


                                        {active && (

                                            <span
                                                className="
                                                    ml-auto
                                                    text-[8px]
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-cyan-300/60
                                                "
                                            >
                                                Active
                                            </span>

                                        )}

                                    </Link>

                                );

                            })}


                            {/* =================================================
                                MOBILE ADMIN
                            ================================================== */}

                            {user?.role === "admin" && (

                                <Link
                                    to="/admin"
                                    onClick={closeMenu}
                                    className={`
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-sm
                                        transition-all
                                        duration-200
                                        ${
                                            isActive("/admin")
                                                ? "bg-purple-400/[0.09] text-purple-200"
                                                : "text-purple-200/75 hover:bg-purple-400/[0.06]"
                                        }
                                    `}
                                >

                                    <ShieldCheck
                                        size={17}
                                        strokeWidth={1.8}
                                        className="text-purple-300"
                                    />

                                    <span>
                                        Admin
                                    </span>


                                    <span
                                        className="
                                            ml-auto
                                            text-[8px]
                                            uppercase
                                            tracking-[0.2em]
                                            text-purple-300/50
                                        "
                                    >
                                        Control
                                    </span>

                                </Link>

                            )}


                            {/* =================================================
                                MOBILE PROFILE
                            ================================================== */}

                            {user && (

                                <Link
                                    to="/profile"
                                    onClick={closeMenu}
                                    className={`
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-sm
                                        transition-all
                                        duration-200
                                        ${
                                            isActive("/profile")
                                                ? "bg-white/[0.075] text-cyan-200"
                                                : "text-white/55 hover:bg-white/[0.045] hover:text-white"
                                        }
                                    `}
                                >

                                    <User
                                        size={17}
                                        strokeWidth={1.8}
                                        className="text-cyan-300"
                                    />

                                    <span>
                                        Profile
                                    </span>

                                </Link>

                            )}

                        </div>


                        {/* =================================================
                            MOBILE USER AREA
                        ================================================== */}

                        <div
                            className="
                                mt-3
                                border-t
                                border-white/[0.07]
                                pt-3
                            "
                        >

                            {user ? (

                                <div className="space-y-2">

                                    {/* USER CARD */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/[0.025]
                                            px-4
                                            py-3
                                        "
                                    >

                                        <div
                                            className="
                                                relative
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                border
                                                border-cyan-300/10
                                                bg-cyan-400/[0.07]
                                            "
                                        >

                                            <CircleUserRound
                                                size={18}
                                                className="text-cyan-300"
                                            />

                                            <span
                                                className="
                                                    absolute
                                                    right-0
                                                    top-0
                                                    h-1.5
                                                    w-1.5
                                                    rounded-full
                                                    bg-emerald-400
                                                "
                                            />

                                        </div>


                                        <div className="min-w-0">

                                            <p
                                                className="
                                                    text-[8px]
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-white/30
                                                "
                                            >
                                                Authenticated
                                            </p>

                                            <p
                                                className="
                                                    truncate
                                                    text-sm
                                                    text-white
                                                "
                                            >
                                                {user.name}
                                            </p>

                                        </div>


                                        <div
                                            className="
                                                ml-auto
                                                flex
                                                shrink-0
                                                items-center
                                                gap-1.5
                                                rounded-full
                                                border
                                                border-emerald-400/10
                                                bg-emerald-400/[0.05]
                                                px-2
                                                py-1
                                            "
                                        >

                                            <span
                                                className="
                                                    h-1.5
                                                    w-1.5
                                                    rounded-full
                                                    bg-emerald-400
                                                    shadow-[0_0_7px_rgba(52,211,153,0.8)]
                                                "
                                            />

                                            <span
                                                className="
                                                    text-[7px]
                                                    uppercase
                                                    tracking-wider
                                                    text-emerald-300/70
                                                "
                                            >
                                                Online
                                            </span>

                                        </div>

                                    </div>


                                    {/* LOGOUT */}

                                    <button
                                        type="button"
                                        onClick={handleLogoutButton}
                                        className="
                                            flex
                                            w-full
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            border
                                            border-red-400/10
                                            bg-red-400/[0.04]
                                            px-4
                                            py-3
                                            text-sm
                                            text-red-300
                                            transition-all
                                            duration-200
                                            hover:border-red-400/20
                                            hover:bg-red-400/[0.08]
                                        "
                                    >

                                        <LogOut size={17} />

                                        Logout

                                    </button>

                                </div>

                            ) : (

                                <div className="grid grid-cols-2 gap-2">

                                    {/* SIGN UP */}

                                    <button
                                        type="button"
                                        onClick={handleSignupButton}
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/[0.025]
                                            px-3
                                            py-3
                                            text-sm
                                            text-white/70
                                            transition-all
                                            duration-200
                                            hover:border-white/20
                                            hover:bg-white/[0.06]
                                            hover:text-white
                                        "
                                    >

                                        <UserPlus size={16} />

                                        Sign Up

                                    </button>


                                    {/* LOGIN */}

                                    <button
                                        type="button"
                                        onClick={handleLoginButton}
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            border
                                            border-cyan-300/20
                                            bg-cyan-300/[0.06]
                                            px-3
                                            py-3
                                            text-sm
                                            text-cyan-200
                                            transition-all
                                            duration-200
                                            hover:border-cyan-300/40
                                            hover:bg-cyan-300/[0.10]
                                        "
                                    >

                                        <LogIn size={16} />

                                        Login

                                    </button>

                                </div>

                            )}

                        </div>


                        {/* =================================================
                            SYSTEM STATUS
                        ================================================== */}

                        <div
                            className="
                                mt-3
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-white/[0.06]
                                bg-white/[0.02]
                                py-2.5
                            "
                        >

                            <Activity
                                size={12}
                                className="text-cyan-300/60"
                            />

                            <span
                                className="
                                    text-[8px]
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/25
                                "
                            >
                                Nexus Interface Online
                            </span>

                            <Sparkles
                                size={11}
                                className="text-purple-300/50"
                            />

                        </div>

                    </div>

                )}

            </nav>

        </header>
    );
}