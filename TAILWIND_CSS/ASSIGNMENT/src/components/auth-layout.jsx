export function AuthLayout({ children }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-100 px-4 dark:bg-zinc-950">
      <div className="w-full max-w-md">
        {children}
      </div>
    </main>
  )
}