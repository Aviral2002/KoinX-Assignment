export function Loading({ className = "h-8" }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-full bg-gray-200 rounded"></div>
    </div>
  )
}

