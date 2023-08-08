import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
export const schema = z.object({
  name: z
    .string()
    .trim()
    .min(4, 'Nickname must be at least 8 characters')
    .nonempty('Enter nickname'),
})

export type Form = z.infer<typeof schema>

export const useProfileForm = (onSubmit: SubmitHandler<{ name: string }>) => {
  const { handleSubmit, ...rest } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
