import s from './checkbox.module.scss'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
type CheckboxPropsType = {
  checked: boolean
  onCheckedChange: (isChecked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
}

export const Checkbox: React.FC<CheckboxPropsType> = ({
  checked,
  onCheckedChange,
  disabled,
  required,
  label,
  id,
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
          id={id}
        >
          <CheckboxRadix.Indicator className={s.checkboxIndicator} asChild>
            {!disabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect x="4" y="6" width="16" height="12" fill="black" />
                <path
                  d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect x="4" y="6" width="16" height="12" fill="#DCDAE0" />
                <path
                  d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#808080"
                />
              </svg>
            )}
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  )
}
