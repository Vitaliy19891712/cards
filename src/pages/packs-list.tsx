import { useState } from 'react'
import { Delete, SearchOutline } from '../assets/icons'
import { DecksTable, DecksTableBody, DecksTableHeader, Sort } from '../components/tables/decks'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { SliderCommon } from '../components/ui/slider'
import { TabSwitcher } from '../components/ui/tabswitcher'
import { Typography } from '../components/ui/typography'
import s from './packs-list.module.scss'
type IProps = {}

export const PacksList: React.FC<IProps> = ({}) => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <>
          <div className={s.container}>
        <div className={s.topLine}>
          <Typography variant={'large'}>Packs list</Typography>
          <Button>
            <Typography variant={'subtitle2'}>Add New Pack</Typography>
          </Button>
        </div>
        <div className={s.settingBar}>
          <Input
            placeholder={'Input search'}
            iconStart={<SearchOutline></SearchOutline>}
            search
            className={s.input}
          ></Input>
          <div className={s.flex}>
            <Typography variant={'body2'}>Show packs cards</Typography>
            <TabSwitcher
              value={'All Cards'}
              onValueChange={() => {}}
              tabs={[
                {
                  title: 'My Cards',
                  value: 'My Cards',
                },
                {
                  title: 'All Cards',
                  value: 'All Cards',
                },
              ]}
            ></TabSwitcher>
          </div>
          <div className={s.flex}>
            <Typography variant={'body2'}>Number of card</Typography>
            <SliderCommon
              max={100}
              min={0}
              currentMax={85}
              currentMin={13}
              onChange={() => {}}
            ></SliderCommon>
          </div>
          <Button variant={'secondary'}>
            <Delete></Delete>
            <Typography variant={'subtitle2'}>Clear Filter</Typography>
          </Button>
        </div>
        <DecksTable>
          <DecksTableHeader
            columns={[
              { key: 'name', title: 'Name', isSortable: true },
              { key: 'cards', title: 'Cards', isSortable: true },
              { key: 'lastUpdated', title: 'Last Updated', isSortable: true },
              { key: 'createdBy', title: 'Created by', isSortable: true },
              { key: 'action', title: '', isSortable: false },
            ]}
            onSort={setSort}
            sort={sort}
          ></DecksTableHeader>
          <DecksTableBody
            data={[
              {
                title: 'Project A',
                cardsCount: 10,
                updated: '2023-07-07',
                createdBy: 'John Doe',
              },
              {
                title: 'Project B',
                cardsCount: 5,
                updated: '2023-07-06',
                createdBy: 'Jane Smith',
              },
              {
                title: 'Project C',
                cardsCount: 8,
                updated: '2023-07-05',
                createdBy: 'Alice Johnson',
              },
              {
                title: 'Project D',
                cardsCount: 3,
                updated: '2023-07-07',
                createdBy: 'Bob Anderson',
              },
              {
                title: 'Project E',
                cardsCount: 12,
                updated: '2023-07-04',
                createdBy: 'Emma Davis',
              },
            ]}
          ></DecksTableBody>
        </DecksTable>
      </div>
    </>
  )
}
