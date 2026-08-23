export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 ${className}`}
    >
      {children}
    </button>
  )
}