import { ComponentProps, ReactNode, forwardRef, KeyboardEvent } from 'react'
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
  onClearClick?: () => void
} & ComponentProps<'input'>
export const Input = forwardRef<HTMLInputElement, InputPropsType>(
  (
    { iconEnd, iconStart, label, search, error, onClearClick, onKeyDown, onEnter, ...rest },
    ref
  ) => {
    const className = {
      label: clsx(s.label),
      input: clsx(s.input, error && s.errorInput),
      wrapper: clsx(s.wrapper),
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
      <div className={className.wrapper}>
        <div className={className.label}>{label}</div>
        <div className={className.inputWrapper} tabIndex={0}>
          {search && iconStart}
          <input
            className={className.input}
            type="text"
            ref={ref}
            onKeyDown={handleKeyDown}
            {...rest}
          />
          {!isShowClearButton && iconEnd}
          {isShowClearButton && (
            <button className={className.button} onClick={onClearClick}>
              <Close />
            </button>
          )}
        </div>
        {error && <div className={className.error}>{error}</div>}
      </div>
    )
  }
)
