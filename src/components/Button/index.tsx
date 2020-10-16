import { FC, ButtonHTMLAttributes } from 'react'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button {...props} />
)
