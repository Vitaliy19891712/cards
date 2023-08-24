import { ComponentProps, ReactNode, KeyboardEvent } from 'react'
import s from './input.module.scss'
import { clsx } from 'clsx'
import { Close } from '../../../assets/icons'
export type InputPropsType = {
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: string
  search?: boolean
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  error?: string
  value?: string
  className?: string
  onClearClick?: () => void
} & ComponentProps<'input'>
export const Input: React.FC<InputPropsType> = ({
  iconEnd,
  iconStart,
  label,
  search,
  error,
  onClearClick,
  onKeyDown,
  onEnter,
  className,
  ...rest
}) => {
  const classNames = {
    label: clsx(s.label),
    input: clsx(s.input, error && s.errorInput),
    wrapper: clsx(s.wrapper, className),
    inputWrapper: clsx(s.inputWrapper, error && s.errorWrapper),
    error: clsx(s.erorr),
    button: clsx(s.button),
  }

  const isShowClearButton = onClearClick && rest?.value?.length! > 0
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.label}>{label}</div>
      <div className={classNames.inputWrapper} tabIndex={0}>
        {search && iconStart}
        <input
          className={classNames.input}
          type="text"
          // ref={ref}
          onKeyDown={handleKeyDown}
          {...rest}
        />
        {!isShowClearButton && iconEnd}
        {isShowClearButton && (
          <button className={classNames.button} onClick={onClearClick}>
            <Close />
          </button>
        )}
      </div>
      {error && <div className={classNames.error}>{error}</div>}
    </div>
  )
}
