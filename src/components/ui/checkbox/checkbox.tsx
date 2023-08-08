import { CheckboxCheckedDisabled, СheckboxChecked } from '../../../assets/icons'
import s from './checkbox.module.scss'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

export type CheckboxPropsType = {
  checked: boolean
  onChange: (isChecked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  className?: string
}

export const Checkbox: React.FC<CheckboxPropsType> = ({
  checked,
  onChange,
  disabled,
  required,
  label,
  className,
}) => {
  const style = disabled ? `${s.buttonWrapper} ${s.disabled}` : s.buttonWrapper

  return (
    <div className={`${s.wrapperCheckbox} ${className}`}>
      <div className={style}>
        <CheckboxRadix.Root
          className={s.checkboxRoot}
          checked={checked}
          onCheckedChange={onChange}
          disabled={disabled}
          required={required}
          id={'c1'}
        >
          <CheckboxRadix.Indicator className={s.checkboxIndicator} asChild>
            {!disabled ? <СheckboxChecked /> : <CheckboxCheckedDisabled />}
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      {label && (
        <label className={s.label} htmlFor={'c1'}>
          {label}
        </label>
      )}
    </div>
  )
}
