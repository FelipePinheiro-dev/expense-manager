import { CellContext } from '@tanstack/react-table'
import { TypeData } from '@/mocks/data'
import { UpdateTableCellContainer } from './styles'
import { useEffect, useState } from 'react'

interface Props {
    cell: CellContext<TypeData, string>,
    row: string,
    column: string,
    table: {
        options: {
            meta: {
                updateData: (rowIndex: number, columnId: string, value: TypeData | string) => void
            }
        }
    }
}
export function UpdateTableCell({ cell, row, column, table }: Props) {
    const initialValue = cell.getValue()
    const [ value, setValue ] = useState(initialValue)
    
    function onBlur() {
        table.options.meta?.updateData(
            row.indexOf,
            column.id,
            value
        )
    }

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return (
        <UpdateTableCellContainer
            value={value}
            onBlur={onBlur}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}