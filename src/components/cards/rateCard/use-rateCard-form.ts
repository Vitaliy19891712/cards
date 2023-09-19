import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
export const schema = z.object({
  grade: z.string(),
})

export type Form = z.infer<typeof schema>

export const useRateCardForm = (onSubmit: SubmitHandler<{ grade: string }>) => {
  const { handleSubmit, ...rest } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      grade: 'Knew the answer',
    },
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
