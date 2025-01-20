import { 
    DetailsContainer, 
    TableContainerStyled,
    TableStyled,
    TableHeadStyled,
    TableBodyStyled,
    TableRowStyled,
    TableCellStyled    
} from './styles'

import { CellInputUpdate } from './components/CellInputUpdate'
import { CellMenuUpdate } from './components/CellMenuUpdate'
import { CellDateUpdate } from './components/CellDateUpdate'

import { CATEGORIES } from '@/constants/categories'
import { TRANSACTIONS } from '@/constants/transactions'

import { DATA, TypeData } from '@/mocks/data'

import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useState } from 'react'

const columns: ColumnDef<TypeData>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        cell: (props) => <span>{String(props.getValue())}</span>
    },

    {
        accessorKey: 'title',
        header: 'Title',
        cell: (props) => 
            <CellInputUpdate 
                type='text' 
                cell={props} 
                table={props.table}
            />
    },

    {
        accessorKey: 'category',
        header: 'Category',
        cell: (props) => 
            <CellMenuUpdate 
                cell={props} 
                table={props.table}
                items={CATEGORIES}
            />
    },

    {
        accessorKey: 'type',
        header: 'Type',
        cell: (props) => 
            <CellMenuUpdate 
                cell={props} 
                table={props.table}
                items={TRANSACTIONS}
            />
    },

    {
        accessorKey: 'value',
        header: 'Value',
        cell: (props) => 
            <CellInputUpdate 
                type='number' 
                cell={props} 
                table={props.table}
            />
    },

    {
        accessorKey: 'date',
        header: 'Date',
        cell: (props) => 
            <CellDateUpdate
                cell={props}
                table={props.table}
            />
    },
]

export function Details() {
    const [ data, setData ] = useState(DATA)
    const [ columnFilters, setColumnFilters ] = useState<TypeData[]>([])

    const table = useReactTable({
        data,
        columns,
        state: {
            columnFilters
        },
        getCoreRowModel:getCoreRowModel(),
        columnResizeMode: 'onChange',
        meta: {
            updateData: (rowIndex: number, columnId: string, value: string | number) => 
                setData(prev => prev.map((row, index) => 
                    index === rowIndex ? {
                        ...prev[rowIndex],
                        [columnId]: value
                    } : row
                )
            )
        }
    })

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