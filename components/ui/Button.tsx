import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  external?: boolean
}

const variantClasses = {
  primary: 'bg-accent hover:bg-accent-dark text-white font-semibold shadow-sm',
  secondary: 'bg-navy hover:bg-navy-dark text-white font-semibold shadow-sm',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-lg',
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
