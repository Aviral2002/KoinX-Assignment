import * as React from "react"

const Button = React.forwardRef(({ className, variant, ...props }, ref) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-white text-blue-600 hover:bg-gray-100 focus:ring-blue-500",
  }

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

