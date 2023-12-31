import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'
import s from './deletePack-form.module.scss'

type addPacksFormPropsType = {
  onSubmit: () => void
  closeModal: () => void
}

export const DeletePackForm: React.FC<addPacksFormPropsType> = ({ onSubmit, closeModal }) => {
  return (
    <>
      <div>
        'Do you really want to remove this pack?
        <br /> All cards will be deleted.'
      </div>
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
