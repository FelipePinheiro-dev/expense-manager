import { 
    DetailsContainer, 
    TableContainerStyled,
    TableStyled,
    TableHeadStyled,
    TableBodyStyled,
    TableRowStyled,
    TableCellStyled    
} from './styles'

import { UpdateTableCell } from './components/UpdateTableCell'

import { DATA, TypeData } from '@/mocks/data'
import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

function formatDatePtBR(date: string) {
    const formatted = format(new Date(date), 'dd MMM yyyy', { locale: ptBR })
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
        cell: (props) => <UpdateTableCell cell={props}/>
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
        getCoreRowModel:getCoreRowModel(),
        columnResizeMode: 'onChange',
        meta: {
            updateData: (rowIndex: number, columnId: string, value: string | number) => setData(
                prev => prev.map((row, index) => 
                    index === rowIndex ? {
                        ...prev[rowIndex],
                        [columnId]: value
                    } : row
                )
            )
        }
    })
    console.log(data)
    return (
        <DetailsContainer>
            <TableContainerStyled>
                <TableStyled width={table.getTotalSize()} className='table'>
                    <TableHeadStyled>
                        {table.getHeaderGroups().map((headerGroup) => 
                            <TableRowStyled key={headerGroup.id} className='tr'> 
                                {headerGroup.headers.map(
                                    header => 
                                        <TableCellStyled 
                                            className='th'  
                                            key={header.id} 
                                            style={{ width: header.getSize()}}
                                            onMouseDown={header.getResizeHandler()}
                                            onTouchStart={header.getResizeHandler()}
                                        >
                                            {String(header.column.columnDef.header)}
                                            <div
                                                onMouseDown={header.getResizeHandler()}
                                                onTouchStart={header.getResizeHandler()}
                                                className={`
                                                    resize ${
                                                        header.column.getIsResizing() ? 'isResizing' : ''
                                                    }
                                                    `}
                                            />
                                        </TableCellStyled>
                                )}
                            </TableRowStyled>
                        )}
                    </TableHeadStyled>
                    <TableBodyStyled>
                        {
                            table.getRowModel().rows.map((row) => <TableRowStyled key={row.id}>
                                {row.getVisibleCells().map((cell) => <TableCellStyled key={cell.id} className='td' style={{ width: cell.column.getSize()}}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </TableCellStyled>)}
                            </TableRowStyled>)
                        }
                    </TableBodyStyled>
                </TableStyled>
            </TableContainerStyled>
        </DetailsContainer>
    )
}