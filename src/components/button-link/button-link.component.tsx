import { AnchorHTMLAttributes } from 'react'
import { ButtonVariant } from '../../types/button-variant.type'
import styles from './button-link.component.module.css'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: ButtonVariant
}
export default function ButtonLink({
  variant,
  children,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
