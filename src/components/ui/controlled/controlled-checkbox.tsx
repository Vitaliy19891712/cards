import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { Checkbox, CheckboxPropsType } from '../checkbox'

type TypeControlledTextFieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValues'
> &
  Omit<CheckboxPropsType, 'onChange' | 'value' | 'checked'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  shouldUnregister,
  ...rest
}: TypeControlledTextFieldProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    shouldUnregister,
  })

  return <Checkbox checked={value} onChange={onChange} {...rest}></Checkbox>
}
