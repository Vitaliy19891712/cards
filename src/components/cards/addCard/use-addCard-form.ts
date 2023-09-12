import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
export const schema = z.object({
  question: z.string().trim().nonempty(`Enter question `),
  answer: z.string().trim().nonempty(`Enter answer `),
})

export type Form = z.infer<typeof schema>

export const useAddCardForm = (
  onSubmit: SubmitHandler<{ question: string; answer: string }>
) => {
  const { handleSubmit, ...rest } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      question: '',
      answer: '',
    },
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
