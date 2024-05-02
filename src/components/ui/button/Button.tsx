import { IProps } from './IButton'

import './Button.scss'

const Button = (props: IProps) => {
  const {
    onClick,
    children,
    className,
    ariaLabel
  } = props

  return (
    <button
      className={'button ' + className || ''}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default Button
