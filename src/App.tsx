import { SliderCommon } from './components/ui/slider'

export function App() {
  return (
    <SliderCommon
      currentMax={100}
      currentMin={0}
      max={100}
      min={0}
      onChange={value => {
        console.log(value)
      }}
    />
  )
}
