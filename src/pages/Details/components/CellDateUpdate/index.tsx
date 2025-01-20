import { TypeData } from '@/mocks/data'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { CellContext, Table } from '@tanstack/react-table'

interface Props {
    cell: CellContext<TypeData, string>
    table: Table<TypeData>
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