import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
export const schema = z.object({
  name: z.string().trim().nonempty(`Enter card's name `),
  cover: z.string().trim().optional(),
  isPrivate: z.boolean(),
})

export type Form = z.infer<typeof schema>

export const useAddPacksForm = (
  onSubmit: SubmitHandler<{ name: string; cover?: string; isPrivate: boolean }>
) => {
  const { handleSubmit, ...rest } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      cover: '',
      isPrivate: false,
    },
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
