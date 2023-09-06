import * as Slider from '@radix-ui/react-slider'
import s from './slider.module.scss'
import { Typography } from '../typography'
type IProps = {
  min: number | undefined
  max: number | undefined
  currentMin: number
  currentMax: number
  onChange: (value: Array<number>) => void
  disabled?: boolean
}

export const SliderCommon: React.FC<IProps> = ({ min, max, currentMin, currentMax, onChange }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.value}>
        <Typography variant={'body1'}>{currentMin}</Typography>
      </div>
      <Slider.Root
        className={s.sliderRoot}
        defaultValue={[currentMin, currentMax]}
        max={max}
        min={min}
        step={1}
        value={[currentMin, currentMax]}
        // onValueCommit={onChange}
        onValueChange={onChange}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.sliderThumb} />
        <Slider.Thumb className={s.sliderThumb} />
      </Slider.Root>
      <div className={s.value}>
        <Typography variant={'body1'}>{currentMax}</Typography>
      </div>
    </div>
  )
}
