import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'
import s from './deleteCard-form.module.scss'

type DeleteCardFormPropsType = {
  onSubmit: () => void
  closeModal: () => void
}

export const DeleteCardForm: React.FC<DeleteCardFormPropsType> = ({ onSubmit, closeModal }) => {
  return (
    <>
      <div>`Do you really want to remove this card?`</div>
      <div className={s.flex}>
        <Button onClick={closeModal} variant={'secondary'}>
          <Typography variant={'subtitle2'}>Cancel</Typography>
        </Button>
        <Button variant={'primary'} onClick={onSubmit}>
          <Typography variant={'subtitle2'}>Delete Pack</Typography>
        </Button>
      </div>
    </>
  )
}
