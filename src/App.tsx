import { Dropdownmenu } from './components/ui/dropDownMenu'
import { SliderCommon } from './components/ui/slider'

export function App() {
  return (
    <div className="qwe">
      <Dropdownmenu  modal={true} onChange={() => {}} items={[326666, 35, 645]}>
        <div>123</div>
      </Dropdownmenu>
    </div>
  )
}
