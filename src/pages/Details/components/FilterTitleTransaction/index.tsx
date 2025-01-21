import { Input, InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'

import { ColumnFiltersType } from '../../'
interface Props {
    columnFilters: ColumnFiltersType,
    handleFilterChange: (filter: {id: string, value: string | string[]}) => void,
}

export function FilterTitleTransaction({ columnFilters = [], handleFilterChange}: Props) {
    const transactionName = columnFilters.find((transaction) => transaction.id === 'title')?.value || ''

    return (
        <Input 
            sx={{ height: 'max-content'}}
            placeholder='Search transactions'
            value={transactionName}
            onChange={(e) => handleFilterChange({ id: 'title', value: e.target.value })}
            startAdornment={
                <InputAdornment position='start'>
                    <Search/>
                </InputAdornment>
            }
        />
    )
}