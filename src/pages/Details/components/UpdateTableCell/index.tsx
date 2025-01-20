import { CellContext, Table } from '@tanstack/react-table'
import { TypeData } from '@/mocks/data'
import { UpdateTableCellContainer } from './styles'
import { useEffect, useState } from 'react'

interface Props {
    cell: CellContext<TypeData, string | number>
    table: Table<TypeData>
}

export function UpdateTableCell({ cell, table }: Props) {
    const initialValue = cell.getValue()
    const [ value, setValue ] = useState(initialValue)
    
    function onBlur() {
        if(table.options.meta) {
            // @ts-expect-error: updateData is a custom function defined in TableMeta
            table.options.meta.updateData( 
                cell.row.index,
                cell.column.id,
                value
            )
        }   
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