import { CheckboxCheckedDisabled, СheckboxChecked } from '../../../assets/icons'
import s from './checkbox.module.scss'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

type CheckboxPropsType = {
  checked: boolean
  onCheckedChange: (isChecked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
}

export const Checkbox: React.FC<CheckboxPropsType> = ({
  checked,
  onCheckedChange,
  disabled,
  required,
  label,
}) => {
  const style = disabled ? `${s.buttonWrapper} ${s.disabled}` : s.buttonWrapper

  return (
    <div className={s.wrapperCheckbox}>
      <div className={style}>
        <CheckboxRadix.Root
          className={s.checkboxRoot}
          checked={checked}
          onCheckedChange={onCheckedChange}
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
