export function Field({ children }) {
  return (
    <div className="grid grid-cols-1 gap-2">
      {children}
    </div>
  )
}

export function Label({ children }) {
  return (
    <label className="text-sm font-medium text-zinc-900 dark:text-white">
      {children}
    </label>
  )
}