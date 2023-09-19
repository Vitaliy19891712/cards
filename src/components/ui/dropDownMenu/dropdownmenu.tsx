import { ReactNode, useState } from 'react'
import s from './dropdownmenu.module.scss'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
type IProps = {
  onChange?: (open: boolean) => void
  modal?: boolean
  children?: ReactNode
  items: Array<ReactNode>
  trigger?: ReactNode
}

export const Dropdownmenu: React.FC<IProps> = ({ modal, items, trigger }) => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root defaultOpen={false} open={open} onOpenChange={setOpen} modal={modal}>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Content className={s.content} loop={true} sideOffset={4}>
        {items.map((item, index) => {
          return (
            <DropdownMenu.Item key={index} className={s.item}>
              {item}
            </DropdownMenu.Item>
          )
        })}

        <DropdownMenu.Separator className={s.separator} />
        <DropdownMenu.Arrow className={s.arrow} width={15} height={8} />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
