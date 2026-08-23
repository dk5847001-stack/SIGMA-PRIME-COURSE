export function Text({ children }) {
  return (
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

export function TextLink({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="text-zinc-900 hover:underline dark:text-white"
    >
      {children}
    </a>
  )
}

export function Strong({ children }) {
  return (
    <strong className="font-semibold">
      {children}
    </strong>
  )
}