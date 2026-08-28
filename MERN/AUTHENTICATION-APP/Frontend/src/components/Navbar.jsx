import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 shadow-lg backdrop-blur-xl"
    >
      {({ open }) => (
        <>
          {/* Main Navbar */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">

              {/* LEFT SECTION */}
              <div className="flex items-center">

                {/* Mobile Menu Button */}
                <div className="mr-3 sm:hidden">
                  <DisclosureButton
                    className="inline-flex items-center justify-center rounded-lg p-2
                    text-gray-400 transition hover:bg-white/10 hover:text-white
                    focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">
                      {open ? "Close main menu" : "Open main menu"}
                    </span>

                    {open ? (
                      <XMarkIcon className="size-6" />
                    ) : (
                      <Bars3Icon className="size-6" />
                    )}
                  </DisclosureButton>
                </div>

                {/* Logo */}
                <a
                  href="#"
                  className="flex items-center gap-2"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/30">
                    <span className="text-lg font-bold text-white">
                      I
                    </span>
                  </div>

                  <span className="hidden text-xl font-bold tracking-tight text-white sm:block">
                    Internova<span className="text-indigo-400">Tech</span>
                  </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden sm:ml-8 sm:block">
                  <div className="flex items-center space-x-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={
                          item.current ? "page" : undefined
                        }
                        className={classNames(
                          item.current
                            ? "bg-white/10 text-white shadow-sm"
                            : "text-gray-300 hover:bg-white/5 hover:text-white",
                          "rounded-lg px-4 py-2 text-sm font-medium transition duration-200"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="flex items-center gap-2 sm:gap-3">

                {/* Login */}
                <a
                  href="/login"
                  className="hidden rounded-lg px-4 py-2 text-sm font-semibold
                  text-gray-200 transition hover:bg-white/10 hover:text-white
                  sm:block"
                >
                  Login
                </a>

                {/* Sign Up */}
                <a
                  href="/signup"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm
                  font-semibold text-white shadow-lg shadow-indigo-600/20
                  transition duration-200 hover:bg-indigo-500
                  hover:shadow-indigo-500/30 active:scale-95"
                >
                  <span className="hidden sm:inline">Sign Up</span>
                  <span className="sm:hidden">Sign Up</span>
                </a>

                {/* Notification */}
                <button
                  type="button"
                  className="relative hidden rounded-full p-2 text-gray-400
                  transition hover:bg-white/10 hover:text-white
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:block"
                >
                  <span className="absolute -inset-1.5" />

                  <span className="sr-only">
                    View notifications
                  </span>

                  <BellIcon className="size-6" />

                  {/* Notification Dot */}
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-950" />
                </button>

                {/* Profile Dropdown */}
                <Menu as="div" className="relative ml-1">

                  <MenuButton
                    className="relative flex rounded-full
                    focus:outline-none focus:ring-2 focus:ring-indigo-500
                    focus:ring-offset-2 focus:ring-offset-gray-950"
                  >
                    <span className="absolute -inset-1.5" />

                    <span className="sr-only">
                      Open user menu
                    </span>

                    <img
                      alt="User profile"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-9 w-9 rounded-full object-cover ring-2
                      ring-white/10 transition hover:ring-indigo-500/50"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-50 mt-3 w-52
                    origin-top-right rounded-xl border border-white/10
                    bg-gray-900/95 py-2 shadow-2xl backdrop-blur-xl
                    transition duration-200
                    data-closed:scale-95
                    data-closed:opacity-0"
                  >
                    <div className="border-b border-white/10 px-4 py-3">
                      <p className="text-sm font-semibold text-white">
                        User Account
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        user@example.com
                      </p>
                    </div>

                    <MenuItem>
                      <a
                        href="/profile"
                        className="block px-4 py-2.5 text-sm
                        text-gray-300 transition
                        data-focus:bg-white/10
                        data-focus:text-white"
                      >
                        Your Profile
                      </a>
                    </MenuItem>

                    <MenuItem>
                      <a
                        href="/settings"
                        className="block px-4 py-2.5 text-sm
                        text-gray-300 transition
                        data-focus:bg-white/10
                        data-focus:text-white"
                      >
                        Settings
                      </a>
                    </MenuItem>

                    <MenuItem>
                      <button
                        className="block w-full px-4 py-2.5 text-left
                        text-sm text-red-400 transition
                        data-focus:bg-red-500/10
                        data-focus:text-red-300"
                      >
                        Sign Out
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <DisclosurePanel className="border-t border-white/10 bg-gray-950/95 backdrop-blur-xl sm:hidden">
            <div className="space-y-1 px-4 pb-4 pt-3">

              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={
                    item.current ? "page" : undefined
                  }
                  className={classNames(
                    item.current
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "block rounded-lg px-4 py-3 text-base font-medium transition"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}

              {/* Mobile Login */}
              <DisclosureButton
                as="a"
                href="/login"
                className="mt-2 block rounded-lg border border-white/10
                px-4 py-3 text-center text-base font-semibold
                text-gray-200 transition hover:bg-white/10 hover:text-white"
              >
                Login
              </DisclosureButton>

              {/* Mobile Sign Up */}
              <DisclosureButton
                as="a"
                href="/signup"
                className="block rounded-lg bg-indigo-600 px-4 py-3
                text-center text-base font-semibold text-white
                transition hover:bg-indigo-500"
              >
                Create Account
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
