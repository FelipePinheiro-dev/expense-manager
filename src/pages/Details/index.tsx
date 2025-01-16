import { DATA, TypeData } from '@/mocks/data'
import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useState } from 'react'
import { DetailsContainer } from './styles'
import { format } from 'date-fns'

function formatDatePtBR(date: string) {
    const formatted = format(date, 'dd MMM yyyy')
    return formatted
}

const columns: ColumnDef<TypeData>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        cell: (props) => <span>{String(props.getValue())}</span>
    },

    {
        accessorKey: 'title',
        header: 'Title',
        cell: (props) => <span>{String(props.getValue())}</span>
    },

    {
        accessorKey: 'category',
        header: 'Category',
        cell: (props) => <span>{String(props.getValue())}</span>
    },

    {
        accessorKey: 'type',
        header: 'Type',
        cell: (props) => <span>{String(props.getValue())}</span>
    },

    {
        accessorKey: 'value',
        header: 'Value',
        cell: (props) => <span>{String(props.getValue())}</span>
    },

    {
        accessorKey: 'date',
        header: 'Date',
        cell: (props) => <span>{formatDatePtBR(String(props.getValue()))}</span>
    },

]

export function Details() {
    const [ data, setData ] = useState(DATA)
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel()
    })

    return (
        <DetailsContainer>
            <table width={table.getTotalSize()} className='table'>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => 
                        <tr key={headerGroup.id} className='tr'> 
                            {headerGroup.headers.map(
                                header => 
                                    <th className='th'  key={header.id} style={{ width: header.getSize()}}>
                                        {String(header.column.columnDef.header)}
                                    </th>
                            )}
                        </tr>
                    )}
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map((row) => <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => <td key={cell.id} className='td' style={{ width: cell.column.getSize()}}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </td>)}
                        </tr>)
                    }
                </tbody>
            </table>
        </DetailsContainer>
    )
}