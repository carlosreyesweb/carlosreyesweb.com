import { ButtonHTMLAttributes } from 'react'
import { ButtonVariant } from '../types/button-variant.type'
import styles from './button.component.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}
export default function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.container} ${variant}`} {...rest}>
      {children}
    </button>
  )
}
