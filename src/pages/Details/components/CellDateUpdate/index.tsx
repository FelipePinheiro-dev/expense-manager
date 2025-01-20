import { TypeData } from '@/mocks/data'
import { TextField } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { CellContext, Table } from '@tanstack/react-table'

interface Props {
    cell: CellContext<TypeData, string>
    table: Table<TypeData>
}

// Custom Input Component
function CustomInput(props: any) {
    const { inputRef, inputProps, ...other } = props;
  
    return (
      <TextField
        {...other}
        inputRef={inputRef}
        InputProps={{
          ...inputProps,
          style: { fontSize: '14px', padding: '8px' },
        }}
        variant="outlined"
      />
    );
  }

export function CellDateUpdate({ cell, table }: Props) { 
    const currentDate = new Date(cell.getValue())
    // @ts-expect-error: updateData is a custom function defined in TableMeta
    const { updateData } = table.options.meta

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                format='dd MMM yy'
                defaultValue={currentDate}
                //slots={{ field: <span>seila</span>}}
                onChange={(date) => 
                    updateData(
                        cell.row.index, 
                        cell.column.id, 
                        date?.toISOString()
                    )
                }
            />
        </LocalizationProvider>
    )
}