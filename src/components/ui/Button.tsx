import { type MergeOmitting } from '@/types/utils'
import { clsx } from 'clsx'
import { forwardRef, type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonArgs {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
}

type ButtonFunction = (args?: ButtonArgs) => string
export const button: ButtonFunction = (args = {}) => {
  const { color = 'primary', size = 'md', fullWidth = false, className = '' } = args
  return twMerge(
    'inline-flex items-center justify-center gap-2 font-medium text-base rounded-md disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-300', // all base classes
    clsx( // Colors
      color === 'primary' && 'bg-primary-500 text-primary-50 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 disabled:hover:bg-primary-500', // primary
      color === 'secondary' && 'bg-secondary-500 text-secondary-50 hover:bg-secondary-600 focus:ring-2 focus:ring-secondary-200 disabled:hover:bg-secondary-500', // secondary
      color === 'success' && 'bg-success-500 text-success-50 hover:bg-success-600 focus:ring-2 focus:ring-success-200 disabled:hover:bg-success-500', // success
      color === 'warning' && 'bg-warning-500 text-warning-900 hover:bg-warning-600 focus:ring-2 focus:ring-warning-200 disabled:hover:bg-warning-500', // warning
      color === 'error' && 'bg-error-500 text-error-50 hover:bg-error-600 focus:ring-2 focus:ring-error-200 disabled:hover:bg-error-500', // error
      color === 'info' && 'bg-info-500 text-info-50 hover:bg-info-600 focus:ring-2 focus:ring-info-200 disabled:hover:bg-info-500', // info
      color === 'dark' && 'bg-gray-800 text-gray-50 hover:bg-gray-900 focus:ring-2 focus:ring-gray-200 disabled:hover:bg-gray-800', // dark
      color === 'light' && 'bg-gray-50 text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 disabled:hover:bg-gray-50' // light
    ),
    clsx( // Sizes
      size === 'sm' && 'px-3 py-1.5',
      size === 'md' && 'px-4 py-2',
      size === 'lg' && 'px-5 py-2.5'
    ),
    fullWidth && 'w-full',
    clsx(className))
}

export type ButtonProps = MergeOmitting<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonArgs>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ color, size, fullWidth, children, className, ...rest }, forwardedRef) => (
  <button
    {...rest}
    className={button({ color, size, fullWidth, className })}
    ref={forwardedRef}
  >
    {children}
  </button>
))

Button.displayName = 'Button'

export default Button
