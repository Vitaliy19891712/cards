import { Pagination } from './components/ui/pagination'

export function App() {
  return (
    <Pagination
      currentPage={1}
      onPageChange={() => {}}
      pageSize={10}
      totalCount={104}
      perPage={10}
      perPageOptions={[10, 20, 30]}
      onPerPageChange={() => {}}
    />
  )
  // return <SelectUi perPageOptions={[10, 20, 30]} />
}
