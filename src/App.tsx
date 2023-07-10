import { useState } from 'react'
import { Checkbox } from './components/ui/checkbox'

export function App() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div>
      <Checkbox
        checked={isChecked}
        onCheckedChange={isChecked => setIsChecked(isChecked)}
        label={'Запомнить меня'}
      />
    </div>
  )
}
