import { FC, Fragment, useMemo, CSSProperties } from 'react'
import { Listbox } from '@headlessui/react'
import { Float } from '@headlessui-float/react'
import { clsx } from 'clsx'

import s from './select.module.scss'
import { Scrollbar } from '../scrollbar'
import { KeyboardArrowDown } from '../../../assets/icons'

type Option =
  | { label: string; value: string }
  | { label: string; value: number }
  | { label: number; value: string }
  | { label: number; value: number }

interface CommonProps {
  /** applied to the trigger */
  className?: string
  disabled?: boolean
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  placeholder?: string
  required?: boolean
  variant?: 'primary' | 'secondary' | 'pagination'
  /** The options to display.
   * {label: string, value: string | number} */
  options: Array<Option>
  portal?: boolean
  errorMessage?: string
  label?: string
  width?: CSSProperties['width']
  rootClassName?: string
}

type ConditionalMultipleProps =
  | {
      multiple?: false
      value: string
      /** Event handler called when the value changes.
       * The parameter is an Option object or an array of Options depending on the multiple prop.
       */
      onChange: (value: string) => void
    }
  | {
      multiple?: false
      value: number
      onChange: (value: number) => void
    }
  | {
      multiple?: true
      value: Array<string>
      onChange: (value: Array<string>) => void
    }
  | {
      multiple?: true
      value: Array<number>
      /** Event handler called when the value changes.
       * The parameter is an Option object or an array of Options depending on the multiple prop.
       */
      onChange: (value: Array<number>) => void
    }

export type SelectProps = CommonProps & ConditionalMultipleProps

export const Select: FC<SelectProps> = ({
  variant = 'primary',
  placeholder,
  value,
  errorMessage,
  disabled,
  className,
  onChange,
  options,
  multiple = false,
  portal = true,
  label,
  rootClassName,
  width,
}) => {
  const isSecondary = variant === 'secondary'
  const showError = !!errorMessage && errorMessage.length > 0

  const optionsMap: Record<string | number, string | number> = useMemo(() => {
    return options.reduce((acc, option) => {
      acc[option.value] = option.label

      return acc
    }, {} as Record<string | number, string | number>)
  }, [options])

  const classNames = {
    root: rootClassName,
    trigger: clsx(s.trigger, showError && s.error, s[variant], className),
    value: clsx(s.value),
    icon: clsx(s.icon, s[variant]),
    item: clsx(s.item, s[variant]),
    popper: clsx(s.popper),
    content: clsx(s.content, isSecondary && s.secondary),
    scrollRoot: s.scrollRoot,
    scrollViewport: s.scrollViewport,
    scrollbar: s.scrollbar,
    scrollThumb: s.scrollThumb,
    label: s.label,
  }
  const selectedOptionsLabels = Array.isArray(value)
    ? value.map(v => optionsMap[v]).join(', ')
    : optionsMap[value]

  const rootStyles = { width }

  return (
    <Listbox {...{ disabled, value, multiple, onChange }}>
      <div className={classNames.root} style={rootStyles}>
        <div>{label}</div>
        <Float portal={portal} as="div" adaptiveWidth placement="bottom" floatingAs={Fragment}>
          <Listbox.Button className={classNames.trigger} type={'button'}>
            <span className={classNames.value}>{selectedOptionsLabels || placeholder}</span>
            <span className={classNames.icon}>
              <KeyboardArrowDown />
            </span>
          </Listbox.Button>

          <Listbox.Options className={classNames.content} as={'div'}>
            <Scrollbar maxHeight={158}>
              {options.map(option => {
                // todo: add checkboxes for multi-select
                return (
                  <Listbox.Option
                    key={option.value}
                    className={classNames.item}
                    value={option.value}
                    as={'button'}
                    type={'button'}
                  >
                    <span>{option.label}</span>
                  </Listbox.Option>
                )
              })}
            </Scrollbar>
          </Listbox.Options>
        </Float>

        <>{showError && <div className={s.error}>{errorMessage}</div>}</>
      </div>
    </Listbox>
  )
}
