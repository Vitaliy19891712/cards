import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'
import s from './deletePack-form.module.scss'

type addPacksFormPropsType = {
  deletePack: () => void
  closeModal: () => void
}

export const DeletePackForm: React.FC<addPacksFormPropsType> = ({ deletePack, closeModal }) => {
  return (
    <>
      <div>
        'Do you really want to remove Pack Name?
        <br /> All cards will be deleted.'
      </div>
      <div className={s.flex}>
        <Button onClick={closeModal} variant={'secondary'}>
          <Typography variant={'subtitle2'}>Cancel</Typography>
        </Button>
        <Button variant={'primary'} onClick={deletePack}>
          <Typography variant={'subtitle2'}>Delete Pack</Typography>
        </Button>
      </div>
    </>
  )
}
