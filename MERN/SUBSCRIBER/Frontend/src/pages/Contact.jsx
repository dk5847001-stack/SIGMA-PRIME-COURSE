import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Abhi sirf form submit ko prevent kar rahe hain.
    // Baad me yahin API call add kar sakte ho.
    console.log("Contact form submitted");
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">

      {/* ================= BACKGROUND DECORATION ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[72rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)]"
        />
      </div>

      {/* ================= HEADER ================= */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">

        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Contact Us
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-400">
          Have a question or want to work with us? Send us a message and
          we'll get back to you as soon as possible.
        </p>

      </div>

      {/* ================= CONTACT FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 mx-auto mt-16 max-w-xl sm:mt-20"
      >

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-white"
            >
              First name
            </label>

            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-white"
            >
              Last name
            </label>

            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-white"
            >
              Company
            </label>

            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white"
            >
              Email
            </label>

            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2">

            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold text-white"
            >
              Phone number
            </label>

            <div className="mt-2.5">

              <div className="flex rounded-md bg-white/5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">

                {/* Country Code */}
                <div className="grid shrink-0 grid-cols-1">

                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2.5 pr-8 pl-3.5 text-base text-gray-400 focus:outline-none sm:text-sm"
                  >
                    <option className="bg-gray-800">
                      +91
                    </option>

                    <option className="bg-gray-800">
                      +1
                    </option>

                    <option className="bg-gray-800">
                      +44
                    </option>
                  </select>

                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400"
                  />

                </div>

                {/* Phone */}
                <input
                  id="phone-number"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  placeholder="9876543210"
                  className="block min-w-0 grow bg-transparent py-2.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm"
                />

              </div>

            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">

            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white"
            >
              Message
            </label>

            <div className="mt-2.5">

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                className="block w-full resize-none rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />

            </div>
          </div>

          {/* Agreement */}
          <div className="flex gap-x-4 sm:col-span-2">

            <div className="flex h-6 items-center">

              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 has-checked:bg-indigo-500 has-focus-visible:outline-2">

                <span className="size-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 group-has-checked:translate-x-3.5" />

                <input
                  id="agree-to-policies"
                  name="agreeToPolicies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 size-full cursor-pointer appearance-none focus:outline-none"
                />

              </div>

            </div>

            <label
              htmlFor="agree-to-policies"
              className="text-sm leading-6 text-gray-400"
            >
              By selecting this, you agree to our{" "}

              <Link
                to="/"
                className="font-semibold whitespace-nowrap text-indigo-400 hover:text-indigo-300"
              >
                privacy policy
              </Link>

              .
            </label>

          </div>
        </div>

        {/* ================= SUBMIT BUTTON ================= */}
        <div className="mt-10">

          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Let's Talk
          </button>

        </div>

      </form>
    </div>
  );
}