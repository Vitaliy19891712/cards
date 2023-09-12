import { SubmitHandler } from 'react-hook-form'
import s from './updatePack-form.module.scss'
import { useUpdatePackForm } from './use-updatePack-form'
import { ControlledCheckbox, ControlledTextField } from '../../ui/controlled'
import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'

type addPacksFormPropsType = {
  onSubmit: SubmitHandler<{ name: string; cover?: string; isPrivate: boolean }>
  closeModal: () => void
}

export const UpdatePackForm: React.FC<addPacksFormPropsType> = ({ onSubmit, closeModal }) => {
  const { handleSubmit, control } = useUpdatePackForm(onSubmit)

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
