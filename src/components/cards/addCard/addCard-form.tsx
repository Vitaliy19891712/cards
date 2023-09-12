import { SubmitHandler } from 'react-hook-form'
import s from './addCard-form.module.scss'
import { useAddCardForm } from './use-addCard-form'
import { ControlledCheckbox, ControlledTextField } from '../../ui/controlled'
import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'

type AddCardFormPropsType = {
  onSubmit: SubmitHandler<{ question: string; answer: string }>
  closeModal: () => void
}

export const AddCardForm: React.FC<AddCardFormPropsType> = ({ onSubmit, closeModal }) => {
  const { handleSubmit, control } = useAddCardForm(onSubmit)

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <ControlledTextField
          className={s.textField}
          label="Question"
          name="question"
          control={control}
        ></ControlledTextField>
        <ControlledTextField
          className={s.textField}
          label="Answer"
          name="answer"
          control={control}
        ></ControlledTextField>
        <div className={s.flex}>
          <Button onClick={closeModal} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
          <Button type="submit" variant={'primary'}>
            <Typography variant={'subtitle2'}>Add New Card</Typography>
          </Button>
        </div>
      </form>
    </>
  )
}
