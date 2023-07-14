import { Input } from './components/ui/input'
import { EyeOutline, SearchOutline } from './assets/icons'

export function App() {
  return (
    <div>
      <Input
        iconEnd={<EyeOutline />}
        iconStart={<SearchOutline />}
        placeholder={'Input'}
        label={'label'}
        search={true}
        onClearClick={() => {}}
        value={'qwe'}
      />
    </div>
  )
}
