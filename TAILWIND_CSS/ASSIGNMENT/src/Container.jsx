export default function Container() {
    return (
        <div className="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 text-[oklch(12.9%_0.042_264.695)] flex flex-col gap-2 items-center border-1 w-150 m-auto h-80 rounded-md">
            <div className="h-[10vh] text-white h-14 bg-linear-to-t from-sky-500 to-indigo-500 w-full rounded-[4px_4px_0_0] font-bold font-sans text-center items-center flex justify-center">
                News you can Trust.
            </div>
            <h1 className="font-bold text-xl">Stay up to date with the latest!</h1>
            <p>Subscribe to our newsletter for latest news straigt into your inbox.</p>
            <form className="flex flex-col justify-center items-center text-center" action="">
                <input className="outline-1 outline-offset-0 outline-cyan-600 placeholder:text-xs text-xs font-thin text-white text-center bg-slate-700 p-3 rounded w-80" type="text" placeholder="you@example.com" />
                <button className="hover:bg-blue-700 hover:cursor-pointer bg-[oklch(45%_0.085_224.283)] w-80 rounded-full p-2 text-white font-bold mt-2">Subscribe Now!</button>
                </form>
                <p className="text-xs text-slate-300">We value your pricecy!</p>
        </div>
    )
} 