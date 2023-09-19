import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Radio, RadioProps } from '../radio'

type TypeControlledTextFieldProps<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultValues'> &
  Omit<RadioProps, 'onChange' | 'value'>

export const ControlledRadio = <T extends FieldValues>({
  items,
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

  return <Radio value={value} items={items} onChange={onChange} {...rest}></Radio>
}
