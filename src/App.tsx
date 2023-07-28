import { Radio } from './components/ui/radio'

export function App() {
  return (
    <Radio
      items={[
        { title: 'RadioGroup1' },
        { title: 'RadioGroup2' },
        { title: 'RadioGroup3' },
        { title: 'RadioGroup4' },
      ]}
      onChange={() => {}}
    />
  )
}
