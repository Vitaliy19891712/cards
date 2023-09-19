import { SubmitHandler } from 'react-hook-form'
import s from './rateCard-form.module.scss'
import { useRateCardForm } from './use-rateCard-form'
import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'
import { ControlledRadio } from '../../ui/controlled/controlled-radio'

type RateCardFormPropsType = {
  onSubmit: SubmitHandler<{ grade: string }>
}

export const RateCardForm: React.FC<RateCardFormPropsType> = ({ onSubmit }) => {
  const { handleSubmit, control } = useRateCardForm(onSubmit)

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <ControlledRadio
          name="grade"
          items={[
            { title: 'Did not know' },
            { title: 'Forgot' },
            { title: 'A lot of thought' },
            { title: 'Confused' },
            { title: 'Knew the answer' },
          ]}
          control={control}
        ></ControlledRadio>
        <Button type="submit" variant={'primary'} fullWidth className={s.button}>
          <Typography variant={'subtitle2'}>Next Question</Typography>
        </Button>
      </form>
    </>
  )
}
