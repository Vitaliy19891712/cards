import { TabSwitcher } from './components/ui/tabswitcher'

export function App() {
  return (
    <TabSwitcher
      tabs={[
        {
          title: 'string',
          value: 'string',
        },
        {
          title: 'value',
          value: 'value',
        },
        {
          title: 'value1',
          value: 'value1',
        },
      ]}
    />
  )
}
