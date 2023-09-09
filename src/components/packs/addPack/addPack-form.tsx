import { SubmitHandler } from 'react-hook-form'
import s from './addPack-form.module.scss'
import { useAddPacksForm } from './use-addCards-form'
import { ControlledCheckbox, ControlledTextField } from '../../ui/controlled'
import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'

type addPacksFormPropsType = {
  onSubmit: SubmitHandler<{ name: string; cover?: string; isPrivate: boolean }>
  closeModal: () => void
}

export const AddPacksForm: React.FC<addPacksFormPropsType> = ({ onSubmit, closeModal }) => {
  const { handleSubmit, control } = useAddPacksForm(onSubmit)

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <ControlledTextField
          className={s.textField}
          label="Name Pack"
          name="name"
          control={control}
        ></ControlledTextField>
        <ControlledCheckbox
          className={s.checkbox}
          label="Private pack"
          name="isPrivate"
          control={control}
        ></ControlledCheckbox>
        <div className={s.flex}>
          <Button onClick={closeModal} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cansel</Typography>
          </Button>
          <Button type="submit" variant={'primary'}>
            <Typography variant={'subtitle2'}>Add New Pack</Typography>
          </Button>
        </div>
      </form>
    </>
  )
}
