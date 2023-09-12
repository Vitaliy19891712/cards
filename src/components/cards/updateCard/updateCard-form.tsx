import { SubmitHandler } from 'react-hook-form'
import s from './updateCard-form.module.scss'
import { useUpdateCardForm } from './use-updateCard-form'
import { ControlledCheckbox, ControlledTextField } from '../../ui/controlled'
import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'

type UpdateCardFormPropsType = {
  onSubmit: SubmitHandler<{ question: string; answer: string }>
  closeModal: () => void
}

export const UpdateCardForm: React.FC<UpdateCardFormPropsType> = ({ onSubmit, closeModal }) => {
  const { handleSubmit, control } = useUpdateCardForm(onSubmit)

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <ControlledTextField
          className={s.textField}
          label="Question"
          name="question"
          control={control}
        ></ControlledTextField>
        <ControlledCheckbox className={s.checkbox} label="Answer" name="answer" control={control}></ControlledCheckbox>
        <div className={s.flex}>
          <Button onClick={closeModal} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
          <Button type="submit" variant={'primary'}>
            <Typography variant={'subtitle2'}>Save Changes</Typography>
          </Button>
        </div>
      </form>
    </>
  )
}
