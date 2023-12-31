import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
export const schema = z.object({
  email: z.string().trim().email('Invalid email adress').nonempty('Enter email'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(3, 'Password must be at least 3 characters')
    .max(30, 'Password must be at most 30 characters'),
  rememberMe: z.boolean(),
})

export type Form = z.infer<typeof schema>

export const useLoginForm = (
  onSubmit: SubmitHandler<{ email: string; password: string; rememberMe: boolean }>
) => {
  const { handleSubmit, ...rest } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
