import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
export const schema = z.object({
  email: z.string().trim().email('Invalid email adress').nonempty('Enter email'),
})

export type Form = z.infer<typeof schema>

export const useRorgotPasswordForm = (
  onSubmit: SubmitHandler<{ email: string}>
) => {
  const { handleSubmit, ...rest } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
