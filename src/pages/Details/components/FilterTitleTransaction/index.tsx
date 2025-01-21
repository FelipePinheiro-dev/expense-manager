import { Input, InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'

export type ColumnFiltersType = {
    id: string,
    value: string
}[]

interface Props {
    columnFilters: ColumnFiltersType,
    handleFilterChange: (id: string, value: string) => void,
}

export function FilterTitleTransaction({ columnFilters = [], handleFilterChange}: Props) {
    const transactionName = columnFilters.find((transaction) => transaction.id === 'title')?.value || ''

    return (
        <Input 
            sx={{ height: 'max-content'}}
            placeholder='Search transactions'
            value={transactionName}
            onChange={(e) => handleFilterChange('title', e.target.value)}
            startAdornment={
                <InputAdornment position='start'>
                    <Search/>
                </InputAdornment>
            }
        />
    )
}