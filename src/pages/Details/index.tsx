import { SwapVert, North, South} from '@mui/icons-material'

import { 
    DetailsContainer,
    Filters, 
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
import { FilterTitleTransaction } from './components/FilterTitleTransaction'
import { FilterCategoryTransaction } from './components/FilterCategoryTransaction'
import { Pagination } from './components/Pagination'

import { CATEGORIES } from '@/constants/categories'
import { TRANSACTIONS } from '@/constants/transactions'

import { DATA, TypeData } from '@/mocks/data'

import { useReactTable, ColumnDef, getCoreRowModel, flexRender, getFilteredRowModel, getSortedRowModel, getPaginationRowModel } from '@tanstack/react-table'
import { useState } from 'react'
import { Box } from '@mui/material'

export type ColumnFiltersType = {
    id: string,
    value: string | string[]
}[]

const columns: ColumnDef<TypeData>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        enableSorting: false,
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
            />,
        enableColumnFilter: true,
        filterFn: 'includesString'
    },

    {
        accessorKey: 'category',
        header: 'Category',
        cell: (props) => 
            <CellMenuUpdate 
                cell={props} 
                table={props.table}
                items={CATEGORIES}
            />,
        enableColumnFilter: true,
        filterFn: (row, columnId, filterValue) => {
            console.log(row)
            if (!Array.isArray(filterValue) || filterValue.length === 0) {
                return true
            }
            const cellValue = row.getValue(columnId)
            return filterValue.some((value) => value === cellValue)
        },
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
    const [ columnFilters, setColumnFilters ] = useState<ColumnFiltersType>([])
    //const [ pagination, setPagination ] = useState({pageIndex: 0, pageSize: 5})

    const table = useReactTable({
        data,
        columns,
        state: {
            columnFilters,
            //pagination
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
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

    function handleFilterChange({ id, value }: { id: string; value: string | string[] }) {
        setColumnFilters((prev) => {
            const existingFilter = prev.find((filter) => filter.id === id)
            if (existingFilter?.value === value) {
                return prev
            }
            return prev.filter((filter) => filter.id !== id).concat({ id, value })
        })
    }

    return (
        <DetailsContainer>
            <Filters>
                <FilterTitleTransaction
                    columnFilters={columnFilters}
                    handleFilterChange={handleFilterChange}
                />

                <FilterCategoryTransaction
                    columnFilters={columnFilters}
                    handleFilterChange={handleFilterChange}
                />
            </Filters>
            
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
                                            <Box 
                                                sx={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    gap: '.375rem'
                                                }}
                                            >
                                                {String(header.column.columnDef.header)}
                                                { header.column.getCanSort() && 
                                                    !['asc', 'desc'].includes(String(header.column.getIsSorted())) && 
                                                        <SwapVert
                                                            sx={{cursor: 'pointer'}}
                                                            onClick={header.column.getToggleSortingHandler()}
                                                        />
                                                }
                                                { header.column.getCanSort() && 
                                                    header.column.getIsSorted() === 'asc' && 
                                                        <North
                                                            sx={{cursor: 'pointer', fontSize: '1rem' }}
                                                            onClick={header.column.getToggleSortingHandler()}
                                                        />
                                                }
                                                { header.column.getCanSort() && 
                                                    header.column.getIsSorted() === 'desc' && 
                                                        <South
                                                            sx={{cursor: 'pointer', fontSize: '1rem'}}
                                                            onClick={header.column.getToggleSortingHandler()}
                                                        />
                                                }
                                            </Box>
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
                <br></br>
                <Pagination
                    table={table}
                />
              { /* <Box>
                    Page {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                </Box>
                <Box>
                    <Button
                        onClick={() => setPagination((prev) => ({
                            ...prev,
                            pageIndex: 0
                        }))}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'}
                    </Button>
                    <Button 
                        onClick={() => setPagination((prev) => ({
                            ...prev,
                            pageIndex: prev.pageIndex  - 1
                        }))}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </Button>

                    <Button
                        onClick={() => setPagination((prev) => ({
                            ...prev,
                            pageIndex: prev.pageIndex + 1
                        }))}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </Button>
                    <Button
                        onClick={() => setPagination((prev) => ({
                            ...prev,
                            pageIndex: table.getPageCount() - 1
                        }))}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </Button>
                </Box>*/ }
            </TableContainerStyled>
        </DetailsContainer>
    )
}