import { FormControl } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

type Value = {
    value: string
    name: string
}

interface PropsSelect {
    label: string,
    items: Value[],
    disable?: boolean
}

export function SelectValue({label, items, disable}: PropsSelect) {
    const [ value, setValue ] = useState('')
    
    function handleChangeCategory(event: SelectChangeEvent) {
        setValue(event.target.value)
    }
    return (
        <FormControl sx={{width: '100%'}} variant='standard'>
            <InputLabel id='select' >{label}</InputLabel>
            <Select
                labelId='select'
                id='select'
                label='Category'
                value={value}
                onChange={handleChangeCategory}
                disabled={disable}
            >   
                { items &&
                    items.map((item, index) => (
                        <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}