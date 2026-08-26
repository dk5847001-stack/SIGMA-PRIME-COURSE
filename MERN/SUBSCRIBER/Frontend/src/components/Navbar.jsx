import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState, useEffect, useRef } from "react";


// =====================================================
// NAVIGATION
// =====================================================

const navigation = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Admin Panel",
    href: "/admin",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];


// =====================================================
// CLASS NAMES HELPER
// =====================================================

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


// =====================================================
// NAVBAR
// =====================================================

export default function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const searchInputRef = useRef(null);


  // ===================================================
  // GET SEARCH FROM URL
  // ===================================================

  useEffect(() => {

    const params = new URLSearchParams(location.search);

    const existingSearch = params.get("search") || "";

    setSearch(existingSearch);

  }, [location.search]);


  // ===================================================
  // KEYBOARD SHORTCUT
  // "/" => SEARCH
  // ===================================================

  useEffect(() => {

    const handleKeyboard = (event) => {

      // Don't trigger when user is typing
      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA" ||
        event.target.tagName === "SELECT"
      ) {
        return;
      }


      // Press "/" to focus search
      if (event.key === "/") {

        event.preventDefault();

        searchInputRef.current?.focus();

      }

    };


    window.addEventListener(
      "keydown",
      handleKeyboard
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyboard
      );

    };

  }, []);


  // ===================================================
  // SEARCH
  // ===================================================

  const handleSearch = (event) => {

    event.preventDefault();

    const query = search.trim();


    // Empty search
    if (!query) {

      navigate("/");

      return;

    }


    navigate(
      `/?search=${encodeURIComponent(query)}`
    );

  };


  // ===================================================
  // CLEAR SEARCH
  // ===================================================

  const clearSearch = () => {

    setSearch("");

    navigate("/");

  };


  // ===================================================
  // ACTIVE ROUTE
  // ===================================================

  const isActiveRoute = (href) => {

    if (href === "/") {

      return location.pathname === "/";

    }

    return location.pathname.startsWith(href);

  };


  return (

    <Disclosure
      as="nav"
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/90 shadow-xl shadow-black/10 backdrop-blur-xl"
    >

      {({ open, close }) => (

        <>

          {/* ================================================= */}
          {/* MAIN CONTAINER */}
          {/* ================================================= */}

          <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8">

            <div className="flex min-h-16 items-center gap-2">

              {/* ================================================= */}
              {/* MOBILE MENU BUTTON */}
              {/* ================================================= */}

              <div className="flex shrink-0 items-center lg:hidden">

                <DisclosureButton
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label={
                    open
                      ? "Close navigation menu"
                      : "Open navigation menu"
                  }
                >

                  {open ? (

                    <XMarkIcon className="size-6" />

                  ) : (

                    <Bars3Icon className="size-6" />

                  )}

                </DisclosureButton>

              </div>


              {/* ================================================= */}
              {/* LOGO */}
              {/* ================================================= */}

              <Link
                to="/"
                onClick={() => close()}
                className="group flex shrink-0 items-center gap-2"
              >

                {/* Logo Icon */}

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 transition duration-200 group-hover:scale-105">

                  <span className="text-lg font-black text-white">
                    S
                  </span>

                </div>


                {/* Logo Text */}

                <div className="hidden xs:block sm:block">

                  <span className="block text-base font-bold leading-none text-white sm:text-lg">
                    Subscriber
                  </span>

                  <span className="hidden text-[10px] font-medium tracking-wider text-gray-500 md:block">
                    MANAGEMENT
                  </span>

                </div>

              </Link>


              {/* ================================================= */}
              {/* DESKTOP NAVIGATION */}
              {/* ================================================= */}

              <div className="ml-3 hidden lg:flex">

                <div className="flex items-center gap-1">

                  {navigation.map((item) => {

                    const active =
                      isActiveRoute(item.href);


                    return (

                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(

                          active
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                            : "text-gray-400 hover:bg-white/10 hover:text-white",

                          "rounded-lg px-3 py-2 text-sm font-medium transition duration-200"

                        )}
                      >

                        {item.name}

                      </Link>

                    );

                  })}

                </div>

              </div>


              {/* ================================================= */}
              {/* SEARCH */}
              {/* ================================================= */}

              <div className="ml-auto hidden flex-1 justify-center px-4 md:flex lg:px-8">

                <form
                  onSubmit={handleSearch}
                  className="w-full max-w-md"
                >

                  <div className="group relative">

                    {/* Search Icon */}

                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-500 transition group-focus-within:text-indigo-400"
                    />


                    {/* Input */}

                    <input
                      ref={searchInputRef}
                      type="search"
                      value={search}
                      onChange={(event) =>
                        setSearch(event.target.value)
                      }
                      placeholder="Search subscribers..."
                      className="h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-20 text-sm text-white placeholder:text-gray-600 outline-none transition duration-200 hover:border-white/20 hover:bg-white/[0.06] focus:border-indigo-500/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-indigo-500/10"
                    />


                    {/* Clear */}

                    {search && (

                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-11 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-md text-gray-500 transition hover:bg-white/10 hover:text-white"
                        aria-label="Clear search"
                      >

                        <XMarkIcon className="size-4" />

                      </button>

                    )}


                    {/* Keyboard Shortcut */}

                    {!search && (

                      <span className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gray-600 xl:block">
                        /
                      </span>

                    )}

                  </div>

                </form>

              </div>


              {/* ================================================= */}
              {/* RIGHT ACTIONS */}
              {/* ================================================= */}

              <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">


                {/* ================================================= */}
                {/* MOBILE SEARCH */}
                {/* ================================================= */}

                <button
                  type="button"
                  onClick={() =>
                    searchInputRef.current?.focus()
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition hover:bg-white/10 hover:text-white md:hidden"
                  aria-label="Search"
                >

                  <MagnifyingGlassIcon className="size-5" />

                </button>


                {/* ================================================= */}
                {/* NOTIFICATION */}
                {/* ================================================= */}

                <Menu
                  as="div"
                  className="relative"
                >

                  <MenuButton
                    className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Notifications"
                  >

                    <BellIcon className="size-5" />


                    {/* Notification Badge */}

                    <span className="absolute right-1.5 top-1.5 flex h-2 w-2">

                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-950" />

                    </span>

                  </MenuButton>


                  <MenuItems
                    transition
                    className="absolute right-0 z-[60] mt-2 w-80 origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/40 outline-none data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-leave:duration-100"
                  >

                    <div className="border-b border-white/10 px-4 py-3">

                      <div className="flex items-center justify-between">

                        <h3 className="font-semibold text-white">
                          Notifications
                        </h3>

                        <span className="rounded-full bg-indigo-500/10 px-2 py-1 text-xs text-indigo-400">
                          3 New
                        </span>

                      </div>

                    </div>


                    <MenuItem>

                      <button
                        type="button"
                        className="w-full px-4 py-3 text-left transition data-focus:bg-white/5"
                      >

                        <p className="text-sm font-medium text-white">
                          New subscriber registered
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          A new subscriber joined your platform.
                        </p>

                      </button>

                    </MenuItem>


                    <MenuItem>

                      <button
                        type="button"
                        className="w-full px-4 py-3 text-left transition data-focus:bg-white/5"
                      >

                        <p className="text-sm font-medium text-white">
                          System update
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Your dashboard has been updated.
                        </p>

                      </button>

                    </MenuItem>


                    <div className="border-t border-white/10 px-4 py-3">

                      <button
                        type="button"
                        className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
                      >
                        View all notifications
                      </button>

                    </div>

                  </MenuItems>

                </Menu>


                {/* ================================================= */}
                {/* PROFILE */}
                {/* ================================================= */}

                <Menu
                  as="div"
                  className="relative"
                >

                  <MenuButton
                    className="group flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">

                      <span className="text-sm font-bold text-white">
                        D
                      </span>

                    </div>


                    <div className="hidden text-left xl:block">

                      <p className="text-xs font-semibold text-white">
                        Dilkhush
                      </p>

                      <p className="text-[10px] text-gray-500">
                        Administrator
                      </p>

                    </div>


                    <ChevronDownIcon className="hidden size-4 text-gray-500 transition group-hover:text-white xl:block" />

                  </MenuButton>


                  <MenuItems
                    transition
                    className="absolute right-0 z-[60] mt-2 w-60 origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-gray-900 py-2 shadow-2xl shadow-black/40 outline-none data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-leave:duration-100"
                  >

                    {/* Profile Header */}

                    <div className="border-b border-white/10 px-4 pb-3">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">

                          <span className="font-bold text-white">
                            D
                          </span>

                        </div>

                        <div>

                          <p className="font-semibold text-white">
                            Dilkhush
                          </p>

                          <p className="text-xs text-gray-500">
                            Administrator
                          </p>

                        </div>

                      </div>

                    </div>


                    {/* Profile */}

                    <MenuItem>

                      <Link
                        to="/"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 transition data-focus:bg-white/10 data-focus:text-white"
                      >

                        <UserCircleIcon className="size-5" />

                        Your Profile

                      </Link>

                    </MenuItem>


                    {/* Settings */}

                    <MenuItem>

                      <Link
                        to="/"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 transition data-focus:bg-white/10 data-focus:text-white"
                      >

                        <Cog6ToothIcon className="size-5" />

                        Settings

                      </Link>

                    </MenuItem>


                    {/* Admin */}

                    <MenuItem>

                      <Link
                        to="/admin"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 transition data-focus:bg-white/10 data-focus:text-white"
                      >

                        <UserCircleIcon className="size-5" />

                        Admin Dashboard

                      </Link>

                    </MenuItem>


                    <div className="my-1 border-t border-white/10" />


                    {/* Logout */}

                    <MenuItem>

                      <button
                        type="button"
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-red-400 transition data-focus:bg-red-500/10 data-focus:text-red-300"
                      >

                        <ArrowRightOnRectangleIcon className="size-5" />

                        Sign Out

                      </button>

                    </MenuItem>

                  </MenuItems>

                </Menu>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* MOBILE SEARCH BAR */}
          {/* ================================================= */}

          <div className="border-t border-white/5 px-3 py-3 md:hidden">

            <form onSubmit={handleSearch}>

              <div className="group relative">

                <MagnifyingGlassIcon
                  className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400"
                />


                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search subscribers..."
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-11 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-indigo-500/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-indigo-500/10"
                />


                {search && (

                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-md text-gray-500 hover:bg-white/10 hover:text-white"
                  >

                    <XMarkIcon className="size-4" />

                  </button>

                )}

              </div>

            </form>

          </div>


          {/* ================================================= */}
          {/* MOBILE NAVIGATION */}
          {/* ================================================= */}

          <DisclosurePanel className="border-t border-white/10 bg-gray-950 lg:hidden">

            <div className="space-y-1 px-3 pb-4 pt-3">

              {navigation.map((item) => {

                const active =
                  isActiveRoute(item.href);


                return (

                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(

                      active
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/10"
                        : "text-gray-300 hover:bg-white/10 hover:text-white",

                      "block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition duration-200"

                    )}
                  >

                    {item.name}

                  </DisclosureButton>

                );

              })}


              {/* Mobile User Info */}

              <div className="mt-3 border-t border-white/10 pt-3">

                <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">

                    <span className="text-sm font-bold text-white">
                      D
                    </span>

                  </div>


                  <div>

                    <p className="text-sm font-semibold text-white">
                      Dilkhush
                    </p>

                    <p className="text-xs text-gray-500">
                      Administrator
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </DisclosurePanel>

        </>

      )}

    </Disclosure>

  );
}