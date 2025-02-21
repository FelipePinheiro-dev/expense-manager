import { TypeData } from '@/mocks/data'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { CellContext, Table } from '@tanstack/react-table'
import { Box, TextField, useTheme } from '@mui/material'
import { Edit, Close } from '@mui/icons-material'
import { useState } from 'react'
import { format } from 'date-fns'

interface Props {
  cell: CellContext<TypeData, string>
  table: Table<TypeData>
}

export function CellDateUpdate({ cell, table }: Props) {
  const { customColors } = useTheme().palette
  const currentDate = new Date(cell.getValue())
  const [openDatePicker, setOpenDatePicker] = useState(false)
  // @ts-expect-error: updateData is a custom function defined in TableMeta
  const { updateData } = table.options.meta

  function formatDate(date: Date) {
    return format(date, 'dd MMM yy')
  }

  function handleChangeVisibleDatePicker() {
    setOpenDatePicker(!openDatePicker)
  }

  return (
    <>
      {openDatePicker === true ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              format="dd MMM yy"
              defaultValue={currentDate}
              onChange={(date) =>
                updateData(cell.row.index, cell.column.id, date?.toISOString())
              }
            />
          </LocalizationProvider>
          <Close
            onClick={handleChangeVisibleDatePicker}
            sx={{
              cursor: 'pointer',
              '&:hover': { color: customColors['red-500'] },
            }}
          />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <TextField
            size="small"
            variant="standard"
            defaultValue={formatDate(currentDate)}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <Edit
            onClick={handleChangeVisibleDatePicker}
            sx={{
              cursor: 'pointer',
              '&:hover': { color: customColors['green-200'] },
            }}
          />
        </Box>
      )}
    </>
  )
}
