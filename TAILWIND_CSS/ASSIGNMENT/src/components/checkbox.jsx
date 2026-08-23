export function CheckboxField({ children }) {
  return (
    <div className="flex items-center gap-2">
      {children}
    </div>
  )
}

export function Checkbox(props) {
  return (
    <input
      type="checkbox"
      {...props}
      className="h-4 w-4 rounded border-zinc-300"
    />
  )
}