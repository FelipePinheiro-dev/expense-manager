import {
  Pagination as MuiPagination,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material'

import { Table } from '@tanstack/react-table'
import { TypeData } from '@/mocks/data'
import { ChangeEvent } from 'react'

interface Props {
  table: Table<TypeData>
}
export function Pagination({ table }: Props) {
  const { pageIndex, pageSize } = table.getState().pagination
  const totalPages = table.getPageCount()

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault()
    table.setPageIndex(value - 1)
  }

  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    table.setPageSize(Number(event.target.value))
  }

  return (
    <Stack spacing={2} alignItems="center" direction={'row'}>
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel id="page-size-label">Rows per page</InputLabel>
        <Select
          labelId="page-size-label"
          value={pageSize}
          onChange={handlePageSizeChange}
          label="Rows per page"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>

      <MuiPagination
        count={totalPages}
        page={pageIndex + 1}
        onChange={handlePageChange}
        variant="outlined"
      />
    </Stack>
  )
}
