import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'
import { Input, InputPropsType } from '../input'

type TypeControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<InputPropsType, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: TypeControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })
  return <Input error={error?.message} {...field} {...rest}></Input>
}
